<template>
  <div id="voting">
    <v-parallax
    dark
    src="../assets/social.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-2 text--secondary font-weight-black text-center pa-6">Election & Voting Information</h1>
          <h3 class="white--text text-center px-12 py-5">Register to vote, check your voter registration status, and see what’s on your local ballot using Vote 411 from the League of Women Voters Education Fund.</h3>
          <v-btn color="primary">Get Started</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style scoped lang="scss">
#voting {
  height: 100%;
}
</style>
