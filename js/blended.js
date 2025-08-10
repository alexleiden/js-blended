function getExtremeScores(scores) {
   return {
    best: Math.max(...scores),
    worst: Math.min(...scores)
  };
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));  // { best: 93, worst: 17 }
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));  // { best: 81, worst: 4 }

