import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_CITY = "https://wa.me/917301222666?text=Hi%2C%20I%20need%20a%20bulk%20biodegradable%20packaging%20quote%20for%20Mumbai";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Biodegradable Bags in Mumbai', item: 'https://rdnbio.com/#/biodegradable-bags-mumbai' },
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RDN Bio Products LLP',
  url: 'https://rdnbio.com',
  telephone: '+917301222666',
  description: 'DRDO certified biodegradable carry bag manufacturer supplying Mumbai and pan Maharashtra.',
  serviceArea: {
    '@type': 'City',
    name: 'Mumbai',
  },
  areaServed: 'Mumbai',
};

const whyCards = [
  { icon: '📋', title: 'Maharashtra Plastic Ban Compliance', desc: 'Our DRDO certification meets Maharashtra\'s Plastic and Thermocol Products Prohibition Rules. We supply documentation accepted by MPCB (Maharashtra Pollution Control Board).' },
  { icon: '🏭', title: 'Large-Volume Supply Capacity', desc: 'Mumbai operates at scale. Our production line is built for institutional bulk orders — supermarket chains, hospital networks, and hotel groups across the city and MMR.' },
  { icon: '💰', title: 'Direct Factory Pricing', desc: 'No Mumbai distributor markup. Buy direct from our Hyderabad DRDO-certified factory at factory-gate prices, even for deliveries across Maharashtra.' },
  { icon: '✅', title: 'MPCB-Accepted DRDO Certification', desc: 'Our DRDO certification is recognised by the Maharashtra Pollution Control Board — the gold standard for biodegradable packaging compliance in Maharashtra.' },
];

const industries = [
  { icon: '🛒', title: 'Retail & Supermarket Chains', desc: 'High-volume supply of D-Cut and U-Cut biodegradable bags for Mumbai\'s supermarket chains, hypermarkets, and neighbourhood retail stores.' },
  { icon: '🏨', title: 'Hotels & Hospitality', desc: 'Eco-friendly packaging solutions for hotel gift shops, housekeeping, laundry services, and in-room amenities across Mumbai\'s premium hospitality sector.' },
  { icon: '🏥', title: 'Hospitals & Medical', desc: 'BPA-free PBAT carry bags for hospital pharmacies, patient discharge kits, and medical supply packaging. DRDO certified and safe for healthcare environments.' },
  { icon: '🍽️', title: 'Restaurants & Food Service', desc: 'Biodegradable bags for takeaway packaging, home delivery, and dine-in counters. Custom printed with your brand for QSR chains and standalone restaurants.' },
  { icon: '🎪', title: 'Corporate & Events', desc: 'Branded biodegradable bags for corporate gifting, events, exhibitions, and conferences. Bulk printing with your logo available from 1,000 units MOQ.' },
];

const specRows = [
  ['D-Cut Bags', '7 sizes (8×12 to 16×24 inch)', '35–45 microns', 'Up to 3 kg', 'Kirana counters, boutiques, gift shops, small retail'],
  ['U/W-Cut Bags', '14 sizes (8×10 to 27×30 inch)', '30–50 microns', 'Up to 10 kg', 'Supermarkets, grocery stores, hospitals, heavy loads'],
  ['Garbage Bags', '8 sizes (17×19 to 35×45 inch)', '40–60 microns', 'Up to 18 kg', 'Office waste bins, storeroom disposal, kitchen waste'],
];

const faqs = [
  {
    q: 'How long is delivery to Mumbai?',
    a: '3–4 working days from our Hyderabad facility. Orders are dispatched same-day when confirmed before 2 PM. Large orders may qualify for dedicated transport arrangements — contact us to discuss.',
  },
  {
    q: 'Are you compliant with Maharashtra\'s plastic ban?',
    a: 'Yes. Our bags are DRDO certified and meet Maharashtra\'s Plastic and Thermocol Products (Manufacture, Usage, Sale, Transport, Handling and Storage) Prohibition Rules. Compliance documentation accepted by MPCB is provided with every bulk order.',
  },
  {
    q: 'Can you supply large volumes for Mumbai retail chains?',
    a: 'Yes. Our production line is built to handle bulk institutional orders. We supply chain-wide requirements for supermarkets, hospital groups, and hotel chains. Contact us to discuss dedicated supply agreements, volume pricing tiers, and monthly fulfillment schedules.',
  },
  {
    q: 'Do you supply to Navi Mumbai, Thane, and Pune as well?',
    a: 'Yes — we offer pan Maharashtra delivery. Navi Mumbai, Thane, Pune, Nashik, Nagpur, Aurangabad, and all other cities and districts across the state are covered under our standard delivery network.',
  },
];

