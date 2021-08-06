<template>
  <div>
    <v-overflow class="overflow-hidden">
      <div class="gallery-content__boxwrap">
        <v-row>
          <v-col cols="6">
            <div class="gallery-content__box">
              <div class="gallery-content__image"></div>

              <span> #Culture </span>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="gallery-content__box video">
              <div class="img">
                <iframe
                  class="embed-responsive-item"
                  id="video"
                  data-src="https://life.myntra.com/wp-content/uploads/2020/10/Myntra_EnggDay_AV_Wide_Opt.mp4"
                >
                </iframe>
              </div>

              <span> #Culture </span>
            </div>
          </v-col>

          <v-col cols="4">
            <div class="gallery-content__box">
              <div class="gallery-content__image1"></div>

              <span> #Culture </span>
            </div>
          </v-col>

          <v-col cols="4">
            <div class="gallery-content__box">
              <div class="gallery-content__image2"></div>

              <span> #Culture </span>
            </div>
          </v-col>

          <v-col cols="4">
            <div class="gallery-content__box">
              <div class="gallery-content__image3"></div>

              <span> #Culture </span>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-overflow>
  </div>
</template>

<script>
export default {}
</script>

<style>
.gallery-content .overflow-hidden,
.gallery-content__boxwrap {
  overflow: hidden;
  -webkit-border-radius: 8px;
  border-radius: 8px;
}
.gallery-content .row {
  margin-left: -10px;
  margin-right: -10px;
}
.gallery-content .row > div:nth-of-type(5n + 1),
.gallery-content .row > div:nth-of-type(5n + 2) {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}
.gallery-content .row > div {
  padding: 0 10px;
}
.gallery-content .row > div:nth-of-type(5n + 1) .gallery-content__box {
  margin-left: -16.1854px;
}
.gallery-content .row > div:nth-of-type(5n + 1) .gallery-content__box,
.gallery-content .row > div:nth-of-type(5n + 2) .gallery-content__box {
  height: 700px;
}
.about-leaders__gallery .row > div:nth-of-type(-n + 4),
.gallery-content .row > div:nth-of-type(-n + 2) .gallery-content__box,
.life-gallery__item:nth-of-type(-n + 3) {
  margin-top: 0;
}
.gallery-content__box,
.gallery-content__box .share-btn,
.gallery-content__image {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.gallery-content__box {
  height: 345px;
  margin-top: 20px;
  margin-left: 30px;
  -webkit-transform: skewX(-5deg);
  -ms-transform: skewX(-5deg);
  transform: skewX(-5deg);
  overflow: hidden;
  position: relative;
  display: block;
  cursor: pointer;
}
.gallery-content__image {
  background-image: url(https://life.myntra.com/wp-content/uploads/2020/10/0-3.jpg);
}
.gallery-content__image1 {
  background-image: url(https://life.myntra.com/wp-content/uploads/2020/10/0-2-e1601901618643.jpg);
}
.gallery-content__image2 {
  background-image: url(https://life.myntra.com/wp-content/uploads/2020/07/0-2.jpg);
}
.gallery-content__image3 {
  background-image: url(https://life.myntra.com/wp-content/uploads/2020/07/0-1.jpg);
}
.gallery-content .row > div:nth-of-type(5n + 1) .gallery-content__box > div {
  width: calc(100% + ((0.08749 * 370px) / 2));
  -webkit-transform-origin: top;
  -ms-transform-origin: top;
  transform-origin: top;
}
.gallery-content__box > div {
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transform: skewX(5deg);
  -ms-transform: skewX(5deg);
  transform: skewX(5deg);
}
.gallery-content .tab-pane:first-of-type .gallery-content__box span {
  display: block;
}
.gallery-content__box span {
  color: #ff3f6c;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.12;
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  padding: 10px 15px;
}
.gallery-content__box span::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  background: #fff;
}
.gallery-content__image:hover {
  -webkit-transform: scale(1.11);
  -ms-transform: scale(1.11);
  transform: scale(1.11);
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}
.gallery-content__image1:hover {
  -webkit-transform: scale(1.11);
  -ms-transform: scale(1.11);
  transform: scale(1.11);
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}
.gallery-content__image2:hover {
  -webkit-transform: scale(1.11);
  -ms-transform: scale(1.11);
  transform: scale(1.11);
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}
.gallery-content__image3:hover {
  -webkit-transform: scale(1.11);
  -ms-transform: scale(1.11);
  transform: scale(1.11);
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}
.gallery-content__image4:hover {
  -webkit-transform: scale(1.11);
  -ms-transform: scale(1.11);
  transform: scale(1.11);
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}

/* ///video  */

.gallery-content__box.video::before {
  content: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/video-play.svg);
  position: absolute;
  z-index: 1;
  width: 74px;
  height: 74px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #fff;
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
  left: 50%;
  top: 50%;
  -webkit-transform: skewX(5deg) translate(-50%, -50%);
  -ms-transform: skewX(5deg) translate(-50%, -50%);
  transform: skewX(5deg) translate(-50%, -50%);
  padding-left: 5px;
  padding-top: 5px;
}
.img {
  background-image: url(https://life.myntra.com/wp-content/uploads/2020/10/Screenshot_9.png);
}
.gallery-content__box.video > div::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(355deg, #ef2d8f 0%, #f49a37 100%);
  background-image: -o-linear-gradient(355deg, #ef2d8f 0%, #f49a37 100%);
  background-image: linear-gradient(95deg, #ef2d8f 0%, #f49a37 100%);
  opacity: 0.8;
  top: 0;
  left: 0;
}
</style>