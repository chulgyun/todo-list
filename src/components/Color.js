import React, { Component } from 'react';
import './Color.css';

class Color extends Component {
  render() {
    const { color, onChangeColor } = this.props;

    return(
      <div className='color-box' style={{background: color}} onClick = {() => {onChangeColor(color)}}/>
    );
  }
};

export default Color;
