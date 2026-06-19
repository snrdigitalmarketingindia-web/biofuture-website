import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20want%20to%20switch%20my%20business%20to%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const STEPS = [
  { step: '1', icon: '📊', title: 'Audit your current bag usage', desc: 'List all bag types, sizes, and estimated monthly quantities used across your business. Include carry bags, garbage bags, food pouches, and any other packaging. This becomes your order specification.' },
  { step: '2', icon: '🔍', title: 'Find a DRDO-certified supplier', desc: 'Ask potential suppliers for their DRDO certification document before ordering. Verify the manufacturer name on the certificate matches their company. Avoid "eco-friendly" claims without documentation.' },
  { step: '3', icon: '📦', title: 'Start with your highest-volume sizes', desc: 'Order your most-used size first. Get a stock of 1,000–5,000 units to test usage patterns. Your existing staff will adapt quickly — biodegradable bags function the same way as conventional plastic for counter use.' },
  { step: '4', icon: '🏪', title: 'Update your counter and display', desc: 'Place a small sign at your counter: "We use DRDO certified biodegradable bags." Many customers notice and appreciate it. This is also your defence if an inspector visits.' },
  { step: '5', icon: '📋', title: 'Keep documentation accessible', desc: 'File the DRDO certificate and purchase invoices. If GHMC or municipal inspectors visit, these documents prove compliance immediately. Keep digital copies on your phone for quick access.' },
  { step: '6', icon: '🔄', title: 'Set up a standing supply arrangement', desc: 'Running out of compliant bags mid-operation creates pressure to use old plastic stock. Set up a regular WhatsApp order with your supplier so you never face a stockout.' },
];

const FAQS = [
  { q: 'How do I switch my business from plastic to biodegradable bags?', a: 'Start by auditing your current bag usage by size and quantity. Then find a DRDO-certified supplier (ask for the certificate before ordering). Order your most-used size first — typically 1,000–5,000 units. File the DRDO certificate for inspector visits. Set up a standing order so you never run out of compliant stock.' },
  { q: 'Will biodegradable bags work the same as plastic bags for my customers?', a: 'Yes. DRDO-certified PBAT biodegradable bags are functionally identical to conventional plastic carry bags at the counter. They carry the same loads, can be printed with your brand, and dispense from the same counter holders. Your staff and customers will not notice a difference in day-to-day use.' },
  { q: 'How much more expensive are biodegradable bags compared to plastic?', a: 'DRDO-certified PBAT bags are typically 30–60% more expensive per unit than equivalent conventional plastic bags. However, this is a small fraction of most businesses\' operating costs. A mid-size retail shop spending ₹3,000 per month on plastic bags might spend ₹4,000–₹5,000 on biodegradable — the difference is manageable and far less than a single ₹25,000 plastic ban fine.' },
  { q: 'What happens to my old plastic bag stock when I switch?', a: 'Once you switch, do not use up old plastic stock — you remain in violation until all plastic bags are removed from use. Dispose of existing plastic stock responsibly (return to supplier for recycling if possible, or include in your registered plastic waste pickup). Document the disposal date. Do not mix old plastic bags with new biodegradable stock.' },
  { q: 'How long does it take to set up supply of biodegradable bags?', a: 'For standard sizes (plain biodegradable bags), most orders can be dispatched within 1–2 working days (subject to stock availability). For custom-printed bags with your logo, lead time is 7–10 working days after artwork approval. WhatsApp your requirement and the supplier confirms availability before you finalise the order.' },
];

export default function GeoSwitchToEco() {
  useEffect(() => {
    document.title = 'How to Switch Your Business from Plastic to Biodegradable Bags — Step-by-Step | RDN Bio';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Step-by-step guide to switching your business from plastic to biodegradable bags — auditing usage, finding DRDO certified suppliers, documentation, and setting up ongoing supply.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'How to Switch to Biodegradable Bags', item: 'https://rdnbio.com/#/how-to-switch-to-biodegradable-bags' },
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
            <span className="drdo-badge">🔄 Step-by-Step Guide</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🛍️ All Business Types</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            How to Switch Your Business from Plastic to Biodegradable Bags
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> The switch takes one order. Audit your bag sizes and quantities → find a DRDO-certified supplier (ask for the certificate) → order your main size → keep the certificate on file for inspectors → set up a standing WhatsApp order so you never run out. Total time from decision to compliance: 1–3 days.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Start Your Switch Today</a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Us</a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>6 Steps to Switch — From Decision to Compliance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, marginTop: 36 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? '#f8fdf3' : '#fff', borderRadius: 16, padding: '28px 24px', border: '1px solid #dbeec9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, background: 'var(--green-mid)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>{s.step}</div>
                  <span style={{ fontSize: 24 }}>{s.icon}</span>
                </div>
                <div style={{ fontWeight: 700, color: '#222', marginBottom: 10, fontSize: 15 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common questions */}
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
            Ready to Switch? Start With One WhatsApp Message
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            Tell us your bag size and quantity. We'll confirm availability and get you compliant within days.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary" style={{ background: '#fff', color: 'var(--green-dark)' }}>WhatsApp Your Requirement</a>
            <Link to="/get-quote" className="btn-wa">Get Formal Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
