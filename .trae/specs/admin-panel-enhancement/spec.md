# Nexus Chat Admin Panel Enhancement - Product Requirements Document

## Overview
- **Summary**: Remove Lovable integration watermark, enhance Supabase schema with admin RLS policies, implement a full Admin Panel with complete user CRUD (including wallet balance, avatar, roles, active status, etc.), and add admin-initiated live feed news/events posting capability. Run smoke tests to verify build integrity.
- **Purpose**: Provide administrators full control over user management and the ability to broadcast news/events to all users via the live feed, while removing third-party Lovable branding dependencies.
- **Target Users**: System administrators and moderators of the Nexus Chat platform.

## Goals
1. Remove all Lovable integration/watermark code (error reporting module, vite config dependency, and imports)
2. Ensure Supabase database schema is properly configured with admin RLS policies for user and feed management
3. Implement complete Admin Panel user CRUD with access to ALL user fields: first_name, last_name, email, member_id/nexus_id, role, wallet_balance, avatar_url, is_active, created_at, password reset
4. Implement Admin Panel live feed news & events management: create, edit, delete admin posts (is_admin_post=true) with type selection (news/event)
5. Verify all builds pass: lint, typecheck, production build (smoke test)

## Non-Goals
- Implementing a custom authentication system (continue using Supabase Auth)
- Implementing real-time chat moderation features beyond user activation/deactivation
- Adding payment processing for wallet balance adjustments
- Creating a mobile-native application (keep existing web-based responsive design)
- Writing comprehensive unit test suites — only smoke tests for build verification are in scope

## Background & Context
The codebase currently has:
- A partial Admin Panel skeleton in [AdminUsers.jsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/pages/AdminUsers.jsx) that calls `/api/admin/users` endpoints which **do not yet exist**
- [AdminDashboard.jsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/pages/AdminDashboard.jsx) shows basic read-only stats
- [AdminSettings.jsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/pages/AdminSettings.jsx) has a DB sync trigger button but missing the corresponding API handler
- Lovable integration exists via: `@lovable.dev/vite-tanstack-config` in [package.json](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/package.json), [vite.config.ts](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/vite.config.ts), [lovable-error-reporting.ts](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/lib/lovable-error-reporting.ts), and imports in [__root.tsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/routes/__root.tsx)
- Supabase schema in [schema.sql](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/supabase/schema.sql) covers members/profiles but is missing admin-specific RLS policies for feed_posts management
- Feed system exists in [feeds.js](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/lib/feeds.js) and [FeedsPage.jsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/pages/FeedsPage.jsx) with read-only public consumption; no admin creation UI

## Functional Requirements
- **FR-1 (Lovable Removal)**: All Lovable-related imports, modules, and vite plugin dependencies are removed. The app must build and run without `@lovable.dev/vite-tanstack-config` and without calling `reportLovableError()`.
- **FR-2 (Supabase Schema)**: Admin-specific RLS policies exist allowing admins full CRUD on `members` table and full CRUD on `feed_posts` (including `is_admin_post` flag and `status` toggling). The schema.sql file contains these policies idempotently.
- **FR-3 (Admin User CRUD - Read)**: Admin Users page displays ALL user fields: full_name, first_name, last_name, email, member_id, nexus_id, role, wallet_balance, avatar_url, is_active, last_seen_at, created_at. Supports search by name/nexus_id/email and filter by role/active status.
- **FR-4 (Admin User CRUD - Create)**: Admin can create new users with all fields: first_name, last_name, email, password, member_id/nexus_id (auto-generated or custom), role, wallet_balance, avatar_url, is_active. New users are properly linked to Supabase Auth.
- **FR-5 (Admin User CRUD - Update)**: Admin can MODIFY and ADJUST all user details: change first/last name, email, reset password, change role (user/moderator/admin), adjust wallet_balance (increase/decrease), update avatar_url, toggle is_active.
- **FR-6 (Admin User CRUD - Delete)**: Admin can hard-delete or permanently deactivate users with confirmation dialog.
- **FR-7 (Admin Feed Posts - Create)**: Admin can initiate live feed posts marked as `is_admin_post=true`. Post form includes: type selector (news, event, text, announcement), content, user_name (defaults to "Admin"), status (active/draft).
- **FR-8 (Admin Feed Posts - Edit/Delete)**: Admin can edit or delete ANY feed post (admin and user posts alike), including toggling status between active/inactive/draft.
- **FR-9 (API Routes)**: Server-side API routes exist under `/api/admin/*` for: (a) users CRUD - GET/POST/PATCH/DELETE /api/admin/users; (b) feed posts CRUD - GET/POST/PATCH/DELETE /api/admin/feeds; (c) db-sync POST /api/admin/db-sync. All routes validate admin role via Supabase Auth JWT before executing.
- **FR-10 (Smoke Tests)**: `npm run lint`, `tsc --noEmit`, and `npm run build` all complete with exit code 0.

