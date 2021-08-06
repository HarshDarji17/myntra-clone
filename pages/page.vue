<template lang="html">
  <div class="w3-light-grey">
<div class="w3-content" style="max-width:1600px">
  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Laptops</h1><br><br>
          <div>
            <p> first :-- {{}} </p>
          <button v-for="pageNumber in totalPages" :key="pageNumber.id" class="w3-button" v-bind:key="pageNumber" @click="setPage(pageNumber)">{{ pageNumber }} </button>
          </div>
      <div class="container w3-white w3-card" v-for="article in paginate" :key="article._id"><br>
  <div class="row">
    <div class="col-sm-4">
      <img src="https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Vostro/15_3500_non-touch/dv3500nt_cnb_00055rf110_bk.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=648&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=648,402" style="width:100px; height:100px">
    </div>
    <div class="col-sm-4">
      <h5><span class="w3-large w3-text-teal">{{ article.title }},</span></h5>
      <span>OS: {{article.os}}</span><br>
      <span>{{article.size}} Inches</span><br>
      <span>{{article.ram}} GB RAM</span><br>
      <span v-if="article.storage >= 1000">{{ article.storage/1000 }} TB Storage,</span>
      <span v-else>{{ article.storage }} GB Storage,</span><br>
    </div>
    <div class="col-sm-4">
      <h3>${{article.price}}</h3>
      <p><a href=""><button class="w3-button w3-block w3-teal">Buy Now</button></a></p>
    </div>
  </div><hr>
</div>

<v-row>
 

   <v-col> 
 <div>
  <button v-for="pageNumber in totalPages" :key="pageNumber.id" class="w3-button" v-bind:key="pageNumber" @click="setPage(pageNumber)">{{ pageNumber }} </button>
 
    
     </div>
   </v-col>
  
</v-row>
    </div>
        </div>
    </div>
</div>
</div>
  </div>
</template>

<script>

import SingleFwd from '../components/SingleFwd.vue'
export default {
  components:{SingleFwd},

  data() {
  return {
    articles: [{
      os: 'Windows',
      price: '500',
      weight: '3.9',
      size: '11.1',
      storage: '500',
      ram: '8',
      company: 'hp',
      title: 'HP laptop 14'
    },
    {
      os: 'Chromeos',
      price: '400',
      weight: '7.0 Pounds',
      size: '11.1',
      storage: '256 GB',
      ram: '4',
      company: 'hp',
      title: 'HP Chromebook 14'
    },
    {
      os: 'Windows',
      price: '450',
      weight: '3.9',
      size: '11.1',
      storage: '500',
      ram: '8',
      company: 'hp',
      title: 'HP laptop 14'
    },
    {
      os: 'Windows',
      price: '600',
      weight: '3.9',
      size: '11.1',
      storage: '500',
      ram: '8',
      company: 'hp',
      title: 'HP laptop 14'
    },
    {
      os: 'Windows',
      price: '700',
      weight: '3.9',
      size: '11.1',
      storage: '500',
      ram: '8',
      company: 'hp',
      title: 'HP laptop 14'
    },
    {
      os: 'Windows',
      price: '350',
      weight: '3.9',
      size: '11.1',
      storage: '500',
      ram: '8',
      company: 'hp',
      title: 'HP laptop 14'
    },
    {
      os: 'Windows',
      price: '400',
      weight: '3.9',
      size: '11.1',
      storage: '500',
      ram: '8',
      company: 'hp',
      title: 'HP laptop 14'
    }],
 currentPage: 1,
  itemsPerPage: 3,
  resultCount: 0
  }
},

methods: {
setPage: function(pageNumber) {
 
    this.currentPage = pageNumber

  },

  nextPage(pageNumber) {
    //   return this.currentPage < this.totalPages
    //     ? this.currentPage + 1
    //     : this.totalPages;
        pageNumber = pageNumber + 1;
    },
},

computed: {
   
   buttonStyles() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out';
    },
    disabledStyle() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300';
    },
  /* eslint-disable */
      totalPages: function() {
        if (this.resultCount == 0){
          return 1
        }
        else {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
      },
      /* eslint-disable */
      paginate: function() {

              
          if (!this.articles || this.articles.length != this.articles.length) {
              return
          }

          this.resultCount = this.articles.length
          if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages
            
          }
          var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
          return this.articles.slice(index, index + this.itemsPerPage)
      }
  },
}


</script>

<style>

</style>