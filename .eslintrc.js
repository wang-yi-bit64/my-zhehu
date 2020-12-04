/*
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-04 11:33:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\.eslintrc.js
 */
module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi:'off',
    quotes:'off'

  },

  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ]
}
