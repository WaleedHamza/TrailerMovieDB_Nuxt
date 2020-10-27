<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-sheet>Trending Movies</v-sheet>
      <v-container class="d-flex justify-content-center" style="overflow: auto; white-space: nowrap;">
        <div
          v-for="(item, index) in trendingMovies.results"
          :key="index"
        >
          <Card :item="item" :cid="componentId" :loading="loading" style="display: inline-block;" />
        </div>
      </v-container>
      <v-pagination
        v-model="currentPage"
        total-visible="5"
        :length="trendingMovies.totalPages"
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
      key: process.env.apiSecret,
      trendingUrl: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      currentPage: 1,
      nextPage: 0,
      totalPages: 1,
      results: []
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    trendingMovies () {
      return this.loading
        ? []
        : this.getData(this.opts.componentId)
    },
    loading () {
      return this.isLoading(this.opts.componentId)
    },
    player () {
      return this.$refs.plyr.player
    }
  },
  created () {
    this.loadtrending()
  },
  mounted () {
  },
  methods: {
    loadtrending () {
      const URL = `${this.trendingUrl}&page=${this.currentPage}`
      this.opts = cfg.renderObject(URL, 'trendingMovies')
      this.$store.dispatch(cfg.grd, this.opts)
    },
    updatePage () {
      if (this.currentPage === this.nextPage) {
        return null
      } else {
        this.nextPage = this.currentPage
        this.opts = cfg.renderObject(`${this.trending}&page=${this.currentPage}`, 'trendingMovies')
        this.loadtrending()
      }
    }
  }
}
</script>
