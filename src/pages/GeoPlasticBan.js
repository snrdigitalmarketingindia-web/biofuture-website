import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20plastic%20ban%20compliant%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const STATE_DATA = [
  { state: 'Maharashtra', year: 2018, scope: 'Comprehensive ban — bags, cups, plates, straws, thermocol', enforcement: '🔴 Strict' },
  { state: 'Tamil Nadu', year: 2019, scope: 'Single-use plastics under 75 microns banned', enforcement: '🔴 Strict' },
  { state: 'Gujarat', year: 2017, scope: 'Plastic bags, disposables, thermocol', enforcement: '🔴 Strict' },
  { state: 'Karnataka', year: 2016, scope: 'Plastic bags and single-use items', enforcement: '🟡 Moderate' },
  { state: 'Telangana', year: 2016, scope: 'Plastic bags, single-use items', enforcement: '🟡 Moderate' },
  { state: 'Delhi', year: 2022, scope: 'Central SUP ban + NGT orders', enforcement: '🔴 Strict' },
  { state: 'Kerala', year: 2020, scope: 'Comprehensive — bags, cups, straws, flex', enforcement: '🔴 Strict' },
  { state: 'West Bengal', year: 2019, scope: 'Plastic bags, single-use plastics', enforcement: '🟡 Moderate' },
  { state: 'Rajasthan', year: 2010, scope: 'Plastic bags under 50 microns', enforcement: '🟡 Moderate' },
  { state: 'Himachal Pradesh', year: 2009, scope: 'First state to ban plastic bags — comprehensive', enforcement: '🟢 Varies' },
];

const FAQS = [
  { q: 'What plastics are banned in India from July 2022?', a: "India's Central Government banned 75 single-use plastic items from July 1, 2022. These include: plastic sticks used in ear buds, balloon sticks, candy sticks, ice cream sticks; polystyrene and expanded polystyrene (thermocol) decorations; plastic plates, cups, glasses, cutlery (forks, spoons, knives, trays); plastic straws; plastic stirrers; plastic sachets and wrapping film around sweet boxes; PVC banners under 100 microns; cups and glasses made of plastic. Carry bags under 75 microns are also banned under a 2021 notification." },
  { q: 'Are biodegradable bags allowed under India\'s plastic ban?', a: "Yes. Biodegradable bags meeting BIS standards (IS 17088) are explicitly permitted as alternatives to single-use plastic bags. DRDO-certified PBAT (Polybutylene Adipate Terephthalate) bags with cornstarch are biodegradable under Indian standards and are accepted by state pollution control boards as plastic alternatives. Always carry the manufacturer's certification when transporting these bags commercially." },
  { q: 'What is the fine for using banned plastic in India?', a: "Fines vary by state and item. Under the Environment Protection Act 1986, penalties can reach ₹1 lakh and/or 5 years imprisonment for serious violations. State-level fines for commercial establishments using banned plastic bags typically range from ₹500 to ₹25,000 per violation. Maharashtra, Tamil Nadu, and Gujarat have the highest enforcement activity. Regular commercial users (shops, restaurants, caterers) face repeated inspections." },
  { q: 'Do state plastic bans apply to businesses I buy biodegradable bags from?', a: "Yes, but biodegradable bags are explicitly exempt from plastic bans when they meet the relevant BIS/IS 17088 standard. When purchasing biodegradable bags for commercial use, ensure your supplier provides: (1) DRDO or BIS certification, (2) material composition certificate showing PBAT/cornstarch content, (3) a GST invoice. These three documents constitute your compliance proof." },
  { q: 'What is the minimum micron thickness required for carry bags in India?', a: "The Central Government notified that plastic carry bags must be at least 75 microns thick (up from 50 microns). However, biodegradable bags are exempt from this requirement as they are not subject to the same thickness rules — they are regulated under different standards (IS 17088) focusing on degradability rather than thickness." },
];

