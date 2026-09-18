import { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate, useLocation } from '../lib/router-compat'
import AuthShell from '../components/AuthShell'
import { useTheme } from '../hooks/useTheme'
import { useAuth } from '../lib/AuthContext'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

function useQueryEmail() {
  const location = useLocation()
  const search = location.search || ''
  const match = search.match(/[?&]email=([^&]+)/)
  return match ? decodeURIComponent(match[1]) : ''
}

export default function ResetPassword() {
  const queryEmail = useQueryEmail()
  const [email, setEmail] = useState(queryEmail)
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const navigate = useNavigate()
  const { theme } = useTheme()
  const { resetPasswordWithOtp } = useAuth()

  useEffect(() => {
    if (queryEmail) setEmail(queryEmail)
  }, [queryEmail])

  const themeClasses = useMemo(() => theme === 'dark'
    ? {
        muted: 'text-slate-300',
        card: 'border-white/10 bg-slate-900/80 text-slate-100',
        input: 'border-slate-700 bg-slate-800 text-white focus:border-blue-500',
        button: 'bg-blue-600 text-white hover:bg-blue-500',
        slot: 'border-slate-700 bg-slate-800 text-white',
      }
    : {
        muted: 'text-slate-600',
        card: 'border-slate-200 bg-white/80 text-slate-900',
        input: 'border-slate-300 bg-white text-slate-900 focus:border-blue-500',
        button: 'bg-blue-600 text-white hover:bg-blue-500',
        slot: 'border-slate-300 bg-white text-slate-900',
      }, [theme])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setInfo('')

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter your new password.')
      return
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (!token || token.length < 4 || token.length > 6 || !/^\d+$/.test(token)) {
      setError('Please enter the 4 or 6 digit reset code sent to your email.')
      return
    }

    setLoading(true)
    try {
      await resetPasswordWithOtp({ email, token, newPassword: password })
      setDone(true)
    } catch (err) {
      setError(err.message || 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <AuthShell title="Password reset complete" subtitle="Your Nexus account password has been updated. Sign in with your new password to continue." compact>
        <div className={`mx-auto flex max-w-md flex-col gap-5 rounded-[24px] border p-8 shadow-lg ${themeClasses.card}`}>
          <div className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm ${theme === 'dark' ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}>
            Password updated
          </div>
          <p className={`text-sm ${themeClasses.muted}`}>Use your new password the next time you sign in with your Nexus number or email.</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/login', { replace: true })}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${themeClasses.button}`}
            >
              Sign in now
            </button>
            <Link
              to="/"
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${theme === 'dark' ? 'border-white/10 text-slate-200 hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              Back to home
            </Link>
          </div>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell title="Reset your password" subtitle="Enter the reset code we emailed you (4 or 6 digits), then choose a new secure password for your Nexus account." compact>
      <div className="mx-auto w-full max-w-md">
        <form onSubmit={handleSubmit} className={`rounded-[24px] border p-6 shadow-lg ${themeClasses.card} space-y-6`}>
          <h2 className="text-2xl font-semibold">Choose a new password</h2>
          <p className={`text-sm ${themeClasses.muted}`}>Paste or type the 4 or 6 digit code from your password reset email, then enter a new password that’s at least 6 characters long.</p>

          <div>
            <label className={`mb-2 block text-sm font-medium ${themeClasses.muted}`}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className={`block text-sm font-medium ${themeClasses.muted}`}>Reset code (4 or 6 digits)</label>
              <div className="inline-flex rounded-lg border p-0.5 text-xs font-medium">
                {[4, 6].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setToken('')}
                    className={`rounded-md px-3 py-1 transition ${token.length > 0 && token.length === n
                      ? theme === 'dark'
                        ? 'bg-blue-500/20 text-blue-200'
                        : 'bg-blue-100 text-blue-700'
                      : themeClasses.muted
                    }`}
                  >
                    {n} digits
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full">
              <InputOTP
                maxLength={6}
                value={token}
                onChange={(next) => setToken(next.replace(/\D/g, '').slice(0, 6))}
                pattern={REGEXP_ONLY_DIGITS}
                inputMode="numeric"
                containerClassName="w-full justify-start gap-2"
              >
                <InputOTPGroup>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className={`h-12 w-11 text-lg font-semibold rounded-md ${themeClasses.slot} border`}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <p className={`mt-2 text-xs ${themeClasses.muted}`}>If you got a 4-digit code, fill only the first 4 boxes and submit.</p>
          </div>

          <div>
            <label className={`mb-2 block text-sm font-medium ${themeClasses.muted}`}>New password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`}
              placeholder="At least 6 characters"
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-medium ${themeClasses.muted}`}>Confirm new password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`}
              placeholder="Re-type the new password"
            />
          </div>

          {error && <p className="text-sm text-rose-400">{error}</p>}
          {info && <p className="text-sm text-emerald-500 dark:text-emerald-400">{info}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl px-4 py-3 font-semibold transition-colors disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`}
          >
            {loading ? 'Resetting password...' : 'Reset password'}
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link to="/forgot-password" className={`${themeClasses.muted} hover:underline`}>
            Need a new code?
          </Link>
          <Link to="/login" className="font-semibold text-blue-500 hover:underline">
            Back to sign in
          </Link>
        </div>
      </div>
    </AuthShell>
  )
}
