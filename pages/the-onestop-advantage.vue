<template>
    <div>
        <!-- image -->
        <img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_the_onestop_advantage.jpg"
            alt=""
            width="100%"
        />

        <v-layout>
            <v-flex md3 class="grey lighten-2 d-none d-lg-flex d-xl-flex">
                <Sidebar />
            </v-flex>
            <v-flex md9 class="ma-10">
                <p id="advantagetitle">A better furniture buying experience</p>
                <p class="caretitle">
                    At 1StopBedrooms, we focus on furniture, and only furniture.
                    We provide a concierge-like service. Our staff consists of
                    only furniture professionals and specialists, and we provide
                    a level of customer service that is second to none.
                </p>

                <!-- banner -->
                <v-card class="my-12" id="banner" flat align="center">
                    <img
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/technology-icon.png?v05f099a3"
                        alt="banner"
                        class="mt-n8"
                    />
                    <div class="pb-8">
                        <p class="mb-0 headline" id="focus">
                            Our <b>proprietary technology</b>
                        </p>
                        <p class="mb-0 headline" id="focus">
                            <b>makes the difference</b> in your
                        </p>
                        <p class="mb-0 headline" id="focus">
                            shopping experience.
                        </p>
                    </div>
                </v-card>

                <p class="caretitle">
                    We think your online furniture buying experience should be
                    efficient, simple, and enjoyable. That’s why we’ve built
                    custom systems & technologies that allow us to offer just
                    that. When you shop with us, you get competitive pricing,
                    predictive tracking and superior customer service — all
                    built into an intuitive and streamlined site.
                </p>

                <p id="advantagetitle">Shop More Save More</p>
                <p class="caretitle">
                    Here's an industry secret: when it comes to online shopping:
                    the “Free Shipping” we all know and love isn’t free. It
                    typically means the merchant has built the price of shipping
                    into the price of the item itself. We don’t think that’s
                    fair to you.
                </p>
                <p class="caretitle">
                    Our mission is to provide our customers with the best
                    possible value and full transparency, so when you buy more,
                    we recalculate shipping costs—and you save more. This is one
                    of our most innovative systems, built with one goal: saving
                    you money.
                </p>

                <!-- introduction -->
                <v-card
                    flat
                    class="py-5 my-14 rounded-0"
                    align="center"
                >
                    <v-row class="justify-space-around">
                        <v-col
                            md=4               
                           class="grey lighten-4"
                            v-for="(item, i) in desciption"
                            :key="i"
                        >
                            <img
                                :src="item.img"
                                :alt="item.title"
                                width="120"
                            />
                            <h3 class="mt-5">{{ item.title }}</h3>
                            <p  class="caretitle">{{ item.desc }}</p>
                        </v-col>
                    </v-row>
                </v-card>

                <p id="advantagetitle">White Glove Delivery</p>
                <p class="caretitle">
                    Furniture can’t be shipped and handled like anything else on the market because of size, weight, fragility, packaging needs, and assembly.
                </p>

                <v-card class="grey lighten-3 pa-10 rounded-0 mt-10" flat>
                    <p class="headline mb-10" id="advantagetitle">Here’s how it works:</p>
                    <v-row v-for="(item, i) in task" :key="i">
                        <v-col md="2">
                            <img :src="item.img" :alt="item.title" width="120">
                        </v-col>
                        <v-col>
                            <h3 class="mb-2">{{ item.title }}</h3>
                            <p class="caretitle">{{ item.desc }}</p>
                        </v-col>
                    </v-row>
                </v-card>

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
            title: 'The 1Stop Advantage'
        }
    },
    components: {
        Sidebar,
    },
    data() {
        return {
            desciption: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/discount.png',
                    title: 'It starts with discounts',
                    desc: 'At 1StopBedrooms we offer special discounted pricing specifically for living and dining room sets.',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/add-pieces.png',
                    title: 'Add pieces and save',
                    desc: 'The more pieces you order from any particular set, the greater the discount you receive.',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/calc.png',
                    title: 'We ship smarter to save you more',
                    desc: 'Our technology systems calculate the savings from shipping multiple items all at once, then we pass that savings on to you!',
                },
            ],
            task: [
                { 
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/packing-icon.png?v93befa42',
                    title: 'Packaging',
                    desc: 'First, the furniture is expertly packaged. It is inspected by a furniture specialist, hand-wrapped, reinforced by a protective safety cage and covered with final external packaging reinforcements.'
                },
                { 
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/loading-icon.png?v2a3544bd',
                    title: 'Loading',
                    desc: 'Next, the furniture is loaded onto the truck, harnessed, and secured by our trained experts. These extra safety efforts are done to ensure that the furniture is secure and won’t shift during transport.'
                },
                { 
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/delivery-icon.png?v40e17eb1',
                    title: 'Delivery',
                    desc: 'The furniture then leaves our warehouse and heads to our White Glove Delivery Terminal in your area. After we unwrap, inspect, and re-wrap your furniture at the White Glove Delivery Terminal, we will contact you to arrange a delivery time that works with your schedule.'
                },
                { 
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/assembly-icon.png?va16a9912',
                    title: 'Assembly',
                    desc: 'Finally, when our White Glove delivery team arrives at your home, they will place and assemble your new furniture in the room of your choice. They will also do a final inspection and clean-up of the packing materials.'
                },
            ]
        }
    },
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
#banner{
    background: #F0F2FF;
}
#focus{
        color: #0E259A;
        letter-spacing: 2;
}
</style>