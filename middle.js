const middle = function(inArr) {
  const outArr = [];

  if (inArr.length % 2 === 0) {
    outArr.push(inArr[inArr.length / 2 - 1], inArr[inArr.length / 2]);
  }  else {
    outArr.push(inArr[Math.floor(inArr.length / 2)]);
  }

  return outArr;
};

// test

// console.log(middle([1, 2, 3, 4 ,5]));
// console.log(middle([1, 2, 3, 4 ,5, 6, 7, 8]));
console.log(middle([
  1,  2, 3,  4,  5,  6,
  7,  8, 9, 10, 11, 12,
 13, 14
]));
console.log(middle([
  1,  2,  3,  4,  5,  6,  7,  8,  9,
 10, 11, 12, 13, 14, 15, 16, 17, 18,
 19, 20, 21, 22, 23, 24, 25, 26, 27,
 28, 29, 30, 31
]));