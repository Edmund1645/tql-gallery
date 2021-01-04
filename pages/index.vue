<template>
  <div>
    <header class="header header--flex">
      <div class="container">
        <SearchBar />
      </div>
    </header>
    <SkeletonLoader v-if="loading" />
    <ImageGrid v-else :result="result" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBar from '~/components/SearchBar'
import SkeletonLoader from '~/components/SkeletonLoader'
import ImageGrid from '~/components/ImageGrid'
export default {
  name: 'HomePage',
  components: {
    SearchBar,
    SkeletonLoader,
    ImageGrid,
  },
  computed: {
    ...mapState(['loading', 'result']),
  },
  created() {
    this.$store.dispatch('searchPhotos', 'African')
  },
}
</script>

<style></style>
