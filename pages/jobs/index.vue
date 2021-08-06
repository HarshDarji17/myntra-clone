<template>
  <div class="jobs-section">
    <h2 class="jobs-section__title">
      <img
        src="https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/jobs/jobs-title.svg"
        height="100%"
      />
    </h2>

    <v-container>
      <v-row>
        <v-col v-for="job in jobs" :key="job.jobtitle">
          <div class="jobs-section__boxwrap d-flex">
            <div class="jobs-section__box d-flex flex-column w-100 mx-10">
              <a class="fulllink" href=""> </a>

              <div class="jobs-section__box__head">
                <h3>{{ job.jobtitle }}</h3>
              </div>

              <p>{{ job.jobfield }}</p>

              <span>See Jobs</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="mt-15">
        <form action="">
          <div class="form-froup">
            <input
              type="text"
              name="search"
              required
              placeholder="Explore Careers"
            />

            <span>
              <!-- <img src="https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/jobs/icon-search.svg"   height="100%"> -->
            </span>
          </div>
        </form>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'newblog',
  data() {
    return {
      jobs: [
        {
          jobtitle: 'Technology',
          jobfield: ' Engineering | Product Management | UX',
        },
        {
          jobtitle: 'Fashion',
          jobfield: 'Design | Category | Fashion Brands',
        },
        {
          jobtitle: 'Strategy , Marketing & Creative',
          jobfield: 'Strategy , Marketing &  Creative',
        },
        {
          jobtitle: 'Corporate Services',
          jobfield: 'Human Capital|Finance|Legal|PublicRelations',
        },
        {
          jobtitle: 'Opeartions',
          jobfield: 'Supply Chain|Customer Care|Customer Experience',
        },
        {
          jobtitle: 'Technology',
          jobfield: ' Engineering | Product Management | UX',
        },
      ],
    }
  },
}
</script>

<style>
.jobs-section {
  background-image: linear-gradient(180deg, #fff 0%, #ffdfdf 100%);
  padding-top: 110px;
  overflow: hidden;
  padding-bottom: 80px;
}
.jobs-section__title {
  height: 130px;
  text-align: center;
  margin-bottom: 25px;
}
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.jobs-section .row {
  margin-left: -21px;
  margin-right: -21px;
  -webkit-box-pack: center;
  justify-content: center;
}
.jobs-section__boxwrap {
  position: relative;
  z-index: 1;
  height: 90%;
}
.jobs-section__box {
  background: #fff;
  padding: 45px;
  border-radius: 8px;
  border: 1px solid #c7c9d6;
  background-image: -o-linear-gradient(top, #f4fcff 0%, #fff 100%);
  background-image: linear-gradient(180deg, #f4fcff 0%, #fff 100%);
  height: 100%;
}
.w-100 {
  width: 100% !important;
}
.full-link {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
a {
  color: #ff3f6c;
  text-decoration: none;
  background-color: transparent;
}
.jobs-section__box__head {
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px dashed #c7c9d6;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-flex: 1;
  flex: 1;
}
.jobs-section__box h3 {
  color: #1c1f2c;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.45;
  padding-right: 20px;
  margin-bottom: 0;
}
h3 {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.job-detail .web-accordion .card-body p:first-of-type,
.jobs-section__box p:first-of-type {
  margin-top: 0;
}
.jobs-section__box p {
  color: #474d6a;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
  margin-top: 0px;
  margin-bottom: 0;
}
.jobs-section__box span {
  display: inline-block;
  color: #6d88fd;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  margin-top: 30px;
  text-decoration: none;
}
.jobs-section__box::after {
  content: '';
  position: absolute;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  left: 50%;
  top: 50%;
  z-index: -1;
  background-image: url(https://careers.myntra.com/wp-content/themes/myntra_career/assets/img/jobs/job-box-pattern.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform: translate(-50%, -50%);
}
*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.explore {
  border: 1px solid #feb9b9;
}
.jobs-section form .form-group {
  text-align: center;
  padding-top: 60px;
  position: relative;
  display: inline-block;
  max-width: 90%;
}

.jobs-section form input {
  height: 70px;
  width: 1074px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid #feb9b9;
  padding: 0 20px 0 75px;
  font-size: 25px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.jobs-section form span {
  display: inline-block;
  height: 25px;
  position: absolute;
  left: 25px;
  bottom: 22px;
}
</style>