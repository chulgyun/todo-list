import React, { Component } from 'react';
import Color from './Color';

class ColorList extends Component {
  render() {
    const { colors, onChangeColor } = this.props;
    const colorList = colors.map(
      (color) => (
        <Color color = {color} key = {color} onChangeColor = {onChangeColor}/>
      )
    );

    return(
      <div>
        {colorList}
      </div>
    );
  }
};

export default ColorList;
