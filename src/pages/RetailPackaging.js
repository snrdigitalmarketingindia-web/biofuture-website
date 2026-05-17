import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20quote%20for%20retail%20packaging";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Retail Packaging Solutions', item: 'https://rdnbio.com/#/retail-packaging-solutions' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best biodegradable carry bag for a kirana store?',
      acceptedAnswer: { '@type': 'Answer', text: 'D-Cut bags are ideal for kirana stores — available in 7 sizes from 8×12 to 12×18 inch, at 35–45 microns. They are lightweight, affordable, and suitable for everyday retail purchases. MOQ starts from a single bundle, making them accessible even for small shops.' },
    },
    {
      '@type': 'Question',
      name: 'Are these bags strong enough for grocery shopping?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our U/W-Cut bags are rated to carry up to 10 kg. PBAT material has tensile strength comparable to conventional plastic bags of the same micron thickness, making them fully suitable for heavy grocery loads.' },
    },
    {
      '@type': 'Question',
      name: 'What sizes are available for retail use?',
      acceptedAnswer: { '@type': 'Answer', text: 'D-Cut bags are available in 7 sizes from 8×12 to 16×24 inch. U/W-Cut bags are available in 14 sizes from 8×10 to 27×30 inch. Custom sizes can be arranged for large bulk orders.' },
    },
    {
      '@type': 'Question',
      name: 'Can I get bags printed with my store name?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer single and multi-color printing with your logo, store name, and tagline. Minimum order quantity for custom printed bags is 1,000 bags. Contact us on WhatsApp for a printing quote.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer wholesale pricing for distributors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wholesale rates and monthly supply contracts are available for distributors and large retail chains. Contact us on +91-7301222666 or WhatsApp for volume pricing details.' },
    },
  ],
};

const solutions = [
  { icon: '🛍️', title: 'D-Cut Retail Bags', desc: 'Lightweight die-cut handle bags ideal for kirana stores, boutiques, and gift shops. 7 sizes from 8×12 to 16×24 inch. Affordable per-unit pricing with bulk discounts.' },
  { icon: '🛒', title: 'U/W-Cut Grocery Bags', desc: 'Strong loop-handle carry bags for supermarkets, wet markets, and grocery stores. Carry up to 10 kg. 14 sizes from 8×10 to 27×30 inch. Most popular for daily grocery handouts.' },
  { icon: '🖨️', title: 'Custom Branded Bags', desc: 'Print your store logo, name, and tagline on every bag. Walking advertisements for your brand. Single and multi-color printing. MOQ 1,000 bags. Pantone matching available.' },
  { icon: '🗑️', title: 'Garbage / Waste Bins', desc: 'Back-of-store and storage room waste management. 8 sizes from 17×19 to 35×45 inch. Carry up to 18 kg. 100% biodegradable — replace conventional black plastic bin bags.' },
  { icon: '📦', title: 'Wholesale Supply', desc: 'Monthly recurring supply contracts for retail chains and distributors. Priority fulfillment, volume discounts, GST invoicing. Contact us for wholesale rate card.' },
  { icon: '🎁', title: 'Sample Pack', desc: 'Try before you commit to bulk. Request a sample pack with our most popular retail sizes — D-Cut and U-Cut in 3–4 sizes. Dispatched within 1–2 working days.' },
];

const stats = [
  { value: '₹500', label: 'fine per violation of India\'s plastic bag ban' },
  { value: '80%+', label: 'customers prefer plastic-free stores' },
  { value: '30+', label: 'size variants for every retail need' },
  { value: '100%', label: 'biodegradable — no microplastics' },
];

const steps = [
  { num: '01', title: 'Share your requirements', desc: 'Tell us your bag types, sizes, monthly volume, and whether you need custom printing — via WhatsApp or the form below.' },
  { num: '02', title: 'Receive sample pack & quote', desc: 'We courier samples of your chosen sizes within 3–5 working days. A pricing quote is sent within 2 hours on WhatsApp.' },
  { num: '03', title: 'Confirm & receive bulk order', desc: 'Approve the samples, confirm your order, and receive pan India delivery. Repeat monthly orders get priority pricing.' },
];

