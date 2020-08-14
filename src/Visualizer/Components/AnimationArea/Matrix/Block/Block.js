import React, { Component } from "react";
import styles from "./Block.module.css";

// Importing the mark images
import play from "../../../../../assets/images/play.svg";
import pin from "../../../../../assets/images/pin.svg";

class Block extends Component {
  render() {
    let text = "";
    if (this.props.type === 1) {
      // Start Node
      text = <img class={styles.mark} src={play} alt="" />;
    } else if (this.props.type === 2) {
      // End Node
      text = <img class={styles.mark} src={pin} alt="" />;
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
        {text}
      </div>
      // <div className={styles.block} ref={this.props.references}></div>
    );
  }
}

export default Block;
