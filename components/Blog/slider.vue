<template>
  <div>
    <v-slide-group>
      <v-slide-item v-for="item in images" :key="item.title" class="ma-4">
        <v-card color="#eeeeee" elevation="10" max-width="300px" height="430px">
          <v-img :src="item.img" height="190px"></v-img>
          <v-card-text class="blue-grey--text subtitle-1">
            {{ item.date }}
          </v-card-text>

          <v-card-actions class="imagetitle">
            <strong> {{ item.title }}</strong>
          </v-card-actions>

          <p class="imagesubtitle">{{ item.subtitle }}</p>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <!-- <v-slide-group>
              <v-slide-item v-for="i in 10" :key="i" class="ma-5">
                <v-card color="#eeeeee" elevation="10" max-width="300px">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                  ></v-img>
                  <v-card-text>
                    Good good good good good good good good good good good good good good good good good
                    good
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer/>
                    <v-btn text>
                      Go
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-slide-item>
            </v-slide-group> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/06/Great-place-to-work-Myntra.jpg',
          date: 'June 22 , 2021',
          title: ' Myntra is Among india Top Best Companies To Work for in ',
          subtitle:
            'People at Myntra come together to help each other the COVID crisis.',
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
          subtitle:
            'People at Myntra come together to help each other the COVID crisis.',
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
          subtitle:
            'People at Myntra come together to help each other the COVID crisis.',
          hashtag: ['#Spotlight', '#Community', '#Culture', '#sportsn'],
          link: '',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/04/Myntra-Official-Fashion-Partners-of-Royal-Challengers-Bangalore.jpg',
          date: 'April 20 , 2021',
          title:
            ' Myntra :  Official Fashion Partners of Royal Challengers  Banglore!',
          subtitle:
            'People at Myntra come together to help each other the COVID crisis.',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/04/Varanga_Myntra.jpg',
          date: 'April 8 , 2021',
          title:
            ' Myntra brand parnter , Varanga , walks the talk on women empowerment',
          subtitle:
            'People at Myntra come together to help each other the COVID crisis.',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/04/footwear.jpg',
          date: 'April 8 , 2021',
          title: 'Step Up Your Style Game with Girls Shoes from Myntra',
          subtitle:
            'People at Myntra come together to help each other the COVID crisis.',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '',
        },
        {
          img: 'https://blog.myntra.com/wp-content/uploads/2021/03/myntra-vaani-mango.jpg',
          date: 'March 24 , 2021',
          title: 'Vasni Verve Brings Alive the Mango Spring Summer Collection',
          subtitle:
            'People at Myntra come together to help each other the COVID crisis.',
          hashtag1: '#Spotlight',
          hashtag2: '#Community',
          hashtag3: '#Culture',
          link: '',
        },
      ],
    }
  },
}
</script>

<style>
.imagetitle {
  margin-left: 5px;
  color: #353a50;
  font-family: 'Montserrat', sans-serif;
}
.imagesubtitle {
  margin-left: 9px;

  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 1.714;
}
</style>