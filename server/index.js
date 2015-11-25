var config = require('./config');
var express = require('express');
var app = express();

require('./routes')(app);

var server = app.listen(config.port);
