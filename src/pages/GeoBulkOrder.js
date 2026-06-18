import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20a%20bulk%20order%20quote%20for%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const MOQ_TABLE = [
  { product: 'D-Cut Carry Bags', moq: '1,000 units', unit: 'per size', notes: 'All 7 standard sizes available' },
  { product: 'U/W-Cut Carry Bags', moq: '1,000 units', unit: 'per size', notes: 'All 14 standard sizes available' },
  { product: 'Garbage Bags', moq: '500 units', unit: 'per size', notes: 'All 8 standard sizes available' },
  { product: 'Food Pouches', moq: '1,000 units', unit: 'per size', notes: 'Custom sizes on request' },
  { product: 'Butter Covers', moq: '1,000 units', unit: 'per size', notes: 'Standard + custom sizes' },
  { product: 'Custom Printed Bags', moq: '1,000 units', unit: 'per design', notes: '7–10 day lead time after proof approval' },
  { product: 'PBAT Granules', moq: '100 kg', unit: 'per order', notes: 'For manufacturers and converters' },
];

const TIERS = [
  { label: 'Starter', qty: '1,000–4,999 units', price: 'Standard pricing', benefit: 'Entry level. Good for trials and small businesses.' },
  { label: 'Business', qty: '5,000–9,999 units', price: '5–8% discount', benefit: 'Popular with restaurants, kirana chains, and small institutions.' },
  { label: 'Enterprise', qty: '10,000–24,999 units', price: '10–15% discount', benefit: 'For large retailers, hotel chains, and corporate campuses.' },
  { label: 'Wholesale', qty: '25,000+ units', price: 'Best pricing', benefit: 'For distributors, large institutions, and government supply.' },
];

const FAQS = [
  { q: 'What is the minimum order quantity for biodegradable bags?', a: 'Minimum order is 1,000 units for carry bags (D-Cut and U-Cut) and 500 units for garbage bags. For custom printed bags, the MOQ is 1,000 units per design. PBAT granules have an MOQ of 100 kg.' },
  { q: 'How long does delivery take for bulk orders?', a: 'Standard bulk orders (stock sizes) are dispatched same-day for confirmed orders placed before 2 PM. Delivery to your location takes 2–3 working days pan India (1–2 days to Delhi NCR). Custom printed orders require 7–10 working days for production plus 2–3 days for delivery.' },
  { q: 'Can we mix different bag types and sizes in one bulk order?', a: 'Yes. You can combine different bag types (D-Cut, U-Cut, garbage bags), different sizes, and even standard and custom printed bags in a single order. MOQ applies per product-size combination. There is no minimum total order value.' },
  { q: 'Do you offer credit terms for regular bulk buyers?', a: 'Yes. Established businesses with a track record of regular orders can apply for credit terms (net 15 or net 30). First orders are typically prepaid or partially prepaid. Contact our sales team to discuss credit terms for your business.' },
  { q: 'Can you supply on a monthly standing order?', a: 'Yes. We offer standing order agreements for businesses with predictable monthly requirements. Standing orders get priority dispatch, reserved inventory, and better pricing than ad-hoc orders. Contact us to set up a monthly supply agreement.' },
];

export default function GeoBulkOrder() {
  useEffect(() => {
    document.title = 'Bulk Order Biodegradable Bags India — MOQ, Pricing & Delivery Guide | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Complete guide to bulk ordering biodegradable bags from RDN Bio Products. MOQ from 500 units. Pricing tiers, delivery timelines, product specs. DRDO certified PBAT bags — pan India supply.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Bulk Order Biodegradable Bags', item: 'https://rdnbio.com/#/bulk-order-biodegradable-bags' },
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
            <span className="drdo-badge">📦 MOQ from 500 Units</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🚛 Same-Day Dispatch</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Bulk Order Biodegradable Bags — MOQ, Pricing & Delivery Guide
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> Minimum order is 1,000 units for carry bags and 500 units for garbage bags. Volume discounts start at 5,000 units. Standard in-stock sizes are dispatched same-day. Pan India delivery in 2–3 working days.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Get Bulk Quote on WhatsApp</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* MOQ table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Minimum order quantities by product</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  {['Product', 'MOQ', 'Per', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MOQ_TABLE.map((row, i) => (
                  <tr key={row.product} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.product}</td>
                    <td style={{ padding: '12px 16px', color: '#2d5a0e', fontWeight: 700 }}>{row.moq}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.unit}</td>
                    <td style={{ padding: '12px 16px', color: '#888', fontSize: 12 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Volume pricing tiers */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Volume pricing tiers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginTop: 32 }}>
            {TIERS.map((t, i) => (
              <div key={t.label} style={{ background: i === 3 ? 'var(--green-dark)' : '#fff', border: `2px solid ${i === 3 ? 'var(--green-dark)' : '#d4e8b0'}`, borderRadius: 16, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: i === 3 ? '#a8e06b' : 'var(--green-mid)', marginBottom: 8 }}>{t.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: i === 3 ? '#fff' : 'var(--green-dark)', marginBottom: 4 }}>{t.qty}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: i === 3 ? '#a8e06b' : 'var(--green-mid)', marginBottom: 12 }}>{t.price}</div>
                <p style={{ fontSize: 13, color: i === 3 ? 'rgba(255,255,255,0.8)' : '#666', lineHeight: 1.6 }}>{t.benefit}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#888', marginTop: 16, textAlign: 'center' }}>Contact us for exact pricing — rates vary by bag type, size, and mix of products.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Bulk ordering — frequently asked questions</h2>
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
            Ready to place your bulk order?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28, fontSize: 15 }}>WhatsApp us your requirements — pricing quote within 2 hours. Same-day dispatch on confirmation.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>💬 WhatsApp Your Order</a>
            <Link to="/get-quote" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15 }}>📩 Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
