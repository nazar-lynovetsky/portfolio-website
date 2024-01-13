<template>
  <div
    class="scene"
    :class="{ 'scene--flying-letters': lettersFly }"
  >
    <div class="scene__inner" ref="sceneInner">
      <div class="scene-name" aria-hidden="true">
        <div class="letter letter-1"><span class="letter-inner">N</span></div>
        <div class="letter letter-2"><span class="letter-inner">a</span></div>
        <div class="letter letter-3"><span class="letter-inner">z</span></div>
        <div class="letter letter-4"><span class="letter-inner">a</span></div>
        <div class="letter letter-5"><span class="letter-inner">r</span></div>
        <br />
        <br />
        <div class="letter letter-6"><span class="letter-inner">L</span></div>
        <div class="letter letter-7"><span class="letter-inner">y</span></div>
        <div class="letter letter-8"><span class="letter-inner">n</span></div>
        <div class="letter letter-9"><span class="letter-inner">o</span></div>
        <div class="letter letter-10"><span class="letter-inner">v</span></div>
        <div class="letter letter-11"><span class="letter-inner">e</span></div>
        <div class="letter letter-12"><span class="letter-inner">t</span></div>
        <div class="letter letter-13"><span class="letter-inner">s</span></div>
        <div class="letter letter-14"><span class="letter-inner">k</span></div>
        <div class="letter letter-15"><span class="letter-inner">y</span></div>
      </div>
      <div
        class="scene-photo"
        v-if="viewport.isGreaterOrEquals( 'tablet' )"
      >
        <div class="scene-photo__inner">
          <picture>
            <source media="(max-width:1249px)" srcset="/images/avatar--mv.webp">
            <source media="(max-width:1600px)" srcset="/images/avatar--l.webp">
            <img
              src="/images/avatar--d.webp"
              alt=""
              aria-hidden="true"
            >
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref }     from 'vue'
import VanillaTilt from 'vanilla-tilt'

/**
* Utilitys
*/

const viewport = useViewport()



/* 🧩 'Flying Letters' effect.
=================================================================================== */

const lettersFly = ref( false )

onMounted( () => {
  initFlyingLetters()
} )

/**
* Functions
*/

function initFlyingLetters() {
  setTimeout( () => {
    lettersFly.value = true
  }, 7000 )
}



/* 🧩 'Vanilla Tilt' effect.
=================================================================================== */

const sceneInner = ref( null )

onMounted( () => {
  initVanillaTilt()
} )

/**
* Functions
*/

function initVanillaTilt() {
  setTimeout( () => {
    VanillaTilt.init( sceneInner.value, { max: 10, speed: 400 } )
  }, 800 )
}
</script>

<style>
/**
* Keyframes
*/

@keyframes l1--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(-60%, -40%) rotate(-43deg) scale(4);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-30%, -30%) rotate(-23deg) scale(1.4);
  }
}
@keyframes l2--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(-35%, 3%) rotate(29deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-15%, 23%) rotate(9deg) scale(1.4);
  }
}
@keyframes l3--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(0%, -50%) rotate(-29deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(0%, -20%) rotate(-9deg) scale(1.4);
  }
}
@keyframes l4--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(35%, -10%) rotate(-47deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(15%, 10%) rotate(-27deg) scale(1.4);
  }
}
@keyframes l5--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(90%, -42%) rotate(30deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(60%, -32%) rotate(10deg) scale(1.4);
  }
}
@keyframes l6--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(-75%, -65%) rotate(40deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-45%, -75%) rotate(20deg) scale(1.4);
  }
}
@keyframes l7--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(-65%, 8%) rotate(-30deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-40%, -13%) rotate(-10deg) scale(1.4);
  }
}
@keyframes l8--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(-38%, -22%) rotate(55deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-18%, -52%) rotate(35deg) scale(1.4);
  }
}
@keyframes l9--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(-35%, 10%) rotate(-23deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-20%, -25%) rotate(-3deg) scale(1.4);
  }
}
@keyframes l10--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(-13%, 55%) rotate(-30deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-13%, 15%) rotate(-10deg) scale(1.4);
  }
}
@keyframes l11--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(15%, 0%) rotate(-58deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(0%, -35%) rotate(-38deg) scale(1.4);
  }
}
@keyframes l12--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(45%, 73%) rotate(-28deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(25%, 43%) rotate(-8deg) scale(1.4);
  }
}
@keyframes l13--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(58%, 7%) rotate(55deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(33%, -18%) rotate(35deg) scale(1.4);
  }
}
@keyframes l14--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(75%, -15%) rotate(-23deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(45%, -35%) rotate(-3deg) scale(1.4);
  }
}
@keyframes l15--1 {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(95%, -85%) rotate(-60deg) scale(2);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(60%, -95%) rotate(-40deg) scale(1.4);
  }
}

