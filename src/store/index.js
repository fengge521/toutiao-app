import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user')) // 当前登录用户的登录状态(token等数据)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 把数据放到本地存储
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
