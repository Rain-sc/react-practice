import { create } from "zustand";
import userStore, { UserStoreValue } from './modules/user'

const useStore = create<UserStoreValue>((...a) => {
  return {
    ...userStore(...a)
  }
})

export default useStore;