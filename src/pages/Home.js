import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK_GENERIC = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20packaging%20quote%20from%20RDN%20Bio%20Products";
const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Biodegradable Packaging Solutions — RDN Bio Products',
  description: 'India\'s DRDO certified biodegradable packaging manufacturer replacing single-use plastic across retail, food, temples and institutions.',
  url: 'https://rdnbio.com/',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are RDN Bio Products bags made of?', acceptedAnswer: { '@type': 'Answer', text: 'Our bags are made from PBAT (Polybutylene Adipate Terephthalate) — a plant-based, petroleum-free material. They are 100% organic, BPA-free, and non-toxic.' } },
    { '@type': 'Question', name: 'Are RDN Bio Products DRDO certified?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our bags are manufactured using technology certified by the Defence Research and Development Organisation (DRDO), Government of India — validating biodegradability, non-toxicity, and material safety.' } },
    { '@type': 'Question', name: 'Do you supply biodegradable bags across India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We supply pan India from our manufacturing unit in Hyderabad, Telangana — covering all states including Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra, Delhi NCR, and more.' } },
    { '@type': 'Question', name: 'What is the minimum order quantity?', acceptedAnswer: { '@type': 'Answer', text: 'For standard sizes, orders start from single bundles. For custom sizes or printed bags, minimums apply. Contact us on WhatsApp at +91-7301222666 for specific MOQ details.' } },
    { '@type': 'Question', name: 'Can I get custom printed or custom size biodegradable bags?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer full customisation — custom sizes, custom colors, and brand printing with your logo and tagline for bulk orders.' } },
    { '@type': 'Question', name: 'How long do biodegradable bags take to decompose?', acceptedAnswer: { '@type': 'Answer', text: 'Our biodegradable bags decompose naturally within 180 days under composting conditions — versus 400–1,000 years for conventional plastic.' } },
  ],
};

const industries = [
  {
    icon: '🛒',
    title: 'Retail & Kirana Stores',
    desc: 'D-Cut and U-Cut carry bags for shops, supermarkets, and wet markets. Custom printed with your store name. Start from small bundles.',
    link: '/biodegradable-carry-bags',
    cta: 'Carry bag solutions →',
    color: '#e8f5d8',
    border: '#c5e09a',
  },
  {
    icon: '🍽️',
    title: 'Restaurants & Food Industry',
    desc: 'Food-grade pouches, butter covers, and carry bags for restaurants, cloud kitchens, catering, and dairy businesses. BPA-free, safe for direct food contact.',
    link: '/food-packaging-solutions',
    cta: 'Food packaging →',
    color: '#fff8e1',
    border: '#ffe082',
  },
  {
    icon: '🛕',
    title: 'Temples & Religious Trusts',
    desc: 'Prasadam bags, flower offering bags, annadanam covers, and festival bulk supply. Eco-dharma in every bag. Custom temple branding available.',
    link: '/temple-packaging-solutions',
    cta: 'Temple solutions →',
    color: '#fce4ec',
    border: '#f48fb1',
    highlight: true,
  },
  {
    icon: '🏥',
    title: 'Institutions & Corporates',
    desc: 'Bulk supply for hospitals, schools, government offices, and corporate campuses. Garbage bags, waste liners, canteen bags. GST invoicing available.',
    link: '/institutional-packaging',
    cta: 'Institutional supply →',
    color: '#e3f2fd',
    border: '#90caf9',
  },
];

const productRange = [
  { name: 'D-Cut Bags',    desc: '7 sizes · 35–45 microns',  use: 'Retail & kirana',          photo: 'dcut-bag.webp',    badge: '7 sizes'  },
  { name: 'U/W-Cut Bags',  desc: '14 sizes · 30–50 microns', use: 'Grocery & hospitals',      photo: 'ucut-bag.webp',    badge: '14 sizes' },
  { name: 'Garbage Bags',  desc: '8 sizes · up to 18 kg',    use: 'Offices & institutions',   photo: 'garbage-bag.webp', badge: '8 sizes'  },
  { name: 'Pouches',       desc: '4 sizes · 35–40 microns',  use: 'Food & spices',            photo: 'pouches-bag.webp', badge: '4 sizes'  },
  { name: 'Grocery Bags',  desc: '8 sizes · 30–45 microns',  use: 'Supermarkets',             photo: 'pouches2-bag.webp',badge: '8 sizes'  },
  { name: 'Butter Covers', desc: '2 sizes · 30 microns',     use: 'Dairy & food industry',   photo: 'butter-bag.webp',  badge: '2 sizes'  },
];

