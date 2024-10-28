import { Link } from "react-router-dom";
import { Button, Form, Input, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const Register = styled(Link)`
  display: block;
  margin: 0.9375rem 0;
  text-align: right;
  color: #1a4cff;
`;

const OauthBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  button {
    font-size: 16px;
    height: 2.5rem;
  }
`;

export default function SignInForm() {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} name="login" layout="vertical">
        <Form.Item
          label="이메일"
          name="email"
          rules={[{ required: true, message: "이메일을 입력해주세요!" }]}
        >
          <Input size="large" prefix={<UserOutlined />} placeholder="email" />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요!" }]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined />}
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Button size="large" block type="primary" htmlType="submit">
            로그인 하기
          </Button>
        </Form.Item>
      </Form>
      <Register to="/signup">회원이 아니신가요?</Register>
      <Divider>간편로그인</Divider>
      <OauthBox>
        <Button icon={<GoogleOutlined />}>Google로 가입하기</Button>
        <Button icon={<GithubOutlined />}>GitHub로 가입하기</Button>
      </OauthBox>
    </>
  );
}
