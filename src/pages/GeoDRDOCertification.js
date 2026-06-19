import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20want%20to%20know%20more%20about%20DRDO%20certified%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const FAQS = [
  { q: 'What is DRDO certification for biodegradable bags?', a: 'DRDO (Defence Research and Development Organisation) certification for biodegradable bags is a quality and compliance certification issued by India\'s premier defence research agency under the Ministry of Defence. It confirms that the bag material meets Indian standards for biodegradability, material composition, and performance. DRDO-certified bags are accepted as compliant alternatives to plastic under India\'s Plastic Waste Management Rules.' },
  { q: 'Why does DRDO certify biodegradable bags — they are a defence agency?', a: 'DRDO\'s mandate extends beyond defence hardware to materials science, polymer research, and environmental technology. DRDO developed the original PBAT-based biodegradable formulation used by Indian manufacturers and retains certification authority for this technology. The certification is considered more rigorous than commercial third-party certifications because it originates from a government research body with polymer expertise.' },
  { q: 'Is DRDO certification mandatory for biodegradable bags in India?', a: 'DRDO certification is not universally mandatory by law for all biodegradable bags, but it has become the de facto standard expected by state pollution control boards, GHMC, and government procurement bodies. Several states specifically require DRDO-certified alternatives when approving plastic ban compliance. Government tenders and municipal supply contracts typically specify DRDO certification.' },
  { q: 'What is the difference between DRDO certified and BIS certified biodegradable bags?', a: 'BIS IS 17088 is India\'s standard for compostable plastics — it applies to bags designed for industrial composting. DRDO certification applies to biodegradable PBAT bags designed to break down in natural soil conditions. Both are valid, but they serve different product types. DRDO certification is more relevant to the carry bags and garbage bags used in Indian retail and waste management, where industrial composting infrastructure is limited.' },
  { q: 'How do I verify if a biodegradable bag is genuinely DRDO certified?', a: 'Ask your supplier for the DRDO certification document — it will include a certificate number, issuing date, and the specific product/material details covered. Genuine certificates are issued on DRDO letterhead with an official signature. Cross-reference the manufacturer\'s name on the certificate with the company you are buying from. Be cautious of suppliers who claim DRDO certification but cannot produce the original document.' },
  { q: 'Does RDN Bio Products have DRDO certification?', a: 'Yes. RDN Bio Products LLP holds DRDO certification for its PBAT + cornstarch biodegradable carry bags and garbage bags. We are one of the few manufacturers in Hyderabad with this certification. Our LLPIN is ACI-9987. We provide DRDO certificate copies with all bulk orders and to government/institutional buyers for procurement documentation.' },
];

const STEPS = [
  { icon: '🔬', step: '1', title: 'DRDO developed the formula', desc: 'DRDO scientists at DMSRDE (Defence Materials and Stores Research and Development Establishment) developed the PBAT+cornstarch biodegradable polymer blend specifically for India\'s climate and waste conditions.' },
  { icon: '🏭', step: '2', title: 'Manufacturer applies for licence', desc: 'A biodegradable bag manufacturer applies to DRDO with material specifications, production process details, and sample batches for testing in DRDO labs.' },
  { icon: '🧪', step: '3', title: 'Lab testing and validation', desc: 'DRDO labs test the samples for biodegradability rate, material composition, load strength, food safety, and compliance with IS 17088 standards. This process takes 3–6 months.' },
  { icon: '📜', step: '4', title: 'Certification issued', desc: 'If tests pass, DRDO issues a certification letter confirming the manufacturer\'s product meets the DRDO biodegradable bag standard. The certificate covers specific product types and thickness ranges.' },
  { icon: '🔄', step: '5', title: 'Ongoing compliance', desc: 'Certified manufacturers are subject to periodic re-testing and factory audits. The certification must be renewed. Manufacturers must maintain production consistency with the certified formula.' },
];

