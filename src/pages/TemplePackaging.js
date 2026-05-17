import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20quote%20for%20temple%20packaging";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Temple Packaging Solutions', item: 'https://rdnbio.com/#/temple-packaging-solutions' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of bags are suitable for prasadam distribution?',
      acceptedAnswer: { '@type': 'Answer', text: 'D-Cut and U-Cut biodegradable bags are ideal for prasadam distribution. We recommend food-grade PBAT bags in sizes ranging from 6×8 to 14×18 inches depending on the quantity of prasadam. All our bags are BPA-free and safe for direct food contact.' },
    },
    {
      '@type': 'Question',
      name: 'Can I print our temple name and deity image on the bags?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer custom printing with your temple name, logo, and deity image. Minimum order quantity for custom printing is 1,000 bags. Single and multi-color printing options are available.' },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for festival bulk supply?',
      acceptedAnswer: { '@type': 'Answer', text: 'Minimum order quantity for plain bags starts from 500 units. For custom-printed temple bags the MOQ is 1,000 units. We strongly recommend placing festival orders at least 30 days in advance to ensure timely delivery.' },
    },
    {
      '@type': 'Question',
      name: 'Are these bags safe for food contact (prasadam)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. All RDN Bio Products bags are manufactured from food-grade PBAT material, are BPA-free, and contain no toxic inks or additives. They are completely safe for direct contact with prasadam and annadanam food items.' },
    },
    {
      '@type': 'Question',
      name: 'Do you supply for temples outside Hyderabad?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We supply pan India. Orders have been fulfilled for temples in Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Maharashtra, and other states. Bulk orders qualify for freight-inclusive pricing on select zones.' },
    },
  ],
};

const solutions = [
  { icon: '🌸', title: 'Prasadam Bags', desc: 'D-Cut & U-Cut bags for prasadam distribution. Food-grade, BPA-free. Available with custom temple name and deity printing. Sizes 6×8 to 14×18 inches.' },
  { icon: '🌺', title: 'Flower Offering Bags', desc: 'Lightweight U-Cut bags for flower vendors at temple gates. Ideal for mela flower bunches, puja garlands, and loose flowers. Multiple sizes available.' },
  { icon: '🍚', title: 'Annadanam Food Packaging', desc: 'Food-safe covers and pouches for free meal (annadanam) distribution. Hygienic, compostable, BPA-free. Trusted by temple annadanam trusts.' },
  { icon: '💰', title: 'Donation Counter Bags', desc: 'Sturdy D-Cut bags for hundi collection, donation receipts, prasadam tokens, and counter distribution. Durable and tear-resistant.' },
  { icon: '🎉', title: 'Festival Bulk Supply', desc: 'Advance bulk ordering for Diwali, Ugadi, Ganesh Chaturthi, Dussehra, Navratri. Recommend 30+ days advance booking for guaranteed stock.' },
  { icon: '🖨️', title: 'Custom Temple Branding', desc: 'Print your temple name, logo, and deity image on every bag. MOQ 1,000 bags. Single and multi-color options. Pantone color matching available.' },
];

const stats = [
  { value: '1 Lakh+', label: 'bags used per major festival at large temples' },
  { value: '80%', label: 'of temple plastic waste is carry bags' },
  { value: '₹500', label: 'fine per violation of India plastic ban' },
  { value: '100%', label: 'RDN bags compostable in natural environment' },
];

const steps = [
  { num: '01', title: 'Share your requirements', desc: 'Tell us the products, quantities, size preferences, and your festival or event date via WhatsApp or the form below.' },
  { num: '02', title: 'Receive your sample pack', desc: 'We courier a sample pack to your temple address within 3–5 working days at no cost for bulk enquiries.' },
  { num: '03', title: 'Confirm & receive bulk order', desc: 'Approve the samples and confirm your order. We deliver pan India with typical lead times of 7–10 working days.' },
];

const testimonials = [
  {
    quote: 'We switched to RDN Bio Products bags for our temple prasadam last Ugadi. The custom printing with our deity image looks divine, and our trustees love that we are now plastic-free. Truly aligns with our dharmic values.',
    name: 'Sri Venkataraman T.',
    role: 'Secretary, Sri Lakshmi Narasimha Swamy Temple Trust, Nalgonda',
  },
  {
    quote: 'Our Ganesh Chaturthi festival required 60,000 bags on a tight deadline. RDN Bio delivered on time, the quality was excellent, and the price was reasonable for our charitable trust budget. Highly recommended.',
    name: 'Pradeep Kulkarni',
    role: 'Festival Committee Chairman, Ganesh Utsav Samiti, Hyderabad',
  },
];

