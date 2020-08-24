import React, { Component } from "react";

import styles from "./Dropdown.module.css";

// Down Arrow
import down from "../../../../assets/images/down-arrow.svg";

class Dropdown extends Component {
  // DefaultValue: Default selected value
  // this.props.children: If default value is none
  // Structure of list: listOfItems
  //  value {name: name of value to be displayed}
  render() {
    return (
      <div className={styles.dropdown}>
        <div className={styles.selectedValue}>
          {this.props.DefaultValue === null
            ? this.props.children
            : this.props.listOfItems[this.props.DefaultValue].name}
          <img className={styles.down_icon} src={down} alt="" />
        </div>
        <ul className={styles.drop}>
          {Object.keys(this.props.listOfItems).map((keyName, keyIndex) => (
            <li
              key={keyName}
              onClick={() => {
                this.props.onChangeHandler(keyName);
              }}
            >
              {this.props.listOfItems[keyName].name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Dropdown;
