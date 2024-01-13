<template>
  <div
    :class="[
      'work-card',
      `work-card--${props.type}`,
      `work-card--${props.direction}`,
      `work-card--${data.slug}`
    ]"
  >
    
    <!-- Main -->
    <div class="work-card__main box">
      <h3>{{ data.name }}</h3>
      <p>2022</p>
    </div>

    <!-- List -->
    <div class="work-card__list box" :class="listCssClasses">
      <ul class="col-list fz-s">
        <li class="col-list__item">Animation Effects</li>
        <li class="col-list__item">PHP Template Creation</li>
        <li class="col-list__item">JavaScript Development</li>
        <li class="col-list__item">API Integration</li>
        <li class="col-list__item">SEO Optimization</li>
        <li class="col-list__item">Performance Optimization</li>
      </ul>
    </div>

    <!-- Footer -->
    <div class="work-card__footer box gb--h gb--tr" :class="footerCssClasses">
      <a class="button" target="_blank" :href="data.link">Visit Site</a>
    </div>

    <!-- Pattern -->
    <div class="work-card__pattern" role="presentation" :class="patternCssClasses">
      <div class="pattern pattern--3"></div>
    </div>

  </div>
</template>

<script setup>
/**
 * @todo Паттерн скрывать условием для мобильных?
 */

import { computed } from 'vue'

const props = defineProps( {
  data: {
    type: Object,
    default: {
      _id: '1',
      name: 'Project Name',
      slug: 'project-name',
      link: 'https://example.com/'
    }
  },
  type: {
    type: String,
    default: 'default',
    validator: value => [ 'default', 'big' ].includes( value ),
  },
  direction: {
    type: String,
    default: 'right',
    validator: value => [ 'right', 'left' ].includes( value ),
  }
} )

/**
* Utilitys
*/
  
const viewport = useViewport()

/**
* Compute dynamic CSS classes for the "Growing Border" effect based on the current viewport.
*/

const listCssClasses = computed( () => {

  if ( props.type === 'default' ) {
    return {
      'gb--h gb--tl': true,
    }
  }

  if ( props.type === 'big' ) {
    return {
      'gb--h gb--tl': viewport.isLessThan( 'tablet' ),
      'gb--v gb--rt': viewport.isGreaterOrEquals( 'tablet' ) && props.direction === 'right',
      'gb--v gb--lt': viewport.isGreaterOrEquals( 'tablet' ) && props.direction === 'left',
    }
  }

} )
const footerCssClasses = computed( () => {

  if ( props.type === 'big' ) {
    return {
      'gb--v gb--lt': viewport.isGreaterOrEquals( 'tablet' ) && props.direction === 'right',
      'gb--v gb--rt': viewport.isGreaterOrEquals( 'tablet' ) && props.direction === 'left',
    }
  }

} )
const patternCssClasses = computed( () => {

  if ( props.type === 'big' ) {
    return {
      'gb--h gb--tl': viewport.isGreaterOrEquals( 'tablet' ),
    }
  }

} )
</script>

<style>
/**
* Keyframes
*/

@keyframes bgImageFilterDark {
  0% {
    filter: grayscale(50%) sepia(10%) blur(5px) saturate(140%) contrast(100%) invert(25%) brightness(60%);
    -webkit-filter: grayscale(50%) sepia(10%) blur(5px) saturate(140%) contrast(100%) invert(25%) brightness(60%);
    -moz-filter: grayscale(50%) sepia(10%) blur(5px) saturate(140%) contrast(100%) invert(25%) brightness(60%);
  }
  50% {
    filter: grayscale(70%) sepia(30%) blur(6px) saturate(120%) contrast(90%) invert(15%) brightness(80%);
    -webkit-filter: grayscale(80%) sepia(30%) blur(6px) saturate(120%) contrast(90%) invert(15%) brightness(80%);
    -moz-filter: grayscale(80%) sepia(30%) blur(6px) saturate(120%) contrast(90%) invert(15%) brightness(80%);
  }
  100% {
    filter: grayscale(30%) sepia(5%) blur(8px) saturate(180%) contrast(110%) invert(25%) brightness(70%);
    -webkit-filter: grayscale(30%) sepia(5%) blur(8px) saturate(180%) contrast(110%) invert(25%) brightness(70%);
    -moz-filter: grayscale(30%) sepia(5%) blur(8px) saturate(180%) contrast(110%) invert(25%) brightness(70%);
  }
}

