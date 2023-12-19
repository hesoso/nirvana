import http from "@/http";

// 获取角色列表
export const getRoles = <T>() => {
  return http.get<T>("/getRoles");
};

// 获取菜单列表
export const getMenus = <T>() => {
  return http.get<T>("/getMenus");
};

export default { getRoles, getMenus };
