import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20want%20to%20verify%20genuine%20DRDO%20certified%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const RED_FLAGS = [
  { flag: 'No DRDO certificate when asked', detail: 'Any genuine DRDO certified manufacturer can produce the actual DRDO certificate document. If they only show a logo on the bag or claim verbal certification, it\'s fake.' },
  { flag: 'Vague labels — "eco", "green", "degradable"', detail: '"Eco-friendly," "green," or "degradable" without specifying DRDO or PBAT is a marketing claim, not a certification. Genuine DRDO-certified bags say exactly that — "DRDO Certified Biodegradable."' },
  { flag: 'Price much cheaper than genuine PBAT', detail: 'Genuine PBAT + cornstarch biodegradable bags cost more to manufacture than cheap LDPE plastic. If the price is too close to conventional plastic, it likely is conventional plastic or an illegal oxo-degradable product.' },
  { flag: 'Certificate from unknown private lab only', detail: 'Some suppliers show testing certificates from private labs with no government backing. These are not equivalent to DRDO certification. The issuing body must be DRDO (a Ministry of Defence agency).' },
  { flag: 'No manufacturer name on packaging', detail: 'Genuine biodegradable bags from certified manufacturers include their company name, GSTIN, and manufacturing address on the packaging. Anonymous or unbranded bags cannot be verified.' },
  { flag: 'Bags that feel identical to regular LDPE plastic', detail: 'Genuine PBAT + cornstarch bags have a slightly different texture than conventional LDPE — often slightly more matte and stiffer. If bags feel exactly like conventional plastic, request the DRDO certificate.' },
];

const VERIFY_STEPS = [
  { step: '1', title: 'Ask for the DRDO certificate', desc: 'Request the actual DRDO certification document — not a logo or sticker. The document should show DRDO letterhead, certificate number, product details, issuing date, and official signature.' },
  { step: '2', title: 'Check the manufacturer name matches', desc: 'Verify that the manufacturer name on the DRDO certificate matches the company name on your invoice. The certificate covers a specific manufacturer, not just a product type.' },
  { step: '3', title: 'Look for PBAT in material description', desc: 'The certificate or invoice should mention PBAT (Polybutylene Adipate Terephthalate) or PBAT + cornstarch as the material. "Biodegradable plastic" without specifying PBAT is vague.' },
  { step: '4', title: 'Check for GST registration', desc: 'Any legitimate registered manufacturer will have a GSTIN on their invoice. Ask for a proper GST invoice. No GSTIN is a major red flag.' },
  { step: '5', title: 'Verify the manufacturing address', desc: 'Do a basic Google Maps or Just Dial check on the manufacturer\'s address. A real factory should have some traceable presence. Ghost addresses are a warning sign.' },
];

const FAQS = [
  { q: 'How do I know if my biodegradable bags are genuine or fake?', a: 'Ask your supplier for the DRDO certification document. This is a letter from the Defence Research and Development Organisation confirming the manufacturer\'s product is certified biodegradable. A genuine certificate includes DRDO letterhead, certificate number, product details, and official signature. Any supplier who cannot provide this document is likely selling uncertified or fake biodegradable bags.' },
  { q: 'Are there fake biodegradable bags in India?', a: 'Yes, unfortunately fake or misleadingly labelled biodegradable bags are common in India. Suppliers sell conventional LDPE plastic or illegal oxo-degradable bags with "eco-friendly" or "biodegradable" labels. These bags are not actually biodegradable, are potentially illegal under the Plastic Waste Management Rules, and expose buyers to enforcement risk. The fake bags create a compliance problem for businesses who buy them in good faith.' },
  { q: 'What is oxo-degradable plastic and is it fake biodegradable?', a: 'Oxo-degradable plastic is conventional plastic with chemical additives that cause it to fragment into microplastics when exposed to UV light or heat. It does not truly biodegrade. It is banned in India, and selling or marketing it as "biodegradable" or "eco-friendly" is misleading and potentially illegal. Many cheap "biodegradable" bags in the market are actually oxo-degradable.' },
  { q: 'If I buy fake biodegradable bags, can I get fined?', a: 'Yes. If you are found using non-compliant bags — even if you were told they were biodegradable — the enforcement action is against you as the business owner using the bags. This is why demanding DRDO certification from your supplier is essential before purchasing. The compliance risk falls on the end user, not just the supplier.' },
  { q: 'Does RDN Bio Products provide certification documentation?', a: 'Yes. We provide a copy of our DRDO certification with every bulk order. Institutional and government buyers receive a full documentation package including DRDO certificate, LLPIN, MSME certificate, and material composition report. You can also request these documents before placing your first order to verify our credentials.' },
];

export default function GeoSpotFakeBiodegradable() {
  useEffect(() => {
    document.title = 'How to Spot Fake Biodegradable Bags — Verification Guide for Buyers | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'How to verify if biodegradable bags are genuine — red flags of fake bags, DRDO certificate verification steps, and how to protect your business from non-compliant suppliers.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'How to Spot Fake Biodegradable Bags', item: 'https://rdnbio.com/#/how-to-spot-fake-biodegradable-bags' },
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
            <span className="drdo-badge">🔍 Buyer's Guide</span>
            <span className="drdo-badge" style={{ background: '#c0392b', borderColor: '#c0392b', color: '#fff' }}>⚠️ Protect Your Business</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            How to Spot Fake Biodegradable Bags — Buyer Verification Guide
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> Fake biodegradable bags are common in India. The safest verification method is asking your supplier for the <strong>DRDO certification document</strong> — a letter from the Defence Research and Development Organisation. If they cannot produce it, the bags are not certified. "Eco" or "degradable" labels without DRDO documentation are not proof of compliance.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Buy from Verified Manufacturer</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Verify Your Supplier</a>
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', color: '#c0392b' }}>⚠️ Red Flags — Signs Your Bags May Be Fake</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, marginTop: 36 }}>
            {RED_FLAGS.map((item, i) => (
              <div key={i} style={{ background: '#fff7f7', borderRadius: 14, padding: '22px 20px', border: '2px solid #f5c6cb' }}>
                <div style={{ fontWeight: 700, color: '#c0392b', marginBottom: 10, fontSize: 15 }}>⚠️ {item.flag}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification steps */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', color: 'var(--green-dark)' }}>✅ How to Verify a Genuine Biodegradable Bag Supplier</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 36 }}>
            {VERIFY_STEPS.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px 20px', border: '1px solid #dbeec9' }}>
                <div style={{ width: 36, height: 36, background: 'var(--green-mid)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, marginBottom: 14 }}>{s.step}</div>
                <div style={{ fontWeight: 700, color: '#222', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{s.desc}</div>
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
            Buy Genuine DRDO Certified Bags — No Fakes, No Risk
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP — DRDO certification documents provided with every order. Transparent manufacturer, no middlemen.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary" style={{ background: '#fff', color: 'var(--green-dark)' }}>Get Certified Bags</Link>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
