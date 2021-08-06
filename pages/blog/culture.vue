<template>
  <div>
    <div class="life-page-section">
      <div class="banner-section life-banner">
        <div class="life-banner-image"></div>

        <h2 class="life-banner__title">
          <img
            src="https://life.myntra.com/wp-content/uploads/2019/12/life-title.svg"
            alt
          />
        </h2>

        <!-- scrooling effect   -->
        <div class="container banner-scrollwrap">
          <div class="banner-scrolldown-w">
            <p class="banner-scrolldown-text">
              <span> </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- culturre image  -->

    <div>
      <Cultureimage />
    </div>
    <!-- be part   -->

    <!-- <div>

                      <Bepartcarrer />

                        </div>
              -->
  </div>
</template>

<script>
import Bepartcarrer from '~/components/Blog/bepartcarrer.vue'
import Cultureimage from '~/components/Blog/cultureimage.vue'
export default {
  components: { Cultureimage, Bepartcarrer },
  layout: 'newblog',
}
</script>

<style>
.life-page-section {
  background: #f9f9f9;
}

.life-banner .life-banner-image {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://life.myntra.com/wp-content/uploads/2020/02/2020-02-13.png);
}
.banner-section {
  padding-bottom: 40%;
}
.life-banner__title {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  height: 210px;
}
h2 {
  font-size: 40px;
  font-family: 'Nunito Sans', sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
}
.banner-scrollwrap {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.banner-scrolldown-w {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
}
.banner-scrolldown-text {
  margin: 0;
}
p {
  color: #333333;
  font-size: 20px;
  font-family: 'Nunito Sans', sans-serif;
}
.banner-scrolldown-text span {
  width: 23px;
  height: 36px;
  -webkit-border-radius: 17px;
  border-radius: 17px;
  border: 1px solid #fff;
  display: block;
  margin-bottom: 20px;
  position: relative;
  -webkit-animation: nudgeMouse 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite;
  animation: nudgeMouse 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
}
.banner-scrolldown-text span::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 3px;
  top: 8px;
  border-radius: 5px;
  background: #fd913c;
  left: 0;
  right: 0;
  margin: 12px auto 0;
  animation: trackBallSlide 2.4s cubic-bezier(0, 0, 0.725, 1) infinite;
  animation-duration: 2.4s;
  animation-timing-function: cubic-bezier(0, 0, 0.725, 1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: trackBallSlide;
}
*:after,
*:before {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>