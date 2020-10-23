<template>
  <v-container>
    <TrendingMovies />
    <v-snackbar
      v-model="snackbar"
      top
      right
      color="error"
      timeout="1500"
    >
      Please add title
    </v-snackbar>
  </v-container>
</template>

<script>

export default {

  data () {
    return {
      mediaType: 'movie',
      btns: ['Trending', 'Popular', 'Top Rated', 'Up Coming', 'Now Playing'],
      popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      searchUrl: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.apiSecret}&language=en-US`,
      loading: false,
      snackbar: false,
      movies: [],
      totalPages: 0,
      page: 1,
      currPage: 1,
      title: null,
      topic: '',
      searchTopic: ''
    }
  },
  computed: {
    setSearch () {
      switch (this.topic) {
        case 'Trending':
          return () => {
            this.searchTopic = this.trending
          }
        case 'Popular':
          return () => {
            this.searchTopic = this.popular
          }
        case 'Top Rated':
          return () => {
            this.searchTopic = this.topRated
          }
        case 'Up Coming':
          return () => {
            this.searchTopic = this.upComing
          }
        case 'Now Playing':
          return () => {
            this.searchTopic = this.nowPlaying
          }
        default:
          return this.trending
      }
    }
  },
  mounted () {
  },
  methods: {
    loadMovies () {
      this.get(this.trending)
    },
    nextPage () {
      this.page = this.currPage
      const p = this.page
      const url = `${this.searchTopic}&page=${p}`
      this.get(url)
    },
    setUrl (props) {
      this.currPage = 1
      this.topic = props
      this.setSearch()
      this.get(this.searchTopic)
    },
    search () {
      if (this.title === null) {
        this.snackbar = true
      } else {
        const URL = `${this.searchUrl}&query=${this.title}`
        this.get(URL)
      }
    }
  }
}
</script>
