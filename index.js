var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var server = express()
var port = 3000
var routes = require('./server-assets/routes')

var connectionString = "mongodb://hangman:hangman@ds157677.mlab.com:57677/hangman-database"
var connection = mongoose.connection

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true}))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))
server.use(routes.router)


mongoose.connect(connectionString, {
  server: { socketOptions: {keepAlive: 30000, connectTimeoutMS: 30000}}
})


connection.on('error', function(err){
  console.warn('There was problem connecting to the server', err)
})

connection.once('open', function(){
  server.listen(port, function(){
    console.log('The server is connected on', 'http://localhost:' + port)
  })
})


