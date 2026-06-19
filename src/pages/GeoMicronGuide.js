import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20micron%20biodegradable%20bag';
const TEL = 'tel:+917301222666';

const MICRON_TABLE = [
  { micron: '12–20 micron', type: 'Ultra-thin', use: 'Produce bags, in-store fruit/veg bags, small item wrapping', loadKg: '0.5–1 kg', suitable: 'Supermarket produce sections' },
  { micron: '25–30 micron', type: 'Lightweight', use: 'Small retail counter bags, medical packs, pharmacy bags', loadKg: '1–2 kg', suitable: 'Pharmacy, chemist, light retail' },
  { micron: '35–40 micron', type: 'Standard', use: 'Daily retail, sweet shops, garments, dry goods', loadKg: '2–4 kg', suitable: 'General retail, kiranas, sweet shops' },
  { micron: '40–50 micron', type: 'Medium-heavy', use: 'Vegetables, groceries, restaurant carry-out, moderate loads', loadKg: '3–5 kg', suitable: 'Supermarkets, food retail, restaurants' },
  { micron: '50–75 micron', type: 'Heavy duty', use: 'Fish, meat, wet produce, bulk grocery, industrial light use', loadKg: '5–8 kg', suitable: 'Fish/meat markets, bulk retail' },
  { micron: '75+ micron', type: 'Industrial', use: 'Garbage bags, large waste collection, institutional waste', loadKg: '8–20 kg', suitable: 'Hotels, hospitals, municipal waste' },
];

const FAQS = [
  { q: 'What micron biodegradable bag do I need for my shop?', a: 'For standard retail (kirana, garments, general merchandise), 35–40 micron D-Cut or U-Cut bags are the most practical choice — strong enough for typical purchases (2–4 kg) without being unnecessarily thick. For food service and wet produce, go to 40–50 micron. For garbage bags and institutional use, 75+ micron.' },
  { q: 'What is the minimum micron allowed under India\'s plastic ban?', a: 'Under India\'s Plastic Waste Management Rules, conventional plastic carry bags must be at least 120 micron. However, this minimum does not apply to DRDO-certified biodegradable PBAT bags — they can be any micron because they are not plastic. DRDO-certified bags at 30–40 micron are fully compliant regardless of thickness.' },
  { q: 'Are thicker micron bags better?', a: 'Thicker bags carry more weight and are more durable — but are also more expensive and take longer to biodegrade. For most retail counter use, 35–40 micron is the sweet spot. Go thicker only when load requirements demand it (wet fish, heavy groceries, waste collection). Buying oversized micron bags for light use wastes material and adds cost.' },
  { q: 'Do micron requirements differ for PBAT and plastic bags?', a: 'Yes. Conventional plastic bags need 120 micron to be legally compliant. PBAT biodegradable bags can be any micron because they are an approved alternative to plastic (not subject to the 120 micron rule). A 40 micron PBAT bag is both legally compliant and functionally adequate for most retail applications.' },
  { q: 'What micron is best for garbage bags?', a: 'For household garbage bags: 30–40 micron for small kitchen bins. For commercial waste: 50–75 micron for normal office/shop waste bins. For heavy or wet commercial waste (hotels, hospitals, fish markets): 75–100 micron. For municipal and large bin liners: 100+ micron.' },
];

export default function GeoMicronGuide() {
  useEffect(() => {
    document.title = 'Biodegradable Bag Micron Guide — Which Thickness Do You Need? | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Complete guide to biodegradable bag micron thickness — which micron for retail, food, fish/meat, garbage. PBAT bags micron vs load capacity chart for Indian businesses.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Biodegradable Bag Micron Guide', item: 'https://rdnbio.com/#/biodegradable-bag-micron-guide' },
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
            <span className="drdo-badge">📏 Buyer's Guide</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🛍️ All Industries</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable Bag Micron Guide — Which Thickness Do You Need?
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> For standard retail use, 35–40 micron. For food/wet produce, 40–50 micron. For fish/meat markets, 50–75 micron. For garbage bags, 75+ micron. Unlike plastic bags (minimum 120 micron under law), DRDO-certified PBAT bags are compliant at any micron.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Get Micron Recommendation</a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Us</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Micron vs Use Case — Quick Reference</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Micron</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Best For</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Load Capacity</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Industries</th>
                </tr>
              </thead>
              <tbody>
                {MICRON_TABLE.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.micron}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.type}</td>
                    <td style={{ padding: '12px 16px', color: '#333' }}>{row.use}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333' }}>{row.loadKg}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Key Fact: PBAT bags are compliant at any micron</h2>
          <div style={{ maxWidth: 760, margin: '28px auto 0', background: '#fff', border: '2px solid var(--green-mid)', borderRadius: 16, padding: '28px 32px' }}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
              India's plastic bag minimum thickness rule (120 micron) applies to <strong>conventional plastic bags</strong> — not to certified biodegradable alternatives. DRDO-certified PBAT bags are exempt from the 120 micron minimum because they are not classified as plastic under the Plastic Waste Management Rules.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444', margin: 0 }}>
              This means a 40 micron PBAT bag is fully compliant with India's plastic ban, while a 100 micron conventional plastic bag is illegal for retail carry bag use. The compliance question for PBAT is only about <strong>DRDO certification</strong> — not micron.
            </p>
          </div>
        </div>
      </section>

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
            Not Sure Which Micron You Need?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            WhatsApp us your business type and use case — we'll recommend the right micron and size combination.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary" style={{ background: '#fff', color: 'var(--green-dark)', display: 'flex', alignItems: 'center', gap: 8 }}>
              💬 Get Free Recommendation
            </a>
            <Link to="/get-quote" className="btn-wa">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
