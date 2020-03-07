let {pictures} = require('./pix.json')

module.exports = {
  exportPathMap: async function() {
    let paths = {
      '/': {page: '/'},
    }

    for (let i = 0; i < pictures.length; i++) {
      let picture = pictures[i]
      let id = i + 1
      paths[`/picture/${id}`] = {
        page: '/picture/[id]',
        query: {
          id,
          picture,
          next: (i < pictures.length - 1) ? id + 1 : null,
          previous: i > 0 ? id - 1 : null
        }
      }
    }

    return paths
  }
}