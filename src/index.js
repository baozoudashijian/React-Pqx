import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import './utils/setRem'
import './style/reset.css'
import {Provider} from "react-redux";
import store from '@/store/store';


const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root')
  );
}

render(Route)
