import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  let lastScrollY = window.scrollY;

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setVisible(currentY < lastScrollY || currentY < 10);
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect login state dynamically
  useEffect(() => {
    const checkLogin = () => {
      const adminLoggedIn = localStorage.getItem('adminLoggedIn');
      setIsLoggedIn(adminLoggedIn === 'true');
    };

    checkLogin(); // Check on route change
    window.addEventListener('storage', checkLogin); // Sync across tabs
    return () => window.removeEventListener('storage', checkLogin);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  const navClasses = `navbar ${scrolled ? 'navbar--scrolled' : ''} ${visible ? 'navbar--visible' : 'navbar--hidden'}`;

  return (
    <nav className={navClasses}>
      <div className="navbar__container">
        <div className="navbar__content">
          {/* LOGO */}
          <Link to="/" className="navbar__logo">
            <img src="/TBH_logo.png" alt="Logo" className="navbar__logo-image" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-shakti">Blockchain Hub</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="navbar__nav">
            {isLoggedIn ? (
              <>
                <Link to="/users" className={`navbar__nav-link ${location.pathname === '/users' ? 'navbar__nav-link--active' : ''}`}>Users</Link>
                <button onClick={handleLogout} className="navbar__nav-link">Logout</button>
              </>
            ) : (
              <>
                <Link to="/" className={`navbar__nav-link ${location.pathname === '/' ? 'navbar__nav-link--active' : ''}`}>Home</Link>
                <Link to="/Aboutus" className={`navbar__nav-link ${location.pathname === '/Aboutus' ? 'navbar__nav-link--active' : ''}`}>About</Link>
                <Link to="/Team" className={`navbar__nav-link ${location.pathname === '/Team' ? 'navbar__nav-link--active' : ''}`}>Team</Link>
                <Link to="/events" className={`navbar__nav-link ${location.pathname === '/events' ? 'navbar__nav-link--active' : ''}`}>Events</Link>
                <Link to="/contact" className={`navbar__nav-link ${location.pathname === '/contact' ? 'navbar__nav-link--active' : ''}`}>Contact</Link>
                <Link to="/login" className={`navbar__nav-link ${location.pathname === '/login' ? 'navbar__nav-link--active' : ''}`}>Login</Link>
                <Link to="/join_us" className="navbar__cta">Join Us</Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="navbar__mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="navbar__mobile-toggle-icon" /> : <FiMenu className="navbar__mobile-toggle-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : 'navbar__mobile-menu--closed'}`}>
          <div className="navbar__mobile-nav">
            {isLoggedIn ? (
              <>
                <Link to="/users" onClick={() => setMenuOpen(false)}>Users</Link>
                <button onClick={() => { setMenuOpen(false); handleLogout(); }}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/Aboutus" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/Team" onClick={() => setMenuOpen(false)}>Team</Link>
                <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/join_us" onClick={() => setMenuOpen(false)}>Join Us</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
