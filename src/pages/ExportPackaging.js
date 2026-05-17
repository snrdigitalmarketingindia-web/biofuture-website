import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_EXPORT = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20importing%20biodegradable%20packaging%20from%20India%20%E2%80%94%20RDN%20Bio%20Products";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Export Packaging Solutions', item: 'https://rdnbio.com/#/export-packaging-solutions' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What certifications do your export products carry?',
      acceptedAnswer: { '@type': 'Answer', text: 'All products are manufactured using DRDO (Defence Research and Development Organisation) certified technology — the Indian government\'s highest quality and safety standard for biodegradable packaging. Documentation provided with all export orders.' },
    },
    {
      '@type': 'Question',
      name: 'What countries do you currently export to?',
      acceptedAnswer: { '@type': 'Answer', text: 'We are actively supplying and enquiring from buyers in the Middle East (UAE, Saudi Arabia, Qatar), Southeast Asia (Singapore, Malaysia), and other international markets. Contact us to discuss your country\'s import requirements.' },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum export order quantity?',
      acceptedAnswer: { '@type': 'Answer', text: 'Minimum export order: 50,000 units per product line. Smaller trial orders (10,000–50,000 units) are considered for new importer relationships on a case-by-case basis.' },
    },
    {
      '@type': 'Question',
      name: 'How is export pricing structured?',
      acceptedAnswer: { '@type': 'Answer', text: 'Export pricing is CIF (Cost, Insurance & Freight) or FOB Hyderabad — depending on the destination and buyer preference. Pricing is provided in USD or INR. Contact us with your volume and destination for a quote.' },
    },
    {
      '@type': 'Question',
      name: 'Do your products meet international biodegradable standards?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. PBAT (Polybutylene Adipate Terephthalate) is an internationally recognised certified compostable material. Our products are BPA-free, food-contact safe, and meet EN 13432 / ASTM D6400-equivalent biodegradability standards. DRDO certification is accepted as a quality proof by international buyers.' },
    },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RDN Bio Products LLP',
  url: 'https://rdnbio.com',
  logo: 'https://rdnbio.com/logo.png',
  areaServed: ['India', 'Middle East', 'Southeast Asia', 'UAE', 'Singapore', 'Malaysia'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Export Biodegradable Packaging Products',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'D-Cut Carry Bags — Export' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'U/W-Cut Carry Bags — Export' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Biodegradable Garbage Bags — Export' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Food Pouches — Export' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Butter Covers / Wrapping Sheets — Export' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'PBAT Bio Compound Granules — Export' } },
    ],
  },
};

const markets = [
  {
    icon: '🏜️',
    region: 'Middle East',
    countries: 'UAE, Saudi Arabia, Qatar, Kuwait',
    points: [
      'Growing eco-packaging regulations',
      'Indian diaspora retail sector',
      'Hotel & hospitality chains',
    ],
  },
  {
    icon: '🌴',
    region: 'Southeast Asia',
    countries: 'Singapore, Malaysia, Thailand, Indonesia',
    points: [
      'Plastic ban enforcement',
      'Eco-conscious urban markets',
      'India trade corridor',
    ],
  },
  {
    icon: '🌿',
    region: 'Global Eco Importers',
    countries: 'Europe, US, Australia',
    points: [
      'Sustainability-focused buyers',
      'CSR-driven procurement',
      'DRDO certification as quality proof',
    ],
  },
];

const products = [
  { icon: '🛍️', name: 'D-Cut Carry Bags', spec: 'Material: PBAT | Certification: DRDO | BPA-free | 7 sizes available' },
  { icon: '🛒', name: 'U/W-Cut Carry Bags', spec: 'Material: PBAT | Certification: DRDO | BPA-free | 14 sizes available' },
  { icon: '🗑️', name: 'Biodegradable Garbage Bags', spec: 'Material: PBAT | Certification: DRDO | BPA-free | 8 sizes, up to 18 kg' },
  { icon: '🍱', name: 'Food Pouches', spec: 'Material: PBAT | Certification: DRDO | BPA-free | Food-contact safe' },
  { icon: '🧈', name: 'Butter Covers / Wrapping Sheets', spec: 'Material: PBAT | Certification: DRDO | BPA-free | Food-contact safe' },
  { icon: '🔬', name: 'PBAT Bio Compound Granules', spec: 'Material: PBAT resin | Certification: DRDO | For downstream manufacturing' },
];

