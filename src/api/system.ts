import http from '@/http'

/**
 * 获取角色列表 - 暂不分页
 */
export const getRoles = () => {
  return http.get<never, ListBaseRes<IRole>>('/getRoles')
}

/**
 * 获取菜单列表 - 暂不分页
 */
export const getMenus = () => {
  return http.get<never, ListBaseRes<IMenu>>('/getMenus')
}

export default { getRoles, getMenus }
