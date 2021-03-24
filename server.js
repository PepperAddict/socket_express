var express = require('express')
var http = require('http')
var app = express()
var server = http.createServer(app)
var io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})
io.on('connection', function (socket) {
    socket.emit('request',/* */)
    socket.on('message', function(msg) {
        console.log('message', msg)
        socket.emit('received', msg)
    })
})

app.get('/', function (req, res) {
    res.send('Hello wonderful people! You are all beautiful.')
})

server.listen(3001)

const port = process.env.PORT || 3000
app.listen(port, () => console.log('listening on port 3000'))