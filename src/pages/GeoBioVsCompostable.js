import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20biodegradable%20bags%20for%20my%20business';
const TEL = 'tel:+917301222666';

const COMPARISON = [
  { feature: 'What it means', bio: 'Breaks down naturally by microorganisms over time in soil or water', compostable: 'Breaks down only under specific industrial composting conditions (55–60°C, controlled humidity)' },
  { feature: 'Time to break down', bio: '6 months to 5 years depending on conditions', compostable: '90–180 days — but only in an industrial composting facility' },
  { feature: 'Where it breaks down', bio: 'In soil, landfill, water — natural environments', compostable: 'Only in industrial composting facilities (rarely available in India)' },
  { feature: 'Indian law compliance', bio: 'DRDO-certified PBAT bags are approved plastic alternatives under India\'s ban', compostable: 'Must meet BIS IS 17088 to qualify — most imported compostable bags do not' },
  { feature: 'Cost', bio: 'Comparable to conventional plastic bags (₹2–₹5 per bag)', compostable: 'Higher cost (₹8–₹20 per bag); less widely available in India' },
  { feature: 'Practical for India', bio: '✅ Yes — infrastructure-independent, widely available', compostable: '⚠️ Limited — requires industrial composting facilities not yet widespread' },
  { feature: 'DRDO certification', bio: '✅ Available from Indian manufacturers including RDN Bio Products', compostable: '⚠️ Few Indian suppliers have DRDO-certified compostable products' },
];

const FAQS = [
  { q: 'Is biodegradable the same as compostable?', a: "No. Biodegradable means a material can be broken down by microorganisms over time under natural conditions. Compostable is a stricter standard — compostable materials must break down within 90–180 days in an industrial composting environment at 55–60°C. All compostable items are technically biodegradable, but not all biodegradable items are compostable." },
  { q: 'Which is better for India — biodegradable or compostable bags?', a: "For most Indian businesses, biodegradable PBAT bags are the more practical choice. Compostable bags require industrial composting infrastructure (which is not yet widely available in India) to break down as promised. Biodegradable PBAT bags break down in natural soil conditions found across India, making them a genuinely effective environmental alternative right now." },
  { q: 'What does PBAT stand for and is it biodegradable?', a: "PBAT stands for Polybutylene Adipate Terephthalate. It is a bio-based co-polyester that is certified biodegradable under international standards (EN 13432, ASTM D6400) and Indian standards (IS 17088). RDN Bio Products uses PBAT blended with cornstarch — the cornstarch component helps the material begin breaking down faster when exposed to soil microorganisms." },
  { q: 'What Indian standard covers biodegradable carry bags?', a: "BIS IS 17088:2021 is India's standard for 'Compostable Plastics — Specifications.' For biodegradable carry bags, DRDO certification serves as the primary compliance credential recognized by state pollution control boards. Bags should also carry a BIS certification mark. Always ask your supplier for both DRDO and BIS documentation." },
  { q: 'Can biodegradable bags be thrown in regular bins?', a: "Yes. Unlike compostable bags (which should go to industrial composting), biodegradable PBAT bags can be disposed of in regular waste bins and will break down in landfill conditions or open soil over time. In India, where industrial composting infrastructure is limited, this makes biodegradable bags the more realistic choice for actual environmental benefit." },
];

export default function GeoBioVsCompostable() {
  useEffect(() => {
    document.title = 'Biodegradable vs Compostable Bags — Complete Comparison for India 2026 | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = "Biodegradable vs compostable bags — what's the difference, which complies with India's plastic ban, and which is better for Indian businesses. DRDO certified PBAT explained.";
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Biodegradable vs Compostable Bags', item: 'https://rdnbio.com/#/biodegradable-vs-compostable' },
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
            <span className="drdo-badge">🔬 Technical Guide</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🌿 India-Specific</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable vs Compostable Bags — What's the Difference for Indian Businesses?
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> Biodegradable bags break down naturally in soil over months to years. Compostable bags only decompose in industrial composting facilities (55–60°C) — unavailable in most Indian cities. For India's plastic ban compliance, DRDO-certified biodegradable PBAT bags are the practical, legal, and cost-effective choice.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Get DRDO Certified Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Ask a Question</a>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Side-by-side comparison</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '25%' }}>Feature</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37.5%', background: '#2d7d0a' }}>🌿 Biodegradable (PBAT)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37.5%' }}>♻️ Compostable</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.feature}</td>
                    <td style={{ padding: '12px 16px', color: '#2d5a0e', background: i % 2 === 0 ? '#f0fae4' : '#e6f5d8' }}>{row.bio}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.compostable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PBAT explained */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>What is PBAT? India's preferred biodegradable material</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#555', marginTop: 24, textAlign: 'center' }}>
            PBAT (Polybutylene Adipate Terephthalate) is a certified biodegradable polymer approved by DRDO and recognised under India's plastic ban framework as a legal plastic alternative. RDN Bio Products blends PBAT with cornstarch for faster decomposition.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, marginTop: 28 }}>
            {[
              { icon: '🌱', title: 'Breaks down in soil', desc: 'PBAT decomposes in natural soil conditions — no industrial facility needed.' },
              { icon: '🔬', title: 'DRDO certified', desc: "Approved by India's Defence Research and Development Organisation — recognized by all state PCBs." },
              { icon: '🍽️', title: 'BPA-free', desc: 'No bisphenol-A or harmful plasticizers — safe for food contact applications.' },
              { icon: '💰', title: 'Cost-comparable', desc: 'Priced similarly to conventional plastic bags — no major cost premium for switching.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{c.title}</h3>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently asked questions</h2>
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
            Ready to switch to DRDO certified biodegradable bags?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28, fontSize: 15 }}>RDN Bio Products — DRDO certified PBAT bags, bulk supply, pan India delivery.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>Get Bulk Quote</Link>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15 }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
