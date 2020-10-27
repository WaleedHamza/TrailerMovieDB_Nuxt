<template>
  <v-container>
    <v-row>
      <Popular />
    </v-row>
    <v-row>
      <TopRated />
    </v-row>
    <v-row>
      <OnAir />
    </v-row>
    <v-row>
      <AiringToday />
    </v-row>
    <!-- <div v-for="
        (b,
        index)
        in
        btns"
        class="d-flex justify-center"
      >
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
          placeholder="Show Title"
          append-outer-icon="mdi-card-search-outline"
          @click:append-outer="search"
          @click:clear="loadTv"
          @keydown.enter="search"
        />
      </popular>
    </v-row>
    <NoContent v-if="shows === 0 " :title="title" />
    <v-container v-else class="d-flex justify-center flex-wrap column">
      <v-row class="d-flex justify-center">
        <v-pagination
          v-model="currPage"
          :length="totalPages"
          total-visible="7"
          circle
          @input="nextPage"
        />
      </v-row>
      <v-row>
        <div v-for="item in shows" :key="item.id" class="d-flex justify-center ma-1">
          <Card :item="item" :loading="loading" :media-type="mediaType" class="d-flex justify-content-center flex-wrap" />
        </div>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-pagination
          v-model="currPage"
          :length="totalPages"
          total-visible="7"
          circle
          @input="nextPage"
        />
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
    </v-snackbar> -->
  </v-container>
</template>

<script>
import axios from 'axios'
import Popular from '../components/Shows/Popular'
import TopRated from '../components/Shows/TopRated'
import OnAir from '../components/Shows/OnAir'
import AiringToday from '../components/Shows/AiringToday'
export default {
  components: {
    Popular,
    TopRated,
    OnAir,
    AiringToday
  },
  data () {
    return {
      mediaType: 'show',
      btns: ['Popular', 'Top Rated', 'On The Air', 'Airing Today'],
      latestUrl: `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.apiSecret}&language=en-US`,
      topRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.apiSecret}&language=en-US`,
      airingTodayUrl: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.apiSecret}&language=en-US`,
      searchUrl: `https://api.themoviedb.org/3/search/tv?api_key=${process.env.apiSecret}&language=en-US`,
      loading: false,
      snackbar: false,
      shows: [],
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
        case 'Popular':
          return () => {
            this.searchTopic = this.popular
          }
        case 'Top Rated':
          return () => {
            this.searchTopic = this.topRated
          }
        case 'On The Air':
          return () => {
            this.searchTopic = this.onAir
          }
        case 'Airing Today':
          return () => {
            this.searchTopic = this.airingToday
          }
        default:
          return this.popular
      }
    }
  },
  mounted () {
    this.loadTv()
  },
  methods: {
    loadTv () {
      this.get(this.popular)
    },
    async get (url) {
      this.loading = true
      this.shows = []
      axios.get(url)
        .then(await ((res) => {
          const results = res.data.results
          this.totalPages = res.data.total_pages
          results.forEach((show) => {
            show.poster = show.poster_path === null ? 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg' : 'https://image.tmdb.org/t/p/original' + show.poster_path
            show.backdrop = show.backdrop_path === null ? 'https://media1.thehungryjpeg.com/thumbs/800_3490413_c99bd5ab113ce13ca17640bff4c84c97e8171b1c.jpg' : 'https://image.tmdb.org/t/p/original' + show.backdrop_path
            this.shows.push(show)
            this.loading = false
          })
        })).catch((err) => {
          throw err
        })
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
        const url = `${this.searchUrl}&query=${this.title}`
        this.get(url)
      }
    }
  }
}
</script>
