import React, { Component } from "react";

import styles from "./Visualizer.module.css";

import Toolbar from "./Components/Toolbar/Toolbar";
import AnimationArea from "./Components/AnimationArea/AnimationArea";

// Path Finding Algorithm
import bfs from "./Path_finding_Algorithms/BFS";
import dfs from "./Path_finding_Algorithms/DFS";

// Maze Algorithms
import randomWallAlgo from "./Maze_Algorithms/RandomWall";

const algorithms = {
  bfs: { name: "Breadth-First Search", algo: bfs },
  dfs: { name: "Depth-First Search", algo: dfs },
};
const speeds = {
  5: { name: "Speed: Extremely Fast" },
  10: { name: "Speed: Fast" },
  20: { name: "Speed: Normal" },
  40: { name: "Speed: Slow" },
  80: { name: "Speed: Extremely Slow" },
};
const mazeALgos = {
  randomWall: {
    name: "Random Wall",
    algo: randomWallAlgo,
  },
};
class Visualizer extends Component {
  refers = [];
  state = {
    nodes: [],
    startNode: null,
    endNode: null,
    mouse: null,
    moving: null,
    algo: null,
    speed: 5,
  };
  componentDidMount = () => {
    const cells = [];
    const no_of_rows = Math.floor((window.innerHeight * 0.8) / 30);
    const no_of_cols = Math.floor((window.innerWidth * 0.98) / 30);
    for (let row = 0; row < no_of_rows; row++) {
      const currentRow = [];
      const currentRow_refers = [];
      for (let col = 0; col < no_of_cols; col++) {
        // currentRow.push(React.createRef());
        currentRow.push(0);
        currentRow_refers.push(React.createRef());
      }
      cells.push(currentRow);
      this.refers.push(currentRow_refers);
    }
    let startNode = {
      r: Math.floor(Math.random() * no_of_rows),
      c: Math.floor(Math.random() * no_of_cols),
    };
    let endNode = {
      r: Math.floor(Math.random() * no_of_rows),
      c: Math.floor(Math.random() * no_of_cols),
    };
    while (startNode["r"] === endNode["r"] && startNode["c"] === endNode["c"]) {
      endNode = {
        r: Math.floor(Math.random() * no_of_rows),
        c: Math.floor(Math.random() * no_of_cols),
      };
    }
    cells[startNode["r"]][startNode["c"]] = 1;
    cells[endNode["r"]][endNode["c"]] = 2;
    // console.log(startNode,endNode)

    this.setState({ nodes: cells, startNode, endNode });
  };

  //   HERE: Methods
  matrix_shallow_copy = (matrix) => {
    let new_mat = [];
    for (let i = 0; i < matrix.length; i++) {
      let new_arr = [...matrix[i]];
      new_mat.push(new_arr);
    }
    return new_mat;
  };

