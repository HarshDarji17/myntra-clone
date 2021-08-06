<template>


<div>


<div>
          <button v-for="pageNumber in totalPages" :key="pageNumber.id" class="w3-button" v-bind:key="pageNumber" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }} </button>
</div>          


  <v-col cols="9">
       

        <v-row>
          <v-col cols="3" v-for="(product, i) in paginate" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card
                class="rounded-0 rounded-sm"
                max-width="100%"
                height="auto"
                :elevation="hover ? 10 : 0"
                :to="product.path"
              >
                <n-link
                  :to="`/${$route.params.category}/${$route.params.subCategory}/${product.id}`"
                >
                  <v-img :src="product.src"></v-img>
                </n-link>

                <!-- rating -->
                <v-row no-gutters class="mx-1">
                  <v-col cols="3">
                    <v-rating
                      v-model="product.rating"
                      :value="product.rating"
                      readonly
                      background-color="pink lighten-3"
                      color="pink"
                      half-increments
                      size="17"
                      dense
                    ></v-rating>
                  </v-col>
                  <v-col>
                    <span class="ml-13 black--text"
                      >({{ product.numberOfRating }})</span
                    >
                  </v-col>
                </v-row>

                <!-- product title -->
                <p
                  v-if="!hover"
                  class="pt-5 px-2 black--text subtitle-1 text-uppercase mb-1"
                >
                  <strong>{{ product.title }}</strong>
                </p>

                <!-- product subtitle -->
                <p
                  v-if="!hover"
                  class="px-2 caption font-weight-regular mb-1 mr-5"
                >
                  {{ product.subTitle }}
                </p>
                <!-- product size -->

                <!-- btn -->
                <div v-else>
                  <v-btn-toggle>
                    <v-btn
                      v-if="!product.wishlist"
                      rounded
                      tile
                      text
                      width="190px"
                      height="30px"
                      color="black"
                      class="subtitle-2 text-center elevation=2 ma-3"
                      @click="wishToCart(product)"
                    >
                      <v-icon id="colorchange">mdi-heart-outline</v-icon>

                      &nbsp;WISHLIST
                    </v-btn>

                    <v-btn
                      v-else
                      dark
                      tile
                      text
                      width="190px"
                      height="30px"
                      class="
                        subtitle-2
                        text-center
                        elevation=2
                        ma-3
                        grey
                        darken-3
                      "
                    >
                      <v-icon color="pink" id="colorchange">mdi-heart</v-icon>

                      &nbsp;WISHLISTED
                    </v-btn>
                  </v-btn-toggle>
                  <p class="px-2 subtitle-2 font-weight-medium mb-1">
                    Sizes:<span class="font-weight-bold">{{
                      product.size
                    }}</span>
                  </p>
                </div>

                <!-- product offer price -->
                <div>
                  <p
                    v-if="!product.specialPrice"
                    class="black--text mx-2 title my-1"
                  >
                    {{ product.price }}
                    <span
                      class="
                        grey--text
                        subtitle-2
                        pl-2
                        text-decoration-line-through
                        font-weight-light
                      "
                    >
                      <!-- main price -->
                      {{ product.originalPrice }}
                    </span>
                    <span
                      class="red--text px-2 subtitle-2 font-weight-medium mb-1"
                    >
                      {{ product.offer }}
                    </span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>

</div>      
</template>

