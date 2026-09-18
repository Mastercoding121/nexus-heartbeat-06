-- ============================================================================
-- Nexus Chat — complete database setup script
-- ----------------------------------------------------------------------------
-- Target: an external Supabase / PostgreSQL database.
-- Safe to run more than once (every statement is idempotent).
--
-- Run it with either:
--   psql "$SUPABASE_DB_URL" -f supabase/schema.sql
--   or paste the whole file into the Supabase SQL editor and run it.
--
-- Covers: members, profiles, roles, contacts, chats, chat membership,
-- messages, stories, feed posts, support inbox, user settings, lookup
-- functions, row level security, table grants, storage buckets, realtime.
-- ============================================================================

create extension if not exists pgcrypto;

-- ----------------------------------------------------------------------------
-- 1. Profiles
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now()
);

alter table public.profiles add column if not exists avatar_url text;

grant select on public.profiles to authenticated;
grant insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;

alter table public.profiles enable row level security;

drop policy if exists "Profiles are readable by signed-in users" on public.profiles;
create policy "Profiles are readable by signed-in users" on public.profiles
  for select to authenticated using (true);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile" on public.profiles
  for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- 2. Members (Nexus number accounts)
-- ----------------------------------------------------------------------------
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  member_id text unique not null,
  nexus_id text,
  first_name text not null,
  last_name text not null,
  full_name text,
  email text,
  password text,
  role text not null default 'user',
  wallet_balance numeric(12, 2) not null default 0,
  avatar_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.members add column if not exists email text;
alter table public.members add column if not exists nexus_id text;
alter table public.members add column if not exists role text not null default 'user';
alter table public.members add column if not exists wallet_balance numeric(12, 2) not null default 0;
alter table public.members add column if not exists avatar_url text;
alter table public.members add column if not exists is_active boolean not null default true;
alter table public.members add column if not exists auth_user_id uuid references auth.users(id) on delete cascade;
alter table public.members add column if not exists profile_id uuid references public.profiles(id) on delete set null;
alter table public.members add column if not exists last_seen_at timestamptz;
alter table public.members alter column password drop not null;

-- Normalise Nexus numbers to 10 digits with no leading zeros.
update public.members
set nexus_id = ltrim(regexp_replace(member_id, '[^0-9]', '', 'g'), '0')
where nexus_id is null
  and length(ltrim(regexp_replace(member_id, '[^0-9]', '', 'g'), '0')) = 10;

update public.members
set nexus_id = ltrim(regexp_replace(nexus_id, '[^0-9]', '', 'g'), '0')
where nexus_id is not null
  and length(ltrim(regexp_replace(nexus_id, '[^0-9]', '', 'g'), '0')) = 10;

update public.members m
set profile_id = p.id
from public.profiles p
where m.profile_id is null and m.email is not null and lower(m.email) = lower(p.email);

create index if not exists members_nexus_id_idx on public.members(nexus_id);
create index if not exists members_profile_id_idx on public.members(profile_id);
create unique index if not exists members_nexus_id_unique on public.members(nexus_id) where nexus_id is not null;
create unique index if not exists members_auth_user_id_unique on public.members(auth_user_id) where auth_user_id is not null;

grant select on public.members to authenticated;
grant insert on public.members to anon, authenticated;
grant update on public.members to authenticated;
grant all on public.members to service_role;

alter table public.members enable row level security;

drop policy if exists "Members can view their own account" on public.members;
drop policy if exists "Users can search members by nexus_id" on public.members;

drop policy if exists "Users can view their own account" on public.members;
create policy "Users can view their own account" on public.members
  for select to authenticated using (auth_user_id = (select auth.uid()));

drop policy if exists "Anyone can create a member account" on public.members;
create policy "Anyone can create a member account" on public.members
  for insert to anon, authenticated with check (true);

drop policy if exists "Users can update their own account" on public.members;
create policy "Users can update their own account" on public.members
  for update to authenticated
  using (auth_user_id = (select auth.uid()))
  with check (auth_user_id = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- 3. Roles (never stored on the member/profile row itself)
-- ----------------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'app_role') then
    create type public.app_role as enum ('admin', 'moderator', 'user');
  end if;
end;
$$;

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  );
$$;

grant execute on function public.has_role(uuid, public.app_role) to anon, authenticated;

