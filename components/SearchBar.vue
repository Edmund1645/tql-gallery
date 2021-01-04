<template>
  <div class="search-bar">
    <unicon
      width="20"
      height="20"
      class="search-bar--icon"
      name="search"
      fill="currentColor"
      style="vertical-align: inherit"
    ></unicon>

    <input
      v-model="term"
      class="search-bar--field"
      type="text"
      placeholder="Search for photo"
      @keyup.enter="search"
    />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      term: '',
    }
  },
  methods: {
    search() {
      if (this.term.length > 0) {
        this.$router.push(`/search?term=${this.term}`)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
