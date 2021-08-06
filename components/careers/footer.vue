<template>
  <div class="pt-10 pb-16" id="footer"> 

      <v-row class="px-16 py-5 justify-space-betwen">
           <!-- image -->
            <v-col>
                <v-img
                    width="190"
                    src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1sb_logo_ftr.png"
                ></v-img>
            </v-col>

                      <!-- first  -->
            <v-col>
                <div v-for="(item, i) in section" :key="i" class="my-1">
                    <nuxt-link
                      :to="item.link"
                     class="black--text"                       
                    >{{ item.title }}</nuxt-link
                    >
                </div>
            </v-col>

                      <!-- second  -->
             <v-col>
                <div v-for="(item, i) in section2" :key="i" class="my-1">
                    <nuxt-link
                        :to="item.link"
                        class="black--text"
                        >{{ item.title }}</nuxt-link
                    >
                </div>
            </v-col>


             <v-col md="auto">
                <p class="pt-10">
                    <n-link class="black--text " to="/">
                        Shop 1StopBedrrom.com
                    </n-link>
                    <v-icon color="orange">mdi-arrow-right</v-icon>
                </p>
            </v-col>

      </v-row>    


      <p class="body-2 text-center">
            <n-link to="/"
                > <span class="privacy">Privacy Policy </span></n-link
            >
            <n-link to="/" class="ml-5 text-decoration-none grey--text"
                > <span>Terms of Use</span></n-link
            >
            <span class="ml-10 grey--text"
                ><v-icon color="grey" size="17">mdi-copyright</v-icon>2021
                1StopBedrooms Inc.</span
            >
        </p>
 
  </div>
</template>

<script>
export default {
    data(){
        return{
             section: [
                { title: 'About Us', link: '/about-us' },
                { title: 'Our Story', link: '/our-story' },
                { title: '1Stop Advantage', link: '/the-onestop-advantage' },
                { title: '1Stop Cares', link: '/onesstop-cares' },
            ],
            section2: [
                { title: 'Careers', link: '/careers' },
                { title: 'Partner With Us', link: '/partner-with-us' },
                { title: 'Contact Us', link: '/about-contact-us' },
            ],
        }
    }

}
</script>

<style>
#footer {
    background: #f2f2f2;
}
.privacy{
    color: grey;
}
</style>