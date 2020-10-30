<template>
  <div>
    <v-row>
      <Jumbotron />
    </v-row>
    <v-row>
      <UpComing />
    </v-row>
    <v-row>
      <PopularShows />
    </v-row>
  </div>
</template>

<script>
import PopularShows from '../components/Shows/Popular'
export default {
  components: {
    PopularShows
  },
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
