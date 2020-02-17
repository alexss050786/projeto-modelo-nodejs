'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//carrega os models
require('./models/models');

//carrega os routers
const routes = require('./routes/routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//routers
app.use(cors());
app.use('/', routes.index);
app.use('/route', routes.route);

module.exports = app;
