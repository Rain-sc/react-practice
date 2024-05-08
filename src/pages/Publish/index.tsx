import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import { links } from "@/router/links"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useChannelList } from '@/hooks/useChannelList'
import { addAricleAPI } from '@/apis/article'
import { ArticlePublishType } from '@/types/models/article'
import { useState } from 'react'
import type { UploadProps, UploadFile } from 'antd';

const { Option } = Select

const Publish = () => {
  const { channelList } = useChannelList()
  const [form] = Form.useForm()
  const onPublish = async (values: ArticlePublishType) => {
    const { content, channel_id, title } = values
    const params = {
      content,
      channel_id,
      title,
      cover: {
        type: selectImageType,
        images: imageList.map(item => item.response.data.url)
      }
    }
    try {
      await addAricleAPI(params)
      message.success('Publish success')
      setImageList([])
      setSelectImageType(0)
      form.setFieldValue('type', 0)
      form.resetFields()
    } catch (error) {
      throw new Error('Publish failed')
    }
  }

  const [imageList, setImageList] = useState<UploadFile[]>([])
  const onUploadImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setImageList(newFileList)
  }

  const [selectImageType, setSelectImageType] = useState<number>(0)
  const onSelectImageType = (values: any) => {
    setSelectImageType(values.target.value)
    if (selectImageType !== values.target.value) {
      setImageList([])
    }
  }
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={links.dashboard}>Dashboard</Link> },
            { title: 'Publish' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
          onFinish={onPublish}
          form={form}
          initialValues={{
            type: selectImageType
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the article title' }]}
          >
            <Input placeholder="Please enter the article title" className='w-full max-w-[400px]' />
          </Form.Item>
          <Form.Item
            label="Channel"
            name="channel_id"
            rules={[{ required: true, message: 'Please select article channel' }]}
          >
            <Select placeholder="Please select article channel" className='w-full max-w-[400px]'>
              {channelList.map(item => (
                <Option key={item.id} value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Image">
            <Form.Item name="type">
              <Radio.Group onChange={onSelectImageType} defaultValue={selectImageType} value={selectImageType}>
                <Radio value={1}>Single</Radio>
                <Radio value={3}>Triple</Radio>
                <Radio value={0}>None</Radio>
              </Radio.Group>
            </Form.Item>
            {selectImageType > 0 &&
              <Upload
                name="image"
                listType="picture-card"
                showUploadList
                action={'http://geek.itheima.net/v1_0/upload'}
                onChange={onUploadImage}
                maxCount={selectImageType}
                fileList={imageList}
              >
                {((selectImageType === 1 && imageList.length < 1) || (selectImageType === 3 && imageList.length < 3))
                  && <div style={{ marginTop: 8 }}>
                    <PlusOutlined />
                  </div>
                }

              </Upload>
            }

          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please enter the content of the article' }]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="Please enter the content of the article"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 3 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                Publish
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish