<template>
  <v-app>
    <div class="ml-5">
      <div class="breadcrumbs-container">
     <nuxt-link to="/" class="text-decoration-none grey--text breadcrumbs-link">Home</nuxt-link>
       <span class="breadcrumbs-separator">/</span>
      <nuxt-link
        class="text-decoration-none text-capitalize grey--text breadcrumbs-link"
        to="getProduct.category"
        >{{  getProduct.category }}</nuxt-link
      >
      <span class="breadcrumbs-separator">/</span>
      <nuxt-link
        class="text-decoration-none text-capitalize black--text breadcrumbs-link"
        to="getProduct.subCategory"
        >{{ getProduct.subCategory }}</nuxt-link> 
        <span class="breadcrumbs-separator">/</span>
        <nuxt-link to="/getProduct.id"> {{getProduct.id}} </nuxt-link>
      </div>



      <div class="test">
        <v-row no-gutters>
          <!-- images -->
        
            
              <v-col cols="7">
                <div class="">
          <v-row no-gutters>
            <v-col cols="6"
              v-for="(img, index) in getProduct.images"
              :key="index"
              class="pl-1"
            >
              <div class="frame">
                <img class="image-grid-image" :src="img" alt="" />
              </div>
            </v-col>
           
          </v-row>
           </div>
        </v-col>

          <!-- information -->
          <v-col cols="5">
          <div class="test mr-15">
            <v-col>
              <!-- product title -->

              <h1>{{ getProduct.title }}</h1>

              <!-- product subtitle  -->
              <span class="body-2-32 grey--text">{{
                getProduct.subTitle
              }}</span>
              <br />
              <br />
              <!-- rating and num. of rating  -->

              <!-- <v-hover v-slot="{ hover }"> -->
              <v-btn class="rating mb-5" outlined color="grey">
                {{ getProduct.rating }}
                <v-icon small color="#03a685" class="mb-1 pl-1"> mdi-star</v-icon> |
                <p class="mt-5 caption-22">
                  {{ getProduct.numberOfRating }} Ratings
                </p>
              </v-btn>
              <!-- </v-hover> -->

              <v-divider></v-divider>

              <!-- price  -->
              <div>
                <p class="black--text mx-2 title my-1" size="16rem">
                  {{ getProduct.price }}
                  <span
                    class="
                      grey--text
                      subtitle-3
                      pl-2
                      text-decoration-line-through
                      font-weight-light
                    "
                  >
                    <!-- main price -->
                    {{ getProduct.originalPrice }}
                  </span>

                  <span
                    class="orange--text px-2 subtitle-2 font-weight-medium mb-1"
                  >
                    {{ getProduct.offer }}
                  </span>
                </p>
              </div>


               <p class="pdp-selling-price">
            <span class="pdp-vatInfo">inclusive of all taxes</span>
          </p>
          <div class="size-buttons-size-header">
            <h4 class="size-buttons-select-size">
              <!-- react-text: 85 -->SELECT SIZE
              <!-- /react-text -->
            </h4>
            <span class="size-buttons-size-chart"
              ><button class="size-buttons-show-size-chart">Size Chart</button
              ><span class="size-buttons-arrow"></span
            ></span>
          </div>
          <div class="sizeselect-sizeButtonsContaier">
            <button class="sizeselect-sizeButton" value="S">
              <b>S</b></button
            ><button class="sizeselect-sizeButton" value="M">
              <b>M</b></button
            ><button class="sizeselect-sizeButton" value="L">
              <b>L</b></button
            ><button class="sizeselect-sizeButton" value="XL">
              <b>XL</b>
            </button>
          </div>
              <!-- bag button -->

              <v-btn
                v-if="!getProduct.baglist"
                color="pink"
                class="headline ml-1 white--text"
                width="200px"
                height="70px"
                @click="addToCart(getProduct)"
              >
                <v-icon size="32px"> mdi-purse </v-icon>
                &nbsp; ADD TO BAG
              </v-btn>

              <!-- else condition  -->

              <v-btn
                v-else
                color="pink"
                class="headline ml-1 white--text"
                width="200px"
                height="70px"
                to="/cart"
                @click="addToCart(getProduct)"
              >
                GO TO BAG &nbsp; &nbsp;
                <v-icon size="32px" dark> mdi-arrow-right </v-icon>
              </v-btn>

              <!-- btn for wishlist -->
              <v-btn
                v-if="!getProduct.wishlist"
                class="headline elevation=2 ma-3"
                width="190px"
                height="70px"
                size="44px"
                @click="wishToCart(getProduct)"
              >
                <v-icon size="32px" id="colorchange">mdi-heart-outline</v-icon>
                <strong class="button">WISHLIST</strong>
              </v-btn>

              <!-- else condition  -->
              <v-btn
                v-else
                dark
                tile
                text
                width="190px"
                height="70px"
                class="headline elevation=2 ma-3 grey darken-3"
              >
                <v-icon color="pink" size="32px" id="colorchange"
                  >mdi-heart</v-icon
                >

                &nbsp;WISHLIST
              </v-btn>

              <br /><br />

              <span class="mb-3">This item cannot be returned.</span>
              <br /><br />

              <v-divider></v-divider>

              <!-- price  -->
              <div>
                <h3 class="mt-5 ml-7">{{ getProduct.originalPrice }}</h3>
              </div>

              <!-- seller information  -->
              <v-col class="seller">
                <v-dialog transition="dialog-top-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-card-title
                      outlined
                      remove-border
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span>
                        Seller : <span class="pink--text">RetailNet</span></span
                      ></v-card-title
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <h2 class="ml-5 mt-5">Seller Information</h2>

                      <h3 class="ml-5 mt-7">Tech Connect Retail Pvt Ltd</h3>
                      <p class="ml-5 mt-5">
                        703-704, 7th Floor, Magnum Tower 1Archview Drive
                        Sector-58, Golf Course &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;Extension Road,Gurugram , Haryana - 122011
                      </p>

                      <h3 class="ml-5 mt-5">Grievance Redressal</h3>

                      <h5 class="ml-5 mt-5">
                        Subject:
                        <span
                          >Contact Seller - Tech Connect Retail Pvt Ltd</span
                        >
                      </h5>

                      <h5 class="ml-5 mt-5">
                        Write To:
                        <span
                          >Myntra Designs Private Limited; Embassy Tech Village,
                          Outer Ring Road, Devarabeesanahalli Village, Bengaluru
                          – 560103</span
                        >
                      </h5>

                      <h5 class="ml-5 mt-5 pink--text">
                        support@myntra.com | 080 6156 1999
                      </h5>

                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>

              <v-divider></v-divider>

              <!-- delivary option  -->
              <h3 class="mb-7 mt-7">
                DELIVERY OPTIONS
                <v-icon class="ml-5" large>mdi-truck-delivery</v-icon>
              </h3>

              <!-- pincode -->

              <div class="Address-switcher-container">
                <div
                  class="
                    Address-address-box Address-pincode-input Address-pdp-box
                  "
                >
                  <input
                    type="tel"
                    placeholder="Enter a PIN code"
                    value=""
                  /><button
                    type="submit"
                    class="Address-address-button"
                    style="color: rgb(191, 192, 198)"
                  >
                    CHECK
                  </button>
                </div>
              </div>

              <p class="mt-2 caption">
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>

              <p class="mt-3 body-2">100% Original Products</p>

              <p class="mt-2 body-2">Free Delivery on order above Rs. 799</p>

              <v-divider></v-divider>

              <h3 class="mt-5 mb-5">Product Details</h3>
              <span heading title>Colossal Bold Liner </span> <br />
              <span>Shade Name: Black</span>

              <h5 class="mt-10 mb-7">Specifications</h5>

              <div>
                <v-text-field
                  class="mb-7"
                  dense
                  label="Colour Shade Name"
                  value="Black"
                  disabled
                ></v-text-field>

                <v-text-field
                  class="mb-7"
                  dense
                  label="Features"
                  value="Smudge Proof"
                  disabled
                ></v-text-field>

                <v-text-field
                  class="mb-7"
                  dense
                  label="Finish"
                  value="Matte"
                  disabled
                ></v-text-field>

                <v-text-field
                  class="mb-7"
                  dense
                  label="Ingredients Preference"
                  value="Ophthalmologically Tested"
                  disabled
                ></v-text-field>

                <v-text-field
                  class="mb-7"
                  dense
                  label="Preference"
                  value="Ophthalmologically Tested"
                  disabled
                ></v-text-field>

                <v-text-field
                  class="mb-7"
                  dense
                  label="Type"
                  value="Liquid"
                  disabled
                ></v-text-field>

                <v-text-field
                  class="mb-7"
                  dense
                  label="Sustainable"
                  value="Regular"
                  disabled
                ></v-text-field>
              </div>

              <v-divider></v-divider>
              <!-- ratings -->
              <div class="mb-5">
                <h5 class="mb-5">RATINGS</h5>
                <v-row>
                  <v-col cols="12" sm="6">
                    <h1>4.5 <v-icon>mdi-star</v-icon></h1>
                    <span>6.5k Verified Buyers</span>
                  </v-col>

                  <v-divider vertical></v-divider>

                  <!-- reting -->
                  <v-col cols="12" sm="6">
                    <template>
                      <span> 5<v-icon small>mdi-star</v-icon></span>
                      <v-progress-linear
                        value="35"
                        color="success"
                      ></v-progress-linear>
                    </template>

                    <template>
                      <span> 4<v-icon small>mdi-star</v-icon></span>
                      <v-progress-linear
                        value="30"
                        color="success"
                      ></v-progress-linear>
                    </template>

                    <template>
                      <span> 3<v-icon small>mdi-star</v-icon></span>
                      <v-progress-linear
                        value="20"
                        color="success"
                      ></v-progress-linear>
                    </template>

                    <template>
                      <span> 2<v-icon small>mdi-star</v-icon></span>
                      <v-progress-linear
                        value="15"
                        color="yellow darken-2"
                      ></v-progress-linear>
                    </template>

                    <template>
                      <span> 5<v-icon small>mdi-star</v-icon></span>
                      <v-progress-linear
                        value="10"
                        color="red darken-2"
                      ></v-progress-linear>
                    </template>
                  </v-col>
                </v-row>
              </div>

              <v-divider></v-divider>

              <h1>Customer Photos (193)</h1>

              <p>imagessssss</p>

              <h3>Customer Reviews (588)</h3>

              <v-btn small class="mt-3 white--text mb-5" color="green"
                >5
                <v-icon small color="white">mdi-star</v-icon>
              </v-btn>

              <v-textarea
                outlined
                name="input-7-4"
                label="review"
                value="Transfers a lil when wet for 10 secs after applying, not too much waterproof, can go for it though!."
              ></v-textarea>

              <v-avatar color="primary" size="56"></v-avatar> <br /><br />

              <v-row>
                <v-col cols="12" sm="6">
                  <span>Nishtha Sagar | 21 Sept 2020 </span>
                </v-col>

                <v-col cols="12" sm="6">
                  <span><v-icon>mdi-thumb-up</v-icon> &nbsp; 173 </span> &nbsp;
                  &nbsp; &nbsp;
                  <span><v-icon>mdi-thumb-down</v-icon> &nbsp; 62</span>
                </v-col>
              </v-row>

              <v-divider class="mt-5"></v-divider>

              <p class="red--text mt-3">View all 588 reviews</p>

              <p>Product Code: <b>9747207</b></p>

              <!-- seller  retainet -->

              <v-col class="seller" cols="auto">
                <v-dialog max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-card-title
                      color="warning"
                      outlined
                      remove-border
                      v-bind="attrs"
                      v-on="on"
                    >
                      <p class="mr-5">
                        Seller : <span class="pink--text mr-5">RetailNet</span>
                      </p></v-card-title
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <h2 class="ml-5 mt-5">Seller Information</h2>

                      <h3 class="ml-5 mt-7">Tech Connect Retail Pvt Ltd</h3>
                      <p class="ml-5 mt-5">
                        703-704, 7th Floor, Magnum Tower 1Archview Drive
                        Sector-58, Golf Course &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;Extension Road,Gurugram , Haryana - 122011
                      </p>

                      <h3 class="ml-5 mt-5">Grievance Redressal</h3>

                      <h5 class="ml-5 mt-5">
                        Subject:
                        <span
                          >Contact Seller - Tech Connect Retail Pvt Ltd</span
                        >
                      </h5>

                      <h5 class="ml-5 mt-5">
                        Write To:
                        <span
                          >Myntra Designs Private Limited; Embassy Tech Village,
                          Outer Ring Road, Devarabeesanahalli Village, Bengaluru
                          – 560103</span
                        >
                      </h5>

                      <h5 class="ml-5 mt-5 pink--text">
                        support@myntra.com | 080 6156 1999
                      </h5>

                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>

              <!-- view suppiler info -->

              <v-col cols="auto">
                <v-dialog max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-card-title v-bind="attrs" v-on="on">
                      <p class="infor">
                        View Supplier Information
                      </p></v-card-title
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-card-title>
                        <h3 class="ml-5 mt-3">More Information</h3>
                        <br />
                      </v-card-title>
                      <span class="ml-11">Product Code : 9747207</span>

                      <v-card-title>
                        <h3 class="ml-5 mt-3">Manufacturer Details</h3>
                        <br />
                      </v-card-title>
                      <span class="ml-11"
                        >L'Oreal India Pvt Ltd., Chakan, Pune - 410501</span
                      >

                      <v-card-title>
                        <h3 class="ml-5 mt-3">Country of Origin</h3>
                        <br />
                      </v-card-title>
                      <span class="ml-11">India</span>

                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-col>
          </div>

          </v-col>
         </v-row>

        <!-- <div>
    <h1 class="ml-10">SIMILAR PRODUCTS</h1>  

      <Similarproducts />
    </div> -->

        <!-- btn class -->

        <div>
          <v-btn rounded height="55px" class="ml-15 pink--text">
            MORE KAJAL AND EYELINER BY MAYBELLINE &nbsp; >
          </v-btn>

          <v-btn rounded height="55px" class="ml-15 pink--text">
            MORE BLACK KAJAL AND EYELINER BY &nbsp; >
          </v-btn>

          <v-btn rounded height="55px" class="ml-15 pink--text">
            MORE KAJAL AND EYELINER &nbsp; >
          </v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
