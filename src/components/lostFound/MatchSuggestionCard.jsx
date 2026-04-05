import { TrustSignalPill } from '../common/TrustSignalPill'

export function MatchSuggestionCard({ item }) {
  return (
    <article className="rounded-xl border border-slate-900/10 bg-white p-4 shadow-card">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-heading font-semibold text-slate-900">{item.title}</h3>
        <TrustSignalPill tone="info">{item.confidence}% match</TrustSignalPill>
      </div>
      <p className="text-sm text-slate-600">{item.locationHint}</p>
    </article>
  )
}
