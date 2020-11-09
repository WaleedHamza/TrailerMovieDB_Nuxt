<template>
  <v-container height="100vh" class="d-flex flex-column align-center ma-0 pa-0">
    <v-img :src="`https://image.tmdb.org/t/p/original${info.backdrop_path}`" class="d-flex overflow-y-auto" height="100vh" cover>
      <v-card class="px-10 d-flex flex-column overflow-y-auto" width="100%" height="100%" style="background-color: rgba(0,0,0,0.5); position: absolute;">
        <v-row class="d-flex">
          <div class="col-3">
            <v-img
              v-if="info.poster_path != null"
              class="white--text align-end"
              width="400"
              :src="`https://image.tmdb.org/t/p/original${info.poster_path}`"
            />
            <v-img v-else src="https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg" />
            <v-rating
              :value="info.vote_average"
              color="orange"
              small
            />
          </div>
          <div class="col-9">
            <v-card-title>{{ info.title }} {{ info.name }}</v-card-title>
            <v-card-subtitle class="pb-0">
              Release Date : {{ info.release_date }} {{ info.first_air_date }}
            </v-card-subtitle>
            <v-card-text class="text--primary">
              Overview: {{ info.overview }}
            </v-card-text>
            <v-card-actions />
            <v-container class="d-flex justify-content-center" style="overflow: auto; white-space: nowrap;">
              <div v-for="i in cast.cast" :key="i.id">
                <Actor :item="i" />
              </div>
            </v-container>
            <v-container v-if="trailers.results" class="d-flex justify-content-center" style="overflow: auto; white-space: nowrap;">
              <div v-for="(t, index) in trailers.results" :key="index" class="d-flex justify-content-center">
                <v-btn
                  gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.8)"
                  @click="toggleTrailerDialog(t.key)"
                >
                  <v-icon color="success" @click="toggleTrailerDialog(t.key)">
                    mdi-play
                  </v-icon> {{ t.type }}
                </v-btn>
              </div>
            </v-container>
          </div>
        </v-row>
      </v-card>
    </v-img>
    <v-dialog
      v-model="trailerDialog"
      scrollableclass="d-flex flex-column"
      width="100vh"
    >
      <v-toolbar
        flat
        dark
        class="d-flex flex-row-reverse"
      >
        <v-btn
          icon
          dark
          @click="trailerDialog = false"
        >
          <v-icon color="error">
            mdi-close
          </v-icon>
        </v-btn>
      </v-toolbar>
      <vue-plyr v-if="trailerDialog" width="100vh">
        <div data-plyr-provider="youtube" :data-plyr-embed-id="trailerLink" />
      </vue-plyr>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Actor from '../components/Actor'
// import cfg from '../config/index'

export default {
  components: {
    Actor
  },
  // eslint-disable-next-line require-await
  async asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  },
  data: () => ({
    trailerDialog: false,
    trailerLink: ''
  }),
  computed: {
    ...mapGetters(['getData']),
    info () {
      return this.loading ? [] : this.getData('objInfo.0')
    },
    cast () {
      return this.loading ? [] : this.getData('objInfo.1')
    },
    similar () {
      return this.loading ? [] : this.getData('objInfo.2')
    },
    reviews () {
      return this.loading ? [] : this.getData('objInfo.3')
    },
    trailers () {
      return this.loading ? [] : this.getData('objInfo.4')
    }

  },
  created () {
  },
  methods: {
    toggleTrailerDialog (t) {
      this.trailerLink = t
      this.trailerDialog = !this.trailerDialog
    }
  }
}
</script>
