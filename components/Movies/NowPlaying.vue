<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-sheet>Now Playing Movies</v-sheet>
      <v-container class="d-flex justify-content-center" style="overflow: auto; white-space: nowrap;">
        <div
          v-for="(item, index) in nowPlayingMovies.results"
          :key="index"
        >
          <Card :item="item" :type="mediaType" :cid="componentId" :loading="loading" style="display: inline-block;" />
        </div>
      </v-container>
      <v-pagination
        v-model="currentPage"
        total-visible="5"
        :length="nowPlayingMovies.totalPages"
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
      componentId: 'nowPlayingMovies',
      nowPlayingUrl: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      currentPage: 1,
      nextPage: 0,
      totalPages: 1,
      results: []
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    nowPlayingMovies () {
      return this.loading
        ? []
        : this.getData(this.opts.componentId)
    },
    loading () {
      return this.isLoading(this.opts.componentId)
    }
  },
  created () {
    this.loadNowPlaying()
  },
  mounted () {
  },
  methods: {
    loadNowPlaying () {
      const URL = `${this.nowPlayingUrl}&page=${this.currentPage}`
      this.opts = cfg.renderObject(URL, this.componentId)
      this.$store.dispatch(cfg.grd, this.opts)
    },
    updatePage () {
      if (this.currentPage === this.nextPage) {
        return null
      } else {
        this.nextPage = this.currentPage
        this.opts = cfg.renderObject(`${this.nowPlayingUrl}&page=${this.currentPage}`, this.componentId)
        this.loadNowPlaying()
      }
    }
  }
}
</script>
