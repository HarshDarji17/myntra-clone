<template>
  <div class="cartContainer" v-if="getCart.products.length > 0">
    <h3>Shopping Cart</h3>

    <v-row>
      <v-container class="d-flex">
        <v-col cols="9" class="no-gutters">
          <div class="d-flex">
            <!-- quantities -->
            <v-col cols="6">
              <p class="headline">
                My Shooping Bag ({{ getQuantities }} items)
              </p>
            </v-col>
            <!-- total price -->
            <v-col cols="6">
              <p class="headline">Total: {{ getPrice }}</p>
            </v-col>
          </div>

          <v-card>
            <div v-for="(product, index) in getCart.products" :key="index">
              <v-col cols="12" class="d-flex">
                <!-- image -->
                <v-col cols="2">
                  <div>
                    <img :src="product.src" width="150px" alt="" />
                  </div>
                </v-col>

                <v-col cols="6">
                  <!-- title  and subtitle -->
                  <div class="mt-5">
                    <h4 class="mr-15">{{ product.title }}</h4>
                    <span class="mt-5">{{ product.subTitle }}</span>
                    <div>
                      <!-- //size side -->
                      <div class="d-flex">
                        <v-col sm="4">
                          <v-select
                            :items="items"
                            v-model="currentitem"
                            label="size :Pack"
                            class="font-weight-bold"
                          >
                          </v-select>
                        </v-col>

                        <!-- select for quantity -->

                        <v-col sm="4">
                          <v-select
                            :items="quantity"
                            label="Qty"
                            v-model="productquantity"
                            @change="updateQty(productquantity, product.id)"
                            class="font-weight-bold"
                          >
                          </v-select>
                        </v-col>
                      </div>

                      <!-- <v-col cols=6>
                    <v-btn
                      class="cartButton"
                      @click="deleteProduct(product.id)"
                    >
                      Delete
                    </v-btn>
               </v-col> -->
                    </div>
                  </div>
                </v-col>

                <!-- price related -->
                <v-col cols="4">
                  <v-col>
                    <p class="black--text title my-1">
                      {{ product.price }}
                      <br />
                      <span
                        class="
                          grey--text
                          subtitle-2
                          pl-2
                          text-decoration-line-through
                          font-weight-light
                        "
                      >
                        <!-- main price -->

                        {{ product.originalPrice }}
                      </span>
                      <span
                        class="
                          red--text
                          px-2
                          subtitle-2
                          font-weight-medium
                          mb-1
                        "
                      >
                        {{ product.offer }}
                      </span>
                    </p>
                  </v-col>
                </v-col>
              </v-col>
              <v-divider> </v-divider>

              <div class="d-flex">
                <v-btn class="ml-13">REMOVE</v-btn>
                <v-spacer></v-spacer>

                <v-divider vertical></v-divider>
                <v-btn class="mr-13"> ADD TO WISHLIST</v-btn>
              </div>
              <v-divider> </v-divider>
            </div>
          </v-card>
        </v-col>

        <v-col cols="3">
          <h4>({{ getQuantities }} Items )</h4>
          <h3>{{ getPrice }}</h3>
          <br /><br />
          <button>Procced to checkout</button>
        </v-col>
      </v-container>
    </v-row>
  </div>
  <div v-else>
    <div>
      <h3 class="text-center mt-5">Your Cart is empty!!!!!!!</h3>
      <br />
      <v-btn to="/" block class="mt-5">
        ADD PRODUCT IN CART
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    productquantity: 1,
    currentitem: 'M',
    items: ['M', 'L', 'XL', 'XXl', '3XL'],
    quantity: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  }),

  methods: {
    ...mapActions('Cart', ['deleteProduct', 'updateQuantity']),
    updateQty(e, id) {
      this.updateQuantity({ qty: e, id })
      // console.log(e)
    },
  },
  computed: {
    ...mapGetters('Cart', ['getCart', 'getPrice', 'getQuantities']),
  },
}
</script>

<style scoped>
</style>
