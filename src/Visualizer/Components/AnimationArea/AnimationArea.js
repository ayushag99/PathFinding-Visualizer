import React, { Component } from 'react'

import Matrix from './Matrix/Matrix'

class AnimationArea extends Component{
    render(){
        return(
            <div>
            <Matrix matrix = {this.props.matrix}/>
            </div>
        )
    }
}

export default AnimationArea;