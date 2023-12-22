import type { AxiosError, AxiosResponse } from 'axios'

type BaseRequest<T, V> = (params?: T) => Promise<AxiosResponse<V>>

type SuccessResponse<V> = {
  status: 'success'
  data: V
}

type ErrorResponse<E = AxiosError> = {
  status: 'error'
  error: E
}

type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>

/**
 * @description 使用 try catch 统一处理请求并返回标准响应
 * @param {BaseRequest<T, V>} request
 */
const requestHandler =
  <T, V, E = AxiosError>(request: BaseRequest<T, V>) =>
  async (params?: T): BaseResponse<V, E> => {
    try {
      const response = await request(params)
      return { status: 'success', data: response.data }
    } catch (e) {
      return { status: 'error', error: e as E }
    }
  }

export default requestHandler
