# Nexus Chat — external database setup

The app connects to your own (external) Supabase project. Nothing is stored
locally in the browser except the session, theme and wallpaper preferences.

## 1. Apply the schema

Run the full setup script once against your database:

```bash
psql "$SUPABASE_DB_URL" -f supabase/schema.sql
```

Or open the Supabase dashboard → SQL editor, paste the contents of
`supabase/schema.sql` and run it. The script is idempotent, so it is safe to
re-run after updates.

## 2. What the script creates

| Area | Objects |
| --- | --- |
| Accounts | `profiles`, `members` (Nexus numbers, auth link, wallet, avatar) |
| Roles | `app_role` enum, `user_roles` table, `has_role()` function |
| Contacts | `contacts` |
| Messaging | `chats`, `chat_members`, `messages`, `is_chat_participant()`, last-message trigger |
| Stories | `stories`, `story_views` |
| Community | `feed_posts` |
| Support | `support_messages` |
| Preferences | `user_settings` |
| Lookups | `search_member_by_nexus_id()`, `authenticate_member()`, `find_member_email_by_nexus_id()` |
| Files | storage buckets `avatars`, `feed-media`, `story-media`, `chat-media` + policies |
| Live updates | realtime publication for messages, chats, feeds, stories, support |

Row level security is enabled on every table, with table grants for `anon`,
`authenticated` and `service_role` matching those policies.

## 3. Connection settings

The app reads these at build/run time:

| Variable | Used by | Value |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | browser | `https://<project-ref>.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | browser | publishable / anon key |
| `SUPABASE_URL` | server code | same project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | server code only | service role key (never exposed to the browser) |

Without these the app still runs, falling back to local-only storage, and the
sign-in screens will report that the database is not configured.
