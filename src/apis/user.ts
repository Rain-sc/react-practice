import { LoginType, ResType, UserInfoItemType } from "@/types/models/user";
import { http } from "@/utils";


export function loginAPI(formData: LoginType) {
  return http({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

export function getUserInfoAPI(): Promise<ResType<UserInfoItemType>> {
  return http({
    url: '/user/profile',
    method: 'GET'
  })
}