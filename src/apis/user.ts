import { FollerResType, FollwerParamsType, LoginType, ResType, UserInfoResType, UserProfilePramsType, UserProfileResType } from "@/types/models/user";
import { http } from "@/utils";


export function loginAPI(formData: LoginType) {
  return http({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

export function getUserProfileAPI(): Promise<ResType<UserProfileResType>> {
  return http({
    url: '/user/profile',
    method: 'GET'
  })
}

export function getUserInfoAPI(): Promise<ResType<UserInfoResType>> {
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

export function updateUserProfileAPI(formData: UserProfilePramsType) {
  return http({
    url: '/user/profile',
    method: 'PATCH',
    data: formData
  })
}

export function fetchFollowersAPI(params?: FollwerParamsType): Promise<ResType<FollerResType>> {
  return http({
    url: '/user/followers',
    method: 'GET',
    params
  })
}