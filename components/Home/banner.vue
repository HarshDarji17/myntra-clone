<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      grey
      lighten-5
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.url" :alt="slide.alt" height="300"> </v-img>
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
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/32f707ac-3d39-46bf-8e98-7b570be3a9421623849605852-DK_Saree--1-.jpg',
          alt: 'img 1',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/0b53ee5e-7bde-4383-8a47-c44278d361e31623850518827-DESKTOP-BANNER--4-.jpg',
          alt: 'img 2',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/b186c498-dda6-4706-bb53-bb052282eb9e1621944047571-DK_WardrobeEssentials.jpg',
          alt: 'img 3',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/25/971e9cfd-7eea-4a4a-8204-fef5cb45cc3c1621944517212-H-M_Desk_Banner.jpg',
          alt: 'img 4',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/70ffbc8b-976f-4567-8d88-8ac34f8efeab1623849653107-Kurtas_Desk.jpg',
          alt: 'img 5',
        },
        {
          url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/16/1ccf041f-f21e-45cd-afe7-55e6489e40a41623854709152-Watches_Desk.jpg',
          alt: 'img 6',
        },
      ],
    }
  },
}
</script>

<style>
</style>