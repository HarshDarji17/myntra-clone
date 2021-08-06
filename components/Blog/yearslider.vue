<template>
  <div>
    <v-slide-group>
      <v-slide-item v-for="item in images" :key="item.title" class="ma-2">
        <v-card color="#eeeeee" elevation="10" max-width="300px" height="300px">
          <v-img
            :src="item.img"
            height="50px"
            width="190px"
            class="ml-15 mt-10"
          ></v-img>
          <v-card-actions class="title ma-5">
            {{ item.title }}
          </v-card-actions>

          <v-card-subtitle> {{ item.year }}</v-card-subtitle>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo1.png',
          title: 'Founded as an online portal to sell personalized gift items',
          year: '2007',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo5.png',
          title:
            'Became an online portal for selling fashion & lifestyle products',
          year: '2011',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/flipkart-logo.png',
          title: 'Became part of the Flipcart Group',
          year: '2014',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/myntra-logo.svg',
          title: ' Goes App only',
          year: '2015',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo2.png',
          title: ' Launched Try & Buy Feature',
          year: '2016',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/myntra-jabong.png',
          title:
            'Myntra acquired Jabong becomes india largest fashion platform',
          year: '2016',
        },

        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/walmart-logo.png',
          title: 'Became part of the Walmart Group',
          year: '2018',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2020/01/Insta.svg',
          title: ' Started Alteration as a service',
          year: '2019',
        },
      ],
    }
  },
}
</script>

<style>
.title {
  font-family: 'Source Sans Pro', sans-serif;
  color: #353a50;
  font-size: 18px;
  margin-bottom: 30px;
}
</style>