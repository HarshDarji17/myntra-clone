<template>
  <div class="mt-15">
    <v-row>
      <v-col class="ml-10">
        <img
          src="https://life.myntra.com/wp-content/uploads/2021/06/Group-1117.svg"
        />

        <h3 class="onepara">
          SHARING OUR SIMILARITIES, CELEBRATING OUR DIFFERENCES
        </h3>

        <h4 class="twopara mt-15">
          Myntra’s greatest impact is in making India more fashionable. The
          3000+ strong brand within Myntra broadens the representation, empathy
          and understanding. We create and connect these brands to people all
          over the country - removing the barriers of language, devices, ability
          or connectivity. Better representation of brand starts with
          representation at the workplace. Our work has to be internal first, so
          it can impact what we do externally. We believe we will reach more
          diverse customers when our employees come from diverse backgrounds and
          work in an environment of inclusion and belonging. That is why at
          Myntra, we share our similarities and celebrate our differences.
        </h4>

        <h4 class="twopara mt-15">
          We are creating a company that includes all people, and building a
          brand that reflect our diverse customers. Here’s how we are doing it.
          Be a part of us.
        </h4>

        <v-btn class="ma-2 mt-9 ml-15" outlined color="red">
          Explore Careers
        </v-btn>
      </v-col>

      <v-col cols="6">
        <div class="d-flex">
          <v-col cols="6">
            <v-img
              src="https://life.myntra.com/wp-content/uploads/2021/06/03.png"
              class="my-5"
            >
            </v-img>
            <v-img
              src="https://life.myntra.com/wp-content/uploads/2021/06/02.png"
            >
            </v-img>
          </v-col>

          <v-col cols="6">
            <v-img
              src="https://life.myntra.com/wp-content/uploads/2021/06/01.png"
              class="my-5"
            >
            </v-img>
            <v-img
              src="https://life.myntra.com/wp-content/uploads/2021/06/03.png"
            >
            </v-img>
          </v-col>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <div class="connect-bg">
        <v-container class="container">
          <div class="text-center">
            <h5 class="content">
              Our accolades and awards help us know that our commitment towards
              creating a safe and inclusive workplace is progressing.
            </h5>
          </div>
        </v-container>

        <div class="career-intro">
          <div class="container">
            <div class="career-intro__boxwrap">
              <div class="career-intro__box">
                <div>
                  <img
                    src="https://life.myntra.com/wp-content/uploads/2021/06/sdf3.jpg"
                  />
                </div>
              </div>

              <div class="career-intro__box">
                <div>
                  <img
                    src="https://careers.myntra.com/wp-content/uploads/2021/01/MYNTRA_LOGOUNITS-AWARDS-01.jpg"
                  />
                </div>
              </div>

              <div class="career-intro__box">
                <div>
                  <img
                    src="https://life.myntra.com/wp-content/uploads/2021/06/bcw-100.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- harish profile  -->
      <div>
        <Harish />
      </div>

      <!-- lalitha profile  -->

      <div>
        <Lalitha />
      </div>

      <!-- Inclusioncareear  -->
      <div>
        <Inclusioncareear />
      </div>

      <!-- testmonials -->

      <div>
        <Testmonials />
      </div>

      <!-- inclustion  -->
      <div>
        <Inclution />
      </div>

      <!-- folloe linkdian page / -->
    </v-row>
  </div>
</template>

<script>
import Harish from '../../components/Blog/harish.vue'
import Lalitha from '../../components/Blog/lalitha.vue'
import Inclusioncareear from '../../components/Blog/inclusioncareear.vue'
import Testmonials from '../../components/Blog/testmonials.vue'
import Inclution from '../../components/Blog/inclution.vue'
export default {
  layout: 'newblog',
  components: { Harish, Lalitha, Inclusioncareear, Testmonials, Inclution },
  data() {
    return {
      images: [
        'https://life.myntra.com/wp-content/uploads/2021/06/02.png',
        'https://life.myntra.com/wp-content/uploads/2021/06/03.png',
        'https://life.myntra.com/wp-content/uploads/2021/06/02.png',
        'https://life.myntra.com/wp-content/uploads/2021/06/03.png',
      ],
    }
  },
}
</script>

<style>
.onepara {
  font-family: 'Montserrat';
  font-size: 32px;
  font-weight: 1000;
  line-height: 51px;
  color: #4e5364;
  text-transform: uppercase;
  position: relative;
}
.twopara {
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #000;
}
.connect-bg {
  background-image: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/bgg-sec2.png');
  background-repeat: round;
  padding: 130px 0px 80px 0;
  width: 100%;
  z-index: 1;
  position: relative;
}
.container {
  max-width: 1200px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}
.content {
  text-transform: initial;
  font-size: 32px;
  font-weight: 500;
  max-width: 1000px;
  font-style: normal;
  font-family: Montserrat;
  color: #ffffff;
  line-height: 45px;
  margin-left: auto !important;
}
.career-intro {
  margin-top: 150px;
}
.career-intro {
  position: relative;
  background: #fff;
  text-align: center;
  z-index: 1;
}
/* .career-intro::before {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 100%;
    padding-bottom: 81px;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
} */
.career-intro__boxwrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.career-intro__box:first-of-type {
  margin-left: 0;
  -webkit-transform: rotate(-4deg);
  -ms-transform: rotate(-4deg);
  transform: rotate(-4deg);
}
.career-intro__box {
  width: 220px;
  height: 220px;
  -webkit-border-radius: 46px;
  border-radius: 46px;
  -webkit-box-shadow: 0 0 16px 4px rgb(0 0 0 / 5%);
  box-shadow: 0 0 16px 4px rgb(0 0 0 / 5%);
  display: inline-block;
  padding: 10px;
  margin: -150px 25px 0;
  background: #fff;
  position: relative;
  top: 50px;
}
.career-intro__box:first-of-type > div {
  -webkit-transform: rotate(4deg);
  -ms-transform: rotate(4deg);
  transform: rotate(4deg);
}

.career-intro__box > div {
  height: 200px;
  width: 200px;
  padding: 15px;
  background-image: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/career/logo-sub-bg.svg);
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100%;
  -webkit-border-radius: 46px;
  border-radius: 46px;
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}
.career-intro__box > div img,
.career-intro__boxwrap > img {
  display: inline;
  opacity: 0.806454;
}
.career-intro__box img {
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  max-width: calc(100% - 40px);
  max-height: calc(100% - 40px);
  position: absolute;
}
fieldset,
img {
  border: 0;
}
img {
  vertical-align: middle;
}
</style>