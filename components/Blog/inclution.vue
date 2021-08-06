<template>
  <div>
    <div class="support-inclusion supp-pad support-bg position-relative">
      <div class="text-center">
        <img
          src="https://life.myntra.com/wp-content/uploads/2021/06/how-support.png"
          height="219px"
          class="mb-15"
        />
      </div>

      <img
        class="side-img1"
        src="https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/support-side-img.png"
      />

      <img
        class="side-img2"
        src="https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/support-side-img.png"
      />

      <v-container class="container">
        <v-row>
          <!-- part1 -->

          <!-- two image  -->
          <v-col cols="3">
            <div class="card mb-3 position-relative">
              <img
                src="https://life.myntra.com/wp-content/uploads/2020/07/0-2.jpg"
                height="219px"
                width="100%"
              />

              <div class="event-absol new-event">
                <nuxt-link to="/">
                  <span class="storiess-a"> #Inclustion</span>
                </nuxt-link>
              </div>
            </div>

            <div>
              <div class="mb-3 position-relative">
                <img
                  src="https://life.myntra.com/wp-content/uploads/2020/07/MYNTRA-PrideCarousel-1_page-0001.jpg"
                  height="219px"
                  width="100%"
                />
                <div class="event-absol new-event">
                  <nuxt-link to="/">
                    <span class="storiess-a"> #Inclustion</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </v-col>

          <!-- end two image  -->

          <!-- part2 -->

          <v-col cols="6">
            <!-- one big img  -->

            <div class="card position-relative mb-3">
              <div class="video-wrapper w-100 mt-3 mt-md-0">
                <div class="card">
                  <img
                    src="https://life.myntra.com/wp-content/uploads/2020/01/diversity-and-inclusion-.jpg"
                    height="316px"
                    width="100%"
                  />
                </div>
              </div>

              <div class="event-absol new-event">
                <nuxt-link to="/">
                  <span class="storiess-a"> #Inclustion</span>
                </nuxt-link>
              </div>
            </div>

            <!-- end one big image  -->

            <!-- row -img1-img2 -->
            <v-row>
              <!--row  img1  -->
              <v-col cols="6">
                <div class="card mb-3 position-relative ply">
                  <img
                    src="https://life.myntra.com/wp-content/uploads/2020/01/beyourself.jpg"
                    height="155px"
                    width="100%"
                  />

                  <div class="event-absol new-event">
                    <nuxt-link to="/">
                      <span class="storiess-a"> #Inclustion</span>
                    </nuxt-link>
                  </div>
                </div>
              </v-col>

              <!-- row img2 -->
              <v-col cols="6">
                <div class="card mb-3 position-relative ply">
                  <img
                    src="https://life.myntra.com/wp-content/uploads/2019/12/Diversity2.jpg"
                    height="155px"
                    width="100%"
                  />

                  <div class="event-absol new-event">
                    <nuxt-link to="/">
                      <span class="storiess-a"> #Inclustion</span>
                    </nuxt-link>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <!-- part 3 -->

          <v-col cols="3">
            <div class="card mb-3 position-relative">
              <img
                src="https://life.myntra.com/wp-content/uploads/2019/11/life-img2.png"
                height="219px"
                width="100%"
              />

              <div class="event-absol new-event">
                <nuxt-link to="/">
                  <span class="storiess-a"> #Inclustion</span>
                </nuxt-link>
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="text-center position-relative supp-pad-mar mt-5">
          <nuxt-link to="">
            <img
              src="https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/stories-border.png"
            />
            <span class="stories-a"> Read More</span>
          </nuxt-link>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.supp-pad {
  padding: 42px 0 0 0;
  z-index: 1 !important;
}
.support-bg {
  height: auto;
  background-image: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/bgg-pink.png);
  margin-top: -25px;
  background-repeat: no-repeat;
  width: 110%;
}
.position-relative {
  position: relative !important;
}
.text-center {
  text-align: center !important;
}
.side-img1 {
  position: absolute;
  bottom: 100px;
  left: -9px;
}
.side-img2 {
  position: absolute;
  top: 249px;
  right: 37px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.storiess-a {
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #f82e94;
  left: 16%;
  padding: 4px 0 0 0;
}

.new-event {
  background-image: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/event-border.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 100;
  padding: 10px 15px 10px 15px;
  margin-left: 70px;
}
.event-absol {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.video-wrapper {
  position: relative;
  z-index: 10;
}
.mt-md-0,
.my-md-0 {
  margin-top: 0 !important;
}
.supp-pad-mar {
  padding-bottom: 75px;
}
.text-center {
  text-align: center !important;
}
.stories-a {
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #f82e94;
  position: absolute;
  right: 46%;
  left: 46%;
  padding: 8px 0 0 0;
  white-space: nowrap;
}
</style>