import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => (pathname === path ? 'on' : '');

  return (
    <nav className="nav">
      <Link className="nav-logo" to="/">
        Tar<span className="logo-v">V</span>ix
      </Link>
      <div className="nav-links">
        <Link className={isActive('/')} to="/">Home</Link>
        <Link className={isActive('/about')} to="/about">About</Link>
        <Link className={isActive('/services')} to="/services">Services</Link>
        <Link className={isActive('/sectors')} to="/sectors">Sectors</Link>
        <Link className={isActive('/contact')} to="/contact">Contact</Link>
      </div>
      <button className="btn-nav" onClick={() => navigate('/contact')}>
        Get in touch
      </button>
    </nav>
  );
}