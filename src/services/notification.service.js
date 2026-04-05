import { apiClient } from './apiClient'

const NotificationService = {
  async getMyNotifications(params) {
    const response = await apiClient.get('/notifications', { params })
    return response.data.data
  },
  async markNotificationRead(notificationId) {
    const response = await apiClient.patch(`/notifications/${notificationId}/read`)
    return response.data.data
  },
}

export default NotificationService
