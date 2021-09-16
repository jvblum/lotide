const takeUntil = function(array, callback) {
  const outArr = [];
  for (const elm of array) {
    if (callback(elm)) {
      break;
    }
    outArr.push(elm);
  }
  return outArr;
};

// test

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
