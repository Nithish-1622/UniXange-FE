import { MatchSuggestionCard } from '../../components/lostFound/MatchSuggestionCard'

const SUGGESTIONS = [
  { title: 'Black Wallet near E-block stairs', confidence: 88, locationHint: 'Found 3 hours ago in Main Block' },
  { title: 'Student ID holder with blue strap', confidence: 74, locationHint: 'Seen near Library Gate kiosk' },
]

export function LostFoundPage() {
  return (
    <section className="space-y-4">
      <header className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-card">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-blue-950">Lost & Found</h1>
        <p className="mt-2 text-sm text-blue-900/80">Split your reports into Lost vs Found and review AI-assisted match confidence chips.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {SUGGESTIONS.map((item) => (
          <MatchSuggestionCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
