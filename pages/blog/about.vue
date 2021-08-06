<template>
<div>
  <div class="about-banner" id="banner">
        <img src="https://life.myntra.com/wp-content/uploads/2020/06/About_US.svg" />
  </div>

 

   <div class="about-timeline__head">
        <img src="https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/decade-awesome.svg" />
   </div>

   <div>  
   <Yearslider />

   </div>

  

<div class="about-magic px-2 px-md-0 aos-init aos-animate" data-aos="fade" data-anchor-placement="about-magic"> 

   <v-container class="container">
      

         
       <h2 class="about-magic__title">  We create

       <img src="https://life.myntra.com/wp-content/uploads/2019/12/about-magic.svg" />

       <br>

       <span class="mt-2 mt-sm-0"> with our values </span>

      </h2> 


      <div  class="about-magic__define col-md-12">
       
         <div    class="about-magic" v-for="(magc,i) in magic" :key="i"> 


                            <!-- image  -->
             <div class="about-magic__defineimg">  
                  <img :src="magc.img" />
             </div>   

                                 <!-- text -->

               <div class="about-magic__definetext">
                      <span> {{ magc.font}} </span>

                      <div> 

                          <h3 class="magic-b"> {{ magc.title}}</h3>
                          <p> {{magc.subtitle}}</p>
                      </div>   
                   </div>                  


         </div>   
      </div>



       <!-- /// video  -->

       <div class="about-magic__video">
      
 <embed src="https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/video-frame.svg">
<video width="1100" controls>
       <source :src="(`https://life.myntra.com/wp-content/uploads/2020/01/Myntra_MAGIC-VIDEO.mp4` + video)" type="video/mp4">
       Your browser does not support HTML video.
   </video>
</embed>

       </div>
      
   </v-container>  


   </div>  

                            <!-- meet our leaders  -->

   <div class="about-leaders">
             <h2>  Meet our 
             <span class="mt-2 mt-md-0">Leaders</span>
             </h2>
             <img  class="about-leaders__pattern" src="https://life.myntra.com/wp-content/uploads/2019/12/leader-bgpattern.svg" alt>
             
             <div class="section"> 
                <div class="about-leaders__gallery">  
                      <div class="about-img"> 
                            <img class="about-leaders__img "  src="https://life.myntra.com/wp-content/uploads/2019/12/amar_nagaram.png">  
                            <h3 class="about_profile mt-9"> Amar Nagaram</h3> 
                            <p class="about_position">CEO - Myntra</p>
                      </div>   
                </div>    

             </div> 

             

           
             
   </div>


 
                                     <!-- profile  -->
   <div class="mt-3">
      <Profile />
  </div>

</div>




</template>

