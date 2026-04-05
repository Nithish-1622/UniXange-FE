import { TrustScorePanel } from '../../components/trust/TrustScorePanel'

export function ProfilePage() {
  return (
    <section className="space-y-4">
      <header className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-card">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900">Your profile</h1>
        <p className="mt-2 text-sm text-slate-600">Track trust metrics, active listings, completed deals, and wishlist collections.</p>
      </header>
      <TrustScorePanel />
    </section>
  )
}
