<template>
  <div>
    <div class="deep-orange lighten-5">
      <v-row>
        <v-col>
          <v-card tile flat width="400" class="mx-auto my-15">
            <v-img
              width="100%"
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/4/29/fd8014ab-7118-482e-8886-3120cd251f4a1619696754996-Banner_Login-page-400.png"
            ></v-img>
            <v-card-text>
              <h2 class="my-3 mx-3">
                Login &nbsp; <span> or </span> &nbsp; Signup
              </h2>
            </v-card-text>

            <v-text-field
              v-model="phoneNumber"
              :counter="10"
              :error-messages="errors"
              label="+91 | Mobile Number"
              class="mx-8"
              required
              solo
            ></v-text-field>

            <p class="mx-10 pt-2">
              By continuing , I agree to the
              <a href=""> Terms of Use & Privacy Policy</a>
            </p>

            <div class="mx-8 pb-5">
              <v-btn
                block
                elevation="2"
                color="pink accent-3"
                class="white--text"
              >
                Continue
              </v-btn>

              <p class="py-6 text-center">
                Have trouble logging in?
                <nuxt-link to="/"> Get help</nuxt-link>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>