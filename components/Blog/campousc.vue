<template>
  <div>
    <v-container>
      <div class="career-campus__title">
        <img
          src="https://careers.myntra.com/wp-content/uploads/2019/12/career-campus-title.svg"
          height="100%"
          width="100%"
        />
      </div>

      <p class="career-campus__desc">
        We strongly believe that ideas have no hierarchy, we embrace the
        diversity of thoughts that people bring in & that's how we make Myntra ,

        <span class="campousspan"> #AWorldOfAwesome </span>
      </p>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.career-campus {
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  max-width: 100vw;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
}
*,
span.close {
  outline: 0 !important;
}
.career-campus__title {
  height: 385px;
  text-align: center;
}
.career-campus__desc {
  font-size: 18px;
  line-height: 28px;
  margin-top: 45px;
  max-width: 660px;
  width: 100%;
  color: #353a50;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  margin: 20px auto 0;
}
.campousspan {
  color: #cc066f;
  font-weight: 600;
}
</style>