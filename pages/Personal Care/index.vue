<template>
  <v-app>
    <div class="mx-2">
      <div>
        <!-- <v-breadcrumbs :items="items"></v-breadcrumbs> -->
        <v-responsive
          class="teal accent-3 position-absolute text-center"
          id="responsive"
        >
          <span class="white--text"
            >- As per guidelines, we are only delivering essentials in
            govt-specified pincodes -</span
          >
        </v-responsive>

        <v-breadcrumbs :items="items" large></v-breadcrumbs>

        <br /><br />
        <h3>Personal Care- <span> 20276 items</span></h3>
      </div>

      <v-row class="mt-3" no-gutters>
        <v-col cols="3" no-gutters>
          <h2 class="ml-5">Filters</h2>
          <v-divider></v-divider>

          <div class="ml-3 mt-3">
            <!-- <Genderfilter />
        <Categoriesfilter />
        <Brandfilter />
        <Pricefilter />
        <Colorfilter />
        <DiscountFilter /> -->
          </div>
        </v-col>
        <v-col>
          <!-- <Productcards /> -->
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
// import Brandfilter from '../../components/subcategory/FilttersPage/Brandfilter.vue'
// import Categoriesfilter from '../../components/subcategory/FilttersPage/Categoriesfilter.vue'
// import Colorfilter from '../../components/subcategory/FilttersPage/Colorfilter.vue'
// import DiscountFilter from '../../components/subcategory/FilttersPage/Discountfilter'
// import Genderfilter from '../../components/subcategory/FilttersPage/genderfilter.vue'
// import Pricefilter from '../../components/subcategory/FilttersPage/Pricefilter.vue'
// import Productcards from '../../components/subcategory/ProductCards.vue'

export default {
  // components: { Genderfilter, Brandfilter, Categoriesfilter, Pricefilter,Productcards, Colorfilter, DiscountFilter},

  data() {
    return {
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Personal Care',
          disabled: true,
          href: '/Personal Care',
        },
        // {
        //   text: 'Women Personal Care',
        //   disabled: false ,
        //   href: '/Personal Care/Women Personal Care',
        // },
        // {
        //   text: 'Kajal And Eyeliner',
        //   disabled: false,
        //   href: '/Personal Care/Women Personal Care/Kajal And Eyeliner',
        // },
      ],
    }
  },
}
</script>
<style scoped>
</style>