export default function GeoDRDOCertification() {
  useEffect(() => {
    document.title = 'What is DRDO Certification for Biodegradable Bags? — Complete Guide | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'DRDO certification for biodegradable bags explained — what it is, why it matters, how to verify it, and which manufacturers have it. India\'s gold standard for biodegradable packaging compliance.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'What is DRDO Certification', item: 'https://rdnbio.com/#/what-is-drdo-certification-biodegradable-bags' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What is DRDO Certification for Biodegradable Bags?',
    description: 'Complete guide to DRDO certification for biodegradable bags in India — what it is, why it matters, and how to verify it.',
    author: { '@type': 'Organization', name: 'RDN Bio Products LLP' },
    publisher: { '@type': 'Organization', name: 'RDN Bio Products LLP', url: 'https://rdnbio.com' },
    datePublished: '2026-06-18',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">🏛️ Official Guide</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🇮🇳 India Standard</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            What is DRDO Certification for Biodegradable Bags?
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> DRDO (Defence Research and Development Organisation) certification is India's government-backed quality mark for biodegradable bags. It confirms a bag's material meets Indian biodegradability and safety standards. It is the strongest certification credential for plastic ban compliance — more rigorous than commercial third-party marks, and specifically required by government tenders and many state enforcement authorities.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Buy DRDO Certified Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Ask a Question</a>
          </div>
        </div>
      </section>

      {/* What is DRDO */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32 }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem,3vw,1.9rem)', fontWeight: 800, color: 'var(--green-dark)', marginBottom: 16 }}>
                DRDO — India's Defence Research Body
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                The <strong>Defence Research and Development Organisation (DRDO)</strong> is India's premier scientific agency under the Ministry of Defence, responsible for military technology, materials science, and advanced polymer research.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                DRDO's materials division (DMSRDE — Defence Materials and Stores Research and Development Establishment) developed India's own PBAT + cornstarch biodegradable polymer formulation — specifically engineered to decompose in Indian climate conditions.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444' }}>
                Because DRDO developed the underlying technology, they also certify manufacturers who produce bags using this formulation. A DRDO certificate means the product has been verified by the same government body that created the standard.
              </p>
            </div>
            <div style={{ background: 'var(--green-pale)', borderRadius: 16, padding: '28px 24px' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Why DRDO certification matters</h3>
              {[
                { icon: '🏛️', title: 'Government-backed', desc: 'Issued by a Ministry of Defence agency — the highest credibility level for an Indian certification.' },
                { icon: '🧪', title: 'Lab-verified', desc: 'The manufacturer\'s bags are tested in DRDO labs for biodegradability, safety, and performance — not just self-declared.' },
                { icon: '📋', title: 'Accepted everywhere', desc: 'State PCBs, GHMC, GHMC, and government tenders recognise DRDO certification as proof of compliance.' },
                { icon: '🔄', title: 'Periodically renewed', desc: 'Unlike one-time certificates, DRDO requires re-testing. Current certification means ongoing compliance.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#222', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>How DRDO Certification Works</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>The process from application to certification</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20, marginTop: 36 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px 20px', border: '1px solid #dbeec9', textAlign: 'center' }}>
                <div style={{ width: 40, height: 40, background: 'var(--green-mid)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, margin: '0 auto 14px' }}>{s.step}</div>
                <div style={{ fontSize: 22, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, color: '#222', marginBottom: 8, fontSize: 14 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RDN differentiator */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>DRDO vs Other Certifications</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Certification</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Issuing Body</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>What it covers</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Accepted for India plastic ban?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cert: 'DRDO Certification', body: 'Defence R&D Organisation, Govt of India', covers: 'PBAT biodegradable bags — Indian conditions', accepted: '✅ Yes — gold standard' },
                  { cert: 'BIS IS 17088', body: 'Bureau of Indian Standards', covers: 'Compostable plastics (industrial composting)', accepted: '✅ Yes — but requires composting infrastructure' },
                  { cert: 'CPCB Guidelines', body: 'Central Pollution Control Board', covers: 'General plastic waste rules', accepted: '⚠️ Broad guidelines, not product-specific' },
                  { cert: 'TÜV / DIN CERTCO', body: 'European certification bodies', covers: 'EN 13432 compostability', accepted: '⚠️ Not widely recognised by Indian PCBs' },
                  { cert: 'Self-declaration', body: 'Manufacturer', covers: 'Nothing verifiable', accepted: '❌ Not accepted as compliance proof' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: i === 0 ? 'var(--green-dark)' : '#222' }}>{row.cert}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.body}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.covers}</td>
                    <td style={{ padding: '12px 16px' }}>{row.accepted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
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

      {/* CTA */}
      <section style={{ padding: '56px 0', background: 'var(--green-mid)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Buy DRDO Certified Biodegradable Bags Direct from the Manufacturer
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP — DRDO certified manufacturer in Hyderabad. Certificate copies provided with every bulk order.
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
