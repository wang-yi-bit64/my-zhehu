/*
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-10 15:22:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/strongly-recommended",
    "@vue/standard",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
