require('dotenv').config();
require('express-async-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const indexRouter = require('./routes/indexRouter');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.status(200).send('hellow express');
});

app.use('/api/v1', indexRouter);
app.use(errorHandler);

app.use(notFound);

app.use(errorHandler);
module.exports = app;
