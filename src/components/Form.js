import React from 'react';
import './Form.css'

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {
  return(
    <div className = 'form'>
      <input value = {value} style={{color: color}} onChange = {onChange} onKeyPress = {onKeyPress}/>
      <div className  = 'create-button' onClick = {onCreate}>
        Add
      </div>
    </div>
  );
};

export default Form;
