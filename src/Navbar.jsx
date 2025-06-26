import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.png';

function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo"><img src={logo} alt="Netflix Logo" className="navbar__logo-img" /></div>
      <ul className="navbar__menu">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>My List</li>
        <li onClick={handleLogout} className="navbar__logout">Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar; 