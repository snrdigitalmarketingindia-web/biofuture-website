import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Customisation from './pages/Customisation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20products";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="logo" onClick={close}>
          <div className="logo-leaf">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="2.5"><path d="M12 22s8-4 8-10a8 8 0 1 0-16 0c0 6 8 10 8 10z"/><path d="M12 22V12"/><path d="M12 12C10 10 6 9 4 12"/></svg>
          </div>
          RDN Bio Products
        </a>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="nav-wa-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
          <span>WhatsApp us</span>
        </a>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <NavLink to="/" onClick={close}>Home</NavLink>
        <NavLink to="/products" onClick={close}>Products</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/gallery" onClick={close}>Gallery</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
        <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={close}>WhatsApp us</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>RDN Bio Products</h4>
            <p>Save the Earth for Tomorrow</p>
            <p style={{marginTop:8}}>RDN Bio Products LLP</p>
            <div className="drdo-badge" style={{marginTop:12}}>✓ DRDO Certified Technology</div>
          </div>
          <div>
            <h4>Address</h4>
            <p>#10-01-78/47/5, Srinivasa Nagar Colony,<br/>Lingojiguda, Karmanghat,<br/>Saroornagar(M), Hyderabad,<br/>R.R.Dist., Telangana – 500 035</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>📞 +91-7301222666</p>
            <p>📞 +91-7301777444</p>
            <p>✉ biofuture.rdn@gmail.com</p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{marginTop:14,fontSize:13,padding:'8px 16px'}}>
              WhatsApp us
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 RDN Bio Products LLP</span>
          <span>I am NOT Plastic 🌿</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a href={WA_LINK} target="_blank" rel="noreferrer" className="wa-float" title="Chat on WhatsApp">
      <span className="wa-float-tooltip">Chat with us</span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
    </a>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/customisation" element={<Customisation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWA />
    </BrowserRouter>
  );
}
