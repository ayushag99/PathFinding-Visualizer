import React, { Component } from "react";

import styles from "./Toolbar.module.css";

import Dropdown from "./Dropdown/Dropdown";

class Toolbar extends Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <h1 className={styles.heading}>Path Finding Visualizer</h1>
        <div className={styles.controls}>
          <Dropdown
            listOfItems={this.props.algorithms}
            onChangeHandler={this.props.onAlgorithmChangeHandler}
            DefaultValue={this.props.algorithm}
          >
            Select Algorithm
          </Dropdown>


          <button
            onClick={this.props.visualizationHandler}
            className={styles.visualize}
          >
            Visualize
          </button>

          <button onClick={this.props.resetHandler} className={styles.button}>
            Reset
          </button>
          <button onClick={this.props.resetBoard} className={styles.button}>
            Reset Board
          </button>
        </div>
      </div>
    );
  }
}
export default Toolbar;
