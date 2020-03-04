import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender onDelete={props.onDelete} {...props} key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
  onDelete: PropTypes.any,
  completeTask: PropTypes.any,
  onEditTask: PropTypes.any,
  usersById: PropTypes.object
};

export default List;
