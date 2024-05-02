import { getUserInfoAPI, loginAPI } from "@/apis/user"
import { LoginValue, UserInfoItemValue } from "@/interfaces/models/user"
import { StateCreator } from "zustand";

export interface UserStoreValue {
  token: string;
  fetchLogin: (loginForm: LoginValue) => Promise<void>;
  userInfo: UserInfoItemValue
  fetchUserInfo: () => Promise<void>;

}

const createUserStore: StateCreator<UserStoreValue> = (set) => {
  return {
    token: localStorage.getItem('token_key') || '',
    userInfo: {
      birthday: '',
      gender: 0,
      id: '',
      intro: null,
      mobile: '',
      name: '',
      photo: ''
    },
    fetchLogin: async (loginForm: LoginValue) => {
      const res = await loginAPI(loginForm)
      localStorage.setItem('token_key', res.data.token)
      set({
        token: res.data.token
      })
    },
    fetchUserInfo: async () => {
      const res = await getUserInfoAPI()
      set({
        userInfo: res.data.data
      })

    }
  }
}

export default createUserStore