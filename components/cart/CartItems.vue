<template>
  <div>
    <v-row>
      <v-container class="d-flex">
        <v-col cols="9" class="no-gutters">
          <v-row>
            <div>
              <v-col cols="6">
                <p class="headline">My Shooping Bag {{ getQuantities }}items</p>
              </v-col>

              <v-col cols="6">
                <p class="headline">Total: {{ product.totalPrice }}</p>
              </v-col>
            </div>
          </v-row>
          <div v-for="(product, index) in getCart.products" :key="index">
            <v-card>
              <v-col cols="12" class="d-flex">
                <!-- //image -->
                <v-col cols="2">
                  <div>
                    <img :src="product.src" width="150px" alt="" />
                  </div>
                </v-col>

                <v-col cols="6">
                  <div class="mt-5">
                    <h4 class="mr-15">{{ product.title }}</h4>
                    <span class="mt-5">{{ product.subTitle }}</span>
                    <div>
                      <!-- <v-col cols=6>
                    <select
                      class="select"
                      v-model="product.quantity"
                      @change="updateQty($event, product.id)"
                    >                  
                    
                      </select>

                  </v-col> -->

                      <!-- //size side -->
                      <div class="d-flex">
                        <v-col sm="4">
                          <!-- <v-select
                      :items="items"
                      label="size :Pack"
                      class="font-weight-bold"
                    >
                    </v-select> -->
                        </v-col>

                        <!-- select for quantity -->

                        <v-col sm="4">
                          <v-select
                            :items="quantity"
                            label="Qty"
                            v-model="currentquantity"
                            @change="updateQty(currentquantity, product.id)"
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
            </v-card>
          </div>
        </v-col>
      </v-container>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>