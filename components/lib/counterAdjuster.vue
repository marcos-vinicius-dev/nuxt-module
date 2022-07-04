<template lang="pug">
div
    <!-- Basic html to render the current count and provide adjustment buttons -->
    h1 Count is: {{ count }}
    v-btn(
        outlined
        depressed
        large
        rounded
        color="primary"
        class="mt-6 font-weight-bold"
        @click="adjust(-1)"
    )
        | Menos

    v-btn(
        depressed
        large
        rounded
        color="green"
        class="mt-6 font-weight-bold red--text"
        @click="adjust(+1)"
    ) 
        | Mais

</template>

<script>
// components/lib/counterAdjuster.vue
export default {
  computed: {
    // helper to return the current value of the counter using our injected plugin function
    count() {
      return this.$store.state.billingModule.count
    }
  },

  methods: {
    // method to adjust the counter using our injected plugin function
    adjust(adjustment) {
      this.$store.commit('billingModule/adjust', adjustment)
    }
  }
}
</script>