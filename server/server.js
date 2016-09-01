var express = require('express')
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server)

server.listen(3000);

var id = 3
io.on('connection', function (socket) {
    socket.emit('chat', { id: 1, user:"Kedar", msg: "hello" })
    socket.emit('chat', { id: 2, user:"Dan", msg: "goodbye" })

    socket.on('chat', function (chat) {
        chat.id = id
        id++
        io.emit('chat', chat)
    })
})
