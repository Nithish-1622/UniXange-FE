import { useMemo, useState } from 'react'
import { NotificationContext } from './notification-context'

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([])

  const value = useMemo(
    () => ({
      notifications,
      pushNotification(notification) {
        const id = crypto.randomUUID()
        setNotifications((prev) => [...prev, { id, ...notification }])
        return id
      },
      removeNotification(id) {
        setNotifications((prev) => prev.filter((item) => item.id !== id))
      },
    }),
    [notifications],
  )

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}
