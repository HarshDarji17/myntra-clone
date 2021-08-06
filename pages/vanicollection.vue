<template>
  <div class="covid">
    <div class="blog-main blog-main-detail">
      <div class="blog-detail-banner">
        <v-img
          src="		https://blog.myntra.com/wp-content/uploads/2021/03/myntra-vaani-mango.jpg"
          height="auto"
        >
        </v-img>
      </div>
      <v-card class="blog-detail-content mt-15">
        <v-container>
          <div class="cardwrite">
            <!-- tittle share p  -->
            <v-row>
              <v-col cols="auto">
                <h1 class="blog-content__title">
                  Myntra is Among India’s Top 100 Best Companies To Work for in
                  2021
                </h1>
                <p class="blogspan">By Myntra June 22,2021</p>
              </v-col>
              <v-col cols="auto" class="blog-detail-share">
                <v-img
                  class="blog-detail-share"
                  src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/blog/icon-share.svg"
                >
                </v-img>
              </v-col>
            </v-row>

            <!-- text  -->
            <v-row>
              <div class="blog-detail-text">
                <p>
                  Myntra life is up a notch. What does that look like for our
                  people? A level playing field, a world of opportunities, and
                  an enabling culture that empowers them to create a positive
                  difference in the lives of everyone they work with. All this,
                  with a strong shield of support, care and empathy around them.
                  And while our people swear by this inspiring workplace
                  culture, it is great to be officially recognized for it by the
                  Great Place to Work® Institute, a global authority in
                  creating, sustaining and recognizing high-trust,
                  high-performance culture at workplaces.
                </p>
              </div>
            </v-row>
            <!-- text   -->

            <div class="mt-10">
              <p class="thirdp">
                <strong class="thirdpara">
                  This is the third time Myntra has been recognised for its work
                  culture,</strong
                >
                and we are proud and humbled at the same time. So what makes
                Myntra’s workplace one of the best in India? Let’s hear it
                directly from our people.
              </p>
            </div>

            <!-- myntra great place work person review image  -->
            <div>
              <v-img
                src="https://blog.myntra.com/wp-content/uploads/2021/06/Myntra-great-place-to-work-2048x1710.jpeg"
              >
              </v-img>
            </div>

            <!-- text  -->

            <div class="mt-10">
              <p class="thirdp">
                A high-energy, fun and vibrant work culture that encourages
                innovation and learning, well-rounded employee-friendly policies
                that nurture talent and creativity, and passion & commitment of
                the employees have gone behind making Myntra what it is today.
                Our culture of enablement and support touches all levels of the
                organisation, which is reflected in our
                <strong class="thirdpara">
                  people policies, programmes and practices.</strong
                >
                This includes, and not limited to,
                <strong class="thirdpara"> Leave Policy </strong> comprising
                unlimited wellness leaves, and family care leaves for employees
                to take care of self and family;
                <strong class="thirdpara"> Family Support Policy, </strong> a
                financial and non-financial support extended to the family of
                deceased employees;
                <strong class="thirdpara"> Motherhood & Beyond,</strong> a
                programme to support the holistic journey of those on their
                motherhood journey;
                <strong class="thirdpara"> Flying Lessons,</strong> to support
                women leaders at Myntra through mentorship and networking, to
                name a few.
              </p>
            </div>

            <!-- text-->
            <div class="mt-10">
              <p class="thirdp">
                The support is not just restricted to the employees, but is also
                extended to their families. Since the onset of the pandemic,
                Myntra has continuously risen to the occasion to prioritise
                health & safety of employees and their families. Efforts
                including a smooth transition to newer ways of working, virtual
                onboarding for new joiners, creation of a COVID Task Force Team,
                and Vaccination Drives for employees and their families as well
                as delivery partners, have been made. We have also made a
                conscious effort to foster a culture of appreciation resulting
                in constant motivation and vibrancy within the organisation.
              </p>
            </div>
            <!-- relavant reds -->

            <div class="mt-10">
              <p class="thirdp">Relevant Reads:</p>
            </div>

            <!-- linkss -->

            <div class="links mt-10 no-gutters">
              <n-link to="">
                <strong class="links1">
                  Myntra Stands With Its Employees Every Step Of The Way During
                  COVID
                </strong>
                <br />
              </n-link>
              <n-link to="">
                <strong class="links2">
                  Inclusivity is the highlight of Myntra’s revised leave
                  policy</strong
                >
                <br />
              </n-link>
              <n-link to="">
                <strong class="links3"
                  >Taking Pride in Our Diverse and Inclusive Workplace</strong
                ><br />
              </n-link>
            </div>

            <!-- text -->

            <div class="mt-10">
              <p class="thirdp">
                Up next, we are all hustling for the next edition of our EORS
                scheduled to be held from 3rd to 8th July. With a single
                minded-focus on bringing brands and customers together in the
                safest possible way, this 6-day event will witness various teams
                at Myntra come together to create value and an elevated
                experience for our fashion-forward consumers. This EORS is the
                14th edition of our biannual event and is all set to bring you
                valuable offers across a host of categories. Read about some
                Behind the Scenes action
                <n-link class="here" to=""> here. </n-link>
              </p>
            </div>

            <!-- bold text  -->
            <div class="mt-10">
              <strong class="thirdpara">
                Want to be part of the fast-paced fashion & tech revolution?
                Visit
                <nuxt-link class="boldpara" to=""> Myntra Life </nuxt-link> and
                check out career opportunities!
              </strong>
            </div>

            <!-- caption  -->

            <!-- <v-row v-for="hash in hashtag" :key="hash">
                  <v-btn rounded color="grey"  class="d-flex"  dark> {{hash}} </v-btn>
                 
              </v-row> -->
            <!-- <div>
              <v-row  class="" v-for="hash in hashtag" :key="hash">
                 <v-btn class="d-flex align-start"  rounded color="grey"  dark> {{hash}} </v-btn>
                 
              </v-row>
              </div> -->

            <div class="mt-10">
              <h1 class="arrticals">Related Articles</h1>
              <Slider />
            </div>
          </div>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Blog/slider.vue'
