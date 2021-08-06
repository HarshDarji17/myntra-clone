const cart = {
  state: {
    cartData: {
      products: [],
      totalPrice: 0,
      Quantities: 0
    }
  },
  getters: {
    getCart: state => {
      return state.cartData;
    },

    getPrice: state => {
      let price = 0;
      state.cartData.products.forEach(product => (price += product.totalPrice));
      console.log("getprice");

      return price;
    },
    getQuantities: state => {
      let qauntites = 0;
      state.cartData.products.forEach(
        product => (qauntites += parseInt(product.quantity))
      );

      return qauntites;
    },



  },
  mutations: {
    addToCart: (state, payload) => {
      payload.baglist = true
      const product = state.cartData.products.find(
        pro => pro.id === payload.id
      );
      console.log(payload);
      //  state.cartData.products.push(payload)
      if (product) {
        return state;
      } else {

        payload.totalPrice = parseInt(payload.quantity) * payload.price;

        console.log(parseInt(payload.quantity));
        console.log(payload.totalPrice)
        console.log(payload.price)
        console.log(payload.totalPrice = parseInt(payload.quantity) * payload.price);
        state.cartData = {
          ...state.cartData,
          products: [...state.cartData.products, payload],
          totalPrice: state.cartData.totalPrice + payload.price,
          Quantities: state.cartData.Quantities + 1
        };
      }
    },

    updateQuantity: (state, payload) => {
      const product = state.cartData.products.find(
        product => product.id === payload.id
      );

      product.quantity = payload.qty
      product.totalPrice = product.price * (product.quantity);

      state.cartData = {
        ...state.cartData,

        totalPrice: state.cartData.totalPrice + product.totalPrice,

      };

      // console.log(product)
      // console.log(product.quantity)
      // console.log(payload);
      // console.log(product.price); 
      // console.log( product.price *payload.qty)
      // console.log( product.price *product.quantity)
      // console.log(product.totalPrice)


      const index = state.cartData.products.findIndex(
        product => product.id === payload.id
      );
      console.log(index)
      state.cartData.products[index] = product;

      console.log(product)
    },

    deleteProduct: (state, id) => {
      state.cartData.products = state.cartData.products.filter(
        product => product.id !== id
      );
    },

    addSize(state,payload){
      console.log(payload.size)
      const product = state.cartData.products.find(product => product.id === payload.product.id);
      // product.size = payload.size
       
      

  }
  },

  actions: {
    addToCart: (obj, payload) => {
      obj.commit("addToCart", payload);
    },


    updateQuantity: (obj, payload) => {
      obj.commit("updateQuantity", payload);
    },
    deleteProduct: (obj, id) => {
      obj.commit("deleteProduct", id);
    },
    addSize({commit},payload){
      commit('addSize',payload)

  }

  }
};

export default cart;
