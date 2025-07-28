import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './Sections/Hero';
import Footer from './components/Footer';
import GridDistortion from './Sections/GridDistortion';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Add more routes here if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
