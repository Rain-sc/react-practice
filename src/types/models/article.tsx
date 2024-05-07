export type AritcleParamType = {
  begin_pubdate?: string;
  channel_id?: string;
  end_pubdate?: string;
  page?: string;
  per_page?: string;
  status?: string;
}

export type AritcleListResType = {
  page: null
  per_page: null
  result: ResultType[],
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