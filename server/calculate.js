var fs = require('fs');
var wordsBulk = fs.readFileSync(__dirname + '/words', 'utf8');
var words = wordsBulk.split(/\r|\n|\f/);
var cache = {};
var map = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "o": 15,
  "p": 16,
  "q": 17,
  "r": 18,
  "s": 19,
  "t": 20,
  "u": 21,
  "v": 22,
  "w": 23,
  "x": 24,
  "y": 25,
  "z": 26,
};

function calculateValue(word){
  return [
    word,
    word.toLowerCase()
        .split('')
        .reduce(function(sum, ltr){ return sum + map[ltr]; }, 0)
  ];
}

function wordsValuedAt(val){
  return cache[val] ||
    (cache[val] = words
      .map(calculateValue)
      .filter(function(tuple){ return tuple[1] == val; })
      .map(function(tuple){ return tuple[0]; })
    );
}

module.exports = {
  value: wordsValuedAt
};
