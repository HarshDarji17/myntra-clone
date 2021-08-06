<template>
  <div class="mx-2">
    <div class="body-2">
      <nuxt-link to="/" class="text-decoration-none">Home</nuxt-link> /
      <nuxt-link
        class="text-decoration-none text-capitalize"
        :to="categoryName"
        >{{ categoryName }}</nuxt-link
      >
    </div>

    
  </div>
</template>

<script>
export default {
  // heading title
  head() {
    return {
      title: 'products',
    }
  },
  
  data() {
    return {
      categoryName: this.$route.params.category,
    }
  },
}
</script>

<style>
.filter {
  border: 1px solid #eaeaec;
}
</style>