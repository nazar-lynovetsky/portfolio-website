<template>
  <div class="g-50x50-tablet-35x65-desktop-25x75 t gb--h gb--br">

    <!-- Main -->
    <div class="g__item box gb--v gb--rt">
      <component :class="className" :is="type">
        <slot></slot>
      </component>
    </div>

    <!-- Footer -->
    <div class="g__item p-r" role="presentation">
      <div class="pattern pattern--2"></div>
    </div>

  </div>
</template>

<script setup>
/**
 * @todo The 'class' attribute must not be empty
 */

const props = defineProps( {
  type: {
    type: String,
    default: 'h1',
    validator: value => [ 'h1', 'h2' ].includes( value ),
  },
  className: {
    type: String,
    default: '',
  }
} )
</script>
