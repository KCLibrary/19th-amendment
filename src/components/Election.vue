<template>
  <div id="voting" class="py-8">
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-2 text--secondary font-weight-black text-center pa-6">Election & Voting Information</h1>
          <h3 class="white--text text-center px-12 py-5">Register to vote, check your voter registration status, and see what’s on your local ballot using Vote 411 from the <strong>League of Women Voters Education Fund.</strong></h3>
          <v-btn color="primary" href="https://www.vote411.org/">Get Started</v-btn>
        </v-col>
      </v-row>
      <v-row class="pt-8">
        <v-col :md="3" :sm="12" cols="12"></v-col>
           <v-col :md="3" :sm="12" :key="i" v-for="(item, i) in info" class="pt-0 mt-0">
              <v-card
              class="mx-auto pb-3"
              max-width="344"
              height="200"
              light
              hover
              :href="item.url"
              > 
                  <v-img class="align-end white--text" height="200" :src="item.image" gradient="to top, rgba(255,255,255,1) 15%, rgba(117,84,115,.25) 100%">
                      <v-card-text>
                          <h3 class="text--primary text-left">
                              {{item.name}}
                          </h3>
                      </v-card-text>
                  </v-img>
              </v-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data: () => ({
    info: [
      {url: "https://sos.kansas.gov/elections/registration-voting/", name: "Voting in Kansas", image: "https://cms.kclibrary.org/storage/uploads/2020/02/25/5e554fcb9919fsos.kansas.gov.png"},
      {url: "https://www.sos.mo.gov/elections", name: "Voting in Missouri", image: "https://cms.kclibrary.org/storage/uploads/2020/02/25/5e554fcd420fdwww.sos.mo.gov.png"}
    ]
  })
};
</script>

<style scoped lang="scss">
#voting {
  background: url(../assets/social.jpg);
  box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.4);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
