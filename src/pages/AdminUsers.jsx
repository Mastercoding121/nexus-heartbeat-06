import { useEffect, useMemo, useState } from 'react'
import { Link } from '../lib/router-compat'
import { Pencil, Plus, RefreshCw, Search, ShieldCheck, Trash2, UserRound, UserRoundCheck, UserRoundX, Wallet, X } from 'lucide-react'
import { useAuth } from '../lib/AuthContext'
import { supabase } from '../lib/supabase'

const emptyForm = { id: '', member_id: '', nexus_id: '', first_name: '', last_name: '', email: '', user_password: '', role: 'user', wallet_balance: 0, avatar_url: '', is_active: true }

const formatCurrency = (value) => {
  const num = Number(value) || 0
  return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const formatDate = (value) => {
  if (!value) return '—'
  try {
    const d = new Date(value)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return '—'
  }
}

const isRecentlyOnline = (value) => {
  if (!value) return false
  try {
    const diffMs = Date.now() - new Date(value).getTime()
    return diffMs <= 5 * 60 * 1000
  } catch {
    return false
  }
}

const formatLastSeen = (value) => {
  if (!value) return '—'
  if (isRecentlyOnline(value)) return <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" />Online</span>
  return formatDate(value)
}

const generateNexusId = () => {
  const digits = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('')
  return `10${digits}`
}

const roleBadgeClass = (role) => {
  switch (role) {
    case 'admin': return 'bg-blue-500/15 text-blue-300'
    case 'moderator': return 'bg-purple-500/15 text-purple-300'
    default: return 'bg-slate-700 text-slate-300'
  }
}

export default function AdminUsers() {
  const { user } = useAuth()
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [roleFilter, setRoleFilter] = useState('all')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [visibleLimit, setVisibleLimit] = useState(50)

  const request = async (method, selectedUser) => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) throw new Error('Your Admin session has expired. Please sign in again.')
    const response = await fetch('/api/admin/users', {
      method,
      headers: { Authorization: `Bearer ${session.access_token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: selectedUser }),
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Unable to complete request.')
    return result
  }

  const loadUsers = async () => {
    setLoading(true)
    try {
      const result = await request('GET')
      setUsers(result.users || [])
      setVisibleLimit(50)
      setMessage('Users refreshed.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to load users.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadUsers() }, [])

  const visibleUsers = useMemo(() => users.filter((candidate) => {
    const fullName = candidate.full_name || `${candidate.first_name || ''} ${candidate.last_name || ''}`.trim()
    const text = `${fullName || ''} ${candidate.member_id || ''} ${candidate.nexus_id || ''} ${candidate.email || ''}`.toLowerCase()
    const textMatch = text.includes(query.toLowerCase())
    const statusMatch = statusFilter === 'all' || (statusFilter === 'active') === candidate.is_active
    const roleMatch = roleFilter === 'all' || candidate.role === roleFilter
    return textMatch && statusMatch && roleMatch
  }), [users, query, statusFilter, roleFilter])

  const paginatedUsers = useMemo(() => visibleUsers.slice(0, visibleLimit), [visibleUsers, visibleLimit])
  const hasMore = visibleUsers.length > visibleLimit

  const saveUser = async (event) => {
    event.preventDefault()
    try {
      await request(form.id ? 'PATCH' : 'POST', form)
      setForm(emptyForm)
      setMessage(form.id ? 'User updated.' : 'User created.')
      await loadUsers()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to save user.')
    }
  }

  const removeUser = async (candidate) => {
    const displayName = candidate.full_name || `${candidate.first_name || ''} ${candidate.last_name || ''}`.trim() || candidate.member_id || candidate.nexus_id
    if (!window.confirm(`Delete ${displayName}?`)) return
    try {
      await request('DELETE', { id: candidate.id })
      setMessage('User deleted.')
      await loadUsers()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to delete user.')
    }
  }

  const toggleStatus = async (candidate) => {
    try {
      await request('PATCH', { ...candidate, user_password: '', is_active: !candidate.is_active })
      setMessage(candidate.is_active ? 'User deactivated.' : 'User activated.')
      await loadUsers()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to update status.')
    }
  }

  const adjustWallet = (delta) => {
    setForm((prev) => ({ ...prev, wallet_balance: Number(((Number(prev.wallet_balance) || 0) + delta).toFixed(2)) }))
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex flex-wrap items-center gap-4 text-sm">
          <Link to="/admin/dashboard" className="text-slate-400 hover:text-white">Dashboard</Link>
          <Link to="/admin/users" className="font-semibold text-blue-400">Users</Link>
          <Link to="/admin/feeds" className="text-slate-400 hover:text-white">Feeds</Link>
          <Link to="/admin/support" className="text-slate-400 hover:text-white">Support</Link>
          <Link to="/admin/settings" className="text-slate-400 hover:text-white">Settings</Link>
        </nav>
        <div className="mb-8 flex flex-col gap-5 rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">People and access</p>
            <h1 className="mt-2 text-3xl font-semibold">User control center</h1>
            <p className="mt-2 text-sm text-slate-400">Create accounts, manage access, and keep inactive users out of the workspace.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5" />Admin only
            </span>
            <button type="button" onClick={loadUsers} disabled={loading} title="Refresh users" className="rounded-xl border border-slate-700 p-3 text-slate-300 hover:border-blue-500 disabled:opacity-50">
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
        <div className="grid gap-8 xl:grid-cols-[360px_1fr]">
          <form onSubmit={saveUser} className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{form.id ? 'Modify user' : 'Create user'}</h2>
              {form.id && <button type="button" onClick={() => setForm(emptyForm)} title="Cancel editing" className="text-slate-400 hover:text-white"><X className="h-4 w-4" /></button>}
            </div>
            <div className="mt-5 space-y-3">
              <div>
                <label className="block text-sm text-slate-300">Nexus ID</label>
                <div className="mt-1 flex gap-2">
                  <input
                    type="text"
                    value={form.nexus_id || form.member_id}
                    onChange={(event) => setForm({ ...form, nexus_id: event.target.value, member_id: event.target.value })}
                    className="block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => { const id = generateNexusId(); setForm({ ...form, nexus_id: id, member_id: id }) }}
                    className="shrink-0 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-white"
                  >
                    Auto-generate
                  </button>
                </div>
              </div>
              <label className="block text-sm text-slate-300">
                First name
                <input
                  type="text"
                  value={form.first_name}
                  onChange={(event) => setForm({ ...form, first_name: event.target.value })}
                  className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Last name
                <input
                  type="text"
                  value={form.last_name}
                  onChange={(event) => setForm({ ...form, last_name: event.target.value })}
                  className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </label>
              <label className="block text-sm text-slate-300">
                {form.id ? 'New password (optional)' : 'Password'}
                <input
                  required={!form.id}
                  type="password"
                  value={form.user_password}
                  onChange={(event) => setForm({ ...form, user_password: event.target.value })}
                  className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Role
                <select
                  value={form.role}
                  onChange={(event) => setForm({ ...form, role: event.target.value })}
                  className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white"
                >
                  <option value="user">User</option>
                  <option value="moderator">Moderator</option>
                  <option value="admin">Admin</option>
                </select>
              </label>
              <div>
                <label className="block text-sm text-slate-300">
                  Wallet balance
                </label>
                <div className="mt-1 flex items-center gap-2">
                  <Wallet className="h-4 w-4 shrink-0 text-slate-400" />
                  <input
                    type="number"
                    step="0.01"
                    value={form.wallet_balance}
                    onChange={(event) => setForm({ ...form, wallet_balance: Number(event.target.value) || 0 })}
                    className="block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {[
                    { label: '+10', onClick: () => adjustWallet(10) },
                    { label: '+50', onClick: () => adjustWallet(50) },
                    { label: '+100', onClick: () => adjustWallet(100) },
                    { label: '-10', onClick: () => adjustWallet(-10) },
                    { label: '-50', onClick: () => adjustWallet(-50) },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      type="button"
                      onClick={btn.onClick}
                      className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300 hover:border-blue-500 hover:text-white"
                    >
                      {btn.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, wallet_balance: 0 }))}
                    className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300 hover:border-amber-500 hover:text-white"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <label className="block text-sm text-slate-300">
                Avatar URL
                <input
                  type="text"
                  value={form.avatar_url}
                  onChange={(event) => setForm({ ...form, avatar_url: event.target.value })}
                  placeholder="https://..."
                  className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </label>
              <label className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(event) => setForm({ ...form, is_active: event.target.checked })}
                />
                Active account
              </label>
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">
              {form.id ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {form.id ? 'Save changes' : 'Create user'}
            </button>
          </form>
          <section>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold">All users <span className="text-sm font-normal text-slate-500">{visibleUsers.length} shown</span></h2>
              <div className="flex flex-wrap gap-2">
                <label className="flex items-center rounded-xl border border-slate-800 bg-slate-900 px-3 text-slate-400">
                  <Search className="h-4 w-4" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search users"
                    className="w-36 bg-transparent px-2 py-2 text-sm text-white outline-none"
                  />
                </label>
                <select
                  value={roleFilter}
                  onChange={(event) => setRoleFilter(event.target.value)}
                  className="rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-300"
                >
                  <option value="all">All roles</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                  <option value="user">User</option>
                </select>
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-300"
                >
                  <option value="all">All status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              {loading && (
                <div className="flex items-center justify-center p-8">
                  <RefreshCw className="h-6 w-6 animate-spin text-blue-400" />
                </div>
              )}
              {!loading && paginatedUsers.map((candidate) => {
                const displayName = candidate.full_name || `${candidate.first_name || ''} ${candidate.last_name || ''}`.trim() || 'Unnamed user'
                const displayId = candidate.nexus_id || candidate.member_id
                return (
                  <div key={candidate.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 p-4 last:border-0">
                    <div className="flex items-start gap-4">
                      {candidate.avatar_url ? (
                        <img
                          src={candidate.avatar_url}
                          alt={displayName}
                          className="h-12 w-12 shrink-0 rounded-full object-cover border border-slate-700"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400">
                          <UserRound className="h-6 w-6" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-medium truncate">{displayName}</p>
                          <span className={`rounded-full px-2 py-0.5 text-[11px] capitalize ${roleBadgeClass(candidate.role)}`}>
                            {candidate.role || 'user'}
                          </span>
                          <span className={`rounded-full px-2 py-0.5 text-[11px] ${candidate.is_active ? 'bg-emerald-400/10 text-emerald-300' : 'bg-slate-700 text-slate-400'}`}>
                            {candidate.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
                          {displayId && <span>ID: {displayId}</span>}
                          {candidate.email && <span className="truncate">{candidate.email}</span>}
                          <span className="inline-flex items-center gap-1 text-amber-300">
                            <Wallet className="h-3.5 w-3.5" />
                            {formatCurrency(candidate.wallet_balance)}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                          <span>Joined {formatDate(candidate.created_at)}</span>
                          <span>Last seen {formatLastSeen(candidate.last_seen_at)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setForm({ ...emptyForm, ...candidate, nexus_id: candidate.nexus_id || candidate.member_id || '', member_id: candidate.member_id || candidate.nexus_id || '', wallet_balance: Number(candidate.wallet_balance) || 0, user_password: '' })}
                        title="Edit user"
                        className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-blue-500"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => toggleStatus(candidate)}
                        title={candidate.is_active ? 'Deactivate user' : 'Activate user'}
                        className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-amber-500"
                      >
                        {candidate.is_active ? <UserRoundX className="h-4 w-4" /> : <UserRoundCheck className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => removeUser(candidate)}
                        title="Delete user"
                        className="rounded-lg border border-rose-900 p-2 text-rose-300 hover:bg-rose-950"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
              {!loading && hasMore && (
                <div className="border-t border-slate-800 p-4">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit((prev) => prev + 50)}
                    className="w-full rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-white"
                  >
                    Load more ({visibleUsers.length - visibleLimit} remaining)
                  </button>
                </div>
              )}
              {!loading && !visibleUsers.length && (
                <p className="p-6 text-sm text-slate-400">No users match the current filters.</p>
              )}
            </div>
          </section>
        </div>
        {message && <p className="mt-5 text-sm text-slate-400">{message}</p>}
      </div>
    </main>
  )
}
