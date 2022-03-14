<template>
  <v-container>
    <v-row class="mb-10">
      <Jumbotron />
    </v-row>
    <v-row>
      <UpComing />
    </v-row>
    <v-row>
      <PopularShows />
    </v-row>
  </v-container>
</template>

<script>
import PopularShows from '../components/Shows/Popular'
export default {
  name: 'HomePage',
  components: {
    PopularShows
  }
}
</script>
