import { apiClient } from './apiClient'

const ReportService = {
  async createReport(payload) {
    const response = await apiClient.post('/reports', payload)
    return response.data.data
  },
}

export default ReportService
