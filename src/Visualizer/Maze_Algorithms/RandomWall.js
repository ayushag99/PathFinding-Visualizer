const RandomWallAlgo = (matrix) => {
  console.log("Check");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (Math.round(Math.random() * 0.66) === 1) {
          matrix[i][j] = 4;
        }
      }
    }
  }
  return matrix;
};
export default RandomWallAlgo;
