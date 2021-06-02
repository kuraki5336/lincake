import { createStore } from 'vuex'
import plu from './modules/plu'

const store = createStore({
  state() {
    return {
      count: 0,
      name: 'jason',
      token: 'qd281928d8ji',
      price: 199,
      saleprice: 500,
      users: []
    }
  },
  getters: {
    sale80(state) {
      return state.price * 0.8
    },
    sale50(state) {
      return state.price * 0.5
    }
  },
  mutations: {
    editprice(state, payload) {
      state.price = payload
    },
    editsaleprice(state, payload) {
      state.saleprice = payload
    },
    setuserlist(state, payload) {
      state.users = payload
    }
  },
  actions: {
    getUserlist(context) {
      fetch(`https://5f8a534d18c33c0016b31610.mockapi.io/vuex`).then(res => res.json()).then(data => {
        context.commit('setuserlist', data)
      })
    },
    getUserid(context, payload) {
      const { id } = payload
      fetch(`https://5f8a534d18c33c0016b31610.mockapi.io/vuex/${id}`).then(res => res.json()).then(data => {
        context.commit('setuserlist', data)
      })
    }
  },
  modules:{
    plu
  }
})


export default store