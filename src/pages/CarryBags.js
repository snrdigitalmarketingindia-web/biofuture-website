import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20quote%20for%20biodegradable%20carry%20bags";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Biodegradable Carry Bags', item: 'https://rdnbio.com/#/biodegradable-carry-bags' },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Biodegradable D-Cut & U/W-Cut Carry Bags',
  brand: { '@type': 'Brand', name: 'BioFuture by RDN Bio Products LLP' },
  description: 'DRDO certified biodegradable carry bags in D-Cut and U/W-Cut styles. 7+ D-Cut sizes, 14+ U-Cut sizes. 30–50 microns. BPA-free PBAT material. Pan India supply from Hyderabad.',
  manufacturer: { '@type': 'Organization', name: 'RDN Bio Products LLP', url: 'https://rdnbio.com' },
};

const dCutSizes = [
  { size: '6×9"', microns: '35', use: 'Small retail, gift items' },
  { size: '7×9"', microns: '35', use: 'Kirana, stationery' },
  { size: '9×12"', microns: '38', use: 'General retail' },
  { size: '11×14"', microns: '40', use: 'Apparel, boutiques' },
  { size: '12×16"', microns: '40', use: 'Mid-size retail' },
  { size: '14×18"', microns: '42', use: 'Supermarkets' },
  { size: '16×20"', microns: '45', use: 'Large retail, gifts' },
];

const uCutSizes = [
  { size: '8×10"', label: 'XS' },
  { size: '10×12"', label: 'S' },
  { size: '11×14"', label: 'SM' },
  { size: '13×16"', label: 'M' },
  { size: '14×18"', label: 'ML' },
  { size: '16×20"', label: 'L' },
  { size: '17×23"', label: 'XL' },
  { size: '18×24"', label: 'XL+' },
  { size: '20×24"', label: 'XXL' },
  { size: '22×28"', label: 'XXL+' },
  { size: '24×30"', label: '3XL' },
  { size: '25×32"', label: '3XL+' },
  { size: '27×30"', label: '4XL' },
  { size: '30×36"', label: '5XL' },
];

const dCutColors = ['⬜ White', '🟩 Green', '⬛ Black', '🟦 Blue', '🟥 Red', '🟨 Yellow'];

const materialPoints = [
  { icon: '🌱', title: 'What is PBAT?', desc: 'Polybutylene adipate terephthalate (PBAT) is an internationally approved bioplastic that breaks down in natural soil conditions within 90–180 days without leaving microplastic residue.' },
  { icon: '♻️', title: 'Why it decomposes', desc: 'PBAT\'s molecular chain is broken down by naturally occurring soil microbes. Unlike conventional plastic, it doesn\'t persist in the environment for hundreds of years.' },
  { icon: '🚫', title: 'vs Conventional Plastic', desc: 'Conventional LDPE/HDPE bags take 500–1,000 years to decompose. PBAT bags decompose in under 6 months. India\'s 2022 plastic ban mandates this shift.' },
  { icon: '✅', title: 'DRDO Certified', desc: 'Our PBAT formulation and manufacturing process are certified by India\'s Defence Research and Development Organisation — the highest technical validation available.' },
];

const faqs = [
  { q: 'What is the difference between D-Cut and U-Cut biodegradable bags?', a: 'D-Cut bags have a die-cut handle punched directly through the bag\'s body, creating a rigid handle with no loose loops. U-Cut (or W-Cut) bags have a separately sewn loop handle attached to the top, making them softer and more comfortable to carry. D-Cut bags are popular in retail and kirana stores; U-Cut bags are preferred for grocery, hospital, and supermarket use.' },
  { q: 'What micron thickness do I need for my business?', a: '30–35 microns is suitable for light items (stationery, small gifts). 38–42 microns covers general retail and grocery. 45–50 microns is recommended for heavy grocery loads, bulk items, or hospital use. We can guide you to the right specification — just share your use case on WhatsApp.' },
  { q: 'Can D-Cut bags be custom printed with my shop name?', a: 'Yes. We print your shop name, logo, and phone number directly on D-Cut bags. MOQ for custom-printed D-Cut bags is 1,000 units. Single and multi-color printing available. Typical lead time is 7–10 working days after design approval.' },
  { q: 'Are these bags strong enough for heavy grocery loads?', a: 'Absolutely. Our U/W-Cut bags at 45–50 microns are engineered for heavy grocery loads. The loop handle design distributes weight evenly. We recommend 45+ micron bags for supermarket or wet-market applications where bags routinely carry 3–5 kg.' },
];

