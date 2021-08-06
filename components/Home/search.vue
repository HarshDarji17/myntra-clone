<template>
  <div>
    <input
      type="text"
      v-model="model"
      class="black--text mt-1"
      placeholder="Enter Name"
      @change="abcd()"
      width="250px"
      prepend-icon="mdi-database-search"
    />
    <v-list class="black">
      <v-list-item v-for="(item, index) in searchedProducts" :key="index">
        <n-link
          :to="`/${$route.params.category}/${$route.params.subCategory}/${product.id}`"
        >
          <h6 class="black--text" align="center">{{ item.name }}</h6>
        </n-link>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    searchedProducts: [],
    value: null,
    focus: 0,
    items: ['foo', 'bar', 'fizz', 'buzz'],
    model: '',
    prod: [
      //Country
      {
        id: '4kcUb1G8TpUUflYN0oss',
        name: '1984 India',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41+BYThhyTL._SX322_BO1,204,203,200_.jpg',
        category: 'Books',
        subCategory: 'Contry',
      },
      {
        id: 'FmwrK5HuKUNlIkzA2Xe5',
        name: 'American Constitution',
        img: 'https://m.media-amazon.com/images/I/51Zs1KjjzjL._AC_UY218_.jpg',
        category: 'Books',
        subCategory: 'Contry',
      },
      {
        id: 'JCObLIDQ1IdJIrd9lSrG',
        name: 'The Taste Wild',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51WdSZ+wiBL._SX373_BO1,204,203,200_.jpg',
        category: 'Books',
        subCategory: 'Contry',
      },
      //Friendship
      {
        id: 'Jeu5vEswecYyX6UibhXL',
        name: 'Big Friendship',
        img: 'https://m.media-amazon.com/images/I/71vMLaZsaZL._AC_UY218_.jpg',
        category: 'Books',
        subCategory: 'Friendship',
      },
      {
        id: 'mY8XyimrMArnvlVFWndh',
        name: 'Journey Of Friendship',
        img: 'https://m.media-amazon.com/images/I/61UJxrAvVzL._AC_UY218_.jpg',
        category: 'Books',
        subCategory: 'Friendship',
      },
      {
        id: 'xnmLXmajQOmfeJmCp4sI',
        name: 'Friendship : A Bond',
        img: 'https://m.media-amazon.com/images/I/819h9sMlEXL._AC_UY218_.jpg',
        category: 'Books',
        subCategory: 'Friendship',
      },
      //Love
      {
        id: 'FpSZ8h7MUQGlsvGtdcm7',
        name: 'A Young Girl',
        img: 'https://m.media-amazon.com/images/I/71LFv6Z1t0S._AC_UY218_.jpg',
        category: 'Books',
        subCategory: 'Love',
      },
      {
        id: 'THGBkO59BSPnUpbjQEMv',
        name: 'A Touch of Eternity',
        img: 'https://m.media-amazon.com/images/I/61ZRWLIH8oL._AC_UY218_.jpg',
        category: 'Books',
        subCategory: 'Love',
      },
      {
        id: 'hPBaHEfKBYiJ9FhDup9C',
        name: 'Love, Hope and Magic',
        img: 'https://m.media-amazon.com/images/I/61JrxSSluvL._AC_UY218_.jpg',
        category: 'Books',
        subCategory: 'Love',
      },
      //Movie
      {
        id: 'Byi8d5dgCX5GO9N3I7pR',
        name: 'Jab Tak Hai Jaan',
        img: 'https://m.media-amazon.com/images/I/A1jF9t3HJ7L._AC_UY218_.jpg',
        category: 'VideoCD',
        subCategory: 'Movie',
      },
      {
        id: ' nZIa43W2hTfZBr0EfN0T',
        name: 'Spider Man',
        img: 'https://m.media-amazon.com/images/I/A1jF9t3HJ7L._AC_UY218_.jpg',
        category: 'VideoCD',
        subCategory: 'Movie',
      },
      {
        id: 'rAq6rmiSlDJuPCoLYXLi',
        name: 'The Jungle Theme',
        img: 'https://m.media-amazon.com/images/I/41V-nOv8ObL._AC_UY218_.jpg',
        category: 'VideoCD',
        subCategory: 'Movie',
      },
      //ShortMovie
      {
        id: '21SnD0Vh52bzG32YQ8bB',
        name: 'Disaster',
        img: 'https://m.media-amazon.com/images/I/71DVri2uJXL._AC_UY218_.jpg',
        category: 'VideoCD',
        subCategory: 'ShortMovie',
      },
      {
        id: 'IrEtVIs9l3cZ07tRmJgD',
        name: 'The Big Short',
        img: 'https://m.media-amazon.com/images/I/71F3gZjZ3XL._AC_UY218_.jpg',
        category: 'VideoCD',
        subCategory: 'ShortMovie',
      },
      {
        id: 'UoTPtKsE8Jru0U9JKTSk',
        name: 'Movie Workers',
        img: 'https://m.media-amazon.com/images/I/61MdZBmx+gL._AC_UY218_.jpg',
        category: 'VideoCD',
        subCategory: 'ShortMovie',
      },
      //Study
      {
        id: '66fuk3WvFa7lYFbiNZlS',
        name: 'Taare Zameen Par',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png',
        category: 'VideoCD',
        subCategory: 'Study',
      },
      {
        id: 'F2cXdT7nMPuDmsDCih5H',
        name: 'You Can Win',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41Y5CgkDdRL._SX322_BO1,204,203,200_.jpg',
        category: 'VideoCD',
        subCategory: 'Study',
      },
      {
        id: 'YxafJq182TuccaODNrsQ',
        name: '3 Idiots',
        img: 'https://m.media-amazon.com/images/I/714zt-AmxHL._AC_UL320_.jpg',
        category: 'VideoCD',
        subCategory: 'Study',
      },
    ],
  }),
  computed: {
    // ...mapGetters("cart", ["cartQuantities"]),
    ...mapGetters('products', ['getProducts']),
  },
  // computed: mapGetters('wishlist',['wishQuantities']),
  //   mounted() {
  //     this.$store.dispatch("products/getProducts", {
  //       category: "Books",
  //       subCategory: "Country",
  //     });
  //   },
  methods: {
    abcd() {
      if (this.model != '') {
        this.searchedProducts = []
        this.getProducts.forEach((item) => {
          if (item.title.toLowerCase().includes(this.model.toLowerCase())) {
            this.searchedProducts.push(item)
          }
        })
      }
      console.log(this.searchedProducts)
    },
  },
}
</script>

<style scoped>
.v-list-item:hover {
  border: 0.5px solid rgb(15, 15, 15);
  cursor: pointer;
}

.v-list {
  position: relative;
  color: rgb(7, 6, 6);
  border: 1px solid rgb(3, 3, 3);
  display: block;
}
a {
  text-decoration: none;
}
.search {
  z-index: 0;
}
input[type='text'] {
  color: rgb(27, 27, 27);
  border: 1px solid rgb(22, 21, 21);
  width: 200px;
  text-decoration: none;
  font-family: 'Comic Sans MS';
}
div > input[type='text']:focus,
.v-list {
  display: block;
}
</style>