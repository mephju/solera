const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const api = require('./api/api.js')

  const server = express()

  api(server) // attach api middlewares

  server.get('*', (req, res) => {
    console.log('no middleware found for', req.url)
    return handle(req, res)
  })

  server.listen(3001, (err) => {
    if(err) return exit(err)
    console.log('> Ready on http://localhost:3001')
  })

const exit = ex => {
  console.error(ex.stack)
  process.exit(1)
}