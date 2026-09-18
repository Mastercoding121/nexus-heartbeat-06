import { useState, useEffect, useMemo, useRef } from 'react'
import { Link, useNavigate, useLocation } from '../lib/router-compat'
import { useAuth, formatNexusIdForDisplay } from '../lib/AuthContext'
import { useTheme } from '../hooks/useTheme'
import AuthShell from '../components/AuthShell'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

function useQueryEmail() {
  const location = useLocation()
  const search = location.search || ''
  const match = search.match(/[?&]email=([^&]+)/)
  return match ? decodeURIComponent(match[1]) : ''
}

export default function VerifyEmail() {
  const queryEmail = useQueryEmail()
  const [email, setEmail] = useState(queryEmail)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(true)
  const [countdown, setCountdown] = useState(30)
  const [verified, setVerified] = useState(null)
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const { verifyEmail, resendVerificationEmail, user } = useAuth()
  const navigate = useNavigate()
  const countdownRef = useRef(null)

  useEffect(() => {
    if (user && !verified) {
      navigate('/app', { replace: true })
    }
  }, [user, navigate, verified])

  useEffect(() => {
    if (!queryEmail) return
    setCountdown(30)
    setResendDisabled(true)
  }, [queryEmail])

  useEffect(() => {
    if (!resendDisabled) return undefined
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setResendDisabled(false)
          clearInterval(countdownRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current)
    }
  }, [resendDisabled])

  const themeClasses = useMemo(() => theme === 'dark'
    ? {
        muted: 'text-slate-300',
        card: 'border-white/10 bg-slate-900/80 text-slate-100',
        input: 'border-slate-700 bg-slate-800 text-white focus:border-blue-500',
        button: 'bg-blue-600 text-white hover:bg-blue-500',
        slot: 'border-slate-700 bg-slate-800 text-white first:border-l-slate-700 last:border-r-slate-700',
      }
    : {
        muted: 'text-slate-600',
        card: 'border-slate-200 bg-white/80 text-slate-900',
        input: 'border-slate-300 bg-white text-slate-900 focus:border-blue-500',
        button: 'bg-blue-600 text-white hover:bg-blue-500',
        slot: 'border-slate-300 bg-white text-slate-900 first:border-l-slate-300 last:border-r-slate-300',
      }, [theme])

  const handleResend = async (e) => {
    e?.preventDefault?.()
    setError('')
    setInfo('')
    const normalizedEmail = String(email || '').trim().toLowerCase()
    if (!normalizedEmail) {
      setError('Please enter your email address.')
      return
    }
    setResendLoading(true)
    try {
      await resendVerificationEmail({ email: normalizedEmail })
      setInfo('New verification code sent. Check your inbox and spam folder.')
      setCountdown(30)
      setResendDisabled(true)
    } catch (err) {
      setError(err.message || 'Failed to resend verification code.')
    } finally {
      setResendLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setInfo('')
    const normalizedEmail = String(email || '').trim().toLowerCase()
    if (!normalizedEmail) {
      setError('Please enter the email address you registered with.')
      return
    }
    if (!code || code.length < 4 || code.length > 6 || !/^\d+$/.test(code)) {
      setError('Please enter the 4 or 6 digit verification code sent to your email.')
      return
    }
    setLoading(true)
    try {
      const result = await verifyEmail({ email: normalizedEmail, token: code })
      setVerified(result)
    } catch (err) {
      setError(err.message || 'Verification failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (verified) {
    const memberNumber = verified.user?.nexusIdDisplay || verified.nexusId ? formatNexusIdForDisplay(verified.nexusId) : null
    return (
      <AuthShell
        title="Email verified — your Nexus account is ready"
        subtitle="Your email has been confirmed and your Nexus membership is now active."
        compact
      >
        <div className={`flex flex-col rounded-[24px] border p-8 ${theme === 'dark' ? 'border-emerald-500/20 bg-slate-900/60' : 'border-emerald-200 bg-white/80'}`}>
          <div className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm ${theme === 'dark' ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}>
            Verification complete
          </div>
          {memberNumber && (
            <div className={`mt-6 rounded-2xl border p-5 ${theme === 'dark' ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-200 bg-blue-50'}`}>
              <p className={`text-sm ${themeClasses.muted}`}>Your Nexus number</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <p className="text-2xl font-semibold tracking-[0.25em] text-blue-500 dark:text-blue-400">{memberNumber}</p>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(memberNumber.replace(/[^0-9]/g, ''))
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    } catch {
                      setCopied(false)
                    }
                  }}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${theme === 'dark' ? 'border-white/10 text-slate-200 hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className={`mt-4 text-sm ${themeClasses.muted}`}>Keep this number safe. You’ll use it to sign in from any device.</p>
              {verified.password && (
                <>
                  <p className={`mt-2 text-sm ${themeClasses.muted}`}>Your password is shown below for convenience.</p>
                  <p className="mt-2 text-lg font-semibold">{verified.password}</p>
                </>
              )}
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/app')}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${themeClasses.button}`}
            >
              Continue to app
            </button>
            <Link
              to="/login"
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${theme === 'dark' ? 'border-white/10 text-slate-200 hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              Sign in later
            </Link>
          </div>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      title="Verify your email"
      subtitle="Enter the 4 or 6 digit code we just sent to your email to activate your Nexus account."
      compact
    >
      <div className="mx-auto w-full max-w-xl">
        <form onSubmit={handleSubmit} className={`rounded-[24px] border p-6 shadow-lg ${themeClasses.card}`}>
          <h2 className="text-2xl font-semibold">Email verification</h2>
          <p className={`mt-2 text-sm ${themeClasses.muted}`}>We sent a verification code to your email. It expires after a few minutes — use 4 digits or 6 digits, whichever arrived.</p>

          <div className="mt-6 space-y-5">
            <div>
              <label className={`mb-2 block text-sm font-medium ${themeClasses.muted}`}>Registered email</label>
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
                <label className={`block text-sm font-medium ${themeClasses.muted}`}>Verification code</label>
                <div className="inline-flex rounded-lg border p-0.5 text-xs font-medium">
                  {[4, 6].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setCode('')}
                      className={`rounded-md px-3 py-1 transition ${code.length > 0 && code.length === n
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
                  value={code}
                  onChange={(next) => setCode(next.replace(/\D/g, '').slice(0, 6))}
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
              <p className={`mt-2 text-xs ${themeClasses.muted}`}>Tip: paste the whole code into any slot. If your email shows a 4-digit code, fill only the first 4 boxes and submit.</p>
            </div>

            {error && <p className="text-sm text-rose-400">{error}</p>}
            {info && <p className="text-sm text-emerald-500 dark:text-emerald-400">{info}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`}
            >
              {loading ? 'Verifying...' : 'Verify & activate account'}
            </button>

            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                onClick={handleResend}
                disabled={resendLoading || resendDisabled}
                className={`font-medium text-blue-500 hover:underline disabled:cursor-not-allowed disabled:text-slate-500 disabled:no-underline`}
              >
                {resendLoading
                  ? 'Sending...'
                  : resendDisabled
                    ? `Resend code (${countdown}s)`
                    : 'Resend code'}
              </button>
              <Link to="/login" className={`font-medium ${themeClasses.muted} hover:underline`}>
                Back to sign in
              </Link>
            </div>

            <div className={`rounded-2xl border p-4 text-sm ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
              Tip: Didn’t get the email? Check your spam/junk folder or promotions tab, then click “Resend code”.
            </div>
          </div>
        </form>
      </div>
    </AuthShell>
  )
}
