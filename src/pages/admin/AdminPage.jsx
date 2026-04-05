export function AdminPage() {
  return (
    <section className="space-y-4">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900">Moderation queue</h1>
      <article className="rounded-2xl border border-red-200 bg-white p-5 shadow-card">
        <p className="text-sm text-slate-600">Reason clustering helps moderators process reports quickly.</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-red-100 px-3 py-1 text-red-800">Scam suspicion (6)</span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-900">Price manipulation (3)</span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">Misleading images (2)</span>
        </div>
      </article>
    </section>
  )
}
