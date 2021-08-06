<template>
  <div>
    <div class="career-testimony">
      <!-- titlwe  -->

      <div class="career-testimony__title">
        <img
          src="	https://careers.myntra.com/wp-content/uploads/2019/12/testimony-title.svg"
          alt
        />
      </div>

      <!-- slider -->

      <div>
        <v-carousel hide-delimiters cycle height="auto" width="100%">
          <v-carousel-item v-for="(color, i) in colors" :key="i" width="100%">
            <v-container width="100%">
              <v-row>
                <v-col cols="12" class="career-testimony__content">
                  <v-img :src="color.img" width="100%"> </v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        {
          img: 'https://careers.myntra.com/wp-content/uploads/2021/01/MYNTRA-PadmaPreethi-02.png',
        },
        {
          img: 'https://careers.myntra.com/wp-content/uploads/2021/01/MYTNRAlife-NamitaYashas-01.png',
        },
        {
          img: 'https://careers.myntra.com/wp-content/uploads/2021/01/MYNTRA-SubhashisSahu-01.png',
        },
        {
          img: 'https://careers.myntra.com/wp-content/uploads/2021/01/MYNTRA-Bindiya-Bhatt-01.png',
        },
      ],
    }
  },
}
</script>

<style>
.career-testimony {
  padding: 80px 0 120px;
  background-size: 100% 100%;
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/about/about-magic-bg.svg);
  text-align: center;
  position: relative;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.career-testimony::before {
  content: '';
  position: absolute;
  background: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/team-pattern.svg)
    no-repeat;
  width: 290px;
  height: 309px;
  right: 0;
  bottom: 0;
  background-size: 100%;
}
.career-testimony__title {
  height: 130px;
  text-align: center;
}
.career-campus__title img,
.career-testimony__title img {
  height: 100%;
  width: 100%;
}
.career-testimony__content {
  position: relative;
  max-width: 840px;
  width: 100%;
  padding: 0 15px;
  margin: 20px auto;
}
.career-testimony__content::after {
  background-repeat: no-repeat;
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/testimony-pattern-bg.svg);
  width: calc(100% + 28px);
  height: calc(100% + 28px);
  top: -14px;
  left: -27px;
}
.career-testimony__content::after,
.career-testimony__img::after {
  content: '';
  position: absolute;
  background-size: 100% 100%;
  z-index: -1;
}
</style>