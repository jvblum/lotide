const eqObjects = require("../eqObjects");

// test

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// // test2

const cd = { c: { d: ["2", [3]], c: "1" }, d: ["2", 3] };
const dc = { d: ["2", 3], c: { d: ["2", [3]], c: "1" } };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// // test 3

// const Obj1 = {a: 1, b: 2, c: null};
// const Obj2 = {cr: "a", b: 2, c: null};
// console.log(eqObjects(Obj1, Obj2));