import { Bookmark, MessageCircle, Share2, ShieldAlert } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TrustSignalPill } from '../common/TrustSignalPill'

export function ListingCard({ listing }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-strong">
      <div className="relative h-36 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/40 via-white to-amber-100/40" />
        <div className="absolute left-3 top-3 flex gap-2">
          {listing.badges.map((badge) => (
            <TrustSignalPill key={badge.label} tone={badge.tone}>
              {badge.label}
            </TrustSignalPill>
          ))}
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-lg font-semibold text-slate-900">{listing.title}</h3>
            <p className="text-sm text-slate-600">{listing.campusArea}</p>
          </div>
          <p className="font-price text-xl font-bold tabular-nums text-slate-900">Rs {listing.price}</p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>{listing.timeLabel}</span>
          <span aria-hidden="true">•</span>
          <span>{listing.seller}</span>
        </div>

        <div className="grid grid-cols-4 gap-2 border-t border-slate-200 pt-3">
          <button className="inline-flex items-center justify-center rounded-lg py-2 text-slate-500 transition hover:bg-slate-100" aria-label="Save listing">
            <Bookmark size={16} />
          </button>
          <button className="inline-flex items-center justify-center rounded-lg py-2 text-slate-500 transition hover:bg-slate-100" aria-label="Share listing">
            <Share2 size={16} />
          </button>
          <button className="inline-flex items-center justify-center rounded-lg py-2 text-slate-500 transition hover:bg-slate-100" aria-label="Report listing">
            <ShieldAlert size={16} />
          </button>
          <Link to={`/listings/${listing.id}`} className="inline-flex items-center justify-center rounded-lg bg-cyan-700 py-2 text-white transition hover:bg-cyan-800" aria-label="Message seller">
            <MessageCircle size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
