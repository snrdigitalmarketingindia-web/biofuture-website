import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20RDN%20Bio%20Products%20sustainability%20impact";

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
  description: 'DRDO certified biodegradable packaging manufacturer replacing single-use plastic across India with PBAT-based bags that decompose in 180 days.',
};

const impactCards = [
  { icon: '🛍️', bad: '400 years', badLabel: 'plastic lifetime', good: '180 days', goodLabel: 'biodegradable' },
  { icon: '☠️', bad: 'BPA toxic', badLabel: 'plastic chemical', good: 'BPA free', goodLabel: 'our bags' },
  { icon: '🌊', bad: 'Ocean pollution', badLabel: 'plastic bags', good: 'Soil safe', goodLabel: 'decomposes cleanly' },
  { icon: '🏭', bad: 'Petroleum based', badLabel: 'plastic source', good: 'PBAT organic', goodLabel: 'our material' },
];

const promises = [
  {
    icon: '🌱',
    title: 'Packaging That Returns to Earth',
    body: 'Our bags decompose within 180 days under composting conditions, leaving no toxic residue. Unlike plastic which breaks into microplastics that persist for centuries, PBAT biodegrades completely into CO₂, water, and biomass — nutrients that return to the soil.',
  },
  {
    icon: '🏛️',
    title: 'Government-Certified Biodegradability',
    body: "DRDO certification means our products have been tested and verified by India's Defence Research and Development Organisation — not just self-certified by the manufacturer. Every bag we sell carries that independent assurance of genuine biodegradability.",
  },
  {
    icon: '♻️',
    title: 'Plastic Waste Management Compliant',
    body: "Fully compliant with India's Plastic Waste Management Rules 2016 (amended 2021), helping businesses avoid penalties under the July 2022 single-use plastic ban. Switching to RDN Bio means your business stays on the right side of both regulation and the environment.",
  },
];

const industries = [
  { icon: '🛕', title: 'Temples & Religious Trusts', desc: 'prasadam bags, offering covers' },
  { icon: '🍽️', title: 'Restaurants & Food', desc: 'carry bags, food pouches, butter covers' },
  { icon: '🏥', title: 'Hospitals & Institutions', desc: 'garbage bags, medical waste bags' },
  { icon: '🛒', title: 'Kirana & Retail', desc: 'carry bags in all sizes' },
  { icon: '🏪', title: 'Supermarkets & Chains', desc: 'bulk branded bags' },
  { icon: '🏢', title: 'Corporate & Canteens', desc: 'customised eco bags' },
];

const pbatBadges = [
  { icon: '🧪', label: 'PBAT Material' },
  { icon: '✓', label: 'DRDO Certified' },
  { icon: '⏱', label: '180 Day Decomposition' },
  { icon: '🚫', label: 'No Microplastics' },
];

export default function Sustainability() {
  useEffect(() => {
    document.title = 'Sustainability & Environmental Impact | RDN Bio Products Biodegradable Packaging';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Every RDN Bio bag avoids 400 years of plastic pollution. DRDO certified biodegradable packaging manufacturer replacing single-use plastic across India. See our environmental impact.';
  }, []);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 20, padding: '5px 14px', fontSize: 13, fontWeight: 600 }}>
              🌍 Sustainability &amp; Impact
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            Every RDN Bio Bag Avoids 400 Years of Plastic Pollution
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 620, color: 'rgba(255,255,255,0.92)' }}>
            We're on a mission to replace every single-use plastic bag in India with a certified biodegradable alternative. Here's the impact of choosing RDN Bio.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 28 }}>
            {[
              { value: '180 days', label: 'to decompose' },
              { value: '400 years', label: 'plastic avoided' },
              { value: '0 toxic residue', label: '' },
            ].map(s => (
              <div key={s.value} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>{s.value}</div>
                {s.label && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{s.label}</div>}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Us</a>
            <Link to="/get-quote" className="btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Impact Counter — dark green bg */}
      <section style={{ padding: '56px 0', background: '#1a3a06', borderBottom: '1px solid #0e2203' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 12 }}>
            The Plastic Problem We're Solving
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', textAlign: 'center', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
            The numbers tell the story clearly — every bag matters.
          </p>
          <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            {impactCards.map(card => (
              <div key={card.title} className="impact-card" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{card.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <div>
                    <div className="impact-bad" style={{ fontSize: 18, fontWeight: 800, color: '#ff6b6b' }}>{card.bad}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{card.badLabel}</div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 20, alignSelf: 'center' }}>→</div>
                  <div>
                    <div className="impact-good" style={{ fontSize: 18, fontWeight: 800, color: '#7ed47e' }}>{card.good}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{card.goodLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Environmental Promise */}
      <section style={{ padding: '56px 0', background: '#fff', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Environmental Promise</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Three commitments that underpin everything we make</p>
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

      {/* Industries We've Served */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Replacing Plastic Across Industries</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>From temples to hospitals, RDN Bio bags are making a difference everywhere</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 36 }}>
            {industries.map(ind => (
              <div key={ind.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 38, marginBottom: 12 }}>{ind.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{ind.title}</h3>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PBAT Material Explanation */}
      <section style={{ padding: '56px 0', background: '#fff', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>What Makes Our Bags Truly Biodegradable</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>The science behind real biodegradability — not just a marketing claim</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40, marginTop: 36, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 16 }}>
                Our bags are made from <strong style={{ color: 'var(--green-dark)' }}>PBAT (Polybutylene Adipate Terephthalate)</strong>, a certified biodegradable polymer that has been independently tested and verified to decompose within 180 days under composting conditions.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 16 }}>
                Unlike conventional plastic which fragments into microplastics that persist in soil and water for centuries, PBAT undergoes complete enzymatic breakdown — the end products are CO₂, water, and organic biomass with no toxic residue.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85 }}>
                PBAT is BPA-free and food-safe, making it suitable for direct contact with food products, temple prasadam, and medical-adjacent uses. Our DRDO certification validates these properties through rigorous independent testing — not manufacturer self-declaration.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {pbatBadges.map(b => (
                <div key={b.label} style={{ background: 'var(--green-pale)', border: '1px solid var(--green-light)', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{b.icon}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-dark)' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: 'var(--green-dark)', marginBottom: 14 }}>
            Make Your Business Part of the Solution
          </h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' }}>
            Every order you place with RDN Bio Products is plastic that never enters a landfill, ocean, or soil. Join hundreds of businesses across India that have already made the switch.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 20 }}>
            <Link to="/products" className="btn-primary">See Our Products</Link>
            <Link to="/get-quote" className="btn-primary" style={{ background: 'var(--green-dark)' }}>Get a Quote</Link>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Us</a>
          </div>
          <Link to="/about" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 15 }}>Read Our Story →</Link>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions exclude="sustainability" />
    </main>
  );
}
