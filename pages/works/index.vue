<template>
  <div>
    <Heading>Works</Heading>
    <Works />
  </div>
</template>

<script setup>
import Heading from '~/components/layout/Heading/Heading.vue'
import Works   from '~/components/works/Works.vue'

useHead({
  title: 'Works',
  meta: [
    { name: 'description', content: 'Works.' }
  ],
})
</script>
