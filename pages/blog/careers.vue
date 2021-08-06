<template>
  <div>
    <div class="career-banner">
      <div>
        <picture>
          <source
            media="(min-width:465px)"
            srcset="
              https://careers.myntra.com/wp-content/uploads/2019/12/career-title.svg
            "
          />
          <img
            src="https://careers.myntra.com/wp-content/uploads/2019/12/career-title.svg"
          />
        </picture>

        <v-row class="mt-15">
          <v-col>
            <div>
              <p class="carrerp white--text">
                <strong class="disdtro white--text"> Disrupt </strong> the
                fashion <br />
                ecommerse industry
              </p>
            </div>
          </v-col>

          <v-divider vertical color="white" class="mr-15"></v-divider>

          <v-col>
            <div>
              <p class="carrerp white--text">
                Opportunity to
                <strong class="disdtro white--text"> impact </strong> <br />
                millions of customers
              </p>
            </div>
          </v-col>

          <v-divider vertical color="white" class="mr-15"></v-divider>

          <v-col>
            <div>
              <p class="carrerp white--text">
                Work with the
                <strong class="disdtro white--text"> best minds </strong> <br />
                in the industry
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div>
      <Epiccarrer />
    </div>

    <!-- right side svg explore carrers  -->
    <div>
      <nuxt-link to="" class="explore-btn show-link">
        <img
          src="https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/explore-logo.svg"
        />
      </nuxt-link>
    </div>

    <!-- why carrer  -->

    <div>
      <whymyntra />
    </div>

    <!-- border problem card issue  -->

    <div>
      <Myntraborder />
    </div>

    <!-- teammyntra  -->

    <div>
      <Teammyntra />
    </div>

    <!-- campous connect  -->

    <div>
      <Campousc />
    </div>

    <!-- career three  phase   -->

    <div>
      <Carrerthree />
    </div>

    <!-- mynyra life slider -->

    <div>
      <Myntralifeslider />
    </div>

    <!-- be part  carreer  -->

    <div>
      <Bepartcarrer />
    </div>
  </div>
</template>

<script>
import Campousc from '~/components/Blog/campousc.vue'
import Myntraborder from '~/components/Blog/myntraborder.vue'
import Teammyntra from '~/components/Blog/teammyntra.vue'
import Whymyntra from '~/components/Blog/whymyntra.vue'
import Epiccarrer from '../../components/Blog/epiccarrer.vue'
import Carrerthree from '../../components/Blog/carrerthree.vue'
import Myntralifeslider from '~/components/Blog/myntralifeslider.vue'
import Bepartcarrer from '~/components/Blog/bepartcarrer.vue'

export default {
  layout: 'newblog',
  components: {
    Epiccarrer,
    Whymyntra,
    Myntraborder,
    Teammyntra,
    Campousc,
    Carrerthree,
    Myntralifeslider,
    Bepartcarrer,
  },
}
</script>

<style>
.career-banner {
  padding: 150px 0 210px;
  background-image: url(https://careers.myntra.com/wp-content/uploads/2019/12/career-banner.jpg);
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
}
.carrerp {
  font-size: 28px;
  color: #fff;
  line-height: 1.35;
  display: inline;
  opacity: 0.9;
}
.disdtro {
  font-weight: 700;
}
.explore-btn.show-link {
  opacity: 1;
  pointer-events: all;
}

.explore-btn {
  position: fixed;
  right: -6px;
  bottom: 120px;
  z-index: 1;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transform-origin: right;
  -ms-transform-origin: right;
  transform-origin: right;
  pointer-events: none;
  opacity: 0;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
a {
  color: #ff3f6c;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
</style>