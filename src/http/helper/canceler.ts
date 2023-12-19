import axios, { AxiosRequestConfig, Canceler } from "axios";
import qs from "qs";

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pengdingMap = new Map<string, Canceler>();

const getPendingKey = ({ method, url, data, params }: AxiosRequestConfig) => {
  return `${method}&${url}${qs.stringify(data)}${qs.stringify(params)}`;
};

const add = (config: AxiosRequestConfig) => {
  const key = getPendingKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (pengdingMap.has(key)) return;
      pengdingMap.set(key, cancel);
    });
};

const remove = (config: AxiosRequestConfig) => {
  const key = getPendingKey(config);
  if (pengdingMap.has(key)) {
    const cancel = pengdingMap.get(key);
    cancel?.();
    pengdingMap.delete(key);
  }
};

const removeAll = () => {
  pengdingMap.forEach((cancel) => cancel?.());
  pengdingMap.clear();
};

export default { add, remove, removeAll };
