<template>
  <div class="displayback">
    <div class="index-base">
      <div class="styles-page">
        <div class="styles-card">
          <div class="designcard">design gift card</div>
        </div>
      </div>

      <div class="personaliseback">
        <div class="personalize-occasionsListContainer">

           <div> 
               <div class> 

                    <div class="occasionspicker-occasionsContainer"> 

                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <v-btn v-for="img in images" :key="img.id">  {{img.name}} </v-btn>
                      </div> 

                    </div>

               </div>

           </div>
          <div>
            <!-- <div v-for="(item, i) in images" :key="i"> -->
              <!-- <div
                class="occasionspicker-occasionsContainer"
                max-height="195px"
              >
                <v-btn rounded class="mb-5 mx-3" @click="wedd()">
                  {{ item.name }}
                </v-btn>

                <v-btn rounded  class="mb-5 mx-3" @click="eudd()">
                                    Eid
                                  </v-btn>

                <v-btn rounded  class="mb-5 mx-3" @click="birthh()">
                                     Birthday
                                  </v-btn>

                <v-btn rounded class="mb-5 mx-3" @click="eidd()">
                                      Eid
      
                                  </v-btn>

                <v-btn rounded class="mb-5 mx-3" @click="birthh()">
                                         {{item.name}}
      
                                  </v-btn>

                <v-btn rounded class="mx-3" @click="greet()">
                                        {{item.name}}
      
                                  </v-btn>

                <v-btn rounded class="mx-3" @click="anni()">
                                        {{item.name}}
      
                                  </v-btn> 

                 <v-btn rounded class="mx-3" @click="welcc()">
                                       Welcome
      
                                  </v-btn>
                                  <v-btn rounded class="mx-3" @click="wishes()">
                                       Best Wishes
      
                                  </v-btn>
                                  <v-btn rounded class="mx-3" @click="congretss()">
                                       Congrets
      
                                  </v-btn>
                                  <v-btn rounded class="mx-3" @click="goodluck()">
                                       Good Luck
      
                                  </v-btn>
                                  <v-btn rounded class="mx-3" @click="mom()">
                                       Best Mom
      
                                  </v-btn>

                                  <v-btn rounded class="mx-3" @click="dad()">
                                       Best Dad
      
                                  </v-btn>
              </div> -->

              <!-- <div> -->
                <!-- <v-img v-if="!item.wedding" v-show="false" :src="item.img">
                </v-img>
                  -->
                               <!-- <v-img   v-show="false"  src="https://assets.myntassets.com/assets/images/2021/4/22/ab742751-15f9-4dbd-95f7-460a063de6981619082516111-Eid.png"> 
                              
                               </v-img>

                                <v-img    v-show="false"  src="https://assets.myntassets.com/assets/images/2021/4/22/ab742751-15f9-4dbd-95f7-460a063de6981619082516111-Eid.png"> 
                              
                               </v-img> --> 
              <!-- </div> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wedding: false,
      eud: false,
      birth: false,

      images: [
        {
          wedding: 'false',
          name: 'Wedding',
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/a7b36ab8-b7d7-4abb-b067-4f1d7ddfd2991608270334852-wedding-Card-min.png',
        },
        {
          wedding: false,
          name: 'Eid',
          img: 'https://assets.myntassets.com/assets/images/2021/4/22/ab742751-15f9-4dbd-95f7-460a063de6981619082516111-Eid.png',
        },
        {
          wedding: false,
          name: 'Birthday',
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/eb9c8d1b-7372-40a0-8cd3-996c7a58ba841608270334514-birthday-min.png',
        },
        {
          wedding: false,
          name: 'Seasons Greetings ',
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/4d7a8a79-7223-4e33-9e08-3db9090ca13c1608270334657-festive-gifting-min.png',
        },
        {
          wedding: false,
          name: 'Anniversary',
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/6b379bef-49df-42c6-876d-56962f4f18231608270334471-anniversary-min.png',
        },
        //   {
        //       wedding:false,
        //       name:'',
        //       img:''
        //   },
        //   {
        //       wedding:false,
        //   },
        //   {
        //       wedding:false,
        //   },
        //   {
        //      wedding:false,
        //   },
        //   {
        //      wedding:false,
        //   },
        //   {
        //      wedding:false,

        // }
      ],
    }
  },

  methods: {
    wedd() {
      this.wedding = true
    },

    eudd() {
      this.eud = true
    },
    birthh() {
      this.birth = true
    },
    greet(){
    this.greeting = true
    },
    anni(){
    this.anniversary = true
    },
    welcc(){
        this.welcome = truex
    },
    wishes(){
        this.bestwish = true
    },
    congretss(){
        this.congrets = true
    },
    goodluck(){
        this.goodluc = true
    },
    mom(){
         this.bestmom = true
    },
    dad(){
        this.bestdad = true
    }
  },
}
</script>

<style>
.displayback {
  background: linear-gradient(to bottom right, #feedf6, #fcf0e2);
  background-image: linear-gradient(
    to right bottom,
    rgb(254, 237, 246),
    rgb(252, 240, 226)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;

  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  min-height: 600px;
  margin-top: -20px;
}
.index-base {
  padding: 50px 0 50px 0;
  max-width: 420px;
  margin: auto;
  font-family: whitney !important;
}

.styles-page {
  box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
  width: 100%;
  max-height: 500px;
  background: #ffffff;
  position: relative;
}
.styles-card {
  background-color: white;
  padding: 10px 10px 10px 10px;
}
.styles-top {
  position: relative;
}
.designcard {
  text-transform: uppercase;
  font-family :Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  color: #696b79;
  letter-spacing: 0.7px;
  font-size: 16px;
  font-weight: bold;
  line-height: 45px;
 
}
.personaliseback {
  background-image: url(https://assets.myntassets.com/assets/images/2020/12/18/58687ffa-2738-4c44-9923-a8d4c88c0c441608269748277-Background.jpg);

  background-repeat: no-repeat;
  background-size: 100%;
}
.personalize-occasionsListContainer {
  display: inline-block;
  text-align: center;
  width: 100%;
}
div {
  -webkit-tap-highlight-color: transparent;
}
.occasionspicker-occasionsContainer {
  display: inline-block;
  overflow-y: hidden;
  text-align: center;
  margin: 17.5px 6px 0px 6px;
  box-sizing: border-box;
}
.occasionspicker-occasionsContainer {
  overflow-y: hidden;
  max-height: none;
  text-align: center;
  box-sizing: border-box;
  margin: 17.5px 6px 0px 6px;
}
.occasionspicker-occasionDiv {
  background-color: white;
  border: 1px solid #d5d6d9;
  min-height: 30px;
  text-align: center;
  vertical-align: middle;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  margin: 7px 4px 7px 4px;
  display: inline-block;
  padding: 0px 14px;
  color: #535766;
}
</style>