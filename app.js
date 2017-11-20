const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')

const port = parseInt(process.env.PORT, 10) || 9000;

const server = http.createServer(app);
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'build')))

// app.use(logger('dev'))
app.use((req, res, next) => {
  res.io = io
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next();
});

require('./server/routes')(app);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});


// io.on('connection', function(socket){
//   socket.emit('updateLeader', 'yeah')
// });


server.listen(port);