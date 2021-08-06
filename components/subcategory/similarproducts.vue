<template>
  <div>
    <div class="ml-10 mr-10">
      <v-container>
        <v-row no-gutters>
          <v-col class="px-3" cols="3" v-for="(item, i) in cardData" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card
                max-width="100%"
                height="auto"
                :elevation="hover ? 10 : 0"
              >
                <!-- <nuxt-link to="/item.path"> -->
                <v-img :src="item.src" height="380"> </v-img>
                <v-btn color="green" x-small>
                  {{ item.rating }} <v-icon small>mdi-star</v-icon></v-btn
                >
                <v-divider></v-divider>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-text>{{ item.detals }}</v-text>
                <p class="black--text mx-2 title my-1">
                  {{ item.specialprice }}
                  <span
                    class="
                      grey--text
                      subtitle-2
                      pl-2
                      text-decoration-line-through
                      font-weight-light
                    "
                  >
                    <!-- main price -->
                    {{ item.price }}
                  </span>

                  <span
                    class="orange--text px-2 subtitle-2 font-weight-medium mb-1"
                  >
                    {{ item.offer }}
                  </span>
                </p>
                <!-- </nuxt-link> -->
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardData: [
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/1963241/2020/10/19/c4d70c48-e86a-41b3-b17a-48a41d9591581603102560769-Maybelline-New-York-Colossal-Kajal---Black-035g-885160310255-1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Personal Care/Neutrogena',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/10848910/2019/12/4/0bbe659a-41d9-4697-8dab-4b94d7fb748a1575450488984MaybellineHyperGlossyBlackLiquidLiner3g1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Accessories/Headphones',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/620420/2018/7/31/25e69cc6-65ea-4fca-8a85-2e84d82a356f1533035141364-Maybelline-The-Colossal-Black-Eyeliner-21533035141314-1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Accessories For Women & Men',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/1967184/2018/4/9/11523275170012-Maybelline-EYESTUDIO-Blackest-Black-Dramatic-Gel-Eyeliner-950-1301523275169972-1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Clothing/Women Clothing/Womenswearcollectivewfhcuration',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/55269/2021/3/24/2a8ba3df-cca2-4f48-ab17-8cd307538c621616563309201-Lakme-Absolute-Shine-Line-Eye-Liner---Black-3261616563308869-1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Clothing/Jack & Jones Store',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/11629082/2020/4/17/09540356-4d63-4c69-9767-e140bf455a951587127536678-Lakme-Insta-Liner---Black-9ml-1911587127536433-1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Clothing/Jack & Jones Store',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/5660739/2018/7/31/eb7fa5d2-3271-4b24-acdd-ffedf3d01f441533035388295-Maybelline-New-York-Colossal-Super-Black-Kajal--2661533035388196-1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Clothing/Jack & Jones Store',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/11178488/2020/1/13/4f384eb6-3ce7-4921-b214-332c1908379e1578907834545-Maybelline-New-York-Black-Line-Tattoo-High-Impact-Liner--386-1.jpg',
          rating: '4.4',
          title: 'Maybelline',
          detals: 'Colossal kajal -Black',
          specialprice: 'Rs.162',
          price: 'Rs.180',
          offer: '(10% off)',
          path: '/Clothing/Jack & Jones Store',
        },
      ],
    }
  },
}
</script>

<style>
</style>