import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20OEM%20or%20private%20label%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const PROCESS = [
  { step: '1', title: 'Share your requirements', desc: 'Tell us the bag type (D-Cut, U-Cut, garbage bag), size, quantity, and your artwork/logo. WhatsApp or email is fine.' },
  { step: '2', title: 'Get a proof', desc: 'We send a digital print proof within 24 hours. One round of revisions included at no charge.' },
  { step: '3', title: 'Confirm & produce', desc: 'Once you approve the proof, production begins. Lead time: 7–10 working days from approval.' },
  { step: '4', title: 'Quality check & dispatch', desc: 'Every batch undergoes quality inspection before dispatch. Pan India delivery in 2–3 working days.' },
];

const PRICING = [
  { qty: '1,000 units', type: 'Any bag type', print: 'Single color', delivery: '7–10 days', note: 'Starter MOQ' },
  { qty: '5,000 units', type: 'Any bag type', print: '1–2 colors', delivery: '7–10 days', note: 'Better pricing' },
  { qty: '10,000 units', type: 'Any bag type', print: '1–3 colors', delivery: '7–10 days', note: 'Best pricing' },
  { qty: '25,000+', type: 'Any bag type', print: 'Full color', delivery: 'Negotiable', note: 'Volume contract' },
];

const FAQS = [
  { q: 'What is the minimum order for custom printed biodegradable bags?', a: 'Our minimum order for custom printed (OEM/private label) biodegradable bags is 1,000 units per design. This applies to D-Cut bags, U-Cut bags, and garbage bags. For multiple designs ordered together, the 1,000-unit MOQ applies per individual design.' },
  { q: 'Can we print our company logo, website, and phone number on the bags?', a: "Yes. You can print any combination of: company name, logo, tagline, website URL, phone number, address, certification marks (like 'DRDO Certified Biodegradable'), and QR codes. We support single-color and multi-color printing. Supply your artwork as an AI, EPS, or high-resolution PDF file." },
  { q: 'What is the lead time for custom printed orders?', a: 'Standard lead time is 7–10 working days from design approval. For urgent orders (5+ working days), contact us — we can sometimes accommodate with a rush fee. Delivery to your location takes an additional 2–3 working days.' },
  { q: 'Do you do white-label supply for distributors and resellers?', a: "Yes. We supply white-label biodegradable bags to distributors and resellers who sell under their own brand. You receive DRDO-certified bags with your branding and can include your own documentation. We do not print 'RDN Bio Products' on white-label orders. An NDA is available if required." },
  { q: 'What file formats do you accept for artwork?', a: 'We accept Adobe Illustrator (AI), EPS, and high-resolution PDF (300 DPI minimum). For logos, vector format is strongly preferred — it ensures clean print quality at any size. If you only have a PNG or JPG logo, our design team can vector-trace it at no extra charge for orders above 5,000 units.' },
];

export default function GeoOEMPrivateLabel() {
  useEffect(() => {
    document.title = 'OEM & Private Label Biodegradable Bags India — Custom Printed | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Custom printed OEM and private label biodegradable bags from DRDO certified manufacturer RDN Bio Products. MOQ 1,000 units. Your logo, your brand. 7-10 day lead time. Pan India supply.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'OEM & Private Label Biodegradable Bags', item: 'https://rdnbio.com/#/oem-private-label-biodegradable-bags' },
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
            <span className="drdo-badge">🖨️ Custom Printing</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>✓ MOQ 1,000 Units</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            OEM & Private Label Biodegradable Bags — Your Brand, Our Certified Manufacturing
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> RDN Bio Products manufactures custom-printed OEM and private label biodegradable bags from MOQ 1,000 units. Your logo, brand name, and contact details printed on DRDO-certified PBAT bags. Lead time 7–10 working days after artwork approval.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Start OEM Order</a>
            <a href={TEL} className="btn-call">📞 Discuss Requirements</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>How OEM/private label ordering works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {PROCESS.map(s => (
              <div key={s.step} style={{ display: 'flex', gap: 20, background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '22px 20px', alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, background: 'var(--green-mid)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{s.step}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>OEM pricing tiers</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Price per unit decreases with higher quantities — contact us for exact pricing</p>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: '#fff' }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  {['Quantity', 'Bag Type', 'Print Colors', 'Lead Time', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICING.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.qty}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.type}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.print}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.delivery}</td>
                    <td style={{ padding: '12px 16px', color: '#888', fontSize: 12 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#888', marginTop: 12, textAlign: 'center' }}>Exact pricing depends on bag type, size, and print complexity. Contact us for a quote.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>OEM / private label — frequently asked questions</h2>
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
            Ready to start your OEM order?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28, fontSize: 15 }}>Share your logo and requirements on WhatsApp — we'll send a print proof within 24 hours.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>💬 WhatsApp Artwork</a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15 }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
