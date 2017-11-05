const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

app.use('/', express.static(path.join(__dirname, '/../www'))); //serves the index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../www/index.html'));
// })
app.use('/assets', express.static(path.join(__dirname, '/../assets' )));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//require controllers
const messageController = require('./messageController');

// connect to db
mongoose.connect('mongodb://scott:123@ds149974.mlab.com:49974/crud', {
  useMongoClient: true
});
mongoose.connection.once('open', () => {
   console.log('...Connected to Database');
});

// file routes

// app.get('/views/jquery.js', (req, res) => {
//     res.sendfile(path.join(__dirname + '/../jquery.js'));
// })
// app.get('/assets/style.css', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../assets/style.css'));
// })

// controller routes
app.get('/api/getAllMessages', messageController.getAllMessages);
app.post('/api/createMessage', messageController.createMessage);
app.post('/api/getMessage/:id', messageController.getMessage);
app.put('/api/updateMessage/:id', messageController.updateMessage);
app.post('/api/deleteMessage', messageController.deleteMessage);


const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('server is working at:', host, port);
});

console.log(__dirname)