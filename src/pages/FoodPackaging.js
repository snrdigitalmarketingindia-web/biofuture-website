import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20quote%20for%20food%20packaging";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Food Packaging Solutions', item: 'https://rdnbio.com/#/food-packaging-solutions' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Biodegradable Food Packaging Solutions',
  provider: { '@type': 'Organization', name: 'RDN Bio Products LLP', url: 'https://rdnbio.com' },
  description: 'Food-grade biodegradable packaging for restaurants, cloud kitchens, catering, and the food industry. BPA-free, DRDO certified.',
  areaServed: 'India',
};

const segments = [
  { icon: '🍴', title: 'Restaurants & Dhabas', desc: 'Replace single-use plastic carry bags with compostable alternatives. Safe for oily foods, suitable for all bag sizes.' },
  { icon: '📦', title: 'Cloud Kitchens & Delivery', desc: 'Zomato/Swiggy-ready biodegradable carry bags and pouches. BPA-free, grease-resistant, brand-printable.' },
  { icon: '🎪', title: 'Catering & Event Management', desc: 'Bulk supply for catering events, corporate lunches, weddings, and mass food distribution drives.' },
];

const products = [
  {
    icon: '🧴',
    title: 'Food-Grade Pouches',
    sizes: ['4×6"', '5×7"', '7×10"', '8×11"'],
    microns: '35–40 microns',
    use: 'Spices, snacks, dry items, small food parcels',
    features: ['Food-grade PBAT material', 'BPA-free & non-toxic', 'Custom printing available', 'Compostable within 180 days'],
  },
  {
    icon: '🧈',
    title: 'Butter Covers',
    sizes: ['9×9"', '12×12"'],
    microns: '30 microns',
    use: 'Dairy industry, butter wrapping, food portions',
    features: ['Direct food contact safe', 'No toxic inks', 'Grease-resistant surface', 'Dairy-industry approved'],
  },
  {
    icon: '🛍️',
    title: 'Restaurant Carry Bags',
    sizes: ['8×10"', '11×14"', '13×16"', '16×20"'],
    microns: '35–50 microns',
    use: 'Takeaway orders, restaurant branding bags',
    features: ['Strong loop handles', 'Tear-resistant', 'Brand logo printing', 'Bulk pricing available'],
  },
];

const safetyPoints = [
  { icon: '✅', title: 'BPA-Free Certified', desc: 'No bisphenol A or other endocrine disruptors. Safe for all food contact applications.' },
  { icon: '🏅', title: 'DRDO Certified Technology', desc: 'Manufacturing process certified by India\'s Defence Research and Development Organisation.' },
  { icon: '🌱', title: 'Food-Grade PBAT Material', desc: 'Polybutylene adipate terephthalate (PBAT) is a globally accepted food-contact safe bioplastic.' },
  { icon: '🔬', title: 'No Toxic Leaching', desc: 'Independent lab-tested to confirm zero toxic migration into food at standard temperatures.' },
];

const faqs = [
  { q: 'Are your bags safe for direct food contact?', a: 'Yes. All RDN Bio Products food packaging bags are manufactured from food-grade PBAT material, are BPA-free, and have been tested to confirm zero toxic leaching at normal food storage and handling temperatures.' },
  { q: 'What packaging works best for restaurant takeaway orders?', a: 'For restaurant takeaway we recommend our U-Cut carry bags in 13×16" or 16×20" sizes at 40–50 microns. These are strong enough to carry multiple food containers, have comfortable loop handles, and can be custom-printed with your restaurant name and logo.' },
  { q: 'Do you supply in small quantities for trial?', a: 'Yes. We offer trial packs starting from 500 units so you can evaluate quality before committing to a bulk order. Contact us on WhatsApp to arrange a trial pack.' },
  { q: 'Can bags be custom printed with restaurant logo?', a: 'Absolutely. We print your restaurant name, logo, tagline, and contact number directly on the bags. MOQ for custom printing is 1,000 bags. Single and multi-color printing available at competitive rates.' },
];

