import { http } from "@/utils"
import { AritcleListResType, AritcleParamType } from '@/types/models/article'

export function getAricleListAPI(params: AritcleParamType) {
  return http.request<AritcleListResType>({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}

export function delAricleAPI(articleId: string) {
  return http.request({
    url: `/mp/articles/${articleId}`,
    method: 'DELETE'
  })
}