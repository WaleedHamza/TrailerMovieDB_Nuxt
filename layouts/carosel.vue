<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
  >
    <v-carousel-item
      v-for="item in upComingMovies.results"
      :key="item.id"
      :src="item.backdrop"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
    >
      <v-sheet
        color="rgba(0,0,0,0)"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="start"
        >
          <div class="ml-10">
            <v-img
              v-if="item.poster_path != null"
              class="white--text align-end text-truncate"
              width="200"
              :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
              lazy-src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
              contain
            />
          </div>
          <div>
            <v-card-text class="text-center"> {{ item.overview}}
            </v-card-text>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import { mapGetters } from 'vuex'
import cfg from '../config/index'
export default {
  name: 'SliderShow',
  data () {
    return {
      componentId: 'upComingMovies',
      upComingUrl: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_SECRET}&language=en-US&region=us&total_results=14`,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ]
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    slides () {
      return this.upComingMovies ? [] : this.buildSlids(this.upComingMovies)
    },
    upComingMovies () {
      return this.loading
        ? []
        : this.getData('upComingMovies')
    },
    loading () {
      return this.isLoading('upComingMovies')
    }
  },
  created () {
    this.loadUpcoming()
  },

  mounted () {
  },
  methods: {
    loadUpcoming () {
      const URL = `${this.upComingUrl}&page=${this.currentPage}&total_results=14`
      this.opts = cfg.renderObject(URL, this.componentId)
      this.$store.dispatch(cfg.grd, this.opts)
    },
    buildSlids (arr) {
      const len = arr.results
      const r = []
      for (let i = 7; i < len.length; i++) {
        r.push(len[i])
      }
      len.slice(7, len.lenght)
    }
  }
}
</script>
