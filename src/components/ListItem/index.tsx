import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import InputItem from './InputItem';
import Wrapper from './Wrapper';

function ListItem({id, item, completeTask, onDelete, onEditTask}) {
  let [taskTitle, setTaskTitle] = useState(item.title);
  let [isEditing, setIsEding] = useState(false);
  useEffect(() => {
    setTaskTitle(item.title);
  },[])
  const onChange = (taskTitle) => {
    onEditTask(item, taskTitle);
    setIsEding(false);
  }
  const upDateTaskTitle = (e, type=null) => {
    let {value} = e.target;
    if(value != item.title){
      setTaskTitle(value);
      setIsEding(true);
      if(e.key === 'Enter'){
        onChange(value);
      }
    }
    if(type == 'blur'){
      setIsEding(false);
    }
  }

  return (
    <Wrapper>
      <input
        className="mr-2"
        name={id}
        checked={item.completed}
        onChange={() => completeTask(item)}
        type="checkbox"
      />
      <InputItem onChange={(e, type)=>{upDateTaskTitle(e, type)}} value={taskTitle}></InputItem>
      {item.saving ? <div className="loader"></div>: null}
      {isEditing ? <button onClick={() => onChange(taskTitle)} className="bg-transparent hover:bg-orange-500 text-orange-500 text-xs hover:text-white py-1 px-3 border border-orange-500 hover:border-transparent rounded-full">
        Update
      </button>
      : null}
      <button onClick={() => onDelete(item)} className="text-red-700 text-sm hover:text-red-900 py-1 px-3">❌</button>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
  onDelete: PropTypes.any,
  onEditTask: PropTypes.func
};

export default ListItem;
