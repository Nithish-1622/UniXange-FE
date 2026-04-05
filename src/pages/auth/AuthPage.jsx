import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { isCollegeEmail } from '../../utils/validators'

export function AuthPage() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' })
  const [mode, setMode] = useState('login')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, signup } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/feed'

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!isCollegeEmail(form.email)) {
      setError('Use your college email address (.edu or .ac.in).')
      return
    }

    setLoading(true)
    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password })
      } else {
        await signup({ fullName: form.fullName, email: form.email, password: form.password })
      }
      navigate(from, { replace: true })
    } catch (apiError) {
      setError(apiError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-slate-900/10 bg-white p-6 shadow-card md:p-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Verified access</p>
      <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900">Campus login only</h1>
      <p className="mt-2 text-sm text-slate-600">Use your college email to unlock trusted marketplace, chat, and lost-and-found flows.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {mode === 'signup' ? (
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Full name</span>
            <input
              className="field"
              value={form.fullName}
              onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
              required
            />
          </label>
        ) : null}

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">College email</span>
          <input
            type="email"
            className="field"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            className="field"
            value={form.password}
            onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
            required
          />
        </label>

        {error ? <p className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-800">{error}</p> : null}

        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? 'Please wait...' : mode === 'login' ? 'Login to UniXchange' : 'Create account'}
        </button>
      </form>

      <button
        className="mt-4 text-sm font-medium text-cyan-700 hover:text-cyan-800"
        onClick={() => setMode((prev) => (prev === 'login' ? 'signup' : 'login'))}
      >
        {mode === 'login' ? 'Need an account? Sign up' : 'Already registered? Login'}
      </button>
    </section>
  )
}
