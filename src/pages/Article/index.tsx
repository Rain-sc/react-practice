import { Link } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Table, Space, Tag, Popconfirm, message } from 'antd'
import locale from 'antd/es/date-picker/locale/en_US'
import { links } from '@/router/links'
import { } from 'react-redux'
import { useEffect, useState } from 'react'
import { delAricleAPI, getAricleListAPI } from '@/apis/article'
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
      title: 'cover',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: 'title',
      dataIndex: 'title',
      width: 220
    },
    {
      title: 'status',
      dataIndex: 'status',
      render: data => status[data]
    },
    {
      title: 'publish date',
      dataIndex: 'pubdate'
    },
    {
      title: 'read',
      dataIndex: 'read_count'
    },
    {
      title: 'comment',
      dataIndex: 'comment_count'
    },
    {
      title: 'like',
      dataIndex: 'like_count'
    },
    {
      title: 'action',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Popconfirm
              title="Delete the article"
              description="Are you sure to delete this article?"
              onConfirm={() => onDeleteConfirm(data)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  const [arircleList, setArticleList] = useState<ResultType[]>([])
  const [reqData, setReqData] = useState<AritcleParamType>({
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
        const res = await getAricleListAPI(reqData)
        const resData = res.data
        setArticleList(resData.results)
        setTotalCount(resData.total_count)
      } catch (error) {
        throw new Error('get article list error')
      }
    }
    getArticleList()
  }, [reqData])

  const onDeleteConfirm = async ({ id }: { id: string }) => {
    try {
      await delAricleAPI(id)
      message.success('delete article success')
      setReqData({
        ...reqData
      })
    } catch (error) {
      throw new Error('delete article error')
    }
  }

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