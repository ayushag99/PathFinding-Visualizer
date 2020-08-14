import React, { Component } from "react";

import styles from "./Visualizer.module.css";

import Toolbar from "./Components/Toolbar/Toolbar";
import AnimationArea from "./Components/AnimationArea/AnimationArea";

import bfs from "./Algorithms/BFS";

class Visualizer extends Component {
    refers = []
  state = {
    nodes: [],
    startNode: null,
    endNode: null,
  };
  componentDidMount = () => {
    const cells = [];
    const no_of_rows = 25;
    const no_of_cols = 50;
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
    bfs(
      this.refers,
      this.matrix_shallow_copy(this.state.nodes),
      this.state.startNode,
      this.state.endNode
    );
  };

  resetHandler = () => {
    for(let i=0; i<this.refers.length;i++){
        for(let j=0; j<this.refers[0].length;j++){
            this.refers[i][j].current.style.background = "None";
        }
    }
  };

  render() {
    return (
      <div className={styles.visualizer}>
        <Toolbar
          visualizationHandler={this.VisualizerHandler}
          resetHandler={this.resetHandler}
        />
        <AnimationArea
          matrix={this.state.nodes}
          startNode={this.state.startNode}
          endNode={this.state.endNode}
          refers={this.refers}
        />
      </div>
    );
  }
}

export default Visualizer;
