<template>
  <v-container class="d-flex justify-center flex-wrap overflow-y-auto">
    <div v-for="item in searchResults.results" :key="item.id">
      <Card :item="item" :loading="loading" :cid="componentId" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      componentId: 'searchResults',
      result: [],
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2
      }
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    searchResults () {
      return this.loading
        ? []
        : this.getData(this.componentId)
    },
    loading () {
      return this.isLoading(this.componentId)
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>

</style>
