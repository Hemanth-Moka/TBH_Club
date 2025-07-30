import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './Sections/Hero';
import Footer from './components/Footer';
import Aboutus from './Pages/Aboutus';
import Team from './Pages/Team';
import JoinUs from './Pages/Join_us';
import Login from './Pages/Login';
import SplashCursor from './components/SplashCursor';
import Users from './admin/Users';
// import Team from './Pages/Team'
import Notfound from './Pages/Notfound';

// PrivateRoute wrapper
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <SplashCursor />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Notfound />} />

        {/* Protected Route */}
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
