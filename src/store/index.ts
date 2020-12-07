
import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps} from '@/mock/testData'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}


export const Store = createStore<GlobalDataProps>({
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
      }
    }
  },
  actions:{

  },
  getters:{
    columns:state => state.columns,
    getCurrentColumn: state => (id: number) => {
      return state.columns.find(column => column.id === id)
    },
    getCurrentPostc:state => (id:number) => {
      console.log(state.posts);
      return state.posts.filter(postc => postc.columnId === id)
    },
    user:state=> state.user,
    posts:state => state.posts
  },
  modules:{
  }
})
