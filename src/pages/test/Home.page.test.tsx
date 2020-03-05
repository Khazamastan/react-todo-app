import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home/Home.page';
import Provider from '../../context/Provider'
import reducers from '../../reducers'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider reducer={reducers}><Home /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
