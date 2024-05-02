import { LoginValue } from "@/interfaces/models/user";
import { http } from "@/utils";


export function loginAPI(formData: LoginValue) {
  return http({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}