@keyframes l1--2 {
  0% {
    transform: translate(-30%, -30%) rotate(-23deg) scale(1.4);
  }
  33% {
    transform: translate(-30%, -25%) rotate(-23deg) scale(1.4);
  }
  66% {
    transform: translate(-30%, -35%) rotate(-23deg) scale(1.4);
  }
  100% {
    transform: translate(-30%, -30%) rotate(-23deg) scale(1.4);
  }
}
@keyframes l2--2 {
  0% {
    transform: translate(-15%, 23%) rotate(9deg) scale(1.4);
  }
  33% {
    transform: translate(-15%, 18%) rotate(9deg) scale(1.4);
  }
  66% {
    transform: translate(-15%, 28%) rotate(9deg) scale(1.4);
  }
  100% {
    transform: translate(-15%, 23%) rotate(9deg) scale(1.4);
  }
}
@keyframes l3--2 {
  0% {
    transform: translate(0%, -20%) rotate(-9deg) scale(1.4);
  }
  33% {
    transform: translate(0%, -15%) rotate(-9deg) scale(1.4);
  }
  66% {
    transform: translate(0%, -25%) rotate(-9deg) scale(1.4);
  }
  100% {
    transform: translate(0%, -20%) rotate(-9deg) scale(1.4);
  }
}
@keyframes l4--2 {
  0% {
    transform: translate(15%, 10%) rotate(-27deg) scale(1.4);
  }
  33% {
    transform: translate(15%, 5%) rotate(-27deg) scale(1.4);
  }
  66% {
    transform: translate(15%, 15%) rotate(-27deg) scale(1.4);
  }
  100% {
    transform: translate(15%, 10%) rotate(-27deg) scale(1.4);
  }
}
@keyframes l5--2 {
  0% {
    transform: translate(60%, -32%) rotate(10deg) scale(1.4);
  }
  33% {
    transform: translate(60%, -27%) rotate(10deg) scale(1.4);
  }
  66% {
    transform: translate(60%, -37%) rotate(10deg) scale(1.4);
  }
  100% {
    transform: translate(60%, -32%) rotate(10deg) scale(1.4);
  }
}
@keyframes l6--2 {
  0% {
    transform: translate(-45%, -75%) rotate(20deg) scale(1.4);
  }
  33% {
    transform: translate(-45%, -70%) rotate(20deg) scale(1.4);
  }
  66% {
    transform: translate(-45%, -80%) rotate(20deg) scale(1.4);
  }
  100% {
    transform: translate(-45%, -75%) rotate(20deg) scale(1.4);
  }
}
@keyframes l7--2 {
  0% {
    transform: translate(-40%, -13%) rotate(-10deg) scale(1.4);
  }
  33% {
    transform: translate(-40%, -8%) rotate(-10deg) scale(1.4);
  }
  66% {
    transform: translate(-40%, -18%) rotate(-10deg) scale(1.4);
  }
  100% {
    transform: translate(-40%, -13%) rotate(-10deg) scale(1.4);
  }
}
@keyframes l8--2 {
  0% {
    transform: translate(-18%, -52%) rotate(35deg) scale(1.4);
  }
  33% {
    transform: translate(-18%, -47%) rotate(35deg) scale(1.4);
  }
  66% {
    transform: translate(-18%, -57%) rotate(35deg) scale(1.4);
  }
  100% {
    transform: translate(-18%, -52%) rotate(35deg) scale(1.4);
  }
}
@keyframes l9--2 {
  0% {
    transform: translate(-20%, -25%) rotate(-3deg) scale(1.4);
  }
  33% {
    transform: translate(-20%, -20%) rotate(-3deg) scale(1.4);
  }
  66% {
    transform: translate(-20%, -30%) rotate(-3deg) scale(1.4);
  }
  100% {
    transform: translate(-20%, -25%) rotate(-3deg) scale(1.4);
  }
}
@keyframes l10--2 {
  0% {
    transform: translate(-13%, 15%) rotate(-10deg) scale(1.4);
  }
  33% {
    transform: translate(-13%, 10%) rotate(-10deg) scale(1.4);
  }
  66% {
    transform: translate(-13%, 20%) rotate(-10deg) scale(1.4);
  }
  100% {
    transform: translate(-13%, 15%) rotate(-10deg) scale(1.4);
  }
}
@keyframes l11--2 {
  0% {
    transform: translate(0%, -35%) rotate(-38deg) scale(1.4);
  }
  33% {
    transform: translate(0%, -30%) rotate(-38deg) scale(1.4);
  }
  66% {
    transform: translate(0%, -40%) rotate(-38deg) scale(1.4);
  }
  100% {
    transform: translate(0%, -35%) rotate(-38deg) scale(1.4);
  }
}
@keyframes l12--2 {
  0% {
    transform: translate(25%, 43%) rotate(-8deg) scale(1.4);
  }
  33% {
    transform: translate(25%, 38%) rotate(-8deg) scale(1.4);
  }
  66% {
    transform: translate(25%, 48%) rotate(-8deg) scale(1.4);
  }
  100% {
    transform: translate(25%, 43%) rotate(-8deg) scale(1.4);
  }
}
@keyframes l13--2 {
  0% {
    transform: translate(33%, -18%) rotate(35deg) scale(1.4);
  }
  33% {
    transform: translate(33%, -13%) rotate(35deg) scale(1.4);
  }
  66% {
    transform: translate(33%, -23%) rotate(35deg) scale(1.4);
  }
  100% {
    transform: translate(33%, -18%) rotate(35deg) scale(1.4);
  }
}
@keyframes l14--2 {
  0% {
    transform: translate(45%, -35%) rotate(-3deg) scale(1.4);
  }
  33% {
    transform: translate(45%, -30%) rotate(-3deg) scale(1.4);
  }
  66% {
    transform: translate(45%, -40%) rotate(-3deg) scale(1.4);
  }
  100% {
    transform: translate(45%, -35%) rotate(-3deg) scale(1.4);
  }
}
@keyframes l15--2 {
  0% {
    transform: translate(60%, -95%) rotate(-40deg) scale(1.4);
  }
  33% {
    transform: translate(60%, -90%) rotate(-40deg) scale(1.4);
  }
  66% {
    transform: translate(60%, -100%) rotate(-40deg) scale(1.4);
  }
  100% {
    transform: translate(60%, -95%) rotate(-40deg) scale(1.4);
  }
}



