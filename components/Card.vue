<template>
  <div class="ma-1">
    <v-skeleton-loader
      v-model="loading"
      class="mx-auto"
      type="card"
    >
      <v-card class="mx-auto card" width="200">
        <v-img class="white--text align-end" height="300px" :src="item.poster" contain />
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
      <v-container v-if="Trailers">
        <v-card v-for=" i in Trailers" :key="i.id">
          {{ i.youtubeUrl }}
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
      const URL = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${process.env.apiSecret}&language=en-US`
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
