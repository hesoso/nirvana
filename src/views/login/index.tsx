import { Button, Form, Input, Checkbox, ConfigProvider } from 'antd'
import { useNavigate } from 'react-router-dom'
import userApi from '@/api/user'
import './index.scss'

const Login = () => {
  const navigate = useNavigate()

  const onFinish = async ({ username, password }) => {
    const res = await userApi.login({ username, password })

    if (res.status === 'success') navigate('/home')
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 style={{ color: '#d14e24' }}>Nirvana</h2>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#d14e24',
            },
            components: {
              Checkbox: {
                colorText: '#d14e24',
              },
            },
          }}
        >
          <Form
            name="basic"
            size="large"
            wrapperCol={{ offset: 0, span: 24 }}
            style={{ maxWidth: 800 }}
            initialValues={{ remember: true }}
            requiredMark={false}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<LoginParams>
              name="username"
              rules={[{ required: true, message: 'Please enter a username' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item<LoginParams>
              name="password"
              rules={[{ required: true, message: 'Please enter a password' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 18 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Login
