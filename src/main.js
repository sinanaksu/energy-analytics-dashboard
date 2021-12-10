import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex';
import router from './router'
import i18n from './i18n'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
