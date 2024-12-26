import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Imagecontainer from './Compenents/Imagecontainer';
import Navbar from './Compenents/Navbar';
import HealthyFoodSection from './Compenents/Healthfood';
import Payment from './Compenents/Payment';
import Customer from './Compenents/Customer';
import SocialMedia from './Compenents/SocialMeia';
import MenuItemCard from './Itemsmenu';
import Test from './Test';
import Chatbot from './Compenents/Faq_support';
// import LoginPage from './Compenents/LoginPage'; // Uncomment when LoginPage is ready

function App() {
  const [user, setUser] = useState(null); // Track logged-in user

  const handleLogin = (userData) => {
    setUser(userData); // Set user on successful login
  };

  const handleLogout = () => {
    setUser(null); // Clear user on logout
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Navbar user={user} onLogout={handleLogout} />
                <Imagecontainer />
                <MenuItemCard />
                <HealthyFoodSection />
                <Payment />
                <Customer />
                <SocialMedia />
              </>
            }
          />
          {/* <Route path="/login" element={<LoginPage/>} /> */}
          
          <Route path="/login" element={<Test onLogin={handleLogin} />} />
          {/* Chatbot / Support Route */}
          <Route path="/support" element={<Chatbot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
