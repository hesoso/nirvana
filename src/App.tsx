import WrapperRoutes from './routes'
import NotificationProvider from '@/components/providers/NotificationProvider'

export default function App() {
  return (
    <NotificationProvider>
      <WrapperRoutes />
    </NotificationProvider>
  )
}
