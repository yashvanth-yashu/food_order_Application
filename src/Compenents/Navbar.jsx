import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    // Check if user is logged in (can be adjusted to check a real auth state)
    const user = localStorage.getItem('user'); // Example, replace with real auth logic
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      
      {/* Logo */}
      <Link to="/login" className="navbar-nav">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              alt="Login"
              className="ml-2"
              style={{ width: '40px', height: '40px' }}
            />
            <div className="Login-Name">Login</div>
          </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link Menu all-list ml-3" href="#exploreMenuSection">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link all-list ml-2" href="#followUsSection">
              Follow
            </a>
          </li>
          <li className="nav-item all-list">
            <a className="nav-link ml-2" href="#deliveryPaymentSection">
              Delivery &amp; Payment
            </a>
          </li>
          
          {/* FAQ & Support Link */}
          <Link to="/support" className="nav-item">
            <span className="nav-link Menu all-list ml-3 line">
              FAQ & Support
            </span>
          </Link>
        </ul>

        {/* Login/Logout Section */}
        {isLoggedIn ? (
          <span className="navbar-nav" onClick={handleLogout}>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              alt="Logout"
              className="ml-2"
              style={{ width: '40px', height: '40px' }}
            />
            <div className="Login-Name">Logout</div>
          </span>
        ) : (
          <Link to="/login" className="navbar-nav">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              alt="Login"
              className="ml-2"
              style={{ width: '40px', height: '40px' }}
            />
            <div className="Login-Name">Login</div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
