import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login_Register from './Login_Register';

ReactDOM.render(


  <React.StrictMode>
    <Login_Register></Login_Register>
  </React.StrictMode>,


  document.getElementById('root')
);

reportWebVitals();