<script>
import Yearslider from '~/components/Blog/yearslider.vue'
import Profile from '../../components/Blog/profile.vue'
export default {
  layout: 'newblog',
  components: { Profile, Yearslider },

  data() {
    return {
      video: '',
      value: 0,
      fruits: 0,
      images: [
        'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo1.png',
        'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo5.png',
        'https://life.myntra.com/wp-content/uploads/2019/12/flipkart-logo.png',
        'https://life.myntra.com/wp-content/uploads/2019/12/myntra-logo.svg',
        'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo2.png',
        'https://life.myntra.com/wp-content/uploads/2019/12/myntra-jabong.png',
      ],
      ticksLabels: [
        'Figs',
        'Lemon',
        'Pear',
        'Apple',
        'Banana',
        'Aspli',
        'Good',
      ],

      Timeline: [
        {
          image:
            'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo1.png',
          text: 'Founded as an online portal to sell personalized gift items',
          year: '2007',
        },

        {
          image:
            'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo5.png',
          text: 'Founded as an online portal to sell personalized gift items',
          year: '2007',
        },

        {
          image:
            'https://life.myntra.com/wp-content/uploads/2019/12/slide-logo2.png',
          text: 'Founded as an online portal to sell personalized gift items',
          year: '2007',
        },

        {
          image:
            'https://life.myntra.com/wp-content/uploads/2019/12/myntra-jabong.png',
          text: 'Founded as an online portal to sell personalized gift items',
          year: '2007',
        },

        {
          image:
            'https://life.myntra.com/wp-content/uploads/2019/12/walmart-logo.png',
          text: 'Founded as an online portal to sell personalized gift items',
          year: '2007',
        },

        {
          image: 'https://life.myntra.com/wp-content/uploads/2020/01/Insta.svg',
          text: 'Founded as an online portal to sell personalized gift items',
          year: '2007',
        },
      ],

      magic: [
        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/magic-m.svg',
          font: 'M',
          title: 'Make it happen',
          subtitle: 'Thats how we get things done',
          color: 'red',
        },

        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/magic-a.svg',
          font: 'A',
          title: 'Aim High',
          subtitle: 'Thats how we break records',
          color: 'blue',
        },

        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/magic-g.svg',
          font: 'G',
          title: 'Great Together',
          subtitle: 'Thats how we get things done',
          color: 'pink',
        },

        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/magic-i.svg',
          font: 'I',
          color: '#c2aa31',
          title: 'Integrity',
          subtitle: 'Thats how we get things done',
          color: 'white',
        },

        {
          img: 'https://life.myntra.com/wp-content/uploads/2019/12/magic-c.svg',
          font: 'C',
          title: 'Consumer First   ',
          subtitle: 'Thats how we get things done',
        },
      ],

      items: [
        '<iframe width="560" height="315" ' +
          'src="https://life.myntra.com/wp-content/uploads/2020/01/Myntra_MAGIC-VIDEO.mp4" ' +
          'frameborder="0" allow="autoplay; encrypted-media" ' +
          'allowfullscreen></iframe>',
      ],
    }
  },
}
</script>

<style>
.about-banner {
  height: 590px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center top;
  position: relative;
  padding-bottom: 120px;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  z-index: 1;
}

