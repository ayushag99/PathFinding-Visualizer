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
    }
    return (
      <div className={styles.block}>
        <label className={styles.inside_block}>{text}</label>
      </div>
      // <div className={styles.block} ref={this.props.references}></div>
    );
  }
}

export default Block;
