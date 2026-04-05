import { ShieldCheck } from 'lucide-react'

export function TrustScorePanel() {
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-card">
      <div className="mb-2 flex items-center gap-2 text-emerald-800">
        <ShieldCheck size={18} />
        <h2 className="font-heading text-lg font-semibold">Trust Snapshot</h2>
      </div>
      <dl className="grid grid-cols-3 gap-3 text-sm">
        <div>
          <dt className="text-emerald-700">Response rate</dt>
          <dd className="font-price text-xl font-bold tabular-nums text-emerald-900">92%</dd>
        </div>
        <div>
          <dt className="text-emerald-700">Deals closed</dt>
          <dd className="font-price text-xl font-bold tabular-nums text-emerald-900">47</dd>
        </div>
        <div>
          <dt className="text-emerald-700">Account age</dt>
          <dd className="font-price text-xl font-bold tabular-nums text-emerald-900">2.4y</dd>
        </div>
      </dl>
    </section>
  )
}
