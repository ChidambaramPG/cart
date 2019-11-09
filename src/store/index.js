import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart:[],
    showCheckoutModal:false
  },
  mutations: {

    // add item to cart
    addToCart:(state,payload)=> {
      state.cart.push(payload)
    },

    // emove item fom cart
    removeItem: (state,payload)=> {
      state.cart = state.cart.filter( item => item.sku != payload.sku);
    },
    
    // show and hide checkout modal
    setCheckoutModalStatus:(state,payload) => {
      state.showCheckoutModal = payload;
    }
  },
  actions: {

  },
  modules: {
    
  }
});
