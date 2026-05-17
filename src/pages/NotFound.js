import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20biodegradable%20packaging%20from%20RDN%20Bio%20Products";

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | RDN Bio Products';
  }, []);

  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 560 }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>🌿</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,5vw,42px)', color: 'var(--green-dark)', marginBottom: 12 }}>
          Page not found
        </h1>
        <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
          The page you're looking for doesn't exist or may have moved. Browse our products or get in touch — we respond within 1 hour.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <Link to="/" className="btn-primary">Go to homepage</Link>
          <Link to="/products" className="btn-outline">View products</Link>
          <a href="tel:+917301222666" className="btn-call">📞 Call us</a>
        </div>
        <div style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Quick links
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8, textAlign: 'left' }}>
            {[
              { to: '/products', label: '📦 All products & specs' },
              { to: '/temple-packaging-solutions', label: '🛕 Temple packaging' },
              { to: '/food-packaging-solutions', label: '🍽️ Food & restaurants' },
              { to: '/retail-packaging-solutions', label: '🏪 Retail & supermarkets' },
              { to: '/institutional-packaging', label: '🏥 Hospitals & institutions' },
              { to: '/biodegradable-carry-bags', label: '🛒 Carry bags' },
              { to: '/blog', label: '📝 Blog' },
              { to: '/faq', label: '❓ FAQs' },
              { to: '/about', label: 'ℹ️ About us' },
              { to: '/contact', label: '📞 Contact' },
            ].map(item => (
              <Link key={item.to} to={item.to} style={{ fontSize: 13, fontWeight: 600, color: 'var(--green-dark)', textDecoration: 'none', padding: '6px 10px', borderRadius: 8, background: '#fff', border: '1px solid #d4e8b0', display: 'block' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