export default {
  layout: 'newblog',
  components: { Slider },
  data() {
    return {
      hashtag: [
        '#Myntra Employess',
        '#Myntra awards',
        '#Great Place To Work',
        '#Work at a Myntra',
        'Careers at Myntra',
        'GPTW',
        'Myntra recognitions',
      ],
    }
  },
}
</script>

<style>
.covid {
  display: block;
}
.blog-main-detail {
  background: #eee;
}

.blog-detail-banner {
  background-image: url(https://blog.myntra.com/wp-content/uploads/2021/03/myntra-vaani-mango.jpg);
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 0;
  padding-bottom: 36.5%;
  position: relative;
}
*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.blog-detail-banner::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  left: 0;
  top: 0;
}

.blog-detail-content {
  width: calc(100% - 50px);
  max-width: 1380px;
  background-color: #f9f9f9;
  padding: 80px 0 60px;
  -webkit-border-radius: 8px 8px 0 0;
  border-radius: 8px 8px 0 0;
  margin: -85px auto 0;
  position: relative;
  overflow: hidden;
  top: -150px;
}
.container {
  /* max-width: 1140px;
    min-width: 1200px; */
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

/* .blog-detail-content .container { */
/* position: relative; */
/* }  */

.blog-detail-content .blog-content__title {
  color: #353a50;
  font-family: 'Montserrat', sans-serif;
  font-size: 38px;
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 20px;
  width: 50%;
  margin-top: 30px;
}
.blog-detail-content .blog-detail-share {
  position: absolute;
  right: 50px;
  top: -20;
  width: 41px;
}
.blog-detail-content .container .blogspan {
  color: #353a50;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  position: relative;
}
.blog-detail-text {
  font-family: 'Montserrat', sans-serif !important;
  color: #353a50;
  font-size: 20px;
  line-height: 1.56;
  margin-left: 9px;
}
.thirdpara {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bolder;
  color: #353a50;
  font-size: 20px;
  line-height: 1.56;
}
.thirdp {
  font-family: 'Montserrat', sans-serif !important;
  color: #353a50;
  font-size: 20px;
  line-height: 1.56;
}
.cardwrite {
  margin-left: 60px;
  margin-right: 110px;
}
.links {
  font-family: 'Montserrat', sans-serif !important;
  color: #353a50;
  margin-bottom: 0;
  touch-action: manipulation;
  text-decoration: underline;
}
.links1:hover {
  color: #f9398b;
}
.links2:hover {
  color: #f9398b;
}
.links3:hover {
  color: #f9398b;
}
.here {
  text-decoration: underline;
  color: #353a50;
}
.here:hover {
  color: #f9398b;
}
.boldpara {
  text-decoration: underline;
  color: #353a50;
}

.boldpara:hover {
  color: #f9398b;
}
.arrticals {
  font-family: 'Montserrat', sans-serif !important;
  color: #353a50;
}
</style>