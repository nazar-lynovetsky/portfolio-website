import { defineStore } from 'pinia'

export const useWorksStore = defineStore( 'worksStore', () => {

  /**
  * STATE
  */

  const works = ref( [] )

  /**
  * ACTIONS
  */

  /**
   * Fetch works
   * 
   * @public
   * @returns {void}
   */

  async function fetchWorks() { 
    const { data, status } = await useFetch( 'https://nlns.vercel.app/nl/works' )

    if ( status.value === 'error' ) {
      return
    }

    setWorks( data.value )
  }

  /**
   * SETTERS
   */

  /**
   * Sets the works array to state.
   * 
   * @private
   * @param {array} newWorks - works array
   * @returns {void}
   */

  function setWorks( newWorks ) {
    works.value = newWorks
  }

  /**
   * API
   */

  return {
    works,
    fetchWorks
  }

} )