const STEPS = ['Requested', 'Approved', 'Active', 'Completed']

export function BookingsPage() {
  return (
    <section className="space-y-4">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900">Booking timeline</h1>
      <article className="rounded-2xl border border-amber-200 bg-white p-5 shadow-card">
        <p className="text-sm text-slate-600">Canon EOS 1500D rental • Library Gate pickup</p>
        <ol className="mt-4 grid gap-3 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step} className={`rounded-xl border p-3 text-sm ${index <= 2 ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-slate-200 text-slate-500'}`}>
              <p className="font-semibold">{step}</p>
            </li>
          ))}
        </ol>
      </article>
    </section>
  )
}
