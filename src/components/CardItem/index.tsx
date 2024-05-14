import { Card, Statistic, type StatisticProps } from "antd"

type CardItemProps = {
  title: string
  value: number | string
  formatter: StatisticProps['formatter']
}
const CardItem = ({ title, value, formatter }: CardItemProps) => {
  return (
    <Card bordered={false}>
      <Statistic
        title={title}
        value={value}
        formatter={formatter}
        valueStyle={{
          color: '#3f8600',
        }}
      />
    </Card>
  )
}

export default CardItem