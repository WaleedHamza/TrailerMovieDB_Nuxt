<template>
  <v-container>
    <v-row class="mb-10">
      <Carousel />
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
import Carousel from '~/layouts/carosel.vue'
export default {
  components: {
    PopularShows,
    Carousel
  }
}
</script>
