import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => (pathname === path ? 'on' : '');
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    // Cleanup on unmount
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Condense the nav once the page is scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link className="nav-logo" to="/" onClick={closeMenu}>
          Tar<span className="logo-v">V</span>ix
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link className={isActive('/')} to="/">Home</Link>
          <Link className={isActive('/about')} to="/about">About</Link>
          <Link className={isActive('/services')} to="/services">Services</Link>
          <Link className={isActive('/sectors')} to="/sectors">Sectors</Link>
          <Link className={isActive('/contact')} to="/contact">Contact</Link>
        </div>

        {/* Desktop CTA Button */}
        <button className="btn-nav" onClick={() => navigate('/contact')}>
          Get in touch
        </button>

        {/* Hamburger Button (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Backdrop — click to close */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'show' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Slide-in Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <Link className={isActive('/')} to="/" onClick={closeMenu}>Home</Link>
        <Link className={isActive('/about')} to="/about" onClick={closeMenu}>About</Link>
        <Link className={isActive('/services')} to="/services" onClick={closeMenu}>Services</Link>
        <Link className={isActive('/sectors')} to="/sectors" onClick={closeMenu}>Sectors</Link>
        <Link className={isActive('/contact')} to="/contact" onClick={closeMenu}>Contact</Link>
        <button
          className="btn-primary"
          onClick={() => { navigate('/contact'); closeMenu(); }}
          style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}
        >
          Get in touch
        </button>
      </div>
    </>
  );
}