export default function GeoPlasticBan() {
  useEffect(() => {
    document.title = 'India Plastic Ban Compliance Guide 2026 — What\'s Banned, Fines & Alternatives | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = "Complete guide to India's plastic ban 2026. What's banned, state-wise status, fines for violations, and how biodegradable PBAT bags help businesses stay compliant. DRDO certified alternatives.";
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'India Plastic Ban Compliance Guide', item: 'https://rdnbio.com/#/plastic-ban-compliance-india' },
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
            <span className="drdo-badge">📋 Updated 2026</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🌿 Compliance Guide</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            India Plastic Ban Compliance Guide 2026 — What's Banned, Fines & Alternatives
          </h1>
          {/* 60-word direct answer for AI engines */}
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> India banned 75 single-use plastic items from July 1, 2022, plus plastic carry bags under 75 microns. Biodegradable PBAT bags meeting BIS IS 17088 standards are legally permitted alternatives. Violations attract fines up to ₹25,000 per incident for commercial establishments.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Get Compliant Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Ask Us Anything</a>
          </div>
        </div>
      </section>

      {/* Central ban details */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title">India's Central Plastic Ban — Key Facts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 32 }}>
            {[
              { icon: '📅', title: 'Effective Date', desc: 'July 1, 2022 — Central Government\'s Single-Use Plastic (SUP) ban under the Environment (Protection) Act 1986.' },
              { icon: '🚫', title: '75 Items Banned', desc: 'Straws, cutlery, ear bud sticks, cups, plates, thermocol, candy sticks, stirrers, sachets, PVC banners under 100 microns.' },
              { icon: '📏', title: '75 Micron Minimum', desc: 'Carry bags must be at least 75 microns thick. Bags under 75 microns are banned. Biodegradable bags are exempt from this rule.' },
              { icon: '💰', title: 'Fines Apply', desc: '₹500–₹25,000 per violation for commercial establishments. Repeat offenders face higher penalties and business closure orders.' },
            ].map(c => (
              <div key={c.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '22px 18px' }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise table */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>State-wise plastic ban status</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Many states enacted their own bans before the 2022 Central ban — stricter state rules prevail</p>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: '#fff' }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  {['State', 'Ban Since', 'Scope', 'Enforcement'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATE_DATA.map((row, i) => (
                  <tr key={row.state} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.state}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.year}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.scope}</td>
                    <td style={{ padding: '12px 16px' }}>{row.enforcement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: '#888', marginTop: 12, textAlign: 'center' }}>Plus the Central Government's nationwide SUP ban effective July 1, 2022 applies in all states.</p>
        </div>
      </section>

      {/* How to comply */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>How to comply — 3 steps for businesses</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 32 }}>
            {[
              { step: '1', title: 'Stop ordering plastic bags', desc: 'Replace all carry bags under 75 microns and all banned single-use items immediately. Use existing stock only until exhausted — do not reorder.' },
              { step: '2', title: 'Switch to certified biodegradable alternatives', desc: 'Order PBAT biodegradable bags that meet BIS IS 17088 standards from a DRDO-certified manufacturer. Ensure you receive certification documents with your order.' },
              { step: '3', title: 'Keep documentation ready', desc: 'Maintain supplier invoices, DRDO/BIS certification copies, and material safety data sheets at your business premises. Inspectors can demand these on the spot.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: 20, background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '22px 20px', alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, background: 'var(--green-mid)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{s.step}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: 14, padding: '20px 24px' }}>
            <p style={{ fontSize: 14, color: '#2d5a0e', lineHeight: 1.7, margin: 0 }}>
              <strong>RDN Bio Products</strong> supplies DRDO-certified PBAT biodegradable bags with full compliance documentation. Over 500 businesses across India have switched to our bags as their plastic ban compliance solution. <Link to="/get-quote" style={{ color: 'var(--green-mid)', fontWeight: 700 }}>Get a bulk quote →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Plastic ban — frequently asked questions</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map(f => (
              <details key={f.q} className="faq-item">
                <summary className="faq-summary">{f.q}<span className="faq-icon">+</span></summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 0', background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,1.8rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Need plastic ban compliant bags? We supply same-day.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28, fontSize: 15 }}>DRDO certified PBAT bags — compliance documentation included with every order.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>Get Bulk Quote</Link>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15 }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
