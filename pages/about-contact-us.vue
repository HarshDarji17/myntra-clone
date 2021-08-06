<template>
    <div>
        <v-layout>
            <v-flex md3 class="grey lighten-2 d-none d-lg-flex d-xl-flex">
                <Sidebar />
            </v-flex>
            <v-flex md9 class="ma-10">
                <p
                     id="contact"
                      class="
                        display-2
                        font-weight-bold
                        text-uppercase
                    "
                >
                    Contact Us
                </p>

                <v-row class="mt-5">

                    <!-- sales & support -->
                    <v-col md="4">
                        <p class="headline font-weight-bold">Sales & Support</p>
                        <v-divider class="mb-5"></v-divider>
                        <n-link to="/" class="text-decoration-none" id="sales"
                            >Use Our Contact Form</n-link
                        >
                        <p class="title font-weight-light black--text">
                            or call 866-456-8823
                        </p>
                    </v-col>

                    <!-- media -->
                    <v-col md="4">
                        <p class="headline font-weight-bold">Media</p>
                        <v-divider class="mb-5"></v-divider>
                        <a
                            href="mailto: press@1stopbedrooms.com"
                            class="text-decoration-none" id="sales"
                            >press@1stopbedrooms.com</a
                        >
                    </v-col>

                    <!-- careers -->
                    <v-col md="4">
                        <p class="headline font-weight-bold">Careers</p>
                        <v-divider class="mb-5"></v-divider>
                        <a
                            href="mailto: jobs@1stopbedrooms.com"
                            class="text-decoration-none" id="sales"
                            >jobs@1stopbedrooms.com</a
                        >
                    </v-col>
                </v-row>

                <v-row>

                    <!-- map-->
                    <v-col md="8">
                        <GoogleMap />
                    </v-col>

                    <!-- address -->
                    <v-col>
                        <p class="headline font-weight-bold">
                            Corporate Headquarters
                        </p>
                        <v-divider class="mb-5"></v-divider>
                        <p class="title mx-2">
                            1716 Coney Island Avenue Brooklyn, NY 11230
                        </p>
                    </v-col>
                </v-row>

            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Sidebar from '../components/careers/sidebar.vue'
import GoogleMap from '../components/GoogleMap.vue'
export default {
    layout: 'careers',
    head() {
        return {
            title: 'Contact Us'
        }
    },
    components: {
        Sidebar,
        GoogleMap,
    },
}
</script>

<style scoped>
#contact{
   color: #0E259A;
}
#sales{
    color:#0E259A;
    font-size: 16px;
    text-decoration: none;
    font-weight: 400;
}
</style>