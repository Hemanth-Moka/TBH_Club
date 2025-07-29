import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './Sections/Hero';
import Footer from './components/Footer';
// import GridDistortion from './Sections/GridDistortion';
import Aboutus from './Pages/Aboutus';
import Team from './Pages/Team';
import JoinUs from './Pages/Join_us';
import Login from './Pages/Login';
import SplashCursor  from './components/SplashCursor';
// Ensure this is the correct import path for your Aboutus component
function App() {
  return (
    <Router>
      <Navbar />
<SplashCursor/>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        {/* <Route path="/team" element={<Team />} /> */}
        {/* Add more routes here if needed */}
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
