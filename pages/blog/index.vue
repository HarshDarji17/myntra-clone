<template>
  <div>
    <div>
      <Baner />
    </div>

    <div class="mt-15">
      <Newsletter />
    </div>
  </div>
</template>

<script>
import Baner from '../../components/Blog/baner.vue'
import Newsletter from '../../components/Blog/newsletter.vue'

export default {
  components: { Baner, Newsletter },
  layout: 'blog',
}
</script>

<style>
</style>