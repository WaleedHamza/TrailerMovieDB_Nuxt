/* eslint-disable no-console */
<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div class="d-flex align-center">
        <v-text-field
          v-model="searchText"
          label="Search movies, TV-shows and more.."
          solo
          clearable
          max-width="500"
          hide-details
          @click:clear="hideBtn"
          @keyup.enter="search"
        >
          <template v-if="showBtn" v-slot:append>
            <v-btn @click="search">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <VuetifyLogo />
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="ma0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="fixed"
      app
    >
      <span>&copy; Waleed Hamza {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import cfg from '../config/index'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
  components: {
    VuetifyLogo
  },
  data () {
    return {
      isMobile: false,
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-movie',
          title: 'Movies',
          to: '/movies'
        },
        {
          icon: 'mdi-television',
          title: 'TV Shows',
          to: '/tvshows'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Search TMDB',
      searchText: '',
      searchUrl: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_SECRET}&language=en-US&page=1&include_adult=false`,
      showBtn: false,
      text: 'Please type movie or tvshow name'
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    width () {
      return window.innerWidth
    }
  },
  watch: {
    searchText (newVal) {
      newVal === '' ? this.showBtn = false : this.showBtn = true
    }
  },
  beforeDestroy () {
    if (typeof window === 'undefined') { return }

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted () {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    search () {
      const t = this.searchText
      if (t === '') {
        this.snackbar = true
      } else {
        const URL = `${this.searchUrl}&query=${t}`
        this.opts = cfg.renderObject(URL, 'searchResults')
        this.$store.dispatch(cfg.grd, this.opts)
        this.$router.push('/search')
      }
    },
    hideBtn () {
      this.showBtn = false
    }
  }

}
</script>
