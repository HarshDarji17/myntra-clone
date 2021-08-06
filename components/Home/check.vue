<template>
  <div>
    <v-text-field
      label="search for products,brands & more"
      v-model="model"
      solo
      class="pt-7 pr-10"
      flat
      prepend-inner-icon="mdi-magnify"
      background-color="grey lighten-3"
      dense
      @input="abcd()"
    >
    </v-text-field>

    <v-list>
      <v-list-item v-for="(item, index) in searchedProducts" :key="index">
        <n-link :to="`/${item.category}/${item.subCategory}`">
          <!-- <v-img :src="product.src"></v-img> -->

          <!-- <v-list-item-avatar>
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar> -->
          <h6 class="black--text" align="center">{{ item.title }}</h6>
        </n-link>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      model: '',
      product: '',
      searchedProducts: [],
      computed: {
        ...mapGetters('products', ['getProducts']),
      },
      //  mounted(){
      //           // this.prod = this.$store.state.products.products
      //           // this.products = this.getProducts
      //           this.prod = this.$store.state.products.products
      //           console.log(this.prod)
      //        },

      //              products: [
      //     {
      //       id:1,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339531/2021/2/15/2ff2f79c-c9b4-46b2-a911-9f494e07c7231613389099129-Denver-Men-Set-of-3-Sporting-Club-Goal-Imperial--Hamilton-De-1.jpg',
      //       title: 'Denver',
      //       subTitle: 'Men Hamiltons & Goal Deo',
      //       price: 436,
      //       originalPrice: 'Rs.728',
      //       size: 'Onesize',
      //       numberOfRating: '16',
      //       rating: 4.5,
      //       offer: '(40% OFF)',
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false,
      //       path:
      //         'Personal Care/Men Personal Care/Deodorant/Denver Deodorant/More By Denver',
      //     },
      //     {
      //       id:2,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4384871/2018/4/18/11524043867750-Lakme-Women-Face-Wash-and-Cleanser-2941524043867736-1.jpg',
      //       title: 'Lakme',
      //       subTitle: 'Men Hamiltons & Goal Deo',
      //       price: 94,
      //       originalPrice: 'Rs.99',
      //       size: '15GMS',
      //       numberOfRating: '1.7k',
      //       rating: 4.5,
      //       offer: '(5% OFF)',
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     {
      //       id:3,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/533235/2020/10/10/6101778b-79b7-4270-8666-dac57c13ff661602268255477LotusHerbalsSustainableSafeSunUVScreenMatteGelSunscreenwithS1.jpg',
      //       title: 'Lotus Herbals',
      //       subTitle: 'Sustainable Safe Sun UV Screen..',
      //       price: 295,
      //       originalPrice: 'Rs.455',
      //       size: '15GMS',
      //       numberOfRating: '2.6k',
      //       rating: 4.4,
      //       offer: '(35% OFF)',
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false

      //     },
      //     { id:4,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13701914/2021/4/15/8a742d46-3435-40a5-a095-cba339ee0f4f1618490034747-LOreal-Paris-Excellence-Fashion-Hair-Color---Intense-Warm-Au-1.jpg',
      //       title: 'LOreal',
      //       subTitle: 'Hair color - Burgundy 3.16',
      //       price: 465,
      //       originalPrice: 'Rs.620',
      //       size: 'Onesize',
      //       numberOfRating: '296',
      //       rating: 4.4,
      //       offer: '(25% OFF)',
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:5,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10849140/2021/3/18/8c960c53-18ff-4452-936f-def7c93a70781616069575522-Maybelline-New-York-Hypercurl-Washable-Mascara---Black-92-ml-1.jpg',
      //       title: 'Maybelline',
      //       subTitle: 'Washable Mascara -Black',
      //       price: 232,
      //       originalPrice: 'Rs.310',
      //       size: 'Onesize',
      //       offer: '(25% OFF)',
      //       numberOfRating: '5.6k',
      //       rating: 4.4,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:6,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/Lakme-Nail-Color-Remover_f8376b260b7db9dc60afdffcf3fed027_images.jpg',
      //       title: 'Lakme',
      //       subTitle: 'Nail Colour Remover 27 ml',
      //       price: 95,
      //       originalPrice: 'Rs.99',
      //       size: 'Onesize',
      //       offer: '(10% OFF)',
      //       numberOfRating: '5.3k',
      //       rating: 4.6,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:7,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2508208/2018/4/2/11522668857688-indulekha-Unisex-Shampoo-and-Conditioner-1061522668857588-1.jpg',
      //       title: 'Indulekha',
      //       subTitle: 'Anti Hairfall Shampoo 200 ml',
      //       price: 234,
      //       originalPrice: 'Rs.99',
      //       size: '200ML',
      //       offer: '(40% OFF)',
      //       numberOfRating: '1k',
      //       rating: 4.3,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:8,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10893332/2020/3/5/4604e55e-1b56-40cd-98a6-457b87cc9a7e1583392219813-GUESS-Women-Dare-Eau-De-Toilette-100-ml-3621583392218890-1.jpg',
      //       title: 'GUESS',
      //       subTitle: 'Women Dare EDT 100ml',
      //       price: 1915,
      //       originalPrice: 'Rs.3990',
      //       size: '1oo ml',
      //       offer: '(52% OFF)',
      //       numberOfRating: '4k',
      //       rating: 4.3,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:9,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10423440/2019/10/14/694f189f-f80c-4017-9285-5388ad189c671571055867171-Livon-Shake-and-Spray-Hair-Serum-100-ml-7671571055865963-1.jpg',
      //       title: 'Livon',
      //       subTitle: 'Shake &  Spray Hair Serum 100...',
      //       price: 200,
      //       originalPrice: 'Rs.250',
      //       size: 'oack',
      //       offer: '(20% OFF)',
      //       numberOfRating: '626',
      //       rating: 4.3,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:10,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2484931/2019/9/5/74f1137d-9511-4934-af94-4d6085f986a81567687541112-The-Face-Shop-RICE-WATER-BRIGHT-Foaming-Cleanser-150-ml-5971-1.jpg',
      //       title: 'The Face Shop',
      //       subTitle: 'Rice Water Bright Cleanser   ',
      //       price: 520,
      //       originalPrice: 'Rs.650',
      //       size: '150 ml',
      //       offer: '(20% OFF)',
      //       numberOfRating: '5.6k',
      //       rating: 4.4,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:11,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9686483/2019/5/31/f9629302-10ca-4caf-ae64-f9b285e53ec91559285995755-Nivea-Extra-Whitening-Cell-Repair-SPF-15-Body-Lotion-5231559-1.jpg',
      //       title: 'Nivea',
      //       subTitle: 'Whitening SPF 15  Lotion 400 ml',
      //       price: 291,
      //       originalPrice: 'Rs.449',
      //       size: '400ml',
      //       offer: '(35% OFF)',
      //       numberOfRating: '1.7k',
      //       rating: 4.3,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:12,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11629088/2020/4/7/eadecde2-3d27-46a3-8d44-3a67048317391586236305698-Lakme-Eyeconic-Kajal---Deep-Black-035-g-51586236305566-1.jpg',
      //       title: 'Lakme',
      //       subTitle: 'Eyeconic Kajal  - Deep Black',
      //       price: 166,
      //       originalPrice: 'Rs.185',
      //       size: 'Onesize',
      //       offer: '(10% OFF)',
      //       numberOfRating: '1.2k',
      //       rating: 4.6,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:13,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9747207/2019/7/22/74ea0159-7270-4916-8780-74d3628192061563800066182-Maybelline-Women-Kajal-and-Eyeliner-271563800065867-1.jpg',
      //       title: 'Maybelline',
      //       subTitle: 'Colossal Bold Liner - Blavk',
      //       price: 161,
      //       originalPrice: 'Rs.249',
      //       size: 'Onesize',
      //       offer: '(35  % OFF)',
      //       numberOfRating: '6.3k',
      //       rating: 4.5,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false,
      //       path:'/Personal Care/Women Personal Care/Kajal And Eyeliner/Maybelline Kajal And Eyeliner/More By Maybelline'
      //     },
      //     { id:14,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9055331/2019/4/9/a300f11e-f7eb-4769-9950-8f262b16c9981554809707570-Denver-Men-Perfume-and-Body-Mist-851554809707251-1.jpg',
      //       title: 'Denver',
      //       subTitle: 'Men set of Imperial EDP & DEO',
      //       price: 315,
      //       originalPrice: 'Rs.525',
      //       size: '220-240ml',
      //       offer: '(40% OFF)',
      //       numberOfRating: '4.3k',
      //       rating: 4.5,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:15,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11081218/2019/12/4/d25ab37c-34c7-4bfe-b216-9181922e21b11575464723740-Mamaearth-Unisex-Onion-Hair-Oil-150-ml-1451575464722852-1.jpg',
      //       title: 'Lakme',
      //       subTitle: 'Men Hamiltons & Goal Deo',
      //       price: 94,
      //       originalPrice: 'Rs.99',
      //       size: '15GMS',
      //       offer: '(40% OFF)',
      //       numberOfRating: '16',
      //       rating: 4.5,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:16,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1711647/2018/12/1/63bae53c-97d9-4f93-addb-89187230d5851543643200798-JAGUAR-Men-Classic-Black-Deodorant-150-ml-3501543643200264-1.jpg',
      //       title: 'Lakme',
      //       subTitle: 'Men Hamiltons & Goal Deo',
      //       price: 94,
      //       originalPrice: 'Rs.99',
      //       size: '15GMS',
      //       offer: '(40% OFF)',
      //       numberOfRating: '16',
      //       rating: 4.5,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:17,
      //       src:
      //         'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg',
      //       title: 'Campus Sutra',
      //       subTitle: 'Men Navy Blue & Grey Standard Fit Colourblocked Casual Shirt',
      //       price: 799,
      //       originalPrice: 'Rs.1499',
      //       size: '38,40,42,44',
      //       offer: '(40% OFF)',
      //       numberOfRating: '3.9k',
      //       rating: 4,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:18,
      //       src:
      //         'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
      //       title: 'Roadster',
      //       subTitle: 'Men Black & Grey Checked Casual Shirt',
      //       price: 799,
      //       originalPrice: 'Rs.1299',
      //       size: '36,38,40,42,44,46',
      //       offer: '(40% OFF)',
      //       numberOfRating: '11.9k',
      //       rating: 4.3,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:19,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2478263/2020/3/10/bfa8931b-c4b4-4788-a8c2-5c5abc2dcda51583836541684-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-1.jpg',
      //       title: 'WROGN',
      //       subTitle: 'Men Black & Grey Slim Fit Checked Casual Shirt',
      //       price: 1199,
      //       originalPrice: 'Rs.2399',
      //       size: '36,39,40,42,44,46',
      //       offer: '(50% OFF)',
      //       numberOfRating: '1.7k',
      //       rating: 4.2,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:20,
      //       src:
      //         'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2032637/2018/4/4/11522828290402-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-1.jpg',
      //       title: 'WROGN',
      //       subTitle: 'Men Blue & Brown Slim Fit Checked Casual Shirt',
      //       price: 1199,
      //       originalPrice: 'Rs.2399',
      //       size: '36,39,40,42,44,46',
      //       offer: '(50% OFF)',
      //       numberOfRating: '1.7k',
      //       rating: 4.2,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },

      //     { id:21,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/11/b0d1e4a4-1da3-4961-8ecb-e4a3513fe58a1568186130111-1.jpg',
      //       title: 'Campus Sutra',
      //       subTitle: 'Colourblocked Sweatshirt',
      //       price: 799,
      //       originalPrice: 'Rs.1999',
      //       size: 'S,M,L,XL',
      //       offer: '(60% OFF)',
      //       numberOfRating: '3.9k',
      //       rating: 4,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },

      //     { id:22,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/5/c40f382a-8e5b-4d92-8a7e-2fff259281d61572934870844-1.jpg',
      //       title: 'Campus Sutra',
      //       subTitle: 'Women Solid Sweatshirt',
      //       price: 764,
      //       originalPrice: 'Rs.1699',
      //       size: 'S,M,L,XL',
      //       offer: '(55% OFF)',
      //       numberOfRating: '3.9k',
      //       rating: 4,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:23,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10381431/2019/8/16/56334df9-19ae-427d-a503-e0034d4f75fd1565956527010-Campus-Sutra-Men-Sweatshirts-9541565956525908-1.jpg',
      //       title: 'Campus Sutra',
      //       subTitle: 'Men Solid Sweatshirt',
      //       price: 679,
      //       originalPrice: 'Rs.1699',
      //       size: 'S,M,L,XL',
      //       offer: '(60% OFF)',
      //       numberOfRating: '3.9k',
      //       rating: 4,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //     { id:24,
      //       src:
      //         'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/9/a4d2774e-b2d6-49b0-83aa-f256f9bf4d711599604317684-1.jpg',
      //       title: 'Campus Sutra',
      //       subTitle: 'Printed Top',
      //       price: 499,
      //       originalPrice: 'Rs.999',
      //       size: 'S,M,L,XL',
      //       offer: '(50% OFF)',
      //       numberOfRating: '3.9k',
      //       rating: 4,
      //       quantity: 1,
      //       wishlist:false,
      //       baglist:false
      //     },
      //   ],
    }
  },

  mounted() {
    this.prod = this.$store.state.products.products
    // console.log(this.prod)
  },

  methods: {
    abcd() {
      if (this.model != '') {
        this.searchedProducts = []
        console.log(this.products)
        console.log(this.searchedProducts)
        this.prod.forEach((item) => {
          console.log(item.title.toLowerCase())
          console.log(this.model)
          // console.log( this.item.title.toLowerCase().split(' ').every(v => this.model.toLowerCase().includes(v)))
          console.log(
            item.title.toLowerCase().includes(this.model.toLowerCase())
          )
          //   console.log(this.model.toLowerCase()==item.title.toLowerCase())
          if (item.title.toLowerCase().includes(this.model.toLowerCase())) {
            this.searchedProducts.push(item)
          }
        })
      }
      console.log(this.searchedProducts)
    },

    // filterproduct: function () {
    //   console.log(this.prod)
    //   return this.prod.filter((product) => {
    //     console.log(product)
    //     return product.title.match(this.model.toLowerCase())
    //   })
    // },

    //   filterproduct: function () {
    //       console.log(this.products)
    //   return this.products.filter((product) => {
    //     return product.title.match(this.model.toLowerCase())
    //   })
    // },
  },
}
</script>

<style>
</style>