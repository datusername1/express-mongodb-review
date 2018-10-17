const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error'));

connection.once('open', () => console.log('connect to mogodb'));

module.exports = connection;
