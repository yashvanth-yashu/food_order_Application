import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '/src/Compenents/LoginPage.css'

function LoginPage() {
  const [isActive, setIsActive] = useState(false); // Toggle between login and sign-up forms
  const [showNotification, setShowNotification] = useState({ message: "", show: false }); // Track notification visibility
  const [user, setUser] = useState(null); // Store the logged-in user
  const navigate = useNavigate(); // To navigate programmatically after login/signup

  // Handle Register form toggle
  const handleRegisterClick = () => {
    setIsActive(true);
  };

  // Handle Login form toggle
  const handleLoginClick = () => {
    setIsActive(false);
  };

  // Handle Registration
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('http://localhost:8080/api/register', { name, email, password });

      if (response.status === 200) {
        setShowNotification({ message: "Registration successful! Please log in.", show: true });
        setTimeout(() => setShowNotification({ message: "", show: false }), 2000);
        setIsActive(true); // Switch to login form
      } else {
        setShowNotification({ message: "Registration failed", show: true });
        setTimeout(() => setShowNotification({ message: "", show: false }), 2000);
      }
    } catch (error) {
      setShowNotification({ message: "Registration failed. Please try again.", show: true });
      setTimeout(() => setShowNotification({ message: "", show: false }), 2000);
      console.error("Error during registration:", error);
    }
  };

  // Handle Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.get(`http://localhost:8080/api/checklogin/${email}/${password}`);

      if (response.data === 1) {
        setShowNotification({ message: "Login Successful!", show: true });
        setTimeout(() => setShowNotification({ message: "", show: false }), 2000);
        setUser({ email });
        localStorage.setItem('user', JSON.stringify({ email })); // Store user in local storage
        navigate("/"); // Navigate to home or other page
      } else {
        setShowNotification({ message: "Login Failed. Please check your email or password.", show: true });
        setTimeout(() => setShowNotification({ message: "", show: false }), 2000);
      }
    } catch (error) {
      setShowNotification({ message: "An error occurred during login. Please try again.", show: true });
      setTimeout(() => setShowNotification({ message: "", show: false }), 2000);
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="centerr">
    <div className={`container1 ${isActive ? "active" : ""}`} id="container1">
      {/* Sign Up Form */}
      <div className="form-container1 sign-up">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container1 sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email and password</span>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Toggle between Sign Up and Sign In */}
      <div className="togglee-container1">
        <div className="togglee">
          <div className="togglee-panel togglee-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={handleLoginClick}>Sign In</button>
          </div>
          <div className="togglee-panel togglee-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>


      {/* Notification Message */}
      {showNotification.show && (
        <div className="notification">
          <p>{showNotification.message}</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
