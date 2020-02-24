<template>
  <div class="web-container">
    <app-navigation/>
    <app-intro/>
    <app-history/>
    <app-partners/>
    <app-election/>
    <app-social/>
    <app-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import appNavigation from '@/components/Navigation.vue'
import appIntro from '@/components/Intro.vue'
import appHistory from '@/components/History.vue'
import appPartners from '@/components/Partners.vue'
import appSocial from '@/components/Social.vue'
import appFooter from '@/components/Footer.vue'
import appElection from '@/components/Election.vue'

export default {
  name: 'home',
  components: {
    appNavigation,
    appIntro,
    appHistory,
    appPartners,
    appElection,
    appSocial,
    appFooter
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Homemade+Apple|Raleway&display=swap');
.v-application {
  font-family: 'Raleway', sans-serif !important;
}
.v-application h1.display-4, .cursive-font {
  font-family: 'Homemade Apple', cursive !important;
}
.theme--light.v-application .text--primary {color: #339193 !important;} 
.theme--light.v-application .text--secondary { color: #d5654D !important;}
.theme--light.v-application .text--accent{color: white !important;}

.web-container {
  background-color: white;
}
</style>