const testimonials = [
  {
    quote: 'We switched our entire kirana store to RDN Bio Products bags six months ago. Our customers appreciate it — many specifically comment on the eco-friendly packaging. And the price per bundle is very reasonable for the quality.',
    name: 'Suresh Reddy',
    role: 'Owner, Sri Sai Kirana & General Stores, Nizamabad',
  },
  {
    quote: 'As a supermarket manager, I needed reliable bulk supply across three store sizes. RDN\'s U-Cut bags in large sizes handle our grocery loads perfectly. The custom printing with our store branding was a great decision — customers love it.',
    name: 'Manjula Sharma',
    role: 'Store Manager, FreshMart Supermarket, Hyderabad',
  },
];

const faqs = [
  {
    q: 'What is the best biodegradable carry bag for a kirana store?',
    a: 'D-Cut bags are ideal for kirana stores — available in 7 sizes from 8×12 to 12×18 inch, at 35–45 microns. They are lightweight, affordable, and suitable for everyday retail purchases. MOQ starts from a single bundle, making them accessible even for small shops.',
  },
  {
    q: 'Are these bags strong enough for grocery shopping?',
    a: 'Yes. Our U/W-Cut bags are rated to carry up to 10 kg. PBAT material has tensile strength comparable to conventional plastic bags of the same micron thickness, making them fully suitable for heavy grocery loads including vegetables, grains, and packaged goods.',
  },
  {
    q: 'What sizes are available for retail use?',
    a: 'D-Cut bags are available in 7 sizes from 8×12 to 16×24 inch. U/W-Cut bags are available in 14 sizes from 8×10 to 27×30 inch. Garbage bags are available in 8 sizes from 17×19 to 35×45 inch. Custom sizes can be arranged for large bulk orders.',
  },
  {
    q: 'Can I get bags printed with my store name?',
    a: 'Yes. We offer single and multi-color printing with your logo, store name, and tagline on carry bags. Minimum order quantity for custom printed bags is 1,000 bags. Many retail stores find the branded bags double as marketing tools — customers carry your branding on every shopping trip.',
  },
  {
    q: 'Do you offer wholesale pricing for distributors?',
    a: 'Yes. Wholesale rates and monthly supply contracts are available for distributors and large retail chains. Contact us at +91-7301222666 or WhatsApp for volume pricing, GST invoicing details, and monthly supply agreements.',
  },
];

