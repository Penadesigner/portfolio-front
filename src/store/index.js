import { createStore } from 'vuex'
import http from '@/services/http'

export default createStore({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    MutBuscaUsers(state, payload){
      state.users = payload
    }
  },
  actions: {
    ActBuscaUsers({commit}){
      return http.get("users").then(res => {  
        commit('MutBuscaUsers', res.data.data)
        console.log("busca users" , res.data.data);
      })
    }
  },
  modules: {
  }
})

