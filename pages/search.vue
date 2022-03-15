<template>
  <v-container>
    <div v-for="item in searchResults.results" :key="item.id">
      <v-sheet
        v-if="item.media_type != 'person'"
        :rounded="rounded"
        width="100%"
        class="d-flex ma-2"
      >
        <Card v-if="item.media_type != 'person'" :item="item" :loading="loading" :cid="componentId" />
        <v-container v-if="item.media_type != 'person'">
          <v-card-title class="d-flex align-center">
            <v-icon v-if="item.media_type === 'movie'" class="mx-2">
              mdi-movie
            </v-icon>
            <v-icon v-else-if="item.media_type === 'tv'" class="mx-2">
              mdi-monitor
            </v-icon>
            <v-icon v-else class="mx-2">
              mdi-account
            </v-icon>
            <strong>{{ item.original_title }}{{ item.original_name }}{{ item.name }}</strong> {{ item.release_date }}
          </v-card-title>
          <v-card-subtitle v-if="item.media_type === 'movie'">
            {{ item.overview }}
          </v-card-subtitle>
          <v-card-subtitle v-if="item.media_type === 'tv'">
            {{ item.overview }}
          </v-card-subtitle>
        </v-container>
      </v-sheet>
      <v-sheet
        :rounded="rounded"
        width="100%"
        class="d-flex ma-2"
      >
        <Actor v-if="item.media_type === 'person'" :item="item" :loading="loading" />
        <v-container v-if="item.media_type === 'person'">
          <v-card-title
            v-if="item.media_type === 'person'"
            class="d-flex align-start"
          >
            <v-icon v-if="item.media_type === 'person'" class="mx-2">
              mdi-account
            </v-icon>{{ item.name }}
          </v-card-title>
          <v-card-subtitle v-if="item.media_type === 'person' && item.known_for">
            known for :
            <div v-for="i in item.known_for" :key="i.id">
              {{ i.original_title }}
            </div>
          </v-card-subtitle>
        </v-container>
      </v-sheet>
    </div>
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
  name: 'SerachComponent',
  data () {
    return {
      componentId: 'searchResults',
      result: []
    }
  },
  computed: {
    ...mapGetters(['getData', 'isLoading']),
    searchResults () {
      return this.loading
        ? []
        : this.getData(this.componentId)
    },
    loading () {
      return this.isLoading(this.componentId)
    }
  },
  methods: {
    hasProperty (Obj, key) {
      return this.hasProperty.call(Obj, key)
    }
  }
}
</script>
