import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%27m%20looking%20for%20a%20biodegradable%20bags%20manufacturer%20in%20Hyderabad';
const TEL = 'tel:+917301222666';

const manufacturerSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Manufacturer'],
  name: 'RDN Bio Products LLP',
  description: 'DRDO certified biodegradable PBAT carry bags manufacturer in Hyderabad, Telangana. In-house manufacturing at Karmanghat. Supplying retail, restaurants, institutions, distributors, and exporters pan India.',
  url: 'https://rdnbio.com',
  telephone: '+91-7301222666',
  email: 'rdnbioproductsllp@gmail.com',
  foundingDate: '2024',
  legalName: 'RDN Bio Products LLP',
  identifier: 'LLPIN ACI-9987',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#10-01-78/47/5, Srinivasa Nagar Colony, Karmanghat',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500035',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.3283,
    longitude: 78.5574,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'State', name: 'Telangana' },
    { '@type': 'Country', name: 'India' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Biodegradable PBAT Packaging',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'D-Cut Biodegradable Carry Bags', description: 'PBAT+cornstarch D-Cut carry bags, 7 sizes, custom printing available' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'U/W-Cut Biodegradable Carry Bags', description: 'PBAT+cornstarch U/W-Cut carry bags, 14 sizes, retail and grocery use' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Biodegradable Garbage Bags', description: 'PBAT biodegradable garbage bags, 8 sizes 15L to 120L' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'PBAT Bio Compound Granules', description: 'Raw PBAT granules for manufacturers and plastic converters' } },
    ],
  },
  sameAs: [
    'https://rdnbio.com',
  ],
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Biodegradable Bags Manufacturer Hyderabad', item: 'https://rdnbio.com/#/biodegradable-bags-manufacturer-hyderabad' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Who is the best biodegradable bags manufacturer in Hyderabad?', acceptedAnswer: { '@type': 'Answer', text: 'RDN Bio Products LLP is a DRDO certified biodegradable PBAT carry bag manufacturer based in Karmanghat, Hyderabad. We manufacture all products in-house and supply directly to businesses, distributors, and exporters across India. LLPIN: ACI-9987.' } },
    { '@type': 'Question', name: 'What certifications does RDN Bio Products hold?', acceptedAnswer: { '@type': 'Answer', text: 'DRDO (Defence Research & Development Organisation) technology certification — the highest government-backed certification for biodegradable materials in India. Also MSME registered, GST compliant, and BIS IS 17088 aligned.' } },
    { '@type': 'Question', name: 'What is the difference between RDN Bio Products and other Hyderabad manufacturers?', acceptedAnswer: { '@type': 'Answer', text: 'RDN Bio Products manufactures PBAT (Polybutylene Adipate Terephthalate) biodegradable bags — not corn starch only. PBAT is more durable, water-resistant, and has a longer shelf life. Our DRDO certification is government-backed, not just CPCB self-declaration. We do in-house compounding, film extrusion, and bag conversion — not job work or trading.' } },
    { '@type': 'Question', name: 'What is the minimum order quantity from RDN Bio Products Hyderabad factory?', acceptedAnswer: { '@type': 'Answer', text: 'For standard in-stock sizes: MOQ from 500 units (garbage bags) and 1,000 units (carry bags). For custom printed OEM orders: 1,000 units per design. PBAT granules: 100 kg. No minimum for sample packs.' } },
    { '@type': 'Question', name: 'Where is the RDN Bio Products factory in Hyderabad?', acceptedAnswer: { '@type': 'Answer', text: 'Our manufacturing facility is at #10-01-78/47/5, Srinivasa Nagar Colony, Karmanghat, Saroornagar, Hyderabad — 500035. Accessible from Hyderabad International Airport in approximately 30 minutes. Factory visits by appointment.' } },
    { '@type': 'Question', name: 'Do you supply biodegradable bags to distributors across India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have an active distributor program with city, state, and pan India tiers. Margins of 18–28%. Exclusive territory available. See rdnbio.com/#/distributor for the distributor program details.' } },
  ],
};

