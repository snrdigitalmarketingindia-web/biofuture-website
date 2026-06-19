import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20RDN%20Bio%20Products%20sustainability%20impact";
const TEL = "tel:+917301222666";

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Sustainability & Impact', item: 'https://rdnbio.com/#/sustainability' },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RDN Bio Products LLP',
  url: 'https://rdnbio.com',
  ethicsPolicy: 'https://rdnbio.com/#/sustainability',
  sustainabilityPolicy: 'https://rdnbio.com/#/sustainability',
  description: 'DRDO certified biodegradable packaging manufacturer replacing single-use plastic across India with PBAT-based bags that decompose within 180 days.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Are RDN Bio Products bags truly biodegradable or just a marketing claim?', acceptedAnswer: { '@type': 'Answer', text: 'Our biodegradability is independently certified by DRDO (Defence Research and Development Organisation), Government of India — not self-declared. DRDO tested our PBAT material composition, decomposition rate, and non-toxicity under standardised conditions. The certification number is available on request. Our bags decompose within 180 days under composting conditions and leave no toxic residue.' } },
    { '@type': 'Question', name: 'What happens to RDN Bio bags after they are thrown away?', acceptedAnswer: { '@type': 'Answer', text: 'PBAT bags undergo enzymatic breakdown in soil. Microorganisms break the polymer chains into CO₂, water, and organic biomass — the same end products as leaf compost. At 30–40 microns, our bags decompose in 6 months to 2 years in natural Indian soil conditions, depending on temperature, moisture, and microbial activity. No microplastics are produced at any stage.' } },
    { '@type': 'Question', name: 'Can I mention "eco-friendly packaging" in my ESG report if I use RDN Bio bags?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. DRDO certification provides the documentation needed to support packaging sustainability claims in ESG reports, CSR disclosures, and BRSR (Business Responsibility and Sustainability Reporting) filings. We can provide a supplier sustainability declaration and certificate copies for your compliance team on request.' } },
    { '@type': 'Question', name: 'What is PBAT and why is it more sustainable than regular plastic?', acceptedAnswer: { '@type': 'Answer', text: 'PBAT (Polybutylene Adipate Terephthalate) is a certified biodegradable polyester that breaks down in natural soil conditions. Conventional plastic (LDPE, HDPE) is petroleum-based, non-biodegradable, and persists for 100–400 years. PBAT is BPA-free, food-contact safe, and produces no microplastics. India\'s DRDO has tested and certified PBAT-based bags as genuinely biodegradable.' } },
    { '@type': 'Question', name: 'Does switching to biodegradable bags help with India\'s plastic ban compliance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — PBAT-based biodegradable bags are not classified as plastic under India\'s Plastic Waste Management Rules 2016 (amended 2021). Using certified biodegradable bags removes your business from plastic ban liability entirely. DRDO certification is the strongest compliance evidence you can carry if an inspector visits.' } },
    { '@type': 'Question', name: 'How do I tell my customers we use eco-friendly packaging?', acceptedAnswer: { '@type': 'Answer', text: 'Three ways: (1) Print "DRDO Certified Biodegradable" on your bags — we offer custom printing. (2) Put a small notice at your counter explaining the bag decomposes within 180 days. (3) Include a line on your receipts or packaging: "We use DRDO-certified biodegradable bags — not plastic." Many customers actively appreciate this and it differentiates your business.' } },
  ],
};

const lifecycleRows = [
  { stage: 'Raw material source', plastic: 'Petroleum (crude oil)', pbat: 'Adipic acid + 1,4-butanediol (plant-derived inputs) + PBAT granules' },
  { stage: 'Manufacturing emissions', plastic: 'High — energy-intensive polymerisation', pbat: 'Moderate — similar extrusion process but lower total footprint' },
  { stage: 'Product lifetime', plastic: 'Typically 15–30 minutes of use', pbat: 'Same use phase — no functional difference' },
  { stage: 'Decomposition', plastic: '100–400 years in landfill; never fully breaks down', pbat: '6 months – 2 years in natural soil; 180 days in compost' },
  { stage: 'End products', plastic: 'Microplastics, toxic leachate, persistent fragments', pbat: 'CO₂ + H₂O + organic biomass (no residue)' },
  { stage: 'Soil/water impact', plastic: 'Microplastics enter food chain; ingested by animals', pbat: 'Zero — biomass acts as soil nutrient' },
  { stage: 'Food contact safety', plastic: 'BPA and plasticisers leach at heat', pbat: 'BPA-free; food-grade safe at ambient temperatures' },
];

const impactCards = [
  { icon: '🛍️', bad: '400 years', badLabel: 'plastic persistence', good: '180 days', goodLabel: 'PBAT decomposition' },
  { icon: '☠️', bad: 'Microplastics', badLabel: 'plastic end-state', good: 'Zero residue', goodLabel: 'PBAT end-state' },
  { icon: '🌊', bad: 'Ocean pollution', badLabel: 'plastic bags drift', good: 'Soil safe', goodLabel: 'PBAT decomposes on land' },
  { icon: '🏭', bad: 'Petroleum crude', badLabel: 'plastic source', good: 'PBAT organic', goodLabel: 'plant-based inputs' },
];

