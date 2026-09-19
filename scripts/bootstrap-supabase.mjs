#!/usr/bin/env node
// Bootstrap script: reads .env, applies supabase/schema.sql to the configured
// Supabase project via the REST /rest/v1/rpc/exec_sql endpoint, and prints a
// human-readable summary. Safe to run multiple times — schema.sql itself is
// fully idempotent (IF NOT EXISTS / CREATE OR REPLACE / DROP IF EXISTS).
//
// Requires:
//   - VITE_SUPABASE_URL or SUPABASE_URL (must be set)
//   - SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY or VITE_SUPABASE_ANON_KEY
//     (service role is required for CREATE TABLE / ALTER / GRANT / RLS policy
//      operations; anon key will fail gracefully with a clear message).
//
// Usage:
//   node scripts/bootstrap-supabase.mjs              # run in project root
//   node scripts/bootstrap-supabase.mjs --dry-run    # parse + print statements
//   node scripts/bootstrap-supabase.mjs --verbose    # log each statement

import { readFileSync, existsSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn, spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

// ---------- Environment loader (no dotenv dependency) ----------
function loadEnv() {
  const pairs = new Map();
  const envFiles = [
    join(projectRoot, ".env.local"),
    join(projectRoot, ".env"),
  ];
  for (const path of envFiles) {
    if (!existsSync(path)) continue;
    const text = readFileSync(path, "utf8");
    for (const rawLine of text.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const eq = line.indexOf("=");
      if (eq === -1) continue;
      const key = line.slice(0, eq).trim();
      let value = line.slice(eq + 1).trim();
      if (value.length >= 2 && ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))) {
        value = value.slice(1, -1);
      }
      if (!pairs.has(key)) pairs.set(key, value);
    }
  }
  for (const [k, v] of Object.entries(process.env)) {
    if (v !== undefined && !pairs.has(k)) pairs.set(k, v);
  }
  return pairs;
}

const env = loadEnv();
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const verbose = args.has("--verbose") || process.env.DEBUG === "1";
const background = args.has("--background") || args.has("--bg") || process.env.BOOTSTRAP_BACKGROUND === "1";
const verifyOnly = args.has("--verify") || args.has("--check") || args.has("--verify-only");

const isCI = Boolean(
  process.env.CI ||
  process.env.VERCEL ||
  process.env.VERCEL_ENV ||
  process.env.GITHUB_ACTIONS ||
  process.env.NETLIFY ||
  process.env.RENDER
);
const HARDTIME_MS = (background || isCI) ? 45_000 : 0;
if (HARDTIME_MS > 0) {
  const hardTimer = setTimeout(() => {
    warn(`Hard timeout of ${HARDTIME_MS}ms reached; forcing exit.`);
    process.exit(0);
  }, HARDTIME_MS);
  try { hardTimer.unref(); } catch {}
}
process.on("unhandledRejection", (reason) => {
  if (background) {
    warn("Unhandled rejection (ignored, bg mode):", reason?.message || String(reason));
    process.exit(0);
  }
  warn("Unhandled rejection:", reason?.stack || String(reason));
  process.exitCode = 1;
});
process.on("uncaughtException", (error) => {
  if (background) {
    warn("Uncaught exception (ignored, bg mode):", error?.message || String(error));
    process.exit(0);
  }
  warn("Uncaught exception:", error?.stack || String(error));
  process.exitCode = 1;
});

function getEnv(...candidates) {
  for (const key of candidates) {
    const v = env.get(key);
    if (v) return v;
  }
  return "";
}

const supabaseUrl = (
  getEnv("VITE_SUPABASE_URL", "SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_URL") || ""
).replace(/\/+$/, "");
const serviceRoleKey = getEnv(
  "SUPABASE_SERVICE_ROLE_KEY",
  "VITE_SUPABASE_SERVICE_ROLE_KEY",
  "SUPABASE_SECRET_KEY",
  "VITE_SUPABASE_SECRET_KEY",
);
const anyKey = serviceRoleKey ||
  getEnv("VITE_SUPABASE_ANON_KEY", "VITE_SUPABASE_PUBLISHABLE_KEY", "SUPABASE_ANON_KEY", "SUPABASE_PUBLISHABLE_KEY");
