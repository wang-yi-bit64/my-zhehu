/*
 * @Author: your name
 * @Date: 2020-12-08 17:33:56
 * @LastEditTime: 2020-12-09 11:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\utils\request.ts
 */
import axios, {AxiosRequestConfig, Method, ResponseType} from 'axios'

axios.defaults.baseURL = "http://apis.imooc.com/api/"


const http = axios.create({
  baseURL:"http://apis.imooc.com/api/",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(config => {
  if(config.method === 'get' || config.method === 'GET') {
    // get 请求，添加到 url 中
    config.params = {
      ...config.params,
      icode:'052079C04189FFD5'
    }
  }
  if(config.data instanceof FormData) {
    config.data.append('icode', "052079C04189FFD5")
  } else {
    config.data = {
      ...config.data,
      icode:'052079C04189FFD5'
    }
  }
  return config
}, error  => {
  return Promise.reject(error)
})

http.interceptors.response.use(res => {
  const {data} = res
  console.log(data);

  const {code, msg} = data
  if(code === 0) {
    return data
  } else {
    return Promise.reject(res)
  }
}, error => {
  return Promise.reject(error)
})

export default http
