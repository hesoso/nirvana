import faker from "faker";
import { users } from "./data";

export default [
  // 登录接口，目前只允许定义好的那三个用户登录 admin, trump, messi
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      const { username, password } = body;
      const user = users.find((user) => {
        return user.password === username && user.password === password;
      });
      if (user) {
        return {
          code: 0,
          msg: "登录成功",
          data: { ...user },
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
  // 退出登录
  {
    url: "/api/loginOut",
    method: "post",
    response: () => {
      return { code: 0, msg: "退出登录成功" };
    },
  },
  // 查询所有用户
  {
    url: "/api/getUsers",
    method: "get",
    response: ({ query }) => {
      const total = 95;
      const { current, pageSize } = query;
      const maxPage = Math.ceil(total / pageSize);
      const length =
        current < maxPage ? pageSize : total % pageSize || pageSize;
      const fakeUsers = Array.from({ length }).map((item, index) => ({
        userId: 10000 + (current - 1) * pageSize + index + "",
        username: faker.name.firstName,
        password: "Aa111111!",
        gender: faker.name.gender,
        age: 15 + Math.round(Math.random() * 20),
        address: faker.address.cityName,
        phone: faker.phone.phoneNumber,
        roles: [
          {
            code: 1003,
            name: "developer",
            disabled: 1,
            presmission: "未知",
            desc: "开发人员",
          },
        ],
        disabled: 0,
      }));

      if (current === "1") {
        const leftList = fakeUsers.slice(-(length - users.length));
        const list = [...users, ...leftList];
        return { code: 0, data: { list: [...list], total } };
      } else {
        return { code: 0, data: { list: [...fakeUsers], total } };
      }
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
