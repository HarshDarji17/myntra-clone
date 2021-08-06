<template>
  <v-app>
    <div class="invitenow">
      <Invitenow />
    </div>

    <div> 

    <Secondpage />

    </div>

    <div>
      <Firstpage />
    </div>




    <div class="mb-5">
      <Slider />
    </div>

    <!-- <div>
    <Epicfashion />
     </div> -->

    <div>
      <Epicfashion2 />
    </div>

    <div class="hdfcbank">
      <Hdfcbank />
    </div>

    <div>
      <div
        class="FreeShippingBanner-sidebar FreeShippingBanner-sidebar-collapsed"
      >
        <div
          class="FreeShippingBanner-arrow FreeShippingBanner-arrow-collapsed"
        >
          <p class="FreeShippingBanner-sidebar-content">FLAT ₹500 OFF</p>
        </div>
      </div>
    </div>
    <div class="ml-5 mt-5 mr-15">
      <Sawcard />
    </div>
    <!-- <div class="mt-5">
      <Banner />
    </div> -->
    <!-- <div class="ml-15 mt-5 mr-15">
     <Covidnotification />
     </div> -->

    <div>
      <Dealoftheday />
    </div>
    <div>
      <Biggestdeals />
    </div>
    <div class="mr-5">
      <Categoriestobag />
    </div>
    <div class="ml-2">
      <Shopcategory />
    </div>
  </v-app>
</template> 

<script>
import Sawcard from './../components/Home/sawcard'
import Banner from './../components/Home/banner'
import Covidnotification from '../components/Home/covidnotification.vue'
import Dealoftheday from './../components/Home/dealoftheday'
import Biggestdeals from '../components/Home/biggestdeals.vue'
import Categoriestobag from '../components/Home/categoriestobag.vue'
import Epicfashion from '../components/Home/Epicfashion'
import Shopcategory from '~/components/Home/shopcategory.vue'
import Slider from '~/components/Home/slider.vue'
import Firstpage from '../components/Home/firstpage.vue'
import Epicfashion2 from '~/components/Home/Epicfashion2.vue'
import Hdfcbank from '~/components/Home/hdfcbank.vue'
import Invitenow from '../components/Home/invitenow.vue'
import Secondpage from '../components/Home/secondpage.vue'

export default {
  components: {
    Sawcard,
    Banner,
    Covidnotification,
    Dealoftheday,
    Biggestdeals,
    Categoriestobag,
    Epicfashion,
    Shopcategory,
    Slider,
    Firstpage,
    Epicfashion2,
    Hdfcbank,
    Invitenow,
    Secondpage
  },
}
</script>
<style>
a {
  text-decoration: none;
}
.FreeShippingBanner-sidebar-collapsed {
  right: 0;
}
.FreeShippingBanner-sidebar {
  position: fixed;
  bottom: 130px;
  width: 58px;
  height: 288px;
  background-color: #535766;
  z-index: 5;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  right: 3px;
}
div {
  display: block;
}
.FreeShippingBanner-arrow-collapsed {
  border-right: 18px solid #fff;
}
.FreeShippingBanner-arrow {
  width: 0;
  height: 0;
  margin: 24px 8px;
  border-top: 14px solid transparent;
  border-bottom: 12px solid transparent;
}
.FreeShippingBanner-sidebar-content {
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
  width: 36px;
  height: 200px;
  vertical-align: middle;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  -webkit-margin-after: 0;
  margin-block-end: 0;
  -webkit-margin-before: 0;
  margin-block-start: 0;
  color: #fcfcfc;
  display: inline-block;

  margin-top: 25px;
}
.hdfcbank {
  margin-top: -10px;
}
.invitenow{
  margin-top: -23px;
  margin-bottom: 30px;
}
</style>