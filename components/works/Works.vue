<template>
  <div class="works t">
    <article class="gb--h gb--bl">
      <WorkCard :data="works[ 0 ]" type="big" />
    </article>
    <article class="gb--h gb--bl">
      <WorkCard :data="works[ 1 ]" type="big" direction="left" />
    </article>
    <article class="gb--h gb--bl">
      <WorkCard :data="works[ 2 ]" type="big" />
    </article>
    <article class="gb--h gb--bl">
      <WorkCard :data="works[ 3 ]" type="big" direction="left" />
    </article>
    <article class="gb--h gb--bl">
      <WorkCard :data="works[ 4 ]" type="big" />
    </article>
    <article class="gb--h gb--bl">
      <WorkCard :data="works[ 5 ]" type="big" direction="left" />
    </article>
    <article class="gb--h gb--bl">
      <WorkCard :data="works[ 6 ]" type="big" />
    </article>
  </div>
</template>

<script setup>
import WorkCard          from '~/components/works/WorkCard.vue'
import { storeToRefs }   from 'pinia'
import { useWorksStore } from '~/store/works'

const { works } = storeToRefs( useWorksStore() )
</script>
