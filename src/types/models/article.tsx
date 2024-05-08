export type AritcleParamType = {
  begin_pubdate?: string;
  channel_id?: string;
  end_pubdate?: string;
  page?: number;
  per_page?: number;
  status?: string;
}

export type AritcleListResType = {
  page: number | null
  per_page: number | null
  results: ResultType[],
  total_count: number
}

export type ResultType = {
  id?: string
  title?: string
  status?: number
  comment_count?: number
  pubdate?: string
  cover?: CoverType,
  like_count?: number
  read_count?: number
}

export type CoverType = {
  images: string[]
  type: number
}

export type ChannelItemType = {
  id: number
  name: string
}

export type ChannelResType = {
  channels: ChannelItemType[]
}

export type ArticlePublishType = {
  title: string
  content: string
  cover: {
    type: number
    images: string[]
  }
  channel_id: string
}