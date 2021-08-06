<template>
  <div>
    <p>
      <v-img
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/39146519-6d49-4bea-805e-732c3779a6bf1622110825641-Deal-Carousel.gif"
      >
      </v-img>
    </p>
    <div class="mb-15 ml-15 mr-15">
      <v-row no-gutters>
        <v-col class="px-1" v-for="(item, i) in cardData" :key="i">
          <v-card height="380" width="220" tile flat :to="item.path">
            <n-link :to="`/${item.category}/${item.subcategory}`">
              <v-img :src="item.src" height="360px"> </v-img>
            </n-link>
          </v-card>
        </v-col>
      </v-row>
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
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/bd1ea793-7c69-46e8-8aca-19643e4a8eea1621945430797-Maybelline.jpg',
          category: 'Women',
          subcategory: 'Maybelline',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/b01d31d4-a5e9-42b1-a87d-d17b607a964c1622126672553-wireless_earphones.jpg',
          category: 'Accessories',
          subcategory: 'wireless_earphones',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/15232eff-9f0b-4439-9c15-700f3097f6f61622126672541-Premium-Handbags.jpg',
          category: 'Women',
          subcategory: 'Premium-Handbags',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/3ba775e1-a586-41ac-86fb-087757c036241622126672519-Indian-casual-----1.jpg',
          category: 'Women',
          subcategory: 'Indian Casual Wear',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/79ba9aac-9cf4-451a-82a2-157efb3369941622126672531-J-J.jpg',
          category: 'Men ',
          subcategory: 'JAke & Jones',
        },
      ],
    }
  },
}
</script>

<style>
</style>