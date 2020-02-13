<template>
<div id="partners">
    <h1 class="display-2 text--primary font-weight-black text-center pa-6">Partners</h1>
    <v-carousel continuous="true" cycle="true" :show-arrows="false" height="100%" hide-delimiter-background dark="true" delimiter-icon="mdi-star">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <v-row class="mx-12 pb-12">
        <v-col cols-md="5">
            <v-card
        class="mx-auto"
        max-width="344"
        light
        >
            <v-card-text>
                <p class="display-1 text--primary">
                    SPONSOR NAME
                </p>
                <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae exercitationem excepturi obcaecati ipsam sint ducimus officia fugiat aut.
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="secondary"
                >
                    Link to Sponsor
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
         <v-col cols-md="5">
            <v-card
        class="mx-auto"
        max-width="344"
        light
        >
            <v-card-text>
                <p class="display-1 text--primary">
                    SPONSOR NAME
                </p>
                <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae exercitationem excepturi obcaecati ipsam sint ducimus officia fugiat aut.
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="secondary"
                >
                    Link to Sponsor
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
         <v-col cols-md="5">
            <v-card
        class="mx-auto"
        max-width="344"
        light
        >
            <v-card-text>
                <p class="display-1 text--primary">
                    SPONSOR NAME
                </p>
                <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae exercitationem excepturi obcaecati ipsam sint ducimus officia fugiat aut.
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="secondary"
                >
                    Link to Sponsor
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
         <v-col cols-md="5">
            <v-card
        class="mx-auto"
        max-width="344"
        light
        >
            <v-card-text>
                <p class="display-1 text--primary">
                    SPONSOR NAME
                </p>
                <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae exercitationem excepturi obcaecati ipsam sint ducimus officia fugiat aut.
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="secondary"
                >
                    Link to Sponsor
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
         <v-col cols-md="5">
            <v-card
        class="mx-auto"
        max-width="344"
        light
        >
            <v-card-text>
                <p class="display-1 text--primary">
                    SPONSOR NAME
                </p>
                <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae exercitationem excepturi obcaecati ipsam sint ducimus officia fugiat aut.
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="secondary"
                >
                    Link to Sponsor
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-carousel-item>
    <p class="partner-ribbon"><span class="partner-ribbon-content"></span></p>
  </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  data () {
      return {
        items: [
          {
            src: '',
          },
          {
            src: '',
          },
          {
            src: '',
          },
          {
            src: '',
          },
        ],
      }
    },
};
</script>

<style >
#partners {
    height: 100%;
    background: #E9DEC1;
    padding: 2rem 0;
    position: relative;
    z-index: 4;
}

.partner-ribbon {
animation: textFade 2s;
 width: 15%; 
 position: relative;
 background: #d5654D;
 color: #e9dfc1;
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
