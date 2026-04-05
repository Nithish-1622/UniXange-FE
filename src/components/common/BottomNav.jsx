import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, PlusSquare, Search, ShieldCheck, UserRound } from 'lucide-react'
import clsx from 'clsx'

const ITEMS = [
  { to: '/feed', label: 'Feed', icon: <Search size={18} /> },
  { to: '/listings/new', label: 'Sell', icon: <PlusSquare size={18} /> },
  { to: '/chat', label: 'Chat', icon: <MessageCircle size={18} /> },
  { to: '/lost-found', label: 'Lost&Found', icon: <ShieldCheck size={18} /> },
  { to: '/profile', label: 'Profile', icon: <UserRound size={18} /> },
]

export function BottomNav() {
  const location = useLocation()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-900/10 bg-slate-50/95 backdrop-blur md:hidden" aria-label="Bottom navigation">
      <ul className="mx-auto grid max-w-2xl grid-cols-5">
        {ITEMS.map(({ to, label, icon }) => {
          const active = location.pathname === to || location.pathname.startsWith(`${to}/`)
          return (
            <li key={to}>
              <Link
                to={to}
                className={clsx(
                  'flex flex-col items-center gap-1 py-2 text-[11px] font-semibold tracking-wide transition',
                  active ? 'text-cyan-700' : 'text-slate-500',
                )}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
