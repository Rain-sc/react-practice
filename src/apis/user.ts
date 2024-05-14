import { LoginType, ResType, UserInfoItemType, UserProfileItemType } from "@/types/models/user";
import { http } from "@/utils";


export function loginAPI(formData: LoginType) {
  return http({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

export function getUserProfileAPI(): Promise<ResType<UserProfileItemType>> {
  return http({
    url: '/user/profile',
    method: 'GET'
  })
}

export function getUserInfoAPI(): Promise<ResType<UserInfoItemType>> {
  return http({
    url: '/user',
    method: 'GET'
  })
}

export function getFollowersAPI() {
  return http({
    url: '/user/followers',
    method: 'GET'
  })
}