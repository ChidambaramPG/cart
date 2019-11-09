import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart:[],
    showCheckoutModal:false
  },
  mutations: {
    addToCart:(state,payload)=> {
      state.cart.push(payload)
    },
    removeItem: (state,payload)=> {
      state.cart = state.cart.filter( item => item.sku != payload.sku);
    },
    setCheckoutModalStatus:(state,payload) => {
      state.showCheckoutModal = payload;
    }
  },
  actions: {

  },
  modules: {
    
  }
});
