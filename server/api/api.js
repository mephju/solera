const items = require('../data/items.db.js')


const api = server => {

  server.get('/api/products', (req, res) => {
    res.json({
      total: items.length,
      entries: items
    })
  })

}


module.exports = api