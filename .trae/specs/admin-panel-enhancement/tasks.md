# Nexus Chat Admin Panel Enhancement - Implementation Plan

## Task 1: Remove Lovable integration and replace Vite config
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Remove `@lovable.dev/vite-tanstack-config` from package.json devDependencies
  - Rewrite [vite.config.ts](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/vite.config.ts) to use native Vite plugins: @vitejs/plugin-react, tailwindcss, vite-tsconfig-paths, TanStack Start Vite plugin (from @tanstack/router-plugin or @tanstack/react-start), nitro for SSR
  - Delete [lovable-error-reporting.ts](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/lib/lovable-error-reporting.ts)
  - Remove `reportLovableError` import and calls from [__root.tsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/routes/__root.tsx) (lines 13 and 43)
  - Replace error reporting with a no-op or simple console.error fallback in error boundary
- **Acceptance Criteria Addressed**: AC-1, AC-2
- **Test Requirements**:
  - `rule` TR-1.1: `grep -rni 'lovable' src/ vite.config.ts package.json | grep -v '.lovable/'` returns 0 matches. Evidence: grep output after changes.
  - `rule` TR-1.2: `npm run build` exits with code 0 and dist/ contains bundled assets. Evidence: build command stdout.
- **Notes**: This is the first task because it changes the build infrastructure; all subsequent tasks depend on a working native build config.

## Task 2: Enhance Supabase schema with admin RLS policies
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Update [schema.sql](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/supabase/schema.sql) to add admin policies for `members` table: admins can SELECT all rows, UPDATE any field (role, wallet_balance, is_active, avatar_url, names, email), INSERT, DELETE
  - Add admin policies for `feed_posts` table: admins can SELECT all rows (including inactive/draft), UPDATE any post, INSERT with `is_admin_post=true`, DELETE any post, change `status` field
  - Add or verify RLS policies use `public.has_role((select auth.uid()), 'admin')` pattern consistent with existing user_roles policy in schema.sql line 165
  - Ensure every policy uses `drop policy if exists` + `create policy` idempotent pattern
  - Add optional security definer function for admin user management if service role is not available: `admin_upsert_member()`, `admin_delete_member()`, `admin_upsert_feed_post()`
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `rule` TR-2.1: schema.sql contains at least 2 new `create policy` statements for members table with admin condition. Evidence: grep "Admin" or "admin" in schema.sql policy names.
  - `rule` TR-2.2: schema.sql contains at least 3 new `create policy` statements for feed_posts table covering admin select (all statuses), insert (is_admin_post), update (any post), delete (any post). Evidence: schema.sql content review.
  - `rule` TR-2.3: Running the SQL file twice produces no errors (idempotent). Evidence: documented inspection of `if not exists` / `drop if exists` patterns in every new statement.

## Task 3: Implement server-side admin API routes
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - Create API endpoints using TanStack Start's server function pattern (since existing AdminUsers.jsx calls `/api/admin/users` with fetch):
    - GET `/api/admin/users` - returns all members with full fields (first_name, last_name, email, member_id, nexus_id, role, wallet_balance, avatar_url, is_active, last_seen_at, created_at, auth_user_id, profile_id)
    - POST `/api/admin/users` - creates member + links to Supabase Auth (calls `supabase.auth.admin.createUser()` if service role available, otherwise inserts directly and triggers password setup email)
    - PATCH `/api/admin/users` - updates any member fields including password reset (via `supabase.auth.admin.updateUserById`), role changes, wallet_balance adjustments, is_active toggle
    - DELETE `/api/admin/users` - deletes or deactivates (soft via is_active=false + auth.users disable if possible)
    - GET `/api/admin/feeds` - returns ALL feed posts (all statuses) for admin management
    - POST `/api/admin/feeds` - creates admin feed post (is_admin_post=true)
    - PATCH `/api/admin/feeds` - updates any feed post (bypass ownership check)
    - DELETE `/api/admin/feeds` - deletes any feed post
    - POST `/api/admin/db-sync` - reads schema.sql content and executes via service role or returns instructions
  - For server-side Supabase admin access: use service role key via env var `SUPABASE_SERVICE_ROLE_KEY` to create a server-only Supabase client (NOT exposed to browser). If service role key is not set, fall back to using RPC calls to security-definer functions created in Task 2.
  - EVERY handler MUST: (1) read the Authorization: Bearer JWT header; (2) call `supabase.auth.getUser(jwt)` to validate; (3) query `members` table or `has_role()` function to verify role='admin'; (4) return 401/403 before any DB mutations
- **Acceptance Criteria Addressed**: AC-10
- **Test Requirements**:
  - `rule` TR-3.1: Every API handler has auth guard code BEFORE any SQL queries. Evidence: source inspection of each handler (getUser() then has_role('admin') check first).
  - `rule` TR-3.2: GET /api/admin/users handler selects ALL 12 required fields from members table (first_name, last_name, email, member_id, nexus_id, role, wallet_balance, avatar_url, is_active, last_seen_at, created_at, id). Evidence: source code of SELECT query.
  - `rule` TR-3.3: PATCH /api/admin/users accepts and updates role, wallet_balance, is_active, password reset fields. Evidence: source code of UPDATE query includes all fields.
  - `rule` TR-3.4: PATCH /api/admin/feeds bypasses ownership via service_role client. Evidence: server-side supabase client instantiation using SERVICE_ROLE_KEY or security-definer function.

## Task 4: Enhance Admin Users page with full CRUD and ALL user fields
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - Rewrite [AdminUsers.jsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/pages/AdminUsers.jsx) to:
    - Display ALL user fields in the list view: full_name (with avatar thumbnail), member_id/nexus_id, email, role (with badge color: admin=blue, moderator=purple, user=slate), wallet_balance (formatted as currency), is_active (green/gray badge), last_seen_at ("Online" or timestamp), created_at date
    - Add search input (name/email/nexus_id) - keep existing
    - Add role filter (all/admin/moderator/user)
    - Add status filter (all/active/inactive) - keep existing
    - Pagination or "Load more" for >50 users
    - Expandable create/edit form panel with:
      - first_name, last_name, email text inputs
      - nexus_id/member_id input (with auto-generate button)
      - Password input (label "New password" when editing, empty = no change)
      - Role dropdown: user, moderator, admin
      - wallet_balance numeric input (with +/- quick adjust buttons: +10, +50, +100, -10, -50, Clear)
      - avatar_url text input (or file upload option using supabase storage 'avatars' bucket)
      - is_active checkbox
      - Save/Cancel buttons
    - Delete button with confirmation dialog (use Radix AlertDialog from existing components/ui/alert-dialog.tsx or native confirm)
    - Toggle active button inline
    - Show loading skeleton or spinner during fetches
    - Show inline success/error message for each operation
- **Acceptance Criteria Addressed**: AC-4, AC-5, AC-6, AC-7
- **Test Requirements**:
  - `rule` TR-4.1: Rendered user row JSX includes elements for: avatar, full_name, member_id, email, role badge, wallet_balance, is_active badge, last_seen_at, created_at. Evidence: JSX source of map() rendering users.
  - `rule` TR-4.2: Edit form has explicit input elements for: first_name, last_name, email, nexus_id, password, role select, wallet_balance, avatar_url, is_active checkbox. Evidence: form JSX source.
  - `rule` TR-4.3: wallet_balance increment/decrement quick buttons (+10, +50, etc.) exist and update the form state. Evidence: button click handlers source.
  - `rubric` TR-4.4: UI consistency dimension; scale 1-5; anchors 1=broke style, 3=functional, 5=perfectly matches AdminDashboard/AdminSettings dark slate theme; threshold >=4; evidence: visual source comparison of colors, border radii, spacing, fonts.

## Task 5: Implement Admin Feed Management page
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - Create new page component: `src/pages/AdminFeeds.jsx` - Admin feed/news/events management
  - Create route file: `src/routes/admin/feeds.tsx` using the same pattern as [users.tsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/routes/admin/users.tsx)
  - Add "Feeds" navigation link to all admin pages' nav bars (AdminDashboard, AdminUsers, AdminSettings, AdminFeeds itself): between Users and Support or after Settings
  - AdminFeeds page features:
    - List ALL feed posts (active, inactive, draft) with: author name, is_admin_post badge, type badge, status badge, content preview, likes count, comments count, created_at
    - Filters: status (all/active/draft/inactive), type (all/news/event/text/announcement), author search
    - Create new post form with:
      - Type select: news, event, text, announcement
      - Status select: active (published immediately), draft (saved not published)
      - Content textarea (multi-line)
      - Optional: user_name override (default "Nexus Admin"), user_avatar_url
      - Mark as admin post checkbox (default checked, disabled for non-admins but only admins see this page)
      - Create Post button
    - Edit existing post in-place or modal: same fields as create + allow toggling is_admin_post, allow changing profile_id ownership if needed
    - Delete button with confirm dialog
    - Toggle status button (active <-> inactive or draft)
    - Show feed preview next to form (optional, nice-to-have)
  - Update feeds.js `normalizeFeed` if needed to handle new type values (news/event/announcement)
