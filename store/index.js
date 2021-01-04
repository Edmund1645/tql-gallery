export const state = () => ({
  loading: false,
  result: [],
})

export const mutations = {
  setLoadingState(state, payload) {
    state.loading = payload
  },
  storeResult(state, payload) {
    state.result = payload
  },
}

export const actions = {
  async searchPhotos({ commit }, payload) {
    try {
      commit('setLoadingState', true)
      const { data: response } = await this.$axios.get(
        `/search/photos?query=${payload}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
          },
        }
      )

      // generate a random length for grid item
      const generateSpan = () => {
        let generated = Math.floor(Math.random() * 8)
        do {
          generated = Math.floor(Math.random() * 8)
        } while (generated < 4)
        return generated
      }

      const modifiedResults = response.results.map((image) => {
        image.span_length = generateSpan()
        return image
      })

      commit('storeResult', modifiedResults)
      commit('setLoadingState', false)
    } catch (err) {
      commit('setLoadingState', false)
    }
  },
}
