 <template>
  <div class="cartContainer" v-if="getCart.products.length > 0">
    <v-row>
      <v-responsive
        class="guide teal darken-3 position-absolute text-center ma-0"
        id="responsive"
      >
        <span class="white--text">
          - As per guidelines, we are only delivering essentials in
          govt-specified pincodes -</span
        >
      </v-responsive>
      <v-container class="d-flex">
        <v-col cols="7" class="no-gutters">
          <!-- pincode -->
          <div class="test">
            <v-col cols="12">
              <v-card class="delivercard" outlined>
                <v-form class="form">
                  <span class="body-1 mt-3 ml-4"> deliver to: </span>
                  <input />
                  <v-btn class="address" outlined color="red">
                    change address
                  </v-btn>
                </v-form>
              </v-card>
            </v-col>

            <!-- offers -->

            <v-col cols="12">
              <v-card class="test rounded-0" flat>
                <div class="text-left ml-10 mt-5">
                  <!-- <v-expansion-panels> -->

                  <p class="mr-15">
                    <v-icon> mdi-sale</v-icon> <b>Available Offers </b>
                  </p>

                  <p class="mt-1 caption-12">
                    20% Cashback on slice card up to Rs 500 on a min spend of Rs
                    699. TCA
                  </p>

                  <v-btn
                    v-if="!show"
                    @click="show = true"
                    text
                    flat
                    class="red--text"
                  >
                    Show More<v-icon>mdi-chevron-down</v-icon>
                  </v-btn>

                  <div v-if="show">
                    <span>
                      20% Cashback on slice card up to Rs 500 on a min spend of
                      Rs 699. TCA
                    </span>
                    <span>
                      20% Cashback on slice card up to Rs 500 on a min spend of
                      Rs 699. TCA
                    </span>
                    <span>
                      20% Cashback on slice card up to Rs 500 on a min spend of
                      Rs 699. TCA
                    </span>
                    <span>
                      20% Cashback on slice card up to Rs 500 on a min spend of
                      Rs 699. TCA
                    </span>
                    <span>
                      20% Cashback on slice card up to Rs 500 on a min spend of
                      Rs 699. TCA
                    </span>

                    <v-btn @click="show = false" text flat class="red--text">
                      Show less<v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>

                  <!-- <v-expansion-panel>
              <v-expansion-panel-header class="red--text"  >
                          Search More
              </v-expansion-panel-header>
        <v-expansion-panel-content>
           <p> <v-icon> mdi-rhombus-medium </v-icon> 20% Cashback on slice card up to Rs 500 on a min spend of Rs
                  699. TCA  </p>
                   <p> <v-icon> mdi-rhombus-medium </v-icon> 20% Cashback on slice card up to Rs 500 on a min spend of Rs
                  699. TCA  </p>
                   <p> <v-icon> mdi-rhombus-medium </v-icon> 20% Cashback on slice card up to Rs 500 on a min spend of Rs
                  699. TCA  </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
                  -->
                </div>
              </v-card>
            </v-col>

            <!-- No convenience fee -->

            <v-col cols="12">
              <v-card class="test pa-3 d-flex" rounded-0 flat>
                <!-- <v-icon class="mr-5 ml-5"> mdi-truck</v-icon> -->
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
                  width="30px"
                />

                <h3 class="headline grey--text ml-5">
                  Yay! No convenience fee on this order.
                </h3>
              </v-card>
            </v-col>

            <!-- products  items and total amount-->

            <div class="d-flex">
              <!-- quantities -->
              <v-col cols="6">
                <h3 class="subline-1">
                  My Shooping Bag ({{ getQuantities }} items)
                </h3>
              </v-col>
              <!-- total price -->
              <v-col cols="6">
                <h3 class="subline-1">Total : ₹ {{ getPrice }}</h3>
                <!-- {{gettotal}} -->
              </v-col>
            </div>

            <!-- product card -->
            <v-col cols="12">
              <v-card color="#fff1ec" class="pa-3">
                <!-- add more product title  -->
                <v-row>
                  <v-col>
                    <p class="text-left"><strong>COMBO OFFER</strong></p>
                    <p class="caption text-left mt-0 d-flex">
                      Add 2 more to complete 'Buy 2 Get 1' combo
                    </p>
                  </v-col>

                  <v-col>
                    <v-btn class="producticon" flat outlined to="">
                      <v-icon> mdi-plus</v-icon>
                      ADD MORE
                    </v-btn>
                  </v-col>
                </v-row>

                <v-card max-height="" max-width="980px">
                  <div
                    v-for="(product, index) in getCart.products"
                    :key="index"
                  >
                    <v-col cols="12" class="d-flex">
                      <!-- image -->
                      <v-col cols="2">
                        <div class="">
                          <img :src="product.src" width="150px" alt="" />
                        </div>
                      </v-col>

                      <v-col cols="6">
                        <!-- title  and subtitle -->
                        <div class="text-left ml-15">
                          <h4 class="mr-15">{{ product.title }}</h4>
                          <p class="caption">{{ product.subTitle }}</p>
                          <p class="mr-5 sold caption grey--text">
                            sold by: Vision Star
                          </p>
                          <div>
                            <!-- //size side -->
                            <div class="d-flex">
                              <v-col sm="5" class="sold">
                                <v-select
                                  :items="items"
                                  v-model="currentitem"
                                  label="size :Pack"
                                  class="font-weight-bold"
                                >
                                </v-select>
                              </v-col>

                              <!-- select for quantity -->

                              {{ upquntiy(product) }}

                              <v-col sm="5" class="sold">
                                <v-select
                                  :items="quantity"
                                  label="Qty"
                                  :value="product.quantity"
                                  @change="updateQty($event, product.id)"
                                  class="font-weight-bold"
                                >
                                </v-select>
                              </v-col>
                            </div>
                            <p class="green--text body-1 sold">
                              Combo Discount: ₹ 1,000
                            </p>
                            <p class="caption delivery">
                              <v-icon color="green">mdi-check</v-icon> Delivery
                              by <strong> 27 Jun 2021</strong>
                            </p>
                          </div>
                        </div>
                      </v-col>

                      <!-- price related -->
                      <v-col cols="4">
                        <v-col>
                          <p class="black--text title my-1">
                            ₹ {{ product.price }}
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
                      <v-btn
                        class="remove ml-13 grey--text ma-2"
                        flat
                        text
                        @click="deleteProduct(product.id)"
                      >
                        REMOVE</v-btn
                      >
                      <v-spacer></v-spacer>

                      <v-divider vertical></v-divider>
                      <v-btn
                        class="movewish grey--text ma-2"
                        flat
                        text
                        @click="xyz(product)"
                      >
                        MOVE TO WISHLIST</v-btn
                      >
                    </div>

                    <v-divider> </v-divider>
                  </div>
                </v-card>
              </v-card>
            </v-col>
          </div>
        </v-col>

        <!-- prices boxes -->

        <!-- <v-col cols="5" class="no-gutters">
          <p class="body-2">COUPONS</p>
        </v-col> -->

        <v-col cols="5" class="no-gutters">
          <div class="test mr-15">
            <div class="ml-3 mt-5">
              <p class="body-2 text-left grey--text"><b>COUPONS</b></p>
              <p class="shareicon font-weight-bold text-left">
                <v-icon>mdi-share</v-icon> Apply Coupon

                <v-btn class="apply" outlined color="red"> APPLY </v-btn>
              </p>
            </div>

            <v-divider></v-divider>

            <!-- title  -->
            <h3 class="body-2 mt-5 text-left mb-3 ml-5">
              GIFTING & PERSONALISATION
            </h3>

            <!-- coupn card  -->
            <v-card
              class="ma-3 py-2"
              max-height="150px"
              color="orange lighten-5"
            >
              <v-card-text class="row">
                <v-col class="col-md-3">
                  <div class="text-right">
                    <v-img
                      src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
                      max-height="140px"
                      max-width="90px"
                      class="gift"
                    >
                    </v-img>
                  </div>
                </v-col>

                <v-col class="col-md-9 text-left caption">
                  <div class="">
                    <p class="text-left ma-1"><b>Buying for a loved one?</b></p>
                    <span class="ma-1"
                      >Gift Wrap and persionalised message on card ,</span
                    >
                    <p class="ma-1">Only for ₹25</p>

                    <!-- seller information  -->
                    <v-col class="seller">
                      <v-dialog
                        transition="dialog-top-transition"
                        max-width="600"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-card-title
                            outlined
                            remove-border
                            v-bind="attrs"
                            v-on="on"
                          >
                            <p class="caption red--text">ADD GIFT WRAP</p>
                          </v-card-title>
                        </template>
                        <template v-slot:default="dialog">
                          <v-card>
                            <v-row>
                              <v-col class="col-md-6">
                                <div class="text-left ml-10">
                                  <p class="body-1 grey--text mt-10">
                                    Gift Wrapiing
                                  </p>
                                  <p class="title">
                                    <strong>Make It Special</strong>
                                  </p>

                                  <!-- Recipient Name -->

                                  <v-text-field
                                    label="Recipient Name"
                                    placeholder="Recipient Name"
                                    color=" recipient grey"
                                    outlined
                                    dense
                                  ></v-text-field>
                                  <!-- Message  -->
                                  <v-text-field
                                    v-model="title"
                                    :rules="[counter]"
                                    label="Message"
                                    placeholder="message"
                                    color="grey"
                                    counter
                                    maxlength="200"
                                    class="message"
                                    height="90px"
                                    outlined
                                    dense
                                  >
                                  </v-text-field>

                                  <!-- Sender Name  -->
                                  <v-text-field
                                    label="Sender Name"
                                    placeholder="Sender Name"
                                    color=" grey"
                                    outlined
                                    dense
                                  ></v-text-field>

                                  <p>
                                    <b class="red--text body-2">Plese Note:</b>
                                    <span class="body-2"
                                      >Gift wrepping is not available for Pay on
                                      Delivery orders.</span
                                    >
                                  </p>

                                  <v-btn color="pink" width="250px" dark dense>
                                    APPLY GIFT WRAP</v-btn
                                  >
                                </div>
                              </v-col>

                              <v-col class="col-sm-6">
                                <div class="mt-10">
                                  <!-- image  -->

                                  <div class="giftimg d-flex">
                                    <img
                                      src="https://constant.myntassets.com/checkout/assets/img/giftwrap-1.webp"
                                      block
                                      height="auto"
                                      maxwidth="50%"
                                    />

                                    <img
                                      src="https://constant.myntassets.com/checkout/assets/img/giftwrap-2.webp"
                                      height="128px"
                                      width="90px"
                                    />
                                  </div>

                                  <h3>
                                    HOW DOES IT WORK? <v-divider></v-divider>
                                  </h3>

                                  <!-- WORKING  -->

                                  <div class="d-flex justify-space-between">
                                    <!-- <-------------------working 1 ----------------------------------------->
                                    <div>
                                      <v-img
                                        width="35"
                                        class="ma-0"
                                        src="https://constant.myntassets.com/checkout/assets/img/giftwrap-card.webp"
                                      >
                                      </v-img>
                                    </div>

                                    <div class="ma-2">
                                      <strong class="mr-15">
                                        persionalised card</strong
                                      >
                                      <p class="caption">
                                        Your message will be printed on a card
                                        placed inside the package
                                      </p>
                                    </div>
                                  </div>

                                  <!-- ------------------working 2----------------- -->

                                  <div class="d-flex justify-space-between">
                                    <div>
                                      <v-img
                                        width="35"
                                        class="ma-0"
                                        src="https://constant.myntassets.com/checkout/assets/img/giftwrap-invoice.webp"
                                      >
                                      </v-img>
                                    </div>

                                    <div class="ma-2">
                                      <strong class="mr-15">
                                        persionalised card</strong
                                      >
                                      <p class="caption">
                                        Your message will be printed on a card
                                        placed inside the package
                                      </p>
                                    </div>
                                  </div>

                                  <!-- --------------------working 3----------------------- -->

                                  <div class="d-flex justify-space-between">
                                    <div>
                                      <v-img
                                        width="35"
                                        class="ma-0"
                                        src="https://constant.myntassets.com/checkout/assets/img/giftwrap-tag.webp"
                                      >
                                      </v-img>
                                    </div>

                                    <div class="ma-2">
                                      <strong class="mr-15">
                                        persionalised card</strong
                                      >
                                      <p class="caption">
                                        Your message will be printed on a card
                                        placed inside the package
                                      </p>
                                    </div>
                                  </div>

                                  <!-- ------------------------------------------ -->
                                </div>
                              </v-col>
                            </v-row>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-col>
                    <p class="red--text pb-5">ADD GIFT WRAP</p>
                  </div>
                </v-col>
              </v-card-text>
            </v-card>

            <!-- price  -->

            <v-card class="ma-3">
              <v-card-title class="headline"
                >Price Details ( {{ getQuantities }} items )</v-card-title
              >
              <v-divider></v-divider>

              <!-- pricing -->
              <v-card-text class="row mx-auto">
                <div class="subtitle-1 text-left">
                  <p class="">Total MRP</p>
                  <p class="">Discount on MRP</p>
                  <p class="">Coupon Discount</p>
                  <p class="">
                    convenience Fee
                    <a href="" class="red--text"> <b>know More</b></a>
                  </p>
                </div>
                <div class="ml-auto">
                  <p class="subtitle-1">₹{{ getPrice }}</p>
                  <p class="subtitle-1" id="grn">
                    <span class="green--text"
                      >-₹ {{ Math.round((getPrice * 31) / 100) }}</span
                    >
                  </p>
                  <p class="subtitle-1">
                    <a href="" class="red--text">Apply Coupon</a>
                  </p>
                  <p class="subtitle-1 green--text">
                    <del class="black--text">99</del> FREE
                  </p>
                </div>
              </v-card-text>
              <v-divider></v-divider>

              <!-- total amount -->
              <v-card-title class="mx-auto">
                <span>Total Amount</span>
                <span class="ml-auto"
                  >&#x20B9;
                  {{ Math.round(getPrice - (getPrice * 31) / 100) }}</span
                >
              </v-card-title>
              <v-divider></v-divider>

              <!-- saved money -->
              <v-card-text>
                <span class="subtitle-1" id="grn"
                  >You will save &#x20B9;
                  {{ Math.round((getPrice * 31) / 100 + 99) }} on this order
                </span>
              </v-card-text>
              <v-btn color="pink" white--text block class="place" dark
                >PLACE HOLDER</v-btn
              >
            </v-card>
          </div>
        </v-col>
      </v-container>
    </v-row>
    <v-container>
      <v-divider></v-divider>

      <h3 class="text-left mt-5">You may Also like:</h3>
    </v-container>
  </div>

  <!-- else condition  -->
  <div v-else>
    <div class="text-center">
      <!-- image -->

      <v-img
        src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
        class="mx-auto mt-15"
        max-height="250"
        max-width="200"
      >
      </v-img>
      <br />

      <!-- title -->

      <h3 classs="headline">Hey, it feels so light !</h3>

      <p class="Body-1 mt-5">
        There is nothing in your bag . Let's add some items
      </p>

      <v-btn to="/" class="text-center" outlined color="red">
        ADD ITEM FROM WISHLIST
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'cart',
  data: () => ({
    title: '',
    show: false,
    productquantity: '1',
    currentitem: 'M',
    items: ['M', 'L', 'XL', 'XXl', '3XL'],
    quantity: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    counter: (value) => value.length <= 200 || 'Max 200 characters',
  }),

  methods: {
    xyz(product) {
      this.$store.dispatch('Cart/deleteProduct', product.id)
      this.$store.dispatch('Wishcart/wishToCart', product)
    },
    ...mapActions('Cart', ['updateQuantity', 'deleteProduct']),
    updateQty(e, id) {
      this.updateQuantity({ qty: e, id })
      console.log(this.productquantity)
      this.productquantity = e
      console.log(this.productquantity)
    },

    upquntiy(product) {
      this.productquantity = product.quantity
    },
  },
  computed: {
    ...mapGetters('Cart', ['getCart', 'getPrice', 'getQuantities']),
  },
}
</script>

<style scoped>
.apply {
  margin-left: 177px;
}
.address {
  margin-left: 170px;
  margin-top: 13px;
}
/* .form {
 border: 1px solid #eaeaec;
  padding: 2px;
  height: 75px;
} */
.input {
  flex-grow: 2;
  border: none;
}
input:focus {
  outline: none;
}
.test {
  border: 1px solid #eaeaec;
}
.delivercard {
  border: 1px solid #eaeaec;
}
.movewish {
  margin-left: 190px;
  font-size: 20px;
}
.remove {
  font-size: 20px;
}
.producticon {
  margin-left: 170px;
}
.sold {
  margin-top: -20px;
}
.delivery {
  margin-top: -9px;
}
.shareicon {
  font-size: 14px;
}
.gift {
  margin-top: -20px;
}
.title {
  font-size: 38px;
  margin-top: -20px;
}
.recipient {
  border: 1px solid #eaeaec;
}
.giftimg {
  height: 125px;
  margin-bottom: 24px;
  position: relative;
  background: none;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  right: 0;
  bottom: 0;
}
.guide {
  margin-top: -20px;
}
</style>
