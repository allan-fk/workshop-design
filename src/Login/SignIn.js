import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Col, Row, Layout, Typography, Select, DatePicker } from 'antd';
import {
  GoogleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const { Sider, Content } = Layout;

const SignIn = () => {
  const [width, setWidth] = useState('70%');

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const getPrefixPhones = () => {
    let prefixPhones = [];
    for (let i = 0; i < 100; i++) {
      prefixPhones.push(<Select.Option value={i}>{`+${i}`}</Select.Option>);
    }
    return prefixPhones;
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        {getPrefixPhones()}
      </Select>
    </Form.Item>
  );

  return (
    <Row justify="space-around" align="middle" style={{ height: "100vh" }}>
      <Col xl={12} lg={16} md={16} sm={12} xs={20}>
        <Row style={{ margin: "40px 0" }}>
          <Col span={24}>
            <Title>Register</Title>
          </Col>
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
                message: 'Please input your username !',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email !',
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
                message: 'Please input your password !',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="birthday" label="Birthday" rules={[
            {
              type: 'object',
              required: true,
              message: 'Please select your birthday !',
            },
          ]}>
            <DatePicker />
          </Form.Item>
          
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          

          <Form.Item
            wrapperCol={{
              span: 25,
            }}
          >
            <Button type="primary" htmlType="submit" size='large' style={{ width: "100%", margin: "3% 0" }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn