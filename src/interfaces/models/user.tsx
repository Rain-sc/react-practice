export interface ResValue<T> {
  data: T,
  message?: string
}
export interface LoginValue {
  mobile: string
  code: string
}

export interface UserInfoItemValue {
  birthday: string;
  gender: number;
  id: string;
  intro: null;
  mobile: string;
  name: string;
  photo: string;
}


