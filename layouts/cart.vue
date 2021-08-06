<template>
  <v-app>
    <div>
      <Cartnav />
    </div>

    <v-main>
      <Nuxt />
    </v-main>

    <div class="mt-15">
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Footer from '../components/footer.vue'
import Cartnav from '~/components/cartnav.vue'
export default {
  components: { Cartnav, Footer },
}
</script>

<style>
</style>