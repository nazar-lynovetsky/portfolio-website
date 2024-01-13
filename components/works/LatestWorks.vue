<template>
  <div class="g-cards-preview t">

    <!-- Card #1 -->
    <article class="g__item gb--h gb--bl">
      <WorkCard :data="latestWorks[ 0 ]" type="big" />
    </article>

    <!-- Card #2 -->
    <article class="g__item" :class="card2CssClasses">
      <WorkCard :data="latestWorks[ 1 ]" />
    </article>

    <!-- Card #3 -->
    <article class="g__item" :class="card3CssClasses">
      <WorkCard :data="latestWorks[ 2 ]" />
    </article>

    <!-- Footer -->
    <footer class="g__item box p-r" :class="footerCssClasses">
      <NuxtLink
          class="button p-r zi-10"
          to="/works"
          aria-label="Go to Works page"
          title="Go to Works page"
        >See More Works</NuxtLink>
      <div class="pattern pattern--1"></div>
    </footer>

  </div>
</template>

<script setup>
import { computed }      from 'vue'
import { storeToRefs }   from 'pinia'
import { useWorksStore } from '~/store/works'
import WorkCard          from '~/components/works/WorkCard.vue'

/**
* Utilitys
*/

const viewport = useViewport()

/**
* Compute the last three works.
*/

const { works } = storeToRefs( useWorksStore() )
const latestWorks = computed( () => works.value.slice( -3 ) )

/**
* Compute dynamic CSS classes for the growing border effect based on the current viewport.
*/

const card2CssClasses = computed( () => ( {
  'gb--h gb--br': viewport.isLessThan( 'laptop' ),
} ) )
const card3CssClasses = computed( () => ( {
  'gb--h gb--bl': viewport.isLessThan( 'laptop' ),
  'gb--v gb--lb': viewport.isGreaterOrEquals( 'tablet' ),
} ) )
const footerCssClasses = computed( () => ( {
  'gb--v gb--lb': viewport.isGreaterOrEquals( 'laptop' ),
} ) )
</script>