export default function CarryBags() {
  useEffect(() => {
    document.title = 'Biodegradable Carry Bags Manufacturer India | D-Cut & U-Cut Bags | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'D-Cut and U/W-Cut biodegradable carry bags manufacturer in Hyderabad. 7+14 size variants. 30–50 microns. DRDO certified, BPA-free. Bulk supply pan India. Call +91-7301222666.';
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', product: '', size: '', qty: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hi, I need biodegradable carry bags from RDN Bio Products.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Product Type: ${form.product}`,
      form.size ? `Size Preference: ${form.size}` : null,
      form.qty  ? `Quantity: ${form.qty}`          : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', product: '', size: '', qty: '' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">✓ DRDO Certified Technology</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>I am NOT Plastic</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            DRDO Certified Biodegradable Carry Bags — D-Cut &amp; U/W-Cut
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 640, color: 'rgba(255,255,255,0.92)' }}>
            India's plastic ban is here. Replace conventional LDPE bags with PBAT-based biodegradable carry bags — 30–50 micron, BPA-free, DRDO certified. Available in 7 D-Cut sizes and 14 U/W-Cut sizes. Pan India bulk supply from Hyderabad.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href="#carry-enquiry" className="btn-primary">Get Carry Bag Quote</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ BPA Free', '✓ 7 D-Cut Sizes', '✓ 14 U-Cut Sizes', '✓ Custom Printing', '✓ Pan India Supply'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* D-Cut Bags */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'var(--green-dark)', color: '#fff', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>D-CUT BAGS</div>
              <h2 className="section-title">D-Cut Biodegradable Bags</h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>
                Die-cut handle punched directly through the bag body. Crisp, professional look preferred by retail shops, kirana stores, boutiques, and gift stores. Sturdy at 35–45 microns.
              </p>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 12, color: '#888', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>Available Colors</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {dCutColors.map(c => (
                    <span key={c} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 20, padding: '3px 12px', fontSize: 12, fontWeight: 600, color: 'var(--green-dark)' }}>{c}</span>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#666' }}>
                <strong style={{ color: 'var(--green-dark)' }}>Best for:</strong> Retail stores, kirana, boutiques, gift shops, medical stores
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 16, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: 'var(--green-dark)', color: '#fff' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Size (inches)</th>
                      <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>Microns</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Ideal Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dCutSizes.map((row, i) => (
                      <tr key={row.size} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #e8f3d8' }}>
                        <td style={{ padding: '10px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.size}</td>
                        <td style={{ padding: '10px 16px', textAlign: 'center', color: '#555' }}>{row.microns}</td>
                        <td style={{ padding: '10px 16px', color: '#666' }}>{row.use}</td>
                      </tr>
                    ))}
                    <tr style={{ background: 'var(--green-light)', borderTop: '2px solid #c8e0a0' }}>
                      <td colSpan={3} style={{ padding: '10px 16px', fontSize: 12, color: 'var(--green-dark)', fontWeight: 700 }}>+ Custom sizes available on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* U/W-Cut Bags */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'var(--green-mid)', color: '#fff', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>U/W-CUT BAGS</div>
              <h2 className="section-title">U/W-Cut Biodegradable Bags</h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>
                Loop handle design that's comfortable to carry and distributes load evenly. Available in 14 sizes from XS to 5XL. 30–50 microns. Preferred for grocery, supermarkets, hospitals, and high-volume retail.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, marginBottom: 20 }}>
                {[
                  ['Micron range', '30–50 microns'],
                  ['Handle type', 'Loop handle (U/W-Cut)'],
                  ['Best for', 'Grocery, hospitals, supermarkets'],
                  ['Custom printing', 'Available from 1,000 units MOQ'],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', gap: 8 }}>
                    <span style={{ color: '#888', minWidth: 120, fontSize: 13 }}>{label}:</span>
                    <span style={{ color: 'var(--green-dark)', fontWeight: 600, fontSize: 13 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#888', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>14 Available Sizes</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(130px,1fr))', gap: 10 }}>
                {uCutSizes.map(s => (
                  <div key={s.size} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: '#aaa', fontWeight: 700, marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)' }}>{s.size}</div>
                  </div>
                ))}
                <div style={{ background: 'var(--green-mid)', borderRadius: 10, padding: '12px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>+ Custom sizes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material explainer */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Understanding PBAT — The material that makes it biodegradable</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Science-backed biodegradability, not greenwashing</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 32 }}>
            {materialPoints.map(m => (
              <div key={m.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{m.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{m.desc}</p>
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

      {/* CTA Form */}
      <RelatedSolutions exclude="carry" />

      <section id="carry-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get your Carry Bag Quote</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Tell us your size and quantity — we'll send a competitive bulk price within 2 hours</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 18, padding: '32px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Enquiry sent!</h3>
                  <p style={{ color: '#666', fontSize: 14 }}>Our team will respond with a bulk price quote on WhatsApp within 2 hours.</p>
                  <button style={{ marginTop: 20, background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }} onClick={() => setSubmitted(false)}>Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="name" value={form.name} onChange={handleChange} required placeholder="Kiran Reddy" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" type="tel" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Product Type *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="product" value={form.product} onChange={handleChange} required>
                        <option value="">Select type</option>
                        <option value="D-Cut bags">D-Cut bags</option>
                        <option value="U/W-Cut bags">U/W-Cut bags</option>
                        <option value="Both D-Cut and U-Cut">Both D-Cut and U-Cut</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Size Preference</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="size" value={form.size} onChange={handleChange} placeholder='e.g. 12×16" or L size' />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Quantity Required</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="qty" value={form.qty} onChange={handleChange} placeholder="e.g. 10,000 bags" />
                    </div>
                  </div>
                  <button type="submit" className="submit-btn" style={{ marginTop: 20, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    {WA_SVG} Send Enquiry via WhatsApp
                  </button>
                </form>
              )}
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Talk to our carry bag experts</h3>
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
                  {WA_SVG} WhatsApp for Bulk Pricing
                </a>
                <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px', fontSize: 13, color: '#555', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--green-dark)' }}>Why buy direct from manufacturer?</strong><br />
                  No middleman markup<br />
                  Custom sizes &amp; colors on request<br />
                  Brand printing from 1,000 units<br />
                  Pan India delivery
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
