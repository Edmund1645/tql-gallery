<template>
  <div class="result">
    <div
      v-for="(image, index) in result"
      :key="index"
      class="result--item"
      :style="`grid-row-end: span ${image.span_length};`"
    >
      <img
        class="result--item__image"
        :src="image.urls.small"
        style="width: 100%"
        :alt="image.description"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
