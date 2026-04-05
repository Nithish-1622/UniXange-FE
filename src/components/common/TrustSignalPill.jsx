import clsx from 'clsx'

const TONES = {
  success: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
  warning: 'bg-amber-100 text-amber-900 ring-amber-200',
  risk: 'bg-red-100 text-red-800 ring-red-200',
  info: 'bg-blue-100 text-blue-800 ring-blue-200',
}

export function TrustSignalPill({ tone = 'info', children }) {
  return (
    <span className={clsx('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset', TONES[tone])}>
      {children}
    </span>
  )
}
