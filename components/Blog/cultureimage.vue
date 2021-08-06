<template>
  <div>
    <v-toolbar height="30%" flat prominent>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          background-color="transparent"
          color="basil"
          centered
        >
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card color="basil" flat>
          <All />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <All />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <All />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Home from '../Blog/home.vue'
import All from '../Blog/all.vue'
export default {
  components: { Home, All },
  data() {
    return {
      tabs: null,
      items: ['All', 'Culture', 'Workplace', 'Events', 'Inclusion'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #d1175e !important;
}
</style>