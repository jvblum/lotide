const eqArrays = function(array1, array2) {
  let mismatch;
  for (let i = 0; i <= array1.length; i++) { // "<=" for cases when array1[i] is equal to array2[i] within array1.length, but array1.length !== array2.length
    if (array1[i] !== array2[i]) {
      // console.log("mismatch!", array1[i], "?==", array2[i]);
      mismatch = true;
      break;
    }
  }
  return mismatch ? false : true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed✅`);
  } else {
    console.log(`Assertion Failed🔴`);
  }
};

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

// test
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])