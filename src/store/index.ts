import { configureStore } from '@reduxjs/toolkit';
import { injectedRtkApi } from "./api";
import {drawerSlice} from "./drawer";

export const store = configureStore({
  reducer: {
    //user: userReducer,
    [injectedRtkApi.reducerPath]: injectedRtkApi.reducer,
    drawer: drawerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(injectedRtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;