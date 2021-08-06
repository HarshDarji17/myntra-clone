<template>
  <div>
    <div class="sharing-bg position-relative">
      <div class="text-center">
        <img
          class="supp-img"
          src="https://life.myntra.com/wp-content/uploads/2021/06/Group-1083.svg"
        />
      </div>
    </div>
    <!-- slider  -->
    <div>
      <!-- <v-row justify="space-around">
      <v-icon @click="model--" class="arrowmin">
        mdi-minus
      </v-icon>
      {{ model }}
      <v-icon @click="model++" class="arrowmax">
        mdi-plus
      </v-icon>
    </v-row> -->

      <v-carousel
        v-model="model"
        hide-delimiters
        cycle
        height="auto"
        width="100%"
        class="includetest"
      >
        <v-carousel-item v-for="(color, i) in colors" :key="i" width="100%">
          <v-container width="100%">
            <v-row>
              <v-col cols="5">
                <v-img
                  :src="color.img"
                  width="400px"
                  height="430px"
                  class="ml-11"
                >
                </v-img>
                <h3 class="testiname ml-11">{{ color.name }}</h3>
                <p class="testifield ml-11">{{ color.field }}</p>
              </v-col>

              <v-col cols="7">
                <p class="testititle">
                  {{ color.title }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        {
          img: 'https://life.myntra.com/wp-content/uploads/2021/06/Vaishali-Behere.jpg',
          name: 'Vaishali Behere',
          field: 'Manager Engineering',
          title:
            'Being a woman in tech shouldn’t be considered as something odd because just like men, we also want to experience the same set of learnings and challenges. You know your organization is truly practicing inclusivity when you are not overvalued or undervalued only because you belong to a specific gender. At Mynta the only thing that matters is your skills. I have been at Myntra for 5 years now and it has been a wonderful journey full of excitement, challenges, immense learning and personal growth. I have come a long way from being an individual contributor to managing a team of 10. I am constantly learning from a diverse and talented set of people around me and this exposure is what keeps me motivated.',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2021/06/Rijo-Joseph-min-scaled.jpg',
          name: 'Rijo Joshph',
          field: 'Technical Lead Engineering',
          title:
            'Myntra is a great place to work. The culture is transparent, every employee, irrespective of their position, is given a chance to be heard, and there are ample opportunities available to those who want to build a career here. I have been with the organization for nearly 5 years now, and have seen myself transform as a professional in more than one way. As a new dad, Myntra provides a great work-life balance and employee-centric policies so that I can spend time with my family and my son and adjust to parenthood.',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2021/06/Aparna-Watwe-min-scaled.jpg',
          name: 'Aparna Watwe',
          field: 'Manager-Business Finance',
          title:
            'Motherhood is one of the most beautiful experiences of life. But it comes with its own set of challenges. I consider myself lucky to be part of an organization which genuinely cares about its employees. I have been working here for more than 8 years now and Myntra was there for me throughout both of my pregnancies. The Motherhood and Beyond program provided me with a lot of support, starting from small gestures like fruit baskets to comprehensive health counseling. The way my peers helped me in coming back to work was just wonderful. I was able to concentrate on work because the organization took care of me and my little ones in the best possible way.',
        },
        {
          img: '	https://life.myntra.com/wp-content/uploads/2021/06/Megha-Ohri.1-scaled.jpg',
          name: 'Megha Ohri',
          field: 'Senior Director-Product Management',
          title:
            'Myntra has always given me something new to look forward to. It has constantly created opportunities for me to learn new things. When I joined Myntra six years ago, we were a relatively smaller team. They asked me to build supply chain products, which was completely new for me. I hadn’t done that kind of work in the past, but I think what Myntra gave me was trust and an opportunity to learn, iterate, launch, fail fast and take risks.',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2021/06/Arnav-Aggarwal.jpg',
          name: 'Arnav Aggarwal',
          field: 'Senior Manager Engineering',
          title:
            'Myntra has excellent policies and work culture ensuring everyone at Myntra gets equal opportunity to shine. I have been part of various events and activities under the "Colours" initiative of the #BeYourself campaign. Over time, it has made me aware of the challenges faced by the LGBTQIA+ community and sensitised me in ways I can contribute towards alleviating them. I can proudly say that I am a good ally.',
        },
        {
          img: 'https://life.myntra.com/wp-content/uploads/2021/06/Vaishali-Behere.jpg',
          name: 'Vaishali Behere',
          field: 'Manager Engineering',
          title:
            'Being a woman in tech shouldn’t be considered as something odd because just like men, we also want to experience the same set of learnings and challenges. You know your organization is truly practicing inclusivity when you are not overvalued or undervalued only because you belong to a specific gender. At Mynta the only thing that matters is your skills. I have been at Myntra for 5 years now and it has been a wonderful journey full of excitement, challenges, immense learning and personal growth. I have come a long way from being an individual contributor to managing a team of 10. I am constantly learning from a diverse and talented set of people around me and this exposure is what keeps me motivated.',
        },
      ],
      model: 0,
    }
  },
}
</script>

<style>
.sharing-bg {
  background-color: #230e31;
  height: auto;
  padding-top: 100px;
  padding-right: 350px;
  padding-bottom: 100px;
  padding-left: 300px;
  margin-top: -43px;
}
.position-relative {
  position: relative !important;
}
.text-center {
  text-align: center !important;
}
.supp-img {
  margin-bottom: 12px;
}
.testiname {
  font-family: Source Sans Pro;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: left;
  margin-top: 15px;
}
.testifield {
  font-family: Montserrat;
  font-weight: 800;
  line-height: 30px;
  color: #ffffff;
  max-width: 317px;
  font-size: 18px;
  text-align: left;
}
.testititle {
  font-family: 'Nunito Sans', sans-serif;
  margin-bottom: 0;
  text-align: left;
  color: #fff;
  font-size: 20px;
}
.includetest {
  background-color: #230e31;
}
.av {
  background-image: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/slick-back-arrow.png);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 21px;
  border: 0;
}
.mdi-chevron-left::before {
  background-image: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/slick-back-arrow.png);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 21px;
  border: 0;
  margin-right: -50px;
}
.mdi-chevron-right::before {
  background-image: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/new-feature/slick-back-arrow.png);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 21px;
  border: 0;
  margin-left: -40px;
}
</style>