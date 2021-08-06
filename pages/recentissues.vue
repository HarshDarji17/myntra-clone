<template>
  <v-app>
    <div>
      <Helpcenter />
    </div>

    <v-container>
      <v-layout>
        <v-flex md3 class="d-none d-lg-flex d-xl-flex">
          <Sidebar />
        </v-flex>
        <v-divider vertical></v-divider>
        <v-flex md9 class="ma-10">
          <v-card>
            <v-row>
              <v-col class="ml-5 mt-10 col-sm-9">
                Quaries from <b>2021 April</b>
              </v-col>

              <v-divider vertical></v-divider>

              <v-col class="ml-5 mt-10">
                <v-btn class="red"> CHANGE</v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-avatar
                color="light-blue lighten-4"
                width="135px"
                height="119px"
                class="mx-auto mt-15 mb-15"
              >
                <span class="white--text text-h5"></span>
              </v-avatar>
            </v-row>

            <div class="text-center mb-15">
              <h2>No queries found</h2>

              <p class="Subtitle 1 mt-15">
                There were no quires raised in <b>2021 April</b>
              </p>
            </div>

            <div class="text-center mb-15">
              <h5 class="Subtitle 1 mt-5 mb-5">
                Search queries from Different dates
                <span class="font-weight-bold red--text">Different dates</span>
              </h5>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Sidebar from './../components/contactus/sidebar.vue'
import Helpcenter from '~/components/contactus/helpcenter.vue'
export default {
  components: { Sidebar, Helpcenter },
}
</script>

<style>
</style>