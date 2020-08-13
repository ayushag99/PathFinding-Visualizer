import React, { Component } from "react";

class Toolbar extends Component {
  render() {
    return <button onClick={this.props.onClickHandler}>Visualize</button>;
  }
}
export default Toolbar;
