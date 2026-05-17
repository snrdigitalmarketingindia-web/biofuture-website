import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Customisation from './pages/Customisation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { BlogIndex, BlogPost } from './pages/Blog';
import TemplePackaging from './pages/TemplePackaging';
import FoodPackaging from './pages/FoodPackaging';
import InstitutionalPackaging from './pages/InstitutionalPackaging';
import CarryBags from './pages/CarryBags';
import ButterSheets from './pages/ButterSheets';
import RetailPackaging from './pages/RetailPackaging';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20quote%20for%20biodegradable%20packaging%20from%20RDN%20Bio%20Products";
const WA_SVG = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

function Navbar() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const close = () => { setOpen(false); setIndustriesOpen(false); };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#/" className="logo" onClick={close}>
          <img src="rdn-logo.png" alt="RDN Bio Products" loading="eager" width="36" height="36" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: 6 }} />
          RDN Bio Products
        </a>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li
            className="nav-dropdown-wrap"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="nav-dropdown-btn" aria-expanded={industriesOpen}>
              Industries <span style={{ fontSize: 9, marginLeft: 2 }}>▼</span>
            </button>
            {industriesOpen && (
              <div className="nav-dropdown">
                <NavLink to="/temple-packaging-solutions" onClick={close} className="nav-dropdown-item nav-dropdown-item--highlight">
                  🛕 Temple &amp; Religious Trusts
                </NavLink>
                <NavLink to="/food-packaging-solutions" onClick={close} className="nav-dropdown-item">
                  🍽️ Food &amp; Restaurants
                </NavLink>
                <NavLink to="/institutional-packaging" onClick={close} className="nav-dropdown-item">
                  🏥 Hospitals &amp; Institutions
                </NavLink>
                <NavLink to="/biodegradable-carry-bags" onClick={close} className="nav-dropdown-item">
                  🛒 Retail &amp; Kirana
                </NavLink>
                <NavLink to="/butter-sheets-food-wrapping" onClick={close} className="nav-dropdown-item">
                  🧈 Butter Sheets
                </NavLink>
                <NavLink to="/retail-packaging-solutions" onClick={close} className="nav-dropdown-item">
                  🏪 Retail &amp; Supermarkets
                </NavLink>
              </div>
            )}
          </li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="tel:+917301222666" className="btn-call btn-call--nav" title="Call us now">📞</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="nav-wa-btn">
            {WA_SVG}
            <span>WhatsApp</span>
          </a>
        </div>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <NavLink to="/" onClick={close}>Home</NavLink>
        <NavLink to="/products" onClick={close}>Products</NavLink>
        <div style={{ padding: '6px 20px', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Industries</div>
        <NavLink to="/temple-packaging-solutions" onClick={close} style={{ paddingLeft: 28, color: '#ffd54f' }}>🛕 Temple Packaging</NavLink>
        <NavLink to="/food-packaging-solutions" onClick={close} style={{ paddingLeft: 28 }}>🍽️ Food &amp; Restaurants</NavLink>
        <NavLink to="/institutional-packaging" onClick={close} style={{ paddingLeft: 28 }}>🏥 Institutional</NavLink>
        <NavLink to="/biodegradable-carry-bags" onClick={close} style={{ paddingLeft: 28 }}>🛒 Carry Bags</NavLink>
        <NavLink to="/butter-sheets-food-wrapping" onClick={close} style={{ paddingLeft: 28 }}>🧈 Butter Sheets</NavLink>
        <NavLink to="/retail-packaging-solutions" onClick={close} style={{ paddingLeft: 28 }}>🏪 Retail &amp; Supermarkets</NavLink>
        <NavLink to="/blog" onClick={close}>Blog</NavLink>
        <NavLink to="/faq" onClick={close}>FAQ</NavLink>
        <NavLink to="/gallery" onClick={close}>Gallery</NavLink>
        <NavLink to="/customisation" onClick={close}>Customise</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
        <a href="tel:+917301222666" onClick={close} style={{ color: '#ffd54f' }}>📞 Call +91-7301222666</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={close}>💬 WhatsApp us</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 — Brand */}
          <div>
            <h4>RDN Bio Products</h4>
            <p style={{ marginBottom: 6 }}>Sustainable Packaging Solutions Provider — replacing single-use plastic across retail, food, temples &amp; institutions.</p>
            <div className="drdo-badge" style={{ marginTop: 10 }}>✓ DRDO Certified Technology</div>
            <div style={{ marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>LLPIN: ACI-9987 · Est. Aug 2024</div>
          </div>

          {/* Col 2 — Industries */}
          <div>
            <h4>Industries</h4>
            <p><a href="#/temple-packaging-solutions" style={{ color: '#ffd54f', fontWeight: 600 }}>🛕 Temple Packaging</a></p>
            <p><a href="#/food-packaging-solutions" style={{ color: 'rgba(255,255,255,0.75)' }}>🍽️ Food &amp; Restaurants</a></p>
            <p><a href="#/institutional-packaging" style={{ color: 'rgba(255,255,255,0.75)' }}>🏥 Hospitals &amp; Institutions</a></p>
            <p><a href="#/biodegradable-carry-bags" style={{ color: 'rgba(255,255,255,0.75)' }}>🛒 Carry Bags</a></p>
            <p><a href="#/butter-sheets-food-wrapping" style={{ color: 'rgba(255,255,255,0.75)' }}>🧈 Butter Sheets</a></p>
            <p><a href="#/retail-packaging-solutions" style={{ color: 'rgba(255,255,255,0.75)' }}>🏪 Retail &amp; Supermarkets</a></p>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4>Contact Us</h4>
            <div style={{ marginBottom: 8 }}>
              <a href="tel:+917301222666" className="footer-call-btn">📞 Call +91-7301222666</a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <a href="tel:+917301777444" className="footer-call-btn footer-call-btn--secondary">📞 Call +91-7301777444</a>
            </div>
            <p style={{ fontSize: 12 }}>✉ rdnbioproductsllp@gmail.com</p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{ marginTop: 10, fontSize: 12, padding: '7px 14px' }}>
              {WA_SVG} WhatsApp us
            </a>
            <p style={{ marginTop: 10, fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
              #10-01-78/47/5, Srinivasa Nagar Colony,<br />Karmanghat, Saroornagar(M),<br />Hyderabad – 500 035, Telangana
            </p>
          </div>

          {/* Col 4 — Resources */}
          <div>
            <h4>Resources</h4>
            <p><a href="#/blog" style={{ color: 'rgba(255,255,255,0.75)' }}>Blog</a></p>
            <p><a href="#/faq" style={{ color: 'rgba(255,255,255,0.75)' }}>FAQ</a></p>
            <p><a href="#/gallery" style={{ color: 'rgba(255,255,255,0.75)' }}>Gallery</a></p>
            <p><a href="#/customisation" style={{ color: 'rgba(255,255,255,0.75)' }}>Customise</a></p>
            <p><a href="#/about" style={{ color: 'rgba(255,255,255,0.75)' }}>About Us</a></p>
            <p><a href="#/products" style={{ color: 'rgba(255,255,255,0.75)' }}>All Products</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 RDN Bio Products LLP</span>
          <span>Biodegradable Packaging Manufacturer — Hyderabad, India 🌿</span>
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

/* Sticky bottom bar — mobile only */
function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <a href="tel:+917301222666" className="sticky-bar-call">
        📞 Call Now
      </a>
      <a href="#enquiry" className="sticky-bar-quote">
        📩 Get Quote
      </a>
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="sticky-bar-wa">
        {WA_SVG} WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/customisation" element={<Customisation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Industry landing pages */}
        <Route path="/temple-packaging-solutions" element={<TemplePackaging />} />
        <Route path="/food-packaging-solutions" element={<FoodPackaging />} />
        <Route path="/institutional-packaging" element={<InstitutionalPackaging />} />
        <Route path="/biodegradable-carry-bags" element={<CarryBags />} />
        <Route path="/butter-sheets-food-wrapping" element={<ButterSheets />} />
        <Route path="/retail-packaging-solutions" element={<RetailPackaging />} />
      </Routes>
      <Footer />
      <FloatingWA />
      <StickyMobileBar />
    </HashRouter>
  );
}
