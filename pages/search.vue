<template>
  <div>
    <header class="header">
      <div class="container">
        <h2 class="header--text">
          Search results for
          <span class="header--text__quote">"{{ $route.query.term }}"</span>
        </h2>
      </div>
    </header>
    <SkeletonLoader v-if="loading" />
    <ImageGrid v-else :result="result" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SkeletonLoader from '~/components/SkeletonLoader'
import ImageGrid from '~/components/ImageGrid'
export default {
  name: 'ResultPage',
  components: {
    SkeletonLoader,
    ImageGrid,
  },
  computed: {
    ...mapState(['loading', 'result']),
  },
  created() {
    this.$store.dispatch('searchPhotos', this.$route.query.term)
  },
}
</script>
