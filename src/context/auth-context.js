import { createContext } from 'react'

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isBootstrapped: false,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
})
