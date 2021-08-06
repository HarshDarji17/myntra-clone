<template>
  <div class="mx-2">
    <div class="body-2 ml-11">
      <nuxt-link to="/" class="text-decoration-none grey--text">Home</nuxt-link>
      /
      <nuxt-link
        class="text-decoration-none text-capitalize grey--text"
        :to="categoryName"
        >{{ categoryName }}</nuxt-link
      >/
      <nuxt-link
        class="text-decoration-none text-capitalize black--text"
        :to="subcategoryName"
        >{{ subcategoryName }}</nuxt-link
      >/
    </div>
    <div>
      <h3 class="items mt-3 ml-11">
        {{ $route.params.subCategory }}
        <span class="body-1 itemspan"> - 1111 items</span>
      </h3>
    </div>

    <nuxt-child />

    <v-row class="mt-3" no-gutters>

          <Productcards />
           
      
    </v-row>
  </div>
</template>

<script>

import Productcards from '../../../components/subcategory/ProductCards.vue'
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: 'products',
    }
  },
  components: {  Productcards },
  data() {
    return {
      categoryName: this.$route.params.category,
      subcategoryName: this.$route.params.subCategory,
    }
  },
}
</script>

<style>
.items {
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #282c3f;
  max-width: 400px;
  text-transform: capitalize;
}
.itemspan {
  color: #878b94;
  white-space: pre-wrap;
}
</style>