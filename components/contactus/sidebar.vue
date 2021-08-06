<template>
  <div>
    <div v-for="(link, i) in links" :key="i" class="mx-5 my-8">
      <n-link :to="link.link" class="text-decoration-none green--text">{{
        link.title
      }}</n-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Order Related Queries', link: '/oneorderquery' },
        { title: 'Non-Order Related Issues', link: '/nonorder' },
        {
          title: 'Recent  Issues',
          link: '/recentissues',
        },
      ],
    }
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  font-weight: 600;
}
a {
  font-size: 18px;
}
a:hover {
  font-size: 18px;
  font-weight: 600;
}
</style>
