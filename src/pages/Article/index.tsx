import { Link } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Table, Space, Tag } from 'antd'
import locale from 'antd/es/date-picker/locale/en_US'
import { links } from '@/router/links'
import { } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAricleListAPI } from '@/apis/article'
import { ResultType, AritcleParamType } from '@/types/models/article'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/images/article/error.png'
import { ColumnsType } from 'antd/es/table'
const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
  type StatusType = {
    [key: number]: JSX.Element;
  }

  const status: StatusType = {
    1: <Tag color='warning'>Waiting</Tag>,
    2: <Tag color='success'>Passed</Tag>
  }
  const columns: ColumnsType = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => status[data]
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Space>
        )
      }
    }
  ]

  const [arircleList, setArticleList] = useState<ResultType[]>([])
  const [reqDate, setReqDate] = useState<AritcleParamType>({
    status: '',
    channel_id: '',
    begin_pubdate: '',
    end_pubdate: '',
    page: 1,
    per_page: 10
  })
  const [totalCount, setTotalCount] = useState<number>(0)

  useEffect(() => {
    async function getArticleList() {
      try {
        const res = await getAricleListAPI(reqDate)
        setArticleList(res.data.results)
        setTotalCount(res.data.total_count)
      } catch (error) {
        throw new Error('get article list error')
      }
    }
    getArticleList()
  }, [reqDate])
  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={links.dashboard}>Dashboard</Link> },
            { title: 'Article' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }}>
          <Form.Item label="status" name="status">
            <Radio.Group>
              <Radio value={''}>All</Radio>
              <Radio value={0}>Draft</Radio>
              <Radio value={2}>Passed</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="channel" name="channel_id">
            <Select
              placeholder="Select channel"
              defaultValue="lucy"
              style={{ width: 120 }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date">
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`Total list ${totalCount}`}>
        <Table
          dataSource={arircleList}
          columns={columns}
        />
      </Card>
    </div>
  )
}

export default Article