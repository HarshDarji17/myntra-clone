<template>
  
    
    <div class="wish" v-if="getCart.products.length > 0">
      <span class="index-heading py-10 pl-10">My Wishlist</span>
      <span>{{ getCart.products.length }} &nbsp;item</span>
      <v-row class="pa-10">
        <v-col v-for="(product, index) in getCart.products" :key="index" lg="3">
          <div class="item_col">
            <div class="d-flex">
              <v-img :src="product.src" max-width="210"></v-img>
              <v-avatar
                color="grey lighten-5"
                size="20"
                class="pa-2 ml-n8 my-3"
              >
                <v-icon small @click="deleteProduct(product.id)"
                  >mdi-close</v-icon
                ></v-avatar
              >
            </div>
            <div class="itemdetails-itemDetails">
              <p class="itemdetails-itemDetailsLabel">
                {{ product.subTitle.slice(0, 30) }}...
              </p>
              <div class="itemdetails-itemPricing">
                <span class="itemdetails-boldFont"
                  >Rs.{{ product.originalPrice }}</span
                >
                <span class="itemdetails-strike">{{ product.price }}</span>
                <span class="itemdetails-discountPercent"
                  >{{ product.offer}}</span
                >
              </div>
            </div>
            <div class="itemcard-actionDiv">
              <span class="itemcard-flex">
                <v-dialog v-model="dialog" width="420" light>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="itemcard-moveToBag"
                      color="#FFFFFF"
                      depressed
                      v-bind="attrs"
                      v-on="on"
                      @change="abc(product)"
                      >MOVE TO BAG</v-btn
                    >
                  </template>
                  <div class="pa-5 white">
                    <div class="d-flex">
                      <div class="pa-2">
                        <v-img :src="product.src" max-width="60"></v-img>
                      </div>
                      <div class="pa-2 flex-column sizeselect-name">
                        {{ product.subTitle}}
                        <div>
                          <div style="font-size: 16px">
                            <span class="PriceInfo-price" tabindex="0"
                              ><strong>₹{{ product.originalPrice  }}</strong></span
                            ><!-- react-empty: 92 --><span class="PriceInfo-mrp"
                              ><s>₹{{ product.price  }} </s></span
                            ><span class="PriceInfo-discount"
                              >{{product.offer}}</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="pa-2">
                        <v-icon @change="dialog = false">mdi-close</v-icon>
                      </div>
                    </div>
                    <v-divider class="my-3"></v-divider>
                    <div class="sizeselect-sizeDisplayHeader">
                      <span class="sizeselect-sizeSelectLabel"
                        >Select Size</span
                      >
                    </div>
                    <div class="sizeselect-sizeButtonsContaier">
                      <button
                        class="sizeselect-sizeButton"
                        value="S"
                        @click="addSize({ size: 'S', product })"
                      >
                        <b>S</b></button
                      ><button
                        class="sizeselect-sizeButton"
                        value="M"
                        @click="addSize({ size: 'M', product })"
                      >
                        <b>M</b></button
                      ><button
                        class="sizeselect-sizeButton"
                        value="L"
                        @click="addSize({ size: 'L', product })"
                      >
                        <b>L</b></button
                      ><button
                        class="sizeselect-sizeButton"
                        value="XL"
                        @click="addSize({ size: 'XL', product })"
                      >
                        <b>XL</b></button
                      ><button
                        class="sizeselect-sizeButton"
                        value="XXL"
                        @click="addSize({ size: 'XLL', product })"
                      >
                        <b>XXL</b>
                      </button>
                    </div>
                    <div class="sizeselect-done"  @click="abc(product)">
                      Done
                    </div>
                  </div>
                </v-dialog>
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-else  class="empty-container">
      <div class="text-center py-5 emp_txt">YOUR WISHLIST IS EMPTY</div>
      <div class="empty-info">
        Add items that you like to your wishlist. Review them anytime and easily
        move them to the bag
      </div>
      <div class="icon"></div>
      <div>
        <nuxt-link to="/" class="link">CONTINUE SHOPPING</nuxt-link>
      </div>
    </div>