// import Similarproducts from '../../../../../../components/subcategory/similarproducts';
import { mapGetters, mapActions } from 'vuex'
export default {
  head() {
    return {
      title: ' product display',
    }
  },

  // components:{Similarproducts},

  mounted() {
    console.log(this.$store.state.products)
    this.productDetail(this.$route.params.id)
  },

  computed: {
    ...mapGetters('products', ['getProducts', 'getProduct']),
  },
  data() {
    return {
      zoomed: false,
      zip: '',
      check: '',
      array: ['123456', '123476'],
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Personal Care',
          disabled: false,
          href: '/Personal Care',
        },
      ],
    }
  },
  methods: {
    ...mapActions('Cart', ['addToCart']),
    ...mapActions('Wishcart', ['wishToCart']),
    ...mapActions('products', ['productDetail']),

    xyz(id) {
      this.$store.dispatch('products/productDetail', id)
    },
  },
}
</script>

<style>
.frame {
  width: 360px;
  overflow: hidden;
}
.frame img {
  width: 400px;
  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -ms-transition: all 2s ease;
  transition: all 1s ease;
}
.breadcrumbs-separator {
    color: #282c3f;
    margin: 0 5px;
    padding-top: 5px;
}

.frame img:hover {
  width: 410px;
  cursor: zoom-in;
}
.seller {
  margin-top: -25px;
  margin-bottom: -11px;
}
button {
  /* Just a little styling to make it pretty */

  color: white;
}
.infor {
  margin-top: -49px;
  margin-left: -30px;
  color: rgb(235, 64, 92);
}
.rating:hover {
  border: 2px solid black;
}
.pincode {
  margin-left: 300px;
  margin-top: 10px;
}
.test {
  border-top: 1px solid #eaeaec;
}
.cartbag {
  font-size: 44px;
}
.wishbag {
  font-size: 46px;
}
.breadcrumbs-container{
  display: block;
  padding: 29px 0 22px;
  font-size: 14px;
}
.pdp-selling-price {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  box-sizing: inherit;
  position: relative;
  font-size: 16px;
  margin: 0 0 10px;
}
.pdp-vatInfo {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  color: #03a685;
  font-weight: 500;
  font-size: 14px;
  display: block;
  margin: 5px 10px 0 0;
}
.size-buttons-size-header {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  box-sizing: inherit;
  margin: 0 0 10px;
  position: relative;
  line-height: 1;
}
.size-buttons-select-size {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  line-height: 1;
  box-sizing: inherit;
  display: inline-block;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
}
.size-buttons-size-chart {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  line-height: 1;
  box-sizing: inherit;
  margin-left: 30px;
}
.size-buttons-show-size-chart {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  font: inherit;
  overflow: visible;
  margin: 0;
  cursor: pointer;
  -webkit-appearance: button;
  outline: 0;
  background-color: transparent;
  border: 0;
  letter-spacing: 0.5px;
  text-align: right;
  padding: 0 0 5px;
  color: #ff3e6c;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 0;
}
.size-buttons-arrow {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  line-height: 1;
  box-sizing: inherit;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-left: 4px;
  border: solid #ff3e6c;
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
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
  font-size: 15px;
  color: black;
  box-sizing: border-box;
  padding: 5px;
  font-weight: 400;
  border: 1px solid #d4d5d9;
  background-color: #fff;
}
.sizeselect-sizeButton:hover {
  border: 1px solid #ff3e6c;
}
.pincode-deliveryContainer {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  box-sizing: inherit;
  margin-top: 30px;
}
.Address-switcher-container {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: inherit;
  box-sizing: inherit;
  margin-top: 20px;
}
.Address-pdp-box {
  width: 300px;
  border-radius: 5px;
}
.Address-address-box {
  font-family: inherit;
  position: relative;
  padding: 10px;
  height: 44px;
  font-size: 15px;
  border: 1px solid #bfc0c6;
}
.Address-pincode-input {
  margin: 12px 0;
}
.Address-address-button {
  background-color: #fff;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 13px;
  font-weight: 500;
}
.pincode-enterPincode {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  font-size: 13px;
  color: #282c3f;
  margin: 8px 0 0;
}
.breadcrumbs-link {
    color: #282c3f;
    text-transform: capitalize;
    display: inline-block;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 1px solid transparent;
}
</style>