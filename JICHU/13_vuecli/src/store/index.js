import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  // 存储状态
  state: {
    count:0
  },
  // 修改状态的唯一方式
  // 在这里写方法
  mutations: {
    add(state,num){
      state.count += num
  }
  },
  actions: {
  },
  modules: {
  }
})
