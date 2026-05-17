import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK_BASE = "https://wa.me/917301222666";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Get a Bulk Quote', item: 'https://rdnbio.com/#/get-quote' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly will I receive a quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Within 1 hour on WhatsApp (Mon–Sat, 9am–6pm). For complex custom orders, within 4 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are sample packs available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sample packs for bulk enquiries are couriered within 3–5 working days at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard bags: from 1 bundle. Custom-printed bags: MOQ 1,000 units. Custom sizes: MOQ 500 units.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer GST invoices for bulk orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GST invoices issued for all orders. Temple trusts, institutions, and corporate procurement teams accepted.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get pricing for multiple products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Fill the multi-product enquiry form or WhatsApp us with your requirements. We'll send a consolidated quote.",
      },
    },
  ],
};

const industryCards = [
  { id: 'retail', icon: '🛒', label: 'Retail & Kirana', product: 'D-Cut bags' },
  { id: 'food', icon: '🍽️', label: 'Food & Restaurant', product: 'Restaurant carry bags' },
  { id: 'temple', icon: '🛕', label: 'Temple & Trust', product: 'D-Cut bags' },
  { id: 'institutional', icon: '🏥', label: 'Hospital & Institution', product: 'U/W-Cut bags' },
];

const trustCards = [
  { icon: '⚡', title: '1-Hour Quote Response', desc: 'Mon–Sat, 9am–6pm. Complex custom orders within 4 hours.' },
  { icon: '📦', title: 'Free Sample Packs', desc: 'Couriered within 3–5 working days for serious bulk enquiries.' },
  { icon: '🏭', title: 'DRDO Certified Manufacturer', desc: 'Hyderabad-based, government-validated PBAT manufacturing.' },
  { icon: '🚚', title: 'Pan India Delivery', desc: '3–10 working days to any state. Hyderabad next-day.' },
  { icon: '🧾', title: 'GST Invoice — All Orders', desc: 'Proper GST tax invoices for B2B, corporate & institutional orders.' },
  { icon: '🎨', title: 'Custom Size & Printing', desc: 'Your logo, brand name, and size specs. MOQ 1,000 units.' },
];

const faqs = [
  {
    q: 'How quickly will I receive a quote?',
    a: 'Within 1 hour on WhatsApp (Mon–Sat, 9am–6pm). For complex custom orders, within 4 hours.',
  },
  {
    q: 'Are sample packs available?',
    a: 'Yes. Sample packs for bulk enquiries are couriered within 3–5 working days at no cost.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'Standard bags: from 1 bundle. Custom-printed bags: MOQ 1,000 units. Custom sizes: MOQ 500 units.',
  },
  {
    q: 'Do you offer GST invoices for bulk orders?',
    a: 'Yes. GST invoices issued for all orders. Temple trusts, institutions, and corporate procurement teams accepted.',
  },
  {
    q: 'How do I get pricing for multiple products?',
    a: "Fill the multi-product enquiry form or WhatsApp us with your requirements. We'll send a consolidated quote.",
  },
];

const relatedLinks = [
  { to: '/temple-packaging-solutions', label: '🛕 Temple Packaging' },
  { to: '/food-packaging-solutions', label: '🍽️ Food Packaging' },
  { to: '/institutional-packaging', label: '🏥 Institutional' },
  { to: '/retail-packaging-solutions', label: '🛒 Retail' },
  { to: '/biodegradable-carry-bags', label: '🧴 Carry Bags' },
  { to: '/products', label: '📦 All Products' },
];