const certBadges = [
  { icon: '🏅', label: 'DRDO Certified Technology' },
  { icon: '♻️', label: 'Plastic Waste Management Rules Compliant' },
  { icon: '✅', label: 'BPA-free Verified' },
  { icon: '🍽️', label: 'Food-contact Safe (applicable products)' },
];

const faqs = [
  {
    q: 'What certifications do your export products carry?',
    a: 'All products are manufactured using DRDO (Defence Research and Development Organisation) certified technology — the Indian government\'s highest quality and safety standard for biodegradable packaging. Documentation provided with all export orders.',
  },
  {
    q: 'What countries do you currently export to?',
    a: 'We are actively supplying and enquiring from buyers in the Middle East (UAE, Saudi Arabia, Qatar), Southeast Asia (Singapore, Malaysia), and other international markets. Contact us to discuss your country\'s import requirements.',
  },
  {
    q: 'What is the minimum export order quantity?',
    a: 'Minimum export order: 50,000 units per product line. Smaller trial orders (10,000–50,000 units) are considered for new importer relationships on a case-by-case basis.',
  },
  {
    q: 'How is export pricing structured?',
    a: 'Export pricing is CIF (Cost, Insurance & Freight) or FOB Hyderabad — depending on the destination and buyer preference. Pricing is provided in USD or INR. Contact us with your volume and destination for a quote.',
  },
  {
    q: 'Do your products meet international biodegradable standards?',
    a: 'Yes. PBAT (Polybutylene Adipate Terephthalate) is an internationally recognised certified compostable material. Our products are BPA-free, food-contact safe, and meet EN 13432 / ASTM D6400-equivalent biodegradability standards. DRDO certification is accepted as a quality proof by international buyers.',
  },
];

