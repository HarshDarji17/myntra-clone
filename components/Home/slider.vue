<template>
  <div>
    <v-carousel
      cycle
      height="auto"
      width="100%"
      hide-delimiter-background
      grey
      lighten-5
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.url" :alt="slide.alt" height="auto"> </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/22/72f6c264-44ca-4cfb-baef-e752aa2b1a1a1624371230131-Desktop_Prebuzz-Banner.jpg',
          alt: 'img 0',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/23/9b850fc6-4d0b-4765-a972-99292508cea21624451032315-Desktop-banner--4-.gif',
          alt: 'img 1',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/32f707ac-3d39-46bf-8e98-7b570be3a9421623849605852-DK_Saree--1-.jpg',
          alt: 'img 2',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/0b53ee5e-7bde-4383-8a47-c44278d361e31623850518827-DESKTOP-BANNER--4-.jpg',
          alt: 'img 3',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/22/01ac90f5-f26c-4796-b05f-9178959763101624371230105-Only_Desk.jpg',
          alt: 'img 4',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/22/d5bc2f49-e591-4179-8507-74ee9dfb8ff41624371230041-Crocs_Desk--1-.jpg',
          alt: 'img 5',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/70ffbc8b-976f-4567-8d88-8ac34f8efeab1623849653107-Kurtas_Desk.jpg',
          alt: 'img 6',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/1ccf041f-f21e-45cd-afe7-55e6489e40a41623854709152-Watches_Desk.jpg',
          alt: 'img 7',
        },
        {
          url:'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/15/ee5e580e-47c9-46be-8bfb-c462f3897fd21626369012110-banner-1-dk.jpg',
          alt:'img 8'
        }
      ],
    }
  },
}
</script>

<style>
</style>