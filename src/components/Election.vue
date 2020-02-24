<template>
  <div id="voting">
    <h1 class="display-2 text--primary font-weight-black text-center pa-6">Election & Voting Information</h1>
    <h3 class="grey--text text--darken-1 text-center px-12 py-5">Register to vote, check your voter registration status, and see what’s on your local ballot using Vote 411 from the League of Women Voters Education Fund.</h3>
    <v-btn>Get Started</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style scoped lang="scss">
#voting {
  height: 100vh;
  padding-top: 5rem;
  background-image: url(../assets/social.jpg);
  background-size: cover;
  background-position: center;
  padding: 2rem;
}
</style>
