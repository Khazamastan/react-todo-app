import React from 'react';
import PropTypes from 'prop-types';
import {timeSince} from "../../utils/timeSince"
import Wrapper from './Wrapper';


function HistoryItem({id, item, toggleRowSelection = () => {}, onDelete, usersById}) {
  if(!item){ return null}
  const getUserName = () => {
    return usersById[item.task.userId].name
  }
  return (
    <Wrapper>
      <div key='left' className='flex flex-no-wrap'>
        <p><b>{getUserName()}</b> {item.change} "#{item.task.id}"</p>
      </div>
      <div key='right'>{timeSince(item.date)}</div>
    </Wrapper>
  );
}

HistoryItem.propTypes = {
  item: PropTypes.any,
};

export default HistoryItem;
