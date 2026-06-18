import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20want%20to%20know%20more%20about%20RDN%20Bio%20Products%20manufacturing';
const TEL = 'tel:+917301222666';

const STEPS = [
  { step: '1', icon: '🌿', title: 'Raw material sourcing', desc: 'We source PBAT (Polybutylene Adipate Terephthalate) and food-grade cornstarch from certified suppliers. Both materials are tested for purity and biodegradability compliance before acceptance into production.' },
  { step: '2', icon: '⚗️', title: 'Compound blending', desc: 'PBAT and cornstarch are blended in precise ratios in our compounding unit. The cornstarch component accelerates the biodegradation process and reduces the material\'s non-renewable content. Blend ratios are validated against DRDO certification parameters.' },
  { step: '3', icon: '🏭', title: 'Film extrusion', desc: 'The PBAT-cornstarch compound is extruded into thin film using blown film extrusion machines. Film thickness is controlled to within ±2 microns of specification. Extrusion parameters are monitored continuously.' },
  { step: '4', icon: '✂️', title: 'Bag conversion', desc: 'Extruded film is converted into carry bags, garbage bags, or pouches using automatic conversion machines. Sealing, cutting, and punching (for D-Cut and U-Cut bags) are performed in the same inline process.' },
  { step: '5', icon: '🖨️', title: 'Printing (custom orders)', desc: 'For branded/OEM orders, bags are printed using flexographic printing with water-based, food-safe inks. Single and multi-color runs are possible. Print registration and color accuracy are checked per batch.' },
  { step: '6', icon: '🔬', title: 'Quality inspection', desc: 'Every production batch undergoes physical testing: tensile strength, elongation at break, thickness, seal integrity, and load capacity. Biodegradability parameters are validated against DRDO certification specifications.' },
  { step: '7', icon: '📦', title: 'Packing & dispatch', desc: 'Approved bags are counted, bundled, and packed per standard packs (typically 100 or 500 units per bundle). Orders are dispatched same-day for confirmed orders before 2 PM from our Hyderabad facility.' },
];

const CERTS = [
  { cert: 'DRDO Certification', body: 'Defence Research & Development Organisation, Government of India', scope: 'PBAT biodegradable material technology certification' },
  { cert: 'BIS IS 17088', body: 'Bureau of Indian Standards', scope: 'Compostable plastics specification — the Indian standard for biodegradable packaging' },
  { cert: 'GST Registration', body: 'Government of India', scope: 'GSTIN: Available on invoice' },
  { cert: 'MSME Registration', body: 'Ministry of MSME, Government of India', scope: 'Registered manufacturer' },
];

const FAQS = [
  { q: 'Where is RDN Bio Products manufactured?', a: "RDN Bio Products LLP manufactures at its facility in Karmanghat, Saroornagar, Hyderabad, Telangana (PIN 500 035). All products are made in-house — we do not outsource manufacturing to third parties. LLPIN: ACI-9987, established August 2024." },
  { q: 'What material are RDN Bio Products bags made from?', a: 'Our bags are made from PBAT (Polybutylene Adipate Terephthalate) blended with food-grade cornstarch. PBAT is a certified biodegradable polymer; cornstarch is a natural, renewable material that accelerates biodegradation and reduces the petroleum-derived content of the finished bag.' },
  { q: 'What quality tests do your bags undergo?', a: 'Every production batch is tested for: (1) tensile strength — load capacity in kg, (2) elongation at break — flexibility and durability, (3) film thickness — accuracy to specification, (4) seal integrity — no leaks or premature seal failure, (5) visual inspection — print quality, cut accuracy, and appearance. Batches failing any test are rejected and reprocessed.' },
  { q: 'Can we visit the manufacturing facility?', a: 'Yes. We welcome factory visits from established buyers and potential B2B partners. Please contact us in advance to schedule a visit. Our facility is located in Hyderabad, Telangana and is accessible from Hyderabad International Airport in approximately 30 minutes.' },
  { q: 'Do you manufacture PBAT granules as well?', a: 'Yes. In addition to finished bags, RDN Bio Products also produces PBAT biodegradable granules (Bio Compound Granules PBAT) for sale to other manufacturers, plastic converters, and compounders who want to produce their own biodegradable products. MOQ for granules is 100 kg.' },
];

export default function GeoManufacturing() {
  useEffect(() => {
    document.title = 'How Biodegradable Bags Are Made — RDN Bio Products Manufacturing Process | Hyderabad';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = "How biodegradable PBAT bags are manufactured at RDN Bio Products' Hyderabad facility. Raw material sourcing, PBAT blending, film extrusion, quality testing, DRDO certification process.";
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Manufacturing Process', item: 'https://rdnbio.com/#/manufacturing-process' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const orgSchema = {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: 'RDN Bio Products LLP',
    url: 'https://rdnbio.com',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#10-01-78/47/5, Srinivasa Nagar Colony, Karmanghat',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500035',
      addressCountry: 'IN',
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">🏭 Hyderabad Factory</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>✓ DRDO Certified Technology</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            How Biodegradable Bags Are Made — RDN Bio Products Manufacturing Process
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> RDN Bio Products manufactures PBAT-cornstarch biodegradable bags at its Hyderabad, Telangana facility using DRDO-certified technology. The 7-step process covers raw material blending, film extrusion, bag conversion, optional custom printing, and quality testing before dispatch.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Get a Bulk Quote</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Ask About Our Process</a>
          </div>
        </div>
      </section>

      {/* Manufacturing steps */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our 7-step manufacturing process</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {STEPS.map(s => (
              <div key={s.step} style={{ display: 'flex', gap: 20, background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '22px 20px', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: 'var(--green-mid)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--green-mid)', letterSpacing: '0.1em', marginBottom: 4 }}>STEP {s.step}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Certifications & registrations</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: '#fff' }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  {['Certification', 'Issuing Body', 'Scope'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CERTS.map((row, i) => (
                  <tr key={row.cert} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.cert}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.body}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Manufacturing — frequently asked questions</h2>
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
            Order direct from the manufacturer
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28, fontSize: 15 }}>No middlemen. Factory pricing. DRDO certified PBAT bags — pan India delivery in 2–3 days.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>Get Bulk Quote</Link>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15 }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
