<template>
  <div class="result">
    <div
      v-for="result in 6"
      :key="result"
      class="result--item"
      :style="`grid-row-end: span ${generateSpan()};`"
    >
      <div class="result--item__info">
        <div class="loader--placeholder loader--placeholder__1"></div>
        <div class="loader--placeholder loader--placeholder__2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import generateSpan from '~/mixins/generateSpan'
export default {
  name: 'SkeletonLoader',
  mixins: [generateSpan],
}
</script>
