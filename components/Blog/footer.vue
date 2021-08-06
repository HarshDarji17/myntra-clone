<template>
  <v-container>
    <v-row>
      <v-col class="col-sm-4">
        <div>
          <nuxt-link to="/">
            <v-img
              class="logo ml-15"
              width="150"
              src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/Myntra-logo-horizontal.png"
            ></v-img>
          </nuxt-link>

          <img
            class="ml-15 mt-7"
            width="23"
            src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/location.svg"
          />
          <span>Bengaluru(HQ)</span>
          <v-divider vertical> </v-divider>
          <span>Gurgaon</span>
          <v-divider vertical> </v-divider>
          <span>Mumbai</span>

          <v-btn
            class="mx-1 ml-7 mt-5"
            v-for="(icon, i) in icons"
            :key="i"
            icon
          >
            <v-icon class="flex-row onHoverBtn" size="30px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-col>

      <div class="img_foot">
        <v-col>
          <n-link to="link.link" class="d-flex flex-row">
            <div
              v-for="(link, i) in links"
              :key="i"
              color="white"
              text
              rounded
              class="my-1 mx-9"
            >
              <b> {{ link.title }}</b>
            </div>
          </n-link>
        </v-col>

        <p class="text-center mt-5">
          <strong>Myntra</strong> is proud to be an Equal Opportunity Employer
        </p>

        <p class="caption text-center">
          © 2019 www.mynta.com. All rights reserved.
        </p>
      </div>

      <!-- go to top -->
      <v-main>
        <v-fab-transition>
          <v-btn
            color="pink"
            fixed
            dark
            bottom
            right
            fab
            @click="
              $vuetify.goTo(0, {
                easing: 'easeInCubic',
                duration: '2000',
              })
            "
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-main>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'mdi-linkedin',
        'mdi-facebook',
        'mdi-youtube',
        'mdi-instagram',
        'mdi-twitter',
      ],
      links: [
        {
          title: 'Contact',
          link: '',
        },
        {
          title: 'Shop',
          link: '',
        },
        {
          title: 'Careers',
          link: '',
        },
        {
          title: 'Privacy Policy',
          link: '',
        },
        {
          title: 'Terms & Condition',
          link: '',
        },
      ],
    }
  },
}
</script>

<style>
.img_foot {
  background: url('https://blog.myntra.com/wp-content/themes/myntra/assets/img/footer-pattern.svg')
    0 0 repeat;
}
.onHoverBtn:hover {
  background-color: rgb(238, 216, 223);
}
</style>