import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import {App} from './application/app';
import reportWebVitals from './reportWebVitals';
import './config/globals';
import './application/main.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

document.documentElement.classList.remove('no-js');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
dayjs.extend(require('dayjs/plugin/localizedFormat'));
