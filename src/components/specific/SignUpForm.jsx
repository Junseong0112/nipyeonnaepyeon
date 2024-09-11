import { Button, Form, Input } from "antd";

export default function SignUpForm() {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} name="register" layout="vertical">
        <Form.Item
          label="이메일"
          name="email"
          rules={[
            { type: "email", message: "이메일 형식이 아닙니다." },
            { required: true, message: "이메일을 입력해주세요!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="비밀번호 재확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "다시 비밀번호를 입력해주세요!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="닉네임"
          rules={[
            {
              required: true,
              message: "닉네임을 입력해주세요!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginTop: "15px" }}
            block
            size="large"
            type="primary"
            htmlType="submit"
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
