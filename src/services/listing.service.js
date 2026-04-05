import { apiClient } from './apiClient'

const ListingService = {
  async createListing(payload) {
    const response = await apiClient.post('/listings', payload)
    return response.data.data
  },
  async getListings(params) {
    const response = await apiClient.get('/listings', { params })
    return response.data.data
  },
  async getListingById(listingId) {
    const response = await apiClient.get(`/listings/${listingId}`)
    return response.data.data
  },
  async updateListing(listingId, payload) {
    const response = await apiClient.patch(`/listings/${listingId}`, payload)
    return response.data.data
  },
  async deleteListing(listingId) {
    const response = await apiClient.delete(`/listings/${listingId}`)
    return response.data.data
  },
  async addToWishlist(listingId) {
    const response = await apiClient.post(`/listings/${listingId}/wishlist`)
    return response.data.data
  },
  async removeFromWishlist(listingId) {
    const response = await apiClient.delete(`/listings/${listingId}/wishlist`)
    return response.data.data
  },
}

export default ListingService
