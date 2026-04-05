import { apiClient } from './apiClient'

const AdminService = {
  async getReports(params) {
    const response = await apiClient.get('/admin/reports', { params })
    return response.data.data
  },
  async updateReportStatus(reportId, payload) {
    const response = await apiClient.patch(`/admin/reports/${reportId}/status`, payload)
    return response.data.data
  },
  async moderateListing(listingId, payload) {
    const response = await apiClient.patch(`/admin/listings/${listingId}/moderate`, payload)
    return response.data.data
  },
  async moderateLostFound(recordId, payload) {
    const response = await apiClient.patch(`/admin/lost-found/${recordId}/moderate`, payload)
    return response.data.data
  },
}

export default AdminService
