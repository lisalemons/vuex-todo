import Vue from 'vue'
import Vuex from 'vuex'
import ToDoService from '../services/ToDoService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: Math.floor(Math.random() * 10000),
        title: 'This is an example to do item',
        description: 'This is the optional desription of the todo',
        done: true
      },
      {
        id:  Math.floor(Math.random() * 10000),
        title: 'This is an example to do item',
        description: 'This is the optional desription of the todo. This is the optional desription of the todo. This is the optional desription of the todo. This is the optional desription of the todo.',
        done: true
      }
    ]
  },
  mutations: {
    SET_TODOS(state, todos) {
     state.todos = todos
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    }
  },
  actions: {
    getAllTodos({ commit }) {
      return ToDoService.getTodos().then((res) => {
        commit('SET_TODOS', res.data)
      })
    },
    createTodo({ commit }, todo) {
      return ToDoService.postTodo(todo).then(() => {
        commit('ADD_TODO', todo)
      })
    }
  },
  modules: {
  }
})
