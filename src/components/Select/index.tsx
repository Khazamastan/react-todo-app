/* eslint-disable react/prop-types */
import React from 'react';
import SelectWrapper from "./Wrapper"
const Select = props => {
  const options = props.options.map((option, i) => {
    return (<option key={i} value={option.id}>
      {option.name}
    </option>)
  });

  const onChange = (e) => {
    let option = e.target.value
    props.onChange(option);
  }
  return (<SelectWrapper>
        <select onChange={(e) => onChange(e)} value={props.selected || false}>{options}</select>
  </SelectWrapper>)
};

export default Select;
