<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <span class="campous">
          <img
            src="https://careers.myntra.com/wp-content/uploads/2019/12/career-campus-img1.svg"
          />
        </span>

        <p class="campousp">
          Create Impact - <br />
          Right from Day 1
        </p>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col class="d-flex">
        <span class="campous">
          <v-img
            src="https://careers.myntra.com/wp-content/uploads/2019/12/career-campus-img2.svg"
          >
          </v-img>
        </span>

        <p class="campousp">
          Vibrant and <br />
          Inspiring Workplace
        </p>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col class="d-flex">
        <span class="campous">
          <v-img
            src="https://careers.myntra.com/wp-content/uploads/2019/12/career-campus-img3.svg"
            class="carrerimg"
          >
          </v-img>
        </span>
        <p class="campousp">
          Unlimited Learning <br />
          Opportunities
        </p>
      </v-col>

      <v-divider vertical></v-divider>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.campous {
  display: inline-block;
  padding: 0 30px;
  margin-bottom: 20px;
  -webkit-box-pack: center;
  justify-content: center;
}

.campousp {
  color: #353a50;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  width: calc(100% - 40px) !important;
}
</style>