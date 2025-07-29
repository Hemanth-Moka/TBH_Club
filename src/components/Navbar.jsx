import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  let lastScrollY = window.scrollY;

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

  const navClasses = `navbar ${scrolled ? 'navbar--scrolled' : ''} ${visible ? 'navbar--visible' : 'navbar--hidden'}`;

  return (
    <nav className={navClasses}>
      <div className="navbar__container">
        <div className="navbar__content">
          {/* LOGO */}
          <Link to="/" className="navbar__logo">
            <img src="TBH_logo.png" alt="Logo" className="navbar__logo-image" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-digi"></span>
              <span className="navbar__logo-shakti">Blockchain Hub</span>
              {/* <span className="navbar__logo-subtext">Decentralize. Learn. Build.</span> */}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="navbar__nav">
            <Link to="/" className={`navbar__nav-link ${location.pathname === '/' ? 'navbar__nav-link--active' : ''}`}>Home</Link>
            <Link to="/Aboutus" className={`navbar__nav-link ${location.pathname === '/about' ? 'navbar__nav-link--active' : ''}`}>About</Link>
            <Link to="/services" className={`navbar__nav-link ${location.pathname === '/services' ? 'navbar__nav-link--active' : ''}`}>Services</Link>
            <Link to="/events" className={`navbar__nav-link ${location.pathname === '/events' ? 'navbar__nav-link--active' : ''}`}>Events</Link>
            <Link to="/contact" className={`navbar__nav-link ${location.pathname === '/contact' ? 'navbar__nav-link--active' : ''}`}>Contact</Link>
            <Link to="/join" className="navbar__cta">Join Us</Link>
          </div>

          {/* Mobile Toggle */}
          <button className="navbar__mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="navbar__mobile-toggle-icon" /> : <FiMenu className="navbar__mobile-toggle-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : 'navbar__mobile-menu--closed'}`}>
          <div className="navbar__mobile-nav">
            <Link to="/" className="navbar__mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="navbar__mobile-nav-link" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" className="navbar__mobile-nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/events" className="navbar__mobile-nav-link" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link to="/contact" className="navbar__mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/join" className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>Join Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