  //   HERE: Handlers
  VisualizerHandler = () => {
    this.resetHandler()
    if (this.state.algo) {
      let animations = algorithms[this.state.algo].algo(
        this.matrix_shallow_copy(this.state.nodes),
        this.state.startNode,
        this.state.endNode
      );
      console.log(animations);
      // Starting animation

      for (let i = 0; i < animations.length; i++) {
        setTimeout(() => {
          if (animations[i].status === "V") {
            this.refers[animations[i].r][animations[i].c].current.className =
              "node node-visited";
          } else if (animations[i].status === "P") {
            this.refers[animations[i].r][animations[i].c].current.className =
              "node node-path";
          }
        }, i * this.state.speed);
      }
    } else {
      this.setState(
        {
          msg: "Please Select an Algorithm",
        },
        () => {
          setTimeout(() => {
            this.setState({ msg: null });
          }, 2000);
        }
      );
    }
  };
  resetHandler = () => {
    for (let i = 0; i < this.refers.length; i++) {
      for (let j = 0; j < this.refers[0].length; j++) {
        if (
          this.state.nodes[i][j] === 0 ||
          this.state.nodes[i][j] === 1 ||
          this.state.nodes[i][j] === 2
        ) {
          this.refers[i][j].current.className = "node";
        }
      }
    }
  };
  resetBoard = () => {
    // cb = cb || null;
    this.resetHandler();
    let grid = this.matrix_shallow_copy(this.state.nodes);
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (!(grid[i][j] === 1 || grid[i][j] === 2)) {
          grid[i][j] = 0;
        }
      }
    }
    // if (cb) this.setState({ nodes: grid }, cb);
    this.setState({ nodes: grid });
  };
  onmouseDownHandler = (row, col) => {
    let grid = this.matrix_shallow_copy(this.state.nodes);
    // HERE: We toggle the wall node
    if (grid[row][col] === 0) {
      grid[row][col] = 4;
    } else if (grid[row][col] === 4) {
      grid[row][col] = 0;
      // HERE: We move the start or end node
    } else if (grid[row][col] === 1 || grid[row][col] === 2) {
      // Moving start Node
      this.setState({ mouse: 1, moving: [row, col] });
      return;
    }
    this.setState({ mouse: 1, nodes: grid }, () => {
      console.log("Mouse Down", row, col);
    });
  };
  onmouseUpHandler = (row, col) => {
    let end = { ...this.state.endNode };
    let start = { ...this.state.startNode };
    if (this.state.moving) {
      if (this.state.nodes[this.state.moving[0]][this.state.moving[1]] === 1) {
        // startNode
        start = { r: row, c: col };
      } else if (
        this.state.nodes[this.state.moving[0]][this.state.moving[1]] === 2
      ) {
        // endNode
        end = { r: row, c: col };
      }
    }
    this.setState(
      { mouse: 0, moving: null, startNode: start, endNode: end },
      () => {
        console.log("Mouse Up", row, col);
      }
    );
  };
  onmouseEnterHandler = (row, col) => {
    if (!this.state.mouse) return;
    let grid = this.matrix_shallow_copy(this.state.nodes);
    if (grid[row][col] === 1 || grid[row][col] === 2) return;
    if (this.state.moving) {
      grid[row][col] = grid[this.state.moving[0]][this.state.moving[1]];
      grid[this.state.moving[0]][this.state.moving[1]] = 0;
      this.setState({ nodes: grid, moving: [row, col] });
      return;
    }
    if (grid[row][col] === 0) {
      grid[row][col] = 4;
    } else if (grid[row][col] === 4) {
      grid[row][col] = 0;
    }
    this.setState({ nodes: grid }, () => {
      console.log("Mouse is already down", row, col);
    });
  };
  onAlgorithmChangeHandler = (algo) => {
    // alert(algo)
    this.setState({ algo });
  };
  onSpeedChangeHandler = (speed) => {
    this.setState({ speed });
  };
  onApplyingMazeAlgorithms = (algo) => {
    let grid = this.matrix_shallow_copy(this.state.nodes);
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (!(grid[i][j] === 1 || grid[i][j] === 2)) {
          grid[i][j] = 0;
        }
      }
    }
    mazeALgos[algo].algo(grid);
    this.setState({ nodes: grid });
  };
  render() {
    return (
      <div className={styles.visualizer}>
        <Toolbar
          visualizationHandler={this.VisualizerHandler}
          resetHandler={this.resetHandler}
          resetBoard={this.resetBoard}
          algorithm={this.state.algo}
          algorithms={algorithms}
          onAlgorithmChangeHandler={this.onAlgorithmChangeHandler}
          speeds={speeds}
          speed={this.state.speed}
          onSpeedChangeHandler={this.onSpeedChangeHandler}
          mazeAlgos={mazeALgos}
          onApplyingMazeAlgorithms={this.onApplyingMazeAlgorithms}
        />
        <p className={styles.msg}>
          {this.state.msg
            ? this.state.msg
            : "Select an algorithm and start Visualization!!"}
        </p>
        <AnimationArea
          matrix={this.state.nodes}
          startNode={this.state.startNode}
          endNode={this.state.endNode}
          refers={this.refers}
          mouseDownHandler={this.onmouseDownHandler}
          mouseUpHandler={this.onmouseUpHandler}
          mouseEnterHandler={this.onmouseEnterHandler}
        />
      </div>
    );
  }
}

export default Visualizer;
