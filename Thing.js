const getEmpty = function() {
  return {};
};

// multi-line
const fall = function(time) {
  let pos = 0;
  let velocity = 0;
  const g = 9.8;
  for (let i = 0; i < time; i++) {
    velocity += g;
    pos += velocity;
  }
  return pos;
};

// no args
var rand = function() {
  return Math.random();
};

module.exports = { getEmpty, fall, rand };
