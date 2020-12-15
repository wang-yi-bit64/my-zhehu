/*
 * @Author: your name
 * @Date: 2020-12-08 17:33:56
 * @LastEditTime: 2020-12-11 18:31:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\utils\request.ts
 */
import axios from "axios";
import Store from "@/store";

axios.defaults.baseURL = "http://apis.imooc.com/api/";

const http = axios.create({
  baseURL: "http://apis.imooc.com/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    Store.commit("setLoading", true);
    if (config.method === "get" || config.method === "GET") {
      // get 请求，添加到 url 中
      config.params = {
        ...config.params,
        icode: "052079C04189FFD5",
      };
    }
    if (config.data instanceof FormData) {
      config.data.append("icode", "052079C04189FFD5");
    } else {
      config.data = {
        ...config.data,
        icode: "052079C04189FFD5",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    Store.commit("setLoading", false);
    const { data } = res;
    const { code } = data;
    if (code === 0) {
      return data;
    } else {
      return Promise.reject(res);
    }
  },
  (e) => {
    const { error } = e.responese.data;
    Store.commit("setLoading", false);
    Store.commit("setError", {
      status: false,
      message: error,
    });
    console.error(error);
    return Promise.reject(error);
  }
);

export default http;
