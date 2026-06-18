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
import NotFound from './pages/NotFound';
import GetQuote from './pages/GetQuote';
import Distributor from './pages/Distributor';
import ExportPackaging from './pages/ExportPackaging';
import Sustainability from './pages/Sustainability';
import CityHyderabad from './pages/CityHyderabad';
import CityChennai from './pages/CityChennai';
import CityBangalore from './pages/CityBangalore';
import CityMumbai from './pages/CityMumbai';
import CityDelhi from './pages/CityDelhi';
import CityPune from './pages/CityPune';
import CityAhmedabad from './pages/CityAhmedabad';
import CityKolkata from './pages/CityKolkata';
import CityCoimbatore from './pages/CityCoimbatore';
import CitySurat from './pages/CitySurat';
import IndustryHotels from './pages/IndustryHotels';
import IndustrySchools from './pages/IndustrySchools';
import IndustryCatering from './pages/IndustryCatering';
import IndustryEcommerce from './pages/IndustryEcommerce';
import IndustryPharma from './pages/IndustryPharma';
import GeoPlasticBan from './pages/GeoPlasticBan';
import GeoBioVsCompostable from './pages/GeoBioVsCompostable';
import GeoOEMPrivateLabel from './pages/GeoOEMPrivateLabel';
import GeoBulkOrder from './pages/GeoBulkOrder';
import GeoManufacturing from './pages/GeoManufacturing';

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
          <img src="rdn-logo.webp" alt="RDN Bio Products" loading="eager" decoding="async" width="36" height="36" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: 6 }} />
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
          <li><NavLink to="/distributor">Distributors</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <NavLink to="/get-quote" style={{ background: '#f57c00', color: '#fff', fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 20, textDecoration: 'none', whiteSpace: 'nowrap' }}>📩 Get Quote</NavLink>
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
        <NavLink to="/distributor" onClick={close}>🤝 Become a Distributor</NavLink>
        <NavLink to="/sustainability" onClick={close}>🌍 Sustainability</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
        <NavLink to="/get-quote" onClick={close} style={{ background: '#f57c00', color: '#fff', fontWeight: 700 }}>📩 Get a Bulk Quote</NavLink>
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
            {/* Social Media */}
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Follow us</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <a href="https://www.facebook.com/rdnbio" target="_blank" rel="noreferrer" title="Facebook" style={{ background: '#1877f2', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/></svg>
                </a>
                <a href="https://www.instagram.com/rdnbioproducts/" target="_blank" rel="noreferrer" title="Instagram" style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://x.com/rdnbio" target="_blank" rel="noreferrer" title="X (Twitter)" style={{ background: '#000', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.731-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                </a>
                <a href="https://www.youtube.com/@RDNBio" target="_blank" rel="noreferrer" title="YouTube" style={{ background: '#ff0000', borderRadius: 7, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                </a>
              </div>
            </div>
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
            <p><a href="#/plastic-ban-compliance-india" style={{ color: 'rgba(255,255,255,0.75)' }}>📋 Plastic Ban Guide</a></p>
            <p><a href="#/biodegradable-vs-compostable" style={{ color: 'rgba(255,255,255,0.75)' }}>🔬 Bio vs Compostable</a></p>
            <p><a href="#/bulk-order-biodegradable-bags" style={{ color: 'rgba(255,255,255,0.75)' }}>📦 Bulk Order Guide</a></p>
            <p><a href="#/oem-private-label-biodegradable-bags" style={{ color: 'rgba(255,255,255,0.75)' }}>🖨️ OEM / Private Label</a></p>
            <p><a href="#/manufacturing-process" style={{ color: 'rgba(255,255,255,0.75)' }}>🏭 Manufacturing</a></p>
            <p><a href="#/sustainability" style={{ color: '#a8e06b', fontWeight: 600 }}>🌍 Sustainability</a></p>
            <p><a href="#/distributor" style={{ color: '#a8e06b', fontWeight: 600 }}>🤝 Become a Distributor</a></p>
            <p><a href="#/export-packaging-solutions" style={{ color: 'rgba(255,255,255,0.75)' }}>🌏 Export Solutions</a></p>
          </div>

          {/* Col 5 — Delivery Areas */}
          <div>
            <h4>Delivery Areas</h4>
            <p><a href="#/biodegradable-bags-hyderabad" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Hyderabad</a></p>
            <p><a href="#/biodegradable-bags-chennai" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Chennai</a></p>
            <p><a href="#/biodegradable-bags-bangalore" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Bangalore</a></p>
            <p><a href="#/biodegradable-bags-mumbai" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Mumbai</a></p>
            <p><a href="#/biodegradable-bags-delhi" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Delhi NCR</a></p>
            <p><a href="#/biodegradable-bags-pune" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Pune</a></p>
            <p><a href="#/biodegradable-bags-ahmedabad" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Ahmedabad</a></p>
            <p><a href="#/biodegradable-bags-kolkata" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Kolkata</a></p>
            <p><a href="#/biodegradable-bags-coimbatore" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Coimbatore</a></p>
            <p><a href="#/biodegradable-bags-surat" style={{ color: 'rgba(255,255,255,0.75)' }}>📍 Surat</a></p>
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
    <a href={WA_LINK} target="_blank" rel="noreferrer" className="wa-float" title="Chat on WhatsApp" data-cta="global-whatsapp-float">
      <span className="wa-float-tooltip">Chat with us</span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
    </a>
  );
}

/* Sticky bottom bar — mobile only */
function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <a href="tel:+917301222666" className="sticky-bar-call" data-cta="sticky-call">
        📞 Call Now
      </a>
      <a href="#/get-quote" className="sticky-bar-quote" data-cta="sticky-get-quote">
        📩 Get Quote
      </a>
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="sticky-bar-wa" data-cta="sticky-whatsapp">
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
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/export-packaging-solutions" element={<ExportPackaging />} />
        <Route path="/sustainability" element={<Sustainability />} />
        {/* City SEO landing pages */}
        {/* City SEO pages — existing */}
        <Route path="/biodegradable-bags-hyderabad" element={<CityHyderabad />} />
        <Route path="/biodegradable-bags-chennai" element={<CityChennai />} />
        <Route path="/biodegradable-bags-bangalore" element={<CityBangalore />} />
        <Route path="/biodegradable-bags-mumbai" element={<CityMumbai />} />
        {/* City SEO pages — new */}
        <Route path="/biodegradable-bags-delhi" element={<CityDelhi />} />
        <Route path="/biodegradable-bags-pune" element={<CityPune />} />
        <Route path="/biodegradable-bags-ahmedabad" element={<CityAhmedabad />} />
        <Route path="/biodegradable-bags-kolkata" element={<CityKolkata />} />
        <Route path="/biodegradable-bags-coimbatore" element={<CityCoimbatore />} />
        <Route path="/biodegradable-bags-surat" element={<CitySurat />} />
        {/* Industry landing pages — new */}
        <Route path="/biodegradable-bags-hotels-resorts" element={<IndustryHotels />} />
        <Route path="/biodegradable-bags-schools-colleges" element={<IndustrySchools />} />
        <Route path="/biodegradable-bags-catering-services" element={<IndustryCatering />} />
        <Route path="/biodegradable-ecommerce-packaging" element={<IndustryEcommerce />} />
        <Route path="/biodegradable-pharma-packaging" element={<IndustryPharma />} />
        {/* GEO / AI answer pages */}
        <Route path="/plastic-ban-compliance-india" element={<GeoPlasticBan />} />
        <Route path="/biodegradable-vs-compostable" element={<GeoBioVsCompostable />} />
        <Route path="/oem-private-label-biodegradable-bags" element={<GeoOEMPrivateLabel />} />
        <Route path="/bulk-order-biodegradable-bags" element={<GeoBulkOrder />} />
        <Route path="/manufacturing-process" element={<GeoManufacturing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWA />
      <StickyMobileBar />
    </HashRouter>
  );
}
