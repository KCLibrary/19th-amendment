<template>
  <div id="home">
    <v-parallax
    src="../assets/liberty.jpg"
    height="1000"
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
}
.ribbon-content {
  letter-spacing: .25rem;
}
.intro-text {
  animation: textFade 2s;
}
@keyframes textFade{
 0% {opacity: 0}
 25% {opacity: .25}
 50% {opacity: .5}
 75% {opacity: .75}
 100% {opacity: 1}
}
.ribbon {
animation: textFade 2s;
 width: 35%; 
 position: relative;
 background: #d5654D;
 color: white;
 text-align: center;
 padding: 1em 2em; /* Adjust to suit */
 margin: 0 auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */
}
.ribbon:before, .ribbon:after {
 content: "";
 position: absolute;
 display: block;
 bottom: -1em;
 border: 1.5em solid #c76e5b;
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
 border-color: #bc462c transparent transparent transparent;
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
