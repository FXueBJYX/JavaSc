import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
    namespace:true,
  
  // 存储状态
  state: {
      list:[
            {
                name:'zs'
            },
            {
                name:'ls'
            },
            {
                name:'ww'
            },
      ]
   
  },
  // 修改状态的唯一方式
  // 在这里写方法
  mutations: {
      add(state){
          state.list.push({name:'zl'})
      }
    
  },
  // 相当于计算属性
  getters:{
    

  },

    // 类似于mutation  但是不是直接更改状态
    // 修改状态要调用mutation里的函数
    // 异步请求
  actions: {
    
  },
  // 模块
  modules: {

  }
})