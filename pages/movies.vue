<template>
  <div>
    <v-row>
      <UpComing />
    </v-row>
    <v-row>
      <Trending />
    </v-row>
    <v-row>
      <PopularMovies />
    </v-row>
    <v-row>
      <TopRatedMovies />
    </v-row>
    <v-row>
      <NowPlaying />
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'MoviesPage'
}
</script>
