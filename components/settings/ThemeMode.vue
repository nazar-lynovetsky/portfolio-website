<template>
  <ul class="inline-list">
    <li class="inline-list__item" v-for="mode in modes" :key="mode.name">
      <button
        @click="$colorMode.preference = mode.name"
        :class="['button', 'button--i', 'button--s', {'button--a': $colorMode.preference === mode.name}]"
      >
        <nuxt-icon class="icon icon--small" :name="mode.icon" />
        <span>{{ mode.label }}</span>
      </button>
    </li>
  </ul>
</template>

<script setup>
const modes = [
  {
    name: 'light',
    label: 'Light Mode',
    icon: 'light-mode'
  },
  {
    name: 'dark',
    label: 'Dark Mode',
    icon: 'dark-mode'
  },
  {
    name: 'system',
    label: 'Use System Settings',
    icon: 'system-settings'
  },
]
</script>
