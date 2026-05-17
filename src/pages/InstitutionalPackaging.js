import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20quote%20for%20institutional%20packaging";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Institutional Packaging', item: 'https://rdnbio.com/#/institutional-packaging' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Institutional Biodegradable Packaging Supply',
  provider: { '@type': 'Organization', name: 'RDN Bio Products LLP', url: 'https://rdnbio.com' },
  description: 'Bulk biodegradable bags for hospitals, schools, government offices, and corporate campuses. Pan India supply, DRDO certified.',
  areaServed: 'India',
};

const institutionTypes = [
  {
    icon: '🏥',
    title: 'Hospitals & Clinics',
    desc: 'Patient bags, medical supply pouches, pharmacy carry bags, and waste liner bags. BPA-free, safe for medical environments.',
    uses: ['Patient discharge bags', 'Pharmacy carry bags', 'Medical supply pouches', 'Biomedical waste liners'],
  },
  {
    icon: '🏫',
    title: 'Schools & Universities',
    desc: 'Canteen carry bags, event distribution bags, stationery pouches, and annual day packaging.',
    uses: ['Canteen carry bags', 'Event gift bags', 'Stationery pouches', 'Sports day packaging'],
  },
  {
    icon: '🏢',
    title: 'Corporates & IT Parks',
    desc: 'Cafeteria bags, waste management solutions, branded eco-bags for CSR drives, and office supply packaging.',
    uses: ['Cafeteria carry bags', 'Waste management bags', 'CSR branded bags', 'Pantry supply bags'],
  },
  {
    icon: '🏛️',
    title: 'Government & Municipalities',
    desc: 'Public space garbage bags, government event supply, municipality-standard waste bags, and civic program packaging.',
    uses: ['Public space garbage bags', 'Municipality waste bags', 'Event programme bags', 'Civic drive packaging'],
  },
];

const whyChoose = [
  { icon: '⚖️', title: 'India Plastic Ban Compliance', desc: 'All products comply with India\'s Single Use Plastics prohibition (2022). Avoid institutional fines and legal risk.' },
  { icon: '🔬', title: 'BPA-Free Safety Certification', desc: 'DRDO certified manufacturing. BPA-free and non-toxic — safe for use in healthcare, educational, and food environments.' },
  { icon: '🖨️', title: 'Custom Institutional Branding', desc: 'Your institution\'s logo, name, and tagline printed on every bag. Ideal for CSR, events, and daily operations.' },
  { icon: '📋', title: 'GST Invoicing & Credit Terms', desc: 'Proper GST invoicing for institutional accounts. Credit terms available for established institutions on discussion.' },
];

const instProducts = [
  {
    icon: '🗑️',
    title: 'Garbage & Waste Liner Bags',
    sizes: ['17×19"', '19×22"', '22×35"', '28×36"', '30×42"', '30×50"'],
    microns: '30–50 microns',
    use: 'Waste management, housekeeping, municipal bins',
  },
  {
    icon: '🛍️',
    title: 'D-Cut General Purpose Bags',
    sizes: ['8×12"', '10×14"', '11×18"', '12×16"', '14×18"', '16×24"'],
    microns: '35–45 microns',
    use: 'Canteens, pharmacies, reception, event distribution',
  },
  {
    icon: '🧴',
    title: 'Custom Pouches & Specialty Bags',
    sizes: ['4×6"', '5×7"', '7×10"', '8×11"'],
    microns: '35–40 microns',
    use: 'Medical supply, stationery, canteen retail items',
  },
];

const faqs = [
  { q: 'Do you offer GST invoicing for institutional purchases?', a: 'Yes. We provide proper GST-compliant invoices for all institutional orders. Our GSTIN is available on request. We work with government procurement departments, hospital purchase committees, and corporate accounts regularly.' },
  { q: 'What is the bulk order minimum for institutions?', a: 'Minimum order quantity starts from 1,000 units for plain bags. For custom-printed institutional bags the MOQ is 2,000 units. Special pricing and payment terms are available for annual institutional contracts.' },
  { q: 'Can packaging be custom branded with institution logo?', a: 'Yes. We print your institution\'s name, logo, and any required text on all bag types. Lead time for custom-printed bags is 7–10 working days after design approval. MOQ for custom printing is 2,000 units.' },
];

