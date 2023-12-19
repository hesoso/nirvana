import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import nprogress from '@/config/nprogress'
import useRetry from './helper/retry'
import canceler from './helper/canceler'
import checkStatus from './helper/checkStatus'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    nprogress.start()
    canceler.add(config)
    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    nprogress.done()
    canceler.remove(response.config)
    return response.data
  },
  (error) => {
    useRetry(axiosInstance, error, () => {
      nprogress.done()
      canceler.remove(error.config)
      error.response && checkStatus(error.response.status)
    })
  },
)

interface ResponseBase {
  code: number;
  msg: string;
  total?: number;
}

interface ReponseResult<T> extends ResponseBase {
  data: T;
}

type ReponsePromise<T> = Promise<ReponseResult<T>>;

const http = {
  get<T>(url: string, params: object = {}): ReponsePromise<T> {
    return axiosInstance.get(url, { ...params })
  },
  post<T>(url: string, params: object = {}): ReponsePromise<T> {
    return axiosInstance.post(url, { ...params })
  },
  put<T>(url: string, params: object = {}): ReponsePromise<T> {
    return axiosInstance.put(url, { ...params })
  },
  delete<T>(url: string, params: object = {}): ReponsePromise<T> {
    return axiosInstance.delete(url, { ...params })
  },
}

export default http
