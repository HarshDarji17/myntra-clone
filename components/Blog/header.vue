<template>
  <v-toolbar height="95" class="collapse navbar-collapse" elevate-on-scroll>
    <!-- logo -->
    <nuxt-link to="/">
      <v-img
        class="logo ml-15"
        width="150"
        src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/Myntra-logo-horizontal.png"
      ></v-img>
    </nuxt-link>

    <v-spacer></v-spacer>

    <div class="tool" v-for="(link, i) in links" :key="i">
      <nuxt-link class="onhover linktext1" :to="'/' + link.link">
        {{ link.linktitle }}</nuxt-link
      >
    </div>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          linktitle: 'About',
          link: '/about',
        },
        {
          linktitle: 'Careers',
          link: '/careers',
        },
        {
          linktitle: 'Culture',
          link: '/culture',
        },
        {
          linktitle: 'Stories',
          link: 'stories',
        },
        {
          linktitle: 'Tech',
          link: '/tech',
        },
      ],
    }
  },
}
</script>

<style>
.v-application a {
  color: black;
}
.v-application a:hover {
  color: #ff3f6c;
}

.tool {
  margin: 0 2.1em;
}
</style>