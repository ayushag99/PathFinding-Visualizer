import React, { Component } from "react";

import styles from "./Visualizer.module.css";

import Toolbar from "./Components/Toolbar/Toolbar";
import AnimationArea from "./Components/AnimationArea/AnimationArea";

class Visualizer extends Component {
  state = {
    nodes: [],
    startNode: null,
    endNode: null,
  };
  componentDidMount = () => {
    const cells = [];
    const no_of_rows = 20;
    const no_of_cols = 40;
    for (let row = 0; row < no_of_rows; row++) {
      const currentRow = [];
      for (let col = 0; col < no_of_cols; col++) {
        // currentRow.push(React.createRef());
        currentRow.push(0);
      }
      cells.push(currentRow);
    }
    let startNode = {
      x: Math.floor(Math.random() * no_of_rows),
      y: Math.floor(Math.random() * no_of_cols),
    };
    let endNode = {
      x: Math.floor(Math.random() * no_of_rows),
      y: Math.floor(Math.random() * no_of_cols),
    };
    while (startNode["x"] === endNode["x"] && startNode["y"] === endNode["y"]) {
      endNode = {
        x: Math.floor(Math.random() * no_of_rows),
        y: Math.floor(Math.random() * no_of_cols),
      };
    }
    cells[startNode["x"]][startNode["y"]] = 1;
    cells[endNode["x"]][endNode["y"]] = 2;
    this.setState({ nodes: cells, startNode, endNode });
  };
  render() {
    return (
      <div className={styles.visualizer}>
        <Toolbar />
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
