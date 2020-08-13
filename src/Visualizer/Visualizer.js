import React, { Component } from "react";

import styles from "./Visualizer.module.css";

import Toolbar from "./Components/Toolbar/Toolbar";
import AnimationArea from "./Components/AnimationArea/AnimationArea";

import bfs from "./Algorithms/BFS";

class Visualizer extends Component {
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
      for (let col = 0; col < no_of_cols; col++) {
        // currentRow.push(React.createRef());
        currentRow.push(0);
      }
      cells.push(currentRow);
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

  VisualizerHandler = () => {
    const new_matrix = bfs(
      this.state.nodes,
      this.state.startNode,
      this.state.endNode
    );
    this.setState({ nodes: new_matrix });
  };

  render() {
    return (
      <div className={styles.visualizer}>
        <Toolbar onClickHandler = {this.VisualizerHandler}/>
        <AnimationArea
          matrix={this.state.nodes}
          startNode={this.state.startNode}
          endNode={this.state.endNode}
        />
      </div>
    );
  }
}

export default Visualizer;
