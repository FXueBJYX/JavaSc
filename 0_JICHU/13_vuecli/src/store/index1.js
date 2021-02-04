import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  /*
    state  存储状态
    mutations 改变状态   同步的改状态
    getters  相当于计算属性
    action  相当于mutation  但是 
                          ① 不是直接改状态，想改状态要调用mutation中的方法
                          ② 异步操作
                                请求发出去下面代码是不阻塞的
    modules  模块  以后可能会分成管理员用户 商品等
  */



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
