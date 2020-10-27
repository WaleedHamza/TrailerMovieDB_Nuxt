export default {
  loadComponent: 'LOAD_COMPONENT',
  renderComponent: 'RENDER_COMPONENT',
  setTrailers: 'SET_TRAILERS',
  setData: 'SET_DATA',
  dkVideos: 'data.videos',
  upComingMoviesPageNumber: 'upComingMoviesPageNumber',
  upComingMoviesTotalPages: 'upComingMoviesTotalPages',
  grd: 'getRenderData',
  gT: 'getTrailers',
  renderObject (endPoint, cId) {
    return {
      ep: endPoint,
      componentId: cId
    }
  },
  renderTrailer (endPoint, cId) {
    return {
      ep: endPoint,
      componentId: cId
    }
  },
  dataObj (id, data) {
    return {
      id,
      data
    }
  }
}
