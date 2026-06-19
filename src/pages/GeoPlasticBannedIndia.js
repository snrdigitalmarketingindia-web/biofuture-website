import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20plastic%20ban%20compliant%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const BANNED = [
  { item: 'Plastic carry bags under 75 micron', effective: 'July 2022', rule: 'PWM Rules 2021' },
  { item: 'Plastic carry bags under 120 micron', effective: 'Dec 2022', rule: 'PWM Rules 2021' },
  { item: 'Plastic sticks for earbuds, balloons, flags, candy', effective: 'July 2022', rule: 'SUP Ban' },
  { item: 'Plastic cutlery (plates, cups, glasses, forks, spoons, knives)', effective: 'July 2022', rule: 'SUP Ban' },
  { item: 'Plastic straws', effective: 'July 2022', rule: 'SUP Ban' },
  { item: 'Plastic wrapping on cigarette packets (under 100 sq cm)', effective: 'July 2022', rule: 'SUP Ban' },
  { item: 'Plastic invitation cards and PVC banners (under 100 micron)', effective: 'July 2022', rule: 'SUP Ban' },
  { item: 'Expanded polystyrene (thermocol) for decorations and packaging', effective: 'July 2022', rule: 'SUP Ban' },
  { item: 'Oxo-degradable plastics (all types)', effective: 'July 2022', rule: 'PWM Rules 2021' },
];

const ALLOWED = [
  { item: 'DRDO-certified biodegradable PBAT carry bags (any micron)', note: 'Accepted as compliant alternative by all state PCBs' },
  { item: 'BIS IS 17088 certified compostable bags', note: 'Must meet Indian standard for industrial composting' },
  { item: 'Paper bags (uncoated or food-grade coating)', note: 'Widely accepted; must be genuine paper not plastic-coated' },
  { item: 'Cloth bags (jute, cotton, canvas)', note: 'Best sustainability option; higher cost' },
  { item: 'Plastic bags 120 micron and above (not carry bags)', note: 'For non-carry-bag industrial use; retail carry bags still restricted' },
];

const FINES = [
  { state: 'Telangana / GHMC', first: '₹25,000', repeat: '₹50,000+', extra: 'Possible temporary closure' },
  { state: 'Andhra Pradesh', first: '₹5,000–₹25,000', repeat: 'Up to ₹1 lakh', extra: 'Seizure of goods' },
  { state: 'Maharashtra', first: '₹5,000', repeat: '₹10,000–₹25,000', extra: 'Criminal prosecution possible' },
  { state: 'Tamil Nadu', first: '₹5,000–₹10,000', repeat: '₹25,000+', extra: 'Business closure notices' },
  { state: 'Karnataka', first: '₹10,000', repeat: '₹25,000+', extra: 'Environmental damage charges' },
  { state: 'Central (EPA default)', first: 'Up to ₹1 lakh', repeat: 'Up to ₹1 lakh/day', extra: '5 years imprisonment possible' },
];

const FAQS = [
  { q: 'What plastic bags are banned in India in 2024?', a: 'India banned plastic carry bags under 75 micron from July 2022, and under 120 micron from December 2022. Single-use plastic items (cutlery, straws, earbuds, candy sticks, etc.) were banned from July 2022. Oxo-degradable plastics are also banned. Expanded polystyrene for decoration and packaging is banned. The ban is enforced by state pollution control boards and municipal authorities.' },
  { q: 'What plastic bags are still allowed in India?', a: 'Carry bags above 120 micron for non-retail use are still permitted in some contexts. However, the practical standard for retail and commercial carry bags is to use DRDO-certified biodegradable alternatives, which are accepted by all state enforcement authorities as the compliant replacement for banned plastic carry bags.' },
  { q: 'What is the fine for using plastic bags in India?', a: 'Fines vary by state. Under the central Environment Protection Act, fines of up to ₹1 lakh per offence and up to 5 years imprisonment are possible for persistent offenders. State-level enforcement (GHMC, TMC, BBMP etc.) typically imposes ₹5,000–₹50,000 for first offences, rising for repeat violations. Some states also seize goods and issue temporary closure notices.' },
  { q: 'Do the plastic bag bans apply to all businesses?', a: 'Yes. The Plastic Waste Management Rules apply to all producers, importers, brand owners, local bodies, and retailers. There is no exemption for small businesses, street vendors, or informal sector operators. Enforcement action is taken against shops, street food stalls, markets, hospitals, schools, and all other commercial establishments.' },
  { q: 'Is there a medical or food exemption to the plastic bag ban?', a: 'No general exemption exists for carry bags. Specific medical devices and sterile packaging may have exemptions for functional reasons, but plastic carry bags at pharmacy and hospital counters are subject to the same ban. Food-grade carry bags must be DRDO-certified biodegradable or paper-based to be compliant.' },
];

export default function GeoPlasticBannedIndia() {
  useEffect(() => {
    document.title = 'Plastic Bags Banned in India — Complete List 2024 | What\'s Allowed | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Complete list of plastic bags and single-use plastics banned in India under 2021 rules. What is banned, what is allowed, state-wise fines. DRDO certified alternatives for businesses.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Plastic Bags Banned in India', item: 'https://rdnbio.com/#/plastic-bags-banned-india' },
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
            <span className="drdo-badge">📋 Official Guide</span>
            <span className="drdo-badge" style={{ background: '#c0392b', borderColor: '#c0392b', color: '#fff' }}>🇮🇳 Updated 2024</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Plastic Bags Banned in India — Complete List & What's Allowed
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> India banned plastic carry bags under 120 micron, single-use plastic items (cutlery, straws, earbuds), and oxo-degradable plastics under the Plastic Waste Management Rules 2021 (effective July–December 2022). The legal compliant alternative is DRDO-certified biodegradable PBAT bags.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Get Compliant Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 WhatsApp for Quote</a>
          </div>
        </div>
      </section>

      {/* Banned list */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', color: '#c0392b' }}>❌ What is Banned</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#c0392b', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Banned Item</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Effective Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Rule</th>
                </tr>
              </thead>
              <tbody>
                {BANNED.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff7f7' : '#fff', borderBottom: '1px solid #f5dada' }}>
                    <td style={{ padding: '12px 16px', color: '#333' }}>❌ {row.item}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{row.effective}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Allowed list */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', color: 'var(--green-dark)' }}>✅ What is Allowed (Legal Alternatives)</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '55%' }}>Allowed Alternative</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {ALLOWED.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', color: '#2d6a0a', fontWeight: 600 }}>✅ {row.item}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fines */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>State-Wise Fines for Plastic Bag Use</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>State / Authority</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>First Offence</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Repeat Offence</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Additional</th>
                </tr>
              </thead>
              <tbody>
                {FINES.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#222' }}>{row.state}</td>
                    <td style={{ padding: '12px 16px', color: '#c0392b', fontWeight: 600 }}>{row.first}</td>
                    <td style={{ padding: '12px 16px', color: '#c0392b', fontWeight: 600 }}>{row.repeat}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{row.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#888', marginTop: 16, textAlign: 'center' }}>
            Fine amounts are indicative based on publicly available enforcement notifications. Actual amounts vary by case.
          </p>
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

      <section style={{ padding: '56px 0', background: 'var(--green-mid)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Stay Compliant — Switch to DRDO Certified Biodegradable Bags
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP — DRDO certified manufacturer in Hyderabad. Compliance documentation with every order.
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
