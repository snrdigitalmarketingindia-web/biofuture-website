import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20Telangana%20plastic%20ban%20compliant%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const DISTRICTS = [
  { district: 'Hyderabad / GHMC', enforcement: 'Very Active', authority: 'GHMC + TSPCB', notes: '6-zone enforcement teams, regular raids' },
  { district: 'Warangal Urban', enforcement: 'Active', authority: 'WUDA + TSPCB', notes: 'Industrial and commercial areas targeted' },
  { district: 'Karimnagar', enforcement: 'Active', authority: 'KUDA + District Collector', notes: 'Market area enforcement' },
  { district: 'Nizamabad', enforcement: 'Moderate', authority: 'District Administration', notes: 'Periodic raids, especially mandi areas' },
  { district: 'Khammam', enforcement: 'Active', authority: 'KUDA + TSPCB', notes: 'Border enforcement with AP' },
  { district: 'Nalgonda', enforcement: 'Moderate', authority: 'District Administration', notes: 'Regular market inspections' },
  { district: 'Rangareddy', enforcement: 'Active', authority: 'HMDA + Local ULBs', notes: 'Outer Hyderabad ring — rapid enforcement growth' },
  { district: 'Medchal', enforcement: 'Active', authority: 'HMDA + Local ULBs', notes: 'IT corridor enforcement' },
];

const FAQS = [
  { q: 'What is Telangana\'s plastic ban — when did it start?', a: 'Telangana enforces the central Plastic Waste Management Rules 2021 along with state-level plastic ban notifications. The state banned plastic carry bags under 75 micron from 2016, and strengthened enforcement aligned with the national ban in 2022 covering all plastic carry bags under 120 micron, single-use items, and oxo-degradable plastics. TSPCB (Telangana State Pollution Control Board) coordinates statewide enforcement.' },
  { q: 'Which industries are most targeted in Telangana\'s plastic ban enforcement?', a: 'Telangana enforcement prioritises: (1) Retail establishments including kiranas, supermarkets, and textile shops, (2) Food businesses including restaurants, hotels, dhabas, and street food stalls, (3) Vegetable and fruit mandis and wet markets, (4) Sweet shops and mithai stores, (5) Industrial units producing or using plastic packaging. GHMC specifically targets hotels and restaurants in the Hyderabad zone.' },
  { q: 'Are DRDO certified bags accepted by Telangana enforcement authorities?', a: 'Yes. DRDO-certified PBAT bags are the primary accepted alternative across all Telangana enforcement authorities including GHMC, TSPCB, HMDA, and district administrations. When inspected, businesses should show the DRDO certificate from their bag supplier. RDN Bio Products provides certificate copies with every order.' },
  { q: 'What is the fine for plastic bag use in Telangana?', a: 'Under Telangana\'s plastic ban, first-time fines typically range from ₹5,000 to ₹25,000. GHMC Hyderabad fines start at ₹25,000 and go up to ₹50,000 or more for repeat violations. The Environment Protection Act provides for fines up to ₹1 lakh and imprisonment for serious offences.' },
  { q: 'Do small shops and street vendors need to comply with Telangana\'s plastic ban?', a: 'Yes. There is no size exemption in Telangana\'s plastic ban. Street food vendors, small kiranas, pan shops, and all commercial establishments are subject to enforcement. Enforcement against small sellers is typically more about public visibility and education initially, but repeated violations attract the same fines as large establishments.' },
  { q: 'Can I get biodegradable bags delivered anywhere in Telangana?', a: 'Yes. RDN Bio Products delivers across all Telangana districts from our Karmanghat, Hyderabad factory. Hyderabad and Rangareddy: fast delivery subject to stock availability. Warangal, Karimnagar, Nalgonda, Khammam, Nizamabad: typically 1–2 working days subject to availability. WhatsApp to confirm stock before ordering.' },
];

export default function GeoTelanganaPlasticBan() {
  useEffect(() => {
    document.title = 'Telangana Plastic Ban — Complete Business Guide 2024 | Compliance & DRDO Certified Bags';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Telangana plastic ban guide for businesses — state rules, district enforcement, fines, and how to get DRDO certified biodegradable bags from a Hyderabad manufacturer.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Telangana Plastic Ban Guide', item: 'https://rdnbio.com/#/telangana-plastic-ban-guide' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">🏛️ State Guide</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🌿 Telangana 2024</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Telangana Plastic Ban — Complete Business Compliance Guide
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> Telangana bans plastic carry bags under 120 micron, single-use plastic items, and oxo-degradable plastics. GHMC, TSPCB, and district authorities all enforce actively. DRDO-certified PBAT bags from a Hyderabad manufacturer (RDN Bio Products, Karmanghat) are the accepted compliant alternative across all Telangana districts.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/biodegradable-bags-hyderabad" className="btn-primary">Shop Telangana Supply</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Get Bulk Quote</a>
          </div>
        </div>
      </section>

      {/* District enforcement table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>District-Wise Enforcement Status</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>District</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Enforcement Level</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Authority</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {DISTRICTS.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#222' }}>{row.district}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: row.enforcement === 'Very Active' ? '#c0392b' : row.enforcement === 'Active' ? '#e67e22' : '#27ae60' }}>{row.enforcement}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.authority}</td>
                    <td style={{ padding: '12px 16px', color: '#555', fontSize: 13 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why RDN */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Telangana Businesses Choose RDN Bio Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 36 }}>
            {[
              { icon: '🏭', title: 'Telangana Manufacturer', desc: 'Our factory is in Karmanghat, Hyderabad — a Telangana manufacturer. No interstate logistics, faster delivery across Telangana.' },
              { icon: '📜', title: 'DRDO Certified', desc: 'DRDO certification accepted by GHMC, TSPCB, and all Telangana district enforcement authorities. Certificate copies with every order.' },
              { icon: '💰', title: 'Direct Factory Price', desc: 'No Hyderabad distributor markup. Order direct. Telangana businesses get manufacturer pricing.' },
              { icon: '📦', title: 'All District Delivery', desc: 'We deliver to all 33 Telangana districts. Warangal, Karimnagar, Nizamabad, Khammam and all other districts covered.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px 20px', border: '1px solid #dbeec9' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: '#222', marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: 32 }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ borderBottom: '1px solid #dbeec9', paddingBottom: 18, marginBottom: 18 }}>
                <summary style={{ fontWeight: 700, fontSize: 15, color: '#222', cursor: 'pointer', paddingBottom: 8 }}>{f.q}</summary>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#555', marginTop: 8, paddingLeft: 4 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: 'var(--green-mid)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Telangana's Preferred DRDO Certified Biodegradable Bag Manufacturer
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP — Karmanghat, Hyderabad. Serving all 33 Telangana districts with DRDO certified bags.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary" style={{ background: '#fff', color: 'var(--green-dark)' }}>Get Bulk Quote</Link>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
