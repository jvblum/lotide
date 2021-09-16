const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 3, 7, 13, 21, 31, 43, 57];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num * 2);
console.log(results1);
console.log(results2);

console.log(map(numbers, num => num % 6));
console.log(map(words, word => word.split("").reverse().join("")));


