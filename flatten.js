const flatten = function (array) {
  let output = [];
  for (let item of array) { 
    if (Array.isArray(item)) {
      for (let nestItem of item) {
        output.push(nestItem);
      }
    } else {
    output.push(item);
    }
  }
  return output;
};

module.exports = flatten;