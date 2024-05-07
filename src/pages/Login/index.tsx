import { Button, Form, Input, message } from 'antd';
import { useState } from "react";
import loginBg from '@/assets/images/login/login-bg.png';
import { LoginValue } from '@/types/models/user';
import { useNavigate } from 'react-router-dom';
import { links } from '@/router/links';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '@/store/modules/user';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const onFinish = async (values: LoginValue) => {
    try {
      setLoading(true)
      await dispatch(fetchLogin(values))
      navigate(links.dashboard)
      message.success('Lgoin success!')
    } catch (error) {
      throw new Error('login faild')
    } finally {
      setLoading(false)
    }

  }
  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <img
          alt=""
          src={loginBg}
          width="918"
          height="1495"
          decoding="async"
          data-nimg="1"
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%] opacity-50"
          style={{ color: 'transparent' }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-20 md:mt-auto md:h-screen">
              <div
                className="bg-white rounded-2xl shadow-2xl w-full sm:w-96"
                style={{
                  maxWidth: 'calc(100vw - 5rem)',
                  padding: '2.375rem 1rem 3rem',
                }}
              >
                <div className="p-8 space-y-4 md:space-y-6 md:p-10">

                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-left text-opacity-30 tracking-wide">
                    Login
                  </h1>
                  <Form
                    className="space-y-4 md:space-y-6"
                    name="login"
                    initialValues={{
                      mobile: '13800000002',
                      code: '246810'
                    }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{
                      flex: 1,
                    }}
                    layout="vertical"
                    requiredMark={false}
                    onFinish={onFinish}
                  >
                    <div>
                      <Form.Item
                        name="mobile"
                        label={
                          <p className="block text-sm font-medium text-gray-900">Phone</p>
                        }
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your phone number',
                          },
                          {
                            pattern: /^1[3-9]\d{9}$/,
                            message: 'Please enter a valid phone number',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Please enter your phone number"
                          className="bg-gray-50 text-gray-900 sm:text-sm py-1.5 w-full"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="code"
                        label={
                          <p className="block text-sm font-medium text-gray-900">
                            Code
                          </p>
                        }
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your code',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Please enter your code"
                          className="bg-gray-50 text-gray-900 sm:text-sm py-1.5 w-full"
                        />
                      </Form.Item>
                    </div>

                    <div className="text-center">
                      <Button
                        className="mt-4 bg-primary"
                        block
                        loading={loading}
                        type="primary"
                        size="large"
                        htmlType={'submit'}
                      >
                        Login
                      </Button>
                    </div>
                  </Form>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

  )

}

export default Login;