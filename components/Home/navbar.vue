<template>
  <v-toolbar height="95">
    <!-- logo -->
    <nuxt-link to="/">
      <v-img
        class="logo"
        width="100"
        src="https://images.indianexpress.com/2021/01/myntra.png"
      ></v-img>
    </nuxt-link>

    <div v-for="(l1, index) in footlinks.links" :key="index">
      <div>
        <v-menu open-on-hover offset-y>
          <template #activator="{ on, attrs }">
            <div
              text
              v-bind="attrs"
              tile
              class="ma-4 font-bold onHoverBtn"
              v-on="on"
            >
              <nuxt-link
                class="linktext1"
                :style="{ 'border-bottom-color': l1.color }"
                :to="'/' + l1.link1"
                >{{ l1.linkTitle }}</nuxt-link
              >
            </div>
          </template>
          <v-card max-width="900" flat tile>
            <v-row no-gutters class="pl-3 pr-3">
              <v-col
                v-for="(l2, i) in footlinks.subCategoryLinks[l1.link1]"
                :key="i"
                cols="3"
              >
                <!-- btn 1 -->
                <div class="d-flex">
                  <nuxt-link text :to="l2.path">
                    <strong
                      class="linktext2 mt-2"
                      :style="{ color: l2.color }"
                      >{{ l2.linkTitle }}</strong
                    >
                  </nuxt-link>
                </div>

                <div
                  v-for="(l3, i) in footlinks.subCategoryLinks
                    .thirdCategoryLinks[l2.link2]"
                  :key="i"
                  cols="3"
                >
                  <!-- btn 2 -->
                  <div text tile class="text-left">
                    <nuxt-link :to="l3.path" class="linktext body-2">
                      {{ l3.linkTitle }}
                    </nuxt-link>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-menu>
      </div>
    </div>

    <v-spacer></v-spacer>

    <!-- searching   -->

    <v-text-field
      label="search for products,brands & more"
      v-model="model"
      solo
      class="search black--text pt-7"
      flat
      prepend-inner-icon="mdi-magnify"
      background-color="grey lighten-3"
      dense
      @input="productsearch()"
      @keyup.esc="searchResultsVisible = false"
      @keydown.up.prevent="highlightPrev"
      @keydown.down.prevent="highlightNext"
      @keyup.enter="gotoLink"
      @blur="searchResultsVisible = false"
      @focus="searchResultsVisible = true"
    >
    </v-text-field>

    <v-list
      class="desktop-autoSuggest desktop-showContent"
      v-if="model.length != 0"
    >
      <div>
        <div class="desktop-suggestion">
          <v-list-item
            class="desktop-title"
            v-for="(item, index) in searchedProducts"
            :key="index"
          >
            <n-link
              :to="{
                path: '/subcategory/ProductCards' + '?',
                query: { title: item },
              }"
            >
              <h6 class="desktop-titletext" align="">{{ item }}</h6>
            </n-link>
          </v-list-item>
        </div>
      </div>

      <v-divider></v-divider>

      <div
        v-if="searchedProducts.length === 0"
        class="font-normal w-full border-b cursor-pointer p-4 text-center"
      >
        <p class="my-0 modelserch">
          No results for '<strong>{{ model }}</strong
          >'
        </p>
      </div>
    </v-list>

    <!-- profile -->

    <v-menu rounded="0" open-on-hover offset-y>
      <!-- icon  -->

      <template #activator="{ on, attrs }">
        <v-btn to="" text class="ma-3 onHoverBtn" v-on="on" v-bind="attrs">
          <div class="onpro">
            <n-link to="/login" class="onBtn">
              <v-icon large>mdi-account-outline</v-icon>

              <strong class="usertitle">profile</strong>
            </n-link>
          </div>
        </v-btn>
      </template>

      <v-card
        max-width="250"
        flat
        tile
        class="grey lighten-5 desktop-userActions"
      >
        <v-row no-gutters class="pr-3">
          <div class="ml-5">
            <p class="infotitle">Welcome</p>
            <span class="body-2">To access account and manage orders</span>
            <hr />
          </div>
          <div>
            <v-btn class="mt-3 ml-2 ml-5">
              <nuxt-link to="/login">LOGIN/SIGNUP</nuxt-link>
            </v-btn>
          </div>

          <v-divided></v-divided>

          <v-col>
            <div
              v-for="(item, i) in subCategoryLinks.profile"
              :key="i"
              cols="7"
              class="mt-1"
            >
              <nuxt-link :to="'/' + '/' + item.link" class="infotext">
                {{ item }}
              </nuxt-link>
            </div>

            <v-divider></v-divider>
            <div
              v-for="(coupn, i) in subCategoryLinks.coupns"
              :key="i"
              cols="7"
              class="mt-1"
            >
              <nuxt-link :to="'/' + '/' + coupn.link" class="infotext">
                {{ coupn }}
              </nuxt-link>

              <v-divided></v-divided>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-menu>

    <v-badge
      :content="wishgetQuantities"
      :value="wishgetQuantities"
      color="black"
      overlap
      class="px-0"
    >
      <n-link to="/wishlist">
        <v-icon large class="icon">mdi-heart-outline</v-icon>
      </n-link>
      <strong class="d-flex usertitle"> Wishlist</strong>
    </v-badge>

    <!-- <v-badge
      :content="getQuantities"
      :value="getQuantities"
      overlap
      class="ml-5"
    >
      <n-link to="/cart">
        <v-icon large>mdi-bag-personal-outline</v-icon>
      </n-link>
      <strong class="d-flex usertitle"> Bag</strong>
    </v-badge> -->

    <!-- cart -->
    <v-menu rounded="0" open-on-hover offset-y>
      <!-- button -->
      <template #activator="{ on, attrs }">
        <v-btn to="/cart" text class="ml-5" v-on="on" v-bind="attrs">
          <v-badge
            color="orange darken-3"
            v-if="getQuantities"
            overlap
            :content="getQuantities"
            :value="getQuantities"
          >
            <n-link to="/cart">
              <v-icon large>mdi-bag-personal-outline</v-icon>
              
            </n-link>
            
          </v-badge>
          <v-icon v-else large dark >mdi-bag-personal-outline</v-icon>
         
          
        </v-btn>
         <strong class="d-flex usertitles"> Bag</strong>
      </template>

      <!-- cart empty -->
      <v-card
        v-if="getCart.products.length == 0"
        flat
        width="400"
        class="pa-3 rounded-0"
        style="border: 1px solid black"
      >
        <p>RECENTLY ADDED ITEM(S)</p>
        <p class="mb-0">You have no items in your shopping cart.</p>
      </v-card>

      <!--  cart not empty -->
      <v-card
        v-else
        class="rounded-0"
        flat
        width="450"
        style="border: 1px solid black"
      >
        <!-- cart number -->
        <p class="mb-0 grey lighten-2 pl-4 py-1">
          <span class="indigo--text">Your Cart Number:</span>
          <span class="orange--text">123456</span>
        </p>
        <p class="body-2 ml-4 mt-2 mb-0">RECENTLY ADDED ITEM(S)</p>

        <!--  cart products  related data -->
        <v-list class="overflow-y-auto" max-height="600" width="100%">
          <div v-for="(product, i) in getCart.products" :key="i">
            <v-row>
              <!-- image -->
              <v-col cols="2">
                <n-link :to="`/men/Indian & festiv wear/${product.id}`">
                  <img :src="product.src" :alt="product.subTitle" width="70" />
                </n-link>
              </v-col>

              <!-- title, items, delete, quantity -->
              <v-col cols="7">
                <n-link
                  :to="`/men/Indian & festiv wear/${product.id}`"
                  class="text-decoration-none"
                >
                  <p class="caption mb-0 indigo--text">
                    {{ product.subTitle }}
                    {{ product.quantity }}
                  </p>
                </n-link>
                <v-row class="mb-n8">
                  <v-col cols="auto" class="mt-2">
                    <span class="caption">Qty: </span>
                  </v-col>
                  <v-col cols="3">
                    <!-- //quantity  -->

                    <v-text-field
                      :value="product.quantity"
                      dense
                      
                    ></v-text-field>
                  </v-col>
                  <v-col cols="auto" class="mt-2">
                    <v-icon @click="deleteProduct(product.id)"
                      >mdi-delete</v-icon
                    >
                  </v-col>
                </v-row>
                <p class="mb-0 caption">
                  <span>{{ product.quantity }}x</span>
                  <span>{{ product.subTitle }}</span>
                </p>
              </v-col>

              <!-- price -->
              <v-col cols="3">
                <p class="caption font-weight-bold">
                  {{ product.price }}
                </p>
              </v-col>
            </v-row>

            <v-divider
              v-if="getCart.products.length > 0"
              class="my-2 mr-2"
            ></v-divider>
          </div>
        </v-list>

        <!-- total -->
        <p class="mb-0 body-2 indigo--text grey lighten-3 text-center py-1">
          CART SUBTOTAL: -₹ {{ Math.round(getPrice - (getPrice * 31) / 100) }}
        </p>

        <!-- view cart & checkout button -->
        <v-row class="mx-2 my-1">
          <v-col cols="6">
            <v-btn
              class="text-capitalize rounded-0"
              outlined
              block
              color="primary"
              to="/cart"
            >
              View Cart
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="text-capitalize orange darken-4 rounded-0"
              dark
              block
              to="/checkout"
            >
              Checkout
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Check from '../Home/check.vue'
export default {
  components: { Check },
  computed: {
    ...mapGetters('Wishcart', ['getCart', 'wishgetQuantities']),
    ...mapGetters('Cart', ['getCart', 'getQuantities']),
    ...mapGetters('products', ['getProducts']),

    ...mapGetters('Cart', ['getCart', 'getPrice', 'getQuantities']),
  },

  data() {
    return {
      text: true,
      searchedProducts: [],
      model: '',
      quantity: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      productquantity: '1',
      searchResultsVisible: false,

      subCategoryLinks: {
        profile: ['orders', 'wishlist', 'Gift Cards', 'Contact Us'],
        coupns: ['Myntra Credit', 'Coupons', 'Saved Cards', 'Saved Addresses'],
      },
      footlinks: {
        links: [
          { linkTitle: 'MEN', link1: 'men', color: '#ee5f73' },
          { linkTitle: 'WOMEN', link1: 'women', color: '#fb56c1' },
          { linkTitle: 'KIDS', link1: 'kids', color: '#f26a10' },
          { linkTitle: 'HOME&LIVING', link1: 'living', color: '#f2c210' },
          { linkTitle: 'BEAUTY', link1: 'beauty', color: '#0db7af' },
        ],
        subCategoryLinks: {
          men: [
            // { linkTitle: 'Topwear', link2: 'topwear' , path:'/Personal Care/Neutrogena' },
            {
              linkTitle: 'Indian & festiv wear',
              link2: 'festivewear',
              color: '#ee5f73',
              path: '/men/Indian & festiv wear',
            },
            {
              linkTitle: 'Bottomwear',
              link2: 'bottomwear',
              color: '#ee5f73',
              path: '/men/Bottomwear',
            },
            {
              linkTitle: 'Innerwear & sleepwear',
              link2: 'innerwear',
              color: '#ee5f73',
              path: '/men/Innerwear & sleepwear',
            },
            //  { linkTitle: 'Plus Size', link2: 'plussize' , path:'/Personal Care/Neutrogena' },
            { linkTitle: 'Footwear', link2: 'footwear', path: '/men/footwear' },
            {
              linkTitle: 'Personal Care & Grooming',
              link2: 'grooming',
              color: '#ee5f73',
              path: '/men/Personal Care & Grooming',
            },
            //  { linkTitle: 'Sunglasses & Frames', link2: 'sunglasses' , path:'/Personal Care/Neutrogena' },
            //  { linkTitle: 'Watchers', link2: 'watchers' , path:'/Personal Care/Neutrogena' },
            {
              linkTitle: 'Sports & Active Wear',
              link2: 'sportswear',
              color: '#ee5f73',
              path: '/men/Sports & Active Wear',
            },
          ],
          women: [
            {
              linkTitle: 'Indian & Fusion wear',
              link2: 'wear',
              color: '#fb56c1',
              path: '/women/Indian & Fusion wear',
            },
            {
              linkTitle: 'Western Wear',
              link2: 'westernwear',
              color: '#fb56c1',
              path: '/women/Western Wear',
            },
            {
              linkTitle: 'Footwear',
              link2: 'footwear',
              color: '#fb56c1',
              path: '/women/Footwear',
            },
            {
              linkTitle: 'Sports & Active Wear',
              link2: 'sportswear',
              color: '#fb56c1',
              path: '/women/Sports & Active Wear',
            },
            {
              linkTitle: 'Lingerie & Sleepwear',
              link2: 'sleepwear',
              color: '#fb56c1',
              path: '/women/Lingerie & Sleepwear',
            },
            {
              linkTitle: 'Beauty & Personal Care',
              link2: 'personalcare',
              color: '#fb56c1',
              path: '/women/Beauty & Personal Care',
            },
          ],

          kids: [
            {
              linkTitle: 'Boys Clothing',
              link2: 'boysclothing',
              color: '#f26a10',
              path: '/kids/Boys Clothing',
            },
            {
              linkTitle: 'Girls Clothing',
              link2: 'girlsclothing',
              color: '#f26a10',
              path: '/kids/Girls Clothing',
            },
            {
              linkTitle: 'Boys Footwear',
              link2: 'boysfootwear',
              color: '#f26a10',
              path: '/kids/Boys Footwear',
            },
            {
              linkTitle: 'Girls Footwear',
              link2: 'girlsfootwear',
              color: '#f26a10',
              path: '/kids/Girls Footwear',
            },
            {
              linkTitle: 'Kids Accesssories',
              link2: 'kidsass',
              color: '#f26a10',
              path: '/kids/Kids Accesssories',
            },
            {
              linkTitle: 'Beauty & Personal Care',
              link2: 'beautycare',
              color: '#f26a10',
              path: '/Beauty/Beauty & Personal Care',
            },
          ],

          living: [
            {
              linkTitle: 'Bed Linen & Furnishing',
              link2: 'bedlinen',
              path: '/living/Bed Linen & Furnishing',
              color: '#f2c210',
            },
            {
              linkTitle: 'Flooring',
              link2: 'flooring',
              path: '/living/Flooring',
              color: '#f2c210',
            },
            {
              linkTitle: 'Bath',
              link2: 'bath',
              path: '/living/Bath',
              color: '#f2c210',
            },
            {
              linkTitle: 'Lamps & Lighting',
              link2: 'lamps',
              path: '/living/Lamps & Lighting',
              color: '#f2c210',
            },
            {
              linkTitle: 'Home Decor',
              link2: 'homedecore',
              path: '/living/Home Decor',
              color: '#f2c210',
            },
            {
              linkTitle: 'Kitchen & Table',
              link2: 'kitchen',
              path: '/living/Kitchen & Table',
              color: '#f2c210',
            },
          ],

          beauty: [
            {
              linkTitle: 'Makeup',
              link2: 'makeup',
              path: '/beauty/Makeup',
              color: '#0db7af',
            },
            {
              linkTitle: 'Skincare , Bath & Body',
              link2: 'skincare',
              path: '/beauty/Skincare , Bath & Body',
              color: '#0db7af',
            },
            {
              linkTitle: 'Haircare',
              link2: 'haircare',
              path: '/beauty/Haircare',
              color: '#0db7af',
            },
            {
              linkTitle: 'Fregrances',
              link2: 'fregrances',
              path: '/beauty/Fregrances',
              color: '#0db7af',
            },
            {
              linkTitle: 'Appliances',
              link2: 'appliances',
              path: '/beauty/Appliances',
              color: '#0db7af',
            },
            {
              linkTitle: 'Mens Grooming',
              link2: 'mensgrooming',
              path: '/beauty/Mens Grooming',
              color: '#0db7af',
            },
            {
              linkTitle: 'Beauty Gift & Makeup Set',
              link2: 'beautygift',
              path: '/beauty/Beauty Gift & Makeup Set',
              color: '#0db7af',
            },
            {
              linkTitle: 'Top Brands',
              link2: 'topbrands',
              path: '/beauty/Top Brands',
              color: '#0db7af',
            },
          ],

          thirdCategoryLinks: {
            topwear: [
              {
                linkTitle: 'T-shirts',
                link3: 't-shirts',
                path: '/Clothing/Jack & Jones Store',
              },
              {
                linkTitle: 'T-shirts',
                link3: 't-shirts',
                path: '/Clothing/Jack & Jones Store',
              },
              {
                linkTitle: 'T-shirts',
                link3: 't-shirts',
                path: '/Clothing/Jack & Jones Store',
              },
              {
                linkTitle: 'T-shirts',
                link3: 't-shirts',
                path: '/Clothing/Jack & Jones Store',
              },
              {
                linkTitle: 'T-shirts',
                link3: 't-shirts',
                path: '/Clothing/Jack & Jones Store',
              },
            ],
            festivewear: [
              {
                linkTitle: 'Kurtas 7 Kurta set',
                link3: 'kurtaset',
                path: '/Indian & festiv wear/kurtaset',
              },
              {
                linkTitle: 'Sharwanis',
                link3: 'sharwanis',
                path: '/Indian & festiv wear/sharwanis',
              },
              {
                linkTitle: 'Nehru jeckets',
                link3: 'nehrujeckets',
                path: '/Indian & festiv wear/nehrujeckets',
              },
              {
                linkTitle: 'Dhotis',
                link3: 'dhotis',
                path: '/Indian & festiv wear/dhotis',
              },
            ],
            bottomwear: [
              {
                linkTitle: 'jens',
                link3: 'jens',
                path: '/Bottomwear/jens',
              },
              {
                linkTitle: 'Causual troures',
                link3: 'causualtroures',
                path: '/bottomwear/causualtroures',
              },
              {
                linkTitle: 'Formal Troures',
                link3: 'nehrujeckets',
                path: '/bottomwear/Formal Troures',
              },
              {
                linkTitle: 'Shorts',
                link3: 'dhotis',
                path: '/bottomwear/Shorts',
              },
              {
                linkTitle: 'jens',
                link3: 'kurtaset',
                path: '/bottomwear/jens',
              },
              {
                linkTitle: 'Causual troures',
                link3: 'sharwanis',
                path: '/bottomwear/Jack & Jones Store',
              },
              {
                linkTitle: 'Formal Troures',
                link3: 'nehrujeckets',
                path: '/bottomwear/Jack & Jones Store',
              },
              {
                linkTitle: 'Shorts',
                link3: 'dhotis',
                path: '/bottomwear/Jack & Jones Store',
              },
            ],
            innerwear: [
              {
                linkTitle: 'Brief & Trunks',
                link3: 'brieftrunks',
                path: '/innerwear/brieftrunks',
              },
              {
                linkTitle: 'Boxers',
                link3: 'boxers',
                path: '/innerwear/boxers',
              },
              {
                linkTitle: 'Vests',
                link3: 'vests',
                path: '/innerwear/vests',
              },
              {
                linkTitle: 'Sleepwear & Loungewear',
                link3: 'sleepwear',
                path: '/innerwear/sleepwear',
              },
              {
                linkTitle: 'Thermals',
                link3: 'thermals',
                path: '/innerwear/thermals',
              },
            ],
            footwear: [
              {
                linkTitle: 'Casual Shoes',
                link3: 'casualshoes',
                path: '/footwear/Casual Shoes',
              },
              {
                linkTitle: 'Sports Shoes',
                link3: 'sportsshoes',
                path: '/footwear/Sports Shoes',
              },
              {
                linkTitle: 'Formal Shoes',
                link3: 'formal shoes',
                path: '/footwear/Formal Shoes',
              },
              {
                linkTitle: 'Sneakers',
                link3: 'sneakers',
                path: '/footwear/Sneakers',
              },
              {
                linkTitle: 'Sandles & Floaters',
                link3: 'sandles',
                path: '/footwear/Sandles & Floaters',
              },
              {
                linkTitle: 'Flip Flops',
                link3: 'flipflops',
                path: '/footwear/Flip Flops',
              },
              { linkTitle: 'Socks', link3: 'socks', path: '/footwear/Socks' },
            ],
            sportswear: [
              {
                linkTitle: 'Sports Shoes',
                link3: 'sportsshoes',
                path: '/sportswear/sportsshoes',
              },
              {
                linkTitle: 'Sports Sandles',
                link3: 'sportssandles',
                path: '/sportswear/sportssandles',
              },
              {
                linkTitle: 'Active T-shirts',
                link3: 'active',
                path: '/sportswear/active',
              },
              {
                linkTitle: 'Track Pants & Shorts',
                link3: 'trackpants',
                path: '/sportswear/trackpants',
              },
              {
                linkTitle: 'Treacksuits',
                link3: 'treacksuits',
                path: '/sportswear/treacksuits',
              },
            ],
            wear: [
              {
                linkTitle: 'jens',
                link3: 'kurtaset',
                path: '/wear/kurtaset',
              },
              {
                linkTitle: 'Causual troures',
                link3: 'sharwanis',
                path: '/wear/sharwanis',
              },
              {
                linkTitle: 'Formal Troures',
                link3: 'nehrujeckets',
                path: '/wear/nehrujeckets',
              },
              {
                linkTitle: 'Shorts',
                link3: 'dhotis',
                path: '/wear/dhotis',
              },
            ],
            westernwear: [
              {
                linkTitle: 'Dresses',
                link3: 'dresses',
                path: '/westernwear/dresses',
              },
              {
                linkTitle: 'Jumpsuits',
                link3: 'jumpsuits',
                path: '/westernwear/dresses',
              },
              {
                linkTitle: 'Tops',
                link3: 'tops',
                path: '/westernwear/dresses',
              },
              {
                linkTitle: 'Jeans',
                link3: 'jeans',
                path: '/westernwear/dresses',
              },
              {
                linkTitle: 'Trousers & Capries',
                link3: 'trousers',
                path: '/westernwear/dresses',
              },
            ],
            footwear: [
              { linkTitle: 'Flats', link3: 'flats', path: '/footwear/flats' },
              {
                linkTitle: 'Casual Shoes',
                link3: 'casualshoes',
                path: '/footwear/Casual Shoes',
              },
              { linkTitle: 'Heels', link3: 'heels', path: '/footwear/Heels' },
              { linkTitle: 'Boots', link3: 'boots', path: '/footwear/Boots' },
              {
                linkTitle: 'Sports Shoes',
                link3: 'sportsshoes',
                path: '/footwear/Sports Shoes',
              },
            ],
            sportswear: [
              {
                linkTitle: 'Clothing',
                link3: 'clothing',
                path: '/sportswear/clothing',
              },
              {
                linkTitle: 'Footwear',
                link3: 'footwear',
                path: '/sportswear/footwear',
              },
              {
                linkTitle: 'Sports Accessories',
                link3: 'spportsacce',
                path: '/sportswear/spportsacce',
              },
              {
                linkTitle: 'Sports Equipment',
                link3: 'equipment',
                path: '/sportswear/equipment',
              },
            ],
            sleepwear: [
              {
                linkTitle: 'Bra',
                link3: 'bra',
                path: '/Lingerie & Sleepwear/bra',
              },
              {
                linkTitle: 'Briefs',
                link3: 'briefs',
                path: '/Lingerie & Sleepwear/briefs',
              },
              {
                linkTitle: 'Shapewear',
                link3: 'sharpwear',
                path: '/Lingerie & Sleepwear/sharpwear',
              },
              {
                linkTitle: 'Sleepwear & Lounewear',
                link3: 'sleepwear',
                path: '/Lingerie & Sleepwear/sleepwear',
              },
              {
                linkTitle: 'Swimwear',
                link3: 'swimwear',
                path: '/Lingerie & Sleepwear/swimwear',
              },
            ],
            personalcare: [
              {
                linkTitle: 'Makeup',
                link3: 'makeup',
                path: '/Beauty & Personal Care/makeup',
              },
              {
                linkTitle: 'Skincare',
                link3: 'skincare',
                path: '/Beauty & Personal Care/skincare',
              },
              {
                linkTitle: 'Premium Beauty',
                link3: 'beauty',
                path: '/Beauty & Personal Care/beauty',
              },
              {
                linkTitle: 'Lipsticks',
                link3: 'lipsticks',
                path: '/Beauty & Personal Care/lipsticks',
              },
              {
                linkTitle: 'Fragrances',
                link3: 'fragrances',
                path: '/Beauty & Personal Care/fragrances',
              },
            ],
            boysclothing: [
              {
                linkTitle: 'T-Shirts',
                link3: 't-shirts',
                path: '/Boys Clothing/t-shirts',
              },
              {
                linkTitle: 'Shirts',
                link3: 'shirts',
                path: '/Boys Clothing/shirts',
              },
              {
                linkTitle: 'Shorts',
                link3: 'shorts',
                path: '/Boys Clothing/shorts',
              },
              {
                linkTitle: 'Jeans',
                link3: 'jeans',
                path: '/Boys Clothing/jeans',
              },
              {
                linkTitle: 'Trousers',
                link3: 'trousers',
                path: '/Boys Clothing/trousers',
              },
              {
                linkTitle: 'Clothing Sets',
                link3: 'clothingsets',
                path: '/Boys Clothing/clothingsets',
              },
            ],
            girlsclothing: [
              {
                linkTitle: 'Dresses',
                link3: 'dresses',
                path: '/Girls Clothing/dresses',
              },
              {
                linkTitle: 'Tops',
                link3: 'tops',
                path: '/Girls Clothing/tops',
              },
              {
                linkTitle: 'Tshirts',
                link3: 'tshirts',
                path: '/Girls Clothing/tshirts',
              },
              {
                linkTitle: 'Clothing Sets',
                link3: 'clothingsets',
                path: '/Girls Clothing/clothingsets',
              },
              {
                linkTitle: 'Ethnic wear',
                link3: 'ethnicwear',
                path: '/Girls Clothing/ethnicwear',
              },
              {
                linkTitle: 'Dungarees&Jumpsuits',
                link3: 'jumpsuits',
                path: '/Girls Clothing/jumpsuits',
              },
            ],
            boysfootwear: [
              {
                linkTitle: 'Casual Shoes',
                link3: 'casualshoes',
                path: '/Boys Footwear/casualshoes',
              },
              {
                linkTitle: 'Sports Shoes',
                link3: 'sportsshoes',
                path: '/Boys Footwear/sportsshoes',
              },
              {
                linkTitle: 'Sandles',
                link3: 'sandles',
                path: '/Boys Footwear/sandles',
              },
              {
                linkTitle: 'Flip Flops',
                link3: 'flipflops',
                path: '/Boys Footwear/flipflops',
              },
              {
                linkTitle: 'School Shoes',
                link3: 'schoolshoes',
                path: '/Boys Footwear/schoolshoes',
              },
            ],
            girlsfootwear: [
              {
                linkTitle: 'Flats',
                link3: 'flats',
                path: '/Girls Footwear/flats',
              },
              {
                linkTitle: 'Casual Shoes',
                link3: 'casualshoes',
                path: '/Girls Footwear/casualshoes',
              },
              {
                linkTitle: 'Sports Shoes',
                link3: 'sportsshoes',
                path: '/Girls Footwear/sportsshoes',
              },
              {
                linkTitle: 'Heels',
                link3: 'heels',
                path: '/Girls Footwear/heels',
              },
              {
                linkTitle: 'Flip flops',
                link3: 'flipflops',
                path: '/Girls Footwear/flipflops',
              },
              {
                linkTitle: 'Sandals',
                link3: 'sandles',
                path: '/Girls Footwear/sandles',
              },
            ],
            bedlinen: [
              {
                linkTitle: 'Bedsheets',
                link3: 'bedsheets',
                path: '/Bed Linen & Furnishing/bedsheets',
              },
              {
                linkTitle: 'Bedding Sets',
                link3: 'beddingsets',
                path: '/Bed Linen & Furnishing/beddingsets',
              },
              {
                linkTitle: 'Blankets , Quiltes & Doharas',
                link3: 'blankets',
                path: '/bedlinen/blankets',
              },
              {
                linkTitle: 'Pillows & Pillows Covers',
                link3: 'pillows',
                path: '/Bed Linen & Furnishing/pillows',
              },
              {
                linkTitle: 'Bed Covers',
                link3: 'bedcovers',
                path: '/Bed Linen & Furnishing/bedcovers',
              },
            ],
            flooring: [
              {
                linkTitle: 'Carpets',
                link3: 'carpets',
                path: '/Flooring/carpets',
              },
              {
                linkTitle: 'Floor Mats & Dhurries',
                link3: 'floormats',
                path: '/Flooring/floormats',
              },
              {
                linkTitle: 'Door Mats',
                link3: 'doormats',
                path: '/Flooring/doormats',
              },
            ],
            bath: [
              {
                linkTitle: 'Bath Towals',
                link3: 'bathtowals',
                path: '/Bath/bathtowals',
              },
              {
                linkTitle: 'Hand & Face Towals',
                link3: 'handtowals',
                path: '/Bath/handtowals',
              },
              {
                linkTitle: 'Beach Towals',
                link3: 'beachtowals',
                path: '/Bath/beachtowals',
              },
              {
                linkTitle: 'Towals Set',
                link3: 'towalsset',
                path: '/Bath/towalsset',
              },
              {
                linkTitle: 'Bath Rugs',
                link3: 'bathrugs',
                path: '/Bath/bathrugs',
              },
            ],
            lamps: [
              {
                linkTitle: 'Floor Lamps',
                link3: 'floorlamps',
                path: '/Lamps & Lighting/floorlamps',
              },
              {
                linkTitle: 'Table Lamps',
                link3: 'tablelamps',
                path: '/Lamps & Lighting/tablelamps',
              },
              {
                linkTitle: 'Wall Lamps',
                link3: 'walllmaps',
                path: '/Lamps & Lighting/walllmaps',
              },
            ],
            homedecore: [
              {
                linkTitle: 'Plant and planters',
                link3: 'plantandplanters',
                path: '/Home Decor/plantandplanters',
              },
              {
                linkTitle: 'Aromas & Candles',
                link3: 'aromas',
                path: '/Home Decor/aromas',
              },
              {
                linkTitle: 'Clocks',
                link3: 'clocks',
                path: '/Home Decor/clocks',
              },
              {
                linkTitle: 'Mirrors',
                link3: 'mirros',
                path: '/Home Decor/mirros',
              },
              {
                linkTitle: 'Wall Decore',
                link3: 'walldecore',
                path: '/Home Decor/walldecore',
              },
            ],
            kitchen: [
              {
                linkTitle: 'Dinnerware &  Serverware',
                link3: 'dinnerware',
                path: '/Kitchen & Table/dinnerware',
              },
              {
                linkTitle: 'Cups and Mugs',
                link3: 'cups',
                path: '/Kitchen & Table/dinnerware',
              },
              {
                linkTitle: 'Bakeware & Cookware',
                link3: 'bakeware',
                path: '/Kitchen & Table/bakeware',
              },
              {
                linkTitle: 'Kitchen Storage & Tools',
                link3: 'kitchenstorege',
                path: '/Kitchen & Table/kitchenstorege',
              },
              {
                linkTitle: 'Bar & Drinkware',
                link3: 'bardrink',
                path: '/Kitchen & Table/bardrink',
              },
            ],
            makeup: [
              {
                linkTitle: 'Lipstick',
                link3: 'lipstick',
                path: '/Makeup/dinnerware',
              },
              {
                linkTitle: 'Lip Gloss',
                link3: 'lopgloss',
                path: '/Makeup/Lip Gloss',
              },
              {
                linkTitle: 'Lip Liner',
                link3: 'lipliner',
                path: '/Makeup/Lip Liner',
              },
              {
                linkTitle: 'Mascara',
                link3: 'mascara',
                path: '/Makeup/Mascara',
              },
              {
                linkTitle: 'Eyeliner',
                link3: 'eyeliner',
                path: '/Makeup/Eyeliner',
              },
              {
                linkTitle: 'Foundation',
                link3: 'foundation',
                path: '/Makeup/Foundation',
              },
              {
                linkTitle: 'Primer',
                link3: 'primar',
                path: '/Makeup/Primer',
              },
              {
                linkTitle: 'Concealer',
                link3: 'concealer',
                path: '/Makeup/Concealer',
              },
              {
                linkTitle: 'Compact',
                link3: 'compact',
                path: '/Makeup/Compact',
              },
              {
                linkTitle: 'Nail Polish',
                link3: 'nailpolish',
                path: '/Makeup/Nail Polish',
              },
            ],
            skincare: [
              {
                linkTitle: 'Face Moisturiser',
                link3: 'facemoisturiser',
                path: '/Skincare , Bath & Body/Face Moisturiser',
              },
              {
                linkTitle: 'Cleanser',
                link3: 'cleanser',
                path: '/Skincare , Bath & Body/Cleanser',
              },
              {
                linkTitle: 'Masks & Peel',
                link3: 'maskspeel',
                path: '/Skincare , Bath & Body/Masks & Peel',
              },
              {
                linkTitle: 'Sunscreen',
                link3: 'sunsceen',
                path: '/Skincare , Bath & Body/Sunscreen',
              },
              {
                linkTitle: 'Serum',
                link3: 'serum',
                path: '/Skincare , Bath & Body/Serum',
              },
              {
                linkTitle: 'Face Wash',
                link3: 'lipstick',
                path: '/Skincare , Bath & Body/dinnerware',
              },
              {
                linkTitle: 'Eye Cream',
                link3: 'eyecream',
                path: '/Skincare , Bath & Body/Eye Cream',
              },
              {
                linkTitle: 'Lip Balm',
                link3: 'lipbalm',
                path: '/Skincare , Bath & Body/Lip Balm',
              },
              {
                linkTitle: 'Body Lotion',
                link3: 'bodylotion',
                path: '/Skincare , Bath & Body/Body Lotion',
              },
              {
                linkTitle: 'Body Wash',
                link3: 'bodywash',
                path: '/Skincare , Bath & Body/Body Wash',
              },
              {
                linkTitle: 'Body Scrub',
                link3: 'bodyscrub',
                path: '/Skincare , Bath & Body/Body Scrub',
              },
              {
                linkTitle: 'Hand  Cream',
                link3: 'handcream',
                path: '/Skincare , Bath & Body/Hand  Cream',
              },
            ],

            haircare: [
              {
                linkTitle: 'Shampoo',
                link3: 'shampoo',
                path: '/Haircare/Shampoo',
              },
              {
                linkTitle: 'Conditioner',
                link3: 'conditioner',
                path: '/Haircare/Conditioner',
              },
              {
                linkTitle: 'Hair Cream',
                link3: 'haircream',
                path: '/Haircare/Hair Cream',
              },
              {
                linkTitle: 'Hair Oil',
                link3: 'hairoil',
                path: '/Haircare/Hair Oil',
              },
              {
                linkTitle: 'Hair Gel',
                link3: 'hairgel',
                path: '/Haircare/Hair Gel',
              },
              {
                linkTitle: 'Hair Color',
                link3: 'haircolor',
                path: '/Haircare/Hair Color',
              },
              {
                linkTitle: 'Hair Serum',
                link3: 'hairserum',
                path: '/Haircare/Hair Serum',
              },
              {
                linkTitle: 'Hair Accessory',
                link3: 'hairaccessory',
                path: '/Haircare/Hair Accessory',
              },
            ],

            fregrances: [
              {
                linkTitle: 'Perfume',
                link3: 'perfume',
                path: '/Fregrances/Perfume',
              },
              {
                linkTitle: 'Deodorant',
                link3: 'deodorant',
                path: '/Fregrances/Deodorant',
              },
              {
                linkTitle: 'Body Mist',
                link3: 'bodymist',
                path: '/Fregrances/Body Mist',
              },
            ],

            appliances: [
              {
                linkTitle: 'Hair Straightener',
                link3: 'hairstraightener',
                path: '/Appliances/Hair Straightener',
              },
              {
                linkTitle: 'Hair Drayer',
                link3: 'hairdrayer',
                path: '/Appliances/Hair Drayer',
              },
              {
                linkTitle: 'Eplilator',
                link3: 'eplilator',
                path: '/Appliances/Eplilator',
              },
            ],
            mensgrooming: [
              {
                linkTitle: 'Trimmers',
                link3: 'trimmers',
                path: '/Mens Grooming/Trimmers',
              },
              {
                linkTitle: 'Beard Oil',
                link3: 'beardoil',
                path: '/Mens Grooming/Beard Oil',
              },
              {
                linkTitle: 'Hair  Wax',
                link3: 'hairwax',
                path: '/Mens Grooming/Hair Wax',
              },
            ],
            beautygift: [
              {
                linkTitle: 'Beauty kit',
                link3: 'beautykit',
                path: 'Beauty Gift & Makeup Set/Beauty kit',
              },
              {
                linkTitle: 'Makeup kit',
                link3: 'makeupkit',
                path: 'Beauty Gift & Makeup Set/Makeup kit',
              },
            ],
            topbrands: [
              {
                linkTitle: 'Lakme',
                link3: 'lakme',
                path: 'Top Brands/Lakme',
              },
              {
                linkTitle: 'Maybilline',
                link3: 'maybilline',
                path: 'Top Brands/Maybilline',
              },
              {
                linkTitle: 'Philipps',
                link3: 'philipps',
                path: 'Top Brands/philipps',
              },
            ],
          },
        },
      },
      computed: {
        ...mapGetters('Cart', ['getCart', 'Wishcart']),
      },
    }
  },

  mounted() {
    this.prod = this.$store.state.products.products
  },

  methods: {
    ...mapActions('Cart', ['updateQuantity', 'deleteProduct']),
    updateQty(e, id) {
      this.updateQuantity({ qty: e, id })
      console.log(this.productquantity)
      this.productquantity = e
      console.log(this.productquantity)
    },
    productsearch() {
      if (this.model != '') {
        this.searchedProducts = []
        var serchpro = []

        this.prod.forEach((item) => {
          if (item.title.toLowerCase().includes(this.model.toLowerCase())) {
            serchpro.push(item.title)
          }
          // console.log(serchpro)
          let uniqueChars = [...new Set(serchpro)]

          this.searchedProducts = uniqueChars
          console.log(this.searchedProducts)
        })
      }
    },
  },
}
</script>
<style scoped>
a {
  color: rgb(17, 17, 17);
}

