import { useEffect, useMemo, useState } from 'react'
import { Link } from '../lib/router-compat'
import { Pencil, Plus, RefreshCw, Search, ShieldCheck, Trash2, X, Heart, MessageCircle, Send } from 'lucide-react'
import { useAuth } from '../lib/AuthContext'
import { supabase } from '../lib/supabase'

const emptyForm = { id: '', type: 'text', status: 'active', user_name: 'Nexus', user_avatar_url: '', is_admin_post: true, content: '' }

const typeBadgeColors = {
  text: 'bg-slate-700 text-slate-300',
  news: 'bg-orange-500/15 text-orange-400',
  event: 'bg-emerald-500/15 text-emerald-400',
  announcement: 'bg-purple-500/15 text-purple-400',
}

const statusBadgeColors = {
  active: 'bg-emerald-500/15 text-emerald-400',
  draft: 'bg-amber-500/15 text-amber-400',
  inactive: 'bg-slate-700 text-slate-400',
}

export default function AdminFeeds() {
  const { user } = useAuth()
  const [feeds, setFeeds] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const request = async (method, body) => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) throw new Error('Your Admin session has expired. Please sign in again.')
    const response = await fetch('/api/admin/feeds', {
      method,
      headers: { Authorization: `Bearer ${session.access_token}`, 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(body),
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Unable to complete request.')
    return result
  }

  const loadFeeds = async () => {
    setLoading(true)
    try {
      const result = await request('GET')
      setFeeds(result.feeds || result.posts || [])
      setMessage('Feeds refreshed.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to load feeds.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadFeeds() }, [])

  const visibleFeeds = useMemo(() => feeds.filter((post) => {
    const text = `${post.user_name || ''} ${post.content || ''}`.toLowerCase()
    const matchesQuery = text.includes(query.toLowerCase())
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter
    const matchesType = typeFilter === 'all' || post.type === typeFilter
    return matchesQuery && matchesStatus && matchesType
  }), [feeds, query, statusFilter, typeFilter])

  const savePost = async (event) => {
    event.preventDefault()
    try {
      await request(form.id ? 'PATCH' : 'POST', { post: form })
      setForm(emptyForm)
      setMessage(form.id ? 'Post updated.' : 'Post created.')
      await loadFeeds()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to save post.')
    }
  }

  const removePost = async (post) => {
    if (!window.confirm(`Delete this post?`)) return
    try {
      await request('DELETE', { id: post.id })
      setMessage('Post deleted.')
      await loadFeeds()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to delete post.')
    }
  }

  const toggleStatus = async (post) => {
    try {
      const newStatus = post.status === 'active' ? 'inactive' : 'active'
      await request('PATCH', { post: { ...post, status: newStatus } })
      setMessage(post.status === 'active' ? 'Post unpublished.' : 'Post published.')
      await loadFeeds()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to update status.')
    }
  }

  const truncateContent = (content, max = 200) => {
    if (!content) return ''
    return content.length > max ? `${content.slice(0, max)}...` : content
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    try {
      return new Date(dateStr).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    } catch {
      return dateStr
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex flex-wrap items-center gap-4 text-sm"><Link to="/admin/dashboard" className="text-slate-400 hover:text-white">Dashboard</Link><Link to="/admin/users" className="text-slate-400 hover:text-white">Users</Link><Link to="/admin/feeds" className="font-semibold text-blue-400">Feeds</Link><Link to="/admin/support" className="text-slate-400 hover:text-white">Support</Link><Link to="/admin/settings" className="text-slate-400 hover:text-white">Settings</Link></nav>
        <div className="mb-8 flex flex-col gap-5 rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">Communication</p><h1 className="mt-2 text-3xl font-semibold">Live Feed — News & Events</h1><p className="mt-2 text-sm text-slate-400">Broadcast announcements, share news, and post community events to the Nexus feed.</p></div><div className="flex items-center gap-3"><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"><ShieldCheck className="mr-1 inline h-3.5 w-3.5" />Admin only</span><button type="button" onClick={loadFeeds} disabled={loading} title="Refresh feeds" className="rounded-xl border border-slate-700 p-3 text-slate-300 hover:border-blue-500 disabled:opacity-50"><RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} /></button></div></div>
        <div className="grid gap-8 xl:grid-cols-[360px_1fr]">
          <form onSubmit={savePost} className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold">{form.id ? 'Edit post' : 'New post'}</h2>{form.id && <button type="button" onClick={() => setForm(emptyForm)} title="Cancel editing" className="text-slate-400 hover:text-white"><X className="h-4 w-4" /></button>}</div><div className="mt-5 space-y-3">
            <label className="block text-sm text-slate-300">Type
              <div className="mt-1 flex items-center gap-2">
                <select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500">
                  <option value="text">Text</option>
                  <option value="news">News</option>
                  <option value="event">Event</option>
                  <option value="announcement">Announcement</option>
                </select>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize whitespace-nowrap ${typeBadgeColors[form.type]}`}>{form.type}</span>
              </div>
            </label>
            <label className="block text-sm text-slate-300">Status
              <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })} className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500">
                <option value="active">Active — Publish immediately</option>
                <option value="draft">Draft</option>
                <option value="inactive">Inactive</option>
              </select>
            </label>
            <label className="block text-sm text-slate-300">Author name
              <input type="text" value={form.user_name} onChange={(event) => setForm({ ...form, user_name: event.target.value })} className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500" />
            </label>
            <label className="block text-sm text-slate-300">Avatar URL (optional)
              <input type="text" value={form.user_avatar_url} onChange={(event) => setForm({ ...form, user_avatar_url: event.target.value })} placeholder="https://..." className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none placeholder:text-slate-600 focus:border-blue-500" />
            </label>
            <label className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" checked={form.is_admin_post} onChange={(event) => setForm({ ...form, is_admin_post: event.target.checked })} className="rounded border-slate-600 bg-slate-950 text-blue-600 focus:ring-blue-500" />
              Mark as official Nexus post (Nexus Badge)
            </label>
            <label className="block text-sm text-slate-300">Content
              <textarea rows={6} value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} placeholder="Write your announcement, news, or event details..." className="mt-1 block w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none placeholder:text-slate-600 focus:border-blue-500" />
            </label>
          </div><button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">{form.id ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}{form.id ? 'Save changes' : 'Publish post'}</button>{message && <p className="mt-4 text-sm text-slate-400">{message}</p>}</form>
          <section>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold">All posts <span className="text-sm font-normal text-slate-500">{visibleFeeds.length} shown</span></h2>
              <div className="flex flex-wrap gap-2">
                <label className="flex items-center rounded-xl border border-slate-800 bg-slate-900 px-3 text-slate-400">
                  <Search className="h-4 w-4" />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search posts" className="w-36 bg-transparent px-2 py-2 text-sm text-white outline-none" />
                </label>
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-300">
                  <option value="all">All status</option>
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                  <option value="inactive">Inactive</option>
                </select>
                <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className="rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-300">
                  <option value="all">All types</option>
                  <option value="text">Text</option>
                  <option value="news">News</option>
                  <option value="event">Event</option>
                  <option value="announcement">Announcement</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              {visibleFeeds.map((post) => (
                <div key={post.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold">{post.user_name || 'Anonymous'}</p>
                        {post.is_admin_post && <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground">Nexus Badge</span>}
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize ${typeBadgeColors[post.type] || typeBadgeColors.text}`}>{post.type || 'text'}</span>
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize ${statusBadgeColors[post.status] || statusBadgeColors.inactive}`}>{post.status || 'inactive'}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">{truncateContent(post.content)}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1"><Heart className="h-3.5 w-3.5" />{post.likes_count ?? post.likes ?? 0}</span>
                        <span className="inline-flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" />{post.comments_count ?? post.comments ?? 0}</span>
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setForm({ ...emptyForm, ...post })} title="Edit post" className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-blue-500"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => toggleStatus(post)} title={post.status === 'active' ? 'Unpublish' : 'Publish'} className={`rounded-lg border px-3 py-2 text-xs font-medium ${post.status === 'active' ? 'border-amber-700 text-amber-300 hover:bg-amber-950' : 'border-emerald-700 text-emerald-300 hover:bg-emerald-950'}`}>{post.status === 'active' ? 'Unpublish' : 'Publish'}</button>
                      <button onClick={() => removePost(post)} title="Delete post" className="rounded-lg border border-rose-900 p-2 text-rose-300 hover:bg-rose-950"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
              {!visibleFeeds.length && <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm text-slate-400">No posts match the current filters.</div>}
            </div>
          </section>
        </div>
        {message && <p className="mt-5 text-sm text-slate-400">{message}</p>}
      </div>
    </main>
  )
}
