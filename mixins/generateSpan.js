export default {
  methods: {
    generateSpan() {
      let generated = Math.floor(Math.random() * 8)
      do {
        generated = Math.floor(Math.random() * 8)
      } while (generated < 4)
      return generated
    },
  },
}
