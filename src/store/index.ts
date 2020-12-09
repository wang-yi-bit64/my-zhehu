/*
 * @Author: your name
 * @Date: 2020-12-07 16:29:19
 * @LastEditTime: 2020-12-09 13:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\store\index.ts
 */


import { createStore , Commit} from 'vuex'
import { testData, testPosts} from '@/mock/testData'

import {AxiosRequestConfig} from 'axios'
import http from '@/utils/request'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostProps {
  _id?: number;
  title: string;
  excrept?:string;
  content?: string;
  image?: string;
  createdAt?: string;
  author?: string;
  columnId: number;
}

export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
  error:GlobalErrorProps;
  loading: boolean;
  token: string;
}

const axyncAndCommit  = async (url:string,mutationsName:string, commit:Commit, config:AxiosRequestConfig = {method: 'get'}, extraData?: any) => {
  const {data} = await http(url,config)
  console.log(data);
  if(extraData) {
    commit(mutationsName, data,extraData )
  } else {
    commit(mutationsName, data )
  }
  return data
}



const Store = createStore<GlobalDataProps>({
  state: {
    token: localStorage.getItem('token') || '',
    loading: false,
    columns:testData,
    posts: testPosts,
    user: {
      isLogin:false
    },
    error: {status :false},
  },
  mutations:{
    login(state) {
      state.user = {
        ...state.user,
        isLogin:true,
        name: '张三',
        columnId:1
      }
    },
    logout(state) {
      state.user = {
        isLogin: false,
      }
    },
    createPost(state,newPost) {
      state.posts.push(newPost)
    },
    fetchColumns(state, rawData) {
      console.log('mutations:fetchColumns',rawData);
      state.columns = rawData.list
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData.data]
    },
    fetchPostc(state,rawData) {
      state.posts = rawData.data.list
    },
    fetchPost(state, rowData) {
      // state.posts.data[rowData.data._id] = rowData.data
    }
  },
  actions:{
    fetchColumns({commit}) {
      axyncAndCommit('/columns','fetchColumns',commit)
    },
    fetchColumn({commit},cid) {
      axyncAndCommit(`/columns/${cid}`,'fetchColumn',commit)
    },
    fetchPost({commit}, cid) {
      axyncAndCommit(`/columns/${cid}/posts`,'fetchPosts',commit)
    }
  },
  getters:{
    columns:state => state.columns,
    getCurrentColumn: state => (id: number) => {
      return state.columns.find(column => column.id === id)
    },
    getCurrentPostc:state => (cid:number) => {
      return state.posts.filter(postc => postc.columnId === cid)
    },
    user:state=> state.user,
    posts:state => state.posts,
    biggColumnLen(state) {
      return state.columns.filter(c => c.id > 2).length
    }
  },
  modules:{
  }
})
export default Store
