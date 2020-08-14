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

const add_path = (refers, parent, start, end, sc, speed) => {
  let v = end;
  // console.log(v, parent[end["r"]][end["c"]], parent);
  // return;
  while (true) {
    let u = parent[v["r"]][v["c"]];
    if (u["r"] === start["r"] && u["c"] === start["c"]) {
      return;
    }
    console.log(sc*100)
    setTimeout(() => {
      refers[u["r"]][u["c"]].current.style.backgroundColor = "#2e2e2e";
    }, sc * speed);
    sc += 3;
    v = u;
  }
};

const bfs = (refers, matrix, start, end) => {
  let queue = [start];
  let parent = parent_mat(matrix.length, matrix[0].length);
  //Neighbours of any cell/block
  let nbr = [
    { rc: 1, cc: 0 },
    { rc: -1, cc: 0 },
    { rc: 0, cc: 1 },
    { rc: 0, cc: -1 },
  ];
  let speed = 20;
  let speed_count = 0;
  let last = { ...start };
  while (queue.length) {
    let u = queue.shift();
    for (let i = 0; i < 4; i++) {
      let r = u["r"] + nbr[i]["rc"];
      let c = u["c"] + nbr[i]["cc"];
      if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
        if (matrix[r][c] === 2) {
          // Found the end node
          parent[r][c] = { r: u["r"], c: u["c"] };
          add_path(refers, parent, start, end, speed_count, speed);
          setTimeout(() => {
            refers[last["r"]][last["c"]].current.style.backgroundColor =
              "#c7c7c7";
            refers[r][c].current.style.backgroundColor = "#2e2e2e";
            last["r"] = r;
            last["c"] = c;
          }, speed_count * speed);
          return;
        } else if (matrix[r][c] === 0) {
          // Visiting an unvisited node
          matrix[r][c] = 3;
          setTimeout(() => {
            refers[last["r"]][last["c"]].current.style.backgroundColor =
              "#c7c7c7";
            refers[r][c].current.style.backgroundColor = "#2e2e2e";
            last["r"] = r;
            last["c"] = c;
          }, speed_count * speed);
          speed_count += 1;
          parent[r][c] = { r: u["r"], c: u["c"] };
          queue.push({ r: r, c: c });
        }
      }
    }
  }
};

export default bfs;
