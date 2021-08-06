const wishcart = {
  state: {
    cartData: {
      products: [],
      Quantities: 0
    }
  },
  getters: {

    getCart: state => {
      return state.cartData;
    },

    wishgetQuantities: state => {
      let qauntites = 0;
      state.cartData.products.forEach(
        product => (qauntites += parseInt(product.quantity))
      );
      return qauntites;
    }
  },
  mutations: {


    deleteProduct: (state, id) => {
      state.cartData.products = state.cartData.products.filter(
        product => product.id !== id
      );
    },

    wishToCart: (state, payload) => {
      payload.wishlist = true
      const product = state.cartData.products.find(
        pro => pro.id === payload.id
      );
      if (product) {
        console.log(payload);
        console.log(product);
        return state;


      } else {
        state.cartData = {
          ...state.cartData,
          products: [...state.cartData.products, payload],
        };
      }
    },
    move(state,payload){
      state.cartData.products = state.cartData.products.filter(product => product.id !== payload.product.id);

  }
  },

  actions: {



    wishToCart: (obj, payload) => {
      obj.commit("wishToCart", payload);
    },


    deleteProduct: (obj, id) => {
      obj.commit("deleteProduct", id);
    },
    move({commit},payload){
      commit('move',payload)
  }
  }
};

export default wishcart;
