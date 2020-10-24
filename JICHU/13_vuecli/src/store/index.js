import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  // 存储状态
  state: {
    count:0,
    count2:1,
    list:[]
  },
  // 修改状态的唯一方式
  // 在这里写方法
  mutations: {
    add(state,num){
      state.count += num
    },
    // 添加list的函数
    addList(state,arr){
      state.list=arr;
    }
  },
  // 相当于计算属性
  getters:{
    sum(state){
      return state.count + state.count2
    }

  },

    // 类似于mutation  但是不是直接更改状态
    // 修改状态要调用mutation里的函数
    // 异步请求
  actions: {
    // 1封装请求action
    getMovielist({commit}){
      console.log('调用了');
      // 请求电影数据
      axios.get('https://bird.ioliu.cn/v1?url=https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a')
      .then((res)=>{
        console.log(res.data.subject_collection_items);
        // 把请求回来的数放到list中
        commit('addList',res.data.subject_collection_items)

      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
  // 模块
  modules: {
  }
})
