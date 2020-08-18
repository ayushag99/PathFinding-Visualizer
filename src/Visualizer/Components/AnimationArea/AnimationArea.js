import React, { Component } from "react";

import Matrix from "./Matrix/Matrix";

class AnimationArea extends Component {
  render() {
    return (
      <div>
        <Matrix
          matrix={this.props.matrix}
          refers={this.props.refers}
          startNode={this.props.startNode}
          endNode={this.props.endNode}
          mouseDownHandler={this.props.mouseDownHandler}
          mouseUpHandler={this.props.mouseUpHandler}
          mouseEnterHandler={this.props.mouseEnterHandler}
        />
      </div>
    );
  }
}

export default AnimationArea;
