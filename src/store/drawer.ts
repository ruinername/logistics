import {createSlice} from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: 'posts',
  initialState: { isOpen: false },
  reducers: {
    toggleDrawer(state) { state.isOpen = !state.isOpen; }
  },
});

export const { toggleDrawer } = drawerSlice.actions
