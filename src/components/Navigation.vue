<template>
    <div class="ribbon-nav">
        <a class="ribbon-nav__item ribbon-nav__home" href="#home"><span class="ribbon-nav__text">Home</span></a>
        <a class="ribbon-nav__item ribbon-nav__history" href="#history"><span class="ribbon-nav__text">History</span></a>
        <a class="ribbon-nav__item ribbon-nav__partners" href="#partners"><span class="ribbon-nav__text">Partners</span></a>
        <a class="ribbon-nav__item ribbon-nav__social" href="#social"><span class="ribbon-nav__text">Social</span></a>
   </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">
//screens < 1280p cutoff switch to standard hamburger menu for mobile browsing
.ribbon-nav{
    position: fixed;
    z-index: 100;
    top: 35%;
    &__item{
        background: #d5654D;
        clip-path: polygon(0% 0%, 100% 0, 90% 50%, 100% 100%, 0% 100%);
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: .5vw;
        margin: 1rem;
        display: block;
        text-decoration: none;
        color: #e9dfc1;
        transition: all .5s ease-in-out;
        animation: hideNav 4s ease-in-out;
        animation-delay: 1s;
         &:hover {
            width: 15vw;
            & .ribbon-nav__text{
                width: 100%;    
                opacity: 1;
            }
        }
    }
    @keyframes hideNav {
        0%   {width: .5vw;}
        10% {width: 15vw;}
        90% {width: 15vw;}
        100% {width: .5vw;}
    }
    &__text {
        display: block;
        text-align: center; 
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
