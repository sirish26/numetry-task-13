import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="navbar fade-in">
        <h2>COURSES</h2>
        <ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><Link to="/cards">Courses</Link></li>
          <li><Link to="/technologies">Technologies</Link></li>
          <li><Link to="/login">Signup / Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