.onHoverBtn {
  font-weight: 490;
  background-color: transparent;
  border-bottom-color: #ee5f73;
}

.onBtn {
  font-weight: 490;
  background-color: transparent;
  border-bottom-color: #ee5f73;
  display: flex;
  flex-direction: column;
  margin-top: 1px;
}
.onBtn:hover {
  border-bottom-color: #ee5f73;
}

.linktext2 {
  color: #ee5f73;
  font-weight: 700;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 25px;
}
.linktext {
  color: #282c3f;
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 500;
  text-transform: uppercase;
}
.linktext:hover {
  color: black;
  font-weight: 300px;
}

.linktext1:hover {
  border-bottom-color: #ee5f73;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  padding-top: 5px;
}

/* ......  */

body {
  padding: 50px;
}

.linktext1 {
  display: inline-block;
  position: relative;
  color: #282c3f;
  font-size: 14px;
  padding-bottom: 3px;
  margin-right: 10px;
  line-height: 80px;
  letter-spacing: 0.3px;
  font-weight: 500;
  text-transform: uppercase;
}
.linktext1:last-child {
  margin-right: 0;
}

.linktext1:after {
  content: '';
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
  background: transparent;
  transition: width 0.5s ease, background-color 0.5s ease;
}
/* .linktext1:hover:after {
  width: 100%;
  background: #ee5f73;
} */

