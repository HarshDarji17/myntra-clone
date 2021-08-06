<template>
  <div>
    <v-row>
      <v-col cols="3">
        <!-- flatoffer -->
        <div v-for="(flatoff, i) in products.Flatoffer" :key="i">
          <v-img width="100%" class="ml-6" :src="flatoff.src"></v-img>
        </div>
      </v-col>

      <!-- menoffer -->
      <v-col cols="3" class="men">
        <div v-for="(menoff, i) in products.Menoffer" :key="i">
          <div>
            <v-img width="100%" :src="menoff.src"></v-img>
          </div>
        </div>
      </v-col>

      <!-- women offer -->
      <v-col cols="3" class="women">
        <div v-for="(womenoff, i) in products.Womenoffer" :key="i">
          <div>
            <v-img width="100%" :src="womenoff.src"></v-img>
          </div>
        </div>
      </v-col>

      <!-- price offer -->
      <v-col cols="3">
        <div v-for="(priceoff, i) in products.Priceoffer" :key="i">
          <v-img width="100%" class="price" :src="priceoff.src"></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        Flatoffer: [
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/454b1c93-ecd3-4778-bb3d-3d343251c8bd1625151724294-EORS_Home_DK-2_02.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/b46dfcb2-367f-4b41-810c-2a6f22e4e5051625151724283-EORS_Home_DK-2_06.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/10c95bb9-b2c0-44e1-a0b1-f3f0152eedd41625151724273-EORS_Home_DK-2_10.jpg',
            path: '',
          },
        ],
        Menoffer: [
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/ba594525-4b9c-4f87-9667-4f8c1539f2fb1625141712828-EORS_Home_DK-2_03--1-.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/c9ddcbc1-5d8d-4f22-8d8a-f1e36b3324621625141712812-EORS_Home_DK-2_07--1-.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/42d9d45a-57ac-4997-9815-dc8289cab4701625141712794-EORS_Home_DK-2_11--1-.jpg',
            path: '',
          },
        ],
        Womenoffer: [
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/6d172dfc-d90a-4e00-aad7-3260abbb463e1625141712820-EORS_Home_DK-2_04--1-.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/2bb20ca1-251d-44ae-9018-e4b5dbe6db961625141712804-EORS_Home_DK-2_08--1-.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/1/bb91a0a1-edc4-4765-b017-d8050c83fbd81625141712782-EORS_Home_DK-2_12--1-.jpg',
            path: '',
          },
        ],
        Priceoffer: [
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/30/1b1fd38e-0ffd-4d2c-8b20-1fd079c6aabb1625024947906-EORS_Home_DK_05.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/30/e4128398-2ff8-4ff6-9295-6d76e07909bb1625024947919-EORS_Home_DK_09.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/30/0eab8902-2aa3-46dd-bb39-edc090957a451625024947931-EORS_Home_DK_13.jpg',
            path: '',
          },
        ],
      },
    }
  },
}
</script>

<style>
.men {
  margin-right: -24px;
}
.women {
  margin-right: -50px;
}
.price {
  position: relative;
}
</style>