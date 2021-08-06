<template>
  <div>
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
            <h3>SELECT QUERY</h3>

            <v-divider vertical></v-divider>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Sidebar from './../components/contactus/sidebar.vue'
import Helpcenter from '~/components/contactus/helpcenter.vue'
export default {
  components: { Sidebar, Helpcenter },
}
</script>

<style>
.form {
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  padding: 2px;
  height: 65px;
}
.input {
  flex-grow: 2;
  border: none;
}
input:focus {
  outline: none;
}
.order {
  margin-top: 9px;
  margin-left: 190px;
}
</style>