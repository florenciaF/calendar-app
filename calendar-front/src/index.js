import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <CalendarApp />
  </BrowserRouter>,
  document.getElementById('root')
);

