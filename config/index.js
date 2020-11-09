export default {
  loadComponent: 'LOAD_COMPONENT',
  renderComponent: 'RENDER_COMPONENT',
  setData: 'SET_DATA',
  dkItem (itemId) { return `itemId.${itemId}` },
  upComingMoviesPageNumber: 'upComingMoviesPageNumber',
  upComingMoviesTotalPages: 'upComingMoviesTotalPages',
  grd: 'getRenderData',
  sI: 'setInfo',
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