const faqs = [
  {
    q: 'What types of bags are suitable for prasadam distribution?',
    a: 'D-Cut and U-Cut biodegradable bags are ideal for prasadam distribution. We recommend food-grade PBAT bags in sizes ranging from 6×8 to 14×18 inches depending on the quantity of prasadam. All our bags are BPA-free and safe for direct food contact.',
  },
  {
    q: 'Can I print our temple name and deity image on the bags?',
    a: 'Yes. We offer custom printing with your temple name, logo, and deity image. Minimum order quantity for custom printing is 1,000 bags. Single and multi-color printing options are available to suit your budget.',
  },
  {
    q: 'What is the minimum order for festival bulk supply?',
    a: 'Minimum order quantity for plain bags starts from 500 units. For custom-printed temple bags the MOQ is 1,000 units. We strongly recommend placing festival orders at least 30 days in advance to ensure timely delivery.',
  },
  {
    q: 'Are these bags safe for food contact (prasadam)?',
    a: 'Absolutely. All RDN Bio Products bags are manufactured from food-grade PBAT material, are BPA-free, and contain no toxic inks or additives. They are completely safe for direct contact with prasadam and annadanam food items.',
  },
  {
    q: 'Do you supply for temples outside Hyderabad?',
    a: 'Yes. We supply pan India. Orders have been fulfilled for temples across Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Maharashtra, and other states. Bulk orders qualify for freight-inclusive pricing on select zones.',
  },
];

export default function TemplePackaging() {
  useEffect(() => {
    document.title = 'Temple Prasadam & Pooja Packaging | Plastic-Free Temple Bags | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Eco-friendly biodegradable bags for temples, mutts, and pilgrimage centres. Prasadam packaging, flower bags, annadanam covers, donation counter bags. Bulk supply. DRDO certified. Call +91-7301222666.';
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', temple: '', product: '', qty: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hi, I need biodegradable packaging for our temple / religious trust.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Temple Name: ${form.temple}`,
      `Product Needed: ${form.product}`,
      form.qty  ? `Quantity: ${form.qty}`           : null,
      form.date ? `Festival / Event Date: ${form.date}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', temple: '', product: '', qty: '', date: '' });
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
              🛕 Temple &amp; Religious Trust Packaging
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Plastic-Free Packaging for Temples, Mutts &amp; Pilgrimage Centres
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 620, color: 'rgba(255,255,255,0.92)' }}>
            Caring for devotees and Mother Earth is a sacred responsibility. Replace single-use plastic with 100% biodegradable temple packaging that honours eco-dharma — because plastic-free devotion is the highest offering.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="#temple-enquiry" className="btn-primary">Request Temple Bulk Quote</a>
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

      {/* Why temples need biodegradable packaging */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40, alignItems: 'start' }}>
            <div>
              <h2 className="section-title">Why temples need biodegradable packaging</h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 14 }}>
                Major temples distribute hundreds of thousands of bags every festival season — for prasadam, flowers, annadanam, and token collection. The overwhelming majority of this packaging ends up as plastic waste in rivers, temple premises, and nearby villages.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 14 }}>
                Trustees, devotees, and religious authorities across India are increasingly aware of eco-dharma — the duty to protect creation. India's plastic ban (2022) imposes fines up to ₹500 per violation on establishments that distribute single-use plastic bags.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8 }}>
                RDN Bio Products — DRDO certified, Hyderabad-based manufacturer — supplies 100% biodegradable PBAT bags that compost naturally, are safe for food contact, and can carry your temple's name and blessings on every bag.
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

      {/* 6 Temple Packaging Solutions */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>6 Temple Packaging Solutions</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Everything your temple, mutt, or pilgrimage centre needs — all biodegradable</p>
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
          <h2 className="section-title" style={{ textAlign: 'center' }}>What temple trustees say</h2>
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

      {/* CTA Form */}
      <section id="temple-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get your Temple Bulk Packaging Proposal</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Fill the form below and we'll send a tailored quote via WhatsApp within 2 hours</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 18, padding: '32px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🙏</div>
                  <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Enquiry sent!</h3>
                  <p style={{ color: '#666', fontSize: 14 }}>We'll respond on WhatsApp within 2 hours. May your temple's packaging reflect your devotion.</p>
                  <button style={{ marginTop: 20, background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }} onClick={() => setSubmitted(false)}>Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="name" value={form.name} onChange={handleChange} required placeholder="Ramesh Kumar" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" type="tel" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Temple / Trust Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="temple" value={form.temple} onChange={handleChange} required placeholder="Sri Lakshmi Narasimha Swamy Temple Trust" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Product Needed *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="product" value={form.product} onChange={handleChange} required>
                        <option value="">Select product type</option>
                        <option value="Prasadam bags">Prasadam bags</option>
                        <option value="Flower offering bags">Flower offering bags</option>
                        <option value="Annadanam food covers">Annadanam food covers</option>
                        <option value="Donation counter bags">Donation counter bags</option>
                        <option value="All types">All types</option>
                        <option value="Other">Other (mention in quantity field)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Quantity Required</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="qty" value={form.qty} onChange={handleChange} placeholder="e.g. 10,000 bags" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Festival / Event Date</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="date" value={form.date} onChange={handleChange} placeholder="e.g. Ganesh Chaturthi, Sept 2025" />
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
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Prefer to talk directly?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Sales &amp; Bulk Orders</div>
                  <a href="tel:+917301222666" className="btn-call" style={{ marginBottom: 8, display: 'inline-block' }}>📞 Call Now</a>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>+91-7301222666</div>
                </div>
                <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Second Line</div>
                  <a href="tel:+917301777444" className="btn-call" style={{ marginBottom: 8, display: 'inline-block' }}>📞 Call Now</a>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>+91-7301777444</div>
                </div>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', padding: '14px 20px' }}>
                  {WA_SVG} WhatsApp our Temple Sales Desk
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
