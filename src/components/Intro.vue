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
          <h1 class="display-4 text--accent font-weight-black intro-text">Votes For Women</h1>
          <p class="text--accent ribbon text-uppercase"><span class="ribbon-content">The 19<sup>th</sup> Amendment in the Heartland</span></p>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mobile-background">
      <v-row
      class="pt-12"
      >
        <v-col class="text-center pt-12 mt-12" cols="12">
          <h1 class="display-4 text--accent font-weight-black intro-text">Votes For Women</h1>
          <p class="text--accent ribbon text-uppercase"><span class="ribbon-content">The 19<sup>th</sup> Amendment in the Heartland</span></p>
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
.ribbon-content {
  letter-spacing: .25rem;
  font-weight: 700;
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
.ribbon {
 width: 35%; 
 position: relative;
 background: #dea62c;
 color: white;
 text-align: center;
 padding: 1em 2em; /* Adjust to suit */
 margin: 0 auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */
@include respond(ipad-pro) {
    width: 80%
}
}
.ribbon:before, .ribbon:after {
 content: "";
 position: absolute;
 display: block;
 bottom: -1em;
 border: 1.5em solid #e5b857;
 z-index: -1;
}
.ribbon:before {
 left: -2em;
 border-right-width: 1.5em;
 border-left-color: transparent;
}
.ribbon:after {
 right: -2em;
 border-left-width: 1.5em;
 border-right-color: transparent;
}
.ribbon .ribbon-content:before, .ribbon .ribbon-content:after {
 content: "";
 position: absolute;
 display: block;
 border-style: solid;
 border-color: #b9881d transparent transparent transparent !important;
 bottom: -1em;
}
.ribbon .ribbon-content:before {
 left: 0;
 border-width: 1em 0 0 1em;
}
.ribbon .ribbon-content:after {
 right: 0;
 border-width: 1em 1em 0 0;
}
</style>
