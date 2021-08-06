<template>
  <div class="ml-10">
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
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/d7375b79-37d6-4ecc-a91b-8886ac383bbc1620898381088-Home_DK_02.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/66aa08b3-a75d-4625-83cf-4fa8b33f291c1620898381115-Home_DK_06.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/2e2d0243-0e8e-4e0d-9454-27995e6c92671620898381140-Home_DK_10.jpg',
            path: '',
          },
        ],
        Menoffer: [
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/111f50a0-f236-46e0-9071-84c9765418071622269048175-May-End-Epic-Fashion_03-10.59.50-AM.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/3d589dcf-0a69-410d-9423-91d2fbd9cf421622269048189-May-End-Epic-Fashion_07-10.59.50-AM.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/b4c27fce-d6cb-42a1-a311-5a648a6f1e741622269048201-May-End-Epic-Fashion_11-10.59.50-AM.jpg',
            path: '',
          },
        ],
        Womenoffer: [
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/a44776d8-983a-4cab-94a4-1c8e4ee390f21622269048181-May-End-Epic-Fashion_04-10.59.50-AM.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/593bf854-a69f-4f3a-ba86-bdeb4c6c32641622269048196-May-End-Epic-Fashion_08-10.59.50-AM.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/d36f19ef-5f36-45a3-bbb9-c45fdce63d201622269048209-May-End-Epic-Fashion_12-10.59.50-AM.jpg',
            path: '',
          },
        ],
        Priceoffer: [
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/8c53cef2-5ae5-496f-89f6-30d8760f1a3e1620898381101-Home_DK_05.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/5f11f82b-76e7-422f-b10c-364310ae76061620898381127-Home_DK_09.jpg',
            path: '',
          },
          {
            src: 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/06ce3023-cc50-40aa-b968-973ebb3ac2041620898381153-Home_DK_13.jpg',
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
  margin-right: -25px;
}
.women {
  margin-right: -50px;
}
.price {
  margin-left: 26px;
}
</style>