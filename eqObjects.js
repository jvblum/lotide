const eqArrays = require("./eqArrays");

const eqObjects = function(inObj1, inObj2) {
  const kz1 = Object.keys(inObj1);
  const kz2 = Object.keys(inObj2);

  if (kz1.length !== kz2.length) return false;
  if (!eqArrays(kz1.sort(), kz2.sort())) return false;

  for (const key in inObj1) {
    const kz1 = inObj1[key];
    const kz2 = inObj2[key];
    if (typeof kz1 === "object" && typeof kz2 === "object") {
      if (Array.isArray(kz1) && Array.isArray(kz2)) {
        if (!eqArrays(kz1, kz2)) return false;
      } else if (!eqObjects(kz1,kz2)) return false;
    } else if (kz1 !== kz2) return false;
  }
  return true;
};

module.exports = eqObjects;