<script>
export default {
 
  data() {
  return {
    products: [{
      id: 1,
      src:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg',
      title: 'Campus Sutra',
      subTitle: 'Men Navy Blue & Grey Standard Fit Colourblocked Casual Shirt',
      price: 799,
      originalPrice: 'Rs.1499',
      size: '38,40,42,44',
      offer: '(40% OFF)',
      numberOfRating: '3.9k',
      rating: 4,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Campus Sutra',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'campus sutra',
      color:'grey lighten-3',
      pricee:'1111',
      gendertype:'men',
      images:[
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/a6482112-9af7-4934-9e65-6443f0df4b8c1566454760508-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/48984a02-d42e-4301-be15-9d22066ca8d51566454760488-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/a05d2136-184e-4456-8db5-3142fd1bc13c1566454760466-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10456354/2019/8/22/c6f7cf43-0002-4dc8-863b-f5b1afb204d81566454760448-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-5.jpg'
      ]

    },
    {
      id: 2,
      src:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
      title: 'Roadster',
      subTitle: 'Men Black & Grey Checked Casual Shirt',
      price: 799,
      originalPrice: 'Rs.1299',
      size: '36,38,40,42,44,46',
      offer: '(40% OFF)',
      numberOfRating: '11.9k',
      rating: 4,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Roadster',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'roadstar',
      color:'brown',
      pricee:'1111',
      gendertype:'men',
      images:[
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2016/9/15/11473928353440-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2016/9/15/11473928353416-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2016/9/15/11473928353388-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2016/9/15/11473928353356-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-5.jpg',
        ],
      
    },
    {
      id: 3,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2478263/2020/3/10/bfa8931b-c4b4-4788-a8c2-5c5abc2dcda51583836541684-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-1.jpg',
      title: 'WROGN',
      subTitle: 'Men Black & Grey Slim Fit Checked Casual Shirt',
      price: 1199,
      originalPrice: 'Rs.2399',
      size: '36,39,40,42,44,46',
      offer: '(50% OFF)',
      numberOfRating: '1.7k',
      rating: 3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'WROGN',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'wrogn',
      color:'brown',
      pricee:'1111',
      gendertype:'men',
      images:[
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478263/2020/3/10/bfa8931b-c4b4-4788-a8c2-5c5abc2dcda51583836541684-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478263/2020/3/10/9231ff86-1d89-4ff3-93ce-a43d60588c911583836541641-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478263/2020/3/10/c2270c02-5690-4451-92b2-1c4b0e8e72701583836541600-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478263/2020/3/10/939ecf52-a431-4d2a-9365-f031245b08031583836541556-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478263/2020/3/10/0fa74855-73ac-485e-aa73-40c779a4890a1583836541514-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-5.jpg'
      ]
    },
    {
      id: 4,
      src:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2032637/2018/4/4/11522828290402-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-1.jpg',
      title: 'WROGN',
      subTitle: 'Men Blue & Brown Slim Fit Checked Casual Shirt',
      price: 1199,
      originalPrice: 'Rs.2399',
      size: '36,39,40,42,44,46',
      offer: '(50% OFF)',
      numberOfRating: '1.7k',
      rating: 3.5,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'WROGN',
      subCategory: 'Men Blue & Brown Slim Fit Checked Casual Shirt',
      mykey: 'brand',
      brand:'wrogn',
      color:'brown',
      pricee:'1111',
      gendertype:'men',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2032637/2018/4/4/11522828290402-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2032637/2018/4/4/11522828290388-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2032637/2018/4/4/11522828290376-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2032637/2018/4/4/11522828290362-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2032637/2018/4/4/11522828290347-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-5.jpg'
      ]
    },

    {
      id: 5,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/11/b0d1e4a4-1da3-4961-8ecb-e4a3513fe58a1568186130111-1.jpg',
      title: 'Campus Sutra',
      subTitle: 'Colourblocked Sweatshirt',
      price: 799,
      originalPrice: 'Rs.1999',
      size: 'S,M,L,XL',
      offer: '(60% OFF)',
      numberOfRating: '3.9k',
      rating: 4,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Campus Sutra',
      subCategory: 'Colourblocked Sweatshirt',
      mykey: 'brand',
      brand:'campus sutra',
      color:'brown',
      pricee:'1111',
      gendertype:'men',
      images:[
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/3aaf0f72-0cf4-40ef-a36c-c81e3186c3281565956541245-Campus-Sutra-Men-Sweatshirts-2091565956539708-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/d0ea905f-b05b-4838-9f0a-32dd2f19433b1565956541227-Campus-Sutra-Men-Sweatshirts-2091565956539708-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/128f80d8-c789-4269-9f5e-d48e7ef882051565956541209-Campus-Sutra-Men-Sweatshirts-2091565956539708-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/d1f8718f-918c-4a31-b9da-9ee4062b54511565956541191-Campus-Sutra-Men-Sweatshirts-2091565956539708-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/aaf1e3b1-2d19-4efd-9d92-204d1612b5f31565956541174-Campus-Sutra-Men-Sweatshirts-2091565956539708-5.jpg'
      ]
    },


    {
      id: 6,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/5/c40f382a-8e5b-4d92-8a7e-2fff259281d61572934870844-1.jpg',
      title: 'Campus Sutra',
      subTitle: 'Women Solid Sweatshirt',
      price: 764,
      originalPrice: 'Rs.1699',
      size: 'S,M,L,XL',
      offer: '(55% OFF)',
      numberOfRating: '3.9k',
      rating: 2,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Campus Sutra',
      subCategory: 'Women Solid Sweatshirt',
      mykey: 'brand',
      brand:'campus sutra',
      color:'brown',
      pricee:'1111',
      gendertype:'women',
      images:[
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/5/c40f382a-8e5b-4d92-8a7e-2fff259281d61572934870844-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/5/a348eace-d0ff-4069-a6c3-14e35195c86f1572934870887-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/5/a9f9a9ae-a84e-41f8-af68-e971ca3fb1ed1572934870931-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/5/6b34981f-eb72-42f7-9362-50e67c44d0b91572934870974-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/5/16aaddc5-0dd9-4b8d-aa1c-be4a07cbec481572934871009-5.jpg'
      ]
    },
    {
      id: 7,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10381431/2019/8/16/56334df9-19ae-427d-a503-e0034d4f75fd1565956527010-Campus-Sutra-Men-Sweatshirts-9541565956525908-1.jpg',
      title: 'Campus Sutra',
      subTitle: 'Men Solid Sweatshirt',
      price: 679,
      originalPrice: 'Rs.1699',
      size: 'S,M,L,XL',
      offer: '(60% OFF)',
      numberOfRating: '3.9k',
      rating: 1,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Campus Sutra',
      subCategory: 'Men Solid Sweatshirt',
      mykey: 'brand',
      brand:'campus sutra',
      color:'brown',
      pricee:'1111',
      gendertype:'men'
    },
    {
      id: 8,
      src:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/df0c1d8c-528d-4afd-9714-a40c19b105ec1531903512284-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-1.jpg',
      title: 'Campus Sutra',
      subTitle: 'Printed Top',
      price: 499,
      originalPrice: 'Rs.999',
      size: 'S,M,L,XL',
      offer: '(50% OFF)',
      numberOfRating: '3.9k',
      rating: 3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'campus sutra',
      subCategory: 'Printed Top',
      mykey: 'brand',
      brand: 'campus sutra',
      color:'brown',
      pricee:'111',
      gendertype:'women',
      images:[
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/df0c1d8c-528d-4afd-9714-a40c19b105ec1531903512284-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/bd70e27a-21e3-4abc-bda7-f780296e493e1531903512255-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/c0e43db5-8df9-492d-85dd-9775adcb9ac81531903512216-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/9643a585-6d2c-4379-88d8-57777e0cf0321531903512192-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/49e1417a-8696-471a-b1e3-0ccbb47b917a1531903512159-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-5.jpg'
      ]
    },
    {
      id: 9,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339531/2021/2/15/2ff2f79c-c9b4-46b2-a911-9f494e07c7231613389099129-Denver-Men-Set-of-3-Sporting-Club-Goal-Imperial--Hamilton-De-1.jpg',
      title: 'Denver',
      subTitle: 'Men Hamiltons & Goal Deo',
      price: 436,
      originalPrice: 'Rs.728',
      size: 'Onesize',
      numberOfRating: '16',
      rating: 4.5,
      offer: '(40% OFF)',
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Denver',
      subcategory: 'campus',
      brand:'Denver',
      mykey: 'brand',
      color:'black',
      pricee:'111',
     
      path:
        'Personal Care/Men Personal Care/Deodorant/Denver Deodorant/More By Denver',
    },
    {
      id: 10,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4384871/2018/4/18/11524043867750-Lakme-Women-Face-Wash-and-Cleanser-2941524043867736-1.jpg',
      title: 'Lakme',
      subTitle: 'Men Hamiltons & Goal Deo',
      price: 94,
      originalPrice: 'Rs.99',
      size: '15GMS',
      numberOfRating: '1.7k',
      rating: 4.5,
      offer: '(80% OFF)',
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Lakme',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Lakme',
      color:'black',
      pricee:'111'
    },
    {
      id: 11,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/533235/2020/10/10/6101778b-79b7-4270-8666-dac57c13ff661602268255477LotusHerbalsSustainableSafeSunUVScreenMatteGelSunscreenwithS1.jpg',
      title: 'Lotus Herbals',
      subTitle: 'Sustainable Safe Sun UV Screen..',
      price: 295,
      originalPrice: 'Rs.455',
      size: '15GMS',
      numberOfRating: '2.6k',
      rating: 4.4,
      offer: '(35% OFF)',
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Lotus Herbals',
      subCategory: 'campus',
      mykey: 'brand',
      color:'grey lighten-3',
      pricee:'111',
      brand:'Lotus Herbals'

    },
    {
      id: 12,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13701914/2021/4/15/8a742d46-3435-40a5-a095-cba339ee0f4f1618490034747-LOreal-Paris-Excellence-Fashion-Hair-Color---Intense-Warm-Au-1.jpg',
      title: 'LOreal',
      subTitle: 'Hair color - Burgundy 3.16',
      price: 465,
      originalPrice: 'Rs.620',
      size: 'Onesize',
      numberOfRating: '296',
      rating: 4.4,
      offer: '(25% OFF)',
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'LOreal',
      subCategory: 'campus',
      mykey: 'brand',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 13,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10849140/2021/3/18/8c960c53-18ff-4452-936f-def7c93a70781616069575522-Maybelline-New-York-Hypercurl-Washable-Mascara---Black-92-ml-1.jpg',
      title: 'Maybelline',
      subTitle: 'Washable Mascara -Black',
      price: 232,
      originalPrice: 'Rs.310',
      size: 'Onesize',
      offer: '(25% OFF)',
      numberOfRating: '5.6k',
      rating: 4.4,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Maybelline',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Maybelline',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 14,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/Lakme-Nail-Color-Remover_f8376b260b7db9dc60afdffcf3fed027_images.jpg',
      title: 'Lakme',
      subTitle: 'Nail Colour Remover 27 ml',
      price: 95,
      originalPrice: 'Rs.99',
      size: 'Onesize',
      offer: '(10% OFF)',
      numberOfRating: '5.3k',
      rating: 4.6,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Lakme',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Lakme',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 15,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2508208/2018/4/2/11522668857688-indulekha-Unisex-Shampoo-and-Conditioner-1061522668857588-1.jpg',
      title: 'Maybelline',
      subTitle: 'Anti Hairfall Shampoo 200 ml',
      price: 234,
      originalPrice: 'Rs.99',
      size: '200ML',
      offer: '(40% OFF)',
      numberOfRating: '1k',
      rating: 4.3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Maybelline',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Maybelline',
      color:'grey lighten-3',
      pricee:'111'

    },
    {
      id: 16,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10893332/2020/3/5/4604e55e-1b56-40cd-98a6-457b87cc9a7e1583392219813-GUESS-Women-Dare-Eau-De-Toilette-100-ml-3621583392218890-1.jpg',
      title: 'Maybelline',
      subTitle: 'Women Dare EDT 100ml',
      price: 1915,
      originalPrice: 'Rs.3990',
      size: '1oo ml',
      offer: '(52% OFF)',
      numberOfRating: '4k',
      rating: 4.3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'GUESS',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Maybelline',
      color:'grey lighten-3',
      pricee:'1111'
    },
    {
      id: 17,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10423440/2019/10/14/694f189f-f80c-4017-9285-5388ad189c671571055867171-Livon-Shake-and-Spray-Hair-Serum-100-ml-7671571055865963-1.jpg',
      title: 'Maybelline',
      subTitle: 'Shake &  Spray Hair Serum 100...',
      price: 200,
      originalPrice: 'Rs.250',
      size: 'oack',
      offer: '(20% OFF)',
      numberOfRating: '626',
      rating: 4.3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Livon',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Maybelline',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 18,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2484931/2019/9/5/74f1137d-9511-4934-af94-4d6085f986a81567687541112-The-Face-Shop-RICE-WATER-BRIGHT-Foaming-Cleanser-150-ml-5971-1.jpg',
      title: 'The Face Shop',
      subTitle: 'Rice Water Bright Cleanser   ',
      price: 520,
      originalPrice: 'Rs.650',
      size: '150 ml',
      offer: '(20% OFF)',
      numberOfRating: '5.6k',
      rating: 3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'The Face Shop',
      subCategory: 'campus',
      mykey: 'brand',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 19,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9686483/2019/5/31/f9629302-10ca-4caf-ae64-f9b285e53ec91559285995755-Nivea-Extra-Whitening-Cell-Repair-SPF-15-Body-Lotion-5231559-1.jpg',
      title: 'Nivea',
      subTitle: 'Whitening SPF 15  Lotion 400 ml',
      price: 291,
      originalPrice: 'Rs.449',
      size: '400ml',
      offer: '(35% OFF)',
      numberOfRating: '1.7k',
      rating: 4.3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Nivea',
      subCategory: 'campus',
      mykey: 'brand',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 20,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11629088/2020/4/7/eadecde2-3d27-46a3-8d44-3a67048317391586236305698-Lakme-Eyeconic-Kajal---Deep-Black-035-g-51586236305566-1.jpg',
      title: 'Lakme',
      subTitle: 'Eyeconic Kajal  - Deep Black',
      price: 166,
      originalPrice: 'Rs.185',
      size: 'Onesize',
      offer: '(10% OFF)',
      numberOfRating: '1.2k',
      rating: 3,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Lakme',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Lakme',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 21,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9747207/2019/7/22/74ea0159-7270-4916-8780-74d3628192061563800066182-Maybelline-Women-Kajal-and-Eyeliner-271563800065867-1.jpg',
      title: 'Maybelline',
      subTitle: 'Colossal Bold Liner - Blavk',
      price: 161,
      originalPrice: 'Rs.249',
      size: 'Onesize',
      offer: '(35  % OFF)',
      numberOfRating: '6.3k',
      rating: 2,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Maybelline',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Maybelline',
      color:'grey lighten-3',
      pricee:'111',
      path: '/Personal Care/Women Personal Care/Kajal And Eyeliner/Maybelline Kajal And Eyeliner/More By Maybelline'
    },
    {
      id: 22,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9055331/2019/4/9/a300f11e-f7eb-4769-9950-8f262b16c9981554809707570-Denver-Men-Perfume-and-Body-Mist-851554809707251-1.jpg',
      title: 'Denver',
      subTitle: 'Men set of Imperial EDP & DEO',
      price: 315,
      originalPrice: 'Rs.525',
      size: '220-240ml',
      offer: '(40% OFF)',
      numberOfRating: '4.3k',
      rating: 4.5,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Denver',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Denver',
      color:'grey lighten-3',
      pricee:'111'
    },
    {
      id: 23,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11081218/2019/12/4/d25ab37c-34c7-4bfe-b216-9181922e21b11575464723740-Mamaearth-Unisex-Onion-Hair-Oil-150-ml-1451575464722852-1.jpg',
      title: 'Lakme',
      subTitle: 'Men Hamiltons & Goal Deo',
      price: 94,
      originalPrice: 'Rs.99',
      size: '15GMS',
      offer: '(40% OFF)',
      numberOfRating: '16',
      rating: 4.5,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Lakme',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Lakme',
      color:'grey lighten-3',
      pricee:'111',
      images:[
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11081208/2019/12/4/f176d054-cb97-4231-8129-fb48ddd09a391575438834974-Mamaearth-Onion-Hair-Fall-Control-Conditioner-250-ml-4941575-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11081208/2019/12/4/7a7d8627-968d-425d-9180-979a09fbe10a1575439528269-Mamaearth-Onion-Hair-Fall-Control-Conditioner-250-ml-4771575-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11081208/2019/12/4/cebded94-5780-433a-8206-0cc563fdaf1b1575438834871-Mamaearth-Onion-Hair-Fall-Control-Conditioner-250-ml-4941575-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11081208/2020/10/14/7f0e3939-023b-4b54-9081-c563c33714241602653426456-Mamaearth-Sustainable-Onion-Hair-Fall-Control-Conditioner-25-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/6/2/fe05d73c-b882-4a85-8a4c-e2c1f8d07db71622615560995-22.jpg'
      ]
    },
    {
      id: 24,
      src:
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1711647/2018/12/1/63bae53c-97d9-4f93-addb-89187230d5851543643200798-JAGUAR-Men-Classic-Black-Deodorant-150-ml-3501543643200264-1.jpg',
      title: 'Lakme',
      subTitle: 'Men Hamiltons & Goal Deo',
      price: 94,
      originalPrice: 'Rs.99',
      size: '15GMS',
      offer: '(40% OFF)',
      numberOfRating: '16',
      rating: 4.5,
      quantity: 1,
      wishlist: false,
      baglist: false,
      category: 'Lakme',
      subCategory: 'campus',
      mykey: 'brand',
      brand:'Lakme',
      color:'grey lighten-3',
      pricee:'111',
      images:[
        'https://assets.myntassets.com/h_68,q_90,w_52/v1/assets/images/1711647/2018/12/1/63bae53c-97d9-4f93-addb-89187230d5851543643200798-JAGUAR-Men-Classic-Black-Deodorant-150-ml-3501543643200264-1.jpg',
        'https://assets.myntassets.com/h_68,q_90,w_52/v1/assets/images/1711647/2018/12/1/775b6772-f6c3-48e8-92a7-cc17e2902ee31543643200784-JAGUAR-Men-Classic-Black-Deodorant-150-ml-3501543643200264-2.jpg',
        'https://assets.myntassets.com/h_68,q_90,w_52/v1/assets/images/1711647/2021/1/21/6a3e7773-e6ba-42f4-b1ae-986ffbe0761e1611229652950-JAGUAR-Men-Classic-Black-Deodorant-150-ml-3101611229652754-7.jpg',
        'https://assets.myntassets.com/h_68,q_90,w_52/v1/assets/images/banner2021/3/1/bd779fb3-dd1a-4337-a4eb-39850ee5eec91614580690849-15.jpg'
      ]
    },],
 currentPage: 1,
  itemsPerPage: 3,
  resultCount: 0
  }
},

 methods: {
setPage: function(pageNumber) {
    this.currentPage = pageNumber
  },
},

computed: {
  /* eslint-disable */
      totalPages: function() {
        if (this.resultCount == 0){
          return 1
        }
        else {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
      },
      /* eslint-disable */
      paginate: function() {
          if (!this.products || this.products.length != this.products.length) {
              return
          }
          this.resultCount = this.products.length
          if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages
          }
          var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
          return this.products.slice(index, index + this.itemsPerPage)
      }
  },

}
</script>

<style>

</style>