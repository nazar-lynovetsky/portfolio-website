<template>
  <Nav />
  <NuxtPage />

  <!-- Page frame -->
  <div class="pf--h pf--t gb--h gb--bl"></div>
  <div class="pf--v pf--r gb--v gb--lt"></div>
  <div class="pf--h pf--b gb--h gb--tr"></div>
  <div class="pf--v pf--l gb--v gb--rb"></div>
</template>

<script setup>
import Nav               from '~/components/ui/Nav/Nav.vue'
import { useWorksStore } from '~/store/works'

/**
 * Load asunc 
 */

useWorksStore().fetchWorks()
</script>

<style>
/* 🎨 Page frame
=================================================================================== */

/**
* General
*/

.pf--h,
.pf--v {
  position: fixed;
  z-index: 10;
  background-color: var(--color--white-rock);
}

.pf--h {
  width: calc(100% - 24px);
  height: 14px;
}

.pf--v {
  width: 14px;
  height: calc(100% - 24px);
}

@media (min-width: 600px) {

  .pf--h {
    width: calc(100% - 44px);
    height: 24px;
  }

  .pf--v {
    width: 24px;
    height: calc(100% - 44px);
  }

}

@media (min-width: 1250px) {

  .pf--h {
    width: calc(100% - 72px);
    height: 38px;
  }

  .pf--v {
    width: 38px;
    height: calc(100% - 72px);
  }

}

/**
* Theme modes
*/

.dark-mode .pf--h,
.dark-mode .pf--v {
  background-color: var(--color--tuatara);
}

/**
* Sides
*/

.pf--t {
  top: 0;
  left: 12px;
}

.pf--r {
  top: 12px;
  right: 0;
}

.pf--b {
  bottom: 0;
  right: 12px;
}

.pf--l {
  bottom: 12px;
  left: 0;
}

@media (min-width: 600px) {

  .pf--t {
    left: 22px;
  }

  .pf--r {
    top: 22px;
  }

  .pf--b {
    right: 22px;
  }

  .pf--l {
    bottom: 22px;
  }

}

@media (min-width: 1250px) {

  .pf--t {
    left: 36px;
  }

  .pf--r {
    top: 36px;
  }

  .pf--b {
    right: 36px;
  }

  .pf--l {
    bottom: 36px;
  }

}
</style>
