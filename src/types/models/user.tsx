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
  real_name: string
}

export type UserProfileResType = {
  birthday: string;
  gender: number;
  id: string;
  intro: null;
  mobile: string;
  name: string;
  photo: string;
}

export type UserInfoResType = {
  id: string
  name: string
  photo: string
  intro: string | null
  art_count: number
  follow_count: number
  fans_count: number
  like_count: number
}


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