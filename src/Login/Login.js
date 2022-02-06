import { Form, Input, Button, Checkbox, Col, Row, Layout, Typography } from 'antd';

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
        <Row justify="space-around" align="middle">
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
                span: 16,
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
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Sider>
      {/* <Content span={12} style={{backgroundImage: `url(${"https://i1.wp.com/images.frandroid.com/wp-content/uploads/2021/06/windows-11-wallpaper-fond-ecran-4.jpg?ssl=1"})` }}> */}
      <Content span={12} style={{ backgroundColor: 'blue' }}>
        <img src={"https://i1.wp.com/images.frandroid.com/wp-content/uploads/2021/06/windows-11-wallpaper-fond-ecran-4.jpg?ssl=1"} alt="Logo" style={{ zIndex: 1, position: "relative", left: "-20%" }} />;
      </Content>
    </Layout>
  );
};

export default Login