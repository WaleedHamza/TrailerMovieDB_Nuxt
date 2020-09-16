<template>
  <div>
    <v-skeleton-loader
      :loading="loading"
      transition="fade"
      max-width="300"
      max-height="900"
      type="card"
    >
      <v-card :loading="loading" class="mx-auto" width="300">
        <v-img v-if="item.poster" class="white--text align-end" height="400px" :src="item.poster" contain />
        <v-sheet v-else>
          No poster available
        </v-sheet>
        <v-card-title class="text-truncate">
          {{ item.title }}{{ item.original_name }}
        </v-card-title>
        <v-card-subtitle v-if="item.release_date || item.first_air_date">
          {{ item.release_date }}{{ item.first_air_date }}
        </v-card-subtitle>
        <v-card-subtitle v-else>
          Release date is unavailable
        </v-card-subtitle>
        <div
          class="overflow-y-auto"
          max-height="50"
        />
        <v-card-actions class="d-flex justify-center space-between">
          <v-btn color="orange" text @click="launchVideoDialog()">
            <v-icon>{{ "mdi-play" }}</v-icon>
            Play Trailer
          </v-btn>
          <v-btn color="orange" text @click="getDetails(item.id)">
            <v-icon>{{ 'mdi-details' }}</v-icon>
            Details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-skeleton-loader>
    <v-dialog
      v-model="showVideoDialog"
      max-width="1280"
      max-height="740"
      class="pa-0"
    >
      <Video
        v-if="showVideoDialog"
        :video-key="videoKey"
        :show="showVideoDialog"
        :media-type="mediaType"
      />
    </v-dialog>
    <v-dialog v-model="detailsDialog">
      <v-sheet color="success">
        {{ details[0] }}
      </v-sheet>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import Video from '../components/Video'
export default {
  name: 'Card',
  components: {
    Video
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
    },
    mediaType: {
      default: () => {
        return ''
      },
      type: String
    }
  },
  data () {
    return {
      key: process.env.apiSecret,
      videoKey: this.item.id,
      scrollInvoked: 0,
      showVideoDialog: false,
      detailsDialog: false,
      details: []
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
    getDetails (id) {
      this.detailsDialog = !this.detailsDialog
      const movieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=en-US`
      const showDetails = `https://api.themoviedb.org/3/tv/${id}?api_key=${this.key}&language=en-US`
      const url = this.mediaType === 'movie' ? movieDetails : showDetails
      axios.get(url)
        .then((res) => {
          this.details.push(res)
        })
        .catch((err) => {
          throw err
        })
    }
  }
}
</script>