const COMPETITORS_GAP = [
  { point: 'DRDO Certified Technology', rdnbio: true, others: false, note: 'Most competitors only have CPCB self-declaration. DRDO is Government of India certification.' },
  { point: 'In-house manufacturing', rdnbio: true, others: 'Some', note: 'Several listed "manufacturers" are traders or use job-work production. We own the factory.' },
  { point: 'PBAT material (more durable)', rdnbio: true, others: 'Some', note: 'Corn-starch-only bags are brittle and moisture-sensitive. PBAT is stronger with longer shelf life.' },
  { point: 'Same-day dispatch', rdnbio: true, others: false, note: 'In-stock orders confirmed before 4 PM dispatched same day from Karmanghat.' },
  { point: 'Custom OEM printing', rdnbio: true, others: 'Some', note: 'Full flexographic printing, 1–4 colors, MOQ 1,000 units per design.' },
  { point: 'PBAT granules also available', rdnbio: true, others: false, note: 'We also sell raw PBAT bio compound granules to other manufacturers and converters.' },
];

const PROCESS_STEPS = [
  { num: '01', icon: '🌿', title: 'PBAT Raw Material', desc: 'PBAT and food-grade cornstarch sourced from certified suppliers. Both tested for purity and biodegradability before production.' },
  { num: '02', icon: '⚗️', title: 'In-house Blending', desc: 'PBAT and cornstarch blended in precise ratios in our compounding unit. Ratios validated against DRDO certification parameters.' },
  { num: '03', icon: '🏭', title: 'Film Extrusion', desc: 'Blown film extrusion into thin film. Thickness controlled to ±2 microns of specification. Parameters monitored continuously.' },
  { num: '04', icon: '✂️', title: 'Bag Conversion', desc: 'Film converted into carry bags, garbage bags, or pouches. Sealing, cutting, and punching in one inline process.' },
  { num: '05', icon: '🔬', title: 'Quality Check', desc: 'Every batch tested: tensile strength, elongation at break, thickness, seal integrity. Batches failing any test are rejected.' },
  { num: '06', icon: '📦', title: 'Pack & Dispatch', desc: 'Counted, bundled, packed per standard packs. Same-day dispatch for orders confirmed before 4 PM.' },
];

const SERVICE_AREAS = [
  'Karmanghat', 'Saroornagar', 'LB Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole',
  'Secunderabad', 'Malkajgiri', 'Kompally', 'Medchal',
  'Ameerpet', 'Himayatnagar', 'Banjara Hills', 'Jubilee Hills',
  'HITEC City', 'Madhapur', 'Gachibowli', 'Kondapur', 'Kukatpally',
  'Mehdipatnam', 'Tolichowki', 'Attapur', 'Rajendranagar',
  'Miyapur', 'Bachupally', 'Nizampet', 'Suchitra',
  'Shamshabad', 'Ibrahimpatnam', 'Hayathnagar',
];

