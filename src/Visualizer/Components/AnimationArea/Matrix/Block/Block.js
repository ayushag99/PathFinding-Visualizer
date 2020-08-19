import React, { Component } from "react";
import styles from "./Block.module.css";

// Importing the mark images
import play from "../../../../../assets/images/play.svg";
import pin from "../../../../../assets/images/pin.svg";

class Block extends Component {
  preventDragHandler = (e) => {
    e.preventDefault();
  };
  render() {
    let text = "";
    let additional = {};
    if (this.props.type === 1) {
      // Start Node
      text = (
        <img
          className={styles.mark}
          src={play}
          alt=""
          ondragstart={() => false}
          onDragStart={this.preventDragHandler}
        />
      );
    } else if (this.props.type === 2) {
      // End Node
      text = (
        <img
          className={styles.mark}
          src={pin}
          alt=""
          onDragStart={this.preventDragHandler}
        />
      );
    } else if (this.props.type === 3) {
      // Visited Node
      text = "V";
    } else if (this.props.type === 4) {
      // Wall Node

      additional = { backgroundColor: "#6f6f6f" };
    } else if (this.props.type === 5) {
      // Path Node
      text = "P";
    }
    return (
      <div
        className={styles.block}
        style={additional}
        ref={this.props.refers}
        onMouseDown={() =>
          this.props.mouseDownHandler(this.props.row, this.props.col)
        }
        onMouseEnter={() =>
          this.props.mouseEnterHandler(this.props.row, this.props.col)
        }
        onMouseUp={() =>
          this.props.mouseUpHandler(this.props.row, this.props.col)
        }
      >
        {text}
      </div>
      // <div className={styles.block} ref={this.props.references}></div>
    );
  }
}

export default Block;
