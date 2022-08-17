import { configureStore } from '@reduxjs/toolkit';
import { api } from "./api";

export const store = configureStore({
  reducer: {
    //user: userReducer,
    [api.reducerPath]: api.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;