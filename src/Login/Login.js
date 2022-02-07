import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Col, Row, Layout, Typography } from 'antd';
import {
  GoogleOutlined
} from '@ant-design/icons';
import SignIn from './SignIn';

const { Title, Text, Link } = Typography;

const { Sider, Content } = Layout;

const Login = () => {
  const [width, setWidth] = useState('70%');
  const [loginIsVisible, setLoginIsVisible] = useState(true);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={'50%'} collapsedWidth={'100%'} breakpoint="md" theme={'light'} style={{ zIndex: 2, width: '50%' }
      }>
        {loginIsVisible &&
        <Row justify="space-around" align="middle" style={{ height: "100vh" }}>
          <Col xl={12} lg={16} md={16} sm={12} xs={20}>
            <Row style={{ margin: "40px 0" }}>
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
                <Button type="primary" htmlType="submit" size='large' style={{ width: "100%", margin: "3% 0" }}>
                  Login
                </Button>
                <Button htmlType="submit" size='large' style={{ width: "100%" }}>
                  <GoogleOutlined /> Login with Google
                </Button>
                <Row style={{margin:"5px 0"}}>
                <Text style={{marginRight:"5px"}}>Not register yet?</Text><Link type="link" onClick={() => setLoginIsVisible(false)}> Create an Account</Link>
                </Row>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        }
        {!loginIsVisible && <SignIn/>}
      </Sider>
      <Content span={12} style={{ backgroundColor: 'blue' }}>
        <img src={"https://i1.wp.com/images.frandroid.com/wp-content/uploads/2021/06/windows-11-wallpaper-fond-ecran-4.jpg?ssl=1"} alt="Logo" style={{ zIndex: 1, position: "fixed", left: "50%", height: "105%", transform: "translate(-25%, 0px)", minHeight: "400px" }} />
      </Content>
    </Layout>
  );
};

export default Login