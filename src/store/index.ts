import { configureStore } from '@reduxjs/toolkit'
import menu from './slice/menu'

const store = configureStore({
  reducer: { menu }
})

export default store

// 从 store 本身推断出 `RootState` 和 `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>

// 类型推断: { menu: MenuState }
export type AppDispatch = typeof store.dispatch
