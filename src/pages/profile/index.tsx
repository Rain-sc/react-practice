import { UserStoreType } from '@/store/modules/user';
import { SaveOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Radio, Row, Typography, message, } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { updateUserProfileAPI } from '@/apis/user';
import { UserProfilePramsType } from '@/types/models/user';


const Profile = () => {
  const userProfile = useSelector((state: UserStoreType) => state.user.userProfile)
  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
  }, [userProfile])

  const [genderType, setGenderType] = useState(0)
  const onSelectGenderType = (value: any) => {
    setGenderType(value.target.value)
  }

  const [selectBirthday, setSelectBirthday] = useState('')
  const onBirthdayChange = (date: Dayjs) => {
    setSelectBirthday(dayjs(date).format("YYYY-MM-DD"))
  }

  const [introduction, setIntroduction] = useState('')
  const onIntroductionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIntroduction(e.target.value)
  }

  const [submitLoading, setSubmitLoading] = useState(false)
  const onFinish = async (values: any) => {
    const { name, intro } = values
    try {
      setSubmitLoading(true)
      const param: UserProfilePramsType = {
        name: name,
        gender: genderType,
        birthday: selectBirthday,
        intro: introduction
      }
      await updateUserProfileAPI(param)
      message.success("Update user profile successfully")
    } catch (error) {
      throw new Error("update user profile error")
    } finally {
      setSubmitLoading(false)
    }
  };
  return (
    <Card>
      <Form
        name="user-profile-details-form"
        layout="vertical"
        initialValues={{
          id: userProfile.id,
          name: userProfile.name,
          intro: userProfile.intro,
          mobile: userProfile.mobile,
          gender: userProfile.gender,
          birthday: dayjs(userProfile.birthday)
        }}
        form={form}
        onFinish={onFinish}
        autoComplete="on"
        requiredMark={false}
        disabled={submitLoading}
      >
        <Row gutter={[16, 0]}>
          <Col sm={24} lg={24}>
            <Form.Item
              label="User ID"
              name="id"
              rules={[{ required: true, message: 'Please input your id!' }]}
            >
              <Input
                readOnly={true}
                suffix={
                  <Typography.Paragraph
                    copyable={{ text: userProfile.id }}
                    style={{ margin: 0 }}
                  ></Typography.Paragraph>
                }
              />
            </Form.Item>
          </Col>
          <Col sm={24} lg={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: 'Please input your name!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col sm={24} lg={12}>
            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[
                { required: true, message: 'Please input your real mobile!' },
              ]}
            >
              <Input readOnly={true} />
            </Form.Item>
          </Col>
          <Col sm={24} lg={12}>
            <Form.Item
              label="Birthday"
              name="birthday"
              rules={[
                { required: true, message: 'Please input your birthday!' },
              ]}
            >
              <DatePicker
                onChange={onBirthdayChange}
                defaultValue={dayjs(userProfile.birthday)}
                style={{
                  width: '100%',
                }} />
            </Form.Item>
          </Col>
          <Col sm={24} lg={12}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: 'Please select your gender!' },
              ]}
            >
              <Radio.Group
                value={userProfile.gender}
                onChange={onSelectGenderType}
              >
                <Radio value={0}>Man</Radio>
                <Radio value={1}>Female</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="intro" label="Introduction">
              <Input.TextArea onChange={onIntroductionChange} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={submitLoading}
            icon={<SaveOutlined />}>
            Save changes
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
export default Profile