- **Acceptance Criteria Addressed**: AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-5.1: New route file `src/routes/admin/feeds.tsx` exists and exports Route for /admin/feeds. Evidence: file exists, content follows other admin route files pattern.
  - `rule` TR-5.2: Create Post form contains: type select with news/event options, status select, content textarea, is_admin_post flag. Evidence: form JSX source.
  - `rule` TR-5.3: Submitting create form calls POST /api/admin/feeds and on success prepends result to list. Evidence: submit handler source code.
  - `rule` TR-5.4: Each post row has edit and delete action buttons that call PATCH/DELETE /api/admin/feeds. Evidence: action buttons source.
  - `rule` TR-5.5: Nav links "Feeds" appear in AdminDashboard, AdminUsers, AdminSettings nav bars. Evidence: nav JSX in all three pages updated.
  - `rubric` TR-5.6: AdminFeeds design consistency; scale 1-5; anchors 1=style mismatch, 3=ok, 5=matches AdminUsers dark slate theme exactly (colors, rounded-2xl, border-slate-800, bg-slate-900, font sizes); threshold >=4; evidence: source comparison.

## Task 6: Add admin feeds navigation and verify integration
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 5
- **Description**:
  - Ensure nav bar in AdminDashboard (line 48-53), AdminUsers (line 87), AdminSettings (line 56-61) include a Feeds link pointing to /admin/feeds
  - In the existing nav order, insert Feeds either before Support or after Settings, using the same pattern: `text-slate-500 hover:text-slate-900 dark:hover:text-white` for non-active, and conditional `font-semibold text-blue-600` for active link on AdminFeeds
  - Test end-to-end flow: login as admin → create user → adjust wallet → create admin feed post → verify post appears on /app/feeds with Admin badge
- **Acceptance Criteria Addressed**: AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-6.1: All 3 existing admin pages (Dashboard, Users, Settings) have a `<Link to="/admin/feeds">Feeds</Link>` in their nav. Evidence: grep "admin/feeds" across 4 admin pages returns 4+ matches.
  - `rule` TR-6.2: AdminFeeds page's nav has Feeds marked active (font-semibold + blue color). Evidence: nav JSX of AdminFeeds.

## Task 7: Run smoke tests and fix build issues
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 1, 2, 3, 4, 5, 6
- **Description**:
  - Run `npm install` to ensure dependencies are correct after removing Lovable package
  - Run `npm run lint` and fix all ESLint errors (unused imports, etc.)
  - Run `npx tsc --noEmit` and fix all TypeScript errors (may need type adjustments for API responses, form state)
  - Run `npm run build` and fix any build-time errors (Vite config issues, missing plugins, etc.)
  - If any command fails, iterate on fixes until all pass
  - Optionally run `npx eslint . --fix` for auto-fixable issues first
- **Acceptance Criteria Addressed**: AC-11, AC-2
- **Test Requirements**:
  - `rule` TR-7.1: `npm run lint` exits with code 0. Evidence: command output showing "0 errors" or exit code.
  - `rule` TR-7.2: `npx tsc --noEmit` exits with code 0. Evidence: command output with no error messages.
  - `rule` TR-7.3: `npm run build` exits with code 0 and outputs build summary showing assets. Evidence: build stdout showing "✓ built" or equivalent success message.
- **Notes**: Expect this task to require several iterations as issues from Tasks 1-6 surface. Set Status=in_progress until all 3 pass.

## Task 8: UI/UX polish pass for Admin Panel quality
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Tasks 4, 5, 6
- **Description**:
  - Ensure all admin pages have consistent dark slate theme: bg-slate-950/50, border-slate-800, rounded-2xl/28px, text-white/slate-300, blue-600 accents
  - Ensure all forms have consistent input styling: rounded-lg, border-slate-700, bg-slate-950, focus:border-blue-500
  - Ensure all buttons have consistent styling: primary (bg-blue-600 hover:bg-blue-500 rounded-lg/lg), secondary (border border-slate-700 p-2 rounded-lg)
  - Add loading states (spinner or skeleton) for every async fetch operation in admin pages
  - Add success/error toast or inline message feedback after every save/delete/create (use existing `sonner` if available, or keep inline messages pattern already used in AdminUsers `message` state)
  - Ensure responsive layout on mobile (<640px): forms stack vertically, tables become cards or horizontal scroll
- **Acceptance Criteria Addressed**: AC-12
- **Test Requirements**:
  - `rubric` TR-8.1: Admin panel UI quality dimension; scale 1-5; anchors 1=inconsistent/loading missing, 3=mostly consistent basic feedback, 5=pixel-perfect theme match + loaders everywhere + all destructive actions have confirm; threshold >=4; evidence: source review of all admin page components.
