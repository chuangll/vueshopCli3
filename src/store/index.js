import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cartsModules from './carts'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  namespaced: true,
  state: {
    isLoading: false,
    products: [],
    likeData: [],
    bagToggle: true
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getProducts (context, page) {
      // 取得api資料
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true)
      axios.get(api).then(response => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('LOADING', false)
      })
    },
    bagToggleFn (context, state) {
      context.commit('BAGTOGGLE', state)
    },
    cartItemDelete (context, item) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`
      axios.delete(url).then(response => {
        context.dispatch('cartsModules/getCart')
        context.commit('LOADING', false)
      })
    },
    getLocalData (context) {
      context.commit('LIKEDATA', (JSON.parse(localStorage.getItem('likeData')) || []))
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PRODUCTS (state, payload) {
      state.products = payload
    },
    LIKEDATA (state, payload) {
      state.likeData = payload
    },
    BAGTOGGLE (state, payload) {
      state.bagToggle = payload
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    products (state) {
      return state.products
    },
    likeData (state) {
      return state.likeData
    },
    bagToggle (state) {
      return state.bagToggle
    }
  },
  modules: {
    cartsModules
  }
})
