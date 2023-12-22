/** 列表接口通用参数 */
interface ListBaseParams {
  current: number;
  pageSize: number;
}

/** 列表接口通用响应 */
interface ListBaseRes<T> {
  list: T[];
  total: number;
}

/** 登录接口参数 */
interface LoginParams {
  username: string;
  password: string;
}
