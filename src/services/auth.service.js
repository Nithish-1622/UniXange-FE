import { apiClient } from './apiClient'

const AuthService = {
  async signup(payload) {
    const response = await apiClient.post('/auth/signup', payload)
    return response.data.data
  },
  async login(payload) {
    const response = await apiClient.post('/auth/login', payload)
    return response.data.data
  },
  async logout() {
    const response = await apiClient.post('/auth/logout')
    return response.data.data
  },
  async getMe() {
    const response = await apiClient.get('/auth/me')
    return response.data.data
  },
}

export default AuthService
