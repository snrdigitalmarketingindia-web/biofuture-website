import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_CITY = "https://wa.me/917301222666?text=Hi%2C%20I%20need%20a%20bulk%20biodegradable%20packaging%20quote%20for%20Chennai";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Biodegradable Bags in Chennai', item: 'https://rdnbio.com/#/biodegradable-bags-chennai' },
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RDN Bio Products LLP',
  url: 'https://rdnbio.com',
  telephone: '+91-7301222666',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Karmanghat, Saroornagar',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500035',
    addressCountry: 'IN',
  },
  serviceArea: {
    '@type': 'City',
    name: 'Chennai',
  },
  description: 'DRDO certified biodegradable carry bags manufacturer supplying Chennai and Tamil Nadu. Bulk supply for retail, restaurants, hospitals, temples.',
};

const whyDeliveryCards = [
  { icon: '🚛', title: 'Fast turnaround from Hyderabad', desc: 'Chennai is ~600 km by road from our Hyderabad factory. Standard 2–3 day delivery via reliable logistics partners.' },
  { icon: '💰', title: 'No import markups', desc: 'Manufactured in India, dispatched from Hyderabad. No import duties, no cross-border surcharges.' },
  { icon: '📞', title: 'Direct manufacturer pricing', desc: 'Order directly from the factory. No distributor margin. Transparent bulk pricing with GST invoicing.' },
  { icon: '✅', title: 'Tamil Nadu plastic ban compliance', desc: 'All products are DRDO certified and fully compliant with Tamil Nadu\'s plastic ban regulations for commercial use.' },
];

const industries = [
  { icon: '🛒', title: 'Retail chains & kiranas', desc: 'D-Cut and U/W-Cut bags for counters, supermarket chains, and kirana stores across Chennai.' },
  { icon: '🍽️', title: 'Hotels & restaurants', desc: 'Food pouches, carry bags, and garbage bags for restaurants, hotels, and food delivery operations.' },
  { icon: '🏢', title: 'Corporate IT parks', desc: 'Garbage bags and carry bags for office campuses in OMR, Tidel Park, and other IT corridors.' },
  { icon: '🏥', title: 'Hospitals & medical centers', desc: 'BPA-free, certified bags for patient discharge and pharmacy counters. Bulk supply with GST invoicing.' },
  { icon: '🛕', title: 'Temples', desc: 'Prasad bags for Kapaleeshwarar, Parthasarathy, and temples across the Chennai metro area.' },
];

const specs = [
  ['D-Cut Bags', '8×12 to 16×24 inch', 'Retail, boutiques'],
  ['U/W-Cut Bags', '8×10 to 27×30 inch', 'Kirana, hospitals, supermarkets'],
  ['Garbage Bags', '17×19 to 35×45 inch', 'Offices, canteens, hospitals'],
  ['Food Pouches', '4×6 to 8×11 inch', 'Food businesses, dhabas'],
  ['Butter Covers', '9×9 and 12×12 inch', 'Dairy, cloud kitchens'],
];

const faqs = [
  {
    q: 'How long does delivery to Chennai take?',
    a: '2–3 working days from our Hyderabad facility. Express delivery options available on request.',
  },
  {
    q: 'Are your bags compliant with Tamil Nadu\'s plastic ban?',
    a: 'Yes. All products are DRDO certified and fully compliant with Tamil Nadu\'s plastic ban regulations for commercial use.',
  },
  {
    q: 'What are the bulk pricing tiers for Chennai orders?',
    a: 'Pricing scales with volume. WhatsApp us your monthly requirement for a custom bulk quote tailored to your Chennai business.',
  },
  {
    q: 'Do you supply to all Tamil Nadu cities?',
    a: 'Yes — Chennai, Coimbatore, Madurai, Salem, Tiruchirappalli, and all other cities across Tamil Nadu.',
  },
];

export default function CityChennai() {
  useEffect(() => {
    document.title = 'Biodegradable Carry Bags in Chennai — DRDO Certified Manufacturer | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Buy biodegradable carry bags in Chennai from DRDO certified manufacturer RDN Bio Products. BPA-free PBAT bags, bulk supply for retail, restaurants, hospitals, temples. Delivery across Tamil Nadu.';
  }, []);

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">✓ DRDO Certified Technology</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🚛 2-3 Day Chennai Delivery</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable Carry Bags in Chennai — DRDO Certified Manufacturer
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 640, color: 'rgba(255,255,255,0.92)' }}>
            Delivery within 2–3 days to Chennai and Tamil Nadu from our Hyderabad factory. DRDO certified compliance for Tamil Nadu's plastic ban — BPA-free PBAT bags for retail, restaurants, hospitals, and temples.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href={WA_CITY} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp for Quote</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ DRDO Certified', '🚛 2-3 Day Chennai Delivery', '📞 Direct Manufacturer'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Delivery Matters */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why local delivery matters for Chennai businesses</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Direct manufacturer supply with pan Tamil Nadu reach</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 32 }}>
            {whyDeliveryCards.map(c => (
              <div key={c.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries in Chennai */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Industries we serve in Chennai</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Trusted by businesses across Tamil Nadu</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20, marginTop: 32 }}>
            {industries.map(ind => (
              <div key={ind.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{ind.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{ind.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Specs Table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Products &amp; sizes available</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Full range of biodegradable packaging delivered to Chennai</p>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Product</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Sizes Available</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Ideal For</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--green-dark)', fontWeight: 700 }}>{row[0]}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row[1]}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently asked questions — Chennai</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((f, i) => (
              <div key={f.q} className="faq-item" style={{ cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-summary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: 'var(--green-dark)', fontSize: 15 }}>{f.q}</span>
                  <span className="faq-icon" style={{ marginLeft: 12, flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions exclude="chennai" />

      {/* CTA Banner */}
      <section style={{ padding: '56px 0', background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Chennai businesses — get a quote in 60 minutes
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 28, maxWidth: 520, margin: '0 auto 28px' }}>
            2–3 day delivery across Tamil Nadu. DRDO certified. Direct manufacturer pricing with GST invoicing.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={WA_CITY} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 24px' }}>
              {WA_SVG} WhatsApp for Bulk Quote
            </a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 24px' }}>📞 Call +91-7301222666</a>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            RDN Bio Products LLP · Karmanghat, Saroornagar, Hyderabad 500035 · Delivering pan India
          </p>
          <Link to="/contact" style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 600, marginTop: 8, display: 'inline-block' }}>View full contact details →</Link>
        </div>
      </section>
    </main>
  );
}
