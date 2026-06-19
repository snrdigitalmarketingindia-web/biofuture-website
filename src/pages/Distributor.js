import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK_DIST = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20becoming%20a%20distributor%2Fdealer%20for%20RDN%20Bio%20Products";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Become a Distributor', item: 'https://rdnbio.com/#/distributor' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity to become a distributor?',
      acceptedAnswer: { '@type': 'Answer', text: 'City distributors: minimum 5,000 units/month across product lines. State distributors: 20,000 units/month. Contact us for exact terms for your territory.' },
    },
    {
      '@type': 'Question',
      name: 'Is the territory exclusive?',
      acceptedAnswer: { '@type': 'Answer', text: 'We offer territory exclusivity to dedicated distributors who meet volume commitments. City-level and state-level exclusivity is available — discuss during onboarding call.' },
    },
    {
      '@type': 'Question',
      name: 'What support does RDN Bio provide to distributors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sample packs, product training, marketing materials, co-branded collateral, priority fulfillment, and dedicated account manager support.' },
    },
    {
      '@type': 'Question',
      name: 'What products are available for distribution?',
      acceptedAnswer: { '@type': 'Answer', text: 'Full range — D-Cut carry bags (7 sizes), U/W-Cut carry bags (14 sizes), garbage bags, food pouches, butter covers, and PBAT bio compound granules. Custom printing available.' },
    },
    {
      '@type': 'Question',
      name: 'How long does the onboarding process take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Typically 7-10 business days from application to first order — territory discussion, sample dispatch, pricing finalization.' },
    },
    {
      '@type': 'Question',
      name: 'Can importers and packaging suppliers outside India also partner with RDN Bio?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. RDN Bio Products exports biodegradable PBAT bags and granules to international markets. Importers, packaging distributors, and eco-product retailers can contact us for export pricing, MOQ, and documentation (DRDO certification, GST invoice, country-of-origin certificate).' },
    },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RDN Bio Products LLP',
  url: 'https://rdnbio.com',
  logo: 'https://rdnbio.com/logo.png',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Biodegradable Packaging Distributor Program',
    description: 'Territory-based distributor and dealer program for DRDO certified biodegradable packaging products across India. City, state, and pan India tiers available with margins of 18-28%.',
  },
};

const benefits = [
  { icon: '💰', title: 'High Margins — 18–28%', desc: 'Premium biodegradable segment commands margins conventional plastic suppliers cannot match. Growing B2B demand across retail, food, hospitality, and institutional sectors.' },
  { icon: '🏛️', title: 'DRDO Certified Backing', desc: 'Sell with government-certified credibility. DRDO certification builds instant trust with institutional and corporate buyers — especially for large tenders and compliance-driven purchasing.' },
  { icon: '📈', title: 'Plastic Ban Tailwind', desc: "India's 2022 SUP ban has made biodegradable packaging mandatory across all sectors. Fines and enforcement intensifying every year — your customers need compliant bags now." },
  { icon: '🗺️', title: 'Exclusive Territory', desc: 'City/region-wise territory model available for committed distributors. Protect your investment with geographic exclusivity upon meeting volume targets.' },
  { icon: '🎨', title: 'Custom Branding for Clients', desc: 'Custom printing available for your clients — bags with their store name, logo, and tagline. This value-add differentiates you from generic plastic suppliers and builds client loyalty.' },
  { icon: '🤝', title: 'Complete Onboarding Support', desc: 'Product training, sample packs, marketing materials, co-branded collateral, priority fulfillment, and dedicated account manager from day one — we set you up for success.' },
];

const tiers = [
  {
    title: 'City Distributor',
    coverage: 'Single city or district',
    moq: '5,000 units/month',
    margin: '18–22%',
    highlight: false,
  },
  {
    title: 'State Distributor',
    coverage: 'Full state coverage',
    moq: '20,000 units/month',
    margin: '22–28%',
    highlight: true,
  },
  {
    title: 'Pan India Dealer',
    coverage: 'Multi-state / national',
    moq: '50,000+ units/month',
    margin: 'Negotiable',
    dark: true,
  },
];

