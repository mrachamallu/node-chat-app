const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

console.log(publicPath);
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello Express!</h1>');
//     res.send({
//         name: 'Meera',
//         likes: [
//             'biking',
//             'eatings'
//         ]
//     });
// });

//listens for new connection
io.on('connection', (socket) => {
    console.log('new user connected');
    socket.on('disconnect', () => {
        console.log('disconnected');
    })
    socket.on('connect', () => {
        console.log('connected');
    })
});

//web sockets are persistent. client and server are always open
server.listen(port, () => {
    console.log(`server is up on ${port}`);
});