const express = require('express')
const helmet = require('helmet')

const server = express()

const actionRouter = require('./api/actionRouter')
const projectRouter = require('./api/projectRouter')

server.use(express.json())
server.use(helmet())

server.get('/', (req, res) => {
  res.send(`<h2>Welcome Carlton!</h2>`)
})

server.use('/api/projects', projectRouter)

module.exports = server;