export default function CityMumbai() {
  useEffect(() => {
    document.title = 'Biodegradable Carry Bags in Mumbai — DRDO Certified Manufacturer | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Buy biodegradable carry bags in Mumbai from DRDO certified manufacturer RDN Bio Products. BPA-free PBAT bags, bulk supply for retail, restaurants, hospitals, supermarkets. Pan Maharashtra delivery.';
  }, []);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">✓ DRDO Certified</span>
            <span className="drdo-badge" style={{ background: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>🚛 3-4 Day Mumbai Delivery</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🌿 Maharashtra Ban Compliant</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable Carry Bags in Mumbai — DRDO Certified Manufacturer
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 640, color: 'rgba(255,255,255,0.92)' }}>
            Mumbai and Maharashtra businesses can order DRDO-certified PBAT biodegradable bags direct from our Hyderabad factory. Fully compliant with Maharashtra's plastic ban and MPCB requirements. BPA-free, available in D-Cut and U-Cut styles. Pan Maharashtra delivery in 3–4 working days.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href="#mumbai-enquiry" className="btn-primary">Get Mumbai Quote</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={WA_CITY} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ BPA Free', '✓ DRDO Certified', '✓ MPCB Accepted', '✓ Custom Printing', '✓ Pan Maharashtra Delivery'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mumbai businesses choose us */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Mumbai businesses choose us</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>DRDO certified, MPCB compliant — direct from manufacturer to your door</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 32 }}>
            {whyCards.map(c => (
              <div key={c.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Industries we serve in Mumbai</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Bulk biodegradable packaging across Mumbai's key sectors</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 32 }}>
            {industries.map(ind => (
              <div key={ind.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{ind.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{ind.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Product specifications</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>All products dispatched from our Hyderabad facility and delivered pan Maharashtra</p>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Sizes Available</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Microns</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Load Capacity</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '12px 16px', color: j === 0 ? 'var(--green-dark)' : '#555', fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#888', marginTop: 14, textAlign: 'center' }}>Custom sizes and large-volume supply agreements available. Contact us to discuss.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently asked questions — Mumbai</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary className="faq-summary">
                  {f.q}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions exclude="mumbai" />

      {/* CTA Banner */}
      <section style={{ padding: '56px 0', background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Mumbai &amp; Maharashtra — get a volume pricing quote
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' }}>
            DRDO certified, Maharashtra ban-compliant biodegradable bags for supermarket chains, hospitals, hotels, and restaurants. Pan Maharashtra delivery in 3–4 working days.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_CITY} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>
              {WA_SVG} WhatsApp for Volume Quote
            </a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="mumbai-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Request Mumbai Bulk Quote</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Tell us your requirements — we'll respond with volume pricing on WhatsApp within 2 hours</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={WA_CITY} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 32px', fontSize: 15, fontWeight: 700 }}>
                {WA_SVG} WhatsApp Your Requirements
              </a>
              <a href={TEL} className="btn-call" style={{ padding: '16px 28px', fontSize: 15, fontWeight: 700 }}>
                📞 Call +91-7301222666
              </a>
            </div>
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 14, padding: '20px 24px', fontSize: 14, color: '#555', lineHeight: 1.75, textAlign: 'center' }}>
              <strong style={{ color: 'var(--green-dark)' }}>RDN Bio Products LLP</strong> — Direct Manufacturer, Hyderabad<br />
              DRDO Certified · BPA-Free PBAT · Pan India Supply<br />
              3–4 day delivery to Mumbai · Pan Maharashtra coverage
            </div>
            <Link to="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14, textAlign: 'center' }}>View full contact details →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
