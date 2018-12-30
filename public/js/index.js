var socket = io(); //initiazing request

socket.on('connect', () => {
    console.log("connected to server");

    socket.emit('createEmail', {
        to: 'you@example.com',
        text: 'hey'
    })
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log("New email", email);
});
