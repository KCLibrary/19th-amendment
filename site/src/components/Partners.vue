<template>
<div id="partners">
    <h1 class="display-2 text--primary font-weight-black text-center pa-6">Partners</h1>
    <v-carousel :show-arrows="false" height="100%" hide-delimiter-background dark="true" delimiter-icon="mdi-star">
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

<style scoped>
#partners {
    height: 100%;
    background: #E9DEC1;
    padding: 2rem 0;
}
</style>
