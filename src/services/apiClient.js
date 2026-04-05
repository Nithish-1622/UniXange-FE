import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const TOKEN_STORAGE_KEY = 'unixchange_access_token'

let accessToken = null

export function setAccessToken(token, persist = true) {
  accessToken = token || null

  if (persist && token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
  }

  if (!token) {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
  }
}

export function clearAccessToken() {
  setAccessToken(null)
}

export function hydrateAccessTokenFromStorage() {
  if (accessToken) return accessToken
  const fallback = localStorage.getItem(TOKEN_STORAGE_KEY)
  if (fallback) {
    accessToken = fallback
  }
  return accessToken
}

export function normalizeApiError(error) {
  const status = error?.response?.status
  const message =
    error?.response?.data?.message || error?.message || 'Something went wrong. Please try again.'

  return {
    message,
    status,
    details: error?.response?.data,
  }
}

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
})

apiClient.interceptors.request.use((config) => {
  const token = accessToken || hydrateAccessTokenFromStorage()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeApiError(error)),
)
