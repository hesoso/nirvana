import http from '@/http'

interface UserType {
  key: string;
  userId: string;
  username: string;
  age: number;
  address: string;
  phone: string;
  tags: string[];
}

interface LoginParams {
  username: string;
  password: string;
}



// 用户登录
export const login = (params: LoginParams) => {
  return http.post<LoginParams, UserType>('/login', params)
}

// 用户登出
export const loginOut = (params) => {
  return http.post('/loginout', params)
}

// 获取用户列表
export const getUsers = () => {
  return http.get<{}, UserType[]>('/getUsers')
}

export default { login, loginOut, getUsers }
