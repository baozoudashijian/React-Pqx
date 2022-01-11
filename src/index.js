import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'


const render = Component => {
  ReactDOM.render(
      <Component/>,
    document.getElementById('root')
  );
}

render(Route)
