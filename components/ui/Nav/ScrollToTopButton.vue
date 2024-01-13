<template>
  <button class="button" @click="scrollToTop">
    <nuxt-icon class="icon" name="arrow-top" />
  </button>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>
