<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-sheet>Top Rated Movies</v-sheet>
      <v-container class="d-flex justify-content-center" style="overflow: auto; white-space: nowrap;">
        <div
          v-for="(item, index) in toppRatedMovies.results"
          :key="index"
        >
          <Card :item="item" :cid="componentId" ::loading="loading" style="display: inline-block;" />
        </div>
      </v-container>
      <v-pagination
        v-model="currentPage"
        total-visible="5"
        :length="toppRatedMovies.totalPages"
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
      topRatedUrl: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      currentPage: 1,
      nextPage: 0,
      totalPages: 1,
      results: []
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    toppRatedMovies () {
      return this.loading
        ? []
        : this.getData(this.opts.componentId)
    },
    loading () {
      return this.isLoading(this.opts.componentId)
    }
  },
  created () {
    this.loadTopRated()
  },
  mounted () {
  },
  methods: {
    loadTopRated () {
      const URL = `${this.topRatedUrl}&page=${this.currentPage}`
      this.opts = cfg.renderObject(URL, 'toppRatedMovies')
      this.$store.dispatch(cfg.grd, this.opts)
    },
    updatePage () {
      if (this.currentPage === this.nextPage) {
        return null
      } else {
        this.nextPage = this.currentPage
        this.opts = cfg.renderObject(`${this.topRatedUrl}&page=${this.currentPage}`, 'toppRatedMovies')
        this.loadTopRated()
      }
    }
  }
}
</script>
