<template>
  <v-container>
    <div>
      <Helpcenter />
    </div>

    <div>
      <Sidebar />
    </div>
  </v-container>
</template>

<script>
import Helpcenter from '~/components/contactus/helpcenter.vue'
import Sidebar from '~/components/contactus/sidebar.vue'

export default {
  components: { Sidebar, Helpcenter },
}
</script>

<style>
</style>