</template>
<script>
import { mapState, mapActions , mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('Wishcart', ['getCart']),
    ...mapGetters('Wishcart', ['getCart', 'wishgetQuantities']),
  },
  methods: {
    abc(product) {
      this.$store.dispatch('Wishcart/deleteProduct', product.id)
      this.$store.dispatch('Cart/addToCart', product)
    },
    ...mapActions('Wishcart', ['deleteProduct']),

    
    addSize(product) {
      this.$store.dispatch('Cart/addSize', product)
      this.$store.dispatch('Wishcart/move', product)
      this.$nuxt.refresh()
    },
  },
  data() {
    return {
      dialog:false,
    }
  },
}
</script>
<style scoped>
.empty-container {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  box-sizing: inherit;
  max-width: 980px;
  margin: 130px auto 180px;
  text-align: center;
}
.emp_txt {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  box-sizing: inherit;
  font-size: 20px;
  font-weight: 600;
  color: #282c3f;
}
.empty-info {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  box-sizing: inherit;
  font-size: 18px;
  color: #94989f;
  max-width: 380px;
  margin: 20px auto 0;
}
.link {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  box-sizing: inherit;
  background-color: transparent;
  text-decoration: none;
  border: 1px solid #3466e8;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  padding: 14.5px 51px;
  color: #3466e8;
  cursor: pointer;
  display: inline-block;
}
.icon {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  text-align: center;
  box-sizing: inherit;
  background: url(https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png);
  background-size: 1404px 105px;
  width: 96px;
  height: 105px;
  background-position: -1163px 0;
  margin: 43px 0 50px;
  display: inline-block;
}
.wish {
  margin-top: 50px;
}
.index-heading {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  width: 162px;
  height: 21px;
  font-size: 18px;
  font-weight: 500;
  color: #282c3f;
}
.item_col {
  width: 212px;
  border: 1px solid #e0e0e0;
}
.itemdetails-itemDetails {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  box-sizing: inherit;
  height: 94px;
  font-size: 14px;
  text-align: left;
  color: #696b79;
  padding: 10px 10px 0;
  border: none !important;
  border-bottom: 1px solid #e0e0e0 !important;
}
.itemdetails-itemDetailsLabel {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  box-sizing: inherit;
  font-size: 16px;
  color: #282c3f;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
}
.itemdetails-itemPricing {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  color: #696b79;
  box-sizing: inherit;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  text-align: center;
}
.itemdetails-boldFont {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  white-space: nowrap;
  text-align: center;
  box-sizing: inherit;
  font-weight: 500;
  padding: 0 3px 0 0;
  font-size: 16px;
  color: #282c3f;
}
.itemdetails-strike {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  white-space: nowrap;
  text-align: center;
  box-sizing: inherit;
  text-decoration: line-through;
  opacity: 0.7;
  font-size: 12px;
  padding: 0 3px;
  color: #282c3f;
}
.itemdetails-discountPercent {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  white-space: nowrap;
  text-align: center;
  box-sizing: inherit;
  color: #ff905a;
  padding: 0 3px;
  font-size: 12px;
  font-weight: 500;
}
.itemcard-actionDiv {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  list-style: none;
  box-sizing: inherit;
  text-align: center;
  font-size: 14px;
  padding: 14px;
}
.itemcard-flex {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  list-style: none;
  text-align: center;
  font-size: 14px;
  box-sizing: inherit;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.itemcard-moveToBag {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  text-align: center;
  font-size: 14px;
  -webkit-box-direction: normal;
  box-sizing: inherit;
  text-decoration: none;
  color: #ff3e6c;
  font-weight: 500;
}
.PriceInfo-price {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  text-align: left;
  font-size: 16px;
  box-sizing: inherit;
  font-weight: 500;
  line-height: 1;
  color: #282c3f;
  margin-right: 5px;
  cursor: pointer;
}
.PriceInfo-mrp {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  cursor: default;
  text-align: left;
  font-size: 16px;
  box-sizing: inherit;
  height: 22px;
  opacity: 0.8;
  line-height: 1.2;
  color: #94969f;
  margin-right: 5px;
}
.PriceInfo-discount {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  cursor: default;
  text-align: left;
  font-size: 16px;
  box-sizing: inherit;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #ff905a;
  display: inline-block;
}
.sizeselect-name {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  cursor: default;
  text-align: left;
  color: #3e4152;
  box-sizing: inherit;
  margin-bottom: 8px;
}
.sizeselect-sizeDisplayHeader {
  color: #282c3f;
  font-weight: bold;
  text-align: left;
}
.sizeselect-sizeSelectLabel {
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}
.sizeselect-sizeButtonsContaier {
  width: 100%;
  text-align: left;
  height: auto;
}
.sizeselect-sizeButton {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  font: inherit;
  overflow: visible;
  text-transform: none;
  cursor: pointer;
  -webkit-appearance: button;
  border-radius: 22px;
  min-width: 44px;
  height: 44px;
  text-align: center;
  margin: 5px;
  outline: none;
  font-size: 16px;
  color: #696e79;
  box-sizing: border-box;
  padding: 5px;
  font-weight: 400;
  border: 1px solid #d4d5d9;
  background-color: #fff;
}
.sizeselect-sizeButton:hover {
  color: #ff3e6c;
  font-weight: 500;
  border: 1px solid #ff3e6c;
}
.sizeselect-done {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  box-sizing: inherit;
  border-radius: 4px;
  background-color: #ff3f6c;
  padding: 12px 0;
  color: #fff;
  margin: 20px 0 0;
  cursor: pointer;
  text-align: center;
}
</style>
