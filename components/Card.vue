<template>
  <div class="ma-1">
    <v-skeleton-loader
      :loading="loading"
      transition="fade"
      class="mx-auto"
      type="card"
    >
      <v-card class="mx-auto">
        <v-img
          v-if="item.poster_path != null"
          class="white--text align-end"
          width="150"
          :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
          lazy-src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
          contain
          @click="getInfo(item)"
        />
        <v-img
          v-else
          class="white--text align-end"
          width="150"
          src="https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"
          lazy-src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
          contain
        />
      </v-card>
    </v-skeleton-loader>
    <v-dialog v-model="showInfoDialog" max-width="900">
      <v-img :src="item.backdrop" style="position: relative">
        <v-card class="px-10 " width="100%" height="100%" style="background-color: rgba(0,0,0,0.5); position: absolute">
          <v-row class="d-flex justify-end">
            <v-icon class="pa-5" color="red" @click="toggleInfoDialog">
              mdi-close
            </v-icon>
          </v-row>
          <v-row class="d-flex">
            <div class="col-3">
              <v-img
                class="white--text align-end"
                width="175px"
                :src="item.poster"
              />
              <v-rating
                :value="item.vote_average/2"
                color="orange"
                small
              />
            </div>
            <div class="col-9">
              <v-card-title>{{ item.title }} {{ item.name }}</v-card-title>
              <v-card-subtitle class="pb-0">
                Release Date: {{ item.release_date }} {{ item.first_air_date }}
              </v-card-subtitle>
              <v-card-text class="text--primary">
                Overview: {{ item.overview }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                  @click="toggleTrailerDialog"
                >
                  <v-icon>mdi-play-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </v-row>
        </v-card>
      </v-img>
    </v-dialog>
    <v-dialog
      v-model="trailerDialog"
      max-width="1090"
      class="d-flex justify-center"
      style="position: absolute"
      :loading="loading"
      overlay-color="black"
    >
      <v-container v-if="trailerDialog" class="d-flex flex-column pa-0">
        <v-sheet v-if="Trailers.length <= 0" class="d-flex justify-center pa-100" color="red">
          <h1>No Trailers availableat the time </h1>
        </v-sheet>
        <v-row v-else>
          <vue-plyr class="player">
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
    cid: {
      default: () => {
        return {}
      },
      type: String
    }
  },
  data () {
    return {
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
    ...mapGetters(['isLoading']),
    loading () {
      return this.isLoading(this.cid)
    }
  },
  methods: {
    getInfo (i) {
      const DETAILS = this.type === 'show' ? `https://api.themoviedb.org/3/tv/${i.id}?api_key=${process.env.API_SECRET}&language=en-US` : `https://api.themoviedb.org/3/movie/${i.id}?api_key=${process.env.API_SECRET}&language=en-US`
      const CREDIT = this.type === 'show' ? `https://api.themoviedb.org/3/tv/${i.id}/credits?api_key=${process.env.API_SECRET}` : `https://api.themoviedb.org/3/movie/${i.id}/credits?api_key=${process.env.API_SECRET}`
      const SIMILAR = this.type === 'show' ? `https://api.themoviedb.org/3/tv/${i.id}/similar?api_key=${process.env.API_SECRET}&language=en-US` : `https://api.themoviedb.org/3/movie/${i.id}/similar?api_key=${process.env.API_SECRET}&language=en-US`
      const REVIEWS = this.type === 'show' ? `https://api.themoviedb.org/3/tv/${i.id}/reviews?api_key=${process.env.API_SECRET}&language=en-US` : `https://api.themoviedb.org/3/movie/${i.id}/reviews?api_key=${process.env.API_SECRET}&language=en-US`
      const TRAILERS = this.type === 'show' ? `https://api.themoviedb.org/3/tv/${i.id}/videos?api_key=${process.env.API_SECRET}&language=en-US` : `https://api.themoviedb.org/3/movie/${i.id}/videos?api_key=${process.env.API_SECRET}&language=en-US`
      const URLS = [DETAILS, CREDIT, SIMILAR, REVIEWS, TRAILERS]
      URLS.forEach((url, index) => {
        this.opts = cfg.renderObject(url, `objInfo.${index}`)
        this.$store.dispatch(cfg.sI, this.opts)
      })
      const slug = this.type === 'show' ? i.original_name.replace(/\s/g, '-') : i.title.replace(/\s/g, '-')
      this.$router.push(`/${slug}`)
    },
    toggleInfoDialog () {
      this.showInfoDialog = !this.showInfoDialog
    },
    toggleTrailerDialog () {
      this.trailerDialog = !this.trailerDialog
    }
  }
}
</script>