export default function ManufacturerHyderabad() {
  useEffect(() => {
    document.title = 'Biodegradable Bags Manufacturer in Hyderabad — DRDO Certified | RDN Bio Products LLP';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'RDN Bio Products LLP — DRDO certified biodegradable PBAT carry bags manufacturer in Hyderabad, Telangana. In-house factory at Karmanghat. Same-day dispatch. Supplying distributors, retailers, and institutions pan India. LLPIN: ACI-9987.';
  }, []);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">🏭 Hyderabad Manufacturer</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>✓ DRDO Certified — Government of India</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.7rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Biodegradable Bags Manufacturer in Hyderabad — RDN Bio Products LLP
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 700 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0 }}>
              <strong>Quick answer:</strong> RDN Bio Products LLP manufactures DRDO certified PBAT biodegradable carry bags, garbage bags, and food pouches at our in-house factory in Karmanghat, Hyderabad (PIN 500035). We supply direct to businesses, distributors, and exporters across India. LLPIN: ACI-9987.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">WhatsApp for Bulk Quote</a>
            <a href={TEL} className="btn-call">📞 +91-7301222666</a>
            <Link to="/distributor" className="btn-wa" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>🤝 Distributor Program</Link>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['✓ DRDO Certified', '✓ In-house Factory', '✓ Same-day Dispatch', '✓ Pan India Supply', '✓ LLPIN ACI-9987'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#fff' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why RDN Bio vs Other Hyderabad Manufacturers */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>RDN Bio vs Other Hyderabad Manufacturers</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>What separates DRDO certified in-house manufacturing from the rest</p>
          <div style={{ marginTop: 36, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-dark)', color: '#fff' }}>
                  {['Feature', 'RDN Bio Products', 'Most Others', 'Why it matters'].map(h => (
                    <th key={h} style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPETITORS_GAP.map((row, i) => (
                  <tr key={row.point} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 600, color: 'var(--green-dark)' }}>{row.point}</td>
                    <td style={{ padding: '13px 16px', textAlign: 'center', fontSize: 18, color: '#2d8a2d', fontWeight: 700 }}>✓</td>
                    <td style={{ padding: '13px 16px', textAlign: 'center', color: row.others === true ? '#2d8a2d' : row.others === false ? '#cc3333' : '#e67e22', fontWeight: 700 }}>
                      {row.others === true ? '✓' : row.others === false ? '✗' : '~'}
                    </td>
                    <td style={{ padding: '13px 16px', color: '#666', fontSize: 12 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Factory & Certifications */}
      <section style={{ padding: '56px 0', background: '#f0f9e8', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem,3vw,1.8rem)', fontWeight: 800, color: 'var(--green-dark)', marginBottom: 16 }}>
                Our Hyderabad Factory
              </h2>
              <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px', marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>📍 Manufacturing Address</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.8 }}>
                  #10-01-78/47/5, Srinivasa Nagar Colony<br />
                  Karmanghat, Saroornagar<br />
                  Hyderabad, Telangana — 500 035<br />
                  <br />
                  <strong>Phone:</strong> +91-7301222666<br />
                  <strong>Email:</strong> rdnbioproductsllp@gmail.com
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontWeight: 700, color: 'var(--green-dark)', marginBottom: 12 }}>Certifications &amp; Registrations</div>
                {[
                  { label: 'DRDO Certification', detail: 'Defence R&D Organisation, Govt. of India' },
                  { label: 'LLPIN: ACI-9987', detail: 'Registered LLP, Ministry of Corporate Affairs' },
                  { label: 'MSME Registration', detail: 'Ministry of MSME, Government of India' },
                  { label: 'GST Registration', detail: 'GST invoicing available for all orders' },
                  { label: 'BIS IS 17088', detail: 'Bureau of Indian Standards — compostable specs' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <span style={{ color: '#2d8a2d', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)' }}>{c.label}</div>
                      <div style={{ fontSize: 12, color: '#888' }}>{c.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem,3vw,1.8rem)', fontWeight: 800, color: 'var(--green-dark)', marginBottom: 16 }}>
                What We Manufacture
              </h2>
              {[
                { name: 'D-Cut Biodegradable Carry Bags', spec: '7 sizes · PBAT+Cornstarch · Custom print', tag: 'Retail' },
                { name: 'U/W-Cut Biodegradable Carry Bags', spec: '14 sizes · PBAT+Cornstarch · Custom print', tag: 'Grocery' },
                { name: 'Biodegradable Garbage Bags', spec: '8 sizes · 15L to 120L · PBAT', tag: 'Institutional' },
                { name: 'Food Pouches & Butter Covers', spec: 'Food-grade PBAT · BPA-free', tag: 'Food Service' },
                { name: 'PBAT Bio Compound Granules', spec: 'Raw PBAT · MOQ 100 kg', tag: 'Manufacturers' },
              ].map(p => (
                <div key={p.name} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 12, padding: '16px 18px', marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)' }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{p.spec}</div>
                  </div>
                  <span style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: 'var(--green-dark)', flexShrink: 0 }}>{p.tag}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                <Link to="/products" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>Full product catalogue →</Link>
                <Link to="/manufacturing-process" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>Manufacturing process →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>In-house Manufacturing — 6 Steps</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>From raw PBAT to finished bag — every step done at our Karmanghat factory</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, marginTop: 36 }}>
            {PROCESS_STEPS.map(s => (
              <div key={s.num} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '22px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>{s.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--green-mid)', letterSpacing: '0.1em' }}>STEP {s.num}</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/manufacturing-process" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14 }}>Full manufacturing process details →</Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Delivery Areas in Hyderabad</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>We deliver to all areas of Hyderabad and Ranga Reddy district — next-day for most locations</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32, justifyContent: 'center' }}>
            {SERVICE_AREAS.map(area => (
              <span key={area} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 600, color: 'var(--green-dark)' }}>{area}</span>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: '#888' }}>
            Factory is in Karmanghat — same-day delivery possible to nearby areas like LB Nagar, Dilsukhnagar, Nagole, Uppal, and Saroornagar.
          </p>
        </div>
      </section>

      {/* B2B Channels */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Who Buys from Our Factory</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>We supply direct to 5 types of buyers</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 36 }}>
            {[
              { icon: '🏪', title: 'Direct Retail & Institutions', desc: 'Restaurants, hospitals, hotels, temples, and kirana chains buying directly from factory. No middleman, GST invoice.' },
              { icon: '📦', title: 'City & State Distributors', desc: 'Distributors in Hyderabad, AP, Telangana, and pan India. Exclusive territory, 18–28% margins, full onboarding support.' },
              { icon: '🖨️', title: 'OEM / Private Label', desc: 'Bags printed with your brand, logo, and contact. MOQ 1,000 units. White-label supply for resellers.' },
              { icon: '🏭', title: 'Manufacturers & Converters', desc: 'PBAT granules for plastic bag manufacturers wanting to produce their own biodegradable products. MOQ 100 kg.' },
              { icon: '🌏', title: 'Export / Import Partners', desc: 'Biodegradable bags and granules exported to UAE, Singapore, UK, Sri Lanka. DRDO certification, COO available.' },
            ].map(b => (
              <div key={b.title} style={{ background: 'var(--green-pale)', border: '1px solid #d4e8b0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { q: 'Who is the best biodegradable bags manufacturer in Hyderabad?', a: 'RDN Bio Products LLP is a DRDO certified biodegradable PBAT carry bag manufacturer based in Karmanghat, Hyderabad. We manufacture all products in-house and supply directly to businesses, distributors, and exporters across India. LLPIN: ACI-9987.' },
              { q: 'What certifications does RDN Bio Products hold?', a: 'DRDO (Defence Research & Development Organisation) technology certification — the highest government-backed certification for biodegradable materials in India. Also MSME registered, GST compliant, and BIS IS 17088 aligned.' },
              { q: 'What makes RDN Bio Products different from other Hyderabad manufacturers?', a: 'We manufacture PBAT (Polybutylene Adipate Terephthalate) bags — not corn starch only. PBAT is more durable and water-resistant. Our DRDO certification is government-backed. We do in-house compounding, film extrusion, and conversion — not job work or trading.' },
              { q: 'What is the minimum order quantity from the Hyderabad factory?', a: 'MOQ from 500 units for garbage bags, 1,000 units for carry bags. Custom printed OEM orders: 1,000 units per design. PBAT granules: 100 kg. No minimum for sample packs.' },
              { q: 'Where is the RDN Bio Products factory in Hyderabad?', a: '#10-01-78/47/5, Srinivasa Nagar Colony, Karmanghat, Saroornagar, Hyderabad 500035. Factory visits available by appointment. Approximately 30 minutes from Hyderabad International Airport.' },
              { q: 'Do you supply biodegradable bags to distributors across India?', a: 'Yes. We have a distributor program with city, state, and pan India tiers. Margins of 18–28%. Exclusive territory available. Visit rdnbio.com/#/distributor for full details.' },
            ].map((f, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-summary">{f.q}<span className="faq-icon">+</span></summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '56px 0', background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Order direct from Hyderabad's DRDO certified manufacturer
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 540, margin: '0 auto 28px' }}>
            No middlemen. Factory pricing. DRDO certified PBAT bags. Same-day dispatch from Karmanghat, Hyderabad.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>WhatsApp for Quote</a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15 }}>📞 +91-7301222666</a>
            <Link to="/distributor" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', fontSize: 14, fontWeight: 700, background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: 8, border: '1px solid rgba(255,255,255,0.4)', textDecoration: 'none' }}>🤝 Distributor Program</Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
            RDN Bio Products LLP · Karmanghat, Hyderabad 500035 · LLPIN ACI-9987 · DRDO Certified
          </p>
        </div>
      </section>
    </main>
  );
}
