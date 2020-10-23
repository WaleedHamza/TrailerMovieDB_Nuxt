import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cfg from '../config/index'

Vue.use(Vuex)

export default {
  state: {
    laodingState: {},
    appData: {},
    errors: []
  },
  mutations: {
    LOAD_COMPONENT (state, cId) {
      Vue.set(state.laodingState, cId, true)
    },
    RENDER_COMPONENT (state, payload) {
      Vue.set(state.appData, payload.cId, payload.data)
      Vue.set(state.laodingState, payload.cId, false)
    },
    SET_UPCOMING_MOVIES (state, upComingMovies) {
      Vue.set(state.appData.movies = upComingMovies)
    }
  },
  actions: {
    async getRenderData ({ commit }, opts) {
      commit(cfg.loadComponent, opts.componentId)
      const res = await axios.get(opts.ep)
      const respond = res.data.results
      const results = []
      respond.forEach((item) => {
        item.poster = item.poster_path === null ? 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg' : 'https://image.tmdb.org/t/p/original' + item.poster_path
        item.backdrop = item.backdrop_path === null ? 'https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png' : 'https://image.tmdb.org/t/p/original' + item.backdrop_path
        results.push(item)
      })
      const totalPages = res.data.total_pages
      commit(cfg.renderComponent, {
        data: { results, totalPages },
        cId: opts.componentId
      })
    }
  },
  getters: {
    isLoading: state => (cId) => {
      return state.laodingState[cId]
    },
    getData: state => (cId) => {
      return state.appData[cId]
    }
  }
}
