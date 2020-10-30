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
          <v-icon @click="showInfoDialog =!showInfoDialog">
            mdi-information
          </v-icon>
        </v-card-actions>
      </v-card>
    </v-skeleton-loader>
    <v-dialog v-model="showInfoDialog" max-width="1080">
      <v-img :src="item.backdrop" style="position: relative">
        <v-card class="pa-10 " width="100%" height="100%" style="background-color: rgba(0,0,0,0.5); position: absolute">
          <v-img
            class="d-flex align-end white--text align-end"
            width="175px"
            :src="item.poster"
          />
          <v-rating
            :value="item.vote_average/2"
            color="orange"
            small
          />
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle class="pb-0">
            Release Date {{ item.release_date }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            {{ item.overview }}
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              text
              @click="trailerDialog = true"
            >
              <v-icon>mdi-play-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-img>
    </v-dialog>
    <v-dialog v-model="trailerDialog" max-width="1080" overlay-color="black">
      <v-container v-if="trailerDialog" class="d-flex flex-column">
        <v-row class="d-flex justify-end">
          <v-icon class="pa-5" color="red" @click="trailerDialog = false">
            mdi-close
          </v-icon>
        </v-row>
        <v-row v-if="showNoResults" class="d-flex justify-center">
          <v-sheet class="pa-30" color="red">
            <h1>No Trailers available</h1>
          </v-sheet>
        </v-row>
        <v-row v-else>
          <vue-plyr>
            <div :data-plyr-provider="Trailers[0].site" :data-plyr-embed-id="Trailers[0].key" />
          </vue-plyr>
        </v-row>
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
      showNoResults: false,
      trailerDialog: false,
      overlay: false,
      details: {}
    }
  },
  computed: {
    ...mapGetters(['getTrailers']),
    Trailers () {
      return this.loading ? [] : this.getTrailers('Trailers')
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    Trailers: function (val) {
      this.check(val)
    }
  },
  created () {
    // get the trailers
    // set store state
  },
  mounted () {
  },
  methods: {
    getTrailers (props) {
      const URL = this.type === 'show' ? `https://api.themoviedb.org/3/tv/${props.id}/videos?api_key=${process.env.apiSecret}&language=en-US`
        : `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${process.env.apiSecret}&language=en-US`
      this.opts = cfg.renderTrailer(URL, 'Trailers')
      this.$store.dispatch(cfg.gT, this.opts)
      this.showInfoDialog = !this.showInfoDialog
    },
    check () {
      if (Object.keys(this.Trailers).length === 0) {
        this.showNoResults = true
      } else {
        this.showNoResults = false
      }
    }
  }
}
</script>

<style scoped>
.card {
  background-color: rgba(0, 0, 0, 0);
}
.container {
  background-color: rgba(163, 5, 5, 0);
}
.player{
  position: relative;
  /* display: inline-block; */
}
</style>