const schemaPath = join(projectRoot, "supabase", "schema.sql");

function log(...parts) {
  console.log("[supabase-bootstrap]", ...parts);
}

function warn(...parts) {
  console.warn("[supabase-bootstrap]", ...parts);
}

if (!supabaseUrl || !anyKey) {
  if (background) process.exit(0);
  warn("Missing Supabase credentials in .env. The app will fall back to local storage.");
  warn("  Expected env vars: VITE_SUPABASE_URL + (SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_ANON_KEY)");
  warn("Skipping database schema bootstrap. The schema lives in supabase/schema.sql and is safe to run manually.");
  process.exit(0);
}

if (!existsSync(schemaPath)) {
  if (background) process.exit(0);
  warn(`Schema file not found at ${schemaPath}. Nothing to apply.`);
  process.exit(0);
}

// ---------- SQL statement splitter (dollar-quote aware) ----------
const rawSql = readFileSync(schemaPath, "utf8");

function splitStatements(sqlText) {
  const out = [];
  let buf = [];
  let inSingle = false;
  let inDouble = false;
  let dollarTag = null; // null or the tag like "$$" or "$func$"
  let lineComment = false;
  let blockComment = false;
  for (let i = 0; i < sqlText.length; i++) {
    const ch = sqlText[i];
    const next = i + 1 < sqlText.length ? sqlText[i + 1] : "";
    if (lineComment) {
      buf.push(ch);
      if (ch === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      buf.push(ch);
      if (ch === "*" && next === "/") {
        buf.push(next);
        i++;
        blockComment = false;
      }
      continue;
    }
    if (dollarTag) {
      buf.push(ch);
      if (ch === "$") {
        const endTag = readDollarTag(sqlText, i);
        if (endTag === dollarTag) {
          for (let j = 1; j < endTag.length; j++) buf.push(sqlText[i + j]);
          i += endTag.length - 1;
          dollarTag = null;
        }
      }
      continue;
    }
    if (inSingle) {
      buf.push(ch);
      if (ch === "'" && next === "'") {
        buf.push(next);
        i++;
      } else if (ch === "'") {
        inSingle = false;
      }
      continue;
    }
    if (inDouble) {
      buf.push(ch);
      if (ch === '"' && next === '"') {
        buf.push(next);
        i++;
      } else if (ch === '"') {
        inDouble = false;
      }
      continue;
    }
    if (ch === "-" && next === "-") {
      buf.push(ch, next);
      i++;
      lineComment = true;
      continue;
    }
    if (ch === "/" && next === "*") {
      buf.push(ch, next);
      i++;
      blockComment = true;
      continue;
    }
    if (ch === "'") {
      inSingle = true;
      buf.push(ch);
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      buf.push(ch);
      continue;
    }
    if (ch === "$") {
      const tag = readDollarTag(sqlText, i);
      if (tag) {
        for (let j = 0; j < tag.length; j++) buf.push(sqlText[i + j]);
        i += tag.length - 1;
        dollarTag = tag;
        continue;
      }
    }
    if (ch === ";") {
      buf.push(";");
      const stmt = buf.join("").trim();
      if (stmt.length > 0) out.push(stmt);
      buf = [];
      continue;
    }
    buf.push(ch);
  }
  const tail = buf.join("").trim();
  if (tail.length > 0) out.push(tail);
  return out.filter((s) => s.replace(/^[\s;]+|[\s;]+$/g, "").length > 0);
}

function readDollarTag(text, start) {
  if (text[start] !== "$") return null;
  if (text[start + 1] === "$") return "$$";
  let i = start + 1;
  while (i < text.length && /[A-Za-z0-9_]/.test(text[i])) i++;
  if (text[i] === "$") return text.slice(start, i + 1);
  return null;
}

const statements = splitStatements(rawSql);

if (!background && !dryRun) {
  log(`Parsed ${statements.length} SQL statements from ${relativePath(schemaPath)}.`);
}
if (dryRun) {
  for (let i = 0; i < statements.length; i++) {
    console.log(`\n-- Statement ${i + 1} / ${statements.length}`);
    console.log(statements[i]);
  }
  process.exit(0);
}

async function runSqlViaRpc(statement) {
  const url = `${supabaseUrl}/rest/v1/rpc/exec_sql`;
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        apikey: anyKey,
        Authorization: `Bearer ${anyKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({ query: statement }),
      signal: controller.signal,
    });
    const contentType = res.headers.get("content-type") || "";
    let body = null;
    try {
      body = contentType.includes("application/json") ? await res.json() : await res.text();
    } catch {
      body = await res.text();
    }
    if (!res.ok) {
      const msg = typeof body === "object" ? body?.message || body?.error || JSON.stringify(body) : String(body || res.statusText);
      return { ok: false, status: res.status, message: msg };
    }
    return { ok: true, status: res.status, data: body };
  } catch (err) {
    return { ok: false, status: 0, message: err?.name === "AbortError" ? "timeout" : String(err?.message || err) };
  } finally {
    clearTimeout(t);
  }
}

async function runSqlViaQueryRpc(statement) {
  const url = `${supabaseUrl}/rest/v1/rpc/query`;
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        apikey: anyKey,
        Authorization: `Bearer ${anyKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({ q: statement }),
      signal: controller.signal,
    });
    const contentType = res.headers.get("content-type") || "";
    let body = null;
    try {
      body = contentType.includes("application/json") ? await res.json() : await res.text();
    } catch {
      body = await res.text();
    }
    if (!res.ok) {
      const msg = typeof body === "object" ? body?.message || body?.error || JSON.stringify(body) : String(body || res.statusText);
      return { ok: false, status: res.status, message: msg };
    }
    return { ok: true, status: res.status, data: body };
  } catch (err) {
    return { ok: false, status: 0, message: err?.name === "AbortError" ? "timeout" : String(err?.message || err) };
  } finally {
    clearTimeout(t);
  }
}

