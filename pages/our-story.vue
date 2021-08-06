<template>
    <div>
        <!-- image -->
        <img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_our_story.jpg"
            alt=""
            width="100%"
        />

        <v-layout>
            <v-flex md3 class="grey lighten-2 d-none d-lg-flex d-xl-flex">
                <Sidebar />
            </v-flex>
            <v-flex md9 class="ma-10">

                <!-- intro -->
                <p id="advantagetitle">Furniture is different. So is 1Stop.</p>
                <p class="caretitle">
                    Can the perfect online furniture experience exist? As veterans of the furniture industry for more than 20 years, it is a question that we continually ask ourselves. We know there is a better way to buy and sell furniture online that could be more enjoyable for customers and manufacturers alike.
                </p>
                <p class="caretitle">
                    We identified the areas with the greatest opportunities to rethink the old furniture shopping and selling experience — inflated shipping costs, antiquated processes, and more — and set out to innovate and bring measurable change to the industry.
                </p>

                <!-- banner -->
                <v-card class="my-12" id="banner" flat align="center">
                    <img 
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/sofa-img.png?va4d5e1e9" 
                        alt="banner"
                        class="mt-n8"
                    >
                    <div class="pb-8">
                        <p class="mb-0  headline font-weight-bold" id="focus">We focus on furniture</p>
                        <p class="mb-0  headline" id="focus"> and providing the <b>best furniture-shopping</b></p>
                        <p class="mb-0  headline" id="focus"><b>experience</b> possible.</p>
                    </div>
                </v-card>

                <p class="caretitle">
                    More than just the buying and selling of a commodity, the furniture industry is service-based. From the personal interactions to the final delivery and assembly of each piece, we know people value high-quality service as much as high-quality furniture. To create a truly compelling online experience, we made it our mission to offer unrivaled customer service.
                </p>
                <p class="caretitle">
                    Fast forward to today and with a growing team, we still strive to maintain a small business vibe and the same clear vision: to provide the best furniture shopping experience and the technology platforms to support it.
                </p>

                <!-- image & out team -->
                <v-row class="my-10">
                    <v-col md="4" class="align-self-end">
                        <p id="advantagetitle">Our team</p>
                        <v-btn
                            class="rounded-xl orange darken-3 text-capitalize px-10"
                            large
                            dark
                            to="/open-positions"
                        >
                            View Open Positions
                        </v-btn>
                    </v-col>
                    <v-col md="8">
                        <img 
                            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/team-img.png" 
                            width="100%"
                            alt="our story"
                        >
                    </v-col>
                </v-row>

                <p class="caretitle">
                    From tracking shipments, to claims and returns, our experienced in-house team of software developers and furniture specialists have created a platform that empowers our customers and manufactuers alike at every step of the furniture buying process.
                </p>
                <p class="caretitle">
                    We’re always looking for great people with a passion for delivering superior customer service and innovative online experiences.
                </p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Sidebar from '../components/careers/sidebar.vue'
export default {
    layout: 'careers',
    head() {
        return {
            title: 'Our Story'
        }
    },
    components: {
        Sidebar
    }
}
</script>

<style scoped>
#advantagetitle{
    font-weight: 600;
    color: #000;
    font-style: normal;
    font-size: 28px;
    line-height: 35px;
}
.caretitle{
    font-size: 17px;
    font-weight: 400;
    color: #000;
    line-height: 1.5;
}
#focus{
        color: #0E259A;
}
#banner{
    background: #F0F2FF;
}
p {
    font-size: 1.1rem;
}
</style>