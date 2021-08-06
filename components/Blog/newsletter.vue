<template>
  <div>
    <v-card color="card" height="300px">
      <!-- text  -->
      <v-card-text class="newsletter white--text mt-10"
        >Subscribe to our newsletter
      </v-card-text>

      <!-- email -->
      <v-col>
        <v-form v-model="valid">
          <v-text-field
            v-model="email"
            label="Your Email"
            class="email"
            white--text
            dark
            required
          ></v-text-field>
        </v-form>

        <!-- btn  -->

        <v-btn class="sub"> Subscribe</v-btn>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>

<style>
.card {
  background-image: linear-gradient(215deg, #cc066f 0%, #791e97 100%);
}
.newsletter {
  text-align: center;
  /* text-transform: uppercase; */

  font-weight: 900;
  font-size: 60px;
  /* color: #ece3e3e8; */
  line-height: 0.875;
}
.email {
  width: 300px;
  margin-left: 500px;
}
.sub {
  margin-left: 550px;
  margin-top: 50px;
}
</style>