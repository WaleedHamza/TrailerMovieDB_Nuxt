<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="80vw"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ details.name }}
          </v-list-item-title>
          <div v-if="details.gender = 2" class="overline mb-1">
            Male
          </div>
          <div v-else class="overline mb-1">
            Female
          </div>
          <div class="overline mb-1">
            {{ details.place_of_birth }}
          </div>
          <div class="overline mb-1">
            DOB : {{ details.birthday }}
          </div>
          <div v-if="details.deathday != null" class="overline mb-1">
            DOD : {{ details.deathday }}
          </div>
          <p class="font-weight-light">
            {{ details.biography }}
          </p>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="180"
          color="grey"
          rounded
        >
          <v-img
            :src="`https://image.tmdb.org/t/p/original${details.profile_path}`"
            lazy-src="https://www.wcaeagles.org/wp-content/uploads/2016/07/male-placeholder.jpg"
            :alt="details.name"
            class="white--text align-end"
            width="150"
          />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    <v-container class="d-flex justify-center flex-wrap overflow-y-auto">
      <div v-for="(item, index) in actor.cast" :key="index">
        <Card :item="item" :loading="loading" :type="`${item.media_type}`" :cid="`${slug}`" />
      </div>
    </v-container>
    <v-overlay :value="loading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="info"
        indeterminate
      />
    </v-overlay>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line require-await
  async asyncData ({ params }) {
    const slug = params.actor
    return { slug }
  },
  data: () => ({
    overlay: false
  }),
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    actor () {
      return this.loading ? [] : this.getData(this.slug)
    },
    details () {
      return this.loading ? [] : this.getData(`${this.slug}.details`)
    },
    loading () {
      return this.isLoading(this.slug)
    }
  }
}
</script>
