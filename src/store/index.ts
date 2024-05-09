import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import { useDispatch } from 'react-redux';
import { AnyAction, combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
type AppState = ReturnType<typeof rootReducers>;
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

const rootReducers = combineReducers({ userReducer });

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();