export default function FoodPackaging() {
  useEffect(() => {
    document.title = 'Biodegradable Food Packaging Solutions | Restaurants, Cloud Kitchens | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Compostable food packaging for restaurants, cloud kitchens, catering & food industry. Food-grade pouches, butter covers, carry bags. DRDO certified, BPA-free. Hyderabad manufacturer. Call +91-7301222666.';
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', business: '', product: '', qty: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hi, I need biodegradable food packaging from RDN Bio Products.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Business Name: ${form.business}`,
      `Product: ${form.product}`,
      form.qty ? `Quantity: ${form.qty}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', business: '', product: '', qty: '' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ fontSize: 48, marginBottom: 12 }}>🍽️</div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Food-Grade Biodegradable Packaging for Restaurants &amp; Cloud Kitchens
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 620, color: 'rgba(255,255,255,0.92)' }}>
            Replace plastic in your food business with 100% compostable, BPA-free packaging. Safe for direct food contact — DRDO certified and lab-tested for zero toxic leaching.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href="#food-enquiry" className="btn-primary">Get Food Packaging Quote</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ DRDO Certified', '✓ BPA Free', '✓ Food Grade PBAT', '✓ Pan India Supply'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Who this is for</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Built for every segment of the food service industry</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 32 }}>
            {segments.map(s => (
              <div key={s.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 16, padding: '28px 22px', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Products for the food industry</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>All products food-grade, BPA-free, and DRDO certified</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, marginTop: 32 }}>
            {products.map(p => (
              <div key={p.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '28px 24px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{p.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-dark)' }}>{p.title}</h3>
                  <span style={{ background: 'var(--green-mid)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 8, whiteSpace: 'nowrap', marginLeft: 8 }}>{p.microns}</span>
                </div>
                <p style={{ fontSize: 12, color: '#888', marginBottom: 14 }}>{p.use}</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: '#aaa', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Available sizes</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.sizes.map(s => (
                      <span key={s} style={{ background: 'var(--green-light)', color: 'var(--green-dark)', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 6, border: '1px solid #c8e0a0' }}>{s}</span>
                    ))}
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ fontSize: 13, color: '#555', padding: '3px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: 'var(--green-mid)', fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Food safety you can trust</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Every bag certified, tested, and safe for your customers</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 32 }}>
            {safetyPoints.map(s => (
              <div key={s.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{s.desc}</p>
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
      <RelatedSolutions exclude="food" />

      <section id="food-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get your Food Packaging Quote</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Quick response via WhatsApp — typically within 2 hours on business days</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 18, padding: '32px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Enquiry sent!</h3>
                  <p style={{ color: '#666', fontSize: 14 }}>We'll respond on WhatsApp within 2 hours with a tailored quote.</p>
                  <button style={{ marginTop: 20, background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }} onClick={() => setSubmitted(false)}>Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="name" value={form.name} onChange={handleChange} required placeholder="Ravi Shankar" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" type="tel" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Business Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="business" value={form.business} onChange={handleChange} required placeholder="Hotel Saravana Bhavan / XYZ Cloud Kitchen" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Product Needed *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="product" value={form.product} onChange={handleChange} required>
                        <option value="">Select a product</option>
                        <option value="Food-grade pouches">Food-grade pouches</option>
                        <option value="Butter covers">Butter covers</option>
                        <option value="Restaurant carry bags">Restaurant carry bags</option>
                        <option value="Multiple products">Multiple products</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Approximate Quantity</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="qty" value={form.qty} onChange={handleChange} placeholder="e.g. 5,000 bags per month" />
                    </div>
                  </div>
                  <button type="submit" className="submit-btn" style={{ marginTop: 20, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    {WA_SVG} Send Enquiry via WhatsApp
                  </button>
                </form>
              )}
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Speak to our food industry team</h3>
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
                  {WA_SVG} Chat on WhatsApp
                </a>
                <Link to="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>View full contact details →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
