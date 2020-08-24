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

const add_path = (parent, start, end, animation) => {
  // initialize the 'v' with end node
  // in order to retrace/backtrack the path
  let v = end;
  // Add the first node of the bcaktrack to animation
  // with P(path node) status
  while (true) {
    animation.push({ ...v, status: "P" });
    // Fetch the parent of v node from parents matrix
    let u = parent[v["r"]][v["c"]];
    // If this is the start node
    if (u["r"] === start["r"] && u["c"] === start["c"]) {
      animation.push({ ...u, status: "P" });
      return;
    }

    // assign the node to v
    v = u;
  }
};

const dijkstras = (matrix, start, end) => {
  let animation = [];
  
};