export default function RetailPackaging() {
  useEffect(() => {
    document.title = 'Biodegradable Bags for Retail Stores & Supermarkets | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Biodegradable carry bags for kirana stores, supermarkets, retail chains and boutiques. DRDO certified PBAT bags in 21 size variants. Bulk supply, custom printing. Manufacturer in Hyderabad. Call +91-7301222666.';
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', business: '', product: '', qty: '', monthlyVolume: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hi, I need biodegradable packaging for my retail store from RDN Bio Products.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Business Name: ${form.business}`,
      `Product: ${form.product}`,
      form.qty ? `Quantity: ${form.qty}` : null,
      form.monthlyVolume ? `Monthly Volume: ${form.monthlyVolume}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', business: '', product: '', qty: '', monthlyVolume: '' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 20, padding: '5px 14px', fontSize: 13, fontWeight: 600 }}>
              🛒 Retail &amp; Kirana Store Packaging
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable Carry Bags for Retail Stores, Supermarkets &amp; Kirana Shops
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 620, color: 'rgba(255,255,255,0.92)' }}>
            Stay compliant with India's plastic ban, win customer trust with eco-friendly branding, and keep costs low with affordable bulk pricing. DRDO certified PBAT bags in 21+ sizes — supplied direct from our Hyderabad factory.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="#retail-enquiry" className="btn-primary">Request Bulk Quote</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ DRDO Certified', '✓ BPA Free', '✓ Pan India Supply', '✓ Custom Printing'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points & stats */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40, alignItems: 'start' }}>
            <div>
              <h2 className="section-title">Why retail stores are making the switch</h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 14 }}>
                India's plastic carry bag ban has fundamentally changed the retail landscape. Retailers caught distributing banned plastic bags face fines up to ₹500 per bag under state and central regulations — with enforcement intensifying every year.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 14 }}>
                Beyond compliance, consumer preferences are shifting. Over 80% of urban shoppers say they prefer stores that use eco-friendly packaging. Your packaging is no longer just functional — it's a signal of your brand values.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8 }}>
                Wholesale biodegradable bags are now affordable. With RDN Bio Products supplying direct from our Hyderabad DRDO-certified factory, the cost difference from plastic has narrowed significantly — especially for bulk monthly orders.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {stats.map(s => (
                <div key={s.value} style={{ background: 'var(--green-pale)', border: '1px solid var(--green-light)', borderRadius: 14, padding: '22px 18px', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--green-dark)', marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: '#666', lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 Retail Solutions */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>6 Retail Packaging Solutions</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Everything your store needs — from kirana counter to supermarket aisle</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 32 }}>
            {solutions.map(s => (
              <div key={s.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size & spec table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Size &amp; specification guide</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Choose the right bag type and size for your retail format</p>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Sizes Available</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Microns</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Load Capacity</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['D-Cut Bags', '7 sizes (8×12 to 16×24 inch)', '35–45 microns', 'Up to 3 kg', 'Kirana counters, boutiques, gift shops, small retail'],
                  ['U/W-Cut Bags', '14 sizes (8×10 to 27×30 inch)', '30–50 microns', 'Up to 10 kg', 'Supermarkets, grocery stores, wet markets, heavy loads'],
                  ['Garbage Bags', '8 sizes (17×19 to 35×45 inch)', '40–60 microns', 'Up to 18 kg', 'Back-of-store waste bins, storeroom disposal, retail waste'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '12px 16px', color: j === 0 ? 'var(--green-dark)' : '#555', fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>How it works</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Simple, transparent, and fast</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, marginTop: 32 }}>
            {steps.map(s => (
              <div key={s.num} style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--green-mid)', color: '#fff', fontWeight: 800, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{s.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>What retail store owners say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, marginTop: 32 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '28px 24px' }}>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: 18, fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--green-dark)' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently asked questions</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary className="faq-summary">
                  {f.q}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions exclude="retail" />

      {/* Enquiry Form */}
      <section id="retail-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get your Retail Packaging Quote</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Fill the form below and we'll respond via WhatsApp within 2 hours on business days</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 18, padding: '32px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Enquiry sent!</h3>
                  <p style={{ color: '#666', fontSize: 14 }}>We'll respond on WhatsApp within 2 hours with a tailored bulk quote for your store.</p>
                  <button style={{ marginTop: 20, background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }} onClick={() => setSubmitted(false)}>Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="name" value={form.name} onChange={handleChange} required placeholder="Suresh Reddy" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" type="tel" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Business Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="business" value={form.business} onChange={handleChange} required placeholder="Sai Kirana Store / FreshMart Supermarket" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Product Needed *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="product" value={form.product} onChange={handleChange} required>
                        <option value="">Select a product</option>
                        <option value="D-Cut retail bags">D-Cut retail bags</option>
                        <option value="U/W-Cut grocery bags">U/W-Cut grocery bags</option>
                        <option value="Custom branded bags (with printing)">Custom branded bags (with printing)</option>
                        <option value="Garbage / waste bin bags">Garbage / waste bin bags</option>
                        <option value="Multiple products">Multiple products</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Approximate Quantity</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="qty" value={form.qty} onChange={handleChange} placeholder="e.g. 5,000 bags" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Monthly Volume</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="monthlyVolume" value={form.monthlyVolume} onChange={handleChange}>
                        <option value="">Select monthly volume</option>
                        <option value="Less than 500 bags/month">&lt;500 bags/month</option>
                        <option value="500–2000 bags/month">500–2,000 bags/month</option>
                        <option value="2000–5000 bags/month">2,000–5,000 bags/month</option>
                        <option value="5000+ bags/month">5,000+ bags/month</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="submit-btn" style={{ marginTop: 20, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    {WA_SVG} Send Enquiry via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Speak to our retail sales team</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Primary Sales Line</div>
                  <a href="tel:+917301222666" className="btn-call" style={{ marginBottom: 8, display: 'inline-block' }}>📞 Call Now</a>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>+91-7301222666</div>
                </div>
                <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Alternate Line</div>
                  <a href="tel:+917301777444" className="btn-call" style={{ marginBottom: 8, display: 'inline-block' }}>📞 Call Now</a>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>+91-7301777444</div>
                </div>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', padding: '14px 20px' }}>
                  {WA_SVG} WhatsApp our Retail Sales Desk
                </a>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6, marginTop: 8 }}>
                  <strong style={{ color: 'var(--green-dark)' }}>RDN Bio Products LLP</strong><br />
                  Hyderabad, Telangana<br />
                  DRDO Certified Manufacturer<br />
                  Pan India Delivery
                </div>
                <Link to="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>View full contact details →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
