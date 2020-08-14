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

const add_path = (refers, matrix, parent, start, end) => {
  let v = end;
  while (true) {
    let u = parent[v["r"]][v["c"]];
    if (u["r"] === start["r"] && u["c"] === start["c"]) {
      return matrix;
    }
    matrix[u["r"]][u["c"]] = 5;
    refers[u["r"]][u["c"]].current.style.backgroundColor = "#2e2e2e";
    v = u;
  }
};

const bfs = (refers, matrix, start, end) => {
  let queue = [start];
  let parent = parent_mat(matrix.length, matrix[0].length);
  //Neighbours of any cell/block
  let nbr = [
    { rc: 1, cc: 0 },
    { rc: 0, cc: 1 },
    { rc: -1, cc: 0 },
    { rc: 0, cc: -1 },
  ];
  while (queue.length) {
    let u = queue.shift();
    console.log(u, queue);
    for (let i = 0; i < 4; i++) {
      let r = u["r"] + nbr[i]["rc"];
      let c = u["c"] + nbr[i]["cc"];
      if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
        if (matrix[r][c] === 2) {
          // add_path(refers, matrix, parent, start, end);
          return;
        }
        if (matrix[r][c] === 0) {
          matrix[r][c] = 3;
          refers[r][c].current.style.backgroundColor = "#c7c7c7";
          parent[r][c] = { r: u["r"], c: u["c"] };
          queue.push({ r: r, c: c });
        }
      }
    }
  }
};

export default bfs;
