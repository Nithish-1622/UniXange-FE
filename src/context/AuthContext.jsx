import { useEffect, useMemo, useState } from 'react'
import AuthService from '../services/auth.service'
import { clearAccessToken, hydrateAccessTokenFromStorage, setAccessToken } from '../services/apiClient'
import { AuthContext } from './auth-context'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isBootstrapped, setIsBootstrapped] = useState(false)

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const token = hydrateAccessTokenFromStorage()
        if (!token) return
        const me = await AuthService.getMe()
        setUser(me)
      } catch {
        clearAccessToken()
        setUser(null)
      } finally {
        setIsBootstrapped(true)
      }
    }

    bootstrap()
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isBootstrapped,
      async signup(payload) {
        const data = await AuthService.signup(payload)
        return data
      },
      async login(payload) {
        const data = await AuthService.login(payload)
        if (data?.accessToken) {
          setAccessToken(data.accessToken, true)
        }
        if (data?.user) {
          setUser(data.user)
        } else {
          const me = await AuthService.getMe()
          setUser(me)
        }
        return data
      },
      async logout() {
        try {
          await AuthService.logout()
        } finally {
          clearAccessToken()
          setUser(null)
        }
      },
    }),
    [user, isBootstrapped],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
