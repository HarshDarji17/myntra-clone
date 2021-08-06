<template>
  <div>
    <div class="blog">
      <v-row>
        <v-col>
          <h2 class="blog_intro">Freshly Mynted</h2>
          <p class="only">...only for you!</p>
        </v-col>
        <!-- <v-img src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/blog/paper-cut.png" width="5px" class="row-flex"> Stories</v-img> -->
        <!-- <v-col> -->
        <!-- <v-img src="https://blog.myntra.com/wp-content/themes/myntra/assets/img/blog/paper-cut.png" width="230px" class="stor">  <p class="stories">Stories</p></v-img> -->

        <!-- </v-col> -->
      </v-row>

      <!-- <v-img src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 127 42'%3e%3cg%3e%3cg%3e%3cpath fill='none' stroke='%23ff3f6c' stroke-miterlimit='50' d='M1.31 2.243A1 1 0 0 1 2.28 1h122.567a1 1 0 0 1 .99 1.141l-4.72 33.04a1 1 0 0 1-.944.857L11.817 40.963a1 1 0 0 1-1.015-.757z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" height="30px" width="50px"> vuuu</v-img> -->
    </div>

    <!-- vtab -->

    <v-toolbar height="30%" flat prominent>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          background-color="transparent"
          color="basil"
          grow
          centered
        >
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card color="basil" flat>
          <!-- <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-card-text> -->
          <Home />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <!-- <v-card-title class="text-h5">
            An awesome title
          </v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text> -->
          <Home />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5"> An even better title </v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Sed hendrerit.
              Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin
              faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed
              magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam
              lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Home from '../../components/Blog/home.vue'
import Epicfashion from '../Home/Epicfashion.vue'
export default {
  components: { Home, Epicfashion },
  data() {
    return {
      tabs: null,
      items: [
        'Home',
        'Spotlight',
        'Business',
        'Community',
        'Culture',
        'Style Tips',
        'Media Room',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style>
.blog {
  padding-top: 130px;
  text-align: center;
}
.blog_intro {
  text-transform: uppercase;
  font-weight: 790;
  font-size: 72px;
  color: #353a50;
  line-height: 0.875;
  font-family: 'Montserrat', sans-serif;
  width: 360px;
  text-align: center;
  /* text-align: left; */
  display: inline-block;
}
h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.only {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-right: 250px;
  margin-top: -5px;
}
.blog_intro span {
  font-size: 26px;
  color: #fff;
  line-height: 1.3;
  display: inline-block;
  vertical-align: top;
  margin-top: 75px;
  margin-left: 35px;
  position: relative;
  z-index: 1;
  font-weight: 600;
}
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #d1175e !important;
}
/* .stor{
       margin-left: 200px;
       width: 150px; */

/* left: -43px; */
/* bottom: -52px; */
/* z-index: -1; */
/* } */
/* .stories{
  bottom:-30px;
} */
</style>