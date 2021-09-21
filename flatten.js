const flatten = function (array) {
  const output = [];
  const hasArray = arr => {
    for (const elm of arr) if (Array.isArray(elm)) return true;
  }

  for (const elm of array) { 
    if (Array.isArray(elm)) {
      for (const nstElm of elm) output.push(nstElm);
    } else {
    output.push(elm);
    }
  }
  return hasArray(output) ? flatten(output) : output;
};

module.exports = flatten;