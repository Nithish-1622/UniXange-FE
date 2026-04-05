import { apiClient } from './apiClient'

const ChatService = {
  async createOrGetConversation(payload) {
    const response = await apiClient.post('/chats/conversations', payload)
    return response.data.data
  },
  async getMyConversations() {
    const response = await apiClient.get('/chats/conversations')
    return response.data.data
  },
  async getConversationMessages(conversationId) {
    const response = await apiClient.get(`/chats/conversations/${conversationId}/messages`)
    return response.data.data
  },
  async sendMessage(conversationId, payload) {
    const response = await apiClient.post(`/chats/conversations/${conversationId}/messages`, payload)
    return response.data.data
  },
}

export default ChatService
