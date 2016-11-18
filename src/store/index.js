import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todo: todo
  },
  strict: debug
})