.profile {
  background-color: transparent;
  border-bottom-color: #ee5f73;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  padding-top: -10px;
}

/* .onpro:hover {
  border-bottom-color: #ee5f73;
  color: #ee5f73;
  border-bottom-style: solid;
   border-bottom-width: 4px;
    -webkit-transition: left .2s ease-out,border-color .5s ease-in;
} */
.onpro:hover {
  color: #000;
  text-decoration: none;
}

.onpro {
  display: inline-block;
  position: relative;
  margin-right: 10px;
}
.onpro:last-child {
  margin-right: 0;
}

.onpro:after {
  content: '';
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
  top: -5px;
}
.onpro:hover:after {
  width: 100%;
  background: #ee5f73;
}

.desktop-userActions {
  width: 250px;
  margin-top: 45px;
}
.infotitle {
  font-size: 14px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 10px;
  font-weight: 500;
  height: 20px;
}
.infotext {
  font-weight: 400;
  font-size: 14px;
  color: #3e4152;
  margin-left: 30px;
  line-height: 10px;
}
.infotext:hover {
  color: #000103ef;
  font-weight: bold;
}

.v-list.desktop-autoSuggest.desktop-showContent.v-sheet.theme--light {
  width: 355px;
  z-index: 9;
  position: absolute;
  display: block;
  font-size: 18px;
  color: #696e79;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  right: 250px;
  top: 70px;
}

