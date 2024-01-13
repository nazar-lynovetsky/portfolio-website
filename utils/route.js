import { useRoute } from 'vue-router'

/**
  * Checks whether the passed string matches the current path.
  * 
  * @param {string} path - String to check.
  * @returns {boolean} true if the string matches the current path, false otherwise.
  */

export function isCurrentPath( path ) {
  return path === useRoute().path
}
