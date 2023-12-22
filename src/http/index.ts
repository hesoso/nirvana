import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import nprogress from "@/config/nprogress";
import useRetry from "./helper/retry";
import canceler from "./helper/canceler";
import checkStatus from "./helper/checkStatus";
import requestHandler from "./helper/requestHandler";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    nprogress.start();
    canceler.add(config);
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    nprogress.done();
    canceler.remove(response.config);
    if (response.data.code === 0) {
      return response.data;
    } else {
      Promise.reject(response.data);
    }
  },
  (error) => {
    useRetry(axiosInstance, error, () => {
      nprogress.done();
      canceler.remove(error.config);
      error.response && checkStatus(error.response.status);
    });
  },
);

const http = {
  get<T, V>(url: string, params?: T) {
    return requestHandler<T, V>(() => axiosInstance.get(url, { params }))();
  },
  post<T, V>(url: string, data: T) {
    return requestHandler<T, V>(() => axiosInstance.post(url, data))();
  },
  put<T, V>(url: string, data: T) {
    return requestHandler<T, V>(() => axiosInstance.put(url, data))();
  },
  delete<T, V>(url: string, params?: T) {
    return requestHandler<T, V>(() => axiosInstance.delete(url, { params }))();
  },
};

export default http;