const esgCards = [
  { icon: '📋', title: 'BRSR Packaging Disclosure', body: 'SEBI now requires listed companies to disclose packaging sustainability in their BRSR filing. DRDO-certified suppliers give you verifiable data — decomposition rate, material composition, certification reference — to support your disclosure.' },
  { icon: '🏆', title: 'CSR & ESG Reporting', body: 'For companies with CSR obligations under Companies Act, switching to certified biodegradable packaging is a documentable environmental initiative. We provide supplier declarations and DRDO certificate copies for your compliance files.' },
  { icon: '🌍', title: 'UN SDG Alignment', body: 'Using DRDO-certified biodegradable bags directly supports SDG 12 (Responsible Consumption and Production) and SDG 14 (Life Below Water). These can be cited in ESG and sustainability reports with clear evidence.' },
  { icon: '🤝', title: 'Vendor Sustainability Audit', body: 'If your brand or retailer partner requires a green packaging audit, we provide full documentation — DRDO certificate, LLPIN registration, material data sheets, and a vendor sustainability questionnaire response.' },
];

const certTimeline = [
  { step: '01', title: 'Material formulation', desc: 'RDN Bio develops PBAT + cornstarch blend optimised for Indian soil conditions — temperature, humidity, and microbial activity.' },
  { step: '02', title: 'DRDO submission', desc: 'Samples submitted to DRDO\'s approved testing laboratory. Material composition, polymer chain structure, and biodegradation rate all tested.' },
  { step: '03', title: 'Biodegradation test', desc: 'DRDO verifies the material breaks down within 180 days under composting conditions. Residue is tested for toxicity and microplastic formation.' },
  { step: '04', title: 'Non-toxicity validation', desc: 'DRDO confirms the end-products (CO₂, H₂O, biomass) contain no harmful chemicals. BPA-free status validated independently.' },
  { step: '05', title: 'Certification issued', desc: 'DRDO issues the certification with a unique reference number. This number appears on our supplier documentation for every order.' },
];

const promises = [
  { icon: '🌱', title: 'Packaging That Returns to Earth', body: 'Our bags decompose within 180 days under composting conditions, leaving no toxic residue. Unlike conventional plastic which fragments into microplastics that persist for centuries, PBAT undergoes complete enzymatic breakdown — the end products are CO₂, water, and organic biomass that nourish the soil.' },
  { icon: '🏛️', title: 'Government-Certified Biodegradability', body: 'DRDO certification means our products have been tested and verified by India\'s Defence Research and Development Organisation — not self-certified by the manufacturer. Every bag we sell carries independent assurance of genuine biodegradability, material safety, and non-toxicity.' },
  { icon: '♻️', title: 'Plastic Waste Management Compliant', body: 'Fully compliant with India\'s Plastic Waste Management Rules 2016 (amended 2021). Businesses using our bags are not classified as plastic users under the July 2022 ban — giving complete protection from GHMC, municipal, and central enforcement penalties.' },
];

const industries = [
  { icon: '🛕', title: 'Temples & Religious Trusts', desc: 'Prasadam bags, offering covers, festival bulk supply', link: '/temple-packaging-solutions' },
  { icon: '🍽️', title: 'Restaurants & Food', desc: 'Carry bags, food pouches, butter covers', link: '/food-packaging-solutions' },
  { icon: '🏥', title: 'Hospitals & Institutions', desc: 'Garbage bags, medical waste bags, ward covers', link: '/institutional-packaging' },
  { icon: '🛒', title: 'Kirana & Retail', desc: 'D-Cut and U-Cut carry bags in all sizes', link: '/biodegradable-carry-bags' },
  { icon: '🏪', title: 'Supermarkets & Chains', desc: 'Bulk branded bags, private-label options', link: '/biodegradable-bags-supermarkets' },
  { icon: '🍰', title: 'Sweet Shops & Bakeries', desc: 'Mithai bags, pastry boxes liner, bulk covers', link: '/biodegradable-bags-sweet-shops' },
];

