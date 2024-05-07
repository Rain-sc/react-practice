import { getUserInfoAPI, loginAPI } from "@/apis/user"
import { LoginType, UserInfoItemType } from "@/types/models/user"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type UserType = {
  token: string;
  userInfo: UserInfoItemType
}
export type UserStoreType = {
  user: UserType
}
const initialState: UserType = {
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
    setUserInfo(state, action: PayloadAction<UserInfoItemType>) {
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

const fetchLogin = (loginForm: LoginType) => {
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