const steps = [
  { num: '01', title: 'Submit Application', desc: 'Fill the form below or message us on WhatsApp with your name, city, business type, and target volume.' },
  { num: '02', title: 'Territory Discussion & Pricing Call', desc: 'Our team contacts you within 24 hours to discuss territory availability, margin structure, and product range.' },
  { num: '03', title: 'Sample Pack Dispatch', desc: 'Receive a curated sample pack of our most popular product lines — dispatched within 3–5 business days.' },
  { num: '04', title: 'First Order & Onboarding', desc: 'Place your first order, receive onboarding materials, and begin your territory with full account manager support.' },
];

const trustBadges = [
  'LLPIN: ACI-9987',
  'DRDO Certified Technology',
  'Incorporated Aug 2024',
  'Pan India Supply',
  '6+ Product Categories',
  '30+ Size Variants',
];

const faqs = [
  {
    q: 'What is the minimum order quantity to become a distributor?',
    a: 'City distributors: minimum 5,000 units/month across product lines. State distributors: 20,000 units/month. Contact us for exact terms for your territory.',
  },
  {
    q: 'Is the territory exclusive?',
    a: 'We offer territory exclusivity to dedicated distributors who meet volume commitments. City-level and state-level exclusivity is available — discuss during onboarding call.',
  },
  {
    q: 'What support does RDN Bio provide to distributors?',
    a: 'Sample packs, product training, marketing materials, co-branded collateral, priority fulfillment, and dedicated account manager support.',
  },
  {
    q: 'What products are available for distribution?',
    a: 'Full range — D-Cut carry bags (7 sizes), U/W-Cut carry bags (14 sizes), garbage bags, food pouches, butter covers, and PBAT bio compound granules. Custom printing available.',
  },
  {
    q: 'How long does the onboarding process take?',
    a: 'Typically 7-10 business days from application to first order — territory discussion, sample dispatch, pricing finalization.',
  },
  {
    q: 'Can importers and packaging suppliers outside India also partner?',
    a: 'Yes. RDN Bio Products exports to international markets. Importers, packaging distributors, and eco-product retailers can contact us for export pricing, MOQ, and documentation (DRDO certification, GST invoice, country-of-origin certificate).',
  },
];

const products = [
  { name: 'D-Cut Carry Bags', sizes: '7 sizes (6×8" to 16×20")', material: 'PBAT + Cornstarch', use: 'Retail, kirana, apparel', moq: '1,000 units/size', custom: '✓' },
  { name: 'U/W-Cut Carry Bags', sizes: '14 sizes (small to extra-large)', material: 'PBAT + Cornstarch', use: 'Groceries, supermarkets', moq: '1,000 units/size', custom: '✓' },
  { name: 'Garbage Bags', sizes: '8 sizes (15L to 120L)', material: 'PBAT + Cornstarch', use: 'Hospitality, institutions, homes', moq: '500 units/size', custom: '✓' },
  { name: 'Food Pouches', sizes: 'Standard + custom sizes', material: 'Food-grade PBAT', use: 'Restaurants, tiffin, catering', moq: '1,000 units/size', custom: '✓' },
  { name: 'Butter Covers / Sheets', sizes: 'Standard + custom', material: 'Food-grade PBAT', use: 'Hotels, bakeries, food service', moq: '1,000 units/size', custom: '✓' },
  { name: 'PBAT Bio Granules', sizes: 'Pellet form', material: 'Pure PBAT compound', use: 'Manufacturers, converters', moq: '100 kg', custom: '—' },
];

const industries = [
  { icon: '🛒', name: 'Retail & Kirana', desc: 'Every shop needs compliant carry bags. A single kirana lane is a standing order.' },
  { icon: '🍽️', name: 'Food & Restaurants', desc: 'QSRs, cloud kitchens, tiffin services — all switching to biodegradable pouches.' },
  { icon: '🏨', name: 'Hotels & Hospitality', desc: 'Garbage bags, amenity bags, housekeeping — large recurring institutional orders.' },
  { icon: '🏫', name: 'Schools & Institutions', desc: 'Canteens, events, waste management — schools face strict compliance requirements.' },
  { icon: '🏭', name: 'Industrial & Corporate', desc: 'Corporate campuses, factories, SEZs — bulk waste management procurement.' },
  { icon: '🚚', name: 'E-Commerce & Logistics', desc: 'Mailers, inner packaging, void fill — fast-growing segment under plastic ban.' },
  { icon: '🏥', name: 'Healthcare & Pharma', desc: 'Waste containment, sterile packaging — biodegradable compliance mandated.' },
  { icon: '🏛️', name: 'Government & PSUs', desc: 'Tenders for government offices, municipal bodies, and public sector units.' },
];