@keyframes bgImageFilterLight {
  0% {
    filter: grayscale(50%) sepia(10%) blur(5px) saturate(140%) contrast(100%) invert(25%) brightness(130%);
    -webkit-filter: grayscale(50%) sepia(10%) blur(5px) saturate(140%) contrast(100%) invert(25%) brightness(130%);
    -moz-filter: grayscale(50%) sepia(10%) blur(5px) saturate(140%) contrast(100%) invert(25%) brightness(130%);
  }
  50% {
    filter: grayscale(70%) sepia(30%) blur(6px) saturate(120%) contrast(90%) invert(15%) brightness(160%);
    -webkit-filter: grayscale(80%) sepia(30%) blur(6px) saturate(120%) contrast(90%) invert(15%) brightness(160%);
    -moz-filter: grayscale(80%) sepia(30%) blur(6px) saturate(120%) contrast(90%) invert(15%) brightness(160%);
  }
  100% {
    filter: grayscale(30%) sepia(5%) blur(8px) saturate(180%) contrast(110%) invert(25%) brightness(190%);
    -webkit-filter: grayscale(30%) sepia(5%) blur(8px) saturate(180%) contrast(110%) invert(25%) brightness(190%);
    -moz-filter: grayscale(30%) sepia(5%) blur(8px) saturate(180%) contrast(110%) invert(25%) brightness(190%);
  }
}

/**
* General
*/

.work-card {
  display: grid;
  grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%;
  grid-template-areas:
  'main main'
  'list footer';
  position: relative;
  overflow: hidden;
}

.work-card::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0;
  transition: opacity .8s ease-in-out;
  transform: translate3d(0,0,0);
  will-change: opacity, filter;
  animation-name: bgImageFilterLight;
  animation-duration: 14s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.work-card:hover::before {
  opacity: 1;
}

@media (min-width: 825px) {

  .work-card--big {
    grid-template-areas:
    'list main'
    'pattern footer';
  }

}

/**
* General: Theme modes
*/

.dark-mode .work-card::before {
  animation-name: bgImageFilterDark;
}

/**
* Main
*/

.work-card__main {
  position: relative;
  grid-area: main;
  grid-row: 1 / 2;
  grid-column: 1 / 21;
}

.work-card__main.box {
  padding-top: 60px;
  padding-bottom: 60px;
}

@media (min-width: 825px) {

  .work-card--big .work-card__main {
    grid-column: 8 / 21;
  }

  .work-card--big.work-card--left .work-card__main {
    grid-column: 1 / 14;
  }

  .work-card--big .work-card__main.box {
    padding-top: 72px;
    padding-bottom: 72px;
  }

}

@media (min-width: 1250px) {

  .work-card__main.box {
    padding-top: 84px;
    padding-bottom: 84px;
  }

  .work-card--big .work-card__main.box {
    padding-top: 108px;
    padding-bottom: 108px;
  }

}

