import { useMemo, createContext } from 'react'
import WrapperRoutes from './routes'

const Context = createContext({ name: '' })
console.log(Context)

export default function App() {
  const contextValue = useMemo(() => ({ name: '' }), [])

  return (
    <>
      <Context.Provider value={contextValue}>
        <WrapperRoutes />
      </Context.Provider>
    </>
  )
}
