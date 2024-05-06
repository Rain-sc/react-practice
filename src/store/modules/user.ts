import { getUserInfoAPI, loginAPI } from "@/apis/user"
import { LoginValue, UserInfoItemValue } from "@/interfaces/models/user"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface UserValue {
  token: string;
}
export interface UserStoreValue {
  user: UserValue
}
const initialState: UserValue = {
  token: localStorage.getItem('token') || '',
}
const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
      localStorage.setItem('token', action.payload)
    }
  }
})

const { setToken } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm: LoginValue) => {
  return async (dispatch: any) => {
    const res = await loginAPI(loginForm)
    dispatch(setToken(res.data.token))
  }
}

export {
  fetchLogin
}

export default userReducer
