export default {
  loadComponent: 'LOAD_COMPONENT',
  renderComponent: 'RENDER_COMPONENT',
  renderTrailers: 'RENDER_TRAILERS',
  setData: 'SET_DATA',
  dkVideos: 'data.videos',
  upComingMoviesPageNumber: 'upComingMoviesPageNumber',
  upComingMoviesTotalPages: 'upComingMoviesTotalPages',
  grd: 'getRenderData',
  sT: 'setTrailers',
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
