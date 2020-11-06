// 入口文件

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/assets/css/common.css'
import '../src/assets/js/rem'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
