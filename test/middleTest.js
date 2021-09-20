const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

console.log(middle([1, 2, 3, 4 ,5])); // -> [3]
console.log(middle([1, 2, 3, 4 ,5, 6, 7, 8])); // -> [4, 5]
console.log(middle([
  1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12,
 13, 14
])); // -> [7, 8]
console.log(middle([
  1, 2, 3, 4, 5, 6, 7, 8, 9,
 10, 11, 12, 13, 14, 15, 16, 17, 18,
 19, 20, 21, 22, 23, 24, 25, 26, 27,
 28, 29, 30, 31
])); // -> [16]
console.log(middle("everybody".split(""))); // -> ["y"]
console.log(middle("everyone".split(""))); // -> ["r", "y"]

assertArraysEqual(middle("gestern".split("")), ["t"]); // -> pass
assertArraysEqual(middle("pflanzen".split("")), ["a", "n"]); // -> pass