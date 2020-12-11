/*
 * @Author: your name
 * @Date: 2020-12-11 13:56:00
 * @LastEditTime: 2020-12-11 14:04:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\api\user.js
 */
import http from "@/utils/request";

const Api = {
  Login: "/api/user/login",
  CreateUser: "/api/users",
  getCurrentInfo: "/api/user/current",
  uodateUser: "/api/user",
};

export const Login = (data: unknown) => http.post(Api.Login, data);

export const CreateUser = (data: unknown) => http.post(Api.CreateUser, data);