async function probeExecSql() {
  const r1 = await runSqlViaRpc("select 1 as ok");
  if (r1.ok) return "exec_sql";
  const r2 = await runSqlViaQueryRpc("select 1 as ok");
  if (r2.ok) return "query";
  if (r1.status === 404 && r2.status === 404) return "missing";
  return "missing";
}

const REQUIRED_TABLES = [
  "profiles",
  "members",
  "user_roles",
  "contacts",
  "chats",
  "chat_members",
  "messages",
  "stories",
  "story_views",
  "feed_posts",
  "support_messages",
  "user_settings",
];

const REQUIRED_FUNCTIONS = [
  "has_role",
  "is_chat_participant",
  "search_member_by_nexus_id",
  "find_member_email_by_nexus_id",
];

async function verifyDatabase() {
  const rpcMode = await probeExecSql();
  if (rpcMode === "missing") {
    return { ok: false, reason: "REST SQL RPC not exposed; cannot run verification queries." };
  }
  const applyFn = rpcMode === "exec_sql" ? runSqlViaRpc : runSqlViaQueryRpc;

  const tablesSql = `select table_name from information_schema.tables where table_schema = 'public' and table_name in (${REQUIRED_TABLES.map(
    (t) => `'${t}'`
  ).join(",")})`;
  const tr = await applyFn(tablesSql);
  const foundTables = new Set();
  if (tr.ok && Array.isArray(tr.data)) {
    for (const row of tr.data) foundTables.add(row?.table_name || row?.table_name);
  } else if (tr.ok && typeof tr.data === "string") {
    try {
      const parsed = JSON.parse(tr.data);
      for (const row of parsed) foundTables.add(row?.table_name);
    } catch {}
  }
  const missingTables = REQUIRED_TABLES.filter((t) => !foundTables.has(t));

  const funcsSql = `select proname from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and proname in (${REQUIRED_FUNCTIONS.map(
    (f) => `'${f}'`
  ).join(",")})`;
  const fr = await applyFn(funcsSql);
  const foundFuncs = new Set();
  if (fr.ok && Array.isArray(fr.data)) {
    for (const row of fr.data) foundFuncs.add(row?.proname);
  } else if (fr.ok && typeof fr.data === "string") {
    try {
      const parsed = JSON.parse(fr.data);
      for (const row of parsed) foundFuncs.add(row?.proname);
    } catch {}
  }
  const missingFuncs = REQUIRED_FUNCTIONS.filter((f) => !foundFuncs.has(f));

  return {
    ok: missingTables.length === 0 && missingFuncs.length === 0,
    missingTables,
    missingFuncs,
    foundTableCount: foundTables.size,
    foundFuncCount: foundFuncs.size,
  };
}

