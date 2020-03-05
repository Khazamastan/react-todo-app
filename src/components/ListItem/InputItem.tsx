import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

const InputItem = styled.input`
  flex-grow: 1;
  &:hover, &:focus, &:active {
    outline: none
  }
`;


const TextItem = styled.p`
  flex-grow: 1;
  &:hover, &:focus, &:active {
    outline: none
  }
`;


export default ({value, onChange}) => {
  let [editing, setEditing] = useState(!value);
  let el  = {current : document.createElement("div")};
  useEffect(() => {
    if(editing && el){
      el.current.focus();
    }
    el.current.focus();
  },[editing, el])

  const updateIsEditing = (e, editing) => {
    setEditing(editing);
  }
  const onBlur = (e) =>  {
    debugger;
    onChange(e, 'blur');
  }

  if(editing || !value){
    return <InputItem ref={el} onKeyUp={onChange} onBlur={onBlur} onChange={onChange} value={value}></InputItem>
  } else{
    return <TextItem onClick={(e) => updateIsEditing(e,true)} ref={el}>{value}</TextItem>

  }
}
