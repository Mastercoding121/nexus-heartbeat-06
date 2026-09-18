import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from './supabase'
import { normalizeNexusId } from '../utils/nexusId'

const AuthContext = createContext()
const SESSION_STORAGE_KEY = 'nexus-chat-session'
const USER_STORAGE_KEY = 'nexus-chat-users'
const PENDING_REG_KEY = 'nexus-chat-pending-reg'
const VOLATILE_SESSION_KEYS = [
  SESSION_STORAGE_KEY,
  'nexus-chat-state-v1',
  'nexus_e2ee_keys',
  'nexus_e2ee_enabled',
]

function normalizeUser(user) {
  return {
    id: user.id,
    nexusId: user.nexus_id || user.nexusId || user.member_id || user.memberId,
    nexusIdDisplay: user.nexusIdDisplay || user.memberIdDisplay || formatNexusIdForDisplay(user.nexus_id || user.nexusId || user.member_id || user.memberId),
    firstName: user.first_name || user.firstName,
    lastName: user.last_name || user.lastName,
    fullName: user.full_name || user.fullName || `${user.first_name || user.firstName || ''} ${user.last_name || user.lastName || ''}`.trim(),
    email: user.email,
    emailVerified: user.email_verified || user.emailVerified || false,
    role: user.role || user.user_role || user.profile_role || 'user',
    adminAuthenticated: Boolean(user.adminAuthenticated),
    avatarUrl: user.avatar_url || user.avatarUrl || null,
    createdAt: user.created_at || user.createdAt
  }
}

function getUserNexusId(user) {
  return String(user?.nexus_id || user?.nexusId || user?.member_id || user?.memberId || '').replace(/\D/g, '')
}

function generateNexusId(existingUsers) {
  const usedIds = new Set(existingUsers.map(getUserNexusId))
  let candidate = ''
  do {
    const randomSuffix = String(Math.floor(Math.random() * 100000000)).padStart(8, '0')
    candidate = `10${randomSuffix}`
  } while (usedIds.has(candidate))
  return candidate
}

function formatNexusIdForDisplay(raw) {
  const s = String(raw || '').replace(/\D/g, '')
  if (s.length >= 2) {
    let formatted = s.slice(0, 2)
    if (s.length >= 6) {
      formatted += '-' + s.slice(2, 6)
      if (s.length >= 10) {
        formatted += '-' + s.slice(6, 10)
      }
    }
    return formatted
  }
  return s
}

function readStoredUsers() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeStoredUsers(users) {
  if (typeof window === 'undefined') return
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users))
}

function readPendingReg(email) {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(PENDING_REG_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (email && parsed.email !== String(email).trim().toLowerCase()) return null
    return parsed
  } catch {
    return null
  }
}

function writePendingReg(data) {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(PENDING_REG_KEY, JSON.stringify(data))
}

function clearPendingReg() {
  if (typeof window === 'undefined') return
  sessionStorage.removeItem(PENDING_REG_KEY)
}

