import { Form, Input, Button, Checkbox, Col, Row, Layout, Typography } from 'antd';
import {
  GoogleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const { Sider, Content } = Layout;

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={'50%'} theme={'light'} style={{ zIndex: 2 }}>
        <Row justify="space-around" align="middle" style={{height: "100vh"}}>
          <Col span={12}>
            <Row style={{margin: "40px 0"}}>
              <Col span={24}>
                <Title>Welcome back</Title>
              </Col>
              <Text type="secondary">Welcome back! Please enter your details.</Text>
            </Row>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 25,
                }}
              >
                <Button type="primary" htmlType="submit" size='large' style={{width: "100%", margin: "3% 0"}}>
                  Sign In
                </Button>
                <Button htmlType="submit" size='large' style={{width: "100%"}}>
                <GoogleOutlined /> Sign In with Google
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Sider>
      <Content span={12} style={{ backgroundColor: 'blue' }}>
        <img src={"https://i1.wp.com/images.frandroid.com/wp-content/uploads/2021/06/windows-11-wallpaper-fond-ecran-4.jpg?ssl=1"} alt="Logo" style={{ zIndex: 1, position: "relative", left: "-50%", height: "100vh" }} />
      </Content>
    </Layout>
  );
};

export default Login