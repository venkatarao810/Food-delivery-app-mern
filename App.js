import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';  
import About from './components/About';
import Welcome from './components/Welcome';
import ContactUs from './components/Contact';
import Address from './components/Address'; 
import Payment from './components/Payment'; // Import ContactUs component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<ProtectedRoute component={Home} />} />                {/* Home page route */}
          <Route path="/register" element={<Register />} />    {/* Register page route */}
          <Route path="/login" element={<Login />} />          {/* Login page route */}
          <Route path="/menu" element={<Menu />} />            {/* Menu page route */}
          <Route path="/about" element={<About />} />          {/* About page route */}
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/address" element={<Address/>} /> 
          <Route path="/payment" element={<Payment />} />  {/* Contact page route */}
           {/* Redirect any other path to "/" */}
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
const ProtectedRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token'); // assuming token indicates login

  return token ? <Component /> : <Navigate to="/login" />;
};


export default App;
