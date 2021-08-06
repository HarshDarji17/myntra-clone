<template>
  <div>
    <v-text-field
      label="search for products,brands & more"
      v-model="model"
      solo
      class="pt-7 pr-10"
      flat
      prepend-inner-icon="mdi-magnify"
      background-color="grey lighten-3"
      dense
      @input="abcd()"
    >
    </v-text-field>

    <v-list class="desktop-autoSuggest desktop-showContent">
      <v-list-item
        class="desktop-group desktop-suggestionTitle"
        v-for="(item, index) in searchedProducts"
        :key="index"
      >
        <n-link :to="`/${item.category}/${item.subCategory}`">
          <!-- <v-img :src="product.src"></v-img> -->

          <!-- <v-list-item-avatar>
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar> -->
          <h6 class="black--text" align="center">{{ item.title }}</h6>
        </n-link>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      model: '',
      product: '',
      searchedProducts: [],
      computed: {
        ...mapGetters('products', ['getProducts']),
      },
    }
  },

  mounted() {
    this.prod = this.$store.state.products.products
    // console.log(this.prod)
  },

  methods: {
    abcd() {
      if (this.model != '') {
        this.searchedProducts = []
        console.log(this.products)
        console.log(this.searchedProducts)
        this.prod.forEach((item) => {
          console.log(item.title.toLowerCase())
          console.log(this.model)
          // console.log( this.item.title.toLowerCase().split(' ').every(v => this.model.toLowerCase().includes(v)))
          console.log(
            item.title.toLowerCase().includes(this.model.toLowerCase())
          )
          //   console.log(this.model.toLowerCase()==item.title.toLowerCase())
          if (item.title.toLowerCase().includes(this.model.toLowerCase())) {
            this.searchedProducts.push(item)
          }
        })
      }
      console.log(this.searchedProducts)
    },
  },
}
</script>

<style>
</style>