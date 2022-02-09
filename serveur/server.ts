const express = require('express'); 
const socket = require('socket.io');
const path = require('path')
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); 

//app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))

app.use(express.static('public')); 

console.log('Server is running');

const io = socket(server);

let message = '';

io.on('connection', (socket) => {

    console.log("New socket connection: " + socket.id)

    socket.on('message', (msg) => {
        console.log(msg)
        io.emit('message', msg);
    })
})