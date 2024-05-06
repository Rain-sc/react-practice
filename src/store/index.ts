import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export type AppDispatch = typeof store.dispatch


