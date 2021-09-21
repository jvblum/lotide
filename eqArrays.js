const eqArrays = function (inArr1, inArr2) {
  if (inArr1.length !== inArr2.length) return false;
  
  for (let i = 0; i < inArr1.length; i++) {
    const kz1 = inArr1[i];
    const kz2 = inArr2[i]; 
    if (Array.isArray(kz1) && Array.isArray(kz2)) {
      if(!eqArrays(kz1, kz2)) return false;
    } else if (kz1 !==  kz2) return false;
  }
  
  return true;
};
module.exports = eqArrays;