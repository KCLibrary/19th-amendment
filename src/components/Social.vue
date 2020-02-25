<template>
<div id="social" class="primary">
  <h1 class="display-2 white--text font-weight-black text-center pa-6">Share Your Story</h1>
    <v-row>
        <v-col :md="3" :sm="12">
            <v-card
    class="mx-auto"
    color="white"
    hover
    dark
    max-width="400"
  >
    <v-card-text class="text--primary headline font-weight-bold">
     "I’d rather go down in history as one lone Negro who dared to tell the government that it had done a dastardly thing than to save my skin by taking back what I said."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://suffrage100ma.org/wp-content/uploads/2017/02/IdaBWells-225x300.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text--primary ">
Ida B. Wells
</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="text--primary mr-1">mdi-heart</v-icon>
          <span class="text--primary subheading mr-2">1931</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-col>
  <v-col :md="3" :sm="12">
            <v-card
    class="mx-auto"
    color="white"
    hover
    dark
    max-width="400"
  >
    

    <v-card-text class="text--primary headline font-weight-bold">
    "I always feel the movement is a sort of mosaic. Each of us puts in one little stone, and then you get a great mosaic at the end."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://pbs.twimg.com/media/Cqy2VwTXYAAWiRs?format=jpg&name=small"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text--primary ">
Alice Paul
</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="text--primary mr-1">mdi-heart</v-icon>
          <span class="text--primary subheading mr-2">1977</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-col>
  <v-col :md="3" :sm="12">
            <v-card
    class="mx-auto"
    color="white"
    hover
    dark
    max-width="400"
  >
    

    <v-card-text class="text--primary headline font-weight-bold">
      "If Congress refuse to listen to and grant what women ask, there is but one course left then to pursue. What is there left for women to do but to become the mothers of the future government?"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://images.gr-assets.com/authors/1245720874p2/251090.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text--primary ">
Victoria Claflin Woodhull
</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="text--primary mr-1">mdi-heart</v-icon>
          <span class="text--primary subheading mr-2">1927</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-col>
  <v-col :md="3" :sm="12">
            <v-card
    class="mx-auto"
    color="white"
    hover
    dark
    max-width="400"
  >
    

    <v-card-text class="text--primary headline font-weight-bold">
      "The world has never yet seen a truly great and virtuous nation because in the degradation of woman the very fountains of life are poisoned at their source."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://pbs.twimg.com/media/Cn5ODWcWYAA_vLL?format=jpg&name=small"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text--primary ">
Lucretia Mott
</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="text--primary mr-1">mdi-heart</v-icon>
          <span class="text--primary subheading mr-2">1880</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-col>
    </v-row>
    <v-row class="px-5 mb-4">
        <v-col :cols="12">
             <v-card
             flat
    class="mx-auto"
    color="primary"
    light
  >
  <h3 class="white--text text-center px-12 py-5">How are you commemorating the 19th Amendment centennial? Share your experiences on Twitter, Facebook, and Instagram using the hashtags below. </h3>
  <v-card-title class="white--text justify-space-around">
      <span>
      <v-icon
        large
        right
        color="white"
      >
        mdi-pound
      </v-icon> VotesForWomen </span>
      <span>
      <v-icon
        large
        right
        color="white"
      >
        mdi-pound
      </v-icon> 19thAmendment </span>
      <span>
      <v-icon
        large
        right
        color="white"
      >
        mdi-pound
      </v-icon> Suffrage100 </span>
    </v-card-title>
    </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
  name: 'Social',
};
</script>

<style scoped>
#social {
    padding: 2rem;
    height: 100%;
    padding-top: 0;
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.4);
}
.v-list-item__title, .v-list-item__subtitle {
    overflow: unset !important;
    text-overflow: unset !important;
   white-space: unset !important;
    }
</style>
