<template>
  <v-app>
     <Header />
     <Nuxt />
     <Footer />
  </v-app>
</template>

<script>
import Header from '../components/careers/header.vue'
import Footer from '../components/careers/footer.vue'
export default {
  components: { Header , Footer },

}
</script>

<style>

</style>