<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="6" class="mt-10">
          <nuxt-link to="/myntraearth">
            <v-img
              src="https://blog.myntra.com/wp-content/uploads/2021/06/Myntra-for-Earth-Logo.jpg"
              height="300"
              max-width="900"
            >
            </v-img>
          </nuxt-link>
        </v-col>
        <v-col class="mt-10 ml-15">
          <p class="blue-grey--text subtitle-1">June 4, 2021</p>
          <h1 class="dark--text">
            Myntra for Earth Offers <br />
            its Customers a Choice <br />
            of Sustainability
          </h1>

          <p class="mt-5">
            it's a one-of-its-kind Myntra theme store dedicated <br />
            especially to sustainble fashion alternatives.
          </p>

          <div>
            <v-btn rounded color="grey" class="mx-10" dark> #Spotlight </v-btn>

            <v-btn rounded color="grey" dark> #Business </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- second row  -->

      <v-row>
        <v-col cols="6" v-for="(link, i) in links" :key="i">
          <v-card>
            <n-link :to="link.link">
              <v-img :src="link.img" height="290" class="grey darken-4"></v-img>
            </n-link>

            <v-card-title class="text-h6 ml-10">
              <v-row>
                <v-col cols="9">
                  <p class="blue-grey--text subtitle-1">
                    {{ link.date }}
                  </p>
                </v-col>

                <v-col cols="2 ml-5 ma-2 avtar">
                  <v-avatar>
                    <img
                      src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/blog/icon-share.svg"
                    />
                  </v-avatar>
                </v-col>
              </v-row>

              <h3 class="dark--text">
                {{ link.title }}
              </h3>

              <div class="mt-5 mx-5 ma-2">
                <v-btn rounded color="grey" dark> {{ link.hashtag1 }} </v-btn>

                <v-btn rounded color="grey" dark> {{ link.hashtag2 }} </v-btn>

                <v-btn rounded color="grey" dark> {{ link.hashtag3 }}</v-btn>
              </div>
            </v-card-title>
          </v-card>
        </v-col>

        <!-- <v-img src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 127 42'%3e%3cg%3e%3cg%3e%3cpath fill='none' stroke='%23ff3f6c' stroke-miterlimit='50' d='M1.31 2.243A1 1 0 0 1 2.28 1h122.567a1 1 0 0 1 .99 1.141l-4.72 33.04a1 1 0 0 1-.944.857L11.817 40.963a1 1 0 0 1-1.015-.757z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" height="100px" width="10px">
         View More
         </v-img> -->
      </v-row>
    </div>
  </v-container>
</template>

<script>
import newsletter from './newsletter.vue'
export default {
  components: { newsletter },
  data() {
    return {
      links: [
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/06/Great-place-to-work-Myntra.jpg',
          date: 'June 22 , 2021',
          title: ' Myntra is Among india Top Best Companies To Work for in ',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '/myntraeconomic',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/05/Myntra_-_Covid_Care_-_Banner__3_-scaled.jpg',
          date: 'May 28 , 2021',
          title:
            ' How Myntra is supporting the community  during the covid crisis',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '/myntracovid',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/05/COVID19-care-by-Myntra-1.jpg',
          date: 'May 21 , 2021',
          title:
            ' Myntra Stands With Its Employees Every Step Of The Way During COVID',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',

          //   hashtag:[
          //              '#Spotlight',
          //              '#Community',
          //               '#Culture',
          //               '#sportsn'
          //   ],
          link: '/covidcare',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/04/Myntra-Official-Fashion-Partners-of-Royal-Challengers-Bangalore.jpg',
          date: 'April 20 , 2021',
          title:
            ' Myntra :  Official Fashion Partners of Royal Challengers  Banglore!',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '/fanrcb',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/04/Varanga_Myntra.jpg',
          date: 'April 8 , 2021',
          title:
            ' Myntra brand parnter , Varanga , walks the talk on women empowerment',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '/womenempo',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/04/footwear.jpg',
          date: 'April 8 , 2021',
          title: 'Step Up Your Style Game with Girls Shoes from Myntra',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '/myntragirls',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/03/myntra-vaani-mango.jpg',
          date: 'March 24 , 2021',
          title: 'Vasni Verve Brings Alive the Mango Spring Summer Collection',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '/vanicollection',
        },
      ],
    }
  },
}
</script>

<style>
.avtar {
  margin-top: -30px;
}
</style>