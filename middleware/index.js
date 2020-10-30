export default function ({ store, redirect }) {
  // eslint-disable-next-line no-prototype-builtins
  if (store.state.appData.hasOwnProperty('searchResults')) {
    return alert(store.state.appData.searchResults)
    //  redirect('/search')
  }
}
