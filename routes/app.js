const express = require('express');
const app = express();
const db = require('../config/mongoConnection');

const TodoController = require('../controllers/TodoController');
app.use('/todos', TodoController);

module.exports = app;