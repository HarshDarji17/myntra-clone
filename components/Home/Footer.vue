<template>
  <v-container>
    <v-row>
      <div class="ml-3">
        <v-col>
          <h3 class="subtitle-1 font-weight-bold pb-3">ONLINE SHOPPING</h3>
          <div v-for="(item, i) in footerLinks.shopping" :key="i">
            <nuxt-link :to="item.link" class="shopping">{{
              item.title
            }}</nuxt-link>
          </div>
        </v-col>
      </div>

      <div>
        <v-col>
          <h3 class="subtitle-1 font-weight-bold pb-3 mr-15">USEFUL LINKS</h3>
          <div v-for="(item, i) in footerLinks.customerService" :key="i">
            <nuxt-link :to="item.link" class="useful">{{
              item.title
            }}</nuxt-link>
          </div>
        </v-col>
      </div>

      <!-- third  -->

      <v-col>
        <h5 class="pb-5">EXPERINCE MYNTRA APP ON MOBILE</h5>

        <div class="d-flex justify-space-between mb-6">
          <v-img
            flat
            height="50px"
            width="80px"
            src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
          ></v-img>

          <v-img
            height="50px"
            width="40px"
            src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
          ></v-img>
        </div>

        <h5 class="mt-5">kEEP IN TOUCH</h5>

        <v-card-text>
          <v-btn class="sample" v-for="icon in icons" :key="icon" icon>
            <v-icon class="flex-row" size="25px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-col>

      <!-- fourth -->

      <v-col>
        <div class="d-flex justify-space-between mb-6">
          <div>
            <v-img
              width="55"
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
            ></v-img>
          </div>

          <div>
            <p><b>100% ORIGINAL guarantee</b> for all products at myntra.com</p>
          </div>
        </div>

        <!-- ----------------------------------- -->

        <div class="d-flex justify-space-between mb-6">
          <div>
            <v-img
              width="55px"
              src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
            ></v-img>
          </div>

          <div>
            <p><b>100% ORIGINAL guarantee</b> for all products at myntra.com</p>
          </div>
        </div>

        <!-- ------------------------------------------- -->

        <div class="d-flex justify-space-between mb-6">
          <div>
            <v-img
              width="55"
              src="https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png"
            ></v-img>
          </div>

          <div>
            <p><b>100% ORIGINAL guarantee</b> for all products at myntra.com</p>
          </div>
        </div>

        <!-- ------------------------------------------ -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: {
        shopping: [
          {
            title: 'Men',
            link: '/men',
          },
          {
            tile: 'Women',
            link: '/women',
          },
          {
            title: 'Kids',
            link: '/kids',
          },
          {
            title: 'Home&Living',
            link: '/homeliving',
          },
          {
            title: 'Beauty',
            link: '/beauty',
          },
          {
            title: 'Gift Cards',
            link: '/giftcard',
          },
          {
            title: 'Myntra Insider',
            link: '/myntrainsider',
          },
        ],
        customerService: [
          {
            title: 'Contact Us',
            link: '/contactus',
          },
          {
            title: 'FAQ',
            link: '/faq',
          },
          {
            title: 'T&C',
            link: '/t&c',
          },
          {
            title: 'Terms Of Use',
            link: '/termofuse',
          },
          {
            title: 'Track Orders',
            link: '/trackorders',
          },
          {
            title: 'Shipping',
            link: 'shipping',
          },
          {
            title: 'Cancellation',
            link: '/cancellation',
          },
          {
            title: 'Returns',
            link: '/returns',
          },
          {
            title: 'Whitehat',
            link: '/whitehat',
          },
          {
            title: 'Blog',
            link: '/blog',
          },
          {
            title: 'Careers',
            link: '/careers',
          },
          {
            title: 'Privacy policy',
            link: '/privacy policy',
          },
          {
            title: 'Site Map',
            link: '/sitemap',
          },
        ],
      },
      icons: ['mdi-facebook', 'mdi-instagram', 'mdi-twitter', 'mdi-youtube'],
      card: [
        'https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png',
        'https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png',
        'https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png',
      ],
    }
  },
}
</script>
<style scoped>
.sample {
  margin-left: -13px;
  margin-top: -5px;
  margin-right: 10px;
}
.useful{
  
  line-height: normal;
  padding-bottom: 5px;
  font-size: 15px;
      color: #696b79;
}
.shopping{
   line-height: normal;
  padding-bottom: 5px;
  font-size: 15px;
      color: #696b79;

}
</style>