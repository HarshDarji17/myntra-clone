<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
         color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-toolbar-title>
          <nuxt-link to="link">
            <v-img
              class="logo ml-15"
              width="150"
              src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/Myntra-logo-horizontal.png"
            ></v-img>
          </nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div v-for="(link, i) in links" :key="i">
          <v-btn text tile class="pink--text">
            <nuxt-link :to="'/' + link.link">{{ link.linktitle }}</nuxt-link>
          </v-btn>
        </div>
      </v-app-bar>

      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
      >
      <div style="height: 900px;">
        <v-main>
          <Nuxt />
        </v-main>

        <div class="mt-15">
          <Footer />
        </div>
      </div>  
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
// import Header from '../components/Blog/header.vue'
import Footer from '../components/Blog/footer.vue'

export default {
  head() {
    return {
      title: 'blog',
    }
  },
  components: { Footer },
  data() {
    return {

      links: [
        {
          linktitle: 'About',
          link: 'blog/about',
        },
        {
          linktitle: 'Inclusion',
          link: 'blog/inclusion',
        },
        {
          linktitle: 'Careers',
          link: 'blog/careers',
        },
        {
          linktitle: 'Culture',
          link: 'blog/culture',
        },
        {
          linktitle: 'Stories',
          link: 'blog/about',
        },
        {
          linktitle: 'Tech',
          link: '/tech',
        },
      ],
    }
  },

  mounted: function() {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = 'hidden'
  },
  destroyed: function() {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = null
  }
}
</script>
<style scoped>
.header-top {
  width: 100%;
}
.header-top,
.navbar {
  transition: all 0.3s;
}
.header-top,
.select_wrap .overlay {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: aliceblue;
}

</style>