export default function Sustainability() {
  useEffect(() => {
    document.title = 'Sustainability & Environmental Impact | RDN Bio Products Biodegradable Packaging';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Every RDN Bio bag avoids 400 years of plastic pollution. DRDO certified biodegradable packaging. PBAT lifecycle vs plastic, ESG disclosure support, and zero microplastic guarantee.';
  }, []);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">✓ DRDO Certified Biodegradability</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700, color: '#fff' }}>🌍 Zero Microplastics</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Every RDN Bio Bag Avoids<br />400 Years of Plastic Pollution
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>The bottom line:</strong> Our PBAT bags decompose in 180 days and leave CO₂, water, and soil nutrients — not microplastics. DRDO certification (Government of India) independently validates every claim we make. No self-declaration. No greenwashing.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginBottom: 28 }}>
            {[
              { value: '180 days', label: 'certified decomposition' },
              { value: '0', label: 'microplastics produced' },
              { value: 'DRDO', label: 'independent certification' },
              { value: 'BPA-free', label: 'food-grade safe' },
            ].map(s => (
              <div key={s.value} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} Ask About Sustainability Docs</a>
            <Link to="/get-quote" className="btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Impact Comparison */}
      <section style={{ padding: '56px 0', background: '#1a3a06', borderBottom: '1px solid #0e2203' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 12 }}>
            The Problem We Are Solving — At Scale
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', textAlign: 'center', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
            India uses an estimated 150 billion carry bags per year. Our mission: replace every one with a certified biodegradable alternative.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            {impactCards.map(card => (
              <div key={card.icon} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{card.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#ff6b6b' }}>{card.bad}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>{card.badLabel}</div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 20, alignSelf: 'center' }}>→</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#7ed47e' }}>{card.good}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>{card.goodLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Plastic vs PBAT — Full Lifecycle Comparison</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>From raw material to what remains in the soil after 2 years</p>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '26%' }}>Stage</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37%', background: '#c0392b' }}>🛢️ Conventional Plastic</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37%', background: '#2d7d0a' }}>🌿 RDN Bio PBAT Bags</th>
                </tr>
              </thead>
              <tbody>
                {lifecycleRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fef9f9' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333' }}>{row.stage}</td>
                    <td style={{ padding: '12px 16px', color: '#c0392b' }}>{row.plastic}</td>
                    <td style={{ padding: '12px 16px', color: '#2d6a0a' }}>{row.pbat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Environmental Promises */}
      <section style={{ padding: '56px 0', background: '#fff', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Environmental Commitment</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Three commitments that underpin everything we manufacture</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 36 }}>
            {promises.map(p => (
              <div key={p.title} style={{ background: '#fff', border: '2px solid var(--green-light)', borderRadius: 16, padding: '32px 28px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 40, flexShrink: 0, marginTop: 2 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRDO Certification Process */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>How DRDO Certifies Our Biodegradability</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Independent government testing — not manufacturer self-declaration</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 36 }}>
            {certTimeline.map((c, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #dbeec9', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ width: 36, height: 36, background: 'var(--green-mid)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, marginBottom: 14 }}>{c.step}</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, background: '#fff', border: '2px solid var(--green-light)', borderRadius: 14, padding: '20px 24px', maxWidth: 640, margin: '32px auto 0' }}>
            <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: 'var(--green-dark)' }}>Need the certificate?</strong> We provide DRDO certification documentation with every bulk order. For ESG reports, compliance audits, or import documentation, we can issue a supplier sustainability declaration. <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>WhatsApp us to request a copy.</a>
            </p>
          </div>
        </div>
      </section>

      {/* ESG / BRSR Section */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>ESG & Compliance — Using Our Certification in Your Reports</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>For listed companies, exporters, and enterprises with sustainability reporting obligations</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, marginTop: 36 }}>
            {esgCards.map((c, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? '#f8fdf3' : '#fff', border: '1px solid #dbeec9', borderRadius: 16, padding: '28px 22px' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Replacing Plastic Across Industries</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>From temples to corporate canteens — every sector can switch today</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 36 }}>
            {industries.map(ind => (
              <Link key={ind.title} to={ind.link} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'box-shadow 0.2s' }}>
                <div style={{ fontSize: 38, marginBottom: 12 }}>{ind.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{ind.title}</h3>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ padding: '56px 0', background: '#fff', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: 32 }}>
            {faqSchema.mainEntity.map((f, i) => (
              <details key={i} style={{ borderBottom: '1px solid #dbeec9', paddingBottom: 18, marginBottom: 18 }}>
                <summary style={{ fontWeight: 700, fontSize: 15, color: '#222', cursor: 'pointer', paddingBottom: 8 }}>{f.name}</summary>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#555', marginTop: 8, paddingLeft: 4 }}>{f.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'var(--green-mid)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Make Your Business Part of the Solution
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' }}>
            Every order you place with RDN Bio Products is plastic that never enters a landfill, ocean, or soil. Join businesses across India that have already made the switch.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 20 }}>
            <Link to="/get-quote" className="btn-primary" style={{ background: '#fff', color: 'var(--green-dark)' }}>Get a Quote</Link>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Us</a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Now</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 12 }}>
            <Link to="/about" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: 14 }}>Our Story →</Link>
            <Link to="/distributor" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: 14 }}>Become a Distributor →</Link>
            <Link to="/blog/what-is-pbat-material" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: 14 }}>PBAT Science →</Link>
          </div>
        </div>
      </section>

      <RelatedSolutions exclude="sustainability" />
    </main>
  );
}
