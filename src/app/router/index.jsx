import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '../../components/common/RootLayout'
import { ProtectedRoute } from '../../components/common/ProtectedRoute'
import { AuthPage } from '../../pages/auth/AuthPage'
import { FeedPage } from '../../pages/feed/FeedPage'
import { ListingDetailPage } from '../../pages/listing/ListingDetailPage'
import { PostListingPage } from '../../pages/listing/PostListingPage'
import { BookingsPage } from '../../pages/bookings/BookingsPage'
import { ChatPage } from '../../pages/chat/ChatPage'
import { LostFoundPage } from '../../pages/lostFound/LostFoundPage'
import { ProfilePage } from '../../pages/profile/ProfilePage'
import { AdminPage } from '../../pages/admin/AdminPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/feed" replace /> },
      { path: 'auth', element: <AuthPage /> },
      {
        path: 'feed',
        element: (
          <ProtectedRoute>
            <FeedPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'listings/new',
        element: (
          <ProtectedRoute>
            <PostListingPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'listings/:listingId',
        element: (
          <ProtectedRoute>
            <ListingDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'bookings',
        element: (
          <ProtectedRoute>
            <BookingsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'chat',
        element: (
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'lost-found',
        element: (
          <ProtectedRoute>
            <LostFoundPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile/:userId?',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
