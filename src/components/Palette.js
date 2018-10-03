import React, { Component } from 'react';
import ColorList from './ColorList';
import './Palette.css';

class Palette extends Component {
  render() {
    const { colors, onChangeColor } = this.props;
    return(
      <div className = 'color-list'>
        <ColorList colors = {colors} onChangeColor = {onChangeColor}/>
      </div>
    );
  }
};

export default Palette;
