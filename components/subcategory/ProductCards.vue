<template>
  <div>
    <v-row>
      <!-- filter   -->
      <v-col cols="3">
        <!-- title -->

        <h3 class="mt-5 ml-11">FILTERS</h3>

        <div class="mt-5 mx-2">
          <v-divider class="mt-n5"></v-divider>
          <div class="d-flex">
            <v-row>
              <v-col class="pa-5">
                <v-radio-group v-model="selectradio">
                  <v-radio
                    v-for="(gen, index) in gender"
                    :key="index"
                    dense
                    class="mt-n5 py-2"
                    color="#ff3f6c"
                  >
                    <template v-slot:label>
                      <span id="checkboxLabel">{{ gen.name }}</span>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </div>
          
        </div>

        <!-- checkbox filter  -->

        <div class="mx-2">
          <v-spacer></v-spacer>

          <v-divider class="mt-n5"></v-divider>

          <!-- category  -->

          <div class="d-flex">
            <v-row>
              <v-col class="pa-5">
                <div>
                  <div class="d-flex my-3">
                    <p><b>CATEGORIES</b></p>
                  </div>
                  <v-checkbox
                    v-for="(category, index) in categories"
                    :key="index"
                    dense
                    class="mt-n5"
                    color="#ff3f6c"
                  >
                    <template v-slot:label>
                      <span id="checkboxLabel">{{ category }}</span>
                    </template>
                  </v-checkbox>
                </div>

                <!-- brand  -->

                <div>
                  <div class="d-flex my-3">
                    <v-row v-if="!brand" class="mb-5 ml-3">
                      <v-col>
                        <h4>BRAND</h4>
                      </v-col>

                      <v-col>
                        <v-icon @click="brand = true" class="ml-15"
                          >mdi-magnify</v-icon
                        >
                      </v-col>
                    </v-row>

                    <v-row v-else>
                      <v-col cols="10">
                        <p>
                          <v-text-field
                            solo
                            flat
                            v-model="brandsearch"
                            dense
                            class="mt-n1"
                            placeholder="Search for brand"
                            rounded
                            background-color="grey lighten-3"
                          >
                          </v-text-field>
                        </p>
                      </v-col>

                      <v-col cols="2">
                        <v-icon
                          @click="brand = false"
                          class="mr-1"
                          prepend-inner-icon
                        >
                          mdi-close
                        </v-icon>
                      </v-col>
                    </v-row>
                    <v-spacer></v-spacer>
                  </div>
                   
                  <v-checkbox
                    v-for="(brand, index) in filterBrand"
                    :key="index"
                    v-model="select"
                    dense
                    :value="brand.category"
                    class="mt-n5"
                    color="#ff3f6c"
                    @click="selected()"
                  >
                    <template v-slot:label>
                      <span class="mx-2" id="checkboxLabel">{{
                        brand.name}} ({{brand.len}}) 
                      </span>
                    </template>
                  </v-checkbox>
                </div>

                <!-- prices  -->
                <div>
                  <div class="d-flex my-3">
                    <v-row v-if="!price" class="mb-5 ml-3">
                      <v-col>
                        <h4>DISCOUNT RANGE</h4>
                      </v-col>

                      <v-col>
                        <v-icon @click="price = true" class="ml-15"
                          >mdi-magnify</v-icon
                        >
                      </v-col>
                    </v-row>

                    <v-row v-else>
                      <v-col cols="10">
                        <p>
                          <v-text-field
                            solo
                            flat
                            v-model="pricesearch"
                            dense
                            class="mt-n1"
                            placeholder="Search for brand search"
                            rounded
                            background-color="grey lighten-3"
                          >
                          </v-text-field>
                        </p>
                      </v-col>

                      <v-col cols="2">
                        <v-icon
                          @click="price = false"
                          class="mr-1"
                          prepend-inner-icon
                        >
                          mdi-close
                        </v-icon>
                      </v-col>
                    </v-row>
                    <v-spacer></v-spacer>
                  </div>

                  <v-checkbox
                    v-for="(price, index) in filterprice"
                    :key="index"
                    v-model="select"
                    dense
                    class="mt-n5"
                    :value="price.pricee"
                    color="#ff3f6c"
                    @click="selected()"
                  >
                    <template v-slot:label>
                      <span id="checkboxLabel"></span>
                      <span class="mx-2" id="checkboxLabel">{{
                        price.name}} ({{price.lenn}})</span>
                    </template>
                  </v-checkbox>
                </div>

                <!-- colors  -->

                <div>
                  <div class="d-flex my-3">
                    <v-row v-if="!color" class="mb-5 ml-3">
                      <v-col>
                        <h4>COLORS</h4>
                      </v-col>

                      <v-col>
                        <v-icon @click="color = true" class="ml-15"
                          >mdi-magnify</v-icon
                        >
                      </v-col>
                    </v-row>

                    <v-row v-else>
                      <v-col cols="10">
                        <p>
                          <v-text-field
                            solo
                            flat
                            v-model="colorsearch"
                            dense
                            class="mt-n1"
                            placeholder="Search for brand search"
                            rounded
                            background-color="grey lighten-3"
                          >
                          </v-text-field>
                        </p>
                      </v-col>

                      <v-col cols="2">
                        <v-icon
                          @click="color = false"
                          class="mr-1"
                          prepend-inner-icon
                        >
                          mdi-close
                        </v-icon>
                      </v-col>
                    </v-row>
                    <v-spacer></v-spacer>
                  </div>

                  <v-checkbox
                    v-for="(color, index) in filterColor"
                    :key="index"
                    v-model="select"
                    dense
                    :value="color.color"
                    class="mt-n5"
                    color="#ff3f6c"
                    @click="selected()"
                  >
                    <template v-slot:label>
                      <span id="checkboxLabel">
                        <v-avatar :color="color.color" size="14"></v-avatar
                      ></span>
                      <span class="mx-2" id="checkboxLabel">{{
                        color.data}} ({{color.lennn}})</span>
                    </template>
                  </v-checkbox>
                </div>

                <v-divider></v-divider>

                <div>
                  <div class="d-flex my-3">
                    <v-row v-if="!price" class="mb-5 ml-3">
                      <v-col>
                        <h4>DISCOUNT RANGE</h4>
                      </v-col>

                      <v-col>
                        <v-icon @click="price = true" class="ml-15"
                          >mdi-magnify</v-icon
                        >
                      </v-col>
                    </v-row>

                    <v-row v-else>
                      <v-col cols="10">
                        <p>
                          <v-text-field
                            solo
                            flat
                            v-model="discountsearch"
                            dense
                            class="mt-n1"
                            placeholder="Search for brand search"
                            rounded
                            background-color="grey lighten-3"
                          >
                          </v-text-field>
                        </p>
                      </v-col>

                      <v-col cols="2">
                        <v-icon
                          @click="price = false"
                          class="mr-1"
                          prepend-inner-icon
                        >
                          mdi-close
                        </v-icon>
                      </v-col>
                    </v-row>
                    <v-spacer></v-spacer>
                  </div>

                  <v-checkbox
                    v-for="(discount, index) in discounts"
                    :key="index"
                    v-model="typevalue"
                    dense
                    class="mt-n5"
                    color="#ff3f6c"
                    @click="query(discount, index)"
                  >
                    <template v-slot:label>
                      <span id="checkboxLabel"></span>
                      <span class="mx-2" id="checkboxLabel">
                        {{ discount.title }} % and above
                      </span>
                    </template>
                  </v-checkbox>
                </div>
              </v-col>
            </v-row>
            <v-row>

              <v-col class="mt-n15 px-8">
                <v-divider vertical></v-divider>
              </v-col>
            </v-row>
            <v-row> </v-row>
          </div>
        </div>
      </v-col>

      <!-- ........... product cards........  -->

      <v-col cols="9">
        <v-row class="row-base">
          <!-- 111111 -->
          <div class="d-flex">
            <v-col cols="2">
              <v-expansion-panels accordion flat tile>
                <v-expansion-panel>
                  <v-expansion-panel-header class="bundle"
                    >Bundles</v-expansion-panel-header
                  >

                  <v-expansion-panel-content>
                    <v-row>
                      <div class="d-flex">
                        <v-col v-for="(item, i) in values" :key="i">
                          <!-- {{item.bin}} -->
                          <v-checkbox
                            :v-model="item.bin"
                            :label="item.labels"
                            color="red"
                            :value="item.values"
                            hide-details
                            @click="sort(item.values)"
                          >
                          </v-checkbox>
                        </v-col>

                        <v-col>
                          <v-checkbox
                            v-model="bin"
                            label="Bundles"
                            color="red"
                            class="checkbundle"
                            value="aryuvad"
                            hide-details
                            @click="sort(bin)"
                          >
                          </v-checkbox>
                        </v-col>
                      </div>
                    </v-row>
                    <div class="d-flex">
                      <!-- chip 1 -->
                      <v-chip
                        v-for="(sing, i) in single"
                        :key="i"
                        class="ma-2"
                        @click="remove(sing)"
                      >
                        {{ sing }}
                      </v-chip>
                    </div>
                    <!-- chip 2 -->
                    <!-- <v-chip
                v-if="chip2"
                class="ma-2"
                close
                color="red"
                text-color="white"
                @click:close="chip2 = false"
              >
                Remove
              </v-chip> -->
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <!-- 22222 -->
            <v-col cols="3">
              <v-expansion-panels accordion flat tile>
                <v-expansion-panel>
                  <v-expansion-panel-header class="bundle"
                    >Country of Origin</v-expansion-panel-header
                  >

                  <v-expansion-panel-content class="avtar-value">
                    <v-row>
                      <div class="d-flex">
                        <v-col v-for="(item, i) in country" :key="i">
                          <!-- {{item.bin}} -->
                          <v-checkbox
                            :v-model="item.bin"
                            :label="item.labels"
                            color="red"
                            :value="item.values"
                            class="avtar-value"
                            hide-details
                            @click="sort(item.values)"
                          >
                          </v-checkbox>
                        </v-col>
                      </div>
                    </v-row>

                    <!-- chip 1 -->
                    <div class="d-flex">
                      <v-chip
                        v-for="(sing, i) in single"
                        :key="i"
                        class="ma-2"
                        close
                        @click="remove(sing)"
                      >
                        {{ sing }}
                      </v-chip>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <!-- 3333333 -->

            <v-col cols="2">
              <v-expansion-panels accordion flat tile>
                <v-expansion-panel>
                  <v-expansion-panel-header class="bundle"
                    >Collar</v-expansion-panel-header
                  >

                  <v-expansion-panel-content class="avtar-value">
                    <v-row>
                      <div class="d-flex">
                        <v-col v-for="(item, i) in collar" :key="i">
                          <!-- {{item.bin}} -->
                          <v-checkbox
                            :v-model="item.bin"
                            :label="item.labels"
                            color="red"
                            :value="item.values"
                            class="avtar-value"
                            hide-details
                            @click="sort(item.values)"
                          >
                          </v-checkbox>
                        </v-col>
                      </div>
                    </v-row>

                    <!-- chip 1 -->
                    <div class="d-flex">
                      <v-chip
                        v-for="(sing, i) in single"
                        :key="i"
                        class="ma-2"
                        close
                        @click="remove(sing)"
                      >
                        {{ sing }}
                      </v-chip>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <v-spacer></v-spacer>

            <v-col>
              <h4 class="text-right pt-2">Sort by:</h4>
            </v-col>

            <v-col cols="3">
              <v-select
                v-model="selectedSortedType"
                :items="sorts"
                open-on-hover
                offset-y
                label="Recommended"
                class="onHoverBtn"
                black--text
                dense
                outlined
                @change="sortProducts(selectedSortedType)"
              ></v-select>
            </v-col>
          </div>
        </v-row>

        <v-divider></v-divider>

        <v-row>
          <v-col cols="3" v-for="(product, i) in 	items" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card
                class="rounded-0 rounded-sm"
                max-width="100%"
                height="auto"
                :elevation="hover ? 10 : 0"
                :to="product.path"
              >
                <n-link
                  :to="`/${$route.params.category}/${$route.params.subCategory}/${product.id}`"
                >
                  <v-img :src="product.src"></v-img>
                </n-link>

                <!-- rating -->
                <v-row no-gutters class="mx-1">
                  <v-col cols="3">
                    <v-rating
                      v-model="product.rating"
                      :value="product.rating"
                      readonly
                      background-color="pink lighten-3"
                      color="pink"
                      half-increments
                      size="17"
                      dense
                    ></v-rating>
                  </v-col>
                  <v-col>
                    <span class="ml-13 black--text"
                      >({{ product.numberOfRating }})</span
                    >
                  </v-col>
                </v-row>

                <!-- product title -->
                <p
                  v-if="!hover"
                  class="pt-5 px-2 black--text subtitle-1 text-uppercase mb-1"
                >
                  <strong>{{ product.title }}</strong>
                </p>

                <!-- product subtitle -->
                <p
                  v-if="!hover"
                  class="px-2 caption font-weight-regular mb-1 mr-5"
                >
                  {{ product.subTitle }}
                </p>
                <!-- product size -->

                <!-- btn -->
                <div v-else>
                  <v-btn-toggle>
                    <v-btn
                      v-if="!product.wishlist"
                      rounded
                      tile
                      text
                      width="190px"
                      height="30px"
                      color="black"
                      class="subtitle-2 text-center elevation=2 ma-3"
                      @click="wishToCart(product)"
                    >
                      <v-icon id="colorchange">mdi-heart-outline</v-icon>

                      &nbsp;WISHLIST
                    </v-btn>

                    <v-btn
                      v-else
                      dark
                      tile
                      text
                      width="190px"
                      height="30px"
                      class="
                        subtitle-2
                        text-center
                        elevation=2
                        ma-3
                        grey
                        darken-3
                      "
                    >
                      <v-icon color="pink" id="colorchange">mdi-heart</v-icon>

                      &nbsp;WISHLISTED
                    </v-btn>
                  </v-btn-toggle>
                  <p class="px-2 subtitle-2 font-weight-medium mb-1">
                    Sizes:<span class="font-weight-bold">{{
                      product.size
                    }}</span>
                  </p>
                </div>

                <!-- product offer price -->
                <div>
                  <p
                    v-if="!product.specialPrice"
                    class="black--text mx-2 title my-1"
                  >
                    {{ product.price }}
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
                      class="red--text px-2 subtitle-2 font-weight-medium mb-1"
                    >
                      {{ product.offer }}
                    </span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <v-divider></v-divider>

                            <!-- pagination concept  -->
                            <v-row>
                     <v-col cols="3">      
                      <h3  class="pagination-paginationMeta"> Page  {{this.page}}  of   {{this.pages}} </h3>
                     </v-col>
                     <v-col cols="4 ma-7">
              <v-pagination class="pagination-active mb-2"  v-model="page" :length="pages" @input="updatePage"></v-pagination>
                     </v-col>

                     
          

              <v-col class="ma-7" >
              <v-select
                v-model="pageSize"
                :items="pagesort"
                open-on-hover
                offset-y
                label="pagesort"
                class="onHoverBtn"
                black--text
                dense
                outlined
                 @change="initPage()"
              ></v-select>
            </v-col>
                    
                            </v-row>
     </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  computed: {

   

    filterColor: function () {
      return this.colors.filter((color) => {
        return color.name.match(this.colorsearch.toLowerCase())
      })
    },

    filterddiscount: function () {
      return this.discounts.filter((discount) => {
        return discount.match(this.discountsearch.toLowerCase())
      })
    },

    filterprice: function () {
      return this.prices.filter((price) => {
        return price.name.match(this.pricesearch.toLowerCase())
      })
    },

    filterBrand: function () {
      return this.brands.filter((brand) => {
        return brand.name.toLowerCase().match(this.brandsearch.toLowerCase())
      })
    },
    	pages() {
			let _this = this;
      console.log(_this.pageSize )
			if (_this.pageSize == null || _this.listCount == null) return 0;
			return Math.ceil(_this.listCount / _this.pageSize);
		},
  },

  data() {
    return {
      bin: false,
      selectedSortedType: null,
      chip1: true,
      chip2: true,
      colorsearch: '',
      brandsearch: '',
      pricesearch: '',
      discountsearch: '',
      typevalue: '',
      mykey: '',
      brand: false,
      price: false,
      color: false,
      queryObj: [],
      params: [],
      select: '',
      items: this.$store.state.products.products,
      select: [],
      selectradio: '',
      toggleBgPrimaryDark: 0,
      page: 1,
			pageSize: "8",
      listCount: 0,
			
    
      


      // gender array

      gender: [
        {
          name: 'Men',
          mykey: 'men',
          typeValue: false,
          id: 1,
          gendertype: 'men',
        },

        {
          name: 'Women',
          mykey: 'women',
          typeValue: false,
          id: 2,
          gendertype: 'women',
        },

        {
          name: 'Boys',
          mykey: 'boys',
          typeValue: false,
          id: 3,
        },
        {
          name: 'Girls',
          mykey: 'girls',
          typeValue: false,
          id: 4,
        },
      ],

      //  checkbox array

      categories: ['Tshirts(58416)', 'Lounge Tshirts(733)'],

      //brands
      brands: [
        {
          name: 'Roadstar',
          typevalue: false,
          id: 1,
          mykey: 'brand',
          category: 'roadstar',
          len: this.$store.state.products.products.filter((item) => item.brand == "roadstar").length,
          
        },
        {
          name: 'WROGN',
          typevalue: false,
          id: 2,
          mykey: 'brand',
          category: 'wrogn',
          len: this.$store.state.products.products.filter((item) => item.brand == "wrogn").length
        },
        {
          name: 'Lakme',
          typevalue: false,
          id: 3,
          mykey: 'brand',
          category: 'Lakme',
          len: this.$store.state.products.products.filter((item) => item.brand == "Lakme").length
        },
        {
          name: 'Campus Sutra',
          typevalue: false,
          id: 4,
          mykey: 'brand',
          category: 'campus sutra',
          len: this.$store.state.products.products.filter((item) => item.brand == "campus sutra").length
        },
        {
          name: 'Maybelline',
          typevalue: false,
          id: 5,
          mykey: 'brand',
          category: 'Maybelline',
          len: this.$store.state.products.products.filter((item) => item.brand == "Maybelline").length
        },
        {
          name: 'Lotus Herbals',
          typevalue: false,
          id: 6,
          mykey: 'brand',
          category: 'Lotus Herbals',
          len: this.$store.state.products.products.filter((item) => item.brand == "Lotus Herbals").length
        },
        {
          name: 'Denver',
          typevalue: false,
          id: 7,
          mykey: 'brand',
          category: 'Denver',
          len: this.$store.state.products.products.filter((item) => item.brand == "Denver").length
        },
      ],

      //  prices
      prices: [
        {
          name: 'Rs. 149 to Rs. 1000',
          typevalue: false,
          id: 8,
          mykey: 'price',
          pricee: '111',
          lenn: this.$store.state.products.products.filter((item) => item.pricee == "111").length,
        },
        {
          name: 'Rs. 1111 to Rs. 4205',
          typevalue: false,
          id: 9,
          mykey: 'price',
          pricee: '1111',
          lenn: this.$store.state.products.products.filter((item) => item.pricee == "1111").length,
        },
        {
          name: 'Rs. 4205 to Rs. 6233',
          typevalue: false,
          id: 10,
          mykey: 'price',
          pricee: '2222',
          lenn: this.$store.state.products.products.filter((item) => item.pricee == "2222").length,
        },
        {
          name: 'Rs. 6233 to Rs. 8261',
          typevalue: false,
          id: 11,
          mykey: 'price',
          pricee: '3333',
          lenn: this.$store.state.products.products.filter((item) => item.pricee == "3333").length,
        },
      ],

      // colors
      colors: [
        {
          color: 'black',
          name: 'black',
          data: 'Black (8686)',
          typevalue: false,
          id: 12,
          mykey: 'colors',
          color: 'black',
          lennn:this.$store.state.products.products.filter((item) => item.color == "black").length
        },
        {
          color: 'grey lighten-3',
          name: 'white',
          data: 'White (7658)',
          typevalue: false,
          id: 13,
          mykey: 'colors',
          lennn:this.$store.state.products.products.filter((item) => item.color == "grey lighten-3").length
        },
        {
          color: 'brown',
          name: 'brown',
          data: 'Brown(200)',
          typevalue: false,
          id: 14,
          mykey: 'colors',
          lennn:this.$store.state.products.products.filter((item) => item.color == "brown").length
        },
        {
          color: 'green',
          name: 'green',
          data: 'Green(299)',
          typevalue: false,
          id: 15,
          mykey: 'colors',
          lennn:this.$store.state.products.products.filter((item) => item.color == "green").length
        },
        {
          color: 'yellow',
          name: 'yellow',
          data: 'Yellow(187)',
          typevalue: false,
          id: 16,
          mykey: 'colors',
          lennn:this.$store.state.products.products.filter((item) => item.color == "yellow").length
        },
        {
          color: 'orange',
          name: 'orange',
          data: 'Orange(278)',
          typevalue: false,
          id: 17,
          mykey: 'colors',
          lennn:this.$store.state.products.products.filter((item) => item.color == "orange").length
        },
        {
          color: 'lime',
          name: 'lime',
          data: 'Lime(271)',
          typevalue: false,
          id: 18,
          mykey: 'colors',
          lennn:this.$store.state.products.products.filter((item) => item.color == "lime").length
        },
      ],

      //  discounts
   
      discounts: [
        { title: '10', typevalue: false, mykey: 'discounts' },
        { title: '20', typevalue: false, mykey: 'discounts' },
        { title: '30', typevalue: false, mykey: 'discounts' },
        { title: '40', typevalue: false, mykey: 'discounts' },
        { title: '50', typevalue: false, mykey: 'discounts' },
        { title: '60', typevalue: false, mykey: 'discounts' },
        { title: '70', typevalue: false, mykey: 'discounts' },
        { title: '80', typevalue: false, mykey: 'discounts' },
        { title: '90', typevalue: false, mykey: 'discounts' },
      ],

      //  sorting name

      sorts: [
        'Whats New',
        'Popularity',
        'Better Discount',
        'Price:High-Low',
        'Price:Low-High',
        'Customer Rating',
        'denver',
      ],

      //pagination page sorter

      pagesort:[
               '4',
               '8',
               '12'
             ],

      //  bundles related
      single: [],

      values: [
        {
          values: 'option1',
          labels: 'label1',
          bin: false,
        },
        {
          values: 'option2',
          labels: 'label2',
          bin: false,
        },
        {
          values: 'option3',
          labels: 'label3',
          bin: false,
        },
      ],
      country: [
        {
          values: 'All Countries',
          labels: 'All Countries',
          bin: false,
        },
        {
          values: 'India',
          labels: 'india',
          bin: false,
        },
      ],

      collar: [
        {
          values: 'Band Collar',
          labels: 'Band collar',
          bin: false,
        },
        {
          values: 'Hood',
          labels: 'hood',
          bin: false,
        },
        {
          values: 'club collar',
          labels: 'club collar',
          bin: false,
        },
        {
          values: 'slim collar',
          labels: 'slim collar',
          bin: false,
        },
      ],
    }
  },

  created() {
    this.getProduct()
    let _this = this;
		_this.initPage();
		_this.updatePage(_this.page);
  },

  

  methods: {
    ...mapActions('Wishcart', ['wishToCart']),
    ...mapActions('Cart', ['addToCart']),
    ...mapActions('products', ['sortProduct']),
    ...mapActions('products', ['allproducts']),

    
    //  setPage(pageNumber) {
    //  this.currentPage = pageNumber
    // },
  

    

      

    //  checkbox filtering

    selected() {
      if (this.select.length > 0) {
        const item = []
        this.select.forEach((value) => {
          item.push(
            this.$store.state.products.products.filter(
              (item) =>
                item.brand == value ||
                item.color == value ||
                item.pricee == value
            )
          )
        })
        
        this.items = item.flat()
        
      } 
      else {

        this.items = this.$store.state.products.products
        this.updatePage(this.page);
      }
    },
    getProduct() {
      const srch =[]
     this.$store.state.products.products.filter(
       
        (product) => 
        {  
          
          if(product.title == this.$route.query.title)
          {
             srch.push(product)
              
                console.log(srch)
              this.items = srch
                  
                  //  console.log(this.items)
              return this.items
          }
          else{
           return this.$store.state.products.products
        }
        })
        
    },


        // page sorting

   	initPage: function() {
			let _this = this;
			_this.listCount = this.$store.state.products.products.length;
      
			if (_this.listCount < _this.pageSize) {
        
				_this.items = this.$store.state.products.products;
			} else {
				_this.items = this.$store.state.products.products.slice(0, _this.pageSize);
			}
		},
		updatePage: function(pageIndex) {
			let _this = this;
      
			let _start = (pageIndex - 1) * _this.pageSize;
			let _end = pageIndex * _this.pageSize;
			_this.items = this.$store.state.products.products.slice(_start, _end);
			_this.page = pageIndex;
		},



    

    sort(bin) {
      console.log(bin)
      this.single.push(bin)
    },
    remove(sing) {
      this.single.pop(sing)
      this.bin == false
    },

    sorted() {
      this.selectedSortedType = null
    },

    sortProducts(type) {
      this.$store.dispatch('products/sortProduct', type),
    
		// this.initPage();
		this.updatePage(this.page);
    },
  },
}
</script>
<style scoped>
.special-price {
  border: 1px solid red;
  width: 194px;
}
.special-price-label {
  font-size: 12px;
  background-color: red;
  padding: 7px 4px;
}
.bundle:hover {
  border-radius: 50px;
  background-color: aliceblue;
}
.checkbundle {
  width: 150px;
  border-radius: 30px;
}
.sorted {
  border: 1px solid black;
}
.onHoverBtn {
  background-color: white;
}
#checkboxLabel {
  color: black;
  font-size: 13px;
}
.line {
  text-decoration: line-through;
}
.clr_black {
  color: black;
}
.clr_red {
  color: #ff3f6c;
}
.grow:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.v-application .mt-n15 {
    margin-top: -170px !important;
}
.pagination-container {
    list-style: none;
    text-align: center;
    border-top: 1px solid #edebef;
    padding-top: 24px;
    padding-bottom: 60px;
    color: #282c3f;
}
.pagination-container .pagination-active {
    font-weight: 500;
    color: #fff;
    letter-spacing: .4px;
    border-radius: 2px;
   
    display: inline-block;
    margin-right: 13px;
    cursor: pointer;
    padding: 6px 10px;
    background-color: #535766 !important;
}
button.v-pagination__item.v-pagination__item--active.primary {
    background-color: #535766 !important;
}
button.v-pagination__item {
    color: #282c3f;
}
.pagination-paginationMeta{
  color: #535766;
    font-size: 14px;
    float: left;
    margin-top: 6px;
    margin-right: 10px;
    cursor: default;
    font-weight: 400;
    margin: 45px;
    
}
.v-application .primary{
  color:'white';
 
}

</style>