.desktop-showContent {
  visibility: visible !important;
  opacity: 1 !important;
}
.v-text-field.v-text-field--solo .v-input__control input {
  caret-color: auto;
  color: #696e79;
  background: #f5f5f6;
}

.desktop-group > .v-list-type {
  list-style: none;
  padding: 15px 4px 15px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-text-field[type='model'] {
  -moz-appearance: none;
  -webkit-appearance: none;
  display: none;
}

*,
:after,
:before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

.desktop-title {
  width: 355px;

  background-color: #fff;
  list-style: none;
  padding: 1px;
}
.desktop-titletext {
  width: 355px;
  text-overflow: ellipsis;
  background-color: #fff;
  list-style: none;
  font-size: 13px;
  padding: 15px 4px 15px 12px;
  overflow: hidden;
  white-space: nowrap;
  color: #696e79;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
}
.desktop-titletext:hover {
  background-color: #f5f5f6;
  cursor: pointer;
}
.search:focus ~ v-list .desktop-autoSuggest .desktop-showContent v-sheet {
  display: none;
}

.v-menu__content {
  position: absolute;
  display: inline-block;
  max-width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  contain: content;
  will-change: transform;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  border-radius: 4px;
  top: 87px;
}
.usertitle {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  padding-top: 10px;
  margin-left: -9px;
  line-height: 6px;
  text-transform: uppercase;
}
.v-application a {
  color: #434344;
  font-weight: bolder;
}
.modelserch {
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
}
.usertitles{
  color: #000;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  right: 33px;
  top: 62px;
}
</style>