const impactStats = [
  { icon: '🌍', num: '400+ years', label: 'Plastic takes to break down', contrast: '~180 days', contrastLabel: 'Our bags decompose in' },
  { icon: '☠️', num: 'Toxic', label: 'Microplastics from plastic bags', contrast: 'Zero', contrastLabel: 'Toxic residue from our bags' },
  { icon: '⚖️', num: '₹500+', label: 'Fine for plastic bag use in India', contrast: '✓ Compliant', contrastLabel: 'Our bags are law-compliant' },
  { icon: '🛡️', num: 'BPA', label: 'In conventional plastic bags', contrast: 'BPA Free', contrastLabel: 'Our bags are 100% BPA-free' },
];

const testimonials = [
  { quote: 'We switched from plastic carry bags 8 months ago. Customers love that we use biodegradable bags — it actually brings more people to our store. Quality is excellent and delivery is always on time.', name: 'Ravi Kumar', role: 'Owner, Sri Lakshmi Kirana Store', location: 'Dilsukhnagar, Hyderabad', icon: '🏪' },
  { quote: 'Our hospital switched to RDN Bio Products for all waste disposal and patient-facing bags. BPA-free certification was the deciding factor. Responsive team, good bulk pricing.', name: 'Dr. Prasad Reddy', role: 'Administrator, Care Polyclinic', location: 'Kukatpally, Hyderabad', icon: '🏥' },
];

const faqs = [
  { q: 'What are RDN Bio Products bags made of?', a: 'Our bags are made from PBAT (Polybutylene Adipate Terephthalate) — a plant-based, petroleum-free material. They are 100% organic, BPA-free, and non-toxic, making them safe for food, medical, and everyday use.' },
  { q: 'Are RDN Bio Products DRDO certified?', a: 'Yes. Our bags are manufactured using technology certified by the Defence Research and Development Organisation (DRDO), Government of India — validating biodegradability, non-toxicity, and material safety.' },
  { q: 'Do you supply biodegradable bags across India?', a: 'Yes. We supply pan India from our manufacturing unit in Hyderabad, Telangana — covering all states including Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra, Delhi NCR, and more.' },
  { q: 'What is the minimum order quantity?', a: 'For standard sizes, orders start from single bundles. For custom sizes or printed bags, minimums apply. Contact us on WhatsApp at +91-7301222666 for specific MOQ details.' },
];

