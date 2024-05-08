import { http } from "@/utils"
import { AritcleListResType, AritcleParamType, ArticlePublishType, ChannelResType, } from '@/types/models/article'
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

export function getChannelListAPI(): Promise<ResType<ChannelResType>> {
  return http({
    url: '/channels',
    method: 'GET'
  })
}

export function addAricleAPI(data: ArticlePublishType) {
  return http({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}