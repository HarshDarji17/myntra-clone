<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, i) in content" :key="i" cols="6">
        <v-hover v-slot="{ hover }">
          <v-card height="400px" width="700px">
            <v-img :src="item.src" class="borderimg"> </v-img>

            <h3 class="borderh3">{{ item.title }}</h3>

            <p v-if="hover" class="borderp">{{ item.subtitle }}</p>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          src: 'https://careers.myntra.com/wp-content/uploads/2019/12/career-why-img1.svg',
          title: 'Highly Inspiring, State-of-the-art Workspace',
          subtitle: 'Featured among the coolest offices in India',
        },
        {
          src: 'https://careers.myntra.com/wp-content/uploads/2019/12/career-why-img2.svg',
          title: '360 Degree Wellness Program',
          subtitle: 'Physical | Mental | Financial | Social Wellness',
        },
        {
          src: 'https://careers.myntra.com/wp-content/uploads/2019/12/career-why-img3.svg',
          title: 'Great Learning & Development Opportunities',
          subtitle:
            'Best in class Learning Programs | Higher Education Assistance | Internal Job Mobility',
        },
        {
          src: 'https://careers.myntra.com/wp-content/uploads/2019/12/career-why-img4.svg',
          title: 'Industry Leading People Policies',
          subtitle:
            'Comprehensive Leave policy | Parental Benefits | Flexi work arrangements | Salary Advance | Inter and intra city Relocation | Car lease and many more...',
        },
      ],
    }
  },
}
</script>

<style>
.borderh3 {
  font-size: 24px;
  line-height: 34px;
  color: #353a50;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  position: relative;
  top: 20px;
  transition: all 0.3s ease-in-out;
  text-align: center;
}
.borderp {
  margin-top: 45px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  top: -20px;
  text-align: center;
}
.borderimg {
  margin-top: 20px;
  margin-left: 150px;
  width: 215px;
}
</style>