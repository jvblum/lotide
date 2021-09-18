const eqArrays = function (inArr1, inArr2) {
  if (inArr1.length !== inArr2.length) {
    return false;
  }
  
  for (let i = 0; i < inArr1.length; i++) {
    const kz1 = inArr1[i];
    const kz2 = inArr2[i]; 
    if (Array.isArray(kz1) && Array.isArray(kz2)) {
      if(!eqArrays(kz1, kz2)) {
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

const eqObjects = function(inObj1, inObj2) {
  const kz1 = Object.keys(inObj1);
  const kz2 = Object.keys(inObj2);

  if (kz1.length !== kz2.length) {
    return false;
  }

  if (!eqArrays(kz1.sort(), kz2.sort())) {
    return false
  }

  for (const key in inObj1) {
    const kz1 = inObj1[key];
    const kz2 = inObj2[key];
    if (typeof kz1 === "object" && typeof kz2 === "object") {
      if (Array.isArray(kz1) && Array.isArray(kz2)) {
        if (!eqArrays(kz1, kz2)) {
          return false;
        }
      } else if (!eqObjects(kz1,kz2)) {
          return false;
      }
    } else {
      if (kz1 !== kz2) {
        console.log("mismatch!")
        return false;
      }
    }
  }
  return true;
};

// // test

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// // test2

const cd = { c: { d: ["2", 3], c: "1" }, d: ["2", 3] };
const dc = { d: ["2", 3], c: { d: ["2", 3], c: "1" } };
console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// // test 3

// const Obj1 = {a: 1, b: 2, c: null};
// const Obj2 = {cr: "a", b: 2, c: null};
// console.log(eqObjects(Obj1, Obj2));