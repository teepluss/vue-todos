import * as types from '../../mutation-types'

// console.log(window.localStorage.getItem('vue-todos'))

export default {
  state: {
    todos: []
  },
  mutations: {
    [types.RECEIVE_TODOS] (state) {
      state.todos = JSON.parse(window.localStorage.getItem('vue-todos') || '[]')
    },
    [types.ADD_TODO] (state, todo) {
      state.todos.push(todo)
    },
    [types.EDIT_TODO] (state, { todo, task }) {
      todo.task = task
    },
    [types.TOGGLE_TODO] (state, todo) {
      todo.done = !todo.done
    },
    [types.CLEAR_TODOS] (state) {
      state.todos = state.todos.filter((todo) => {
        return todo.done === false
      })
    },
    [types.DELETE_TODO] (state, todo) {
      // console.log(todo)
      state.todos.splice(state.todos.indexOf(todo), 1)
    }
  },
  getters: {
    todoCount: state => {
      return state.todos.length
    },
    todoDoneCount: state => {
      return state.todos.filter(todo => todo.done).length
    },
    todoUndoneCount: state => {
      return state.todos.filter(todo => !todo.done).length
    }
  },
  actions: {
    getTodos ({ state, commit }) {
      commit(types.RECEIVE_TODOS)
    },
    addTodo ({ state, commit }, task) {
      commit(types.ADD_TODO, {
        id: Math.random(),
        task: task,
        done: false
      })
    },
    editTodo ({ state, commit }, { todo, task }) {
      commit(types.EDIT_TODO, {
        todo: todo,
        task: task
      })
    },
    deleteTodo ({ state, commit }, todo) {
      commit(types.DELETE_TODO, todo)
    },
    toggleTodo ({ state, commit }, todo) {
      commit(types.TOGGLE_TODO, todo)
    },
    clearTodos ({ state, commit }) {
      commit(types.CLEAR_TODOS)
    }
  }
}
