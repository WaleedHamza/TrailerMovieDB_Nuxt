<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-start mx-5">
        <v-sheet class="px-2">
          Up Coming Movies
        </v-sheet>
      </v-row>
      <v-row class="d-flex justify-center" style="overflow-x: auto;">
        <div
          v-for="item in upComingMovies.results"
          :key="item.id"
          :class="isMoble ? 'mobileView':'d-flex justify-content-center'"
        >
          <Card :item="item" :type="mediaType" :cid="componentId" :loading="loading" style="display: inline-block;" />
        </div>
      </v-row>
      <v-pagination
        v-model="currentPage"
        :total-visible="7"
        :length="upComingMovies.totalPages"
        @input="updatePage"
      />
    </v-container>
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
      isMobile: false,
      mediaType: 'movie',
      componentId: 'upComingMovies',
      upComingUrl: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_SECRET}&language=en-US&region=us&total_results=14`,
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
  beforeDestroy () {
    if (typeof window === 'undefined') { return }

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted () {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    loadUpcoming () {
      const URL = `${this.upComingUrl}&page=${this.currentPage}&total_results=14`
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
    },
    onResize () {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>
<style scoped>
.mobileView{
  overflow-x: auto;
}
</style>
