<template>
  <div class="bepart">
    <div class="life-bottom d-flex align-items-center career-life-bottom">
      <div class="w-100">
        <h3>Be a part of #AWorldOfAwesome</h3>

        <div class="life-bottom__text">
          <v-btn class="ma-2" to="/jobs" outlined color="white" rounded>
            Explore careers
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bepart {
  margin-top: -110px;
  margin-bottom: 50px;
}
.career-life-bottom {
  padding-top: 100px;
  padding-bottom: 70px;
  margin-top: 0;
}
.life-bottom {
  margin-top: 100px;
  height: auto;
  padding-bottom: 100px;
  padding: 45px 0;
  background-size: 100% 100%;
  background-image: -o-linear-gradient(right, #cc066f 0%, #791e97 100%);
  background-image: linear-gradient(270deg, #cc066f 0%, #791e97 100%);
  text-align: center;
}
.align-items-center {
  align-items: center !important;
}
.w-100 {
  width: 100% !important;
}
.life-bottom h3 {
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  text-align: center;
}
</style>