import CountUp from 'react-countup';
import { useSelector } from "react-redux";
import { UserStoreType } from "@/store/modules/user"
import { Card, Col, Row, Statistic, type StatisticProps } from "antd";

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
const Dashboard = () => {
  const userInof = useSelector((state: UserStoreType) => state.user.useInfo)
  return (
    <Row gutter={24}>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="The Number of Article"
            value={userInof.art_count}
            formatter={formatter}
            valueStyle={{
              color: '#3f8600',
            }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="The Number of Follower"
            value={userInof.fans_count}
            formatter={formatter}
            valueStyle={{
              color: '#3f8600',
            }}
          />
        </Card>
      </Col>
    </Row>
  )
}

export default Dashboard