const idealProfile = [
  { icon: '📦', title: 'FMCG or Packaging Distributors', desc: 'Existing distribution networks can add RDN Bio as a plug-in category with minimal added logistics.' },
  { icon: '🏪', title: 'Wholesale Dealers & Traders', desc: 'Packaging traders, plastic goods wholesalers, or general merchant distributors looking to add a compliant, high-margin line.' },
  { icon: '🚛', title: 'Logistics & Supply Chain Partners', desc: 'Companies with last-mile delivery presence across a city or state — ideal for institutional and B2B supply.' },
  { icon: '🌍', title: 'International Importers', desc: 'Importers of eco-products in the GCC, Southeast Asia, and Europe. DRDO certification provides a credible origin story for export markets.' },
  { icon: '🏢', title: 'Corporate Procurement Firms', desc: 'Companies that supply consumables to large institutions, corporate parks, and government bodies.' },
  { icon: '♻️', title: 'Sustainability Consultants & Traders', desc: 'Advisors and traders helping businesses switch from single-use plastic — add biodegradable bags as a direct product revenue stream.' },
];

const regions = [
  { region: 'South India', cities: 'Hyderabad · Bangalore · Chennai · Coimbatore · Vizag · Kochi', status: 'Active', note: 'Base region — fastest dispatch' },
  { region: 'West India', cities: 'Mumbai · Pune · Ahmedabad · Surat · Nashik', status: 'Active', note: 'High commercial density' },
  { region: 'North India', cities: 'Delhi NCR · Lucknow · Jaipur · Chandigarh · Indore', status: 'Active', note: 'Strong plastic ban enforcement' },
  { region: 'East India', cities: 'Kolkata · Bhubaneswar · Patna · Guwahati', status: 'Active', note: 'Growing industrial demand' },
  { region: 'Export Markets', cities: 'UAE · Singapore · UK · Australia · Sri Lanka', status: 'Open', note: 'Contact for export terms' },
];

