<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-row class="d-flex justify-start" width="100%">
        <v-sheet>Up Coming Movies</v-sheet>
      </v-row>
      <v-container class="d-flex justify-content-center" style="overflow: auto; white-space: nowrap;">
        <div
          v-for="item in upComingMovies.results"
          :key="item.id"
        >
          <Card :item="item" :type="mediaType" :cid="componentId" :loading="loading" style="display: inline-block;" />
        </div>
      </v-container>
      <v-pagination
        v-model="currentPage"
        :total-visible="7"
        :length="upComingMovies.totalPages"
        @input="updatePage"
      />
    </v-row>
    <v-overlay v-model="loading">
      <v-progress-circular
        :size="70"
        width="7"
        color="purple"
        indeterminate
      />
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cfg from '../../config/index'
export default {
  data () {
    return {
      mediaType: 'movie',
      componentId: 'upComingMovies',
      upComingUrl: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_SECRET}&language=en-US&region=us`,
      currentPage: 1,
      nextPage: 0,
      totalPages: 1,
      results: []
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    upComingMovies () {
      return this.loading
        ? []
        : this.getData(this.opts.componentId)
    },
    loading () {
      return this.isLoading(this.opts.componentId)
    }
  },
  created () {
    this.loadUpcoming()
  },
  mounted () {
  },
  methods: {
    loadUpcoming () {
      const URL = `${this.upComingUrl}&page=${this.currentPage}`
      this.opts = cfg.renderObject(URL, this.componentId)
      this.$store.dispatch(cfg.grd, this.opts)
    },
    updatePage () {
      if (this.currentPage === this.nextPage) {
        return null
      } else {
        this.nextPage = this.currentPage
        this.opts = cfg.renderObject(`${this.upComing}&page=${this.currentPage}`, this.componentId)
        this.loadUpcoming()
      }
    }
  }
}
</script>
