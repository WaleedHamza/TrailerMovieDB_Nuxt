<template>
  <div>
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
      key: {}
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
