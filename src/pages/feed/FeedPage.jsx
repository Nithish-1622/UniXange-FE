import { ListingCard } from '../../components/marketplace/ListingCard'
import { TrustScorePanel } from '../../components/trust/TrustScorePanel'
import { FEED_TABS } from '../../utils/constants'

const DEMO_LISTINGS = [
  {
    id: '1',
    title: 'iPad 9th Gen 64GB',
    price: '19,500',
    campusArea: 'Hostel A',
    timeLabel: '2h ago',
    seller: 'Nithish K',
    badges: [
      { label: 'Verified Student', tone: 'success' },
      { label: 'Fast Responder', tone: 'warning' },
    ],
  },
  {
    id: '2',
    title: 'Thermo Flask + Kettle Combo',
    price: '1,300',
    campusArea: 'North Gate',
    timeLabel: '35m ago',
    seller: 'Asha P',
    badges: [
      { label: 'Low Report Risk', tone: 'info' },
      { label: 'Urgent', tone: 'warning' },
    ],
  },
  {
    id: '3',
    title: 'Semester CS Notes Bundle',
    price: '550',
    campusArea: 'Library Gate',
    timeLabel: '4h ago',
    seller: 'Ravi S',
    badges: [{ label: 'Verified Student', tone: 'success' }],
  },
]

export function FeedPage() {
  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Smart campus feed</p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">Find what your block needs today</h1>
        <p className="mt-2 text-sm text-slate-600">Saved filters, fast cards, and trust signals are always visible before you message.</p>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {FEED_TABS.map((tab) => (
            <button key={tab} className="chip">
              {tab}
            </button>
          ))}
        </div>
      </header>

      <TrustScorePanel />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {DEMO_LISTINGS.map((listing) => (
          <div key={listing.id}>
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </section>
  )
}
