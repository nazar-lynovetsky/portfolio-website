<template>
  <div>
    <Heading>Settings</Heading>
    <div class="box t gb--h gb--bl">
      <p class="label mb-s">Theme mode:</p>
      <ThemeMode />
    </div>
  </div>
</template>

<script setup>
import Heading   from '~/components/layout/Heading/Heading.vue'
import ThemeMode from '~/components/settings/ThemeMode.vue'

useHead({
  title: 'Works',
  meta: [
    { name: 'description', content: 'Settings.' }
  ],
})
</script>
