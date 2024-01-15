<template>
  <div class="g-intro t gb--h gb--br">

    <!-- Header -->
    <hgroup class="g__item box" :class="headerCssClasses">
      <h1 class="label">Nazar Lynovetsky</h1>
      <p class="h5">Portfolio</p>
    </hgroup>

    <!-- Main -->
    <div class="g__item box d-f fd-c jc-fe" :class="mainCssClasses">
      <p>I'm Nazar Lynovetsky, a UX architect and JavaScript engineer with over 13 years of experience, hailing from Kyiv, Ukraine. I collaborate with both large corporations and small startups, assisting in the creation of impressive digital products.</p>
      <p class="mt-s">When I'm not at the computer, I enjoy cycling and listening to music.</p>
    </div>

    <!-- Footer -->
    <div class="g__item" role="presentation">
      <Scene />
    </div>
    
  </div>
</template>

<script setup>
import Scene        from '~/components/layout/Intro/Scene.vue'
import { computed } from 'vue'

/**
 * UTILITYS
 */

const viewport = useViewport()

/**
 * Compute dynamic CSS classes for the "Growing Border" effect based on the current viewport.
 */

const headerCssClasses = computed( () => ( {
  'gb--v gb--rt': viewport.isGreaterOrEquals( 'tablet' )
} ) )
const mainCssClasses = computed( () => ( {
  'gb--v gb--rb': viewport.isGreaterOrEquals( 'tablet' )
} ) )
</script>
