import React, { Component } from "react";
import styles from "./Matrix.module.css";

import Block from "./Block/Block";

class Matrix extends Component {
  render() {
    return (
      <div>
        <h1>Matrix</h1>
        <div className={styles.area}>
          {this.props.matrix.map((row, index1) => {
            return (
              <div className={styles.row} key={index1}>
                {row.map((block, index2) => (
                  <Block className={styles.block} key={`${index1}-${index2}`} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Matrix;
