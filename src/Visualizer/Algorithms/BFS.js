const parent_mat = (no_of_rows, no_of_cols) => {
  let cells = [];
  for (let row = 0; row < no_of_rows; row++) {
    const currentRow = [];
    for (let col = 0; col < no_of_cols; col++) {
      // currentRow.push(React.createRef());
      currentRow.push(0);
    }
    cells.push(currentRow);
  }
  return cells;
};

const add_path = (matrix, parent, start, end) => {
  let v = end;
  while (true) {
    let u = parent[v["r"]][v["c"]];
    if (u["r"] === start["r"] && u["c"] === start["c"]) {
      return matrix;
    }
    matrix[u["r"]][u["c"]] = 5;
    v = u;
  }
};

const bfs = (matrix, start, end) => {
  let queue = [start];
  let parent = parent_mat(matrix.length, matrix[0].length);
  matrix[end["r"]][end["c"]] = 0;
  while (queue) {
    let u = queue.shift();
    console.log(u, queue);
    if (u["r"] === end["r"] && u["c"] === end["c"]) {
      matrix[end["r"]][end["c"]] = 2;
      add_path(matrix, parent, start, end);
      return matrix;
    }
    if (
      u["r"] + 1 >= 0 &&
      u["r"] + 1 < matrix.length &&
      !matrix[u["r"] + 1][u["c"]]
    ) {
      matrix[u["r"] + 1][u["c"]] = 3;
      parent[u["r"] + 1][u["c"]] = { r: u["r"], c: u["c"] };
      queue.push({ r: u["r"] + 1, c: u["c"] });
    }
    if (
      u["r"] - 1 >= 0 &&
      u["r"] - 1 < matrix.length &&
      !matrix[u["r"] - 1][u["c"]]
    ) {
      matrix[u["r"] - 1][u["c"]] = 3;
      parent[u["r"] - 1][u["c"]] = { r: u["r"], c: u["c"] };
      queue.push({ r: u["r"] - 1, c: u["c"] });
    }
    if (
      u["c"] + 1 >= 0 &&
      u["c"] + 1 < matrix[0].length &&
      !matrix[u["r"]][u["c"] + 1]
    ) {
      matrix[u["r"]][u["c"] + 1] = 3;
      parent[u["r"]][u["c"] + 1] = { r: u["r"], c: u["c"] };
      queue.push({ r: u["r"], c: u["c"] + 1 });
    }
    if (
      u["c"] - 1 >= 0 &&
      u["c"] - 1 < matrix[0].length &&
      !matrix[u["r"]][u["c"] - 1]
    ) {
      matrix[u["r"]][u["c"] - 1] = 3;
      parent[u["r"]][u["c"] - 1] = { r: u["r"], c: u["c"] };
      queue.push({ r: u["r"], c: u["c"] - 1 });
    }
  }
};

export default bfs;
