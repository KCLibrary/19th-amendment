<template>
<div id="partners">
    <h1 class="display-2 text--primary font-weight-black text-center pa-6">Regional Partners</h1>
    <h3 class="grey--text text--darken-1 text-center px-12 py-5">Many organizations, civic groups, and cultural institutions in western Missouri and eastern Kansas are commemorating the legacy of the 19th Amendment throughout its anniversary year. Visit their websites to learn more about their programming and activities.</h3>
    <v-carousel continuous="true" cycle="true" :show-arrows="false" height="100%" hide-delimiter-background dark="true" delimiter-icon="mdi-star">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    >
    <v-row class="mx-12 pb-12">
        <v-col class="col-6" :md="2" :sm="6" :key="partner._id" v-for="partner in item">
            <v-card
        class="mx-auto d-flex pb-3"
        max-width="344"
        height="200"
        light
        hover
        :href="partner.url"
        > <v-img class="align-end white--text" height="200" :src="'https://cms.kclibrary.org'+partner.image.path" gradient="to top, rgba(255,255,255,1) 15%, rgba(51,145,147,.25) 100%">
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
        console.log(slideCount)
        for(let i=0;i<slideCount;i++){
            let end = 12 * (i + 1)
            let start = i * 12
            console.log(start, end)
            let partnerSlide = partners.slice(start, end)
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
}
.partner {
    &__banner {
        background: #339193;
        border-bottom: double white 15px;
        border-top: double white 15px;
        padding: 1.5rem;
        margin-top: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
    }
}
.partner-ribbon {
animation: textFade 2s;
 width: 15%; 
 position: relative;
 background: #d5654D;
 color: white;
 text-align: center;
 padding: 1.5em 2em; /* Adjust to suit */
 margin: 0 auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the partner-ribbon 'graphics' take up 24px themselves so we double it. */
}
.partner-ribbon:before, .partner-ribbon:after {
 content: "";
 position: absolute;
 display: block;
 bottom: -1em;
 border: 1.5em solid #c76e5b;
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
 border-color: #bc462c transparent transparent transparent;
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
</style>
