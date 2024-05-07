export type ResType<T> = {
  data: T,
  message?: string
}
export type LoginType = {
  mobile: string
  code: string
}

export type UserInfoItemType = {
  birthday: string;
  gender: number;
  id: string;
  intro: null;
  mobile: string;
  name: string;
  photo: string;
}


