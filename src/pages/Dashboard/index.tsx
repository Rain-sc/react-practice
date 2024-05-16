import CountUp from 'react-countup';
import { useSelector } from "react-redux";
import { UserStoreType } from "@/store/modules/user"
import { Avatar, Card, Col, Row, Table, type StatisticProps } from "antd";
import CardItem from '@/components/CardItem';
import followerIcon from '@/assets/images/dashboard/followers.svg'
import articleIcon from '@/assets/images/dashboard/articles.svg'
import { fetchFollowersAPI } from "@/apis/user"
import { FollerItemType, FollerResType } from "@/types/models/user"
import { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table'

const columns: ColumnsType = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Photo',
    dataIndex: 'photo',
    key: 'photo',
    render: (photo) => <Avatar src={photo} />,
  },

];

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
const Dashboard = () => {
  const userInfo = useSelector((state: UserStoreType) => state.user.useInfo)

  const [follwerList, setFollerList] = useState<FollerItemType[]>([])
  const [resData, setResData] = useState<FollerResType>({
    total_count: 1,
    page: 1,
    per_page: 10,
    results: []
  })

  useEffect(() => {
    const getFollwerList = async () => {
      const res = await fetchFollowersAPI()
      const resData = res.data
      setResData(resData)
      setFollerList(resData.results)
    }
    getFollwerList()
  }, [])


  return (
    <Row gutter={[24, 24]}>
      <Col span={8}>
        <CardItem
          title="The Number of Article"
          value={userInfo.art_count}
          formatter={formatter}
          image={articleIcon}
        />
      </Col>
      <Col span={8}>
        <CardItem
          title="The Number of Follower"
          value={userInfo.fans_count}
          formatter={formatter}
          image={followerIcon}
        />
      </Col>
      <Col span={24}>
        <Card title={"Follower List"}>
          <Table
            columns={columns}
            dataSource={follwerList}
            pagination={
              {
                current: resData.page,
                pageSize: resData.per_page,
                total: resData.total_count,
                // onChange: onPaginationChange,
                showSizeChanger: false
              }
            } />;
        </Card>
      </Col>
    </Row>
  )

}

export default Dashboard