drop policy if exists "Users can read their own roles" on public.user_roles;
create policy "Users can read their own roles" on public.user_roles
  for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists "Admins can read all roles" on public.user_roles;
create policy "Admins can read all roles" on public.user_roles
  for select to authenticated using (public.has_role((select auth.uid()), 'admin'));

-- ----------------------------------------------------------------------------
-- 4. Contacts
-- ----------------------------------------------------------------------------
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  contact_profile_id uuid references public.profiles(id) on delete cascade,
  contact_member_id uuid references public.members(id) on delete cascade,
  display_name text,
  nexus_id text,
  is_blocked boolean not null default false,
  created_at timestamptz not null default now(),
  unique (owner_id, contact_member_id)
);

create index if not exists contacts_owner_idx on public.contacts(owner_id);

grant select, insert, update, delete on public.contacts to authenticated;
grant all on public.contacts to service_role;

alter table public.contacts enable row level security;

drop policy if exists "Users manage their own contacts" on public.contacts;
create policy "Users manage their own contacts" on public.contacts
  for all to authenticated
  using (owner_id = (select auth.uid()))
  with check (owner_id = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- 5. Chats, membership and messages
-- ----------------------------------------------------------------------------
create table if not exists public.chats (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null default 'private',
  avatar_url text,
  owner_id uuid references public.profiles(id) on delete cascade,
  last_message_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.chats add column if not exists avatar_url text;
alter table public.chats add column if not exists last_message_at timestamptz;

create table if not exists public.chat_members (
  chat_id uuid not null references public.chats(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'member',
  joined_at timestamptz not null default now(),
  primary key (chat_id, profile_id)
);

alter table public.chat_members add column if not exists role text not null default 'member';

create index if not exists chat_members_profile_idx on public.chat_members(profile_id);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  chat_id uuid not null references public.chats(id) on delete cascade,
  sender_id uuid references public.profiles(id) on delete cascade,
  content text not null,
  type text not null default 'text',
  file_url text,
  file_name text,
  encrypted boolean not null default false,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.messages add column if not exists read_at timestamptz;
create index if not exists messages_chat_created_idx on public.messages(chat_id, created_at);

-- Membership lookup used by the chat policies (security definer avoids
-- recursive RLS evaluation between chats / chat_members / messages).
create or replace function public.is_chat_participant(_chat_id uuid, _profile_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.chat_members cm
    where cm.chat_id = _chat_id and cm.profile_id = _profile_id
  ) or exists (
    select 1 from public.chats c
    where c.id = _chat_id and c.owner_id = _profile_id
  );
$$;

grant execute on function public.is_chat_participant(uuid, uuid) to authenticated;

grant select, insert, update, delete on public.chats to authenticated;
grant select, insert, update, delete on public.chat_members to authenticated;
grant select, insert, update, delete on public.messages to authenticated;
grant all on public.chats, public.chat_members, public.messages to service_role;

alter table public.chats enable row level security;
alter table public.chat_members enable row level security;
alter table public.messages enable row level security;

drop policy if exists "Users can view their own chats" on public.chats;
create policy "Users can view their own chats" on public.chats
  for select to authenticated
  using (owner_id = (select auth.uid()) or public.is_chat_participant(id, (select auth.uid())));

drop policy if exists "Users can insert their own chats" on public.chats;
create policy "Users can insert their own chats" on public.chats
  for insert to authenticated with check (owner_id = (select auth.uid()));

drop policy if exists "Chat owners can update their chats" on public.chats;
create policy "Chat owners can update their chats" on public.chats
  for update to authenticated
  using (owner_id = (select auth.uid()))
  with check (owner_id = (select auth.uid()));

drop policy if exists "Chat owners can delete their chats" on public.chats;
create policy "Chat owners can delete their chats" on public.chats
  for delete to authenticated using (owner_id = (select auth.uid()));

drop policy if exists "Users can view chat members" on public.chat_members;
create policy "Users can view chat members" on public.chat_members
  for select to authenticated
  using (profile_id = (select auth.uid()) or public.is_chat_participant(chat_id, (select auth.uid())));

drop policy if exists "Participants can add chat members" on public.chat_members;
create policy "Participants can add chat members" on public.chat_members
  for insert to authenticated
  with check (
    profile_id = (select auth.uid())
    or public.is_chat_participant(chat_id, (select auth.uid()))
  );

drop policy if exists "Users can leave a chat" on public.chat_members;
create policy "Users can leave a chat" on public.chat_members
  for delete to authenticated using (profile_id = (select auth.uid()));

drop policy if exists "Users can view messages in their chats" on public.messages;
create policy "Users can view messages in their chats" on public.messages
  for select to authenticated
  using (public.is_chat_participant(chat_id, (select auth.uid())));

drop policy if exists "Users can insert messages" on public.messages;
create policy "Users can insert messages" on public.messages
  for insert to authenticated
  with check (
    sender_id = (select auth.uid())
    and public.is_chat_participant(chat_id, (select auth.uid()))
  );

drop policy if exists "Senders can update their messages" on public.messages;
create policy "Senders can update their messages" on public.messages
  for update to authenticated
  using (sender_id = (select auth.uid()))
  with check (sender_id = (select auth.uid()));

drop policy if exists "Senders can delete their messages" on public.messages;
create policy "Senders can delete their messages" on public.messages
  for delete to authenticated using (sender_id = (select auth.uid()));

-- Keep chat ordering fresh.
create or replace function public.touch_chat_last_message()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.chats set last_message_at = new.created_at where id = new.chat_id;
  return new;
end;
$$;

drop trigger if exists messages_touch_chat on public.messages;
create trigger messages_touch_chat
after insert on public.messages
for each row execute function public.touch_chat_last_message();

-- ----------------------------------------------------------------------------
-- 6. Stories
-- ----------------------------------------------------------------------------
create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  member_id uuid references public.members(id) on delete cascade,
  media_url text,
  media_type text not null default 'image',
  caption text,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '24 hours')
);

create index if not exists stories_expires_idx on public.stories(expires_at desc);

create table if not exists public.story_views (
  story_id uuid not null references public.stories(id) on delete cascade,
  viewer_profile_id uuid not null references public.profiles(id) on delete cascade,
  viewed_at timestamptz not null default now(),
  primary key (story_id, viewer_profile_id)
);

grant select, insert, update, delete on public.stories to authenticated;
grant select, insert on public.story_views to authenticated;
grant all on public.stories, public.story_views to service_role;

alter table public.stories enable row level security;
alter table public.story_views enable row level security;

drop policy if exists "Signed-in users can view live stories" on public.stories;
create policy "Signed-in users can view live stories" on public.stories
  for select to authenticated using (expires_at > now());

drop policy if exists "Users can post their own stories" on public.stories;
create policy "Users can post their own stories" on public.stories
  for insert to authenticated with check (profile_id = (select auth.uid()));

drop policy if exists "Users can delete their own stories" on public.stories;
create policy "Users can delete their own stories" on public.stories
  for delete to authenticated using (profile_id = (select auth.uid()));

drop policy if exists "Users can record their story views" on public.story_views;
create policy "Users can record their story views" on public.story_views
  for insert to authenticated with check (viewer_profile_id = (select auth.uid()));

drop policy if exists "Story authors and viewers can read views" on public.story_views;
create policy "Story authors and viewers can read views" on public.story_views
  for select to authenticated
  using (
    viewer_profile_id = (select auth.uid())
    or exists (select 1 from public.stories s where s.id = story_id and s.profile_id = (select auth.uid()))
  );

-- ----------------------------------------------------------------------------
-- 7. Feed posts
-- ----------------------------------------------------------------------------
create table if not exists public.feed_posts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  user_name text,
  user_avatar text,
  content text not null,
  type text not null default 'text',
  status text not null default 'active',
  is_admin_post boolean not null default false,
  likes integer not null default 0,
  comments jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists feed_posts_status_created_idx on public.feed_posts(status, created_at desc);

grant select on public.feed_posts to anon, authenticated;
grant insert, update on public.feed_posts to authenticated;
grant all on public.feed_posts to service_role;

alter table public.feed_posts enable row level security;

drop policy if exists "Active feed posts are publicly readable" on public.feed_posts;
create policy "Active feed posts are publicly readable" on public.feed_posts
  for select to anon, authenticated using (status = 'active');

drop policy if exists "Authors can read their own feed posts" on public.feed_posts;
create policy "Authors can read their own feed posts" on public.feed_posts
  for select to authenticated using (profile_id = (select auth.uid()));

drop policy if exists "Users can create feed posts" on public.feed_posts;
create policy "Users can create feed posts" on public.feed_posts
  for insert to authenticated with check (profile_id = (select auth.uid()));

drop policy if exists "Authors can update their feed posts" on public.feed_posts;
create policy "Authors can update their feed posts" on public.feed_posts
  for update to authenticated
  using (profile_id = (select auth.uid()))
  with check (profile_id = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- 8. Support inbox
-- ----------------------------------------------------------------------------
create table if not exists public.support_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id text not null,
  sender_id text not null,
  content text not null,
  type text not null default 'text',
  file_url text,
  file_name text,
  created_at timestamptz not null default now()
);

create index if not exists support_messages_conversation_idx
  on public.support_messages(conversation_id, created_at);

grant select, insert on public.support_messages to anon, authenticated;
grant all on public.support_messages to service_role;

alter table public.support_messages enable row level security;

drop policy if exists "Support messages can be read" on public.support_messages;
create policy "Support messages can be read" on public.support_messages
  for select to anon, authenticated using (true);

drop policy if exists "Support messages can be sent" on public.support_messages;
create policy "Support messages can be sent" on public.support_messages
  for insert to anon, authenticated with check (true);

-- ----------------------------------------------------------------------------
-- 9. Per-user app settings (wallpaper, theme, notification prefs)
-- ----------------------------------------------------------------------------
create table if not exists public.user_settings (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  theme text not null default 'light',
  wallpaper text,
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

grant select, insert, update on public.user_settings to authenticated;
grant all on public.user_settings to service_role;

alter table public.user_settings enable row level security;

drop policy if exists "Users manage their own settings" on public.user_settings;
create policy "Users manage their own settings" on public.user_settings
  for all to authenticated
  using (profile_id = (select auth.uid()))
  with check (profile_id = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- 10. Lookup / authentication helper functions
-- ----------------------------------------------------------------------------
drop function if exists public.search_member_by_nexus_id(text);

create or replace function public.search_member_by_nexus_id(search_nexus_id text)
returns table (
  id uuid,
  nexus_id text,
  member_id text,
  full_name text,
  first_name text,
  last_name text,
  avatar_url text,
  profile_id uuid,
  profile_email text
)
language sql
stable
security definer
set search_path = ''
as $$
  select m.id, coalesce(m.nexus_id, m.member_id), m.member_id,
         m.full_name, m.first_name, m.last_name, m.avatar_url,
         p.id, p.email
  from public.members as m
  left join public.profiles as p on p.id = m.profile_id
  where m.is_active = true
    and (
      m.nexus_id = ltrim(regexp_replace($1, '[^0-9]', '', 'g'), '0')
      or ltrim(regexp_replace(m.member_id, '[^0-9]', '', 'g'), '0') =
         ltrim(regexp_replace($1, '[^0-9]', '', 'g'), '0')
    )
  limit 1;
$$;

revoke execute on function public.search_member_by_nexus_id(text) from public;
grant execute on function public.search_member_by_nexus_id(text) to anon, authenticated;

create or replace function public.authenticate_member(login_nexus_id text, login_password text)
returns table (
  id uuid,
  member_id text,
  nexus_id text,
  first_name text,
  last_name text,
  full_name text,
  email text,
  role text,
  avatar_url text,
  is_active boolean,
  created_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select m.id, m.member_id, m.nexus_id, m.first_name, m.last_name,
         m.full_name, m.email, m.role, m.avatar_url, m.is_active, m.created_at
  from public.members as m
  where (m.nexus_id = ltrim(regexp_replace(login_nexus_id, '[^0-9]', '', 'g'), '0')
         or m.member_id = ltrim(regexp_replace(login_nexus_id, '[^0-9]', '', 'g'), '0'))
    and m.password = login_password
    and m.is_active = true
  limit 1;
$$;

revoke execute on function public.authenticate_member(text, text) from public;
grant execute on function public.authenticate_member(text, text) to anon, authenticated;

create or replace function public.find_member_email_by_nexus_id(search_nexus_id text)
returns table (email text)
language sql
stable
security definer
set search_path = ''
as $$
  select m.email
  from public.members as m
  where m.auth_user_id is not null
    and (m.nexus_id = ltrim(regexp_replace(search_nexus_id, '[^0-9]', '', 'g'), '0')
         or m.member_id = ltrim(regexp_replace(search_nexus_id, '[^0-9]', '', 'g'), '0'))
    and m.is_active = true
  limit 1;
$$;

revoke execute on function public.find_member_email_by_nexus_id(text) from public;
grant execute on function public.find_member_email_by_nexus_id(text) to anon, authenticated;

-- ----------------------------------------------------------------------------
-- 11. Storage buckets (avatars, chat media, story media, feed media)
-- ----------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values
  ('avatars', 'avatars', true),
  ('feed-media', 'feed-media', true),
  ('story-media', 'story-media', true),
  ('chat-media', 'chat-media', false)
on conflict (id) do nothing;

drop policy if exists "Public buckets are readable" on storage.objects;
create policy "Public buckets are readable" on storage.objects
  for select to anon, authenticated
  using (bucket_id in ('avatars', 'feed-media', 'story-media'));

drop policy if exists "Users read their own chat media" on storage.objects;
create policy "Users read their own chat media" on storage.objects
  for select to authenticated
  using (bucket_id = 'chat-media' and owner = (select auth.uid()));

drop policy if exists "Users upload their own media" on storage.objects;
create policy "Users upload their own media" on storage.objects
  for insert to authenticated
  with check (
    bucket_id in ('avatars', 'feed-media', 'story-media', 'chat-media')
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Users update their own media" on storage.objects;
create policy "Users update their own media" on storage.objects
  for update to authenticated
  using (owner = (select auth.uid()))
  with check (owner = (select auth.uid()));

drop policy if exists "Users delete their own media" on storage.objects;
create policy "Users delete their own media" on storage.objects
  for delete to authenticated using (owner = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- ADMIN POLICIES: members — full CRUD for admins
-- ----------------------------------------------------------------------------
drop policy if exists "Admins can view all member accounts" on public.members;
create policy "Admins can view all member accounts" on public.members
  for select to authenticated using (public.has_role((select auth.uid()), 'admin'));

drop policy if exists "Admins can insert member accounts" on public.members;
create policy "Admins can insert member accounts" on public.members
  for insert to authenticated with check (public.has_role((select auth.uid()), 'admin'));

drop policy if exists "Admins can update any member account" on public.members;
create policy "Admins can update any member account" on public.members
  for update to authenticated
  using (public.has_role((select auth.uid()), 'admin'))
  with check (public.has_role((select auth.uid()), 'admin'));

drop policy if exists "Admins can delete member accounts" on public.members;
create policy "Admins can delete member accounts" on public.members
  for delete to authenticated using (public.has_role((select auth.uid()), 'admin'));

-- ----------------------------------------------------------------------------
-- ADMIN POLICIES: feed_posts — full CRUD for admins (bypass ownership)
-- ----------------------------------------------------------------------------
drop policy if exists "Admins can view all feed posts (any status)" on public.feed_posts;
create policy "Admins can view all feed posts (any status)" on public.feed_posts
  for select to authenticated using (public.has_role((select auth.uid()), 'admin'));

drop policy if exists "Admins can insert any feed posts including admin posts" on public.feed_posts;
create policy "Admins can insert any feed posts including admin posts" on public.feed_posts
  for insert to authenticated with check (public.has_role((select auth.uid()), 'admin'));

drop policy if exists "Admins can update any feed post" on public.feed_posts;
create policy "Admins can update any feed post" on public.feed_posts
  for update to authenticated
  using (public.has_role((select auth.uid()), 'admin'))
  with check (public.has_role((select auth.uid()), 'admin'));

drop policy if exists "Admins can delete any feed post" on public.feed_posts;
create policy "Admins can delete any feed post" on public.feed_posts
  for delete to authenticated using (public.has_role((select auth.uid()), 'admin'));

-- ----------------------------------------------------------------------------
-- Security-definer helper functions for admin operations
-- (used as fallback when SUPABASE_SERVICE_ROLE_KEY is unavailable server-side)
-- ----------------------------------------------------------------------------
create or replace function public.admin_upsert_member(
  _id uuid,
  _member_id text,
  _nexus_id text,
  _first_name text,
  _last_name text,
  _full_name text,
  _email text,
  _role text,
  _wallet_balance numeric,
  _avatar_url text,
  _is_active boolean,
  _auth_user_id uuid,
  _profile_id uuid
)
returns public.members
language plpgsql
security definer
set search_path = ''
as $$
declare
  _result public.members;
begin
  if not public.has_role((select auth.uid()), 'admin') then
    raise exception 'Permission denied: admin role required';
  end if;

  if _id is not null then
    update public.members set
      member_id = coalesce(_member_id, member_id),
      nexus_id = _nexus_id,
      first_name = coalesce(_first_name, first_name),
      last_name = coalesce(_last_name, last_name),
      full_name = coalesce(_full_name, full_name),
      email = _email,
      role = coalesce(_role, role),
      wallet_balance = coalesce(_wallet_balance, wallet_balance),
      avatar_url = _avatar_url,
      is_active = coalesce(_is_active, is_active),
      auth_user_id = coalesce(_auth_user_id, auth_user_id),
      profile_id = coalesce(_profile_id, profile_id)
    where id = _id
    returning * into _result;
  else
    insert into public.members (member_id, nexus_id, first_name, last_name, full_name, email, role, wallet_balance, avatar_url, is_active, auth_user_id, profile_id)
    values (_member_id, _nexus_id, _first_name, _last_name, _full_name, _email, coalesce(_role, 'user'), coalesce(_wallet_balance, 0), _avatar_url, coalesce(_is_active, true), _auth_user_id, _profile_id)
    returning * into _result;
  end if;
  return _result;
end;
$$;

revoke execute on function public.admin_upsert_member(uuid,text,text,text,text,text,text,text,numeric,text,boolean,uuid,uuid) from public;
grant execute on function public.admin_upsert_member(uuid,text,text,text,text,text,text,text,numeric,text,boolean,uuid,uuid) to authenticated;

create or replace function public.admin_delete_member(_id uuid)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_role((select auth.uid()), 'admin') then
    raise exception 'Permission denied: admin role required';
  end if;
  delete from public.members where id = _id;
  return true;
end;
$$;

revoke execute on function public.admin_delete_member(uuid) from public;
grant execute on function public.admin_delete_member(uuid) to authenticated;

create or replace function public.admin_upsert_feed_post(
  _id uuid,
  _profile_id uuid,
  _user_name text,
  _user_avatar text,
  _content text,
  _type text,
  _status text,
  _is_admin_post boolean,
  _likes integer,
  _comments jsonb
)
returns public.feed_posts
language plpgsql
security definer
set search_path = ''
as $$
declare
  _result public.feed_posts;
begin
  if not public.has_role((select auth.uid()), 'admin') then
    raise exception 'Permission denied: admin role required';
  end if;

  if _id is not null then
    update public.feed_posts set
      profile_id = _profile_id,
      user_name = coalesce(_user_name, user_name),
      user_avatar = _user_avatar,
      content = coalesce(_content, content),
      type = coalesce(_type, type),
      status = coalesce(_status, status),
      is_admin_post = coalesce(_is_admin_post, is_admin_post),
      likes = coalesce(_likes, likes),
      comments = coalesce(_comments, comments)
    where id = _id
    returning * into _result;
  else
    insert into public.feed_posts (profile_id, user_name, user_avatar, content, type, status, is_admin_post, likes, comments)
    values (_profile_id, coalesce(_user_name, 'Nexus Admin'), _user_avatar, _content, coalesce(_type, 'text'), coalesce(_status, 'active'), coalesce(_is_admin_post, true), coalesce(_likes, 0), coalesce(_comments, '[]'::jsonb))
    returning * into _result;
  end if;
  return _result;
end;
$$;

revoke execute on function public.admin_upsert_feed_post(uuid,uuid,text,text,text,text,text,boolean,integer,jsonb) from public;
grant execute on function public.admin_upsert_feed_post(uuid,uuid,text,text,text,text,text,boolean,integer,jsonb) to authenticated;

create or replace function public.admin_delete_feed_post(_id uuid)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_role((select auth.uid()), 'admin') then
    raise exception 'Permission denied: admin role required';
  end if;
  delete from public.feed_posts where id = _id;
  return true;
end;
$$;

revoke execute on function public.admin_delete_feed_post(uuid) from public;
grant execute on function public.admin_delete_feed_post(uuid) to authenticated;

-- ----------------------------------------------------------------------------
-- 12. Realtime publication
-- ----------------------------------------------------------------------------
do $$
declare
  t text;
begin
  foreach t in array array['messages', 'chats', 'chat_members', 'feed_posts', 'stories', 'support_messages']
  loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
exception
  when undefined_object then null;
end;
$$;

-- ----------------------------------------------------------------------------
-- 13. Private direct chat (E2E pair) invariant: exactly 2 members per chat
-- ----------------------------------------------------------------------------
create or replace function public.is_private_direct_chat(_chat_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.chats c where c.id = _chat_id and lower(coalesce(c.type, 'private')) = 'private'
  ) and (
    (select count(*) from public.chat_members cm where cm.chat_id = _chat_id) <= 2
  );
$$;

grant execute on function public.is_private_direct_chat(uuid) to authenticated;

create or replace function public.enforce_private_chat_pair_size()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  chat_type text;
  cur_cnt integer;
begin
  select coalesce(c.type, 'private') into chat_type from public.chats c where c.id = new.chat_id;
  if chat_type is not null and lower(chat_type) = 'private' then
    select count(*) into cur_cnt from public.chat_members cm where cm.chat_id = new.chat_id;
    if cur_cnt >= 2 and not exists (
      select 1 from public.chat_members cm
      where cm.chat_id = new.chat_id and cm.profile_id = new.profile_id
    ) then
      raise exception 'Private direct chats are limited to exactly 2 members.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists enforce_private_chat_pair_size_trg on public.chat_members;
create trigger enforce_private_chat_pair_size_trg
before insert on public.chat_members
for each row execute function public.enforce_private_chat_pair_size();

drop policy if exists "Participants can add chat members" on public.chat_members;
create policy "Participants can add chat members" on public.chat_members
  for insert to authenticated
  with check (
    profile_id = (select auth.uid())
    or public.is_chat_participant(chat_id, (select auth.uid()))
  )
  and (
    lower(coalesce((select c.type from public.chats c where c.id = chat_id), 'private')) <> 'private'
    or (select count(*) from public.chat_members cm where cm.chat_id = chat_id) < 2
    or exists (
      select 1 from public.chat_members cm
      where cm.chat_id = chat_id and cm.profile_id = (select auth.uid())
    )
  );

-- Messages already require strict participant-only reads via is_chat_participant.
-- Re-stamp these policies so they remain current even after other edits.
drop policy if exists "Users can view messages in their chats" on public.messages;
create policy "Users can view messages in their chats" on public.messages
  for select to authenticated
  using (public.is_chat_participant(chat_id, (select auth.uid())));

drop policy if exists "Users can insert messages" on public.messages;
create policy "Users can insert messages" on public.messages
  for insert to authenticated
  with check (
    sender_id = (select auth.uid())
    and public.is_chat_participant(chat_id, (select auth.uid()))
  );

-- After every member insert on a private chat, ensure the chat still has <= 2
-- members. This covers any edge cases that bypassed the BEFORE trigger above.
create or replace function public.validate_private_chat_pair_after()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  n integer;
  chat_type text;
begin
  select coalesce(c.type, 'private') into chat_type from public.chats c where c.id = new.chat_id;
  if chat_type is not null and lower(chat_type) = 'private' then
    select count(*) into n from public.chat_members cm where cm.chat_id = new.chat_id;
    if n > 2 then
      raise exception 'Private direct chats cannot contain more than 2 members.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists validate_private_chat_pair_after_trg on public.chat_members;
create trigger validate_private_chat_pair_after_trg
after insert on public.chat_members
for each row execute function public.validate_private_chat_pair_after();

-- profiles.status & is_verified defaulting — idempotent column additions
alter table public.profiles add column if not exists status text not null default 'active';
alter table public.profiles add column if not exists is_verified boolean not null default false;

-- members.auth_user_id unique safety (idempotent DO block)
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'members' and column_name = 'auth_user_id'
  ) then
    create unique index if not exists members_auth_user_id_unique on public.members(auth_user_id);
  end if;
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'members' and column_name = 'nexus_id'
  ) then
    create unique index if not exists members_nexus_id_unique on public.members(nexus_id);
  end if;
end;
$$;
