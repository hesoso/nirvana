import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type MenuState = {
  breadcrumbs: BaseBreadcrumbType[]
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    value: {
      breadcrumbs: [],
    },
  },
  reducers: {
    setMenu: (
      state: { value: MenuState },
      action: PayloadAction<MenuState>,
    ) => {
      state.value.breadcrumbs = action.payload.breadcrumbs
    },
  },
})

export const { setMenu } = menuSlice.actions

export const selectMenu = (state: RootState) => state.menu.value

export default menuSlice.reducer
