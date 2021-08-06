<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <div class="career-why">
          <div class="career-why___content">
            <div class="career-why__boxwrap">
              <div class="border-box">
                <img
                  class="includeimg"
                  src="https://life.myntra.com/wp-content/uploads/2021/06/Myntra_Phoenix-Banner_21-06-05-1-min-scaled.jpg"
                  width="30%"
                />

                <h3 class="inclutitle">Phoenix</h3>

                <p class="inclusubtitle">
                  Phoenix is Myntra’s paid returnship program, that is
                  specifically designed to make women on a career break make a
                  smooth transition to our diverse workforce. With flexible work
                  options, customized training modules, on the job learning with
                  impactful projects, and a strong mentorship support, Phoenix
                  will provide you with all around support to help you fly back
                  to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="career-why">
          <div class="career-why___content">
            <div class="career-why__boxwrap">
              <div class="border-box">
                <img
                  class="includeimg"
                  src="https://life.myntra.com/wp-content/uploads/2021/06/Inclusive-policies-background-picture.jpg"
                  width="30%"
                />

                <h3 class="inclutitle">Phoenix</h3>

                <p class="inclusubtitle">
                  Phoenix is Myntra’s paid returnship program, that is
                  specifically designed to make women on a career break make a
                  smooth transition to our diverse workforce. With flexible work
                  options, customized training modules, on the job learning with
                  impactful projects, and a strong mentorship support, Phoenix
                  will provide you with all around support to help you fly back
                  to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="6" class="include">
        <div class="career-why">
          <div class="career-why___content">
            <div class="career-why__boxwrap">
              <div class="border-box">
                <img
                  class="includeimg"
                  src="https://life.myntra.com/wp-content/uploads/2021/06/Colours-background-image.png"
                  width="30%"
                />

                <h3 class="inclutitle">Phoenix</h3>

                <p class="inclusubtitle">
                  Phoenix is Myntra’s paid returnship program, that is
                  specifically designed to make women on a career break make a
                  smooth transition to our diverse workforce. With flexible work
                  options, customized training modules, on the job learning with
                  impactful projects, and a strong mentorship support, Phoenix
                  will provide you with all around support to help you fly back
                  to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="6" class="include">
        <div class="career-why">
          <div class="career-why___content">
            <div class="career-why__boxwrap">
              <div class="border-box">
                <img
                  class="includeimg"
                  src="https://life.myntra.com/wp-content/uploads/2021/06/weforshe-01.png"
                  width="30%"
                />

                <h3 class="inclutitle">Phoenix</h3>

                <p class="inclusubtitle">
                  Phoenix is Myntra’s paid returnship program, that is
                  specifically designed to make women on a career break make a
                  smooth transition to our diverse workforce. With flexible work
                  options, customized training modules, on the job learning with
                  impactful projects, and a strong mentorship support, Phoenix
                  will provide you with all around support to help you fly back
                  to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.include {
  margin-top: -350px;
}
.career-why {
  margin-top: 45px;
  margin-bottom: 0;
  margin-left: 230px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.career-why__boxwrap {
  margin-top: 30px;
  margin-right: auto;
  margin-bottom: 330px;
  margin-left: auto !important;
  width: 100%;
  max-width: 1010px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
/* .career-why__boxwrap::before, .career-why__boxwrap::after {
    content: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/career/career-pattern-left.svg);
} */
/* .career-why__boxwrap::before {
    content: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/career/career-pattern-left.svg);
    position: absolute;
    width: 3px;
    
    margin-right: 30px;
    
} */
.career-why__box {
  padding: 0 15px;
  width: 100%;
  margin-top: 30px;
}
.career-why__box .border-box {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.includeimg {
  width: 90%;
  height: 30%;
  top: -10px;
  margin-left: 20px;
  margin-top: 10px;
}
/* .includeimg{ */
/* top: -20px;
    position: absolute;
    background: #fff;
    padding: 0 10px;
    margin-left: -10px;
    margin-left: 20px; */
/* } */
career-why__box > div {
  padding-top: 115px;
  padding-right: 90px;
  padding-bottom: 60px;
  padding-left: 70px;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  position: relative;
}

.border-box {
  border: 1px solid black;
}
.inclutitle {
  font-size: 24px;
  line-height: 34px;
  color: #353a50;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  position: relative;
  font-family: 'Nunito Sans', sans-serif;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  margin-left: 20px;
  margin-top: 20px;
}
.inclusubtitle {
  opacity: 1;
  margin-left: 20px;
  font-size: 16px;
  line-height: 26px;
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 400;
  color: #353a50;
  -webkit-font-smoothing: antialiased;
  position: relative;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  font-family: 'Nunito Sans', sans-serif;
}
</style>