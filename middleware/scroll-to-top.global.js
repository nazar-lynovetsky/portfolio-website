export default defineNuxtRouteMiddleware( async ( to, from ) => {

  if ( process.client && typeof window !== 'undefined' ) {

    // setTimeout( () => {
    //   document.querySelector( '.content' ).scrollTo( {
    //     top: 0,
    //     left: 0,
    //   } )
    // }, 640 )

  }

} )
