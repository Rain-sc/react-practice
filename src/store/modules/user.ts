import { loginAPI } from "@/apis/user"
import { LoginValue } from "@/interfaces/models/user"
import { StateCreator } from "zustand";

export interface UserStoreValue {
  token: string;
  getUser: (loginForm: LoginValue) => Promise<void>;
}

const createUserStore: StateCreator<UserStoreValue> = (set) => {
  return {
    token: '',
    getUser: async (loginForm: LoginValue) => {
      const res = await loginAPI(loginForm)
      set({
        token: res.data.token
      })
    }
  }
}

export default createUserStore