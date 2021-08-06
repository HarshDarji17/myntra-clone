<template>
  <v-app>
    <div class="fixed-bar">
      <Navbar />
    </div>

    <v-main>
      <Nuxt />
    </v-main>

    <div class="mt-10 mr-15 ml-15">
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Navbar from './../components/Home/navbar'
import Footer from './../components/Home/Footer'
export default {
  components: { Navbar, Footer },
}
</script>
<style>
a {
  text-decoration: none;
}
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 0em;
  z-index: 2;
  margin-bottom: 20px;
}

</style>