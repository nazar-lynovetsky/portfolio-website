/**
  * TODO: Написать описание
  * 
  */

export default defineNuxtRouteMiddleware( async ( to, from ) => {

  if ( process.client ) {

    const links = document.querySelectorAll( 'a' )
    
    links.forEach( ( link ) => {
      link.style.pointerEvents = 'none'
    } )

    setTimeout( () => {
      links.forEach( ( link ) => {
        link.style.pointerEvents = 'auto'
      } )
    }, 700 )

  }

} )
