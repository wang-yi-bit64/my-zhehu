/*
 * @Author: your name
 * @Date: 2020-12-11 13:56:00
 * @LastEditTime: 2020-12-16 11:15:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\api\user.js
 */
import http from "@/utils/request";

const Api = {
  Login: "/api/user/login",
  CreateUser: "/users",
  getCurrentInfo: "/api/user/current",
  uodateUser: "/api/user",
};

export const Login = (data: any) => http.post(Api.Login, data);

export const CreateUser = (data: any) => http.post(Api.CreateUser, data);
