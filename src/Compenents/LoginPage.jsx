// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Compenents/LoginPage.css';

// function LoginPage() {
//   const [isActive, setIsActive] = useState(false); // Toggle between login and sign-up forms
//   const [showNotification, setShowNotification] = useState(false); // Track notification visibility
//   const navigate = useNavigate(); // To navigate programmatically after login/signup

//   // Function to toggle to the registration form
//   const handleRegisterClick = () => {
//     setIsActive(true); // Switch to the sign-up form
//   };

//   // Function to toggle to the login form
//   const handleLoginClick = () => {
//     setIsActive(false); // Switch to the login form
//   };

//   // Handle registration form submission
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       // Send a POST request to register the user
//       const response = await axios.post('http://localhost:8080/api/register', {
//         name,
//         email,
//         password
//       });

//       if (response.status === 200) {
//         alert("Registration successful! Please log in.");
//         setIsActive(true);  // Switch to login form after successful registration
//       }
//        else {
//         alert(`Registration failed`);
//       }
//     } catch (error) {
//       alert("Registration failed. Please try again.");
//       console.error("Error during registration");
//     }
//   };

//   // Handle login form submission
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
  
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       // Send a GET request with email and password in the URL (using PathVariable)
//       const response = await axios.get(`http://localhost:8080/api/checklogin/${email}/${password}`);

//       if (response.data === 1) {
//         // Login successful
//         alert("Login Successful!"); // Show login success alert
//         navigate("/"); // Navigate to your "back page" (home page or other page)
//       } else {
//         // Login failed
//         alert("Login Failed. Please check your email or password.");
//       }
//     } catch (error) {
//       // Handle error
//       alert("An error occurred during login. Please try again.");
//       console.error("Error during login:", error.response || error);
//     }
//   };

//   return (
//     <div className="centerr">
//       <div className={`container1 ${isActive ? "active" : ""}`} id="container1">
//         {/* Sign Up Form */}
//         <div className="form-container1 sign-up">
//           <form onSubmit={handleRegisterSubmit}>
//             <h1>Create Account</h1>
//             <div className="social-icons">
//               <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//               <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//               <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//               <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your email for registration</span>
//             <input type="text" name="name" placeholder="Name" required />
//             <input type="email" name="email" placeholder="Email" required />
//             <input type="password" name="password" placeholder="Password" required />
//             <button type="submit">Sign Up</button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div className="form-container1 sign-in">
//           <form onSubmit={handleLoginSubmit}>
//             <h1>Sign In</h1>
//             <div className="social-icons">
//               <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//               <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//               <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//               <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your email and password</span>
//             <input type="email" name="email" placeholder="Email" required />
//             <input type="password" name="password" placeholder="Password" required />
//             <a href="#">Forget Your Password?</a>
//             <button type="submit">Sign In</button>
//           </form>
//         </div>

//         {/* Toggle between Sign Up and Sign In */}
//         <div className="togglee-container1">
//           <div className="togglee">
//             <div className="togglee-panel togglee-left">
//               <h1>Welcome Back!</h1>
//               <p>Enter your personal details to use all of site features</p>
//               <button className="hidden" onClick={handleLoginClick}>Sign In</button>
//             </div>
//             <div className="togglee-panel togglee-right">
//               <h1>Hello, Friend!</h1>
//               <p>Register with your personal details to use all of site features</p>
//               <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Notification Message */}
//       {showNotification && (
//         <div className="notification">
//           <p>Login Successful!</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginPage;
