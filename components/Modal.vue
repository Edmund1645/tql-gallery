<template>
  <div class="modal--mask">
    <div class="modal--wrapper">
      <button class="modal--close-button" @click="$emit('close')">
        <unicon
          width="30"
          height="30"
          name="times"
          fill="currentColor"
        ></unicon>
      </button>
      <div class="modal--body">
        <div class="modal--body__image-container">
          <img
            :src="activeImage.urls.regular"
            :alt="activeImage.description"
            class="modal--body__image"
          />
        </div>
        <div class="modal--body__info">
          <p class="modal--body__info__name">{{ activeImage.user.name }}</p>
          <p class="modal--body__info__location">
            {{ activeImage.user.location }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewModal',
  props: {
    activeImage: {
      type: Object,
      required: true,
    },
  },
}
</script>
