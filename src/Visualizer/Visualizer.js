import React, { Component } from "react";

import Toolbar from "./Components/Toolbar/Toolbar";
import AnimationArea from "./Components/AnimationArea/AnimationArea";

class Visualizer extends Component {
  state = {
    nodes: [],
  };
  componentDidMount = () => {
    const cells = [];
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push([]);
      }
      cells.push(currentRow);
    }
    console.log(cells)
    this.setState({ nodes: cells });
  };
  render() {
    return (
      <div>
        <Toolbar />
        <AnimationArea matrix = {this.state.nodes}/>
      </div>
    );
  }
}

export default Visualizer;
