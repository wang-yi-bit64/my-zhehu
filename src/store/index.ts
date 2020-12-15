import { createStore, Commit } from "vuex";
import { AxiosRequestConfig } from "axios";
import http from "@/utils/request";
export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}

export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  id?: number;
  columnId?: number;
  column?: string;
  email?: string;
  avatar?: ImageProps;
  description?: string;
}

interface ListProps<p> {
  [id: string]: p;
}

export interface ColumnProps {
  _id?: string;
  title: string;
  description: string;
  avatar?: ImageProps;
}

export interface PostProps {
  _id?: string;
  title: string;
  excrept?: string;
  content?: string;
  image?: ImageProps | any;
  createdAt?: string;
  author?: string | UserProps;
}

export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}

export interface GlobalDataProps {
  columns: {
    data: ColumnProps[];
    currentPage: number;
    total: number;
  };
  posts: {
    data: PostProps[];
    loadedColumns: string[];
    currentPage: number;
    total: number;
  };
  user: UserProps;
  error: GlobalErrorProps;
  loading: boolean;
  token: string;
  currentColumn: ColumnProps | any;
}

const axyncAndCommit = async (
  url: string,
  mutationsName: string,
  commit: Commit,
  config: AxiosRequestConfig = { method: "get" },
  extraData?: any
) => {
  commit("setLoading", true);
  // await new Promise(resolve => setTimeout(resolve, 3000))
  const { data } = await http(url, config);
  if (extraData) {
    commit(mutationsName, data, extraData);
  } else {
    commit(mutationsName, data);
  }
  commit("setLoading", false);
  return data;
};

const Store = createStore<GlobalDataProps>({
  devtools: true,
  state: {
    token: localStorage.getItem("token") || "",
    loading: false,
    columns: {
      data: [],
      currentPage: 0,
      total: 0,
    },
    currentColumn: {},
    posts: {
      data: [],
      loadedColumns: [],
      currentPage: 0,
      total: 0,
    },
    user: {
      isLogin: false,
    },
    error: { status: false },
  },
  mutations: {
    logout(state) {
      state.user = {
        isLogin: false,
      };
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, e: GlobalErrorProps) {
      state.error = e;
    },
    createPost(state, newPost) {
      state.posts.data[newPost._id] = newPost;
    },
    fetchColumns(state, rawData) {
      const { data } = state.columns;
      console.log("fetchColumns", rawData);
      const { list, count, currentPage } = rawData;
      console.log(list, count, currentPage);
      state.columns = {
        data: [...data, ...list],
        total: count,
        currentPage: currentPage * 1,
      };
    },
    fetchColumn(state, rawData) {
      console.log("fetchColumn", state, rawData);
      state.currentColumn = rawData;
    },
    fetchPostc(state, rawData) {
      const { data } = state.posts;
      const { list, count, currentPage } = rawData;
      state.posts = {
        ...state.posts,
        data: [...data, ...list],
        total: count,
        currentPage: currentPage * 1,
      };
    },
    fetchPost(state, rowData) {
      // state.posts.data[rowData.data._id] = rowData.data
    },
    fetchCurrentUser(state, rawData) {
      state.user = {
        isLogin: true,
        ...rawData,
      };
    },
    login(state, rowData) {
      const { token } = rowData;
      state.token = token;
      localStorage.setItem("token", rowData.token);
      http.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
  },
  actions: {
    fetchColumns({ commit }) {
      axyncAndCommit("/columns", "fetchColumns", commit);
    },
    fetchColumn({ commit }, cid) {
      axyncAndCommit(`/columns/${cid}`, "fetchColumn", commit);
    },
    fetchPostc({ commit }, cid) {
      axyncAndCommit(`/columns/${cid}/posts`, "fetchPostc", commit);
    },
    fetchCurrentUser({ commit }) {
      axyncAndCommit("/user/current", "fetchCurrentUser", commit);
    },
    login({ commit }, payload) {
      return axyncAndCommit(`/user/login`, "login", commit, {
        method: "post",
        data: payload,
      });
    },
    loginAndFetch({ dispatch }, loginData) {
      return dispatch("login", loginData).then(() => {
        dispatch("fetchCurrentUser");
      });
    },
  },
  getters: {
    columns: (state) => state.columns.data,
    posts: (state) => state.posts.data,
    currentColumn: (state) => state.currentColumn,
    getCurrentColumn: (state) => (id: string) => {
      const { data } = state.columns;
      return data.find((column) => column._id === id);
    },
    user: (state) => state.user,
  },
  modules: {},
});
export default Store;
