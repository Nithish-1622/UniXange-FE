import { SafetyPrompt } from '../../components/chat/SafetyPrompt'

const QUICK_MESSAGES = ['Is this still available?', 'Can we meet at library gate?', 'Final price?']

export function ChatPage() {
  return (
    <section className="grid gap-4 lg:grid-cols-[320px_1fr]">
      <aside className="rounded-2xl border border-slate-900/10 bg-white p-4 shadow-card">
        <h1 className="font-heading text-xl font-semibold text-slate-900">Conversations</h1>
        <p className="mt-2 text-sm text-slate-600">Grouped by listing context</p>
        <div className="mt-4 space-y-2">
          <button className="w-full rounded-xl border border-cyan-300 bg-cyan-50 p-3 text-left text-sm text-cyan-900">iPad 9th Gen • Nithish K</button>
          <button className="w-full rounded-xl border border-slate-200 p-3 text-left text-sm text-slate-700">Flask + Kettle • Asha P</button>
        </div>
      </aside>

      <article className="rounded-2xl border border-slate-900/10 bg-white p-4 shadow-card">
        <SafetyPrompt />
        <div className="mt-4 min-h-60 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">Hey, can we meet at library gate around 6 PM?</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_MESSAGES.map((chip) => (
            <button key={chip} className="chip">{chip}</button>
          ))}
        </div>
      </article>
    </section>
  )
}
