import { SaveOutlined } from '@ant-design/icons';
import { Button, Card, Cascader, Col, DatePicker, Form, Input, Radio, Row, Select, Typography } from 'antd';

const Profile = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <Card>
      <Form
        name="user-profile-details-form"
        layout="vertical"
        initialValues={{
          id: '474e2cd2-fc79-49b8-98fe-dab443facede',
          username: 'kelvink96',
          firstName: 'Kelvin',
          middleName: 'Kiptum',
          lastName: 'Kiprop',
          company: 'Design Sparx',
          email: 'kelvin.kiprop96@gmail.com',
          subscription: 'pro',
          status: 'active',
        }}
        onFinish={onFinish}
        autoComplete="on"
        requiredMark={false}
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
                    copyable={{ text: '474e2cd2-fc79-49b8-98fe-dab443facede' }}
                    style={{ margin: 0 }}
                  ></Typography.Paragraph>
                }
              />
            </Form.Item>
          </Col>
          <Col sm={24} lg={8}>
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
          <Col sm={24} lg={8}>
            <Form.Item
              label="Real Name"
              name="real_name"
              rules={[
                { required: true, message: 'Please input your real name!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col sm={24} lg={8}>
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
          <Col sm={24} lg={8}>
            <Form.Item
              label="Birthday"
              name="birthday"
              rules={[
                { required: true, message: 'Please input your birthday!' },
              ]}
            >
              <DatePicker style={{
                width: '100%',
              }} />
            </Form.Item>
          </Col>
          <Col sm={24} lg={8}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: 'Please select your gender!' },
              ]}
            >
              <Radio.Group>
                <Radio value="0">Man</Radio>
                <Radio value="1">Female</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="intro" label="Introduction">
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
            Save changes
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
export default Profile