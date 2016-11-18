import * as types from '../../mutation-types'

export default {
  state: {
    todos: []
  },
  mutations: {
    [types.RECEIVE_TODOS] (state) {
      state.todos = [
        {
          id: Math.random(),
          task: 'Default Task',
          done: true
        }
      ]
    },
    [types.ADD_TODO] (state, todo) {
      state.todos.push(todo)
    },
    [types.TOGGLE_TODO] (state, todo) {
      todo.done = !todo.done
    },
    [types.CLEAR_TODOS] (state) {
      state.todos = state.todos.filter((todo) => {
        return todo.done === false
      })
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
    toggleTodo ({ state, commit }, task) {
      commit(types.TOGGLE_TODO, task)
    },
    clearTodos ({ state, commit }) {
      commit(types.CLEAR_TODOS)
    }
  }
}
