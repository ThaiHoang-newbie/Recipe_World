import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login_Register from './Login_Register';
import Posting_form from './Components/Posting/Posting_form';


ReactDOM.render(


  <React.StrictMode>
    {/* <Login_Register></Login_Register> */}
    {/* <Posting_form></Posting_form> */}
    <App></App>
  </React.StrictMode>,


  document.getElementById('root')
);

reportWebVitals();