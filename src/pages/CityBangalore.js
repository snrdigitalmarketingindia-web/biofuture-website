import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_CITY = "https://wa.me/917301222666?text=Hi%2C%20I%20need%20a%20bulk%20biodegradable%20packaging%20quote%20for%20Bangalore";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Biodegradable Bags in Bangalore', item: 'https://rdnbio.com/#/biodegradable-bags-bangalore' },
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RDN Bio Products LLP',
  url: 'https://rdnbio.com',
  telephone: '+917301222666',
  description: 'DRDO certified biodegradable carry bag manufacturer supplying Bangalore and pan Karnataka.',
  serviceArea: {
    '@type': 'City',
    name: 'Bangalore',
  },
  areaServed: 'Bangalore',
};

const whyCards = [
  { icon: '📋', title: 'Karnataka Ban Compliance Docs Ready', desc: 'We provide compliance documentation aligned with Karnataka\'s plastic ban regulations and BBMP requirements — so your purchase is audit-ready from day one.' },
  { icon: '💰', title: 'Direct Manufacturer Pricing', desc: 'No Bangalore middleman markup. Buy directly from our Hyderabad factory and pay factory-gate prices even on orders shipped to Bangalore.' },
  { icon: '🏥', title: 'Trusted by Hospitals & Retail Chains', desc: 'The same DRDO-certified PBAT bags used by Hyderabad hospitals and retail chains are available to Bangalore buyers with the same quality guarantee.' },
  { icon: '🏢', title: 'IT Campuses Are a Primary Use Case', desc: 'Corporate parks, tech campuses, and office cafeterias across Bangalore rely on our biodegradable bags. Bulk institutional pricing available for campus-wide deployment.' },
];

const industries = [
  { icon: '💻', title: 'IT Parks & Tech Campuses', desc: 'PBAT carry bags for canteens, convenience stores, and office supply rooms across Electronic City, Whitefield, and other tech corridors.' },
  { icon: '🍽️', title: 'Restaurants & QSR', desc: 'Compliant biodegradable bags for takeaway, home delivery, and dine-in packaging. Custom printed with your brand for walking advertisement.' },
  { icon: '🛒', title: 'Retail & Supermarkets', desc: 'D-Cut and U-Cut bags across all sizes for kirana stores, supermarket chains, boutiques, and general retail counters in Bangalore.' },
  { icon: '🏥', title: 'Hospitals & Medical Centers', desc: 'BPA-free PBAT bags for hospital pharmacies, patient discharge kits, and medical supply packaging. DRDO certification accepted.' },
  { icon: '🏨', title: 'Hotels & Hospitality', desc: 'Eco-friendly carry bags for hotel gift shops, laundry services, and in-room amenity packaging across Bangalore\'s growing hospitality sector.' },
];

const specRows = [
  ['D-Cut Bags', '7 sizes (8×12 to 16×24 inch)', '35–45 microns', 'Up to 3 kg', 'Kirana counters, boutiques, gift shops, small retail'],
  ['U/W-Cut Bags', '14 sizes (8×10 to 27×30 inch)', '30–50 microns', 'Up to 10 kg', 'Supermarkets, grocery stores, hospitals, heavy loads'],
  ['Garbage Bags', '8 sizes (17×19 to 35×45 inch)', '40–60 microns', 'Up to 18 kg', 'Office waste bins, storeroom disposal, kitchen waste'],
];

const faqs = [
  {
    q: 'What is the delivery time to Bangalore?',
    a: '2–3 working days. Dispatch from our Hyderabad facility same-day for confirmed orders placed before 2 PM. We ship via trusted courier partners with real-time tracking.',
  },
  {
    q: 'Are your bags compliant with Karnataka\'s plastic ban?',
    a: 'Yes. Our bags are DRDO certified and fully compliant with Karnataka\'s plastic ban regulations and BBMP requirements. We provide compliance documentation with every bulk order to help your business pass any regulatory check.',
  },
  {
    q: 'Do you supply to all Bangalore areas?',
    a: 'Yes — we deliver to all Bangalore locations including Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, Jayanagar, BTM Layout, Marathahalli, Hebbal, Yeshwanthpur, and all other areas across the city and surrounding districts.',
  },
  {
    q: 'Can we get custom branded bags for our company?',
    a: 'Yes. We offer branded biodegradable bags printed with your logo, brand name, and contact details. Ideal for corporate campuses, restaurant chains, and retail outlets. MOQ is 1,000 units. Single and multi-color printing available with a typical lead time of 7–10 working days after design approval.',
  },
];

export default function CityBangalore() {
  useEffect(() => {
    document.title = 'Biodegradable Carry Bags in Bangalore — DRDO Certified Manufacturer | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Buy biodegradable carry bags in Bangalore from DRDO certified manufacturer RDN Bio Products. BPA-free PBAT bags, bulk supply for retail, restaurants, IT parks, hospitals. 2-3 day delivery pan Karnataka.';
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
            <span className="drdo-badge" style={{ background: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>🚛 2-3 Day Bangalore Delivery</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🌿 Karnataka Ban Compliant</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable Carry Bags in Bangalore — DRDO Certified Manufacturer
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 640, color: 'rgba(255,255,255,0.92)' }}>
            Bangalore businesses switching from conventional plastic bags can order direct from our DRDO-certified Hyderabad factory. BPA-free PBAT carry bags in D-Cut and U-Cut styles, delivered pan Karnataka in 2–3 working days. Karnataka ban-compliant documentation included.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href="#bangalore-enquiry" className="btn-primary">Get Bangalore Quote</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={WA_CITY} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ BPA Free', '✓ DRDO Certified', '✓ Same-Day Dispatch', '✓ Custom Printing', '✓ Pan Karnataka Delivery'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bangalore businesses choose us */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Bangalore businesses choose us</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Direct from a DRDO-certified manufacturer — no middlemen, no markup</p>
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
          <h2 className="section-title" style={{ textAlign: 'center' }}>Industries we serve in Bangalore</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Bulk biodegradable packaging for every sector across the city</p>
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
          <p className="section-sub" style={{ textAlign: 'center' }}>All products shipped to Bangalore from our Hyderabad manufacturing facility</p>
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
          <p style={{ fontSize: 13, color: '#888', marginTop: 14, textAlign: 'center' }}>Custom sizes available on request. Contact us with your specifications.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently asked questions — Bangalore</h2>
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
      <RelatedSolutions exclude="bangalore" />

      {/* CTA Banner */}
      <section style={{ padding: '56px 0', background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Bangalore businesses — get a bulk pricing quote
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            DRDO certified, Karnataka ban-compliant biodegradable bags dispatched same-day from Hyderabad. 2–3 day delivery across Bangalore and pan Karnataka.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_CITY} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>
              {WA_SVG} WhatsApp for Bulk Quote
            </a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="bangalore-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Request Bangalore Bulk Quote</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Tell us your requirements — we'll respond with pricing on WhatsApp within 2 hours</p>
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
              2–3 day delivery to Bangalore · Same-day dispatch on confirmed orders
            </div>
            <Link to="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14, textAlign: 'center' }}>View full contact details →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
