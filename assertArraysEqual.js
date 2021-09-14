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

// test

assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); 