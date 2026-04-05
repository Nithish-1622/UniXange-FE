import { apiClient } from './apiClient'

const BookingService = {
  async createBooking(payload) {
    const response = await apiClient.post('/bookings', payload)
    return response.data.data
  },
  async getMyBookings(params) {
    const response = await apiClient.get('/bookings/me', { params })
    return response.data.data
  },
  async updateBookingStatus(bookingId, payload) {
    const response = await apiClient.patch(`/bookings/${bookingId}/status`, payload)
    return response.data.data
  },
}

export default BookingService