export default function Home() {
  useEffect(() => {
    document.title = 'Biodegradable Carry Bags & Packaging Manufacturer India | RDN Bio Products Hyderabad';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'RDN Bio Products LLP — DRDO certified biodegradable packaging manufacturer in Hyderabad. Carry bags, garbage bags, pouches & butter covers. D-Cut, U/W-Cut, custom printing. Pan India supply. Call +91-7301222666.';
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', product: '', qty: '', org: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like a bulk packaging quote from RDN Bio Products.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Product: ${form.product}`,
      form.qty ? `Quantity: ${form.qty}` : null,
      form.org ? `Organisation: ${form.org}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', product: '', qty: '', org: '' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg,#f0fae6 0%,#e0f5c8 60%,#d4f0b0 100%)', padding: '52px 0 44px', borderBottom: '1px solid #c8e89a' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
                <span className="drdo-badge">✓ DRDO Certified Technology</span>
                <span style={{ background: '#fff', border: '1px solid #c5e09a', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700, color: 'var(--green-dark)' }}>🇮🇳 Made in Hyderabad</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-mid)', textTransform: 'uppercase', marginBottom: 10 }}>🏭 Biodegradable Packaging Manufacturer · Hyderabad, India</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,42px)', lineHeight: 1.15, color: 'var(--green-dark)', marginBottom: 16 }}>
                Biodegradable Carry Bags<br />
                &amp; <span style={{ color: 'var(--green-mid)' }}>Compostable Packaging</span><br />
                Manufactured in India
              </h1>
              <p style={{ fontSize: 'clamp(14px,1.8vw,17px)', color: '#444', marginBottom: 10, lineHeight: 1.75, maxWidth: 560 }}>
                Certified biodegradable packaging for <strong>retail stores, restaurants, temples, hospitals,</strong> and institutions across India. Replace plastic legally, affordably, and responsibly.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
                {['Kirana stores', 'Restaurants', 'Hospitals', 'Temples', 'Cloud kitchens', 'Corporates'].map(c => (
                  <span key={c} className="pill" style={{ fontSize: 11 }}>{c}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="#enquiry" className="btn-primary" style={{ fontSize: 15, padding: '12px 24px' }}>Request Bulk Quote</a>
                <a href="tel:+917301222666" className="btn-call">📞 Call Now</a>
                <a href={WA_LINK_GENERIC} target="_blank" rel="noreferrer" className="btn-wa">
                  {WA_SVG} WhatsApp us
                </a>
              </div>
            </div>
            <div className="hero-img">
              <img src="hero2.webp" alt="RDN Bio Products — Biodegradable packaging solutions India" loading="eager" fetchpriority="high" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section style={{ background: 'var(--green-dark)', padding: '32px 0' }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '6+', label: 'Product categories', sub: 'D-Cut to Bio Granules' },
              { num: '30+', label: 'Size variants', sub: 'Standard & custom' },
              { num: '100%', label: 'Biodegradable', sub: 'PBAT plant-based' },
              { num: '~180 days', label: 'Decomposes in', sub: 'Composting conditions' },
              { num: 'Pan India', label: 'Supply reach', sub: 'All states covered' },
              { num: 'DRDO', label: 'Certified tech', sub: 'Govt. of India standard' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(17px,2.5vw,26px)', color: '#fff', lineHeight: 1.1, marginBottom: 3 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.95)', fontWeight: 700, marginBottom: 1 }}>{s.label}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY VERTICALS ───────────────────────────── */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid #f0f5e8', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-mid)', textTransform: 'uppercase', marginBottom: 10 }}>Packaging for every business</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Solutions tailored to your industry</h2>
            <p className="section-sub" style={{ textAlign: 'center' }}>From kirana stores to 5-star hotels, hospitals to pilgrimage centres — we have the right packaging</p>
          </div>
          <div className="industry-grid">
            {industries.map(ind => (
              <Link to={ind.link} key={ind.title} className={`industry-card${ind.highlight ? ' industry-card--highlight' : ''}`} style={{ '--ind-bg': ind.color, '--ind-border': ind.border }}>
                {ind.highlight && <div className="industry-card__badge">⭐ High Demand</div>}
                <div className="industry-card__icon">{ind.icon}</div>
                <h3 className="industry-card__title">{ind.title}</h3>
                <p className="industry-card__desc">{ind.desc}</p>
                <span className="industry-card__cta">{ind.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ─────────────────────────────── */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #f0f5e8', background: '#fafff5' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our product range</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>100% organic · BPA free · DRDO certified · Custom sizes &amp; printing available</p>
          <div className="home-products-grid">
            {productRange.map(p => (
              <Link to="/products" key={p.name} className="home-product-card">
                <div className="home-product-img">
                  <img src={p.photo} alt={p.name + ' — biodegradable ' + p.use} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  <span className="home-product-badge">{p.badge}</span>
                </div>
                <div className="home-product-body">
                  <div className="home-product-name">{p.name}</div>
                  <div className="home-product-desc">{p.desc}</div>
                  <div className="home-product-use">{p.use}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary">View full product specs →</Link>
            <Link to="/customisation" className="btn-outline">Custom size &amp; printing →</Link>
          </div>
        </div>
      </section>

      {/* ── PLASTIC IMPACT ───────────────────────────────── */}
      <section style={{ padding: '60px 0', background: 'var(--green-dark)', borderBottom: '2px solid #1d3d09' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3.5vw,34px)', color: '#fff', marginBottom: 10 }}>Why making the switch matters</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto' }}>Conventional plastic is dangerous for soil, water, and human health — and now illegal in India. Here's what you're replacing.</p>
          </div>
          <div className="impact-grid">
            {impactStats.map((s, i) => (
              <div key={i} className="impact-card">
                <div className="impact-icon">{s.icon}</div>
                <div className="impact-bad">
                  <div className="impact-bad__num">{s.num}</div>
                  <div className="impact-bad__label">{s.label}</div>
                </div>
                <div className="impact-arrow">→</div>
                <div className="impact-good">
                  <div className="impact-good__num">{s.contrast}</div>
                  <div className="impact-good__label">{s.contrastLabel}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="#enquiry" className="btn-primary" style={{ background: '#5cb81c', borderColor: '#5cb81c', fontSize: 15, padding: '13px 32px' }}>Request Bulk Quote — Make the switch today</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #f0f5e8', background: '#fafff5' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-sub">Common questions answered — more in our FAQ page</p>
          <div style={{ marginTop: 28 }}>
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-summary">
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <Link to="/faq" className="btn-outline" style={{ fontSize: 13 }}>View all 25 FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #f0f5e8', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>What our customers say</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Businesses across India trust RDN Bio Products</p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{t.icon}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                    <div className="testimonial-location">📍 {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL SEO ────────────────────────────────────── */}
      <section style={{ padding: '40px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title">Biodegradable packaging delivered across Hyderabad &amp; India</h2>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 20, lineHeight: 1.7 }}>
            RDN Bio Products LLP is based in <strong>Karmanghat, Saroornagar, Hyderabad (500035)</strong> — manufacturing and supplying DRDO certified biodegradable bags to businesses across Hyderabad, Telangana, and pan India.
          </p>
          <div className="pills-row" style={{ marginBottom: 16 }}>
            {['Karmanghat', 'Saroornagar', 'LB Nagar', 'Dilsukhnagar', 'Uppal', 'Secunderabad', 'Kukatpally', 'Begumpet', 'Madhapur', 'Miyapur', 'Mehdipatnam', 'Tolichowki', 'Ameerpet', 'Himayatnagar', 'ECIL', 'Nacharam', 'Moosapet'].map(area => (
              <span key={area} className="pill" style={{ fontSize: 12 }}>{area}</span>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#888' }}>Also supplying across <strong>Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra, Delhi NCR</strong> and all states pan India.</p>
        </div>
      </section>

      {/* ── ENQUIRY FORM ─────────────────────────────────── */}
      <section id="enquiry" style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Request a Bulk Packaging Quote</h2>
            <p style={{ fontSize: 15, color: '#666' }}>Tell us what you need — we'll call or WhatsApp you back within 24 hours.</p>
          </div>
          <div className="enquiry-grid">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input className="form-input" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ fontSize: 16 }} />
                  <input className="form-input" placeholder="WhatsApp number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required style={{ fontSize: 16 }} />
                  <select className="form-input" value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} required style={{ fontSize: 16 }}>
                    <option value="">Select product / segment</option>
                    <optgroup label="Carry Bags">
                      <option>D-Cut bags</option>
                      <option>U/W-Cut bags</option>
                    </optgroup>
                    <optgroup label="Food &amp; Packaging">
                      <option>Pouches</option>
                      <option>Butter covers</option>
                      <option>Grocery bags</option>
                    </optgroup>
                    <optgroup label="Waste Management">
                      <option>Garbage bags</option>
                    </optgroup>
                    <optgroup label="Specialty">
                      <option>Temple / prasadam bags</option>
                      <option>Bio granules (PBAT)</option>
                      <option>Multiple products</option>
                    </optgroup>
                  </select>
                  <input className="form-input" placeholder="Quantity (bags/kg/bundles)" value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })} style={{ fontSize: 16 }} />
                  <input className="form-input form-full" placeholder="Organisation / shop name (optional)" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} style={{ fontSize: 16 }} />
                </div>
                <button type="submit" className="submit-btn">Send enquiry via WhatsApp</button>
                {submitted && <div className="success-msg show">✓ WhatsApp is opening — just tap Send!</div>}
              </form>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--green-dark)', marginBottom: 20 }}>Or reach us directly</h3>
              <div style={{ marginBottom: 16 }}>
                <a href="tel:+917301222666" className="btn-call" style={{ display: 'inline-flex', marginBottom: 10, width: '100%', justifyContent: 'center' }}>📞 Call +91-7301222666</a>
                <a href="tel:+917301777444" className="btn-call btn-call--secondary" style={{ display: 'inline-flex', marginBottom: 10, width: '100%', justifyContent: 'center' }}>📞 Call +91-7301777444</a>
              </div>
              <a href={WA_LINK_GENERIC} target="_blank" rel="noreferrer" className="btn-wa" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                {WA_SVG} Chat on WhatsApp
              </a>
              <p style={{ fontSize: 12, color: '#aaa', marginTop: 8, textAlign: 'center' }}>Typically replies within 1 hour</p>
              <div style={{ marginTop: 20, padding: '16px', background: 'var(--green-pale)', borderRadius: 10, border: '1px solid var(--green-light)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>✉ Email us</div>
                <div style={{ fontSize: 13, color: '#555' }}>rdnbioproductsllp@gmail.com</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 4, marginTop: 10 }}>📍 Manufacturing address</div>
                <div style={{ fontSize: 12, color: '#666', lineHeight: 1.5 }}>#10-01-78/47/5, Srinivasa Nagar Colony, Karmanghat, Saroornagar(M), Hyderabad – 500 035</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
