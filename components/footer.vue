<template>
  <div>
    <v-divider class="mb-5"></v-divider>

    <v-row>
      <v-spacer></v-spacer>
      <div v-for="img in images" :key="img" class="mr-1 ma-1">
        <v-img :src="img" width="70px"> </v-img>
      </div>
      <v-spacer></v-spacer>

      <n-link to="/contactus" class="black--text">
        <p class="mr-15 mt-3 body-2">
          <strong>Need Help ? Contact Us </strong>
        </p>
      </n-link>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png',
        'https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png',
      ],
    }
  },
}
</script>

<style>
</style>