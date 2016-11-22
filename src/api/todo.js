export default {
  // Fetch data from the server, right now we simulate with local storage.
  fetch () {
    return new Promise((resolve) => {
      resolve(JSON.parse(window.localStorage.getItem('vue-todos') || '[]'))
    })
  }
}
