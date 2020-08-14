import React, { Component } from "react";
import styles from "./Block.module.css";

class Block extends Component {
  render() {
    let text = "";
    if (this.props.type === 1) {
      // Start Node
      text = "S";
    } else if (this.props.type === 2) {
      // End Node
      text = "E";
    } else if (this.props.type === 3) {
      // Visited Node
      text = "V";
    } else if (this.props.type === 4) {
      // Wall Node
      text = "W";
    } else if (this.props.type === 5) {
      // Path Node
      text = "P";
    }
    return (
      <div className={styles.block} ref={this.props.refers}>
        <label className={styles.inside_block}>{text}</label>
      </div>
      // <div className={styles.block} ref={this.props.references}></div>
    );
  }
}

export default Block;
