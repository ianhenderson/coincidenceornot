var c = require('./calculate');

function getValue(req, res, next) {
  var val = req.params.value;
  console.time('calculating val=' + val);
  var words = c.value(val);
  console.timeEnd('calculating val=' + val);
  res.send(words);
}

module.exports = {
  getValue: getValue
};