/* Scene
=================================================================================== */

/**
* General
*/

.scene {
  position: relative;
  height: 100%;
  overflow: hidden;
}

/**
* Inner
*/

.scene__inner {
  display: grid;
  align-items: center;
  position: relative;
  height: 100%;
  transform: perspective(3000px);
  transform-style: preserve-3d;
}



/* Scene name
=================================================================================== */

/**
* General
*/

.scene-name {
  display: inline-block;
  position: relative;
  z-index: 10;
  padding-top: 41px;
  padding-bottom: 36px;
  text-align: center;
  transform: translateZ(80px);
}

@media (min-width: 600px) {

  .scene-name {
    padding-top: 51px;
    padding-bottom: 44px;
  }

}

@media (min-width: 1250px) {

  .scene-name {
    padding-top: 72px;
    padding-bottom: 72px;
  }

}

@media (min-width: 1350px) {

  .scene-name {
    padding-top: 95px;
    padding-bottom: 84px;
  }

}

@media (min-width: 1600px) {

  .scene-name {
    padding-top: 130px;
    padding-bottom: 110px;
  }

}



/* Letter
=================================================================================== */

/**
* General
*/

.letter {
  display: inline-block;
  font-family: var(--font-family--heading);
  font-size: 3em;
  line-height: 1.2;
  opacity: 0;
  filter: blur(8px);
  transition: filter .6s linear, color .6s linear, opacity .6s linear, -webkit-text-stroke .6s linear;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(.19,1,.19,1);
  will-change: filter, color, opacity, -webkit-text-stroke;
}

@media (min-width: 600px) {

  .letter {
    font-size: 4.7em;
  }

}

