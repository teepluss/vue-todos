import * as types from '../../mutation-types'
import * as api from '../../../api'
import _ from 'lodash'

export default {
  state: {
    todos: [],
    view: null
  },
  mutations: {
    [types.RECEIVE_TODOS] (state, { todos }) {
      // This data can be data from the server.
      // state.todos = []

      state.todos = _.sortBy(todos, (todo) => {
        return todo.position
      })
    },
    // [types.FIND_TODO] (state, { todo, cb }) {
    //   const view = state.todos.find(t => todo === t)
    //   cb(view)
    // },
    [types.FIND_TODO_VIEW] (state, { todo }) {
      const view = state.todos.find(t => todo === t)
      state.view = view
    },
    [types.CLEAR_TODO_VIEW] (state) {
      state.view = null
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
      // state.todos = state.todos.filter((todo) => {
      //   return todo.done === false
      // })
      state.todos = state.todos.filter(todo => !todo.done)
    },
    [types.DELETE_TODO] (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    [types.POSITION_TODO] (state, { todo, index }) {
      todo.position = index
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
      api.todo.fetch()
        .then(todos => {
          commit(types.RECEIVE_TODOS, { todos })
        })
    },
    findTodoView ({ state, commit }, todo) {
      // This code just test async.
      // return new Promise((resolve) => {
      //   commit(types.FIND_TODO, {
      //     todo: todo,
      //     cb: (resp) => {
      //       resolve(resp)
      //     }
      //   })
      // })
      commit(types.FIND_TODO_VIEW, { todo })
    },
    clearTodoView ({ state, commit }) {
      commit(types.CLEAR_TODO_VIEW)
    },
    addTodo ({ state, commit }, task) {
      commit(types.ADD_TODO, {
        id: Math.floor((1 + Math.random()) * 0x10000).toString(16),
        task: task,
        done: false,
        position: 999999
      })
    },
    editTodo ({ state, commit }, { todo, task }) {
      commit(types.EDIT_TODO, { todo, task })
    },
    deleteTodo ({ state, commit }, todo) {
      commit(types.DELETE_TODO, todo)
    },
    toggleTodo ({ state, commit }, todo) {
      commit(types.TOGGLE_TODO, todo)
    },
    clearTodos ({ state, commit }) {
      commit(types.CLEAR_TODOS)
    },
    positionTodo ({ state, commit }, positions) {
      positions.forEach((id, index) => {
        const todo = state.todos.find(t => t.id === id)
        commit(types.POSITION_TODO, { todo, index })
      })
    }
  }
}
