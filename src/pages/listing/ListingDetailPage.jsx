import { MessageCircle, ShieldAlert, Star } from 'lucide-react'
import { TrustSignalPill } from '../../components/common/TrustSignalPill'

export function ListingDetailPage() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <article className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-card">
        <div className="mb-4 h-64 rounded-xl bg-gradient-to-br from-cyan-200/35 via-slate-100 to-amber-100/40" />
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900">iPad 9th Gen 64GB</h1>
        <p className="mt-1 font-price text-3xl font-bold tabular-nums text-slate-900">Rs 19,500</p>
        <p className="mt-3 text-sm text-slate-600">Great battery, includes original charger and case. Pickup near Hostel A entrance.</p>
      </article>

      <aside className="space-y-4">
        <section className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-card">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Trust panel</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <TrustSignalPill tone="success">Verified Student</TrustSignalPill>
            <TrustSignalPill tone="warning">Fast Responder</TrustSignalPill>
            <TrustSignalPill tone="info">Low Report Risk</TrustSignalPill>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-600">
            <div><p className="font-price text-lg font-bold text-slate-900">95%</p><p>Response</p></div>
            <div><p className="font-price text-lg font-bold text-slate-900">41</p><p>Deals</p></div>
            <div><p className="font-price text-lg font-bold text-slate-900">2y</p><p>Age</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-card">
          <div className="grid gap-2">
            <button className="btn-primary"><MessageCircle size={16} /> Message seller</button>
            <button className="btn-secondary"><Star size={16} /> Save listing</button>
            <button className="btn-danger"><ShieldAlert size={16} /> Report listing</button>
          </div>
        </section>
      </aside>
    </section>
  )
}
