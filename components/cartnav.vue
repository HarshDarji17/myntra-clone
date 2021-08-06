<template>
  <div>
    <v-toolbar height="95" flat tile>
      <!-- logo -->
      <nuxt-link to="/">
        <v-img
          class="logo"
          width="100"
          src="https://images.indianexpress.com/2021/01/myntra.png"
        ></v-img>
      </nuxt-link>

      <v-spacer></v-spacer>
      <v-card flat tile>
        <v-stepper v-model="e1" flat tile>
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
              class="green--text"
              dark
              color="green"
            >
              Bag
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
              class="green--text"
              dark
              color="green"
            >
              Address
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" class="green--text" dark color="green">
              Payment
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items> </v-stepper-items>
        </v-stepper>
      </v-card>

      <v-spacer></v-spacer>
      <div class="d-flex ml-10 mt-5">
        <v-img
          src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          width="30px"
          height="40px"
        ></v-img>
        <p class="grey--text d-flex mt-2">100 % SECURE</p>
      </div>
    </v-toolbar>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    }
  },
}
</script>

<style>
.guide {
  margin-bottom: -10px;
}
</style>