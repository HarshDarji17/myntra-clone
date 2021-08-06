<template>
  <div class="displayback">
    <div class="index-base">
      <div class="styles-page">
        <div class="styles-card">
          <div class="styles-top">
            <v-carousel
              hide-delimiters
              cycle
              height="auto"
              :show-arrows="false"
              width="100%"
            >
              <v-carousel-item
                v-for="(color, i) in colors"
                :key="i"
                width="100%"
              >
                <v-container width="100%">
                  <v-row>
                    <v-col cols="12" class="career-testimony__content">
                      <v-img :src="color.img" width="100%"> </v-img>

                      <p class="texttitle">{{ color.title }}</p>

                      <p class="textsubtitle">{{ color.subtitle }}</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-carousel-item>
            </v-carousel>

            <div>
              <v-btn class="btngiftstyle" color="#FF3F6C" block dark>
                SEND GIFT CARD
              </v-btn>
            </div>

            <div>
              <v-img
                class="cardimage"
                src="https://assets.myntassets.com/v1/assets/images/2017/10/26/11509002270933-9757-ex54rk.jpg"
              >
              </v-img>
            </div>
          </div>
        </div>
      
    

 <div clas="styles"> 
   

           <!-- height grey color type  -->
  <div class="styles-placeholder"></div>    

    <div class="styles-giftcards1"> 
               <!-- border div  -->
        <div class="styles-giftcards2"> 
               <!-- words div  -->
          <div class="styles-giftcards3">Browse Gift Cards By Occasions</div>
        </div>


        <div class="styles-browseOccasionCards"> 

          <div> 
               <div class> 

                    <div class="occasionspicker-occasionsContainer"> 

                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Wedding </div>
                      </div>  
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Birthday </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Seasons Greetings </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Anniversary </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Welcome </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Best Wishes </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Congrets </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Good Luck </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Best Mom </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Best Dad </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Grand Parents </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Best Sibling </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Best Child </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Best Friend </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div> Best Spouse </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Engagement </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Farewell </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  Thank You </div>
                      </div> 
                      <div tabindex="0" class="occasionspicker-occasionDiv"> 
                        <div>  My Idol </div>
                      </div> 

                    </div>


               </div>
          </div>


        </div>


      </div>


              <!-- height grey color type  -->
  <div class="styles-placeholder"></div>  

  <div class="styles-receive styles-actionsCard"> 

    <div> 

      <div>  
            <!-- form  -->

         <div class="checkbalance-title"> Received a gift card? </div>
         <div class="checkbalance-subtitle"> Check balance in your card</div>
         <div class="checkbalance-form"> 
       
    <form>
                <v-text-field
                   v-model="card"
                   :error-messages="cardErrors"
                   :counter="16"
                   label="Card No."
                   required
                   @input="$v.card.$touch()"
                   @blur="$v.card.$touch()">
                </v-text-field>

                <v-text-field
                   v-model="pin"
                   :error-messages="pinErrors"
                   :counter="6"
                   label="PIN"
                   required
                   @input="$v.pin.$touch()"
                   @blur="$v.pin.$touch()">
                </v-text-field>
           </form>

          

         </div>


          <div class="checkbalance-error"> </div>

           <div> 
             <button class="checkbalance-balance"> Check balance </button>
           </div>


      </div>

       <!-- line purpose  -->
      <div class="styles-footerTop"> </div>

         <!-- footer   -->

         <div class="styles-footer"> 

           <nuxt-link  to='' class="styles-footerLink"> Manage Gift Cards </nuxt-link>


            <div class="styles-footerSingleAction"> 

               <nuxt-link  to='' class="styles-footerLink"> Corporate & Bulk Purchases </nuxt-link>
            </div>

            <div class="styles-horFirst styles-hor"> 
                 <nuxt-link  to='' class="styles-footerLink"> T&C </nuxt-link>
            </div>

            <div class="styles-horSecond styles-hor"> 

                 <nuxt-link  to='' class="styles-footerLink"> FAQ </nuxt-link>
            </div> 

            <div class="styles-qccontainer"> 

            <img src="	https://constant.myntassets.com/giftcard/assets/img/QC_logo.png" width = "70px" />
            </div>


            <div class="styles-seocontent"> 
              
              <div class="styles-seocontentHeading"> Myntra Gift Cards for all Occasions</div>

              <p> "Are you still confused about what to gift your friend this birthday? Do you have a lot of things in mind but not able to single out one option? Maybe, then this is the best time to avail the Myntra gift card. Yes, you heard it right! Myntra is bringing this opportunity to you to buy a specially personalised gift card for your near and dear ones. These cards are a part of the constant endeavours from the Myntra world to bring a smile to your friends’ and family’s faces. Not only a birthday, but you can opt for a gift card for a plenty of other occasions, tailor-made to suit your requirements." </p>

              <p> "The procedure to make a gift card purchase is extremely convenient and hassle-free. Click on the" <nuxt-link to=''> Buy gift card </nuxt-link>  "option. Select the occasion and personalise the message, if you want. Enter the lucky person’s e-mail address, enter the value of the gift card that you want to purchase and the recipient’s name. Post preview, proceed with the payment using your debit or credit card or with the help of internet banking. Once the payment is confirmed, Bingo! Your gift card is on the way!"  </p>

              <p> "The best part about Myntra gift cards is that it has been designed to suit most of the special occasions. Additionally, the process of redeeming is as simple as it is for purchasing. Add the gift card to your Myntra account by clicking ADD TO ACCOUNT in the email sent to the recipient containing the Gift Card details or directly add the gift card from"  <nuxt-link to="" >Manage Gift Cards </nuxt-link>
                  ". Once the gift card is added successfully in your Myntra account, the gift card balance will appear on the payment page during checkout. Select Gift Card at the time of payment during checkout. Isn’t it simple?"
                 </p>

                 <p> 
                     "Apart from personal gift card options, Myntra also allows you to make corporate purchases to make your colleagues feel special. Corporates for bulk purchase or custom designed Gift Cards can reach us through" <nuxt-link to='' >  Corporate & Bulk Purchases.  </nuxt-link> "So, what are you waiting for? Myntra gift cards are waiting to spread a smile."
                 </p>




            </div>


         </div>



    </div>
  </div>


    </div> 
 </div> 
 </div>
    
  </div>
