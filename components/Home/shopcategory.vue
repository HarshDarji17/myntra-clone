<template>
  <div>
    <v-img
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/35930ac7-0d67-443c-8040-ce27c68c0bf51622110825752-Shop-By-category.gif"
    >
    </v-img>

    <div class="sample">
      <v-row class="no-gutters">
        <v-col v-for="(item, i) in cardData" :key="i">
          <v-card height="auto" width="200px" tile flat>
            <nuxt-link to="/">
              <v-img :src="item.src"> </v-img>
            </nuxt-link>
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
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/7d6f09f6-fc48-4d2d-9452-34d0e6c5dffc1620901755982-Home_DK_17.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/3a3d54ce-97c3-43e6-be5e-3bb31c9525711620901755993-Home_DK_18.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/8e8ca346-e9d3-4ade-a662-a7ad99b549171620901756006-Home_DK_19.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/a2f90ae0-e1d4-4f38-bb7e-8a49897955f51620901756024-Home_DK_20.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/148ddc58-2e10-48a4-b186-51a16b88e8b61620901756040-Home_DK_21.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/b42da0f7-3dbc-4577-9b0c-314fcb6434811620901756054-Home_DK_22.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/3aa6efec-e8d0-4444-954e-d306918629eb1620902004676-Home_DK_23.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/bbd3202b-0dec-476c-adb0-e5affc1117d11620902004696-Home_DK_24.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/7d4af682-9b40-410c-9612-935b5f274fad1620902004713-Home_DK_25.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/3349e6de-cf94-4a2c-93fa-60ccaeaa8c851620902004726-Home_DK_26.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/1b330a00-0140-4fbe-906c-5135c4c9e02b1620902004740-Home_DK_27.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/f4339175-021d-4e02-bd6c-cfe712b694941620902004754-Home_DK_28.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/810e1c8e-9b9a-43f8-82cf-2800f31fcced1620902349249-Home_DK_29.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/a9a56486-31c2-42d1-bca5-c2cd63be03cd1620902349262-Home_DK_30.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/4e54c47c-274a-4858-8c39-992516836b551620902349274-Home_DK_31.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/000d2bd5-528e-4e04-b434-1ade7bcebcf01620902349287-Home_DK_32.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/d6564372-112e-425d-84ac-b12693b3ed7b1620902349301-Home_DK_33.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/2c8b095a-218c-4fb8-a633-3194160209ac1620902349316-Home_DK_34.jpg',
        },
      ],
    }
  },
}
</script>

<style>
.sample {
  margin-top: 15px;
  margin-left: 53px;
  margin-right: 2px;
}
</style>