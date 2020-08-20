import React, { Component } from "react";

import styles from "./Toolbar.module.css";

class Toolbar extends Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <h1 className={styles.heading}>Path Finding Visualizer</h1>
        <button onClick={this.props.visualizationHandler}>Visualize</button>
        <button onClick={this.props.resetHandler}>Reset</button>
        <button onClick={this.props.resetBoard}>Reset Board</button>
        <select
          name=""
          id=""
          value={this.props.algorithm}
          onChange={this.props.onAlgorithmChangeHandler}
        >
          <option value="bfs">Breadth First Search</option>
          <option value="dfs">Depth First Search</option>
        </select>
      </div>
    );
  }
}
export default Toolbar;
