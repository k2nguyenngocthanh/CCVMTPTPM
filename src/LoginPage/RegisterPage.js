/** @format */

import Lottie from "lottie-react";
import bg_animate from "../asset/login_animate.json";
import { Button, Form, Input, Upload, message } from "antd";
import { useNavigate } from "react-router-dom";
import { userServ } from "../Service/userService";
import { UploadOutlined } from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterPage = () => {
  let navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    userServ
      .postRegister(values)
      .then((res) => {
        message.success("Đăng ký thành công");
        navigate("/login");
      })
      .catch((err) => {
        console.log("err", err);
        message.error(err.response.data.content);
      });
  };

  const props = {
    name: "avatar_img",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div
      style={{
        backgroundImage: `url('http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg')`,
      }}
      className="h-screen w-screen flex  justify-center items-center"
    >
      <div className="container mx-auto p-5 bg-white rounded flex">
        <div className="w-1/2 h-full">
          <Lottie animationData={bg_animate} loop={true} />
        </div>
        <div className="w-1/2 h-full">
          <p className="text-2xl text-center mb-4">Đăng Ký</p>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "84",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="mat_khau"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="mat_khau"
              label="Confirm Pass"
              dependencies={["mat_khau"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("mat_khau") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="ho_ten"
              label="Full name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="so_dt"
              label="Phone number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="avatar_img" label="Avatar image">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                className="bg-orange-500 hover:text-white hover:border-hidden"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
