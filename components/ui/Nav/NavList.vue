<template>
  <ul class="nav-list">
    <li class="nav-list__item">

      
      <NuxtLink
        class="button"
        to="/"
        aria-label="Go to Home page"
        title="Go to Home page"
        tabindex="0"
        :aria-current="isCurrentPath( '/' ) ? 'page' : null"
      >Home</NuxtLink>


    </li>
    <li class="nav-list__item">


      <NuxtLink
        class="button"
        to="/works"
        aria-label="Go to Works page"
        title="Go to Works page"
        tabindex="0"
        :aria-current="isCurrentPath( '/works' ) ? 'page' : null"
      >Works</NuxtLink>


    </li>
    <li class="nav-list__item">


      <NuxtLink
        class="button"
        to="/settings"
        aria-label="Go to Settings page"
        title="Go to Settings page"
        tabindex="0"
        :aria-current="isCurrentPath( '/settings' ) ? 'page' : null"
      >
        <span v-if="viewport.isLessThan( 'laptop' )">Settings</span>
        <nuxt-icon v-else class="icon" name="settings" />
      </NuxtLink>


    </li>
    <li v-if="viewport.isGreaterOrEquals( 'laptop' )" class="nav-list__item">
      <ScrollToTopButton />
    </li>
  </ul>
</template>

<script setup>
import ScrollToTopButton from '~/components/ui/Nav/ScrollToTopButton.vue'
import { isCurrentPath } from '~/utils/route'

/**
* Utilitys
*/

const viewport = useViewport()
</script>

<style>
/* 🎨 Nav list
=================================================================================== */

/**
* General
*/

.nav-list {
  display: none;
}

@media (min-width: 1250px) {

  .nav-list {
    display: inline-flex;
  }

}

/**
* General: On header active
*/

@media (max-width: 1249px) {

  .header.active .nav-list {
    display: block;
  }

}

/**
* Item
*/

.nav-list__item {
  margin-bottom: 3px;
}

.nav-list__item:last-child {
  margin-bottom: 0;
}

@media (min-width: 1250px) {

  .nav-list__item {
    margin-bottom: 0;
    margin-right: 4px;
  }

  .nav-list__item:last-child {
    margin-right: 0;
    margin-left: 22px;
  }

  .nav-list__item:nth-last-child(2) {
    order: -1;
    margin-right: 22px;
  }

}

/**
* Internal '.button' element
*/

.nav-list .button {
  border: none;
}

@media (max-width: 1249px) {

  .nav-list .button {
    width: 100%;
  }

  .nav-list__item:last-child .button {
    font-style: italic;
  }
  
}
</style>
