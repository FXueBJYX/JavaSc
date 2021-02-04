import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prodlist: []
  },
  mutations: {
    // 存储数据
    save(state, list) {
      state.prodlist = list;
    },
    // 商品数量+1
    // 商品种类的号和种类里的号
    add(state, { index, typeIndex }) {
      // console.log(obj)
      let prod = state.prodlist[index].content[typeIndex]
      if (prod.count) {
        // prod.count++;
        Vue.set(prod, 'count', prod.count + 1)
      } else {
        // prod.count = 1;
        Vue.set(prod, 'count', 1);
      }
    },
    // 减号
    reduce(state,{index,typeIndex}){
      let prod = state.prodlist[index].content[typeIndex]
      if (prod.count!=0) {
        // prod.count++;
        Vue.set(prod, 'count', prod.count - 1)
      } else {
        // prod.count = 1;
        Vue.set(prod, 'count', 1);
      }
    }
  },
  getters:{
    total(state) {
      let sum = 0;
      state.prodlist.forEach((type) => {
        // console.log(type)
        type.content.forEach((prod) => {
          if (prod.count > 0) {
            sum += prod.count;
          }
        })
      })
      return sum;
    },
    totalPrice(state) {
      let sumPrice = 0;
      state.prodlist.forEach((type) => {
        type.content.forEach(prod => {
          if (prod.count > 0) {
            sumPrice += prod.count * prod.price;
          }
        })
      })
      return sumPrice;
    }
  },
  actions: {
  },
  modules: {
  }
})
