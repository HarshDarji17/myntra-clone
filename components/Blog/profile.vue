<template>
  <div>
    <!-- all profile  -->
    <!-- <div class="col-sm-12 d-flex ml-15">
                 <div v-for="profile in profiles" :key="profile.name" class="ma-5">    
                            <img class="about-leaders__img"  :src="profile.src">  
                            <h3 class="about_profile">{{profile.name}}</h3> 
                            <p class="about_position">{{profile.position}}</p>
                               
                    
              
                 
            </div>
                   </div> -->
    <v-container class="d-flex mt-9">
      <v-row class="ml-5">
        <v-col cols="3" class="about-imges">
          <img
            class="about-leaders__img"
            src="https://life.myntra.com/wp-content/uploads/2019/12/amar_nagaram.png"
          />
          <h3 class="about_profile">Amar Nagaram</h3>
          <p class="about_position">CEO - Myntra</p>
        </v-col>

        <v-col cols="3" class="about-imges">
          <img
            class="about-leaders__img"
            height="290px"
            width="230px"
            src="https://life.myntra.com/wp-content/uploads/2019/12/harish_narayanan.png"
          />
          <h3 class="about_profile">Harish Narayanan</h3>
          <p class="about_position">Chief Marketing Officer</p>
        </v-col>

        <v-col cols="3" class="about-imges">
          <img
            class="about-leaders__img"
            height="290px"
            width="230px"
            src="https://life.myntra.com/wp-content/uploads/2020/04/lalithaRamani.png"
          />
          <h3 class="about_profile">Lalitha Ramani</h3>
          <p class="about_position">Chief Product Officer</p>
        </v-col>

        <v-col cols="3" class="about-imges">
          <img
            class="about-leaders__img"
            height="290px"
            width="230px"
            src="https://life.myntra.com/wp-content/uploads/2019/12/ramesh_bafna.png"
          />
          <h3 class="about_profile">Ramesh Bafna</h3>
          <p class="about_position">Chief Finance Officer</p>
        </v-col>

        <v-col cols="3" class="about-im">
          <img
            class="about-leaders__img"
            height="290px"
            width="230px"
            src="https://life.myntra.com/wp-content/uploads/2019/12/manohar_kamat.png"
          />
          <h3 class="about_profile">Manohar Kamnath</h3>
          <p class="about_position">CXO - cheif Myntra Fashion Brands</p>
        </v-col>

        <v-col cols="3" class="about-imges">
          <img
            class="about-leaders__img"
            height="290px"
            width="230px"
            src="https://life.myntra.com/wp-content/uploads/2020/02/004A1157-1.jpg"
          />
          <h3 class="about_profile">Raghu Krishnananda</h3>
          <p class="about_position">Chief Technology Officer</p>
        </v-col>

        <v-col cols="3" class="about-imges">
          <img
            class="about-leaders__img"
            height="290px"
            width="230px"
            src="https://life.myntra.com/wp-content/uploads/2020/02/Profile_Sneha-Arora.jpg"
          />
          <h3 class="about_profile">Sneha Arora</h3>
          <p class="about_position">Vice President - Human Capital</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
.about_profile {
  position: relative;
  z-index: 1;
}

.about-im::before {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  left: -17px;
  top: -17px;
  position: absolute;
  z-index: -1;
}
.about-im::after {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  right: -7px;
  bottom: 95px;
  position: absolute;
  z-index: -1;
}

.about-im {
  margin-left: 160px;
  transition: all 0.2s ease-in-out;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  position: relative;
  z-index: 1;
}

.about-imges::before {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  left: -17px;
  top: -17px;
  position: absolute;
  z-index: -1;
}
.about-imges::after {
  content: url('https://life.myntra.com/wp-content/themes/myntra_life/assets/img/about/dotted-border.svg');
  right: -7px;
  bottom: 95px;
  position: absolute;
  z-index: -1;
}

.about-imges {
  transition: all 0.2s ease-in-out;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  position: relative;
  z-index: 1;
}

.about-leaders__img {
  width: 230px;
  transform-origin: top center;
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