@media (min-width: 825px) {

  .letter {
    font-size: 4em;
  }

}

@media (min-width: 1024px) {

  .letter {
    font-size: 5.5em;
  }

}

@media (min-width: 1250px) {

  .letter {
    font-size: 6em;
  }

}

@media (min-width: 1350px) {

  .letter {
    margin-left: 2px;
    margin-right: 2px;
    font-size: 6.4em;
  }

}

@media (min-width: 1600px) {

  .letter {
    margin-left: 7px;
    margin-right: 7px;
    font-size: 8.5em;
  }

}

@media (min-width: 1900px) {

  .letter {
    margin-left: 12px;
    margin-right: 12px;
  }

}

/**
* On 'scene' hover
*/

.scene:hover .letter {
  color: transparent;
  -webkit-text-stroke: 2px var(--color--tuatara);
}

/**
* On 'scene' hover: Theme modes
*/

.dark-mode .scene:hover .letter {
  color: transparent;
  -webkit-text-stroke: 2px var(--color--white-rock);
}

/**
* On 'flying letters' effect start
*/

.scene--flying-letters .letter {
  opacity: 1;
  filter: blur(0);
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}

/**
* Letter inner
*/

.letter-inner {
  display: inline-block;
  transition: transform 5s ease-out;
}

/**
* Letter #1
*/

.letter-1 {
  transform: translate(-60%, -40%) rotate(-43deg) scale(4);
  animation-name: l1--1;
  animation-duration: 5.6s;
  animation-delay: 1.9s;
}

.scene--flying-letters .letter-1 {
  transform: translate(-30%, -30%) rotate(-23deg) scale(1.4);
  animation-name: l1--2;
  animation-duration: 16s;
  animation-delay: 10s;
}

/**
* Letter #2
*/

.letter-2 {
  transform: translate(-35%, 3%) rotate(29deg) scale(2);
  animation-name: l2--1;
  animation-duration: 5.8s;
  animation-delay: 2.2s;
}

.scene--flying-letters .letter-2 {
  transform: translate(-15%, 23%) rotate(9deg) scale(1.4);
  animation-name: l2--2;
  animation-duration: 15.5s;
  animation-delay: 3s;
}

/**
* Letter #3
*/

.letter-3 {
  transform: translate(0%, -50%) rotate(-29deg) scale(2);
  animation-name: l3--1;
  animation-duration: 6.2s;
  animation-delay: 3.1s;
}

.scene--flying-letters .letter-3 {
  transform: translate(0%, -20%) rotate(-9deg) scale(1.4);
  animation-name: l3--2;
  animation-duration: 14s;
  animation-delay: 6.98s;
}

/**
* Letter #4
*/

.letter-4 {
  transform: translate(35%, -10%) rotate(-47deg) scale(2);
  animation-name: l4--1;
  animation-duration: 6s;
  animation-delay: 2.6s;
}

.scene--flying-letters .letter-4 {
  transform: translate(15%, 10%) rotate(-27deg) scale(1.4);
  animation-name: l4--2;
  animation-duration: 17.5s;
  animation-delay: 2.6s;
}

/**
* Letter #5
*/

.letter-5 {
  transform: translate(90%, -42%) rotate(30deg) scale(2);
  animation-name: l5--1;
  animation-duration: 6.8s;
  animation-delay: 3.9s;
}

.scene--flying-letters .letter-5 {
  transform: translate(60%, -32%) rotate(10deg) scale(1.4);
  animation-name: l5--2;
  animation-duration: 15.25s;
  animation-delay: 8.8s;
}

/**
* Letter #6
*/

.letter-6 {
  transform: translate(-75%, -65%) rotate(40deg) scale(2);
  animation-name: l6--1;
  animation-duration: 5.55s;
  animation-delay: 1.75s;
}

.scene--flying-letters .letter-6 {
  transform: translate(-45%, -75%) rotate(20deg) scale(1.4);
  animation-name: l6--2;
  animation-duration: 14.22s;
  animation-delay: 0.75s;
}

/**
* Letter #7
*/

.letter-7 {
  transform: translate(-65%, 8%) rotate(-30deg) scale(2);
  animation-name: l7--1;
  animation-duration: 5.7s;
  animation-delay: 2.1s;
}

