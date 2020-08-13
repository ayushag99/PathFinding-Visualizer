const bfs = (matrix, start, end) => {
  let queue = [start];
  matrix[end["r"]][end["c"]] = 0;
  while (queue) {
    let u = queue.shift();
    console.log(u, queue);
    if (u["r"] === end["r"] && u["c"] === end["c"]) {
        matrix[end["r"]][end["c"]] = 2;
      return matrix;
    }
    if (
      u["r"] + 1 >= 0 &&
      u["r"] + 1 < matrix.length &&
      !matrix[u["r"] + 1][u["c"]]
    ) {
      matrix[u["r"] + 1][u["c"]] = 3;
      queue.push({ r: u["r"] + 1, c: u["c"] });
    }
    if (
      u["r"] - 1 >= 0 &&
      u["r"] - 1 < matrix.length &&
      !matrix[u["r"] - 1][u["c"]]
    ) {
      matrix[u["r"] - 1][u["c"]] = 3;
      queue.push({ r: u["r"] - 1, c: u["c"] });
    }
    if (
      u["c"] + 1 >= 0 &&
      u["c"] + 1 < matrix[0].length &&
      !matrix[u["r"]][u["c"] + 1]
    ) {
      matrix[u["r"]][u["c"] + 1] = 3;
      queue.push({ r: u["r"], c: u["c"] + 1 });
    }
    if (
      u["c"] - 1 >= 0 &&
      u["c"] - 1 < matrix[0].length &&
      !matrix[u["r"]][u["c"] - 1]
    ) {
      matrix[u["r"]][u["c"] - 1] = 3;
      queue.push({ r: u["r"], c: u["c"] - 1 });
    }
  }
};

export default bfs;