export default function GetQuote() {
  useEffect(() => {
    document.title = 'Get a Bulk Packaging Quote — RDN Bio Products | Biodegradable Bags Manufacturer';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Request a free bulk quote for biodegradable carry bags, garbage bags, pouches and butter covers from RDN Bio Products. Sample packs available. Pan India supply. DRDO certified manufacturer in Hyderabad.';
  }, []);

  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    org: '',
    industry: '',
    product: '',
    size: '',
    qty: '',
    monthly_volume: '',
    sample_request: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedIndustry) {
      const card = industryCards.find(c => c.id === selectedIndustry);
      if (card) {
        setForm(f => ({ ...f, industry: card.label, product: card.product }));
      }
    }
  }, [selectedIndustry]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hi, I would like a bulk quote from RDN Bio Products.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Organisation: ${form.org}`,
      form.industry ? `Industry: ${form.industry}` : null,
      form.product ? `Product Needed: ${form.product}` : null,
      form.size ? `Size: ${form.size}` : null,
      form.qty ? `Quantity: ${form.qty}` : null,
      form.monthly_volume ? `Monthly Volume: ${form.monthly_volume}` : null,
      `Sample pack requested: ${form.sample_request ? 'Yes' : 'No'}`,
    ].filter(Boolean).join('\n');
    window.open(`${WA_LINK_BASE}?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', org: '', industry: '', product: '', size: '', qty: '', monthly_volume: '', sample_request: false });
    setSelectedIndustry('');
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '5px 16px', fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 18 }}>
            📦 Free Quote · No Commitment · 1-Hour Response
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Get a Free Bulk Packaging Quote
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 600, color: 'rgba(255,255,255,0.92)' }}>
            Tell us what you need — our packaging experts will send a tailored quote on WhatsApp within 1 hour. Sample packs available for all bulk enquiries.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ DRDO Certified', '✓ BPA Free', '✓ Pan India Supply', '✓ GST Invoice Issued'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Selector */}
      <section style={{ padding: '48px 0 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>What industry are you in?</h2>
          <p className="section-sub" style={{ textAlign: 'center', marginBottom: 24 }}>Select your industry to pre-fill the form with the right product suggestion</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginBottom: 40 }}>
            {industryCards.map(card => (
              <button
                key={card.id}
                onClick={() => setSelectedIndustry(card.id === selectedIndustry ? '' : card.id)}
                style={{
                  background: selectedIndustry === card.id ? 'var(--green-mid)' : '#fff',
                  border: selectedIndustry === card.id ? '2px solid var(--green-dark)' : '2px solid #d4e8b0',
                  borderRadius: 14,
                  padding: '20px 16px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.15s',
                  color: selectedIndustry === card.id ? '#fff' : 'var(--green-dark)',
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{card.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{card.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 20, padding: '36px 32px' }}>
            <h2 className="section-title" style={{ marginBottom: 6 }}>Your Quote Request</h2>
            <p style={{ fontSize: 14, color: '#888', marginBottom: 28 }}>All fields marked * are required. We respond on WhatsApp within 1 hour.</p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Quote request sent!</h3>
                <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>We'll respond on WhatsApp within 1 hour with a tailored quote.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>

                  {/* Name */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                    <input
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ravi Kumar"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>WhatsApp Number *</label>
                    <input
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Org */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Organisation / Business Name *</label>
                    <input
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      required
                      placeholder="Sri Venkateswara Temple Trust / Saravana Bhavan / ABC Supermarket"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Industry</label>
                    <select
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                    >
                      <option value="">Select industry</option>
                      <option value="Retail/Kirana">Retail / Kirana</option>
                      <option value="Restaurant/Cloud Kitchen">Restaurant / Cloud Kitchen</option>
                      <option value="Temple/Religious Trust">Temple / Religious Trust</option>
                      <option value="Hospital/Institution">Hospital / Institution</option>
                      <option value="Catering/Events">Catering / Events</option>
                      <option value="School/College">School / College</option>
                      <option value="Corporate/Office">Corporate / Office</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Product */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Product Needed *</label>
                    <select
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a product</option>
                      <option value="D-Cut bags">D-Cut bags</option>
                      <option value="U/W-Cut bags">U/W-Cut bags</option>
                      <option value="Garbage bags">Garbage bags</option>
                      <option value="Pouches">Pouches</option>
                      <option value="Grocery bags">Grocery bags</option>
                      <option value="Butter covers">Butter covers</option>
                      <option value="Bio granules">Bio granules</option>
                      <option value="Multiple products">Multiple products</option>
                    </select>
                  </div>

                  {/* Size */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Size Needed</label>
                    <input
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      placeholder="e.g. 10×14 inch or custom"
                    />
                  </div>

                  {/* Qty */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Quantity Required</label>
                    <input
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="qty"
                      value={form.qty}
                      onChange={handleChange}
                      placeholder="e.g. 5,000 bags or 100 bundles"
                    />
                  </div>

                  {/* Monthly Volume */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Monthly Volume</label>
                    <select
                      className="form-input"
                      style={{ fontSize: 16, width: '100%' }}
                      name="monthly_volume"
                      value={form.monthly_volume}
                      onChange={handleChange}
                    >
                      <option value="">Select monthly volume</option>
                      <option value="Just testing">Just testing</option>
                      <option value="Less than 500 bags/month">&lt;500 bags/month</option>
                      <option value="500–2000 bags/month">500–2000/month</option>
                      <option value="2000–5000 bags/month">2000–5000/month</option>
                      <option value="5000–20000 bags/month">5000–20000/month</option>
                      <option value="20000+ bags/month">20000+/month</option>
                    </select>
                  </div>

                  {/* Sample request */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: '#444', fontWeight: 500 }}>
                      <input
                        type="checkbox"
                        name="sample_request"
                        checked={form.sample_request}
                        onChange={handleChange}
                        style={{ width: 18, height: 18, accentColor: 'var(--green-mid)', cursor: 'pointer' }}
                      />
                      Request a free sample pack (couriered within 3–5 working days)
                    </label>
                  </div>

                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  style={{ marginTop: 24, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  {WA_SVG} Send Quote Request via WhatsApp →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why RDN Bio Products */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why choose RDN Bio Products</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>India's trusted DRDO certified biodegradable packaging manufacturer</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 32 }}>
            {trustCards.map(c => (
              <div key={c.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Request CTA */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <div style={{ background: 'var(--green-pale)', border: '2px solid #b6dba0', borderRadius: 20, padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>📬</div>
            <h2 style={{ fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 800, color: 'var(--green-dark)', marginBottom: 10 }}>
              Just want samples first?
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
              We courier sample packs to your business address within 3–5 working days for serious bulk enquiries.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`${WA_LINK_BASE}?text=${encodeURIComponent("Hi, I'd like to request a sample pack of biodegradable bags from RDN Bio Products")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-wa"
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                {WA_SVG} Request Sample Pack
              </a>
              <a href={TEL} className="btn-call">📞 Call Now</a>
            </div>
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

      {/* Related Pages */}
      <section style={{ padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>Related industry pages</h2>
          <p className="section-sub" style={{ textAlign: 'center', marginBottom: 28 }}>Browse solutions tailored for your industry</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
            {relatedLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  display: 'block',
                  background: 'var(--green-pale)',
                  border: '1px solid #d4e8b0',
                  borderRadius: 10,
                  padding: '14px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--green-dark)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'background 0.15s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
