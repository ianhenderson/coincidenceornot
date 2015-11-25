var express = require('express');
var router = express.Router();
var ctrl = require('./ctrl');

router.route('/words/:value')
  .get(ctrl.getValue);

module.exports = function(app){
  app.use(express.static(__dirname + '/../client'));
  app.use('/api', router);
};