## Non-Functional Requirements
- **NFR-1 (Security)**: All admin API routes must validate the request JWT via Supabase and verify the caller has `role='admin'` in the members table or via `has_role()` function before executing any mutation. No direct client-side Supabase mutations for admin operations — they MUST go through server API routes.
- **NFR-2 (Performance)**: Admin Users list supports pagination or virtual rendering for >1000 users without UI freeze.
- **NFR-3 (Usability)**: Admin Panel UI follows the existing dark/slate design system used in current AdminUsers.jsx for consistency. All destructive actions require confirmation dialogs.
- **NFR-4 (Build Cleanliness)**: No unused imports, no dead code, no TypeScript errors in the final build. ESLint reports 0 errors.
- **NFR-5 (Schema Idempotency)**: All schema SQL additions use `if not exists`, `add column if not exists`, `drop policy if exists` / `create policy` patterns — safe to run multiple times.

## Constraints
- **Technical**: Must use existing Supabase client library (`@supabase/supabase-js`). Cannot introduce new ORM frameworks. Admin API routes MUST use the Supabase service role key or security definer functions to bypass RLS for admin operations (since RLS restricts users to their own rows).
- **Business**: Cannot break existing user authentication flow. The Supabase Auth integration in [AuthContext.jsx](file:///c:/Users/User$/Downloads/nexus-heartbeat-06-main/nexus-heartbeat-06-main/src/lib/AuthContext.jsx) must remain functional after Lovable removal.
- **Dependencies**: The `@lovable.dev/vite-tanstack-config` package must be replaced with a native Vite + TanStack Start configuration. All plugins currently provided by the Lovable config (TanStack devtools, tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, VITE_* env injection, @ path alias, React dedupe) must be explicitly configured in the new vite.config.ts.

## Assumptions
- The Supabase service role key will be provided via environment variable `SUPABASE_SERVICE_ROLE_KEY` on the server side for admin API operations. If unavailable, admins will use a security-definer PostgreSQL function approach instead.
- The existing members table schema with fields `wallet_balance`, `avatar_url`, `is_active`, `last_seen_at` already exists (confirmed in schema.sql lines 58-72).
- The user has an existing Supabase project with the schema already applied; schema additions should be SQL that can be run on top of existing tables.

## Open Questions
- [ ] None — all requirements are clear from codebase analysis and user request

## Acceptance Criteria

### AC-1: Lovable watermark and integration fully removed
- **Type**: `rule`
- **Given**: The source code of the project
- **When**: Searching for the pattern "lovable" (case-insensitive) in src/, vite.config.ts, and package.json (excluding .lovable/ project folder)
- **Then**: Zero matches exist in source code imports, module usage, vite plugins, and package.json dependencies/devDependencies
- **Pass Condition**: `grep -ri 'lovable' src/ vite.config.ts package.json | grep -v '.lovable/'` returns empty; package.json has no `@lovable.dev/*` entries
- **Evidence**: Grep command output + diff of removed files

### AC-2: Vite config works without Lovable plugin
- **Type**: `rule`
- **Given**: The modified vite.config.ts with native TanStack + Vite setup
- **When**: Running `npm run build`
- **Then**: Build completes successfully with exit code 0, producing dist/ output
- **Pass Condition**: Build exit code == 0 and dist/assets directory contains bundled JS/CSS
- **Evidence**: Build command stdout/stderr

### AC-3: Supabase schema includes admin RLS policies for members CRUD
- **Type**: `rule`
- **Given**: The updated supabase/schema.sql
- **When**: Inspecting the members and feed_posts table policies section
- **Then**: Policies exist that: (a) allow admins to SELECT all members rows; (b) allow admins to UPDATE any member's fields (including role, wallet_balance, is_active); (c) allow admins to INSERT/DELETE members; (d) allow admins full CRUD on feed_posts including is_admin_post and status fields
- **Pass Condition**: schema.sql contains `create policy` statements for members and feed_posts with `public.has_role((select auth.uid()), 'admin')` conditions
- **Evidence**: Content of schema.sql showing new policies

### AC-4: Admin Users list displays all required fields
- **Type**: `rule`
- **Given**: An authenticated admin user on the /admin/users page
- **When**: The users table/list is rendered after loading completes
- **Then**: Every user row displays (visibly or via expand/edit modal): full_name, first_name, last_name, email, member_id, nexus_id, role, wallet_balance, avatar_url preview, is_active status badge, last_seen_at, created_at
- **Pass Condition**: Rendered AdminUsers component includes JSX elements for each of these fields; Inspecting React component code shows all fields are used in the UI
- **Evidence**: Source code of AdminUsers.jsx rendering all 12 fields

### AC-5: Admin can create a new user with all fields
- **Type**: `rule`
- **Given**: An admin on /admin/users with the "Create user" form open
- **When**: Admin fills first_name="Test", last_name="Admin", email="test@example.com", password="Secure123!", role="admin", wallet_balance=100.00, is_active=true and submits
- **Then**: (1) A new auth.users record is created in Supabase Auth; (2) A new members record is created with auth_user_id linked, all specified fields set; (3) The new user appears in the users list without page reload
- **Pass Condition**: API /api/admin/users POST returns 2xx with created user id; new record appears in list; field values in DB match input
- **Evidence**: API route source + frontend form source + test run output

### AC-6: Admin can modify ALL user fields including wallet_balance and role
- **Type**: `rule`
- **Given**: An admin editing an existing user on /admin/users
- **When**: Admin changes: first_name, last_name, email, role (user→admin), wallet_balance (increase by 50), is_active (true→false), and provides a new password
- **Then**: All changes are persisted to the members table; if password changed, Supabase Auth password is also updated; the row reflects changes immediately in the UI
- **Pass Condition**: PATCH /api/admin/users returns 2xx; DB SELECT confirms all 6 fields changed; UI shows updated values
- **Evidence**: PATCH API source code that handles wallet_balance, role, password reset, is_active, email, name fields

### AC-7: Admin can delete/deactivate users with confirmation
- **Type**: `rule`
- **Given**: An admin viewing the users list
- **When**: Admin clicks delete on a user, confirms the dialog
- **Then**: A confirmation modal appears first; after confirm, either (a) members.is_active=false and optionally auth.users.disabled=true, OR (b) hard delete with cascading FK cleanup; the user disappears from the active list
- **Pass Condition**: window.confirm or Dialog component fires before DELETE; user no longer appears in "active" filter view
- **Evidence**: Source code of delete handler + confirmation logic

### AC-8: Admin can create live feed news/event posts
- **Type**: `rule`
- **Given**: An authenticated admin (new page: /admin/feeds or section on existing admin pages)
- **When**: Admin creates a post: type="news" or type="event", content="Breaking news...", status="active", is_admin_post=true
- **Then**: A feed_posts record is inserted with is_admin_post=true, type field set, status='active', created_at=now(); the post immediately appears on /app/feeds for all users; the "Admin" badge shows on the post card
- **Pass Condition**: POST /api/admin/feeds returns 2xx; getFeeds() returns the new post with isAdminPost=true; FeedsPage renders <span>Admin</span> badge for it
- **Evidence**: Admin feeds page source + API source + FeedsPage isAdminPost badge rendering (already exists in FeedsPage.jsx line 284-288)

### AC-9: Admin can edit/delete any feed post and toggle status
- **Type**: `rule`
- **Given**: An admin on the feed management page viewing all posts
- **When**: Admin edits a post's content and changes status from active→inactive; or clicks delete
- **Then**: UPDATE/DELETE executes on feed_posts for ANY post (regardless of original author_id); inactive posts disappear from public feeds view; deleted posts are removed
- **Pass Condition**: PATCH /api/admin/feeds/:id bypasses profile_id ownership check; DELETE works for any post id; getFeeds() with status='active' no longer returns the post
- **Evidence**: API handlers using service_role bypass or security definer for feed posts

### AC-10: All admin API routes enforce admin authorization
- **Type**: `rule`
- **Given**: Any unauthenticated or non-admin request to /api/admin/*
- **When**: Request is sent with no JWT, expired JWT, or JWT for a non-admin user
- **Then**: API returns 401 Unauthorized for missing/invalid auth; returns 403 Forbidden for valid non-admin JWT; no database mutations occur
- **Pass Condition**: Every API route handler first validates session via supabase.auth.getUser() then checks has_role(uid, 'admin') before executing queries; invalid requests return appropriate HTTP status
- **Evidence**: Source code of all API handlers showing auth guard at top of function

### AC-11: Build smoke tests all pass
- **Type**: `rule`
- **Given**: The project with all changes applied and npm dependencies installed
- **When**: Running sequentially: (1) `npm run lint`; (2) `npx tsc --noEmit`; (3) `npm run build`
- **Then**: All three commands exit with code 0; no TypeScript errors; no ESLint errors; build artifacts are produced
- **Pass Condition**: Exit codes all 0 for three commands
- **Evidence**: Command output logs for each step

### AC-12: Admin UI quality and consistency
- **Type**: `rubric`
- **Dimension**: Admin panel UI follows existing design system, is responsive, and provides clear feedback for all actions
- **Scale**: 1-5
- **Anchors**: 1 = Inconsistent styling, missing loading states, broken on mobile; 3 = Mostly consistent, basic loading/success states present, desktop functional; 5 = Perfectly matches existing dark slate theme from AdminUsers/AdminDashboard, all buttons/icons consistent, skeleton loaders during fetch, toast/inline success+error messages for every action, fully responsive down to 320px width
- **Pass Threshold**: >= 4
- **Evidence**: Visual source review of AdminUsers + AdminDashboard + new AdminFeeds components (spacing, colors, fonts, iconography consistent with existing pages)
