<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="ma-2 pa-0"
        @click="getActorsCredit(item)"
      >
        <v-img
          :src="`https://image.tmdb.org/t/p/original${item.profile_path}`"
          lazy-src="https://www.wcaeagles.org/wp-content/uploads/2016/07/male-placeholder.jpg"
          :alt="item.profile_path"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
          width="150"
        />
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#080808"
          >
            <p size="o.75rem" class="font-weight-light" height="10" style="white-space: wrap;" v-text="item.name" />
            <p size="o.75rem" class="font-weight-light" height="10" style="white-space: wrap;" v-text="item.character" />
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import cfg from '../config/index'
export default {
  name: 'home_page',
  props: {
    item: {
      default: () => {
        return {}
      },
      type: Object
    }
  },
  data: () => ({
    overlay: false
  }),
  methods: {
    getActorsCredit (i) {
      const url = `https://api.themoviedb.org/3/person/${i.id}/combined_credits?api_key=${process.env.API_SECRET}&language=en-US`
      const actor = i.name.replace(/\s/g, '-')
      this.opts = cfg.renderObject(url, `${actor}`)
      this.$store.dispatch(cfg.sI, this.opts)
      this.getActorsDetails(i)
      this.$router.push(`actor/${actor}`)
    },
    getActorsDetails (i) {
      const url = `https://api.themoviedb.org/3/person/${i.id}?api_key=${process.env.API_SECRET}&language=en-US`
      const actor = i.name.replace(/\s/g, '-')
      this.opts = cfg.renderObject(url, `${actor}.details`)
      this.$store.dispatch(cfg.sI, this.opts)
    }
  }
}
</script>

<style>

</style>
