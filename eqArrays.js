// const { arrayBuffer } = require("stream/consumers");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed🔴: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (inArr1, inArr2) {
  if (inArr1.length !== inArr2.length) {
    return false;
  }
  
  for (let i = 0; i < inArr1.length; i++) {
    const kz1 = inArr1[i];
    const kz2 = inArr2[i]; 
    if (Array.isArray(kz1) && Array.isArray(kz2)) {
      if (!eqArrays(kz1, kz2)) {
        return false;
      }
    } else {
      if (kz1 !==  kz2) {
        return false;
      }
    }
  }
  return true;
};

// const eqArrays = function(array1, array2) {
//   let mismatch;
//   for (let i = 0; i <= array1.length; i++) { // "<=" for cases when array1[i] is equal to array2[i] within array1.length, but array1.length !== array2.length
//     if (array1[i] !== array2[i]) {
//       // console.log("mismatch!", array1[i], "?==", array2[i]);
//       mismatch = true;
//       break;
//     }
//   }
//   return mismatch ? false : true;
// };

// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
console.log(eqArrays([1, 2, [3], [4, 5, [6, [7]]]], [1, 2, [3], [4, 5, [6, [7, 8]]]])); // => false

// assertEqual(eqArrays([1, 2, [3], [4, 5, [6, [7, 8]]]], [1, 2, [3], [4, 5, [6, [7, 8]]]]), true);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);