import { useEffect, useState } from "react"
import { ChannelItemType } from '@/types/models/article'
import { getChannelListAPI } from "@/apis/article"
const useChannelList = () => {
  const [channelList, setChannelList] = useState<ChannelItemType[]>([])
  useEffect(() => {
    const getChannelList = async () => {
      try {
        const res = await getChannelListAPI()
        const resData = res.data.channels
        setChannelList(resData)
      } catch (error) {
        throw new Error('get channel list error')
      }
    }
    getChannelList()
  }, [])
  return {
    channelList
  }
}

export {
  useChannelList
}