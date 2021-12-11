import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : '',
    darkmode: false,
    facilityReload: false,
    facilityUsageReload: false
  },
  mutations: {
  },
  actions: {
    tokenControl() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.accessToken) {
        this.state.user = user
      }
    }
  },
  modules: {
  }
})
