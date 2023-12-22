import http from '@/http'

/**
 * 用户登录接口
 */
export const login = (params: LoginParams) => {
  return http.post<LoginParams, IUser>('/login', params)
}

/**
 * 退出登录接口
 */
export const loginOut = () => {
  return http.post('/loginOut', {})
}

/**
 * 用户列表接口 - 分页
 */
export const getUsers = (params: ListBaseParams) => {
  return http.get<ListBaseParams, ListBaseRes<IUser>>('/getUsers', params)
}

export default { login, loginOut, getUsers }
