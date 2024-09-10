import { Link } from "react-router-dom";
import { Button, Form, Input, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import style from "./SignInForm.module.css";

export default function SignInForm() {
  const [form] = Form.useForm();

  return (
    <section className={style.section}>
      <h1 className={style.title}>로그인</h1>
      <Form form={form} name="login" layout="vertical">
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "이메일을 입력해주세요!" }]}
        >
          <Input size="large" prefix={<UserOutlined />} placeholder="email" />
        </Form.Item>
        <Form.Item
          label="Password"
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
      <Link className={style.register} to="/signup">
        회원이 아니신가요?
      </Link>
      <Divider>간편로그인</Divider>
      <article className={style.oauthBox}>
        <Button icon={<GoogleOutlined />}>Google로 가입하기</Button>
        <Button icon={<GithubOutlined />}>GitHub로 가입하기</Button>
      </article>
    </section>
  );
}
