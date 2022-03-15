<template>
  <v-img :src="details.backdrop_path">
    <v-sheet color="rgba(0,0,0,0.5)" height="100%">
      {{ details }}
    </v-sheet>
  </v-img>
</template>

<script>
export default {
  name: 'DetailsItem',
  props: {
    details: {
      default: () => {
        return {}
      },
      type: Object
    }
  },
  data () {
    return {
      model: {
        backdrop_path: 'https://image.tmdb.org/t/p/original/mZjZgY6ObiKtVuKVDrnS9VnuNlE.jpg',
        created_by: [
          {
            id: 169061,
            credit_id: '5918e7e4925141583c04b400',
            name: 'David Shore',
            gender: 2,
            profile_path: '/yUwAL9wOJoS9caz9GusyHsrad8J.jpg'
          }
        ],
        episode_run_time: [42],
        first_air_date: '2017-09-25',
        genres: [{ id: 18, name: 'Drama' }],
        homepage: 'http://abc.go.com/shows/the-good-doctor',
        id: 71712,
        in_production: true,
        languages: ['en'],
        last_air_date: '2020-03-30',
        last_episode_to_air: {
          air_date: '2020-03-30',
          episode_number: 20,
          id: 2185970,
          name: 'I Love You (2)',
          overview: 'The staff of St. Bonaventure Hospital works against time and their own personal safety to save the lives of those around them.',
          production_code: '',
          season_number: 3,
          show_id: 71712,
          still_path: '/bbV4bHdzLZ7jp3z9aWvVLFPSAAu.jpg',
          vote_average: 8,
          vote_count: 1
        },
        name: 'The Good Doctor',
        next_episode_to_air: null,
        networks: [
          {
            name: 'ABC',
            id: 2,
            logo_path: '/ndAvF4JLsliGreX87jAc9GdjmJY.png',
            origin_country: 'US'
          }
        ],
        number_of_episodes: 56,
        number_of_seasons: 3,
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'The Good Doctor',
        overview: "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives?",
        popularity: 371.717,
        poster_path: 'https://image.tmdb.org/t/p/original/53P8oHo9cfOsgb1cLxBi4pFY0ja.jpg',
        production_companies: [{ id: 19366, logo_path: '/vOH8dyQhLK01pg5fYkgiS31jlFm.png', name: 'ABC Studios', origin_country: 'US' }, { id: 90375, logo_path: null, name: '3AD', origin_country: 'US' }, { id: 11073, logo_path: '/wHs44fktdoj6c378ZbSWfzKsM2Z.png', name: 'Sony Pictures Television', origin_country: 'US' }],
        seasons: [{
          air_date: '2017-09-25',
          episode_count: 18,
          id: 88380,
          name: 'Season 1',
          overview: '',
          poster_path: '/hiNyjUSTFrbMv3Sc0CxNW2o39az.jpg',
          season_number: 1
        }, { air_date: '2018-09-24', episode_count: 18, id: 107199, name: 'Season 2', overview: 'Dr. Shaun Murphy’s world has begun to expand as he continues to work harder than he ever has before, navigating his new environment and relationships to prove to his colleagues at the prestigious St. Bonaventure Hospital’s surgical unit that his extraordinary medical gifts will save lives.', poster_path: '/sIq4SFloM0JSeRNAQVqb5g5zAng.jpg', season_number: 2 }, { air_date: '2019-09-22', episode_count: 20, id: 127097, name: 'Season 3', overview: 'Dr. Shaun Murphy continues to use his extraordinary medical gifts at St. Bonaventure Hospital’s surgical unit. As his friendships deepen, Shaun tackles the world of dating for the first time and continues to work harder than he ever has before.', poster_path: '/8QFssOwaWZ3eB60cGwDpfrZBscv.jpg', season_number: 3 }],
        status: 'Returning Series',
        type: 'Scripted',
        vote_average: 8.6,
        vote_count: 4717
      }
    }
  }
}
</script>

<style>

</style>
