import React, { Component } from "react";
import "./Block.css";

// Importing the mark images
import play from "../../../../../assets/images/play.svg";
import pin from "../../../../../assets/images/pin.svg";

class Block extends Component {
  preventDragHandler = (e) => {
    e.preventDefault();
  };
  render() {
    let content = "";
    let classValue = "node";

    if (this.props.type === 1) {
      // Start Node
      content = (
        <img
          className="mark"
          src={play}
          alt=""
          onDragStart={this.preventDragHandler}
        />
      );
    } else if (this.props.type === 2) {
      // End Node
      content = (
        <img
          className="mark"
          src={pin}
          alt=""
          onDragStart={this.preventDragHandler}
        />
      );
    } else if (this.props.type === 3) {
      // Visited Node
      // text = "V";
    } else if (this.props.type === 4) {
      // Wall Node

      classValue = "node node-wall";
    } else if (this.props.type === 5) {
      // Path Node
      // text = "P";
    }
    return (
      <div
        className={classValue}
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
        {content}
      </div>
      // <div className={styles.block} ref={this.props.references}></div>
    );
  }
}

export default Block;
