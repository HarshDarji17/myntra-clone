<template>
    <div>
        <div v-for="(link, i) in links" :key="i" class="mx-5 my-8">
            <n-link :to="link.link" class="black--text">{{
                link.linktitle
            }}</n-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { linktitle: 'About Us', link: '/about-us' },
                { linktitle: 'Our Story', link: '/our-story' },
                {
                    linktitle: 'The 1Stop Advantage',
                    link: '/the-onestop-advantage',
                },
                { linktitle: '1Stop Cares', link: 'onestop-cares' },
                { linktitle: 'Careers', link: '/careers' },
                { linktitle: 'Partner With Us', link: '/partner-with-us' },
                { linktitle: 'Contact Us', link: '/about-contact-us' },
            ],
        }
    },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
    font-weight: 600;
}
a {
    font-size: 18px;
}
a:hover {
    font-size: 18px;
    font-weight: 600;
}
</style>