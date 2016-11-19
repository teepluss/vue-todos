import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const localStoragePlugin = store => {
  // console.log(store)
  store.subscribe((mutation, { todo }) => {
    window.localStorage.setItem('vue-todos', JSON.stringify(todo.todos))
  })
}

const plugins = [localStoragePlugin]

export default new Vuex.Store({
  modules: {
    todo: todo
  },
  plugins,
  strict: debug
})