#banner {
  background: url('https://life.myntra.com/wp-content/uploads/2019/12/banner.png')
    no-repeat center center fixed !important;
  background-size: cover;
}
.about-banner::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.9;
  left: 0;
  top: 0;
  z-index: -1;
}
*:after,
*:before {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
/* .about-intro {
    padding: 165px 0 330px;
}
@media only screen and (min-width: 768px){
.about-intro--pattern {
    bottom: 105px;
}
}
.about-intro--pattern {
    position: absolute;
    bottom: 50px;
    margin: 0 auto;
    left: -150px;
    z-index: -1;
    right: 0;
}
.about-intro--pattern svg {
    width: 1307px!important;
    max-width: 95%!important;
}
.about-intro--pattern img, .about-intro--pattern svg {
    max-width: 95%;
    margin: 0 auto;
    display: block;
}
svg:not(:root) {
    overflow: hidden;
} */
.about-timeline__head {
  width: 100%;
  text-align: center;
}

/* ////////// */

/* .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
    flex-direction: row;
    
}
.swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
.about-timeline__slider .swiper-slide {
    width: auto;
    border-bottom: 2px solid #353a50;
    height: auto;
}
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
}
.about-timeline__item {
    width: 300px;
    max-width: 100%;
    padding-left: 67px;
    padding-top: 70px;
    padding-right: 20px;
}
.about-timeline__item::before {
    content: "";
    position: absolute;
    width: 1px;
    border-left: 2px dashed #d1d1dd;
    height: 100%;
    top: 0;
    left: 38px;
}
.about-timeline__year {
    position: absolute;
    left: 13px;
    bottom: -50px;
    font-size: 26px;
}
.about-timeline__year::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: #353a50;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -15.5px;
}
.about-timeline__desc p, .about-timeline__year {
    font-family: "Source Sans Pro",sans-serif;
    color: #353a50;
}
.about-timeline__logo {
    max-width: 85%;
    margin-bottom: 20px;
    height: 70px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.about-timeline__logo img {
    max-width: 100%;
}
fieldset, img {
    border: 0;
}
img {
    vertical-align: middle;
    border-style: none;
}  
.about-timeline__item::after {
    content: "";
    position: absolute;
    background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,0)),to(#fff));
    background-image: -webkit-linear-gradient(bottom,rgba(255,255,255,0) 0%,#fff 100%);
    background-image: -o-linear-gradient(bottom,rgba(255,255,255,0) 0%,#fff 100%);
    background-image: linear-gradient(to top,rgba(255,255,255,0) 0%,#fff 100%);
    width: 2px;
    height: 100%;
    left: 38px;
    top: 0;
}  
.about-timeline__slider .swiper-slide {
    width: auto;
    border-bottom: 2px solid #353a50;
    height: auto;
}
.about-timeline__item {
    width: 300px;
    max-width: 100%;
    padding-left: 67px;
    padding-top: 70px;
    padding-right: 20px;
}
.about-timeline__item::before {
    content: "";
    position: absolute;
    width: 1px;
    border-left: 2px dashed #d1d1dd;
    height: 100%;
    top: 0;
    left: 38px;
} 
.swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
.about-timeline__slider .swiper-button-next, .about-timeline__slider .swiper-button-prev {
    width: 230px;
    height: 100%;
    margin: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    -webkit-background-size: cover;
    background-size: cover;
    pointer-events: none;
}
@media only screen and (min-width: 768px)
{
.about-timeline__slider .swiper-button-next span {
    right: 40px;
}
}
.about-timeline__slider .swiper-button-next span {
    right: 25px;
}
@media only screen and (min-width: 1200px)
{
.about-timeline__slider .swiper-button-next span, .about-timeline__slider .swiper-button-prev span {
    -webkit-background-size: 25px 102px;
    background-size: 25px 102px;
    height: 100%;
    width: 25px;
}
}
@media only screen and (min-width: 768px)
{
.about-timeline__slider .swiper-button-next span, .about-timeline__slider .swiper-button-prev span {
    right: 40px;
    -webkit-background-size: 15px 102px;
    background-size: 15px 102px;
    height: 100%;
    width: 15px;
}
}

@media only screen and (min-width: 320px){
.about-timeline__slider .swiper-button-next span, .about-timeline__slider .swiper-button-prev span {
    -webkit-background-size: 10px 102px;
    background-size: 10px 102px;
    height: 100%;
    width: 10px;
    right: 25px;
}
}
.about-timeline__slider .swiper-button-next span, .about-timeline__slider .swiper-button-prev span {
    content: "";
    position: absolute;
    background-image: url("https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/slide-arrow.svg");
    pointer-events: all;
    background-repeat: no-repeat;
    opacity: .3;
}
.about-timeline__slider .swiper-button-next, .about-timeline__slider .swiper-button-next span, .about-timeline__slider .swiper-button-prev, .about-timeline__slider .swiper-button-prev span {
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),to(#fff));
    background-image: -webkit-linear-gradient(left,rgba(255,255,255,0) 0%,#fff 100%);
    background-image: -o-linear-gradient(left,rgba(255,255,255,0) 0%,#fff 100%);
    background-image: linear-gradient(to right,rgba(255,255,255,0) 0%,#fff 100%);
    background-position: center;
    -webkit-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
}
.about-timeline__slider .swiper-button-next, .about-timeline__slider .swiper-button-next span, .about-timeline__slider .swiper-button-prev, .about-timeline__slider .swiper-button-prev span {
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),to(#fff));
    background-image: -webkit-linear-gradient(left,rgba(255,255,255,0) 0%,#fff 100%);
    background-image: -o-linear-gradient(left,rgba(255,255,255,0) 0%,#fff 100%);
    background-image: linear-gradient(to right,rgba(255,255,255,0) 0%,#fff 100%);
    background-position: center;
    -webkit-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
}
[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%2");
    right: 10px;
    left: auto;
}
.swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
}
.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}
.about-timeline__slider {
    padding-bottom: 70px;
}
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
} */

/* //////////// */

.container {
  max-width: 1200px;
  margin: 0 auto;
  background-image: 'https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/about-magic-bg.svg';
}

.about-magic__title {
  font-size: 60px;
  min-width: 992px;
}

.about-magic__title {
  font-size: 80px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  max-width: 850px;
  width: 100%;
  line-height: 1.2;
  margin: 0 auto;
}
h2 {
  font-size: 80px;
  font-family: 'Nunito Sans', sans-serif;
}
.about-magic {
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  padding: 60px 0;
  background-image: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/about-magic-bg.svg');
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.about-magic__title img {
  height: 180px;
}
.about-magic__title img {
  height: 180px;
  display: inline-block;
  margin-bottom: -25px;
  vertical-align: bottom;
  margin-left: 16px;
  position: relative;
  margin-right: 50px;
}
.about-magic__title span {
  text-align: right;
  display: block;
}
.mt-sm-0,
.my-sm-0 {
  margin-top: 0 !important;
}
.about-magic__define {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 40px -20px;
  margin-bottom: 0 !important;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.about-magic__defineimg {
  height: 50px;
  margin-bottom: 15px;
}

.about-magic__definetext {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.about-magic__definetext span {
  font-size: 70px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.1;
  line-height: 0.8;
  margin-right: 10px;
  margin-top: 50px;
  text-indent: -3px;
  display: block;
}
.about-magic__definetext span:hover {
  color: #49a5cd;
  opacity: 1;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
.about-magic__definetext h3 {
  color: #49a5cd;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  margin-top: 40px;
}
.about-magic__definetext p {
  font-size: 14px;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  max-width: 125px;
}

.about-magic__definetext h3.magic-a {
  color: #49a5cd;
}

.about-magic__definetext h3.magic-b {
  color: #c2aa31;
}
.about-magic__video embed {
  width: 100%;
  display: inline-block;
  margin-top: 20px;
}

/* ////////////////////////////////////// */

.about-leaders {
  margin-top: -60px;
  padding: 190px 0 80px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#f5f5f5),
    to(#fcfcfc)
  );
  background-image: -webkit-linear-gradient(bottom, #f5f5f5 0%, #fcfcfc 100%);
  background-image: -o-linear-gradient(bottom, #f5f5f5 0%, #fcfcfc 100%);
  background-image: linear-gradient(to top, #f5f5f5 0%, #fcfcfc 100%);
  overflow: hidden;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.about-leaders h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 46px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 0.9;
  color: #1c1f2c;
  display: inline-block;
  /* text-align: left; */
  margin-left: 500px;
  position: relative;
}

.about-leaders h2::before {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/leader-title-left.svg');
  position: absolute;
  left: -75px;
  top: -63px;
}
.about-leaders h2 span,
.leader-slider__text h2,
.leader-slider__text label {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.about-leaders h2 span {
  display: block;
  font-size: 56px;
  font-weight: 800;
  color: #ff9d34;
  line-height: 0.9;
  background-image: -webkit-linear-gradient(355deg, #f82e94 0%, #ff9e33 100%);
  background-image: -o-linear-gradient(355deg, #f82e94 0%, #ff9e33 100%);
  background-image: linear-gradient(95deg, #f82e94 0%, #ff9e33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mt-md-0,
.my-md-0 {
  margin-top: 0 !important;
}

.about-leaders h2::after {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/leader-title-right.svg');
  position: absolute;
  right: -67px;
  top: -20px;
}

.about-leaders__pattern {
  position: absolute;
  right: -18 px;
  top: 210px;
  max-width: 35%;
}
fieldset,
img {
  border: 0;
}
img {
  vertical-align: middle;
  border-style: none;
}

/* ///////////////////////////////////////////// */
.section {
  max-width: 1200px;
  margin: 0 auto;
}
.about-leaders__gallery {
  margin-top: 100px;
}

.about-leaders__gallery .row {
  margin-left: -30px;
  margin-right: -30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.about-leaders__card {
  margin-bottom: 40px;
}

/* .about-leaders__img{
        content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
        margin: 0 auto;
        position: relative;
    z-index: 1;
} */

.about-img::before {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  left: 430px;
  top: -21px;
  position: absolute;
  z-index: -1;
}
.about-img::after {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  right: 430px;
  bottom: 70px;
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
  top: 37px;
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
</style>