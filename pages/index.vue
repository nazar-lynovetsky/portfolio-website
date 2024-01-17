<template>
  <div>
    <Intro />
    <section>
      <Heading :type="'h2'">Works</Heading>
      <LatestWorks />
    </section>
  </div>
</template>

<script setup>
import Intro       from '~/components/layout/Intro/Intro.vue'
import Heading     from '~/components/layout/Heading/Heading.vue'
import LatestWorks from '~/components/works/LatestWorks.vue'

useHead({
  title: 'Portfolio of Nazar Lynovetsky',
  meta: [
    { name: 'description', content: 'Nazar Lynovetsky - Full-stack Javascript Developer.' }
  ],
})
</script>
