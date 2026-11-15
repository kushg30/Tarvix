import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">TarVix Systems LLP</div>
          <div className="footer-tagline">Target · Velocity · X-Acceleration</div>
        </div>
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/sectors">Sectors</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/ai">AI Lab</Link>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-legal">
        <strong>Tarvix Systems LLP</strong> &nbsp;|&nbsp; LLPIN: ACZ-2766 &nbsp;|&nbsp; GSTIN: 36ABAFT3257F1Z9 &nbsp;|&nbsp; Udyam: UDYAM-TS-02-0349449 &nbsp;|&nbsp; Incorporated under the Limited Liability Partnership Act, 2008
      </div>
    </footer>
  );
}