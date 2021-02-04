import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './moduleA'
import moduleB from './moduleB'

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
    modules  模块
  */



 
  // 模块
  modules: {
    a:moduleA,
    b:moduleB
    
  
  }
})