function getAuthErrorMessage(error, fallback = 'Unable to sign in.') {
  if (error?.code === 'email_not_confirmed') return 'Please confirm your email address before signing in.'
  if (error?.code === 'invalid_credentials' || error?.status === 400) return 'Invalid email or password.'
  if (error?.code === 'weak_password') return error?.message || 'Please use a stronger password (at least 6 characters).'
  if (error?.code === 'user_already_confirmed') return 'This email has already been confirmed. Please sign in.'
  if (error?.code === 'otp_expired') return 'This verification code has expired. Please request a new one.'
  if (error?.code === 'invalid_otp') return 'The verification code is invalid. Please check and try again.'
  if (error?.code === 'over_email_send_rate_limit') return 'Too many emails sent recently. Please wait a moment and try again.'
  return error?.message || fallback
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const cachedSession = typeof window !== 'undefined' ? localStorage.getItem(SESSION_STORAGE_KEY) : null
        if (cachedSession) {
          const parsed = JSON.parse(cachedSession)
          if (parsed.adminAuthenticated) localStorage.removeItem(SESSION_STORAGE_KEY)
        }

        if (isSupabaseConfigured() && supabase) {
          const { data: { session } } = await supabase.auth.getSession()
          if (session) {
            try {
              const { data, error } = await supabase
                .from('members')
                .select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at')
                .eq('auth_user_id', session.user.id)
                .maybeSingle()
              if (!error && data) {
                setUser(normalizeUser({ ...data, email_verified: Boolean(session.user.email_confirmed_at) }))
              } else {
                const cachedSession = typeof window !== 'undefined' ? localStorage.getItem(SESSION_STORAGE_KEY) : null
                if (cachedSession) setUser(normalizeUser(JSON.parse(cachedSession)))
              }
            } catch {
              const cachedSession = typeof window !== 'undefined' ? localStorage.getItem(SESSION_STORAGE_KEY) : null
              if (cachedSession) setUser(normalizeUser(JSON.parse(cachedSession)))
            }
          }
        }
      } catch {
        const cachedSession = typeof window !== 'undefined' ? localStorage.getItem(SESSION_STORAGE_KEY) : null
        if (cachedSession) {
          setUser(normalizeUser(JSON.parse(cachedSession)))
        } else {
          setUser(null)
        }
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    let cancelled = false
    let intervalId = null

    const PROBE_TABLES = ['members', 'profiles', 'chats', 'messages', 'feed_posts']
    const DB_STATUS_KEY = 'nexus-db-status-v1'
    const RECHECK_MS = 60 * 60 * 1000

    async function probeDatabase() {
      if (typeof window === 'undefined') return
      if (!isSupabaseConfigured() || !supabase) return

      try {
        const { error } = await supabase
          .from('members')
          .select('id')
          .limit(1)
          .maybeSingle()

        if (!error) {
          const status = { ok: true, tables: 'reachable', checkedAt: Date.now() }
          try { localStorage.setItem(DB_STATUS_KEY, JSON.stringify(status)) } catch {}
          return
        }

        let allMissing = true
        for (const table of PROBE_TABLES) {
          try {
            const { error: tblErr } = await supabase.from(table).select('id').limit(1).maybeSingle()
            if (!tblErr || (tblErr && tblErr.code && tblErr.code !== '42P01')) {
              allMissing = false
              break
            }
          } catch {}
        }

        const status = {
          ok: !allMissing,
          tablesMissing: allMissing,
          lastError: error?.message || null,
          checkedAt: Date.now(),
        }
        try { localStorage.setItem(DB_STATUS_KEY, JSON.stringify(status)) } catch {}
      } catch {
        const status = { ok: false, lastError: 'network', checkedAt: Date.now() }
        try { localStorage.setItem(DB_STATUS_KEY, JSON.stringify(status)) } catch {}
      }
    }

    function scheduleNext() {
      if (cancelled) return
      try {
        const raw = localStorage.getItem(DB_STATUS_KEY)
        if (raw) {
          const parsed = JSON.parse(raw)
          const elapsed = Date.now() - (parsed.checkedAt || 0)
          if (elapsed < RECHECK_MS) {
            intervalId = setTimeout(runOnce, RECHECK_MS - elapsed)
            return
          }
        }
      } catch {}
      runOnce()
    }

    function runOnce() {
      if (cancelled) return
      probeDatabase().finally(() => {
        if (!cancelled) {
          intervalId = setTimeout(runOnce, RECHECK_MS)
        }
      })
    }

    scheduleNext()

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        try {
          const raw = localStorage.getItem(DB_STATUS_KEY)
          if (raw) {
            const parsed = JSON.parse(raw)
            if (Date.now() - (parsed.checkedAt || 0) >= 15 * 60 * 1000) {
              runOnce()
            }
          }
        } catch {}
      }
    }
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', onVisibility)
    }

    return () => {
      cancelled = true
      if (intervalId) clearTimeout(intervalId)
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', onVisibility)
      }
    }
  }, [])

  const login = async (nexusId, password) => {
    const normalizedId = normalizeNexusId(nexusId)
    if (!normalizedId) throw new Error('Enter a valid 10-digit Nexus number.')
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data: memberEmail, error } = await supabase.rpc('find_member_email_by_nexus_id', { search_nexus_id: normalizedId })
        if (error) throw error
        const email = memberEmail?.[0]?.email
        if (!email) {
          throw new Error('Nexus number not found. Please create an account first.')
        }
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password })
        if (authError) throw authError
        const { data, error: memberError } = await supabase.from('members').select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at').eq('auth_user_id', authData.user.id).single()
        if (memberError) throw memberError
        if (data.is_active === false) throw new Error('This Nexus account is inactive.')
        const sessionUser = normalizeUser({ ...data, email_verified: Boolean(authData.user.email_confirmed_at) })
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
        setUser(sessionUser)
        return { user: sessionUser, nexusId: sessionUser.nexusId }
      } catch (err) {
        throw new Error(getAuthErrorMessage(err, 'Unable to sign in. Existing accounts must be migrated to Supabase Auth.'))
      }
    }

    const storedUsers = readStoredUsers()
    const fallbackUser = storedUsers.find((candidate) => getUserNexusId(candidate) === normalizedId)
    if (!fallbackUser) throw new Error('Nexus number not found. Please create an account first.')
    if (fallbackUser.is_active === false || fallbackUser.isActive === false) throw new Error('This Nexus account is inactive.')
    if (String(password || '').trim() !== String(fallbackUser.password || '').trim()) {
      throw new Error('Incorrect password for this Nexus number.')
    }
    const sessionUser = normalizeUser(fallbackUser)
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
    setUser(sessionUser)
    return { user: sessionUser, nexusId: sessionUser.nexusId }
  }

  const adminLogin = async (email, password) => {
    const normalizedEmail = String(email || '').trim().toLowerCase()
    if (!isSupabaseConfigured() || !supabase) {
      const storedUsers = readStoredUsers()
      const fallbackAdmin = storedUsers.find(
        (c) => String(c.email || '').toLowerCase() === normalizedEmail && c.role === 'admin'
      )
      if (fallbackAdmin && String(fallbackAdmin.password || '') === String(password || '')) {
        if (fallbackAdmin.is_active === false || fallbackAdmin.isActive === false) {
          throw new Error('This administrator account is inactive.')
        }
        const adminUser = normalizeUser({ ...fallbackAdmin, adminAuthenticated: true })
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(adminUser))
        setUser(adminUser)
        return { user: adminUser }
      }
      throw new Error('Unable to sign in as administrator. Check your credentials and try again.')
    }
    if (!normalizedEmail || !password) throw new Error('Enter your administrator email and password.')
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email: normalizedEmail, password })
    if (authError) throw new Error(getAuthErrorMessage(authError, 'Unable to sign in as administrator.'))
    if (!authData?.user?.id) throw new Error('Supabase Auth returned no user session.')
    const { data: member, error: memberError } = await supabase.from('members').select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at').eq('auth_user_id', authData.user.id).single()
    if (memberError?.code === 'PGRST116') throw new Error('Your Auth account is not linked to a member record.')
    if (memberError || member?.role !== 'admin') throw new Error('This account is not authorized for administration.')
    if (member.is_active === false) throw new Error('This administrator account is inactive.')
    const adminUser = normalizeUser({ ...member, email_verified: Boolean(authData.user.email_confirmed_at), adminAuthenticated: true })
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(adminUser))
    setUser(adminUser)
    return { user: adminUser }
  }

  const switchAccount = async () => {
    if (supabase) await supabase.auth.signOut()
    if (typeof window !== 'undefined') {
      VOLATILE_SESSION_KEYS.forEach((key) => localStorage.removeItem(key))
      window.dispatchEvent(new CustomEvent('nexus-auth:account-switched'))
    }
    setUser(null)
  }

  const register = async ({ firstName, lastName, email, password }) => {
    const normalizedFirstName = String(firstName || '').trim()
    const normalizedLastName = String(lastName || '').trim()
    const normalizedEmail = String(email || '').trim().toLowerCase()
    const storedUsers = readStoredUsers()
    const nexusId = generateNexusId(storedUsers)
    const generatedPassword = String(password || '').trim() || `${nexusId.slice(-4)}${Math.random().toString(36).slice(-4)}`
    const fullName = [normalizedFirstName, normalizedLastName].filter(Boolean).join(' ').trim()

    const newUser = {
      id: `${Date.now()}`,
      member_id: nexusId,
      nexus_id: nexusId,
      nexusId,
      nexusIdDisplay: formatNexusIdForDisplay(nexusId),
      first_name: normalizedFirstName,
      firstName: normalizedFirstName,
      last_name: normalizedLastName,
      lastName: normalizedLastName,
      full_name: fullName,
      fullName,
      email: normalizedEmail,
      email_verified: false,
      emailVerified: false,
      role: 'user',
      password: generatedPassword,
      avatar_url: null,
      avatarUrl: null,
      created_at: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }

    if (isSupabaseConfigured() && supabase) {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: newUser.email,
        password: newUser.password,
        options: {
          data: {
            first_name: normalizedFirstName,
            last_name: normalizedLastName,
            full_name: fullName,
            nexus_id: nexusId,
          },
          shouldCreateUser: true,
        },
      })
      if (authError) throw new Error(getAuthErrorMessage(authError, 'Unable to create your Supabase Auth account.'))

      if (!authData.session) {
        writePendingReg({
          email: newUser.email,
          nexusId: newUser.nexus_id,
          firstName: newUser.first_name,
          lastName: newUser.last_name,
          fullName: newUser.full_name,
          password: newUser.password,
          createdAt: newUser.created_at,
          authUserId: authData.user?.id || null,
        })
        return { user: newUser, nexusId, password: generatedPassword, requiresEmailConfirmation: true }
      }

      try {
        const { error: memberInsertErr } = await supabase.from('members').insert({
          member_id: newUser.member_id,
          nexus_id: newUser.nexus_id,
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          full_name: newUser.full_name,
          email: newUser.email,
          password: null,
          auth_user_id: authData.user.id,
          role: newUser.role,
          avatar_url: newUser.avatar_url,
          created_at: newUser.created_at,
        })
        if (memberInsertErr) throw memberInsertErr
        const { data, error: memberError } = await supabase
          .from('members')
          .select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at')
          .eq('auth_user_id', authData.user.id)
          .single()
        const sessionUser = normalizeUser(data || newUser)
        sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId)
        if (typeof window !== 'undefined') {
          localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
        }
        setUser(sessionUser)
        return { user: sessionUser, nexusId, password: generatedPassword }
      } catch (insertErr) {
        const fallback = { ...newUser, email_verified: Boolean(authData.user?.email_confirmed_at) }
        const sessionUser = normalizeUser(fallback)
        sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId)
        if (typeof window !== 'undefined') localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
        setUser(sessionUser)
        return { user: sessionUser, nexusId, password: generatedPassword, warning: getAuthErrorMessage(insertErr, 'Account created but profile sync failed.') }
      }
    }

    const nextUsers = [newUser, ...storedUsers]
    writeStoredUsers(nextUsers)
    const sessionUser = normalizeUser(newUser)
    sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId)
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
    setUser(sessionUser)
    return { user: sessionUser, nexusId, password: generatedPassword }
  }

  const verifyEmail = async ({ email, token }) => {
    const normalizedEmail = String(email || '').trim().toLowerCase()
    const normalizedToken = String(token || '').trim()
    if (!normalizedEmail) throw new Error('Email is required for verification.')
    if (!normalizedToken || normalizedToken.length < 4 || normalizedToken.length > 6 || !/^\d+$/.test(normalizedToken)) {
      throw new Error('Please enter the 4 or 6 digit verification code sent to your email.')
    }
    if (!isSupabaseConfigured() || !supabase) {
      const pending = readPendingReg(normalizedEmail)
      if (pending) {
        const localCode = String(pending.verificationCode || pending.otp || '')
        const accepted = localCode && localCode === normalizedToken
        if (accepted) {
          const nexusId = pending.nexusId
          const firstName = pending.firstName
          const lastName = pending.lastName
          const fullName = pending.fullName || [firstName, lastName].filter(Boolean).join(' ').trim()
          const createdAt = pending.createdAt || new Date().toISOString()
          const rawUser = {
            id: `${Date.now()}`,
            member_id: nexusId,
            nexus_id: nexusId,
            first_name: firstName,
            last_name: lastName,
            full_name: fullName,
            email: normalizedEmail,
            role: 'user',
            avatar_url: null,
            created_at: createdAt,
          }
          const storedUsers = readStoredUsers()
          const already = storedUsers.find((c) => String(c.email || '').toLowerCase() === normalizedEmail)
          if (!already) writeStoredUsers([rawUser, ...storedUsers])
          clearPendingReg()
          const sessionUser = normalizeUser({ ...rawUser, email_verified: true })
          sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId)
          if (typeof window !== 'undefined') {
            localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
          }
          setUser(sessionUser)
          return {
            user: sessionUser,
            nexusId: sessionUser.nexusId,
            password: pending?.password || null,
          }
        }
      }
      throw new Error('Email verification is currently unavailable. Please try again in a moment or check your code.')
    }

    const pending = readPendingReg(normalizedEmail)

    const { data, error: verifyError } = await supabase.auth.verifyOtp({
      email: normalizedEmail,
      token: normalizedToken,
      type: 'signup',
    })
    if (verifyError) throw new Error(getAuthErrorMessage(verifyError, 'Verification failed. Please check your code and try again.'))
    if (!data?.user?.id) throw new Error('Supabase Auth returned no user after verification.')

    const regInfo = pending || {}
    const nexusId = regInfo.nexusId
    const firstName = regInfo.firstName
    const lastName = regInfo.lastName
    const fullName = regInfo.fullName || [firstName, lastName].filter(Boolean).join(' ').trim()
    const createdAt = regInfo.createdAt || new Date().toISOString()

    let memberRow = null
    try {
      const { data: existing, error: findErr } = await supabase
        .from('members')
        .select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at')
        .eq('auth_user_id', data.user.id)
        .maybeSingle()
      if (!findErr && existing) {
        memberRow = existing
      } else if (nexusId && firstName && lastName) {
        const { data: nexusExisting, error: nexusFindErr } = await supabase
          .from('members')
          .select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at')
          .eq('nexus_id', nexusId)
          .maybeSingle()
        if (!nexusFindErr && nexusExisting) {
          const { error: linkErr } = await supabase
            .from('members')
            .update({
              auth_user_id: data.user.id,
              email: normalizedEmail,
            })
            .eq('id', nexusExisting.id)
          if (!linkErr) memberRow = { ...nexusExisting, auth_user_id: data.user.id, email: normalizedEmail }
        }
        if (!memberRow) {
          const { error: insertErr } = await supabase.from('members').insert({
            member_id: nexusId,
            nexus_id: nexusId,
            first_name: firstName,
            last_name: lastName,
            full_name: fullName,
            email: normalizedEmail,
            password: null,
            auth_user_id: data.user.id,
            role: 'user',
            avatar_url: null,
            created_at: createdAt,
          })
          if (insertErr && /unique|duplicate|violates.*unique/i.test(String(insertErr.message || insertErr))) {
            const { data: retryData, error: retryErr } = await supabase
              .from('members')
              .select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at')
              .eq('auth_user_id', data.user.id)
              .maybeSingle()
            if (!retryErr && retryData) memberRow = retryData
          } else if (!insertErr) {
            const { data: created, error: fetchErr } = await supabase
              .from('members')
              .select('id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at')
              .eq('auth_user_id', data.user.id)
              .maybeSingle()
            if (!fetchErr && created) memberRow = created
          }
        }
      }
    } catch {
      memberRow = null
    }

    clearPendingReg()

    const authUid = data?.user?.id || memberRow?.auth_user_id || null
    if (authUid && supabase) {
      try {
        const profilePayload = {
          id: authUid,
          first_name: firstName || data.user.user_metadata?.first_name || null,
          last_name: lastName || data.user.user_metadata?.last_name || null,
          full_name: fullName || data.user.user_metadata?.full_name || null,
          email: normalizedEmail,
          avatar_url: null,
          status: 'active',
          is_verified: true,
        }
        await supabase
          .from('profiles')
          .upsert(profilePayload, { onConflict: 'id', ignoreDuplicates: false })
      } catch {}
      try {
        await supabase
          .from('user_roles')
          .upsert({ profile_id: authUid, role: 'user' }, { onConflict: 'profile_id,role', ignoreDuplicates: true })
      } catch {}
    }

    const rawUser = memberRow || {
      id: authUid || data.user.id,
      auth_user_id: authUid || data.user.id,
      member_id: nexusId,
      nexus_id: nexusId,
      first_name: firstName || data.user.user_metadata?.first_name,
      last_name: lastName || data.user.user_metadata?.last_name,
      full_name: fullName || data.user.user_metadata?.full_name,
      email: normalizedEmail,
      role: 'user',
      avatar_url: null,
      created_at: createdAt,
    }
    const sessionUser = normalizeUser({ ...rawUser, email_verified: true })
    sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId)
    if (typeof window !== 'undefined') {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
    }
    setUser(sessionUser)
    return {
      user: sessionUser,
      nexusId: sessionUser.nexusId,
      password: pending?.password || null,
    }
  }

  const resendVerificationEmail = async ({ email }) => {
    const normalizedEmail = String(email || '').trim().toLowerCase()
    if (!normalizedEmail) throw new Error('Please enter your email address.')
    if (!isSupabaseConfigured() || !supabase) {
      throw new Error('Unable to resend the verification email right now. Please try again in a moment.')
    }
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: normalizedEmail,
    })
    if (error) throw new Error(getAuthErrorMessage(error, 'Unable to resend verification email. Please try again.'))
    return true
  }

  const forgotPassword = async ({ email }) => {
    const normalizedEmail = String(email || '').trim().toLowerCase()
    if (!normalizedEmail) throw new Error('Please enter your email address.')
    if (!isSupabaseConfigured() || !supabase) {
      throw new Error('Password reset emails are temporarily unavailable. Please try again in a moment.')
    }
    const redirectTo = typeof window !== 'undefined'
      ? `${window.location.origin}/reset-password?email=${encodeURIComponent(normalizedEmail)}`
      : undefined
    const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, {
      ...(redirectTo ? { redirectTo } : {}),
    })
    if (error) throw new Error(getAuthErrorMessage(error, 'Unable to send password reset email. Please try again.'))
    return true
  }

  const resetPasswordWithOtp = async ({ email, token, newPassword }) => {
    const normalizedEmail = String(email || '').trim().toLowerCase()
    const normalizedToken = String(token || '').trim()
    const password = String(newPassword || '').trim()
    if (!normalizedEmail) throw new Error('Email is required for password reset.')
    if (!normalizedToken || normalizedToken.length < 4 || normalizedToken.length > 6 || !/^\d+$/.test(normalizedToken)) {
      throw new Error('Please enter the 4 or 6 digit reset code sent to your email.')
    }
    if (!password || password.length < 6) throw new Error('Password must be at least 6 characters.')
    if (!isSupabaseConfigured() || !supabase) {
      throw new Error('Password reset is temporarily unavailable. Please try again in a moment.')
    }

    const { error: verifyError } = await supabase.auth.verifyOtp({
      email: normalizedEmail,
      token: normalizedToken,
      type: 'recovery',
    })
    if (verifyError) throw new Error(getAuthErrorMessage(verifyError, 'Invalid or expired reset code. Please try again.'))

    const { error: updateError } = await supabase.auth.updateUser({ password })
    if (updateError) throw new Error(getAuthErrorMessage(updateError, 'Unable to update your password. Please try again.'))

    return true
  }

  const updateProfile = async (updates) => {
    if (!user) return
    const updatedUser = {
      ...user,
      ...updates
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(updatedUser))
    }
    setUser(updatedUser)
    
    const storedUsers = readStoredUsers()
    const updatedUsers = storedUsers.map(candidate => {
      if (getUserNexusId(candidate) === getUserNexusId(user)) {
        return {
          ...candidate,
          ...updates
        }
      }
      return candidate
    })
    writeStoredUsers(updatedUsers)
    
    if (isSupabaseConfigured() && supabase) {
      try {
        const supabaseUpdates = {}
        if (updates.firstName !== undefined) {
          supabaseUpdates.first_name = updates.firstName
        }
        if (updates.lastName !== undefined) {
          supabaseUpdates.last_name = updates.lastName
        }
        if (updates.fullName !== undefined) {
          supabaseUpdates.full_name = updates.fullName
        }
        if (updates.avatarUrl !== undefined) {
          supabaseUpdates.avatar_url = updates.avatarUrl
        }
        
        const { error } = await supabase.from('members').update(supabaseUpdates).eq('member_id', user.nexusId)
        if (error) throw error
      } catch (err) {
        console.error('Supabase profile update failed', err)
      }
    }
  }

  const value = {
    user,
    loading,
    login,
    adminLogin,
    switchAccount,
    logout: switchAccount,
    register,
    verifyEmail,
    resendVerificationEmail,
    forgotPassword,
    resetPasswordWithOtp,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export { formatNexusIdForDisplay }
