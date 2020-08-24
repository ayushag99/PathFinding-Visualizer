import React, { Component } from "react";

import styles from "./Dropdown.module.css";

// Down Arrow
import down from "../../../../assets/images/down-arrow.svg";

class Dropdown extends Component {
  // DefaultValue: Default selected value
  // this.props.children: If default value is none
  // Structure of list: listOfItems
  //  value {name: name of value to be displayed}

  state = {
    value: null,
  };
  updateFunction = (value) => {
    console.log(value)
    if (this.props.stateFull) {
      this.setState({ value }, () => {
        this.props.onChangeHandler(this.state.value)});
    } else {
      this.props.onChangeHandler(value);
    }
  };

  render() {
    return (
      <div className={styles.dropdown}>
        <div className={styles.selectedValue}>
          {this.props.stateFull
            ? this.state.value
              ? this.props.listOfItems[this.state.value].name
              : this.props.children
            : this.props.DefaultValue
            ? this.props.listOfItems[this.props.DefaultValue].name
            : this.props.children}
          <img className={styles.down_icon} src={down} alt="" />
        </div>
        <ul className={styles.drop}>
          {Object.keys(this.props.listOfItems).map((keyName, keyIndex) => (
            <li
              key={keyName}
              onClick={() => {
                this.updateFunction(keyName);
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
