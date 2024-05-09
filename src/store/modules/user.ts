import { getUserInfoAPI, getUserProfileAPI, loginAPI } from "@/apis/user"
import { LoginType, UserInfoItemType, UserProfileItemType } from "@/types/models/user"
import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"

export type UserType = {
  token: string
  userProfile: UserProfileItemType
  useInfo: UserInfoItemType
}
export type UserStoreType = {
  user: UserType
}
const initialState: UserType = {
  token: localStorage.getItem('token') || '',
  userProfile: {
    birthday: '',
    gender: 0,
    id: '',
    intro: null,
    mobile: '',
    name: '',
    photo: '',
  },
  useInfo: {
    id: '',
    name: '',
    photo: '',
    intro: null,
    art_count: 0,
    follow_count: 0,
    fans_count: 0,
    like_count: 0
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
    setUserProfile(state, action: PayloadAction<UserProfileItemType>) {
      state.userProfile = action.payload
    },
    setLogout(state) {
      state.token = ''
      state.userProfile = {
        birthday: '',
        gender: 0,
        id: '',
        intro: null,
        mobile: '',
        name: '',
        photo: '',
      }
      localStorage.removeItem('token')
    },
    setUserInfo(state, action: PayloadAction<UserInfoItemType>) {
      state.useInfo = action.payload
    }
  }
})

const {
  setToken,
  setUserProfile,
  setLogout,
  setUserInfo
} = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm: LoginType) => {
  return async (dispatch: any) => {
    const res = await loginAPI(loginForm)
    dispatch(setToken(res.data.token))
  }
}

const fetchUserProfile = () => {
  return async (dispatch: Dispatch) => {
    const res = await getUserProfileAPI()
    dispatch(setUserProfile(res.data))
  }
}

const fetchUserInfo = () => {
  return async (dispatch: Dispatch) => {
    const res = await getUserInfoAPI()
    dispatch(setUserInfo(res.data))
  }
}

export {
  fetchLogin,
  fetchUserProfile,
  setLogout,
  fetchUserInfo
}

export default userReducer
