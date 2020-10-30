<template>
  <v-container :loading="loading">
    <h1>{{ slug }}</h1>
    {{ result }}
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData ({ params }) {
    const slug = await params.slug
    return { slug }
  },
  data () {
    return {
      result: []
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    searchResults () {
      return this.loading
        ? []
        : this.getData(this.opts.componentId)
    },
    loading () {
      return this.isLoading(this.opts.componentId)
    }
  },
  created () {
    this.getResults()
  },
  methods: {
    getResults () {
      this.result = this.$store.state.appData.searchResults
    }
  }
}
</script>

<style>

</style>
