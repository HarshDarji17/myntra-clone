<template>
  <div class="mt-5 mx-2">
    <div>
      <ref />
    </div>

    <div>
      <p><b>Men T-Shirts</b> - 59203 items</p>
    </div>
    <div class="d-flex">
      <div>
        <p><b>FILTERS</b></p>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-select :items="filter" dense flat clearable outlined color="black">
          <template v-slot:label>
            <span id="checkboxLabel">SortBy <b>Recommended </b> </span>
          </template>
        </v-select>
      </div>
    </div>
    <v-divider class="mt-n3"></v-divider>
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
              :value="brand.title"
              class="mt-n5"
              color="#ff3f6c"
               @click="selected()"
            >
              <template v-slot:label>
                
                <span class="mx-2" id="checkboxLabel">{{ brand.name }}</span>
              </template>
            </v-checkbox>
          </div>




              
          
          <div>
            <div class="d-flex my-3">
              <p><b>DISCOUNT RANGE</b></p>
            </div>
            <v-checkbox
              v-for="(price, index) in prices"
              :key="index"
              dense
              class="mt-n5"
              color="#ff3f6c"
            >
              <template v-slot:label>
                <span id="checkboxLabel">{{ price }}</span>
              </template>
            </v-checkbox>
          </div>
          <div>
            <div class="d-flex my-3">
              <p>  <v-text-field
                   
                      solo
                      flat
                      v-model="search"
                      dense
                      class="mt-n1"
                      placeholder="Search for color"
                      rounded
                      background-color="grey lighten-3"
                    >
                    </v-text-field></p>
              <v-spacer></v-spacer>
              <p>
                <v-icon>mdi-magnify</v-icon>
              </p>
            </div>

            <v-checkbox
              v-for="(color, index) in filterColor"
              :key="index"
              dense
              class="mt-n5"
              color="#ff3f6c"
            >
              <template v-slot:label>
                <span id="checkboxLabel"
                  ><v-avatar :color="color.color" size="14"></v-avatar
                ></span>
                <span class="mx-2" id="checkboxLabel">{{ color.data }}</span>
              </template>
            </v-checkbox>
          </div>
          <v-divider></v-divider>
          <div>
            <div class="d-flex my-3">
              <p><b>DISCOUNT RANGE</b></p>
            </div>
            <v-checkbox
              v-for="(discount, index) in discounts"
              :key="index"
              dense
              class="mt-n5 red--text"
              color="#ff3f6c"
            >
              <template v-slot:label>
                <span id="checkboxLabel">{{ discount }}% and above</span>
              </template>
            </v-checkbox>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-n6 px-8">
          <v-divider vertical></v-divider>
        </v-col>
      </v-row>
      <v-row>

        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="3"
          class="d-flex child-flex pa-8 grow "
          v-on:mouseover="act(item.id)"
        >
          <div class="flex-column">
            <div>
              <nuxt-link to="/">
                <v-img :src="item.src" max-width="290"></v-img>
              </nuxt-link>
            </div>

            <div v-if="active && item.id == active_id">
              <v-btn
                class="mt-2"
                outlined
                block
                color="grey lighten-1"
                v-on:click="hello()"
              >
                <v-icon color="gray">mdi-heart-outline</v-icon>
                &nbsp;<span class="clr_black">WISHLIST</span>
              </v-btn>
              <div class="px-4">
                <span>Sizes:S,M,L,XL,XXL</span>
              </div>
            </div>
            <div class="flex-column px-4 pt-2">
              <b>{{ item.title }}</b>
              <br />
              <small>{{ item.subTitle.slice(0, 35) }}...</small>
              <br />
              <small
                ><b> Rs.{{ item.originalPrice }}</b></small
              >
              <small class="line">Rs.{{ item.dupPrice }}</small>
              <small class="clr_red">({{ item.off }}%OFF)</small>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
// import ref from '@/components/ref'
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('products', ['products']),
  filterColor: function () {
      return this.colors.filter((color) => {
        return color.name.match(this.search.toLowerCase())
      })
    },
     filterBrand: function () {
      return this.brands.filter((brand) => {
        return brand.name.match(this.brandsearch.toLowerCase())
      })
    },
  },
  methods: {

     selected() {
      if (this.select.length > 0) {
        const item = []
        this.select.forEach((value) => {
              console.log(value)
          item.push(
            this.$store.state.products.products.filter(
              (item) => item.brand == value
                 
            )
            
          )
          
        })

        this.items = item.flat()
        console.log(this.items)
        
      } else {
        this.items = this.$store.state.products.products
      }
    },


    act(id) {
      this.active = true
      this.active_id = id
    },

    hello() {
      console.log('hii')
    },
  },

  data() {
    return {
      active: false,
      search: '',
      select:'',
      brand:'',
      items: this.$store.state.products.products,
      select: [],
      brandsearch:'',

      active_id: '',
      filter: [
        'Whats NEw',
        'Popularity',
        'Better Discount',
        'Price:High to Low',
        'Price:Low to High',
        'Customar Rating',
      ],
      categories: ['Tshirts(58416)', 'Lounge Tshirts(733)'],
      brands: [
        { name: 'Roadster(3712)' , title: ''},
        { name: 'WROGN(1231)'  , title:''},
        { name: 'Free Authority(1200)', title:'' }, ,
        { name: 'QUANCIOUS(1158)' , title:''},
        { name: 'Puma(1039)' , title:'' },
        { name: 'Jack & Jones(1021)' , title:'' },
        { name: 'Denver(899)'  , title:'Denver'},
      ],
      prices: [
        'Rs. 149 to Rs. 2177(58236)',
        'Rs. 2177 to Rs. 4205(760)',
        'Rs. 4205 to Rs. 6233(147)',
        'Rs. 6233 to Rs. 8261(5)',
      ],
      colors: [
        { color: 'black', name: 'black', data: 'Black (8686)' },
        {
          color: 'grey lighten-3',
          name: 'white',
          data: 'White (7658)',
        },
        { color: 'brown', name: 'brown', data: 'Brown(200)' },
        { color: 'green', name: 'green', data: 'Green(299)' },
        { color: 'yellow', name: 'yellow', data: 'Yellow(187)' },
        { color: 'orange', name: 'orange', data: 'Orange(278)' },
        { color: 'lime', name: 'lime', data: 'Lime(271)' },
      ],
      discounts: [10, 20, 30, 40, 50, 60, 70, 80, 90],
    }
  },
}
</script>
<style scoped>
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
  /* -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8); */
   transform: scale(1); 
   box-shadow: inset 0 0 0 25px #53a7ea; 
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>