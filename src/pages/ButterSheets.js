import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20butter%20sheet%20quote%20from%20RDN%20Bio%20Products";
const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Butter Sheets & Food Wrapping', item: 'https://rdnbio.com/#/butter-sheets-food-wrapping' },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Biodegradable Butter Covers & Food Wrapping Sheets',
  description: 'Food-grade PBAT biodegradable butter covers and wrapping sheets. 30 microns, 2 sizes (9x9 and 12x12 inches). BPA-free, DRDO certified. Safe for direct food contact. Dairy, bakery, and food industry.',
  brand: { '@type': 'Brand', name: 'BioFuture by RDN Bio Products' },
  manufacturer: { '@type': 'Organization', name: 'RDN Bio Products LLP', address: 'Hyderabad, Telangana, India' },
  material: 'PBAT (Polybutylene Adipate Terephthalate)',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Are butter covers safe for direct food contact?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our butter covers are manufactured from food-grade PBAT material — 100% BPA-free, non-toxic, and certified safe for direct food contact. They meet food packaging safety standards and are used widely in the dairy and food industry.' } },
    { '@type': 'Question', name: 'What sizes are available for butter sheets?', acceptedAnswer: { '@type': 'Answer', text: 'We currently offer two standard sizes: 9x9 inches and 12x12 inches, both at 30 microns. Custom sizes are available on request for bulk orders.' } },
    { '@type': 'Question', name: 'Can butter covers be customised with our dairy brand logo?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer custom printing — your dairy brand name, logo, and contact details can be printed on butter covers. Minimum order quantity applies for custom printed covers.' } },
  ],
};

const faqs = [
  { q: 'Are butter covers safe for direct food contact?', a: 'Yes. Our butter covers are manufactured from food-grade PBAT material — 100% BPA-free, non-toxic, and certified safe for direct food contact. They meet food packaging safety standards and are used widely in the dairy and food industry.' },
  { q: 'What sizes are available for butter sheets?', a: 'We currently offer two standard sizes: 9x9 inches and 12x12 inches, both at 30 microns. Custom sizes are available on request for bulk orders.' },
  { q: 'Can butter covers be customised with our dairy brand logo?', a: 'Yes. We offer custom printing — your dairy brand name, logo, and contact details can be printed on butter covers. Minimum order quantity applies for custom printed covers.' },
];

const useCases = [
  { icon: '🧈', title: 'Dairy product wrapping', desc: 'Butter, ghee portions, cream, paneer, and dairy product wrapping. BPA-free, safe for direct contact with dairy.' },
  { icon: '🍞', title: 'Bakery & bread packaging', desc: 'Bread loaves, buns, biscuits, and baked goods wrapping. Grease-resistant, food-safe PBAT material.' },
  { icon: '🍬', title: 'Mithai & sweet wrapping', desc: 'Laddoos, burfis, pedas, and Indian sweets. Ideal for sweet shops, halwais, and gifting boxes.' },
  { icon: '🍽️', title: 'Restaurant butter portions', desc: 'Individual butter portions for restaurants, hotels, and catering services. Hygienic, single-use, compostable.' },
];

