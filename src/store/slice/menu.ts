import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type MenuState = {
  breadcrumbs: Array<{ title: string; key: string }>;
};

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
      console.log(state.value.breadcrumbs, action.payload)
    },
  },
})

export const { setMenu } = menuSlice.actions

export const selectMenu = (state: RootState) => state.menu.value

export default menuSlice.reducer
