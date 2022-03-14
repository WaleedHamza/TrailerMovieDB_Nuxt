<template>
  <v-container class="d-flex justify-center">
    <div
      v-if="videos.length > 0"
    >
      <vue-plyr class="player">
        <div
          class="plyr__video-embed player"
        >
          <iframe
            :src="videos[0]"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          />
        </div>
      </vue-plyr>
    </div>
    <div v-else class="text-center">
      <v-sheet color="warning" style="width: 100%;">
        No videos Found !!
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VideoItem',
  props: {
    videoKey: {
      type: Number,
      default: () => { return 0 }
    },
    show: {
      type: Boolean,
      default: () => { return false }
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
      videos: [],
      type: null
    }
  },
  beforeDestroy () {
    this.videos = []
  },
  mounted () {
    this.type = this.mediaType
    this.getTrailer()
  },
  methods: {
    async getTrailer () {
      const showUrl = `https://api.themoviedb.org/3/tv/${this.videoKey}/videos?api_key=${this.key}&language=en-US`
      const movieUrl = `https://api.themoviedb.org/3/movie/${this.videoKey}/videos?api_key=${this.key}&language=en-US`
      const URL = this.type === 'movies' ? movieUrl : showUrl
      axios.get(URL).then(
        await ((res) => {
          const r = res.data.results
          if (r.length !== []) {
            r.forEach((i) => {
              const url = `https://www.youtube.com/embed/${i.key}`
              this.videos.push(url)
            })
          } else {
            return this.NoVids
          }
        })
      ).catch((err) => {
        throw err
      })

      this.trailerDialog = true
    }
  }
}
</script>

<style>
.player {
  width: 1280px!important;
  height: 740px!important;
}

</style>
