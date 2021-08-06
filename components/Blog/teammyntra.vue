<template>
  <div>
    <div class="career-team">
      <v-hover v-slot="{ hover }">
        <v-container class="container">
          <div class="career-team__title">
            <img
              src="https://careers.myntra.com/wp-content/uploads/2019/12/career-team-title-1.svg"
              alt
            />
            <p>We are "Great Together" & that's how we "Make it Happen</p>
          </div>

          <div class="career-team__boxwrap swiper-container">
            <div class="swiper-wrapper career-wrapper">
              <!-- 1 -->
              <div class="career-team-slide">
                <div class="career-team__box career-team__box-1 readmore">
                  <div class="career-team__boximg">
                    <img
                      src="https://careers.myntra.com/wp-content/uploads/2019/12/career-circle1.svg"
                      alt
                    />
                  </div>
                  <h3>Technology</h3>
                  <p>Engineering | Product Management | UX</p>

                  <div class="career-team__readmore">
                    <!-- <nuxt-link   to="" class="readmore">
                                Read More
                           </nuxt-link> -->

                    <!-- <p v-if="hover" class="black--text">  read more</p> -->
                    <img
                      v-if="hover"
                      src="https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/right-arrow-white.svg"
                    />
                  </div>
                </div>
              </div>

              <!-- 2 -->

              <div class="career-team-slide">
                <div class="career-team__box career-team__box-2 readmore">
                  <div class="career-team__boximg">
                    <img
                      src="  https://careers.myntra.com/wp-content/uploads/2019/12/career-circle2.svg"
                      alt
                    />
                  </div>
                  <h3>Fashion</h3>
                  <p>Design | Category | Fashion | Brands</p>

                  <div class="career-team__readmore">
                    <!-- <nuxt-link   to="" class="readmore">
                                Read More
                           </nuxt-link> -->

                    <p>read more</p>
                    <img
                      src="	https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/right-arrow-white.svg"
                    />
                  </div>
                </div>
              </div>

              <!-- 3-->

              <div class="career-team-slide">
                <div class="career-team__box career-team__box-3 readmore">
                  <div class="career-team__boximg">
                    <img
                      src="https://careers.myntra.com/wp-content/uploads/2019/12/career-circle1.svg"
                      alt
                    />
                  </div>
                  <h3>Operations</h3>
                  <p>Supply Chain | Customer Care | Customer Experience</p>

                  <div class="career-team__readmore">
                    <!-- <nuxt-link   to="" class="readmore">
                                Read More
                           </nuxt-link> -->

                    <p>read more</p>
                    <img
                      src="https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/right-arrow-white.svg"
                    />
                  </div>
                </div>
              </div>

              <!-- 4-->

              <div class="career-team-slide">
                <div class="career-team__box career-team__box-4 readmore">
                  <div class="career-team__boximg">
                    <img
                      src="https://careers.myntra.com/wp-content/uploads/2019/12/career-circle1.svg"
                      alt
                    />
                  </div>
                  <h3>Strategy</h3>
                  <p>Marketing & Creative</p>

                  <div class="career-team__readmore">
                    <!-- <nuxt-link   to="" class="readmore">
                                Read More
                           </nuxt-link> -->

                    <p>read more</p>
                    <img
                      src="https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/right-arrow-white.svg"
                    />
                  </div>
                </div>
              </div>

              <!-- 5-->

              <div class="career-team-slide">
                <div class="career-team__box career-team__box-5 readmore">
                  <div class="career-team__boximg">
                    <img
                      src="https://careers.myntra.com/wp-content/uploads/2019/12/career-circle1.svg"
                      alt
                    />
                  </div>
                  <h3>Corporate Services</h3>
                  <p>
                    Human Capital | Finance | Admin | Legal | Public Relations
                  </p>

                  <div class="career-team__readmore">
                    <!-- <nuxt-link   to="" class="readmore">
                                Read More
                           </nuxt-link> -->

                    <p v-if="hover">read more</p>
                    <img
                      src="https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/right-arrow-white.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.career-team {
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/about/about-magic-bg.svg);
  overflow: hidden;
  padding-bottom: 230px;
}
.career-team .container {
  width: 1140px;
  left: auto;
  max-width: none;
  -ms-transform: none;
  transform: none;
  -ms-transform-origin: left;
  transform-origin: left;
  padding: 120px 15px;
  position: relative;
}
.career-team__title {
  height: 560px;
  text-align: center;
  position: relative;
  padding-right: 20px;
}
.career-team__title p {
  width: 320px;
  bottom: 147px;
  left: 125px;
  line-height: 22px;
  font-size: 24px;
  text-align: left;
  font-style: italic;
  position: absolute;
  color: #fff;
  right: 0;
  margin: 0 auto;
}
.career-team .swiper-container {
  overflow: inherit !important;
}
.career-team__boxwrap {
  width: 1130px;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  margin-top: 30px;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-slide,
.swiper-wrapper {
  /* transform: translate3d( 0,0,0); */
}
.swiper-wrapper {
  /* position: relative; */
  /* width: 100%; */
  /* height: 100%; */
  /* z-index: 1;
    display: flex;
    transition-property: transform,-webkit-transform;
    box-sizing: content-box; */
}
.career-team .career-team__box-1 {
  width: 244px;
  height: 244px;
  top: 235px !important;
  left: 20px !important;
  background-color: #f9398b;
}
.career-team__box {
  border-radius: 50%;
  position: absolute;
  /* padding: 30px; */
  /* -webkit-box-orient: vertical; */
  /* -webkit-box-direction: normal; */
  /* -ms-flex-direction: column; */
  flex-direction: column;
  text-align: center;
  /* pointer-events: all; */
}
.career-team__box,
.career-team__box .career-team__readmore {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
}
.career-team__boximg {
  position: absolute;
  left: 0;
  top: 0;
}
.career-team__title img {
  height: 560px;
  margin-right: 95px;
}
.career-team__box img {
  width: 100%;
  height: 100%;
}
.career-team__box .career-team__readmore img {
  width: 21px !important;
  height: 14px !important;
}
.career-team__box h3 {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.42;
  font-style: italic;
}
.career-team__box p {
  color: #fff;
  font-size: 18px;
  line-height: 1.25;
  font-style: italic;
  margin: 0;
}
.career-team__box > :not(div) {
  /* transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s; */
}
.career-team__box .career-team__readmore {
  opacity: 0;
  /* transition: all ease .3s; */
  -webkit-box-align: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: -30px;
}

.career-team .career-team__box-1::after {
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/border-1.svg);
  width: calc(100% + 15px);
  height: calc(100% + 15px);
  left: -12px;
  background-position: left;
  top: -60px;
}
.career-team__box::after {
  content: '';
  position: absolute;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.readmore:hover {
  color: #fff;
}

/* ////////////////2 */
.career-team .career-team__box-2 {
  width: 316px;
  height: 316px;
  left: 100px !important;
  bottom: -30px !important;
  background-color: #fd7f4e;
}
.career-team .career-team__box-2::after {
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/border-2.svg);
  width: 100%;
  height: 95%;
  top: 41px;
  left: -47px;
}

/* ////////////3 */

.career-team .career-team__box-3 {
  width: 280px;
  height: 280px;
  bottom: -100px !important;
  left: 460px !important;
  background-color: #f9398b;
}

.career-team .career-team__box-3::after {
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/border-3.svg);
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  bottom: -56px;
  right: -8px;
  background-position: right;
}

/* /////////////////4 */

.career-team .career-team__box-4 {
  width: 230px;
  height: 230px;
  right: 130px !important;
  bottom: 41px !important;
  background-color: #fc6862;
}

.career-team .career-team__box-4::after {
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/border-4.svg);
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  bottom: -59px;
  left: -72px;
  background-position: left;
}

/* ///////////////5 */
.career-team .career-team__box-5 {
  width: 316px;
  height: 316px;
  right: 0 !important;
  top: 145px !important;
  background-color: #fe943b;
}
.career-team .career-team__box-5::after {
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/career/border-5.svg);
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  top: -30px;
  -webkit-background-size: contain;
  background-size: contain;
  right: -47px;
}
</style>