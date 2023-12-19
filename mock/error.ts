// 模拟错误接口

export default [
  {
    url: "/api/getError400",
    method: "get",
    statusCode: 400,
    response: () => {
      return { msg: "这是一个模拟400错误接口" };
    },
  },
  {
    url: "/api/getError401",
    method: "get",
    statusCode: 401,
    response: () => {
      return { msg: "这是一个模拟401错误接口" };
    },
  },
  {
    url: "/api/getError403",
    method: "get",
    statusCode: 403,
    response: () => {
      return { msg: "这是一个模拟403错误接口" };
    },
  },
  {
    url: "/api/getError404",
    method: "get",
    statusCode: 404,
    response: () => {
      return { msg: "这是一个模拟404错误接口" };
    },
  },
  {
    url: "/api/getError405",
    method: "get",
    statusCode: 405,
    response: () => {
      return { msg: "这是一个模拟405错误接口" };
    },
  },
  {
    url: "/api/getError408",
    method: "get",
    statusCode: 408,
    response: () => {
      return { msg: "这是一个模拟408错误接口" };
    },
  },
  {
    url: "/api/getError500",
    method: "get",
    statusCode: 500,
    response: () => {
      return { msg: "这是一个模拟500错误接口" };
    },
  },
  {
    url: "/api/getError502",
    method: "get",
    statusCode: 502,
    response: () => {
      return { msg: "这是一个模拟502错误接口" };
    },
  },
  {
    url: "/api/getError503",
    method: "get",
    statusCode: 503,
    response: () => {
      return { msg: "这是一个模拟503错误接口" };
    },
  },
  {
    url: "/api/getError504",
    method: "get",
    statusCode: 504,
    response: () => {
      return { msg: "这是一个模拟504错误接口" };
    },
  },
];
