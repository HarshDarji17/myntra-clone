<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="5" class="about-img">
          <img
            class="about-leaders__img"
            src="https://life.myntra.com/wp-content/uploads/2019/12/harish_narayanan.png"
          />
        </v-col>

        <v-col cols="7" class="leader-slider__text mt-3 mt-md-0">
          <h2>Harish Narayanan</h2>
          <label> Chief Marketing Officer </label>
          <p>
            Diversity is the lifeblood of creativity and ideas. More
            perspectives, more color, more variety, more surprises - isn't this
            what makes fashion so amazing? An organization that is delivering
            the nation's leading fashion platform should also reflect this
            diversity and passion in the core of its thinking. That is why at
            Myntra, we celebrate our differences and amplify the voices of
            everyone. We are building a workspace where everyone feels safe,
            welcome and appreciated.
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.about-img::before {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  left: 150px;
  top: 35px;
  position: absolute;
  z-index: -1;
}
.about-img::after {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  right: 3px;
  bottom: -20px;
  position: absolute;
  z-index: -1;
}
.about-img {
  margin: auto 0;
  text-align: center;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  position: relative;
  z-index: 1;
}

.about-leaders__img::before {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  left: -17px;
  top: -17px;
  position: absolute;
  z-index: -1;
  margin: auto 0;
  text-align: center;
}
.about-leaders__img:hover {
  -webkit-transform: scale(1.11);
  -ms-transform: scale(1.11);
  transform: scale(1.11);
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}
.about-leaders__img {
  margin-left: 130px;
  margin-top: 50px;
}
.about_profile {
  font-size: 26px;
  font-weight: 600;
  color: #353a50;
  font-family: 'Source Sans Pro', sans-serif;
  margin-bottom: 5px;
  line-height: 1.33;
  margin-top: 13px;
}
.about_position {
  font-size: 14px;
  line-height: 1.27;
  color: #353a50;
  margin-bottom: 0;
}
.leader-slider__text {
  width: calc(100% - 250px);
  padding: 30px 50px 30px 80px;
}

.leader-slider__text h2 {
  margin-top: -10px;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 5px;
  background-image: -webkit-linear-gradient(355deg, #f82e94 0%, #ff9e33 100%);
  background-image: -o-linear-gradient(355deg, #f82e94 0%, #ff9e33 100%);
  background-image: linear-gradient(95deg, #f82e94 0%, #ff9e33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 40px;
  position: relative;
  font-weight: 700;
  color: #ff9d34;
  font-size: 28px;
  line-height: 1.2;
  font-size: 50px;
  line-height: 60px;
}
.about-leaders h2 span,
.leader-slider__text h2,
.leader-slider__text label {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.leader-slider__text h2::before {
  content: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/leader-title-left.svg);
  position: absolute;
  left: -90px;
  top: 10px;
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: top;
  -ms-transform-origin: top;
  transform-origin: top;
}
.leader-slider__text label {
  font-size: 20px;
  line-height: 30px;
  color: #353a50;
  font-weight: 600;
  margin: 0;
}
p {
  color: #333333;
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  margin-bottom: 0;
  margin: 0;
  line-height: 1.56;
}
.leader-slider__text p::before {
  content: '\0000a0';
  display: block;
}
</style>