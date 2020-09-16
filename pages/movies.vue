<template>
  <v-container>
    <v-row>
      <div v-for="(b, index) in btns" :key="index" class="d-flex justify-center">
        <v-btn text color="green" @click="setUrl(b)">
          {{ b }}
        </v-btn>
      </div>
      <v-spacer />
      <v-text-field
        v-model="title"
        solo
        clearable
        :hide-details="true"
        placeholder="Movie Title"
        append-outer-icon="mdi-movie-search-outline"
        @click:append-outer="search"
        @click:clear="get"
        @keydown.enter="search"
      />
    </v-row>
    <NoContent v-if="!movies" :title="title" />
    <v-container v-else class="d-flex justify-center flex-wrap column">
      <v-row class="d-flex justify-center">
        <v-pagination
          v-if="pages > 0 "
          v-model="currPage"
          :length="pages"
          total-visible="7"
          circle
          @input="loadMovies"
        />
      </v-row>
      <v-row>
        <div v-for="item in movies" :key="item.id" class="d-flex justify-center ma-1">
          <Card :item="item" :loading="loading" :media-type="mediaType" class="d-flex justify-content-center flex-wrap" />
        </div>
      </v-row>
    </v-container>

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
import axios from 'axios'
import Card from '../components/Card'
import NoContent from '../components/NoContent'

export default {
  name: 'HelloWorld',
  components: {
    Card,
    NoContent
  },

  data () {
    return {
      mediaType: 'movie',
      loading: false,
      snackbar: false,
      pages: 0,
      currPage: 1,
      movies: [],
      title: null,
      searchUrl: null,
      topic: '',
      btns: ['Trending', 'Popular', 'Top Rated', 'Up Coming', 'Now Playing'],
      popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apiSecret}&language=en-US&region=us`,
      nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.apiSecret}&language=en-US&region=us`
    }
  },
  computed: {
    setSearch () {
      switch (this.topic) {
        case 'Trending':
          return () => {
            this.searchUrl = this.trending
          }
        case 'Popular':
          return () => {
            this.searchUrl = this.popular
          }
        case 'Top Rated':
          return () => {
            this.searchUrl = this.topRated
          }
        case 'Up Coming':
          return () => {
            this.searchUrl = this.upComing
          }
        case 'Now Playing':
          return () => {
            this.searchUrl = this.nowPlaying
          }
        default:
          return this.trending
      }
    }
  },
  mounted () {
    this.loadMovies()
  },
  methods: {
    async get () {
      this.movies = []
      axios.get(this.trending)
        .then(await ((res) => {
          this.pages = res.data.total_pages
          const results = res.data.results
          results.forEach((movie) => {
            movie.poster = movie.poster_path === null ? 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg' : 'https://image.tmdb.org/t/p/original' + movie.poster_path
            movie.backdrop = movie.backdrop_path === null ? 'https://media1.thehungryjpeg.com/thumbs/800_3490413_c99bd5ab113ce13ca17640bff4c84c97e8171b1c.jpg' : 'https://image.tmdb.org/t/p/original' + movie.backdrop_path
            this.movies.push(movie)
            this.loading = false
          })
        })).catch((err) => {
          throw err
        })
    },
    setUrl (props) {
      this.topic = props
      this.currPage = 1
      this.setSearch()
      this.loadMovies()
    },
    loadMovies () {
      this.loading = true
      const url = this.topic === '' ? this.trending : this.searchUrl
      this.movies = []
      axios.get(`${url}&page=${this.currPage}`)
        .then((res) => {
          this.r = res
          this.pages = res.data.total_pages
          const results = res.data.results
          results.forEach((movie) => {
            if (movie.media_type === 'movie') {
              movie.poster = movie.poster_path === null ? 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg' : 'https://image.tmdb.org/t/p/original' + movie.poster_path
              movie.backdrop = movie.backdrop_path === null ? 'https://media1.thehungryjpeg.com/thumbs/800_3490413_c99bd5ab113ce13ca17640bff4c84c97e8171b1c.jpg' : 'https://image.tmdb.org/t/p/original' + movie.backdrop_path
              this.movies.push(movie)
              this.loading = false
            } else {
              return null
            }
          })
        }).catch((err) => {
          throw err
        })
    },
    search () {
      this.movies = []
      if (this.title === null) {
        this.snackbar = true
      } else {
        this.loading = true
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.apiSecret}&language=en-US&query=${this.title}&include_adult=false`
        this.movies = []
        axios.get(URL)
          .then((res) => {
            const results = res.data.results
            results.forEach((movie) => {
              movie.poster = movie.poster_path === null ? 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg' : 'https://image.tmdb.org/t/p/original' + movie.poster_path
              movie.backdrop = movie.backdrop_path === null ? 'https://media1.thehungryjpeg.com/thumbs/800_3490413_c99bd5ab113ce13ca17640bff4c84c97e8171b1c.jpg' : 'https://image.tmdb.org/t/p/original' + movie.backdrop_path
              this.movies.push(movie)
              this.loading = false
            })
          }).catch((err) => {
            throw err
          })
      }
    }
  }
}
</script>
