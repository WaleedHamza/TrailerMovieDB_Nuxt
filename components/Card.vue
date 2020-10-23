<template>
  <div class="ma-1">
    <v-skeleton-loader
      v-model="loading"
      class="mx-auto"
      type="card"
    >
      <v-card class="mx-auto" width="200" color="grey">
        <v-img class="white--text align-end" height="300px" :src="item.poster" contain>
        <!-- <v-card-title class="text-truncate">
          <h3>{{ item.title }}{{ item.original_name }}</h3>
        </v-card-title> -->
        </v-img>
        <v-card-actions>
          <v-text v-if="item.release_date || item.first_air_date">
            <p style="font-size: 60%">
              {{ item.release_date }}{{ item.first_air_date }}
            </p>
          </v-text>
          <v-card-subtitle v-else>
            Release date is unavailable
          </v-card-subtitle>
        </v-card-actions>
      </v-card>
    </v-skeleton-loader>
  </div>
</template>

<script>
// import axios from 'axios'
// import Video from '../components/Video'
// import Details from '../components/Details'
export default {
  name: 'Card',
  components: {
    // Video,
    // Details
  },
  props: {
    item: {
      default: () => {
        return {}
      },
      type: Object
    },
    loading: {
      default: () => {
        return false
      },
      type: Boolean
    }
  },
  data () {
    return {
      key: process.env.apiSecret,
      videoKey: this.item.id,
      scrollInvoked: 0,
      showVideoDialog: false,
      detailsDialog: false,
      overlay: false,
      details: {}
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    launchVideoDialog () {
      this.showVideoDialog = !this.showVideoDialog
    },
    getDetails (item) {
    //   this.detailsDialog = !this.detailsDialog
    //   const movieDetails = `https://api.themoviedb.org/3/movie/${item.id}?api_key=${this.key}&language=en-US`
    //   const showDetails = `https://api.themoviedb.org/3/tv/${item.id}?api_key=${this.key}&language=en-US`
    //   const url = item.mediaType === 'movie' ? movieDetails : showDetails
    //   axios.get(url)
    //     .then((res) => {
    //       const d = res.data
    //       d.backdrop_path = 'https://image.tmdb.org/t/p/original' + res.data.backdrop_path
    //       d.poster_path = 'https://image.tmdb.org/t/p/original' + res.data.poster_path
    //       this.details = d
    //     })
    //     .catch((err) => {
    //       throw err
    //     })
    }
  }
}
</script>