.scene--flying-letters .letter-7 {
  transform: translate(-40%, -13%) rotate(-10deg) scale(1.4);
  animation-name: l7--2;
  animation-duration: 16.66s;
  animation-delay: 5.5s;
}

/**
* Letter #8
*/

.letter-8 {
  transform: translate(-38%, -22%) rotate(55deg) scale(2);
  animation-name: l8--1;
  animation-duration: 6.1s;
  animation-delay: 2.7s;
}

.scene--flying-letters .letter-8 {
  transform: translate(-18%, -52%) rotate(35deg) scale(1.4);
  animation-name: l8--2;
  animation-duration: 14.88s;
  animation-delay: 10s;
}

/**
* Letter #9
*/

.letter-9 {
  transform: translate(-35%, 10%) rotate(-23deg) scale(2);
  animation-name: l9--1;
  animation-duration: 6.6s;
  animation-delay: 3.4s;
}

.scene--flying-letters .letter-9 {
  transform: translate(-20%, -25%) rotate(-3deg) scale(1.4);
  animation-name: l9--2;
  animation-duration: 15.77s;
  animation-delay: 1s;
}

/**
* Letter #10
*/

.letter-10 {
  transform: translate(-13%, 55%) rotate(-30deg) scale(2);
  animation-name: l10--1;
  animation-duration: 6.6s;
  animation-delay: 3.7s;
}

.scene--flying-letters .letter-10 {
  transform: translate(-13%, 15%) rotate(-10deg) scale(1.4);
  animation-name: l10--2;
  animation-duration: 17.24s;
  animation-delay: 6.77s;
}

/**
* Letter #11
*/

.letter-11 {
  transform: translate(15%, 0%) rotate(-58deg) scale(2);
  animation-name: l11--1;
  animation-duration: 5.4s;
  animation-delay: 1.4s;
}

.scene--flying-letters .letter-11 {
  transform: translate(0%, -35%) rotate(-38deg) scale(1.4);
  animation-name: l11--2;
  animation-duration: 14.95s;
  animation-delay: 2.99s;
}

/**
* Letter #12
*/

.letter-12 {
  transform: translate(45%, 73%) rotate(-28deg) scale(2);
  animation-name: l12--1;
  animation-duration: 5.9s;
  animation-delay: 2.4s;
}

.scene--flying-letters .letter-12 {
  transform: translate(25%, 43%) rotate(-8deg) scale(1.4);
  animation-name: l12--2;
  animation-duration: 17.74s;
  animation-delay: 4.5s;
}

/**
* Letter #13
*/

.letter-13 {
  transform: translate(58%, 7%) rotate(55deg) scale(2);
  animation-name: l13--1;
  animation-duration: 6.3s;
  animation-delay: 2.9s;
}

.scene--flying-letters .letter-13 {
  transform: translate(33%, -18%) rotate(35deg) scale(1.4);
  animation-name: l13--2;
  animation-duration: 13.77s;
  animation-delay: 7.77s;
}

/**
* Letter #14
*/

.letter-14 {
  transform: translate(75%, -15%) rotate(-23deg) scale(2);
  animation-name: l14--1;
  animation-duration: 6.2s;
  animation-delay: 2.8s;
}

.scene--flying-letters .letter-14 {
  transform: translate(45%, -35%) rotate(-3deg) scale(1.4);
  animation-name: l14--2;
  animation-duration: 16.21s;
  animation-delay: 2.8s;
}

/**
* Letter #15
*/

.letter-15 {
  transform: translate(95%, -85%) rotate(-60deg) scale(2);
  animation-name: l15--1;
  animation-duration: 6.25s;
  animation-delay: 3s;
}
.scene--flying-letters .letter-15 {
  transform: translate(60%, -95%) rotate(-40deg) scale(1.4);
  animation-name: l15--2;
  animation-duration: 15s;
  animation-delay: 9s;
}



/* Scene photo
=================================================================================== */

/**
* General
*/

.scene-photo {
  position: absolute;
  left: 50%;
  opacity: 0;
  filter: blur(8px);
  transform: translateX(-50%);
  transition: opacity 2s ease, filter 2s ease;
}

/**
* On 'scene' hover
*/

.scene:hover .scene-photo {
  opacity: 1;
  filter: blur(0px);
}

/**
* Image
*/

.scene-photo img {
  display: block;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
</style>