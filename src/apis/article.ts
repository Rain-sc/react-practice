import { http } from "@/utils"
import { AritcleListResType, AritcleParamType, } from '@/types/models/article'
import { ResType } from "@/types/models/user";

export function getAricleListAPI(params: AritcleParamType): Promise<ResType<AritcleListResType>> {
  return http({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}

export function delAricleAPI(articleId: string) {
  return http({
    url: `/mp/articles/${articleId}`,
    method: 'DELETE'
  })
}