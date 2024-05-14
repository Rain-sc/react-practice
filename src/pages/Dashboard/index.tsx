import CountUp from 'react-countup';
import { useSelector } from "react-redux";
import { UserStoreType } from "@/store/modules/user"
import { Col, Row, type StatisticProps } from "antd";
import CardItem from '@/components/CardItem';
import followerIcon from '@/assets/images/dashboard/followers.svg'
import articleIcon from '@/assets/images/dashboard/articles.svg'

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
const Dashboard = () => {
  const userInfo = useSelector((state: UserStoreType) => state.user.useInfo)
  return (
    <Row gutter={24}>
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
          value={userInfo.art_count}
          formatter={formatter}
          image={followerIcon}
        />
      </Col>
    </Row>
  )
}

export default Dashboard