<template>
<div>
    <v-card
    color="secondary" class="mobile-nav"
    >
        <v-toolbar color="secondary" dense fixed>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-app-bar-nav-icon color="white" v-on="on"></v-app-bar-nav-icon>
                </template>
                <v-list flat width="100vw" rounded="false" color="secondary">
                    <v-list-item
                    class="white--text font-weight-black"
                    v-for="(item, index) in items"
                    :key="index"
                    @click="$vuetify.goTo(item.selector)"
                    >
                    <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
              <v-toolbar-title class="white--text font-weight-black">Votes For Women</v-toolbar-title>
        </v-toolbar>
    </v-card>
    <ul class="ribbon-nav">
        <li class="ribbon-nav__item ribbon-nav__home" @click="$vuetify.goTo('#home')"><span class="ribbon-nav__text">Home</span></li>
        <li class="ribbon-nav__item ribbon-nav__history" @click="$vuetify.goTo('#history')"><span class="ribbon-nav__text">History</span></li>
        <li class="ribbon-nav__item ribbon-nav__partners" @click="$vuetify.goTo('#partners')"><span class="ribbon-nav__text">Partners</span></li>
        <li class="ribbon-nav__item ribbon-nav__voting" @click="$vuetify.goTo('#voting')"><span class="ribbon-nav__text">Election</span></li>
        <li class="ribbon-nav__item ribbon-nav__social" @click="$vuetify.goTo('#social')"><span class="ribbon-nav__text">Social</span></li>
   </ul>
</div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
      items: [
        { title: 'Home', selector: '/' },
        { title: 'History', selector:"#history" },
        { title: 'Partners', selector:"#partners" },
        { title: 'Election', selector:"#voting" },
        { title: 'Social', selector:"#social" }
      ],
    }),
};
</script>

<style scoped lang="scss">
//screens < 1280p cutoff switch to standard hamburger menu for mobile browsing
.mobile-nav {
    display: none;
    @include respond(tab-port) {
        display: contents;
    }
}
header.v-sheet.v-sheet--tile.theme--light.v-toolbar.v-toolbar--dense.secondary{
    position: fixed !important;
    z-index: 100 !important;
    width: 100vw !important;
    border-top-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
}
.ribbon-nav{
    position: fixed;
    z-index: 100;
    top: 35%;
    cursor: pointer;
    @include respond(tab-port) {
        display: none;
    }
    &__item{
        background: #E2C740;
        clip-path: polygon(0% 0%, 100% 0, 90% 50%, 100% 100%, 0% 100%);
        -webkit-clip-path: polygon(0% 0%, 100% 0, 90% 50%, 100% 100%, 0% 100%);
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: .5vw;
        margin: 1rem;
        display: block;
        text-decoration: none;
        color: white;
        transition: all .5s ease-in-out;
        animation: hideNav 4s ease-in-out;
        animation-delay: 1s;
         &:hover {
            width: 25vw;
            & .ribbon-nav__text{
                width: 100%;    
                opacity: 1;
            }
        }
    }
    @keyframes hideNav {
        0%   {width: .5vw;}
        10% {width: 20vw;}
        90% {width: 20vw;}
        100% {width: .5vw;}
    }
    &__text {
        display: block;
        font-family: 'Merriweather', serif !important;
        text-align: center; 
        font-weight: 700;
        opacity: 0;
        transition: all .4s ease-in;
        text-transform: uppercase;
        letter-spacing: .75rem;
        animation: hidetext 4s ease-in-out;
        animation-delay: 1s;
    }
    @keyframes hidetext {
        0%   {opacity: 0}
        10% {opacity: 1}
        90% {opacity: 1}
        100% {opacity: 0}
    }
    &__active {
        width: 15vw;
        & .ribbon-nav__text{
            width: 100%;    
            opacity: 1;
        }
    }
}
</style>
