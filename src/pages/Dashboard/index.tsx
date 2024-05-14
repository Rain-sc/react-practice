import CountUp from 'react-countup';
import { useSelector } from "react-redux";
import { UserStoreType } from "@/store/modules/user"
import { Col, Row, type StatisticProps } from "antd";
import CardItem from '@/components/CardItem';

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
const Dashboard = () => {
  const userInfo = useSelector((state: UserStoreType) => state.user.useInfo)
  return (
    <Row gutter={24}>
      <Col span={6}>
        <CardItem
          title="The Number of Article"
          value={userInfo.art_count}
          formatter={formatter}
        />
      </Col>
      <Col span={6}>
        <CardItem
          title="The Number of Follower"
          value={userInfo.art_count}
          formatter={formatter}
        />
      </Col>
    </Row>
  )
}

export default Dashboard