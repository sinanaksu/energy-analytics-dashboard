import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex';
import i18n from './i18n'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
