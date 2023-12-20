import faker from "faker";
import { signals } from "../src/constant/signals";
import { users } from "./data";

export default [
  // 登录接口
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      const { username, password } = body;
      const validate = signals.some((signal) => {
        if (typeof signal.password === "string") {
          return signal.password === username && signal.password === password;
        } else {
          return signal.username === username && signal.password.includes(password!);
        }
      });
      if (validate) {
        return {
          code: 0,
          msg: "登录成功",
          data: {
            userId: Date.now(),
            userName: username.slice(-3),
          },
        };
      } else {
        return {
          code: 403,
          msg: "用户名或密码错误",
          data: null,
        };
      }
    },
  },
  // 查询所有用户
  {
    url: "/api/getUsers",
    method: "get",
    response: () => {
      const fakeUsers = Array.from({ length: 35 }).map((item, index) => ({
        key: index,
        username: faker.name.firstName,
        password: "Aa111111!",
        gender: faker.name.gender,
        age: 15 + Math.round(Math.random() * 20),
        address: faker.address.cityName,
        phone: faker.phone.phoneNumber,
        tags: ["developer"],
      }));
      const allUsers = [...users, ...fakeUsers];
      return { code: 0, data: allUsers, total: allUsers.length };
    },
  },
  // 动态参数
  {
    url: "/api/user/:id",
    method: "get",
    response: ({ params }) => {
      return {
        code: 0,
        data: {
          id: params.id,
          // name: faker.name.findName(),
        },
      };
    },
  },
];
