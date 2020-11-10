<template>
  <v-container class="d-flex justify-center" height="20%" style="position: relative">
    <v-card class="mt-5 jumbotron" width="80%" height="100%">
      <v-img
        class="d-flex justify-center align-end"
        :src="backdrop"
        contain
      >
        <v-text-field
          v-model="searchText"
          label="Search movies, TV-shows and more.."
          solo
          clearable
          max-width="500"
          @click:clear="hideBtn"
          @keyup.enter="search"
        >
          <template v-if="showBtn" v-slot:append>
            <v-btn @click="search">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-img>
    </v-card>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}
    </v-snackbar>
  </v-container>
</template>

<script>
import cfg from '../config/index'
export default {
  components: {
  },
  data () {
    return {
      searchText: '',
      searchUrl: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_SECRET}&language=en-US&page=1&include_adult=false`,
      backdrop: 'https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png',
      snackbar: false,
      showBtn: false,
      text: 'Please type movie or tvshow name'
    }
  },
  computed: {
    searchResults () {
      return this.loading
        ? []
        : this.getData(this.opts.componentId)
    }
  },
  watch: {
    searchText (newVal) {
      newVal === '' ? this.showBtn = false : this.showBtn = true
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    search () {
      const t = this.searchText
      if (t === '') {
        this.snackbar = true
      } else {
        const URL = `${this.searchUrl}&query=${t}`
        this.opts = cfg.renderObject(URL, 'searchResults')
        this.$store.dispatch(cfg.grd, this.opts)
        this.$router.push('/search')
      }
    },
    hideBtn () {
      this.showBtn = false
    }
  }
}
</script>
