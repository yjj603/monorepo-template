import axios from "axios";
import NProgress from "nprogress";
import { ElMessage } from "element-plus";
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE + "api",
  timeout: 30000,
});
service.interceptors.request.use(
  (config) => {
    // token处理
    return config;
  },
  (error) => Promise.reject(error)
);
service.interceptors.response.use(
  (response: AxiosResponse) => {
    //响应拦截
    return response.data;
  },
  (error: AxiosError) => {
    const {
      data: {
        response: { message },
      },
      status,
    } = error.response as any;
    const msg = Array.isArray(message) ? message.join(",") : message;
    const errorStatus = {
      400: "错误的请求",
      401: "未授权，请重新登录",
      403: "拒绝访问",
      404: "请求错误,未找到该资源",
      405: "请求方法未允许",
      408: "请求超时",
      500: "服务器端出错",
      501: "网络未实现",
      502: "网络错误",
      503: "服务不可用",
      504: "网络超时",
      505: "http版本不支持该请求",
    };
    const statusMessage = `${
      Reflect.get(errorStatus, status) ?? "出错了"
    }: ${msg}`;
    ElMessage.error(statusMessage);
    return Promise.reject(error.response);
  }
);
export function $http(params: AxiosRequestConfig) {
  NProgress.start();
  return service(params)
    .then((data) => {
      NProgress.done();
      return Promise.resolve(data);
    })
    .catch((error) => {
      NProgress.done();
      return Promise.reject(error);
    });
}
