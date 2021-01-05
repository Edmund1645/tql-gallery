<template>
  <div class="result">
    <div
      v-for="(image, index) in result"
      :key="index"
      class="result--item"
      :style="`grid-row-end: span ${image.span_length};`"
      @click="showImage(image)"
    >
      <img
        class="result--item__image"
        :src="image.urls.small"
        :alt="image.description"
      />
      <div class="result--item__overlay"></div>
      <div class="result--item__info">
        <p class="result--item__info__name">
          {{ image.user.name }}
        </p>
        <p class="result--item__info__location">
          {{ image.user.location }}
        </p>
      </div>
    </div>

    <transition name="fade-shrink-in">
      <Modal
        v-if="showModal"
        :active-image="activeImage"
        @close="showModal = false"
      ></Modal>
    </transition>
  </div>
</template>

<script>
import Modal from '~/components/Modal'
export default {
  name: 'ImageGrid',
  components: {
    Modal,
  },
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      activeImage: {},
    }
  },
  methods: {
    showImage(image) {
      this.activeImage = image
      this.showModal = true
    },
  },
}
</script>
