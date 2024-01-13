import { defineStore } from 'pinia'

export const useTagsStore = defineStore('tagsStore', () => {
  const tags = ref([
    {
      _id: '1',
      slug: 'web-design',
      name: 'Web Design',
    },
    {
      _id: '2',
      slug: 'animation-effects',
      name: 'Animation Effects',
    },
    {
      _id: '3',
      slug: 'javaScript-development',
      name: 'JavaScript Development',
    },
    {
      _id: '4',
      slug: 'seo-optimization',
      name: 'SEO Optimization',
    },
    {
      _id: '5',
      slug: 'ui-ux-development',
      name: 'UI/UX Development',
    },
    {
      _id: '6',
      slug: 'php-template-creation',
      name: 'PHP Template Creation',
    },
    {
      _id: '7',
      slug: 'api-integration',
      name: 'API Integration',
    },
    {
      _id: '8',
      slug: 'performance-optimization',
      name: 'Performance Optimization',
    },
  ])

  return { tags }
})