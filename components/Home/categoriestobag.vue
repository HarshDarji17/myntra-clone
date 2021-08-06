<template>
  <div>
    <v-img
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/35930ac7-0d67-443c-8040-ce27c68c0bf51622110825752-Shop-By-category.gif"
    >
    </v-img>
    <div class="mt-3 ml-15 mr-15">
      <v-row no-gutters>
        <v-col class="ma-0" cols="2" v-for="(item, i) in cartData" :key="i">
          <v-card height="auto" width="100%" tile flat>
            <n-link :to="`${item.category}/${item.subcategory}`">
              <v-img :src="item.src" height="auto"> </v-img>
            </n-link>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartData: [
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg',
          category: 'Men',
          subcategory: 'Shirts',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg',
          category: 'Men',
          subcategory: 'T-Shirts',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg',
          category: 'Men',
          subcategory: 'Jeans',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg',
          category: 'Men',
          subcategory: 'Short Trousers',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg',
          category: 'Men',
          subcategory: 'Casual Shoes',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg',
          category: 'Child',
          subcategory: 'Infant-Essential',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg',
          category: 'Women',
          subcategory: 'Kurta-Sets',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg',
          category: 'Women',
          subcategory: 'Sarees',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg',
          category: 'Women',
          subcategory: 'Dresses',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg',
          category: 'Women',
          subcategory: 'Heels',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg',
          category: 'Women',
          subcategory: 'Handbags',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg',
          category: 'Women',
          subcategory: 'Shorts',
        },
      ],
    }
  },
}
</script>

<style>
.sample {
  margin-top: -83px;
  margin-right: 30px;
}
</style>