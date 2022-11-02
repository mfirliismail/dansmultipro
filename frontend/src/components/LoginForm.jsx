import { useNavigate } from "react-router";
import { Button, Form, Input, message } from "antd";
import axios from "axios"

export const LoginForm = ({ onSubmit, loading, error }) => {
  let navigate = useNavigate();

  const handleOnSubmit = async ({ email, password }) => {
    const body = {
        email,
        password
    }
    const data = await axios.post("http://localhost:3000/users/validate", body)
    console.log(data.data)
    if (data.status === 200) { 
        localStorage.setItem("token", data.data.data)
      navigate("/")
    } else {
      message.error("please input valid email or password")
    }
  }

  return (
    <Form 
      layout="vertical"
      onFinish={handleOnSubmit}
    >
      <h3 className="font-semibold text-2xl py-8">Login</h3>
      <Form.Item
        label="Email"
        name="email"
      >
        <Input disabled={loading}/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
      >
        <Input.Password disabled={loading}/>
      </Form.Item>
      <Form.Item shouldUpdate>
        {({ getFieldsValue }) => {
          const { email, password } = getFieldsValue(true)
          const isAllFilled = email && password
          return (
            <div className="flex items-center gap-4">
              <Button
                type="primary"
                htmlType="submit"
                disabled={!isAllFilled}
                loading={loading}
                // onClick={handleOnSubmit(email, password)}
              >
                Sign In
              </Button>
              {/* {error && <Typography.Text type="danger">{error?.message}</Typography.Text>} */}
            </div>
          );
        }}
      </Form.Item>
    </Form>
  );
};
