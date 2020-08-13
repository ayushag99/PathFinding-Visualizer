import React, { Component } from "react";

import styles from './Toolbar.module.css'

class Toolbar extends Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <button onClick={this.props.visualizationHandler}>Visualize</button>
        <button onClick={this.props.resetHandler}>Reset</button>
      </div>
    );
  }
}
export default Toolbar;
