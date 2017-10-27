const express = require('express')
const next    = require('next')
const proxy = require('http-proxy-middleware')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, quiet: true })
const handle = app.getRequestHandler()


const proxyConfig = {
  proxyReqOptDecorator(reqOpts, srcReq) {
    reqOpts.headers['x-forwarded-for'] = srcReq.connection.remoteAddress
    return reqOpts
  },
  proxyReqPathResolver(req) {
    return '/api' + url.parse(req.url).path
  }
}

app.prepare().then(() => {
  const server = express()


  server.use('/api', proxy('http://localhost:3001', proxyConfig))

  server.get('/items', (req, res) => {
    console.log('nothing happening')
    app.render(req, res, '/items', {items: [1,2,3,4, 'stuff']})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})