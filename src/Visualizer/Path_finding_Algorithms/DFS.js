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

const bfs = (matrix, start, end) => {
  let animation = [];
  let stack = [start];
  let parent = parent_mat(matrix.length, matrix[0].length);
  // This has the operation to be performed to reach neighboring nodes
  let nbr = [
    { rc: 1, cc: 0 },
    { rc: -1, cc: 0 },
    { rc: 0, cc: 1 },
    { rc: 0, cc: -1 },
  ];

  while (stack.length) {
    // Extract the first element of the queue
    let u = stack.pop();
    for (let i = 0; i < 4; i++) {
      // r and c will be the cordinates of the new nodes being explored
      let r = u["r"] + nbr[i]["rc"];
      let c = u["c"] + nbr[i]["cc"];
      if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
        if (matrix[r][c] === 0) {
          // If the node is unvisited
          // Set the node as visited
          matrix[r][c] = 3;
          // Push the node in the animation
          animation.push({ r: r, c: c, status: "V" });
          // Set its parent node to retrace the path
          parent[r][c] = { r: u["r"], c: u["c"] };
          // Push it in the queue as per BFS algo
          stack.push({ r: r, c: c });
        } else if (matrix[r][c] === 2) {
          // If this is the end node
          // Then we first push in the animation array
          animation.push({ r: r, c: c, status: "V" });
          // Set its parent node to retrace the path
          parent[r][c] = { r: u["r"], c: u["c"] };
          // Then sends the control to the add_path function  which
          // Analyzes the shortest path and adds it to the animation array
          add_path(parent, start, end, animation);
          // return the animation array back
          return animation;
        }
      }
    }
  }
  return animation;
};

export default bfs;
