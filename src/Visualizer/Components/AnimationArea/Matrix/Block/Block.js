import React, { Component } from 'react'
import styles from './Block.module.css'

class Block extends Component{
    render(){
        return(
            <div className={styles.block}></div>
        )
    }
}

export default Block;