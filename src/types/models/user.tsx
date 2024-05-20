export type ResType<T> = {
  data: T,
  message?: string
}

export type LoginType = {
  mobile: string
  code: string
}

export type UserProfilePramsType = {
  birthday: string;
  gender: number;
  intro: null | string;
  name: string;
}

type UserType = {
  id: string;
  name: string;
  photo: string;
  intro: string | null;
}

type UserProfileType = {
  birthday: string;
  gender: number;
  mobile: string;
}
export type UserProfileResType = UserType & UserProfileType

type UserInfoType = {
  art_count: number
  follow_count: number
  fans_count: number
  like_count: number
}

export type UserInfoResType = UserType & UserInfoType

export type FollerResType = {
  total_count: number
  page: number
  per_page: number
  results: FollerItemType[]
}

export type FollerItemType = {
  id: string
  name: string
  photo: string
  fans_count: number
  mutual_follow: boolean
}

export type FollwerParamsType = {
  page?: number
  per_page?: number
}