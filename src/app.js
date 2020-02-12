'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//carrega os models
require('./models/models');

//carrega os routers
const routes = require('./routes/routes');

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: false
  })
);

app.use(
  bodyParser.json({
    limit: '50mb'
  })
);

//routers
app.use(cors());
app.use('/', routes.index);
app.use('/route', routes.route);

module.exports = app;

//nodemon --inspect ./bin/server.js modo debug
//nodemon ./bin/server.js

//kill port
//sudo kill -9 $(sudo lsof -t -i:9001)
