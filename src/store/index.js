import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    tasks: [],
    count: 0
  },
  mutations: {
    addTask (state, {task}) {
      state.tasks.push(task)
    },
    completeTask (state, {task}) {
      task.completed = !task.completed
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
