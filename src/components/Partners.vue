<template>
<div id="partners">
    <h1 class="display-2 text--primary font-weight-black text-center pa-6 partner__heading">Regional Partners</h1>
    <p class="grey--text text--darken-1 text-center px-12 py-5 partner__content">Many organizations, civic groups, and cultural institutions in western Missouri and eastern Kansas are commemorating the legacy of the 19th Amendment throughout its anniversary year. Visit their websites to learn more about their programming and activities.</p>
    <v-carousel interval="15000" cycle="true" continuous="true" :show-arrows="false" height="100%" hide-delimiter-background dark="true" delimiter-icon="mdi-star">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    >
    <v-row class="mx-12 pb-12">
        <v-col :md="2" :sm="12" :key="partner._id" v-for="partner in item">
            <v-card
        class="mx-auto d-flex pb-3"
        width="344"
        height="200"
        light
        hover
        :href="partner.url"
        > <v-img class="align-end white--text" height="200" :src="'https://cms.kclibrary.org'+partner.image.path" gradient="to top, rgba(255,255,255,1) 15%, rgba(62,47,102,.25) 100%">
            <v-card-text>
                <h3 class="text--primary text-left">
                    {{partner.name}}
                </h3>
            </v-card-text>
        </v-img>
        </v-card>
        </v-col>
    </v-row>
    </v-carousel-item>
    <p class="partner-ribbon"><span class="partner-ribbon-content"></span></p>
  </v-carousel>
  <div class="partner__banner"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Partners',
  data () {
      return {
        items: [
        ],
      }
    },
     async created() {
        const { data } = await axios.post(
        process.env.VUE_APP_PARTNERS,
        {headers: { "Content-Type": "application/json" }}
        );
        let partners = data.entries
        let partnerCount = partners.length
        let slideCount = Math.ceil(partnerCount/12)
        for(let i=0;i<slideCount;i++){
            let end = 12 * (i + 1)
            let start = i * 12
            let partnerSlide = partners.slice(start, end)
            if(partnerSlide.length !== 12){
                for(let l = partnerSlide.length;l<12;l++){
                    partnerSlide.push({name: " ", url: "#", image: {path: ""}})
                }
            }
            this.items.push(partnerSlide)
        }
    }
};
</script>

<style lang="scss">
#partners {
    height: 100%;
    background: white;
    padding: 2rem 0 0 0;
    position: relative;
    z-index: 4;
    box-shadow: inset 0 -7px 9px -7px rgba(0,0,0,0.4);
}
.partner {
    &__banner {
        background: #645682;
        border-bottom: double white 15px;
        border-top: double white 15px;
        padding: 1.5rem;
        margin-top: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
    }
    &__heading {
        @include respond(phone) {
        font-size: 2rem !important; 
        line-height: 1.25 !important;    
        }
    }
    &__sub-heading {
    @include respond(phone) {
        font-size: 1.25rem !important; 
        line-height: 1.25 !important;     
    }
    }
    &__content {
        font-weight: 400;
        @include respond(phone) {
            font-size: 1rem !important;     
            padding: 0 1rem;
        }
    }
}
.partner-ribbon {
animation: textFade 2s;
 width: 15%; 
 position: relative;
 background: #E2C740;
 color: white;
 text-align: center;
 padding: 1.5em 2em; /* Adjust to suit */
 margin: 0 auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the partner-ribbon 'graphics' take up 24px themselves so we double it. */
@include respond(phone) {
    width: 80%
}
}
.partner-ribbon:before, .partner-ribbon:after {
 content: "";
 position: absolute;
 display: block;
 bottom: -1em;
 border: 1.5em solid #C9AD36;
 z-index: -1;
}
.partner-ribbon:before {
 left: -2em;
 border-right-width: 1.5em;
 border-left-color: transparent;
}
.partner-ribbon:after {
 right: -2em;
 border-left-width: 1.5em;
 border-right-color: transparent;
}
.partner-ribbon .partner-ribbon-content:before, .partner-ribbon .partner-ribbon-content:after {
 content: "";
 position: absolute;
 display: block;
 border-style: solid;
 border-color: #b9881d transparent transparent transparent;
 bottom: -1em;
}
.partner-ribbon .partner-ribbon-content:before {
 left: 0;
 border-width: 1em 0 0 1em;
}
.partner-ribbon .partner-ribbon-content:after {
 right: 0;
 border-width: 1em 1em 0 0;
}
.v-carousel__controls {
    margin-bottom: 1rem !important;
    
}
.v-icon.mdi-star.theme--dark{
    font-size: 2rem !important
}
</style>
