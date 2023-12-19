import { roles } from "./data";

export default [
  // 查询角色
  {
    url: "/api/getRoles",
    method: "get",
    response: () => {
      return { code: 0, data: roles };
    },
  },
  // 查询菜单
  {
    url: "/api/getMenus",
    method: "get",
    response: () => {
      return { code: 0, data: [] };
    },
  },
];
