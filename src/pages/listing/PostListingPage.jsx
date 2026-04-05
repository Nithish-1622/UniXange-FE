import { LISTING_CATEGORIES, CAMPUS_AREAS } from '../../utils/constants'

export function PostListingPage() {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-slate-900/10 bg-white p-6 shadow-card md:p-8">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900">Post in under 3 minutes</h1>
      <p className="mt-2 text-sm text-slate-600">Draft autosaves while you type. Completion score updates in real time.</p>

      <form className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1 block text-sm font-medium text-slate-700">Title</span>
            <input className="field" placeholder="Macbook Air M1" />
          </label>
          <label>
            <span className="mb-1 block text-sm font-medium text-slate-700">Price (Rs)</span>
            <input className="field" type="number" placeholder="25000" />
          </label>
        </div>

        <label>
          <span className="mb-1 block text-sm font-medium text-slate-700">Category</span>
          <select className="field">
            {LISTING_CATEGORIES.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-1 block text-sm font-medium text-slate-700">Campus area</span>
          <select className="field">
            {CAMPUS_AREAS.map((area) => (
              <option key={area}>{area}</option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-1 block text-sm font-medium text-slate-700">Description</span>
          <textarea className="field min-h-28" placeholder="Condition, accessories, pickup timing..." />
        </label>

        <div className="rounded-xl bg-cyan-50 p-3 text-sm text-cyan-900">
          Listing quality score: <strong>78%</strong> - add condition and extra images for better visibility.
        </div>

        <button type="button" className="btn-primary w-fit">Publish listing</button>
      </form>
    </section>
  )
}
