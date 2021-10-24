// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const config = require('./json-server.json')

server.use(middlewares)
server.use(router)
server.listen(config.port, () => {
  console.log('JSON Server is running')
})