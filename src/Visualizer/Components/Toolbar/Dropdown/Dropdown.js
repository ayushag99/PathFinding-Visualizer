import React, { Component } from "react";

import styles from "./Dropdown.module.css";

class Dropdown extends Component {
  //   state = {
  // value: null,
  //   };
  //   selectionHandler = (value) => {
  //   this.setState({value}, ()=>{})
  //   };
  render() {
    return (
      <div className={styles.dropdown}>
        <div className={styles.selectedValue}>
          {this.props.currentAlgo === null
            ? "Select a value"
            : this.props.algorithms[this.props.currentAlgo].name}
        </div>
        <ul className={styles.drop}>
          {Object.keys(this.props.algorithms).map((keyName, keyIndex) => (
            <li
              onClick={() => {
                this.props.onChangeHandler(keyName);
              }}
            >
              {this.props.algorithms[keyName].name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Dropdown;