export default function Distributor() {
  useEffect(() => {
    document.title = 'Become a Distributor | Biodegradable Packaging Dealer Program India | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = "Join RDN Bio Products as a biodegradable packaging distributor or dealer in India. DRDO certified PBAT bags, exclusive territory, 18-28% margins. Ideal for FMCG distributors, packaging traders, and wholesalers. Apply today.";
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', state: '', businessType: '', experience: '', monthlyVolume: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const lines = [
      "Hi, I'd like to apply as a distributor for RDN Bio Products.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `City: ${form.city}`,
      `State: ${form.state}`,
      `Business: ${form.businessType}`,
      `Experience: ${form.experience}`,
      `Monthly Volume: ${form.monthlyVolume}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean).join('\n');

    // Send email copy via Formsubmit (no account needed — verify email on first submission)
    try {
      await fetch('https://formsubmit.co/ajax/rdnbioproductsllp@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Distributor Application — ${form.name} (${form.city}, ${form.state})`,
          _replyto: form.email || form.phone,
          _captcha: 'false',
          Name: form.name,
          Phone: form.phone,
          Email: form.email || '—',
          City: form.city,
          State: form.state,
          'Business Type': form.businessType,
          'Distribution Experience': form.experience,
          'Target Monthly Volume': form.monthlyVolume,
          Message: form.message || '—',
        }),
      });
    } catch (_) {
      // Email failed silently — WhatsApp still opens
    }

    // Open WhatsApp for submitter confirmation
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', city: '', state: '', businessType: '', experience: '', monthlyVolume: '', message: '' });
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
              🤝 Distributor &amp; Dealer Program
            </span>
            <span style={{ background: '#5cb81c', border: '1px solid #5cb81c', borderRadius: 20, padding: '5px 14px', fontSize: 13, fontWeight: 600, color: '#fff' }}>
              ✓ DRDO Certified Products
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.7rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Become a Biodegradable Packaging Distributor — Partner with RDN Bio Products
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 660, color: 'rgba(255,255,255,0.92)' }}>
            India's plastic ban has created a mandatory, high-growth market for biodegradable packaging. Join as a city, state, or pan India distributor and sell DRDO certified PBAT bags that every business needs — with margins of <strong style={{ color: '#a8e06b' }}>18–28%</strong> and exclusive territory protection.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="#dist-application" className="btn-primary">Apply as Distributor</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={WA_LINK_DIST} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ LLPIN ACI-9987', '✓ DRDO Certified', '✓ Pan India Supply', '✓ 30+ Product Sizes'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About RDN Bio */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 20, padding: '5px 14px', fontSize: 13, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 16 }}>
                About RDN Bio Products
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: 16 }}>
                India's DRDO Certified Biodegradable Packaging Manufacturer
              </h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 16 }}>
                RDN Bio Products LLP is a Hyderabad-based manufacturer of PBAT (Polybutylene Adipate Terephthalate) and cornstarch biodegradable packaging products. We manufacture everything in-house — from compounding the raw material to final bag production — at our facility in Karmanghat, Hyderabad.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 24 }}>
                Our products carry <strong>DRDO (Defence Research &amp; Development Organisation)</strong> certification — the highest government-backed credibility for biodegradable technology in India. We supply retail chains, hotel groups, institutions, and B2B distributors across the country.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['DRDO Certified', 'MSME Registered', 'BIS IS 17088', 'GST Compliant', 'LLPIN: ACI-9987'].map(b => (
                  <span key={b} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700, color: 'var(--green-dark)' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '6+', label: 'Product Categories' },
                { num: '30+', label: 'Size Variants' },
                { num: '18–28%', label: 'Distributor Margins' },
                { num: '2–3 Days', label: 'Pan India Delivery' },
                { num: '500 Units', label: 'Minimum Order' },
                { num: 'Pan India', label: 'Supply Network' },
              ].map(s => (
                <div key={s.label} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--green-dark)', marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: '#888', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section style={{ padding: '56px 0', background: '#f0f9e8', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Partner with RDN Bio?</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>6 reasons why this is one of India's best distribution opportunities right now</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 36 }}>
            {benefits.map(b => (
              <div key={b.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Across India */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Distribution Opportunity Across India</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Open territories in every major city and state — domestic and export markets</p>
          <div style={{ marginTop: 36, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  {['Region', 'Key Cities / Markets', 'Territory Status', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {regions.map((row, i) => (
                  <tr key={row.region} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.region}</td>
                    <td style={{ padding: '13px 16px', color: '#555', fontSize: 13 }}>{row.cities}</td>
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 700, color: 'var(--green-dark)' }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '13px 16px', color: '#888', fontSize: 12 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#888', marginTop: 12, textAlign: 'center' }}>
            Territory exclusivity available for distributors who meet monthly volume targets. Contact us to check specific city availability.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Industries You Can Serve</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Every sector is impacted by India's plastic ban — each is a sales opportunity for your territory</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginTop: 36 }}>
            {industries.map(ind => (
              <div key={ind.name} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 14, padding: '22px 18px' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{ind.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{ind.name}</h3>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.65 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Products Available for Distribution</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Full-range PBAT biodegradable packaging — all products DRDO certified, custom printing available</p>
          <div style={{ marginTop: 36, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-dark)', color: '#fff' }}>
                  {['Product', 'Sizes Available', 'Material', 'Best For', 'Min Order', 'Custom Print'].map(h => (
                    <th key={h} style={{ padding: '13px 14px', textAlign: 'left', fontWeight: 700, fontSize: 13 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((row, i) => (
                  <tr key={row.name} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '13px 14px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.name}</td>
                    <td style={{ padding: '13px 14px', color: '#555' }}>{row.sizes}</td>
                    <td style={{ padding: '13px 14px', color: '#555', fontSize: 12 }}>{row.material}</td>
                    <td style={{ padding: '13px 14px', color: '#555', fontSize: 12 }}>{row.use}</td>
                    <td style={{ padding: '13px 14px', color: '#2d5a0e', fontWeight: 700 }}>{row.moq}</td>
                    <td style={{ padding: '13px 14px', textAlign: 'center', color: row.custom === '✓' ? '#2d8a2d' : '#aaa', fontWeight: 700, fontSize: 16 }}>{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>View full product catalogue →</Link>
            <Link to="/customisation" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>Custom printing options →</Link>
          </div>
        </div>
      </section>

      {/* Territory Tiers */}
      <section style={{ padding: '56px 0', background: '#f0f9e8', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Distributor Tiers &amp; Margins</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Choose the tier that matches your capacity and market reach</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24, marginTop: 36 }}>
            {tiers.map(t => (
              <div key={t.title} style={{
                background: t.dark ? 'var(--green-dark)' : t.highlight ? 'var(--green-mid)' : '#fff',
                border: `2px solid ${t.dark ? 'var(--green-dark)' : t.highlight ? 'var(--green-mid)' : '#d4e8b0'}`,
                borderRadius: 18,
                padding: '32px 24px',
                textAlign: 'center',
                color: (t.dark || t.highlight) ? '#fff' : 'inherit',
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: (t.dark || t.highlight) ? '#fff' : 'var(--green-dark)' }}>{t.title}</h3>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.75, marginBottom: 4 }}>Coverage</div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{t.coverage}</div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.75, marginBottom: 4 }}>Min Monthly Volume</div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{t.moq}</div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.75, marginBottom: 4 }}>Margin Band</div>
                  <div style={{ fontSize: 26, fontWeight: 800, color: t.dark ? '#a8e06b' : t.highlight ? '#d4f7a0' : 'var(--green-mid)' }}>{t.margin}</div>
                </div>
                <a href="#dist-application" style={{
                  display: 'inline-block',
                  padding: '10px 22px',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  background: (t.dark || t.highlight) ? 'rgba(255,255,255,0.2)' : 'var(--green-mid)',
                  color: '#fff',
                  border: (t.dark || t.highlight) ? '1px solid rgba(255,255,255,0.4)' : 'none',
                }}>Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Partner Profile */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Who Should Apply?</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Ideal partner profiles — if you recognize yourself here, we should talk</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 36 }}>
            {idealProfile.map(p => (
              <div key={p.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, background: '#fff', border: '2px solid var(--green-mid)', borderRadius: 16, padding: '24px 28px', maxWidth: 720, margin: '32px auto 0' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>Not sure if you qualify?</h3>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, margin: 0 }}>
              If you have an existing business network in any city, state, or sector — and want to add a high-margin, compliance-driven product line — you likely qualify. We welcome first-time distributors, small traders scaling up, and established FMCG partners. <a href="#dist-application" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Apply and let's talk →</a>
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>How to Apply — 4 Steps</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>From application to first order in 7–10 business days</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24, marginTop: 36 }}>
            {steps.map(s => (
              <div key={s.num} style={{ textAlign: 'center', padding: '24px 16px', background: '#fff', borderRadius: 16, border: '1px solid #d4e8b0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--green-mid)', color: '#fff', fontWeight: 800, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{s.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="dist-application" style={{ padding: '56px 0', background: '#fff', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Apply to Become an Rdnbio Distributor</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Fill the form — application goes to our email &amp; we respond on WhatsApp within 24 hours</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            <div style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 18, padding: '32px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: 'var(--green-dark)', marginBottom: 8 }}>Application submitted!</h3>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>
                    Your application has been emailed to our team and sent via WhatsApp.<br />
                    We'll reach out within 24 hours to discuss territory, pricing, and next steps.
                  </p>
                  <button style={{ marginTop: 20, background: 'var(--green-mid)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', fontWeight: 600 }} onClick={() => setSubmitted(false)}>Submit another application</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Your Name *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="name" value={form.name} onChange={handleChange} required placeholder="Rajesh Kumar" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Phone / WhatsApp *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" type="tel" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Email Address <span style={{ color: '#aaa', fontWeight: 400 }}>(optional — for email reply)</span></label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="email" value={form.email} onChange={handleChange} placeholder="yourname@gmail.com" type="email" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>City *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="city" value={form.city} onChange={handleChange} required placeholder="Hyderabad" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>State *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="state" value={form.state} onChange={handleChange} required placeholder="Telangana" />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Type of Business *</label>
                      <input className="form-input" style={{ fontSize: 16, width: '100%' }} name="businessType" value={form.businessType} onChange={handleChange} required placeholder="e.g. FMCG distributor, packaging trader, wholesale dealer" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Distribution Experience *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="experience" value={form.experience} onChange={handleChange} required>
                        <option value="">Select experience</option>
                        <option value="New to distribution">New to distribution</option>
                        <option value="1-2 years">1–2 years</option>
                        <option value="3-5 years">3–5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Target Monthly Volume *</label>
                      <select className="form-input" style={{ fontSize: 16, width: '100%' }} name="monthlyVolume" value={form.monthlyVolume} onChange={handleChange} required>
                        <option value="">Select volume</option>
                        <option value="5,000-10,000 units">5,000–10,000 units</option>
                        <option value="10,000-25,000 units">10,000–25,000 units</option>
                        <option value="25,000-50,000 units">25,000–50,000 units</option>
                        <option value="50,000+ units">50,000+ units</option>
                      </select>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Additional Message (optional)</label>
                      <textarea className="form-input" style={{ fontSize: 16, width: '100%', minHeight: 80, resize: 'vertical' }} name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your network, target sectors, or any questions..." />
                    </div>
                  </div>
                  <button type="submit" disabled={submitting} className="submit-btn" style={{ marginTop: 20, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: submitting ? 0.7 : 1 }}>
                    {submitting ? '⏳ Submitting...' : <>{WA_SVG} Submit Application</>}
                  </button>
                  <p style={{ fontSize: 11, color: '#888', textAlign: 'center', marginTop: 8 }}>
                    Your application is emailed to our team and WhatsApp opens for instant confirmation.
                  </p>
                </form>
              )}
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 20 }}>Speak to our Partnerships Team</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>Distributor Enquiries</div>
                  <a href={TEL} className="btn-call" style={{ marginBottom: 8, display: 'inline-block' }}>📞 Call Now</a>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>+91-7301222666</div>
                </div>
                <a href={WA_LINK_DIST} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', padding: '14px 20px' }}>
                  {WA_SVG} WhatsApp our Partnerships Team
                </a>
                <div style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px', fontSize: 13, color: '#666', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--green-dark)', display: 'block', marginBottom: 6 }}>What to expect</strong>
                  Response within 24 hours on business days. Our team will discuss territory availability, margin structure, sample pack dispatch, and onboarding timeline — no pressure, just a conversation.
                </div>
                <div style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 12, padding: '18px 20px', fontSize: 13, color: '#666', lineHeight: 1.8 }}>
                  <strong style={{ color: 'var(--green-dark)', display: 'block', marginBottom: 8 }}>📍 RDN Bio Products LLP</strong>
                  #10-01-78/47/5, Srinivasa Nagar Colony<br />
                  Karmanghat, Hyderabad — 500 035<br />
                  Telangana, India<br />
                  <br />
                  LLPIN: ACI-9987 | DRDO Certified<br />
                  Pan India Distribution
                </div>
                <Link to="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>View full contact details →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ padding: '28px 0', background: 'var(--green-dark)', borderBottom: '1px solid #1a4a20' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
            {trustBadges.map((badge, i) => (
              <React.Fragment key={badge}>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 600 }}>{badge}</span>
                {i < trustBadges.length - 1 && <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 18, lineHeight: 1 }}>|</span>}
              </React.Fragment>
            ))}
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
                  <div style={{ padding: '0 20px 18px', fontSize: 14, color: '#555', lineHeight: 1.75, background: 'var(--green-pale)' }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '60px 0', background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Apply to Become an Rdnbio Distributor Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 32, fontSize: 15, maxWidth: 560, margin: '0 auto 32px' }}>
            Join India's growing biodegradable packaging movement. DRDO certified, high margin, mandatory demand. Your territory is waiting.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#dist-application" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>Apply as Distributor</a>
            <a href={WA_LINK_DIST} target="_blank" rel="noreferrer" className="btn-wa" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>{WA_SVG} WhatsApp Now</a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15 }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      <RelatedSolutions exclude="none" />
    </main>
  );
}