</template>

<script>
 import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
   mixins: [validationMixin],

    validations: {
      card: { required, maxLength: maxLength(16) },
      pin:{ required, maxLength: maxLength(6)}
     },
     computed:{

        cardErrors () {
        const errors = []
        if (!this.$v.card.$dirty) return errors
        !this.$v.card.maxLength && errors.push('Card must be at most 16 number long')
        !this.$v.card.required && errors.push('Enter valid Card No.')
        return errors
      },

      pinErrors () {
        const errors = []
        if (!this.$v.pin.$dirty) return errors
        !this.$v.pin.maxLength && errors.push('Pin must be at most 6 number long')
        !this.$v.pin.required && errors.push('Enter valid Pin No.')
        return errors
      },
     },
  data() {
    return {
      name: '',
      colors: [
        {
          img: 'https://assets.myntassets.com/assets/images/2021/4/22/ab742751-15f9-4dbd-95f7-460a063de6981619082516111-Eid.png',
          title: 'SEND EID WISHES',
          subtitle: 'Wish your loved ones by sending Myntra GiftCard',
        },
        {
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/eb9c8d1b-7372-40a0-8cd3-996c7a58ba841608270334514-birthday-min.png',
          title: 'SEND BIRTHDAY WISHES',
          subtitle: 'Wish your loved ones by sending Myntra GiftCard',
        },
        {
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/4d7a8a79-7223-4e33-9e08-3db9090ca13c1608270334657-festive-gifting-min.png',
          title: 'Best of Festive wishes  to you',
          subtitle: 'Say it with Myntra Gift Card',
        },
        {
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/a7b36ab8-b7d7-4abb-b067-4f1d7ddfd2991608270334852-wedding-Card-min.png',
          title: 'Happy Marrid Life',
          subtitle: 'Say it With Myntra Gift Card',
        },
        {
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/6b379bef-49df-42c6-876d-56962f4f18231608270334471-anniversary-min.png',
          title: 'Wish your loved one',
          subtitle: 'Express your love by Myntra Gift Card',
        },
        {
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/fcd39449-5de0-4147-9374-659f9088d6811608270376212-father-min.png',
          title: ' I love you , dad',
          subtile: ' say it with Myntra Gift Card',
        },
        {
          img: 'https://assets.myntassets.com/assets/images/2020/12/18/5964294a-1b7f-4574-9e94-6feaa3b23da21608270376380-mother-min.png',
          title: 'I love you , mom',
          subtile: ' say it with Myntra Gift Card',
        },
      ],

      items: [
        {
          name: 'Wedding ',
          link: '',
        },
        {
          name: 'Eid',
          link: '',
        },
        {
          name: 'Birthday',
          link: '',
        },
        {
          name: 'Seasons Greetings',
          link: '',
        },
        {
          name: 'Anniversary',
          link: '',
        },
        {
          name: 'Welcome',
          link: '',
        },
        {
          name: 'Best Wishes',
          link: '',
        },
        {
          name: 'Congrets',
          link: '',
        },
        {
          name: 'Good Luck',
          link: '',
        },
        {
          name: 'Best Mom',
          link: '',
        },
        {
          name: 'Best Dad',
          link: '',
        },
        {
          name: 'Grand Parents',
          link: '',
        },
        {
          name: 'Best Friend',
          link: '',
        },
      ],
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
  background: #ffffff;
  position: relative;
  height: auto;
}
.styles-card {
  background-color: white;
  padding: 10px 10px 10px 10px;
}
.styles-top {
  position: relative;
}
.texttitle {
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #282c3f;
  text-align: center;
  font-family: whitney;
  text-transform: uppercase;
  white-space: nowrap;
  box-sizing: border-box;
  text-overflow: ellipsis;
  margin-top: 20px;
}
.textsubtitle {
  font-size: 13px;
  color: #696b79;
  width: 100%;
  padding: 6px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: whitney;
  word-wrap: break-word;
  text-align: center;
}
.btngiftstyle {
  font-family: WhitneySemiBold;
}
.cardimage {
  width: 100%;
  margin: 30px 0 10px 0;
}



.occasionspicker-occasionsContainer {
  overflow-y: hidden;
  max-height: none;
  text-align: center;
  box-sizing: border-box;
  margin: 17.5px 6px 0px 6px;
}

.occasionspicker-occasionDiv:hover {
  cursor: pointer;
}
.occasionspicker-occasionDiv:first-child {
  margin-left: 0;
}
.styles-browseOccasionCards .occasionspicker-occasionDiv {
  outline: none;
}
.styles-browseOccasionCards .occasionspicker-occasionDivSelected {
  border: 1px solid #d4d5d9;
  color: #535766;
}
/* .occasionspicker-occasionDivSelected {
    border: 1px solid #FF3F6C;
    color: #FF3F6C;
    outline: none;
} */
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
.styles-placeholder {
    height: 11px;
    background:#EAEAEC;
}
.styles-giftcards1{
      position: relative;
    margin: 30px 0 0 0;
    
}
.styles-giftcards2{
   border-top:  1px solid #d4d5d9;
   margin: 10px 20px  0px 50px;
   text-align: center;
}
.styles{
      background-color: white;
}
.styles-giftcards3{
      color: #535766;
      text-align: center;
      background: white;
      position: absolute;
      padding: 0 10px 0 10px;
      top: -10px;
      left: calc(50% - 100px);
    font-family: whitney;
}
.styles-browseOccasionCards {
    text-align: center;
    margin: 6px 0 16px 0;
}
.occasionspicker-occasionsContainer {
    margin: 17.5px 6px 0px 6px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    max-height: none;
    text-align: center;
    display: inline-block;
    overflow-y: hidden;
}
.occasionspicker-occasionDiv {
    background-color: white;
    border: 1px solid #D5D6D9;
    min-height: 30px;
    text-align: center;
    vertical-align: middle;
    margin: 7px 4px 7px 4px;
    display: inline-block;
    padding: 0px 14px;
    color: #535766;
}
.occasionspicker-occasionDiv div {
    padding: 8px 6px 8px 6px;
    font-size: 14px;
    font-family: whitney;
}
.styles-receive {
    background-color: white;
    padding: 0px;
    text-align: center;
}
.checkbalance-title {
    font-size: 25px;
    padding: 16px 0px 0px 0px;
    color: #282C3F;
}
.checkbalance-subtitle {
    font-size: 15px;
    line-height: 20px;
    margin: 0px 0px 20px 0px;
    color: #94989f;
    padding: 4px 0px 0px 0px;
}
.checkbalance-form {
    border: 1px solid #d6dbe3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding: 0 14.5px 8px 14.5px;
    margin: 0px 30px 0px 30px;
}
.checkbalance-balance {
    border: none;
    background: none;
    text-transform: uppercase;
    color: #7E818C;
    font-family: WhitneySemiBold;
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 1px;
    margin: 0px 0px 20px 0px;
    padding: 55px 5px 0px 0px;
    font-weight: bolder;
}
.styles-footerTop {
    border-top: 1px solid #d4d5d9;
    margin: 4px 180px 30px 180px;
    width: calc(100% - 360px);
}
.styles-footer {
    max-width: 420px;
    padding: 24px 0 0 0;
    bottom: 0px;
    width: 100%;
    background: #FFFFFF;
    text-align: center;
}
.styles-footerLink {
    text-decoration: none;
    color: #535766;
    font-family: whitney;
    font-size: 14px;
}
.v-application a {
    color: #535766;
}
.styles-seocontentHeading {
    margin: 14px 0 24px 0;
    font-size: 18px;
    line-height: 16px;
    font-family: whitney;
    text-align: center;
    color: #3E4152;
    padding-bottom: 24px;
}
.styles-horFirst {
    text-align: right;
    padding: 0 16px 0 0;
    border-right: 1px solid #535766;
    font-family: whitney;
}
.styles-hor {
    display: inline-block;
    width:45%;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 20px 0 0 0;
}
.styles-horSecond {
    text-align: left;
    padding: 0 0 0 16px;
    font-family: whitney;
}
.styles-qccontainer {
    background: #FFFFFF;
    margin: 0 0 32px 0;
    text-align: center;
    padding: 34px 0 0 0;
}
.styles-seocontent {
    font-size: 13px;
    line-height: 18px;
    text-align: justify;
    padding: 20px;
    color: #696B79;
    background: #F5F5F6;
}
.styles-seocontentHeading {
    margin: 14px 0 0 0;
    font-size: 16px;
    line-height: 16px;
    font-family: whitney;
    text-align: center;
    color: #3E4152;
}
.v-application a {
    color: #1976d2;
    font-weight: bolder;
}
</style>