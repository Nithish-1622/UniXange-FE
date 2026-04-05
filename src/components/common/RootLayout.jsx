import { Bell, Search } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'

const NAV_LINKS = [
  { to: '/feed', label: 'Feed' },
  { to: '/bookings', label: 'Bookings' },
  { to: '/chat', label: 'Chat' },
  { to: '/lost-found', label: 'Lost&Found' },
  { to: '/profile', label: 'Profile' },
]

export function RootLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-page-gradient pb-20 md:pb-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-200/50 via-amber-100/25 to-transparent" />
      <header className="sticky top-0 z-30 border-b border-slate-900/10 bg-slate-50/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
          <Link to="/feed" className="font-heading text-xl font-bold tracking-tight text-slate-900">
            UniXchange
          </Link>
          <div className="hidden flex-1 items-center gap-2 rounded-xl border border-slate-900/10 bg-white px-3 py-2 md:flex">
            <Search size={16} className="text-slate-500" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              placeholder="Search electronics, books, hostel essentials..."
              aria-label="Search listings"
            />
          </div>
          <button className="rounded-xl border border-slate-900/10 bg-white p-2 text-slate-600 transition hover:shadow-card" aria-label="Notifications">
            <Bell size={18} />
          </button>
        </div>
        <nav className="mx-auto hidden max-w-6xl gap-2 px-6 pb-3 md:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-200/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="relative mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  )
}