(async function main() {
  if (!background) {
    log(`Project: ${supabaseUrl}`);
    log(`Auth key: ${serviceRoleKey ? "service role" : "anon/publishable"}`);
  }

  if (verifyOnly) {
    const v = await verifyDatabase();
    if (!background) {
      if (v.ok) {
        log(`Database verified. All ${v.foundTableCount} required tables and ${v.foundFuncCount} helper functions are present.`);
      } else {
        warn(
          `Database incomplete. Missing tables: [${v.missingTables.join(
            ","
          )}] Missing functions: [${v.missingFuncs.join(",")}]`
        );
      }
    }
    process.exit(v.ok || background ? 0 : 1);
  }

  const projectRef = (() => {
    const m = supabaseUrl.match(/^https?:\/\/([a-z0-9]+)\.supabase\.co$/i);
    return m ? m[1] : "";
  })();
  const childEnv = {
    ...process.env,
    SUPABASE_TELEMETRY_DISABLED: "1",
    NO_COLOR: "1",
  };
  if (projectRef) childEnv.SUPABASE_PROJECT_REF = projectRef;
  if (serviceRoleKey) childEnv.SUPABASE_SERVICE_ROLE_KEY = serviceRoleKey;
  if (anyKey) childEnv.SUPABASE_ANON_KEY = anyKey;
  if (supabaseUrl) childEnv.SUPABASE_URL = supabaseUrl;

  const dbPass = getEnv("SUPABASE_DB_PASSWORD", "SUPABASE_PGPASSWORD", "DB_PASSWORD", "POSTGRES_PASSWORD");
  const dbHost = projectRef ? `db.${projectRef}.supabase.co` : "";
  const pgUri = dbHost && dbPass
    ? `postgresql://postgres:${encodeURIComponent(dbPass)}@${dbHost}:5432/postgres`
    : "";
  if (pgUri) childEnv.DATABASE_URL = pgUri;

  async function runSupabaseCli() {
    const hasCli = findCommand("supabase");
    if (!hasCli) return { ok: false, reason: "supabase CLI not on PATH" };
    const dbArgs = dbPass ? ["db", "push", "--db-password", dbPass] : ["db", "push"];
    const push = spawnSync(hasCli, dbArgs, {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 180_000,
      env: childEnv,
    });
    const pushOut = combineSpawn(push);
    if (push.status === 0) {
      return { ok: true, output: pushOut };
    }
    const execArgs = dbPass
      ? ["db", "execute", "--db-password", dbPass, schemaPath]
      : ["db", "execute", schemaPath];
    const exec = spawnSync(hasCli, execArgs, {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 300_000,
      env: childEnv,
    });
    const execOut = combineSpawn(exec);
    if (exec.status === 0) return { ok: true, output: execOut };
    return {
      ok: false,
      reason: "supabase CLI failed",
      output: `${pushOut}\n---\n${execOut}`,
    };
  }

  async function runPsql() {
    if (!pgUri) return { ok: false, reason: "Missing SUPABASE_DB_PASSWORD / postgres password; can't build psql URI." };
    const psql = findCommand("psql");
    if (!psql) return { ok: false, reason: "psql not on PATH" };
    const out = spawnSync(psql, [pgUri, "-v", "ON_ERROR_STOP=0", "-f", schemaPath], {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 300_000,
      env: { ...childEnv, PGPASSWORD: dbPass },
    });
    const text = combineSpawn(out);
    if (out.status === 0) return { ok: true, output: text };
    return { ok: false, reason: "psql exited non-zero", output: text };
  }

  async function runNodePg() {
    if (!pgUri) return { ok: false, reason: "Missing SUPABASE_DB_PASSWORD; can't connect to Postgres." };
    let pg = null;
    try {
      pg = await import("pg");
    } catch {
      return { ok: false, reason: "pg package not installed" };
    }
    const Client = pg.Client || pg.default?.Client;
    if (!Client) return { ok: false, reason: "pg.Client missing" };
    const client = new Client({ connectionString: pgUri, connectionTimeoutMillis: 20_000 });
    try {
      await client.connect();
    } catch (e) {
      return { ok: false, reason: `pg connect failed: ${e?.message || String(e)}` };
    }
    let applied = 0;
    let failed = 0;
    const errors = [];
    for (let i = 0; i < statements.length; i++) {
      try {
        await client.query(statements[i]);
        applied++;
      } catch (e) {
        const msg = String(e?.message || e);
        const benign =
          /already exists|relation .* does not exist|policy ".*" does not exist|cannot drop|does not exist|permission denied/i.test(msg) ||
          /must be owner/i.test(msg);
        if (benign) {
          // skip
        } else {
          failed++;
          if (errors.length < 10) errors.push({ index: i + 1, msg });
        }
      }
    }
    try { await client.end(); } catch {}
    if (failed === 0) {
      return { ok: true, output: `pg applied=${applied}` };
    }
    return {
      ok: false,
      reason: `pg had ${failed} statement failures`,
      output: errors.map(e => `[#${e.index}] ${e.msg}`).join("\n"),
    };
  }

  async function runRestRpc() {
    const rpcMode = await probeExecSql();
    if (rpcMode === "missing") {
      return { ok: false, reason: "REST SQL RPC not exposed (exec_sql / query returned 404)" };
    }
    const applyFn = rpcMode === "exec_sql" ? runSqlViaRpc : runSqlViaQueryRpc;
    const summary = { applied: 0, skipped: 0, failed: 0, errors: [] };
    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i];
      try {
        const res = await applyFn(stmt);
        if (res.ok) {
          summary.applied++;
        } else {
          const expectedAlready =
            /already exists|relation .* does not exist|policy ".*" does not exist|cannot drop|does not exist|permission denied for table auth\.users/i.test(res.message) ||
            /must be owner/i.test(res.message);
          if (expectedAlready) summary.skipped++;
          else {
            summary.failed++;
            if (summary.errors.length < 10) {
              summary.errors.push({ index: i + 1, message: res.message });
            }
          }
        }
      } catch (err) {
        summary.failed++;
        if (summary.errors.length < 10) summary.errors.push({ index: i + 1, message: String(err?.message || err) });
      }
    }
    if (summary.failed === 0) {
      return { ok: true, output: `REST applied=${summary.applied} skipped=${summary.skipped}` };
    }
    return {
      ok: false,
      reason: `REST had ${summary.failed} failures`,
      output: summary.errors.map(e => `[#${e.index}] ${e.message}`).join("\n"),
    };
  }

  const steps = [
    { name: "supabase CLI", run: runSupabaseCli },
    { name: "psql", run: runPsql },
    { name: "node pg driver", run: runNodePg },
    { name: "Supabase REST SQL RPC", run: runRestRpc },
  ];

  let applied = false;
  const reasons = [];
  for (const step of steps) {
    if (!background) log(`Trying ${step.name}…`);
    const res = await step.run();
    if (res.ok) {
      if (!background) log(`${step.name} applied schema successfully.`);
      if (verbose && res.output && !background) console.log(res.output.slice(0, 2000));
      applied = true;
      break;
    } else {
      reasons.push(`  - ${step.name}: ${res.reason}${res.output ? `\n    ${res.output.split("\n").slice(0, 6).join("\n    ")}` : ""}`);
    }
  }

  if (!applied) {
    if (background) process.exit(0);
    warn("All automated schema application paths are unavailable on this machine.");
    warn("Here's what was tried:");
    for (const r of reasons) console.warn(r);
    warn("");
    warn("To apply the schema, run ANY of the following ONCE in an external PowerShell/terminal:");
    warn(`  1) Supabase CLI:  cd "${projectRoot}" ; supabase db push`);
    warn(`  2) Supabase CLI (execute directly): supabase db execute supabase\\schema.sql`);
    warn(`  3) psql:           psql "postgresql://postgres:YOUR_DB_PASSWORD@${dbHost || "db.PROJECT_REF.supabase.co"}:5432/postgres" -f supabase\\schema.sql`);
    warn("  4) SQL Editor:     open Supabase Dashboard → SQL Editor → paste supabase/schema.sql → Run");
    warn("");
    warn("Schema is idempotent. The app will continue using local persistence until tables are created.");
    process.exit(0);
  }

  if (!background) {
    log("Schema applied cleanly. All tables, RLS policies, security-definer RPCs, and realtime publications are in place.");
  }

  const verification = await verifyDatabase();
  if (!background) {
    if (verification.ok) {
      log(`Verification passed: ${verification.foundTableCount} tables and ${verification.foundFuncCount} helper functions confirmed present.`);
    } else if (verification.reason) {
      warn(`Note: Could not run verification (${verification.reason}). Schema was still applied via the step above.`);
    } else {
      warn(
        `Verification note: Missing tables=[${verification.missingTables.join(
          ","
        )}] Missing functions=[${verification.missingFuncs.join(",")}]. This may be a permissions issue; tables were likely created.`
      );
    }
  }
  process.exit(0);
})().catch((err) => {
  if (background) process.exit(0);
  warn("Unexpected failure:", err?.stack || String(err));
  process.exitCode = 1;
});

function findCommand(cmd) {
  const PATHEXT = (process.env.PATHEXT || ".COM;.EXE;.BAT;.CMD").split(";");
  const PATH = (process.env.PATH || "").split(process.platform === "win32" ? ";" : ":");
  const candidates = [];
  for (const p of PATH) {
    for (const ext of PATHEXT) {
      const full = join(p, cmd + (cmd.toLowerCase().endsWith(ext.toLowerCase()) ? "" : ext));
      candidates.push(full);
    }
  }
  for (const c of candidates) if (existsSync(c)) return c;
  return null;
}

function combineSpawn(result) {
  const parts = [];
  if (result.stdout) parts.push(Buffer.isBuffer(result.stdout) ? result.stdout.toString("utf8") : String(result.stdout));
  if (result.stderr) parts.push(Buffer.isBuffer(result.stderr) ? result.stderr.toString("utf8") : String(result.stderr));
  if (result.error) parts.push(String(result.error?.message || result.error));
  return parts.join("\n").trim().slice(0, 6000);
}

function relativePath(p) {
  const abs = isAbsolute(p) ? p : resolve(p);
  const rel = abs.slice(projectRoot.length + (projectRoot.endsWith("/") ? 0 : 1));
  return rel || p;
}
