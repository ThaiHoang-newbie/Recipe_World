import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
function Login_Register() {
  return (
    <div className="container-fluid">
      <Router>
        <div className="menu-top">
          <div className="btnHome">
            <Link to="/" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-menu-top.png'})` }}></Link>
          </div>
          <div className="menu">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Login_Register;