export default function ExportPackaging() {
  useEffect(() => {
    document.title = 'Biodegradable Packaging Export from India — DRDO Certified | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Export biodegradable packaging from India — DRDO certified PBAT bags, eco-friendly carry bags, garbage bags and food pouches. RDN Bio Products, Hyderabad. Supplying Middle East, Southeast Asia, eco-conscious importers.';
  }, []);

  const [form, setForm] = useState({ name: '', company: '', country: '', phone: '', products: '', monthlyVolume: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi, I'm interested in importing biodegradable packaging from India.",
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Products: ${form.products}`,
      `Volume: ${form.monthlyVolume}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', company: '', country: '', phone: '', products: '', monthlyVolume: '', message: '' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 20, padding: '5px 14px', fontSize: 13, fontWeight: 600 }}>
              🌏 Export Packaging Solutions
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable Packaging Export from India — RDN Bio Products
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 620, color: 'rgba(255,255,255,0.92)' }}>
            India-manufactured DRDO certified PBAT biodegradable packaging — available for export to Middle East, Southeast Asia, and international markets.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="#export-enquiry" className="btn-primary">Request Export Quote</a>
            <a href={TEL} className="btn-call">📞 +91-7301222666</a>
            <a href={WA_EXPORT} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ DRDO Certified', '🌍 Export Ready', '📦 PBAT Biodegradable'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Target Export Markets</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Serving eco-conscious importers across key regions</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, marginTop: 32 }}>
            {markets.map(m => (
              <div key={m.region} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '28px 24px' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{m.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 4 }}>{m.region}</h3>
                <p style={{ fontSize: 13, color: '#888', marginBottom: 14, fontStyle: 'italic' }}>{m.countries}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {m.points.map(p => (
                    <li key={p} style={{ fontSize: 13, color: '#555', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ color: 'var(--green-mid)', fontWeight: 700, flexShrink: 0 }}>✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Available for Export */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Products Available for Export</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Full range of DRDO certified PBAT biodegradable packaging</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 32 }}>
            {products.map(p => (
              <div key={p.name} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{p.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7 }}>{p.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certification */}
      <section style={{ padding: '56px 0', background: 'var(--green-dark)', borderBottom: '1px solid #2a5c1a' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', color: '#fff' }}>Compliance &amp; Certification</h2>
          <p className="section-sub" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.82)' }}>Documentation that meets international import requirements</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 32, marginBottom: 36 }}>
            {certBadges.map(b => (
              <div key={b.label} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.28)', borderRadius: 14, padding: '22px 18px', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{b.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.5 }}>{b.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.88)', lineHeight: 1.8, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            Our DRDO certification documentation is provided with all export orders — meeting international biodegradable packaging standards and supporting importers' own compliance requirements.
          </p>
        </div>
      </section>

      {/* Export Enquiry Form */}
      <section id="export-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Export Enquiry</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Fill the form below and we'll respond via WhatsApp within 2 hours on business days</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 18, padding: '32px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Enquiry sent!</h3>
                  <p style={{ color: '#666', fontSize: 14 }}>We'll respond on WhatsApp within 2 hours with export pricing and details.</p>
                  <button style={{ marginTop: 20, background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }} onClick={() => setSubmitted(false)}>Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="phone" value={form.phone} onChange={handleChange} required placeholder="+971 50 123 4567" type="tel" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Company Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="company" value={form.company} onChange={handleChange} required placeholder="Your Company Ltd." />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Country *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="country" value={form.country} onChange={handleChange} required placeholder="UAE / Singapore / Malaysia…" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Products Required *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="products" value={form.products} onChange={handleChange} required>
                        <option value="">Select products</option>
                        <option value="Carry Bags">Carry Bags</option>
                        <option value="Garbage Bags">Garbage Bags</option>
                        <option value="Food Pouches">Food Pouches</option>
                        <option value="Butter Covers">Butter Covers</option>
                        <option value="PBAT Granules">PBAT Granules</option>
                        <option value="Full Range">Full Range</option>
                      </select>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Monthly Volume *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="monthlyVolume" value={form.monthlyVolume} onChange={handleChange} required>
                        <option value="">Select monthly volume</option>
                        <option value="1,000–5,000 units">1,000–5,000 units</option>
                        <option value="5,000–20,000 units">5,000–20,000 units</option>
                        <option value="20,000–50,000 units">20,000–50,000 units</option>
                        <option value="50,000+ units">50,000+ units</option>
                      </select>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Additional Message (optional)</label>
                      <textarea className="form-input" style={{ fontSize: 16, width: '100%', minHeight: 80, resize: 'vertical' }} name="message" value={form.message} onChange={handleChange} placeholder="Any specific requirements, certifications needed, preferred Incoterms…" />
                    </div>
                  </div>
                  <button type="submit" className="submit-btn" style={{ marginTop: 20, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    {WA_SVG} Send Export Enquiry via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Speak to our export team</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Export Sales Line</div>
                  <a href={TEL} className="btn-call" style={{ marginBottom: 8, display: 'inline-block' }}>📞 Call Now</a>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>+91-7301222666</div>
                </div>
                <a href={WA_EXPORT} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', padding: '14px 20px' }}>
                  {WA_SVG} WhatsApp our Export Desk
                </a>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6, marginTop: 8 }}>
                  <strong style={{ color: 'var(--green-dark)' }}>RDN Bio Products LLP</strong><br />
                  Hyderabad, Telangana, India<br />
                  DRDO Certified Manufacturer<br />
                  FOB Hyderabad / CIF Available
                </div>
                <Link to="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>View full contact details →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((f, i) => (
              <div key={f.q} style={{ border: '1px solid #d4e8b0', borderRadius: 12, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', background: openFaq === i ? 'var(--green-pale)' : '#fff', border: 'none', padding: '16px 20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--green-dark)', lineHeight: 1.4 }}>{f.q}</span>
                  <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--green-mid)', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 20px 18px', background: 'var(--green-pale)', fontSize: 14, color: '#555', lineHeight: 1.8 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions exclude="export" />
    </main>
  );
}
