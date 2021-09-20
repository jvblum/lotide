const middle = function(a) { // takes array
  return a.length % 2 === 0 ? [a[a.length / 2 - 1], a[a.length / 2]] : [a[Math.floor(a.length / 2)]];
};

module.exports = middle;