export default function ButterSheets() {
  const [form, setForm] = useState({ name: '', phone: '', business: '', size: '', qty: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Biodegradable Butter Sheets & Food Wrapping | Dairy Industry | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Food-grade biodegradable butter covers and wrapping sheets for dairy, bakery, and food packaging. BPA-free, DRDO certified. 2 sizes: 9×9 and 12×12 inches. Custom printing. Pan India supply. Call +91-7301222666.';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like a butter sheet / food wrapping quote from RDN Bio Products.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.business ? `Business: ${form.business}` : null,
      form.size ? `Size preference: ${form.size}` : null,
      form.qty ? `Quantity: ${form.qty}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', business: '', size: '', qty: '' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#fff8e1 0%,#fff3cd 60%,#ffeaa0 100%)', padding: '52px 0 40px', borderBottom: '1px solid #ffe082' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: '#f57c00', color: '#fff', borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 800, marginBottom: 16 }}>
            🧈 Butter Sheets &amp; Food Wrapping
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,38px)', lineHeight: 1.2, color: '#5d2c02', marginBottom: 16, maxWidth: 680 }}>
            Food-Grade Biodegradable Butter Covers &amp; Wrapping Sheets
          </h1>
          <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: '#795548', marginBottom: 24, lineHeight: 1.75, maxWidth: 580 }}>
            Replacing plastic wrapping in the dairy, bakery, and food industry. 100% PBAT-based, BPA-free, and safe for direct food contact. The sustainable replacement for conventional butter paper and plastic wrapping.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {['✓ Food Grade', '✓ BPA Free', '✓ DRDO Certified', '✓ Direct Food Contact Safe', '✓ Custom Printing'].map(b => (
              <span key={b} style={{ background: '#fff', border: '1px solid #ffcc80', borderRadius: 20, padding: '5px 12px', fontSize: 12, fontWeight: 700, color: '#e65100' }}>{b}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#butter-enquiry" className="btn-primary">Get Butter Sheet Quote</a>
            <a href="tel:+917301222666" className="btn-call">📞 Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp us</a>
          </div>
        </div>
      </section>

      {/* Product specs */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #f0f5e8' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Product specifications</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Two standard sizes — food-grade PBAT material</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 700, margin: '32px auto 0' }}>
            {[
              { size: '9 × 9 inches', microns: '30 microns', use: 'Small butter portions, individual dairy servings, mithai', color: '#fff8e1' },
              { size: '12 × 12 inches', microns: '30 microns', use: 'Larger butter blocks, paneer, bakery items, sweets', color: '#fff3e0' },
            ].map((spec, i) => (
              <div key={i} style={{ background: spec.color, border: '2px solid #ffe082', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🧈</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: '#e65100', marginBottom: 6 }}>{spec.size}</div>
                <div style={{ fontSize: 13, color: '#795548', fontWeight: 600, marginBottom: 8 }}>{spec.microns}</div>
                <div style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>{spec.use}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 12, padding: '20px 24px', maxWidth: 700, margin: '32px auto 0' }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 12 }}>Full material specs</h3>
            <table className="spec-table">
              <tbody>
                {[
                  ['Material', 'PBAT (Polybutylene Adipate Terephthalate)'],
                  ['Thickness', '30 microns'],
                  ['Sizes', '9×9 inches, 12×12 inches (custom on request)'],
                  ['Color', 'White (natural)'],
                  ['Food safe', 'Yes — direct food contact certified'],
                  ['BPA content', 'Zero — BPA-free'],
                  ['Decompose time', '~180 days under composting'],
                  ['Certification', 'DRDO certified technology'],
                  ['Custom printing', 'Available for bulk orders'],
                ].map(([k, v], i) => (
                  <tr key={i}><td style={{ fontWeight: 600, color: 'var(--green-dark)' }}>{k}</td><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '56px 0', background: '#fafff5', borderBottom: '1px solid #f0f5e8' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Who uses biodegradable butter covers</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Replacing plastic wrapping across the food industry</p>
          <div className="solutions-grid">
            {useCases.map((u, i) => (
              <div key={i} className="solution-card">
                <div className="solution-card__icon">{u.icon}</div>
                <div className="solution-card__title">{u.title}</div>
                <div className="solution-card__desc">{u.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why biodegradable over plastic wrapping */}
      <section style={{ padding: '48px 0', background: 'var(--green-dark)', borderBottom: '2px solid #1d3d09' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,30px)', color: '#fff', marginBottom: 16, textAlign: 'center' }}>Why switch from plastic wrapping to biodegradable?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 24 }}>
            {[
              { icon: '⚖️', title: 'India Plastic Ban', desc: 'Single-use plastic wrapping is restricted under India\'s Plastic Waste Management Rules. Our covers are fully compliant.' },
              { icon: '🛡️', title: 'Zero toxic leaching', desc: 'BPA-free PBAT does not leach harmful chemicals into food — unlike conventional plastic wrapping under heat or moisture.' },
              { icon: '♻️', title: 'Fully compostable', desc: 'Decomposes in ~180 days — leaves no microplastics, no toxic soil contamination, no ocean pollution.' },
            ].map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#a8e06b', marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '48px 0', background: '#fafff5', borderBottom: '1px solid #f0f5e8' }}>
        <div className="container" style={{ maxWidth: 740 }}>
          <h2 className="section-title">Butter sheet FAQs</h2>
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-summary"><span>{f.q}</span><span className="faq-icon" aria-hidden="true"></span></summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <RelatedSolutions exclude="butter" />

      <section id="butter-enquiry" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="enquiry-grid">
            <div>
              <h2 className="section-title">Get your Butter Sheet Quote</h2>
              <p style={{ fontSize: 15, color: '#666', marginBottom: 24 }}>Tell us your requirement and we'll reply within 24 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input className="form-input" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ fontSize: 16 }} />
                  <input className="form-input" placeholder="WhatsApp / phone number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required style={{ fontSize: 16 }} />
                  <input className="form-input" placeholder="Business / dairy name (optional)" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} style={{ fontSize: 16 }} />
                  <select className="form-input" value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} style={{ fontSize: 16 }}>
                    <option value="">Select size preference</option>
                    <option>9×9 inches</option>
                    <option>12×12 inches</option>
                    <option>Both sizes</option>
                    <option>Custom size</option>
                  </select>
                  <input className="form-input form-full" placeholder="Quantity required (sheets / boxes / kg)" value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })} style={{ fontSize: 16 }} />
                </div>
                <button type="submit" className="submit-btn">Send enquiry via WhatsApp</button>
                {submitted && <div className="success-msg show">✓ WhatsApp is opening — tap Send!</div>}
              </form>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--green-dark)', marginBottom: 20 }}>Talk to us directly</h3>
              <a href="tel:+917301222666" className="btn-call" style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>📞 Call +91-7301222666</a>
              <a href="tel:+917301777444" className="btn-call btn-call--secondary" style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>📞 Call +91-7301777444</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', justifyContent: 'center' }}>{WA_SVG} Chat on WhatsApp</a>
              <p style={{ fontSize: 12, color: '#aaa', marginTop: 8, textAlign: 'center' }}>Mon–Sat 9am–6pm</p>
              <div style={{ marginTop: 24, textAlign: 'center' }}>
                <Link to="/food-packaging-solutions" className="btn-outline" style={{ fontSize: 13 }}>All food packaging solutions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
