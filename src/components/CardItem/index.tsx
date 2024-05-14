import { Card, Image, Statistic, type StatisticProps } from "antd"
import styles from './index.module.scss'

type CardItemProps = {
  title: string
  value: number | string
  formatter: StatisticProps['formatter'],
  image: string
}
const CardItem = ({ title, value, formatter, image }: CardItemProps) => {

  return (
    <Card
      bordered={false}
      hoverable
      className={styles['ant-statistic']}
    >
      <div className="flex items-center justify-between">
        <Statistic
          title={title}
          value={value}
          formatter={formatter}
          valueStyle={{
            color: '#464255',
            fontSize: 34,
            fontWeight: 600
          }}
        />
        <Image
          src={image}
          width={35}
          preview={false}
        />
      </div>
    </Card>
  )
}

export default CardItem