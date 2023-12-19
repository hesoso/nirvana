import type { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'

type WarpConfig = AxiosRequestConfig & { retryCount: number };
type WarpAxiosError = AxiosError & { config: WarpConfig };

const MAX_RETRIES = 3
const RETRY_DELAY = 3 * 1000

/**
 * @description: 错误重试机制
 * @param axiosInstance
 * @param error
 * @param callback
 * @return void
 */
const useRetry = (
  axiosInstance: AxiosInstance,
  error: WarpAxiosError,
  callback: () => void
) => {
  const config = error.config
  // todoo 这里不同的请求是否会触发重试次数累计
  // 若config不存在或重试次数已达最大值，抛出错误
  if (!config || config.retryCount >= MAX_RETRIES) {
    callback()
    return Promise.reject(error)
  }

  // 设置重试次数
  config.retryCount = config.retryCount || 0

  // 根据状态码判断是否重试
  if (error.response?.status === 500) {
    config.retryCount += 1
    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve(void 0)
      }, RETRY_DELAY)
    })
    return backoff.then(() => axiosInstance(config))
  } else {
    callback()
  }
}

export default useRetry
