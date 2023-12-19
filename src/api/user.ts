import http from '@/http'

// 用户登录
export const login = <T>(params) => {
  return http.post<T>('/login', params)
}

// 用户登出
export const loginOut = <T>(params) => {
  return http.post<T>('/loginout', params)
}

// 获取用户列表
export const getUsers = <T>() => {
  return http.get<T>('/getUsers')
}

export default { login, loginOut, getUsers }
