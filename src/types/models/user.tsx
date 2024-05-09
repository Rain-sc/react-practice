export type ResType<T> = {
  data: T,
  message?: string
}
export type LoginType = {
  mobile: string
  code: string
}

export type UserProfileItemType = {
  birthday: string;
  gender: number;
  id: string;
  intro: null;
  mobile: string;
  name: string;
  photo: string;
}

export type UserInfoItemType = {
  id: string
  name: string
  photo: string
  intro: string | null
  art_count: number
  follow_count: number
  fans_count: number
  like_count: number
}