@media (min-width: 1600px) {

  .work-card--big .work-card__main {
    grid-column: 6 / 21;
  }

  .work-card--big.work-card--left .work-card__main {
    grid-column: 1 / 16;
  }

  .work-card__main.box {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .work-card--big .work-card__main.box {
    padding-top: 126px;
    padding-bottom: 126px;
  }

}

/**
* List
*/

.work-card__list {
  grid-area: list;
  grid-row: 2 / 3;
  grid-column: 1 / 11;
  display: flex;
  align-items: flex-end;
}

@media (min-width: 600px) {

  .work-card__list {
    grid-column: 1 / 15;
  }

}

@media (min-width: 825px) {

  .work-card__list {
    grid-column: 1 / 11;
  }

  .work-card--big .work-card__list {
    grid-row: 1 / 2;
    grid-column: 1 / 8;
  }

  .work-card--big.work-card--left .work-card__list {
    grid-column: 14 / 21;
  }

}

@media (min-width: 1250px) {

  .work-card__list {
    grid-column: 1 / 12;
  }

}

@media (min-width: 1600px) {

  .work-card__list {
    grid-column: 1 / 15;
  }

  .work-card--big .work-card__list {
    grid-column: 1 / 6;
  }

  .work-card--big.work-card--left .work-card__list {
    grid-column: 16 / 21;
  }

}

/**
* Footer
*/

.work-card__footer {
  grid-area: footer;
  grid-row: 2 / 3;
  grid-column: 11 / 21;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

@media (min-width: 600px) {

  .work-card__footer {
    grid-column: 15 / 21;
  }

}

@media (min-width: 825px) {

  .work-card__footer {
    grid-column: 11 / 21;
  }

  .work-card--big .work-card__footer {
    grid-column: 16 / 21;
  }

  .work-card--big.work-card--left .work-card__footer {
    grid-column: 1 / 6;
    justify-content: flex-start;
  }

}

@media (min-width: 1250px) {

  .work-card__footer {
    grid-column: 12 / 21;
  }

}

@media (min-width: 1600px) {

  .work-card__footer {
    grid-column: 15 / 21;
  }

}

/**
* Pattern
*/

.work-card__pattern {
  display: none;
  grid-area: pattern;
}

@media (min-width: 825px) {

  .work-card--big .work-card__pattern {
    display: block;
    position: relative;
    grid-row: 2 / 3;
    grid-column: 1 / 16;
  }

  .work-card--big.work-card--left .work-card__pattern {
    grid-column: 6 / 21;
  }

}

/**
* Hide 'gb' on card hover
*/

.work-card:hover .work-card__footer::before,
.work-card:hover .work-card__list::before {
  animation-name: widthOut;
  animation-delay: 0s;
}

@media (min-width: 825px) {

  .work-card--big:hover .work-card__list::after {
    animation-name: heightOut;
    animation-delay: 0s;
  }

}

/**
* Bg images
*/

.work-card--northern-virginia-foam::before {
  background-image: url(/images/works/northern-virginia-foam-400x350.webp);
}

.work-card--best-fence::before {
  background-image: url(/images/works/best-fence-400x350.webp);
}

.work-card--ircs::before {
  background-image: url(/images/works/ircs-400x350.webp);
}

.work-card--municipal-services::before {
  background-image: url(/images/works/municipal-services-400x350.webp);
}

.work-card--arlington-foam::before {
  background-image: url(/images/works/arlington-foam-400x350.webp);
}

.work-card--in-depth-detailers::before {
  background-image: url(/images/works/in-depth-detailers-400x350.webp);
}

.work-card--saint-maria-roofing::before {
  background-image: url(/images/works/saint-maria-roofing-400x350.webp);
}

.work-card--the-tank-foam::before {
  background-image: url(/images/works/the-tank-foam-400x350.webp);
}

@media (min-width: 600px) {

  .work-card--northern-virginia-foam::before {
    background-image: url(/images/works/northern-virginia-foam-660x300.webp);
  }

  .work-card--best-fence::before {
    background-image: url(/images/works/best-fence-660x300.webp);
  }

  .work-card--ircs::before {
    background-image: url(/images/works/ircs-660x300.webp);
  }

  .work-card--municipal-services::before {
    background-image: url(/images/works/municipal-services-660x300.webp);
  }

  .work-card--arlington-foam::before {
    background-image: url(/images/works/arlington-foam-660x300.webp);
  }

  .work-card--in-depth-detailers::before {
    background-image: url(/images/works/in-depth-detailers-660x300.webp);
  }

  .work-card--saint-maria-roofing::before {
    background-image: url(/images/works/saint-maria-roofing-660x300.webp);
  }

  .work-card--the-tank-foam::before {
    background-image: url(/images/works/the-tank-foam-660x300.webp);
  }

}

@media (min-width: 825px) {

  .work-card--default.work-card--northern-virginia-foam::before {
    background-image: url(/images/works/northern-virginia-foam-550x360-default.webp);
  }

  .work-card--big.work-card--northern-virginia-foam::before {
    background-image: url(/images/works/northern-virginia-foam-1080x300-big.webp);
  }

  .work-card--default.work-card--best-fence::before {
    background-image: url(/images/works/best-fence-550x360-default.webp);
  }

  .work-card--big.work-card--best-fence::before {
    background-image: url(/images/works/best-fence-1080x300-big.webp);
  }

  .work-card--default.work-card--ircs::before {
    background-image: url(/images/works/ircs-550x360-default.webp);
  }

  .work-card--big.work-card--ircs::before {
    background-image: url(/images/works/ircs-1080x300-big.webp);
  }

  .work-card--default.work-card--municipal-services::before {
    background-image: url(/images/works/municipal-services-550x360-default.webp);
  }

  .work-card--big.work-card--municipal-services::before {
    background-image: url(/images/works/municipal-services-1080x300-big.webp);
  }

  .work-card--default.work-card--arlington-foam::before {
    background-image: url(/images/works/arlington-foam-550x360-default.webp);
  }

  .work-card--big.work-card--arlington-foam::before {
    background-image: url(/images/works/arlington-foam-1080x300-big.webp);
  }

  .work-card--default.work-card--in-depth-detailers::before {
    background-image: url(/images/works/in-depth-detailers-550x360-default.webp);
  }

  .work-card--big.work-card--in-depth-detailers::before {
    background-image: url(/images/works/in-depth-detailers-1080x300-big.webp);
  }

  .work-card--default.work-card--saint-maria-roofing::before {
    background-image: url(/images/works/saint-maria-roofing-550x360-default.webp);
  }

  .work-card--big.work-card--saint-maria-roofing::before {
    background-image: url(/images/works/saint-maria-roofing-1080x300-big.webp);
  }

  .work-card--default.work-card--the-tank-foam::before {
    background-image: url(/images/works/the-tank-foam-550x360-default.webp);
  }

  .work-card--big.work-card--the-tank-foam::before {
    background-image: url(/images/works/the-tank-foam-1080x300-big.webp);
  }

}

@media (min-width: 1250px) {

  .work-card--default.work-card--northern-virginia-foam::before {
    background-image: url(/images/works/northern-virginia-foam-550x460-default.webp);
  }

  .work-card--big.work-card--northern-virginia-foam::before {
    background-image: url(/images/works/northern-virginia-foam-1360x400-big.webp);
  }

  .work-card--default.work-card--best-fence::before {
    background-image: url(/images/works/best-fence-550x460-default.webp);
  }

  .work-card--big.work-card--best-fence::before {
    background-image: url(/images/works/best-fence-1360x400-big.webp);
  }

  .work-card--default.work-card--ircs::before {
    background-image: url(/images/works/ircs-550x460-default.webp);
  }

  .work-card--big.work-card--ircs::before {
    background-image: url(/images/works/ircs-1360x400-big.webp);
  }

  .work-card--default.work-card--municipal-services::before {
    background-image: url(/images/works/municipal-services-550x460-default.webp);
  }

  .work-card--big.work-card--municipal-services::before {
    background-image: url(/images/works/municipal-services-1360x400-big.webp);
  }

  .work-card--default.work-card--arlington-foam::before {
    background-image: url(/images/works/arlington-foam-550x460-default.webp);
  }

  .work-card--big.work-card--arlington-foam::before {
    background-image: url(/images/works/arlington-foam-1360x400-big.webp);
  }

  .work-card--default.work-card--in-depth-detailers::before {
    background-image: url(/images/works/in-depth-detailers-550x460-default.webp);
  }

  .work-card--big.work-card--in-depth-detailers::before {
    background-image: url(/images/works/in-depth-detailers-1360x400-big.webp);
  }

  .work-card--default.work-card--saint-maria-roofing::before {
    background-image: url(/images/works/saint-maria-roofing-550x460-default.webp);
  }

  .work-card--big.work-card--saint-maria-roofing::before {
    background-image: url(/images/works/saint-maria-roofing-1360x400-big.webp);
  }

  .work-card--default.work-card--the-tank-foam::before {
    background-image: url(/images/works/the-tank-foam-550x460-default.webp);
  }

  .work-card--big.work-card--the-tank-foam::before {
    background-image: url(/images/works/the-tank-foam-1360x400-big.webp);
  }

}

@media (min-width: 1600px) {

  .work-card--default.work-card--northern-virginia-foam::before {
    background-image: url(/images/works/northern-virginia-foam-700x400-default.webp);
  }

  .work-card--big.work-card--northern-virginia-foam::before {
    background-image: url(/images/works/northern-virginia-foam-2000x470-big.webp);
  }

  .work-card--default.work-card--best-fence::before {
    background-image: url(/images/works/best-fence-700x400-default.webp);
  }

  .work-card--big.work-card--best-fence::before {
    background-image: url(/images/works/best-fence-2000x470-big.webp);
  }

  .work-card--default.work-card--ircs::before {
    background-image: url(/images/works/ircs-700x400-default.webp);
  }

  .work-card--big.work-card--ircs::before {
    background-image: url(/images/works/ircs-2000x470-big.webp);
  }

  .work-card--default.work-card--municipal-services::before {
    background-image: url(/images/works/municipal-services-700x400-default.webp);
  }

  .work-card--big.work-card--municipal-services::before {
    background-image: url(/images/works/municipal-services-2000x470-big.webp);
  }

  .work-card--default.work-card--arlington-foam::before {
    background-image: url(/images/works/arlington-foam-700x400-default.webp);
  }

  .work-card--big.work-card--arlington-foam::before {
    background-image: url(/images/works/arlington-foam-2000x470-big.webp);
  }

  .work-card--default.work-card--in-depth-detailers::before {
    background-image: url(/images/works/in-depth-detailers-700x400-default.webp);
  }

  .work-card--big.work-card--in-depth-detailers::before {
    background-image: url(/images/works/in-depth-detailers-2000x470-big.webp);
  }

  .work-card--default.work-card--saint-maria-roofing::before {
    background-image: url(/images/works/saint-maria-roofing-700x400-default.webp);
  }

  .work-card--big.work-card--saint-maria-roofing::before {
    background-image: url(/images/works/saint-maria-roofing-2000x470-big.webp);
  }

  .work-card--default.work-card--the-tank-foam::before {
    background-image: url(/images/works/the-tank-foam-700x400-default.webp);
  }

  .work-card--big.work-card--the-tank-foam::before {
    background-image: url(/images/works/the-tank-foam-2000x470-big.webp);
  }

}
</style>
