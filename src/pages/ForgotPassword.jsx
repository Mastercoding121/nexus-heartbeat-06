import { useState, useMemo } from 'react'
import { Link, useNavigate } from '../lib/router-compat'
import AuthShell from '../components/AuthShell'
import { useTheme } from '../hooks/useTheme'
import { useAuth } from '../lib/AuthContext'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme()
  const { forgotPassword } = useAuth()
  const navigate = useNavigate()

  const themeClasses = useMemo(() => theme === 'dark'
    ? {
        muted: 'text-slate-300',
        card: 'border-white/10 bg-slate-900/80 text-slate-100',
        input: 'border-slate-700 bg-slate-800 text-white focus:border-blue-500',
        button: 'bg-blue-600 text-white hover:bg-blue-500'
      }
    : {
        muted: 'text-slate-600',
        card: 'border-slate-200 bg-white/80 text-slate-900',
        input: 'border-slate-300 bg-white text-slate-900 focus:border-blue-500',
        button: 'bg-blue-600 text-white hover:bg-blue-500'
      }, [theme])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      await forgotPassword({ email })
      const targetEmail = encodeURIComponent(String(email || '').trim().toLowerCase())
      navigate(`/reset-password${targetEmail ? `?email=${targetEmail}` : ''}`, { replace: true })
    } catch (err) {
      setError(err.message || 'Failed to send reset email')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Forgot your password?" subtitle="Enter the email connected to your account and we’ll send you a 4 or 6-digit reset code to secure your account." compact>
      <div className="mx-auto w-full max-w-md">
        <form onSubmit={handleSubmit} className={`rounded-[24px] border p-6 shadow-lg ${themeClasses.card} space-y-6`}>
          <h2 className="text-2xl font-semibold">Reset your password</h2>
          <p className={`text-sm ${themeClasses.muted}`}>We’ll send a 4 or 6-digit reset code to the email on file. Use it on the next screen to pick a new password.</p>
          <div>
            <label className={`mb-2 block text-sm font-medium ${themeClasses.muted}`}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`}
              placeholder="you@example.com"
            />
          </div>
          {error && <p className="text-sm text-rose-400">{error}</p>}
          {message && <p className="text-sm text-green-500">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl px-4 py-3 font-semibold transition-colors disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`}
          >
            {loading ? 'Sending code...' : 'Send reset code'}
          </button>
        </form>
        <p className={`mt-6 text-center text-sm ${themeClasses.muted}`}>
          Remember your password?{' '}
          <Link to="/login" className="font-semibold text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}
