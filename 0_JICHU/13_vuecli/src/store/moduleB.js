

const user =
{
  namespaced: true,

  // 存储状态
  state: {
    prolist: [
      {
        name: 'iphone12'
      },
      {
        name: 'qq'
      },
      {
        name: 'xx'
      }
    ]

  },
  // 修改状态的唯一方式
  // 在这里写方法
  mutations: {
    add1(state){
        state.prolist.push({name:"ooo"})
    }

  },
  // 相当于计算属性
  getters: {


  },

  // 类似于mutation  但是不是直接更改状态
  // 修改状态要调用mutation里的函数
  // 异步请求
  actions: {

  },
  // 模块
  modules: {

  }
}

// 导出
export default user