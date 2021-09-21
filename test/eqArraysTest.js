const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
console.log(eqArrays([1, 2, [3], [4, 5, [6, [7]]]], [1, 2, [3], [4, 5, [6, [7, 8]]]])); // => false

assertEqual(eqArrays([1, 2, [3], [4, 5, [6, [7, 8]]]], [1, 2, [3], [4, 5, [6, [7, 8]]]]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

// assertEqual(eqArrays([1, 2, [3], [4, 5, [6, [7, 8]]]], [1, 2, [3], [4, 5, [6, [7, 8]]]]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);