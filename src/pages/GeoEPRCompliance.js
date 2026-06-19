import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20EPR%20compliant%20biodegradable%20packaging';
const TEL = 'tel:+917301222666';

const WHO_NEEDS_EPR = [
  { type: 'Brand Owners', desc: 'Companies whose products are sold in plastic packaging — FMCG, food & beverage, consumer goods.' },
  { type: 'Importers', desc: 'Businesses importing goods in plastic packaging into India.' },
  { type: 'Producers (Plastic Manufacturers)', desc: 'Manufacturers of plastic packaging materials including bags, containers, films, and wraps.' },
  { type: 'Retailers (Large Format)', desc: 'Large retail chains with significant plastic packaging footprint — supermarkets, hypermarkets.' },
];

const HOW_BIODEGRADABLE_HELPS = [
  { icon: '📉', title: 'Reduces plastic credit liability', desc: 'Each kg of certified biodegradable packaging used reduces the plastic credit liability under your EPR certificate. DRDO-certified bags count towards your plastic reduction targets.' },
  { icon: '📋', title: 'Documentation for EPR audit', desc: 'We provide DRDO certificates, material composition reports, and quantity statements — all documents accepted for EPR compliance submissions to CPCB and state PCBs.' },
  { icon: '🌱', title: 'Sustainability reporting', desc: 'Biodegradable packaging adoption data (kg switched, reduction achieved) supports annual CSR and sustainability reports, ESG disclosures, and investor sustainability metrics.' },
  { icon: '🏆', title: 'Demonstrates good faith compliance', desc: 'Companies actively switching to certified biodegradable packaging demonstrate good faith compliance to enforcement authorities, which can influence penalty severity in case of disputes.' },
];

const FAQS = [
  { q: 'What is EPR (Extended Producer Responsibility) in India?', a: 'EPR (Extended Producer Responsibility) is a policy under India\'s Plastic Waste Management Rules that makes producers, importers, and brand owners (PIBOs) responsible for the plastic packaging they put into the market. Under EPR, companies must register with CPCB, set targets for reducing, reusing, or recycling their plastic footprint, and purchase plastic credits to offset any shortfall in meeting their targets. EPR applies to all businesses with plastic packaging above a threshold volume.' },
  { q: 'Who needs to register for EPR in India?', a: 'All Producers (manufacturers of plastic packaging), Importers of plastic packaging, and Brand Owners (companies using plastic packaging for their products) with a turnover above the CPCB threshold must register. Retailers with significant plastic packaging footprint may also need to comply. Small producers under the MSME exemption threshold may be excluded, but should verify with CPCB guidelines.' },
  { q: 'How does using biodegradable bags help with EPR compliance?', a: 'DRDO-certified biodegradable PBAT bags are classified as an approved sustainable alternative under India\'s plastic waste framework. Switching from conventional plastic carry bags to DRDO-certified biodegradable bags reduces your EPR plastic credit liability for the quantity switched. We provide material composition certificates and quantity statements for EPR compliance documentation.' },
  { q: 'What documentation do I need from a biodegradable bag supplier for EPR purposes?', a: 'For EPR compliance submissions, you typically need: (1) DRDO certification copy from your supplier, (2) Material composition report confirming PBAT/biodegradable material, (3) Quantity invoices showing kg purchased, (4) Supplier GST registration and MSME credentials. RDN Bio Products provides all of these with bulk orders.' },
  { q: 'Does switching to biodegradable bags eliminate my EPR obligation?', a: 'No — EPR applies to your overall plastic packaging footprint across all product types. Switching carry bags to biodegradable reduces your plastic carry bag liability component, but EPR obligations cover all plastic packaging categories. Consult a CPCB-registered EPR service provider for your specific compliance plan. We can support the carry bag component of your strategy.' },
];

export default function GeoEPRCompliance() {
  useEffect(() => {
    document.title = 'EPR Compliance Packaging India — Biodegradable Bags & Extended Producer Responsibility | RDN Bio';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'EPR compliance guide for Indian businesses — what is EPR, who needs to register, how DRDO certified biodegradable bags reduce plastic credit liability. Documentation for CPCB compliance.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'EPR Compliance Packaging India', item: 'https://rdnbio.com/#/epr-compliance-packaging-india' },
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
            <span className="drdo-badge">📋 EPR Guide</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🇮🇳 CPCB Compliance</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            EPR Compliance & Biodegradable Packaging — Guide for Indian Businesses
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> EPR (Extended Producer Responsibility) requires producers, importers, and brand owners to take responsibility for their plastic packaging waste. Switching to DRDO-certified biodegradable PBAT bags reduces your plastic credit liability under EPR, and we provide all documentation (DRDO certificate, material reports, quantity invoices) needed for CPCB compliance submissions.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Get EPR-Ready Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Enquire About Documentation</a>
          </div>
        </div>
      </section>

      {/* Who needs EPR */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Who Needs EPR Registration in India?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 36 }}>
            {WHO_NEEDS_EPR.map((item, i) => (
              <div key={i} style={{ background: '#f8fdf3', borderRadius: 14, padding: '22px 20px', border: '1px solid #dbeec9' }}>
                <div style={{ fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10, fontSize: 15 }}>{item.type}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How biodegradable helps */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>How Biodegradable Bags Help Your EPR Strategy</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 36 }}>
            {HOW_BIODEGRADABLE_HELPS.map((item, i) => (
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
            Get EPR-Ready Biodegradable Bags with Full Documentation
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            DRDO certificate, material composition report, quantity invoices — all provided for your EPR compliance submissions.
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
