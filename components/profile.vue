<template>
  <div>
    <v-icon class="pt-9 mr-7" x-large>mdi-account </v-icon>
    <strong class="profile black--text d-flex mr-10 pt-5">
      <b>Profile</b>
    </strong>

    <!-- link -->
    <div v-for="(link, index) in links" :key="index">
      <v-menu rounded="0" open-on-hover offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            tile
            height="50"
            class="onHoverBtn"
            v-on="on"
          >
          </v-btn>
        </template>

        <!-- sublink -->
        <v-card max-width="250" flat tile class="grey lighten-5">
          <v-row no-gutters class="pl-3 pr-3">
            <div class="text-left">
              <p>Welcome</p>
              <span>To access account and manage orders</span>
              <hr />
            </div>
            <div>
              <v-btn class="mt-5 mb-5">
                <nuxt-link to="/login">LOGIN/SIGNUP</nuxt-link>
              </v-btn>
            </div>
            <v-divided></v-divided>
            <v-col
              v-for="(item, i) in subCategoryLinks[link.link]"
              :key="i"
              cols="7"
              class="text-left"
            >
              <v-btn text tile>
                <nuxt-link
                  :to="'/' + link.link + '/' + item.link"
                  class="black--text body-2"
                >
                  {{ item }}
                </nuxt-link>
              </v-btn>
              <!-- </div> -->
            </v-col>
          </v-row>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Profile',
          link: 'profile',
        },
      ],
      subCategoryLinks: {
        profile: ['orders', 'wishlist', 'Gift Cards', 'Contact Us'],
      },
    }
  },
}
</script>

<style>
.onHoverBtn {
  font-weight: 490;
  background-color: transparent;
  border-bottom-color: #ee5f73;
}
.profile {
  font-weight: bold;
  text-transform: lowercase;
  background-color: transparent;
  border-bottom-color: #ee5f73;
}
</style>