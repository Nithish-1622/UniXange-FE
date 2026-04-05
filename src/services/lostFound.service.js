import { apiClient } from './apiClient'

const LostFoundService = {
  async createLostFound(payload) {
    const response = await apiClient.post('/lost-found', payload)
    return response.data.data
  },
  async getLostFoundList(params) {
    const response = await apiClient.get('/lost-found', { params })
    return response.data.data
  },
  async getLostFoundById(recordId) {
    const response = await apiClient.get(`/lost-found/${recordId}`)
    return response.data.data
  },
  async updateLostFound(recordId, payload) {
    const response = await apiClient.patch(`/lost-found/${recordId}`, payload)
    return response.data.data
  },
  async matchLostFound(recordId, payload) {
    const response = await apiClient.post(`/lost-found/${recordId}/match`, payload)
    return response.data.data
  },
}

export default LostFoundService
