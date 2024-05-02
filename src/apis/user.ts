import { LoginValue, ResValue, UserInfoItemValue } from "@/interfaces/models/user";
import { http } from "@/utils";


export function loginAPI(formData: LoginValue) {
  return http({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

export function getUserInfoAPI() {
  return http<ResValue<UserInfoItemValue>>({
    url: '/user/profile',
    method: 'GET'
  })
}