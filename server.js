// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const config = require('./json-server.json')

const port = process.env.PORT || 3002

server.use(middlewares)
server.use(router)
server.listen(port || config.port, () => {
  console.log('JSON Server is running')
})