<template>
  <header
    :class="[ 'header', { 'active': isHeaderActive } ]"
    @keydown.escape="hideHeader"
  >
    <nav
      class="nav"
      aria-label="Website navigation"
    >
      <NavList />
    </nav>
    <button
      v-if="viewport.isLessThan( 'laptop' )"
      class="header-toggler"
      @click="toggleHeader"
      title="Toggle website navigation"
      aria-label="Toggle website navigation"
      aria-haspopup="menu"
      :aria-expanded="isHeaderActive"
      tabindex="0"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<script setup>
import NavList from '~/components/ui/Nav/NavList.vue'
import { ref } from 'vue'

/**
 * UTILITYS
 */

const viewport = useViewport()

/**
 * STATE
 */

const isHeaderActive = ref( false )

/**
 * METHODS
 */

function toggleHeader() {
  isHeaderActive.value = !isHeaderActive.value
}

function hideHeader() {
  isHeaderActive.value = false
}
</script>

<style>
/* 🎨 Header
=================================================================================== */

/**
* Keyframes
*/

@keyframes showHeader {
  0% {
    bottom: -50px;
  }
  100% {
    bottom: 24px;
  }
}

@media (min-width: 600px) {

  @keyframes showHeader {
    0% {
      bottom: -50px;
    }
    100% {
      bottom: 44px;
    }
  }

}

@media (min-width: 1250px) {

  @keyframes showHeader {
    0% {
      bottom: -50px;
    }
    100% {
      bottom: 12px;
    }
  }

}

/**
* General
*/

.header {
  position: fixed;
  z-index: 50;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  padding: 4px;
  overflow: hidden;
  background-color: var(--color--tuatara);
  border-radius: 26px;
  animation-name: showHeader;
  animation-duration: .35s;
  animation-delay: 1.7s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.45,.5,.5,1.6);
  transition: width 0.2s ease, height 0.2s ease, border-radius 0.2s ease;
  will-change: width, height, bottom, border-radius;
}

@media (min-width: 600px) {

  .header {
    bottom: -50px;
  }

}

@media (min-width: 1250px) {

  .header {
    bottom: -50px;
    width: auto;
    height: auto;
  }

}

/**
* General: Theme modes
*/

.dark-mode .header {
  background-color: var(--color--white-rock);
}

/**
* General: Active
*/

@media (max-width: 1249px) {

  .header.active {
    width: 176px;
    height: 200px;
    border-radius: 23px;
    transition: width 0.35s cubic-bezier(0.45,.5,.5,1.6), height 0.35s cubic-bezier(0.45,.5,.5,1.6), border-radius 0.35s cubic-bezier(0.45,.5,.5,1.6);
  }

}

@media (max-width: 824px) {

  .header.active {
    width: 168px;
    height: 190px;
    border-radius: 22px;
  }

}



/* 🎨 Header toggler
=================================================================================== */

/**
* General
*/

.header-toggler {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 42px;
  height: 42px;
  padding: 0;
  overflow: hidden;
  border: none;
  border: 2px solid var(--color--white-rock);
  border-radius: 24px;
  background-color: var(--color--tuatara);
  cursor: pointer;
  transition: background-color .2s ease-in-out;
  will-change: background-color;
}

.dark-mode .header-toggler {
  background-color: var(--color--white-rock);
  border-color: var(--color--tuatara);
}


/**
* General: On hover (We set styles for the hover event only for those devices that support this event.)
*/

@media (pointer: fine) {

  .header-toggler:hover {
    background-color: var(--color--white-rock);
  }

  .dark-mode .header-toggler:hover {
    background-color: var(--color--tuatara);
  }

}

/**
* General: On active/focus
*/

.header-toggler:active,
.header-toggler:focus-visible {
  background-color: var(--color--salmon-dark);
}

.dark-mode .header-toggler:active,
.dark-mode .header-toggler:focus-visible {
  background-color: var(--color--salmon);
}

/**
* Internal elements
*/

.header-toggler span {
  display: block;
  position: absolute;
  left: 11px;
  width: 16px;
  height: 2px;
  background-color: var(--color--white-rock);
  opacity: 1;
  transform: rotate(0deg);
  transition: top .2s ease-in-out, left .2s ease-in-out, transform .2s ease-in-out, opacity .2s ease-in-out, background-color .2s ease-in-out;
  will-change: top, left, transform, opacity, background-color;
}

.dark-mode .header-toggler span {
  background-color: var(--color--tuatara);
}

.header-toggler span:nth-child(1) {
  top: 13px;
}

.header-toggler span:nth-child(2) {
  top: 18px;
}

.header-toggler span:nth-child(3) {
  top: 23px;
}

/**
* Internal elements: On hover
*/

@media (pointer: fine) {

  .header-toggler:hover span {
    background-color: var(--color--tuatara);
  }

  .dark-mode .header-toggler:hover span {
    background-color: var(--color--white-rock);
  }

}

/**
* Internal elements: On active/focus
*/

.header-toggler:active span,
.header-toggler:focus-visible span {
  background-color: var(--color--tuatara);
}

.dark-mode .header-toggler:active span,
.dark-mode .header-toggler:focus-visible span {
  background-color: var(--color--white-rock);
}

/**
* Internal elements: On header active
*/

.header.active .header-toggler span:nth-child(1) {
  top: 18px;
  transform: rotate(135deg);
}

.header.active .header-toggler span:nth-child(2) {
  opacity: 0;
  left: -50px;
}

.header.active .header-toggler span:nth-child(3) {
  top: 18px;
  transform: rotate(-135deg);
}
</style>
