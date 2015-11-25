var express = require('express');
var router = express.Router();
var ctrl = require('./ctrl');

router.route('/words/:value')
  .get(ctrl.getValue);

module.exports = function(app){
  app.use('/api', router);
};
