import { getUserInfoAPI, loginAPI } from "@/apis/user"
import { LoginValue, UserInfoItemValue } from "@/types/models/user"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type UserValue = {
  token: string;
  userInfo: UserInfoItemValue
}
export type UserStoreValue = {
  user: UserValue
}
const initialState: UserValue = {
  token: localStorage.getItem('token') || '',
  userInfo: {
    birthday: '',
    gender: 0,
    id: '',
    intro: null,
    mobile: '',
    name: '',
    photo: '',
  }
}
const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
      localStorage.setItem('token', action.payload)
    },
    setUserInfo(state, action: PayloadAction<UserInfoItemValue>) {
      state.userInfo = action.payload
    },
    setLogout(state) {
      state.token = ''
      state.userInfo = {
        birthday: '',
        gender: 0,
        id: '',
        intro: null,
        mobile: '',
        name: '',
        photo: '',
      }
      localStorage.removeItem('token')
    }
  }
})

const { setToken, setUserInfo, setLogout } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm: LoginValue) => {
  return async (dispatch: any) => {
    const res = await loginAPI(loginForm)
    dispatch(setToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch: any) => {
    const res = await getUserInfoAPI()
    dispatch(setUserInfo(res.data))
  }
}
export {
  fetchLogin,
  fetchUserInfo,
  setLogout
}

export default userReducer
