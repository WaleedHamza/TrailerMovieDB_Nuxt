<template>
  <div class="ma-1">
    <v-skeleton-loader
      v-model="loading"
      class="mx-auto"
      type="card"
    >
      <v-card class="mx-auto card" width="200">
        <v-img
          class="white--text align-end"
          height="300px"
          :src="item.poster"
          lazy-src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
          contain
        />
        <v-card-actions class="d-flex justify-space-around align-center">
          <v-sheet v-if="item.release_date || item.first_air_date">
            <p class="ma-0" style="font-size: 70%">
              {{ item.release_date }}{{ item.first_air_date }}
            </p>
          </v-sheet>
          <v-card-subtitle v-else>
            Release date is unavailable
          </v-card-subtitle>
          <v-icon @click="getInfo(item)">
            mdi-information
          </v-icon>
        </v-card-actions>
      </v-card>
    </v-skeleton-loader>
    <v-dialog v-model="showInfoDialog">
      <v-container v-if="showInfoDialog">
        <v-card v-for=" i in Trailers" :key="i.id">
          <vue-plyr>
            <div class="plyr__video-embed">
              <iframe
                :src="i.youtubeUrl"
                allowfullscreen
                allowtransparency
                allow="autoplay"
              />
            </div>
          </vue-plyr>
        </v-card>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cfg from '../config/index'

export default {
  name: 'Card',
  components: {
  },
  props: {
    item: {
      default: () => {
        return {}
      },
      type: Object
    },
    type: {
      default: () => {
        return {}
      },
      type: String
    },
    loading: {
      default: () => {
        return {}
      },
      type: Boolean
    },
    cid: {
      default: () => {
        return {}
      },
      type: String
    }
  },
  data () {
    return {
      key: process.env.apiSecret,
      videoKey: this.item.id,
      scrollInvoked: 0,
      showInfoDialog: false,
      detailsDialog: false,
      overlay: false,
      details: {}
    }
  },
  computed: {
    ...mapGetters(['getTrailers']),
    Trailers () {
      return this.loading
        ? []
        : this.getTrailers('Trailers')
    }
  },
  mounted () {
  },
  methods: {
    getInfo (props) {
      const URL = this.type === 'show' ? `https://api.themoviedb.org/3/tv/${props.id}/videos?api_key=${process.env.apiSecret}&language=en-US`
        : `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${process.env.apiSecret}&language=en-US`
      this.opts = cfg.renderTrailer(URL, 'Trailers')
      this.$store.dispatch(cfg.gT, this.opts)
      this.showInfoDialog = !this.showInfoDialog
    }
  }
}
</script>

<style scoped>
.card {
  background-color: rgba(0, 0, 0, 0);
}
</style>
