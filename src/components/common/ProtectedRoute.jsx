import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function ProtectedRoute({ children }) {
  const location = useLocation()
  const { isAuthenticated, isBootstrapped } = useAuth()

  if (!isBootstrapped) {
    return <div className="mx-auto max-w-5xl p-6 text-sm text-slate-600">Restoring session...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />
  }

  return children
}
