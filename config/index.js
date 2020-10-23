export default {
  loadComponent: 'LOAD_COMPONENT',
  renderComponent: 'RENDER_COMPONENT',
  setData: 'SET_DATA',
  dkVideos: 'data.videos',
  upComingMoviesPageNumber: 'upComingMoviesPageNumber',
  upComingMoviesTotalPages: 'upComingMoviesTotalPages',
  grd: 'getRenderData',
  renderObject (endPoint, cId) {
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
