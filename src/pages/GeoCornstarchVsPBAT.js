import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20want%20to%20know%20about%20PBAT%20cornstarch%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const COMPARISON = [
  { feature: 'What it is', pbat: 'Synthetic co-polyester + cornstarch blend', corn: 'Bags made primarily from cornstarch/PLA (polylactic acid)' },
  { feature: 'Breakdown conditions', pbat: 'Natural soil, moist landfill, warm conditions', corn: 'Industrial composting facility (55–60°C) required for full breakdown' },
  { feature: 'Time to decompose', pbat: '6 months – 3 years in Indian soil', corn: '90–180 days in industrial compost; years in regular soil' },
  { feature: 'Cost', pbat: 'Moderate — widely manufactured in India', corn: 'Higher cost; most cornstarch bags imported' },
  { feature: 'Strength / load', pbat: 'Strong — equivalent to conventional plastic', corn: 'Moderate — can be brittle in heat or when wet' },
  { feature: 'Performance in Indian heat', pbat: 'Stable — designed for tropical conditions', corn: 'Can soften or deform in high heat (40°C+)' },
  { feature: 'India-available infrastructure', pbat: 'No special infrastructure needed — degrades in natural soil', corn: 'Requires industrial composting facilities (rare in India)' },
  { feature: 'DRDO certification', pbat: '✅ Available — DRDO certified Indian manufacturers exist', corn: '⚠️ Few DRDO certified cornstarch bag suppliers in India' },
  { feature: 'BIS IS 17088', pbat: '✅ PBAT bags can meet IS 17088 (compostable standard)', corn: '✅ PLA/cornstarch bags designed for IS 17088 compliance' },
];

const FAQS = [
  { q: 'Are cornstarch bags better than PBAT bags?', a: 'For most Indian businesses, PBAT + cornstarch blend bags are the more practical choice. Pure cornstarch (PLA) bags require industrial composting at 55–60°C to break down as intended — infrastructure that is not yet widely available in India. PBAT bags break down in natural soil conditions found everywhere in India, making them more genuinely effective at this time.' },
  { q: 'What percentage of cornstarch is in RDN Bio Products\' bags?', a: 'RDN Bio Products uses PBAT blended with cornstarch in a ratio designed to optimise biodegradation rate and bag performance. The cornstarch component provides an initial food source for soil microorganisms, which then continue breaking down the PBAT polymer. This formula is what DRDO tested and certified.' },
  { q: 'Can I use cornstarch bags in India\'s climate?', a: 'Pure PLA or cornstarch bags can become soft or deform in extreme heat (above 40°C), which is common in many parts of India during summer. PBAT + cornstarch blends are more heat-stable because the PBAT component provides structural integrity even in warm conditions. For hot retail environments (open-air markets, unairconditioned shops), PBAT blends are more reliable.' },
  { q: 'Is there any difference between "biodegradable" and "compostable" bags?', a: 'Yes — biodegradable means the material breaks down over time in natural conditions. Compostable is a stricter term meaning it breaks down within 90–180 days in an industrial composting environment. Pure cornstarch (PLA) bags are compostable but require industrial composting. PBAT bags are biodegradable in natural soil. For India, biodegradable PBAT is more practically useful right now because industrial composting infrastructure is limited.' },
  { q: 'Why do some biodegradable bags have cornstarch in them?', a: 'Cornstarch is added to PBAT bags for two reasons: (1) It provides a natural, plant-based carbon source that soil microorganisms readily consume, which kick-starts the biodegradation process. (2) It reduces the overall cost of the bag by partially replacing synthetic PBAT with a cheaper natural material. The DRDO-certified PBAT + cornstarch blend was specifically developed to optimise this combination for Indian conditions.' },
];

export default function GeoCornstarchVsPBAT() {
  useEffect(() => {
    document.title = 'Cornstarch vs PBAT Biodegradable Bags — Which is Better for India? | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Cornstarch bags vs PBAT biodegradable bags — which is better for India, what is the difference, and why DRDO-certified PBAT+cornstarch blends are the practical choice for Indian businesses.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Cornstarch vs PBAT Bags', item: 'https://rdnbio.com/#/cornstarch-vs-pbat-bags' },
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
            <span className="drdo-badge">🔬 Material Comparison</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🇮🇳 India Context</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Cornstarch vs PBAT Biodegradable Bags — Which is Better for India?
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> PBAT + cornstarch blended bags are the better choice for India. Pure cornstarch (PLA) bags need industrial composting (55°C+) to fully break down — not yet widely available in India. PBAT + cornstarch blends break down in natural Indian soil and are stronger in hot weather. DRDO-certified PBAT + cornstarch is the standard used by Indian manufacturers.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Buy PBAT + Cornstarch Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Ask a Question</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Cornstarch (PLA) vs PBAT — Side by Side</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '26%' }}>Feature</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37%', background: '#2d7d0a' }}>🌿 PBAT + Cornstarch (RDN Bio)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37%', background: '#888' }}>🌽 Pure Cornstarch / PLA</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333' }}>{row.feature}</td>
                    <td style={{ padding: '12px 16px', color: '#2d6a0a' }}>{row.pbat}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.corn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
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
            Buy DRDO Certified PBAT + Cornstarch Bags — Made in Hyderabad
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP — the DRDO-certified blend that works in Indian soil conditions.
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
