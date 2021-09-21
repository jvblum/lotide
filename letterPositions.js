const letterPositions = function(inStr) {
  const letPos = {};

  inStr.split("").forEach((chr, idx) => {
    if (chr !== " ") {
      if (!letPos[chr]) letPos[chr] = [];
      letPos[chr].push(idx);
    }
  });

  return letPos;
};

module.exports = letterPositions;