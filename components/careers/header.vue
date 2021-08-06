<template>
<div>
  <v-row class="justify-space-between px-7 mb-0" id="header"> 
       <v-col md="auto" class="my-2">
            <nuxt-link to="/">
                <v-img
                    width="220"
                    src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
                ></v-img>
            </nuxt-link>
        </v-col>


         <v-col md="auto">
            <p class="pt-10">
                <n-link class="white--text text-decoration-none" to="/">
                    Shop 1StopBedrooms.com
                </n-link>
                <v-icon color="orange">mdi-arrow-right</v-icon>
            </p>
        </v-col>

  </v-row>
</div>
</template>

<script>
export default {

}
</script>

<style>
#header{
    background: #0E259A;
}

</style>