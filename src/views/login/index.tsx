import React, { useState } from "react";
import {
  Button,
  Form,
  Select,
  Input,
  ConfigProvider,
  notification,
} from "antd";
import { useNavigate } from "react-router-dom";
import { MehOutlined } from "@ant-design/icons";
import { signals } from "@/constant/signals";
import { obj2options } from "@/utils";
import userApi from "@/api/user";
import "./index.scss";

type FieldType = {
  upper?: string;
  lower?: string;
};

interface LoginRes {
  userId: string;
  username: string;
}

const Context = React.createContext({ name: "Default" });

export default function Login() {
  const navigate = useNavigate();

  const [errCount, setErrCount] = useState(0);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (tips: string, message = "Emmm...") => {
    api.info({
      message,
      description: <Context.Consumer>{() => tips}</Context.Consumer>,
      placement: "topRight",
      icon: <MehOutlined style={{ color: "#d14e24" }} />,
    });
  };

  const onFinish = async (values: FieldType) => {
    const res = await userApi.login<LoginRes>(values);

    if (res.code === 0) {
      navigate("/home", { state: { username: res.data.username } });
    } else {
      let errMessage = "摸鱼都不会？";
      if (errCount === 1) errMessage = "你是真的菜。";
      if (errCount > 1) errMessage = "去玩扫雷吧！";
      openNotification(errMessage);
      setErrCount(errCount + 1);
    }
  };

  return (
    <div className="login-wrapper">
      {contextHolder}
      <div className="login-box">
        <h2 style={{ color: "#d14e24" }}>暗号</h2>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#d14e24",
            },
            components: {
              Checkbox: {
                colorText: "#d14e24",
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
            <Form.Item<FieldType>
              name="upper"
              rules={[{ required: true, message: "别逼我求你选！" }]}
            >
              <Select
                placeholder="别犹豫了，选一个吧"
                options={obj2options(signals, "upper", "upper")}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="lower"
              rules={[{ required: true, message: "这题不会就换个会的！" }]}
            >
              <Input placeholder="考验文学功底的时候到了" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 17 }}>
              <Button type="primary" htmlType="submit">
                摸鱼
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
}
