import { createContext } from 'react'
import { notification } from 'antd'

type NotifyArgs = {
  type: 'success' | 'info' | 'error' | 'warning'
  message: string
  description?: string
}
type NotifyFunc = (args: NotifyArgs) => void

// 创建 Context
export const NotificationContext = createContext<NotifyFunc | null>(null)

// 创建提供者组件
const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification()

  const notify = ({ type, message, description = '' }) => {
    api[type]({ message, description })
  }

  return (
    <NotificationContext.Provider value={notify}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
