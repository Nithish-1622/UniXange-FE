import { apiClient } from './apiClient'

const UserService = {
  async getMyProfile() {
    const response = await apiClient.get('/users/me')
    return response.data.data
  },
  async updateMyProfile(payload) {
    const response = await apiClient.patch('/users/me', payload)
    return response.data.data
  },
  async updateAvatar(payload) {
    const response = await apiClient.patch('/users/me/avatar', payload)
    return response.data.data
  },
  async getDashboard() {
    const response = await apiClient.get('/users/me/dashboard')
    return response.data.data
  },
  async getPublicUser(userId) {
    const response = await apiClient.get(`/users/${userId}/public`)
    return response.data.data
  },
}

export default UserService
