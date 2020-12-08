/*
 * @Author: your name
 * @Date: 2020-12-07 16:29:19
 * @LastEditTime: 2020-12-08 14:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\store\index.ts
 */


import { createStore } from 'vuex'
import { testData, testPosts} from '@/mock/testData'

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
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const Store = createStore<GlobalDataProps>({
  state: {
    columns:testData,
    posts: testPosts,
    user: {
      isLogin:false
    }
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
    }
  },
  actions:{

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
