<template>
  <div id="home">
    <v-parallax
    src="../assets/liberty.jpg"
    height="1000"
    class="desktop-background"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <v-img max-height="90vh" :contain="true" src="https://cms.kclibrary.org/storage/uploads/2020/03/09/5e66a318ddc28VotesForWomen_2020Centennial_dropshadow_web.png"></v-img>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mobile-background">
      <v-row
      class="pt-12"
      >
        <v-col class="text-center pt-12 mt-12" cols="12">
          <v-img max-height="100vh" :contain="true" src="https://cms.kclibrary.org/storage/uploads/2020/03/09/5e66a318ddc28VotesForWomen_2020Centennial_dropshadow_web.png"></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style scoped lang="scss">
#home {
  height: 1000px;
   @include respond(phone) {
    position: relative;
    z-index: 0;
    background-image: url(../assets/liberty.jpg);
    background-size: cover;
    background-repeat: no-repeat;  
    background-position: center;
    height: 100vh;
  }
}
.desktop-background {
  @include respond(phone) {
    display: none;
  }
}
.mobile-background {
  display: none;
  @include respond(phone) {
    display: contents;
  }
}
.intro-text {
  animation: textFade 2s;
  @include respond(phone) {
    font-size: 4rem !important; 
    line-height: 1.25 !important;     
  }
}
@keyframes textFade{
 0% {opacity: 0}
 25% {opacity: .25}
 50% {opacity: .5}
 75% {opacity: .75}
 100% {opacity: 1}
}
</style>
