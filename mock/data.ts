// 预定义角色数据
export const roles = [
  {
    code: 1001,
    name: "master",
    disabled: 1,
    presmission: "未知",
    desc: "主人",
  },
  {
    code: 1002,
    name: "guest",
    disabled: 1,
    presmission: "未知",
    desc: "访客",
  },
  {
    code: 1003,
    name: "developer",
    disabled: 1,
    presmission: "未知",
    desc: "开发人员",
  },
  {
    code: 1004,
    name: "reporter",
    disabled: 0,
    presmission: "未知",
    desc: "报告人员",
  },
];

// 预定义用户数据
export const users = [
  {
    userId: "10000",
    username: "admin",
    password: "admin",
    gender: "Unknown",
    age: 99,
    address: "蓬莱仙岛",
    phone: 13066668888,
    roles: [roles[0]],
    disabled: 1,
  },
  {
    userId: "10001",
    username: "trump",
    password: "trump",
    gender: "Male",
    age: 70,
    address: "Hawail",
    phone: 13066668888,
    roles: [roles[1]],
    disabled: 1,
  },
  {
    userId: "10002",
    username: "messi",
    password: "messi",
    gender: "Male",
    age: 70,
    address: "Hawail",
    phone: 13066668888,
    roles: [roles[2]],
    disabled: 1,
  },
];

// 预定义菜单数据
export const menus = [
  {
    code: 1001,
    name: "master",
    disabled: 1,
    presmission: "未知",
    desc: "主人",
  },
  {
    code: 1002,
    name: "guest",
    disabled: 1,
    presmission: "未知",
    desc: "访客",
  },
  {
    code: 1003,
    name: "developer",
    disabled: 1,
    presmission: "未知",
    desc: "开发人员",
  },
  {
    code: 1004,
    name: "reporter",
    disabled: 0,
    presmission: "未知",
    desc: "报告人员",
  },
];