export default function InstitutionalPackaging() {
  useEffect(() => {
    document.title = 'Institutional Packaging Supply | Hospitals, Schools, Corporates | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Bulk biodegradable bags for hospitals, schools, government offices, and corporate campuses. DRDO certified, BPA-free. Pan India supply. Call +91-7301222666.';
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', institution: '', type: '', product: '', qty: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hi, I need biodegradable packaging for our institution from RDN Bio Products.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Institution Name: ${form.institution}`,
      `Institution Type: ${form.type}`,
      `Product: ${form.product}`,
      form.qty ? `Quantity: ${form.qty}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', institution: '', type: '', product: '', qty: '' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏥</div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Bulk Biodegradable Packaging for Hospitals, Schools &amp; Institutions
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 620, color: 'rgba(255,255,255,0.92)' }}>
            Institutional-grade biodegradable bags for healthcare, education, corporate campuses, and government establishments. Compliant with India's plastic ban, DRDO certified, and available with custom branding.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href="#inst-enquiry" className="btn-primary">Request Institutional Quote</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ DRDO Certified', '✓ BPA Free', '✓ GST Invoicing', '✓ Pan India Supply'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Institution types */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Serving every type of institution</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Trusted by hospitals, universities, corporates, and government bodies across India</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, marginTop: 32 }}>
            {institutionTypes.map(t => (
              <div key={t.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 16, padding: '28px 22px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{t.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 14 }}>{t.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {t.uses.map(u => (
                    <li key={u} style={{ fontSize: 12, color: '#555', padding: '2px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: 'var(--green-mid)', fontWeight: 700 }}>•</span> {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why institutions choose RDN */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why institutions choose RDN Bio Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 32 }}>
            {whyChoose.map(w => (
              <div key={w.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{w.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Products for institutional use</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>All products available in bulk with GST invoicing</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, marginTop: 32 }}>
            {instProducts.map(p => (
              <div key={p.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 16, padding: '26px 22px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{p.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)' }}>{p.title}</h3>
                  <span style={{ background: 'var(--green-mid)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 8, whiteSpace: 'nowrap', marginLeft: 8 }}>{p.microns}</span>
                </div>
                <p style={{ fontSize: 12, color: '#888', marginBottom: 14 }}>{p.use}</p>
                <div>
                  <div style={{ fontSize: 11, color: '#aaa', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Available sizes</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.sizes.map(s => (
                      <span key={s} style={{ background: '#fff', color: 'var(--green-dark)', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 6, border: '1px solid #c8e0a0' }}>{s}</span>
                    ))}
                  </div>
                </div>
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
      <RelatedSolutions exclude="institutional" />

      <section id="inst-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Request Institutional Packaging Proposal</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>We provide GST-compliant quotations for institutional procurement</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 18, padding: '32px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Enquiry sent!</h3>
                  <p style={{ color: '#666', fontSize: 14 }}>Our institutional sales team will respond within 4 working hours with a formal quotation.</p>
                  <button style={{ marginTop: 20, background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }} onClick={() => setSubmitted(false)}>Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="name" value={form.name} onChange={handleChange} required placeholder="Suresh Reddy" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" type="tel" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Institution Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="institution" value={form.institution} onChange={handleChange} required placeholder="Apollo Hospitals / IIT Hyderabad" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Institution Type *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="type" value={form.type} onChange={handleChange} required>
                        <option value="">Select type</option>
                        <option value="Hospital / Clinic">Hospital / Clinic</option>
                        <option value="School / University">School / University</option>
                        <option value="Corporate / IT Park">Corporate / IT Park</option>
                        <option value="Government / Municipality">Government / Municipality</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Product Required *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="product" value={form.product} onChange={handleChange} required>
                        <option value="">Select product</option>
                        <option value="Garbage / waste liner bags">Garbage / waste liner bags</option>
                        <option value="D-Cut carry bags">D-Cut carry bags</option>
                        <option value="Custom pouches">Custom pouches</option>
                        <option value="Multiple products">Multiple products</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Approximate Monthly Quantity</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="qty" value={form.qty} onChange={handleChange} placeholder="e.g. 20,000 bags per month" />
                    </div>
                  </div>
                  <button type="submit" className="submit-btn" style={{ marginTop: 20, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    {WA_SVG} Send Enquiry via WhatsApp
                  </button>
                </form>
              )}
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Speak to our institutional sales team</h3>
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
                  {WA_SVG} WhatsApp our Institutional Desk
                </a>
                <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px', fontSize: 13, color: '#555', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--green-dark)' }}>We provide:</strong><br />
                  GST-compliant purchase orders &amp; invoices<br />
                  Credit terms for established institutions<br />
                  Annual contract pricing<br />
                  Dedicated account manager
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
