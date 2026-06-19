import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20want%20to%20know%20more%20about%20DRDO%20certified%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const COMPARISON = [
  { material: 'PBAT biodegradable bags (30–40 micron)', time: '6 months – 2 years', conditions: 'Soil, compost, or moist landfill', notes: 'Faster in warm, moist Indian conditions' },
  { material: 'PBAT biodegradable bags (50–75 micron)', time: '1 – 3 years', conditions: 'Soil, compost, or moist landfill', notes: 'Thicker = longer, still significantly faster than plastic' },
  { material: 'Cornstarch bags', time: '3 – 6 months', conditions: 'Industrial compost (55°C+)', notes: 'Very fast in composting, slow in regular soil' },
  { material: 'Paper bags (uncoated)', time: '2 – 6 weeks', conditions: 'Soil, water, or composting', notes: 'Fastest natural option; not waterproof' },
  { material: 'Jute/cloth bags', time: '1 – 2 years', conditions: 'Soil', notes: 'Degrades naturally but slower than paper' },
  { material: 'Conventional LDPE plastic bag (120 micron)', time: '100 – 400 years', conditions: 'Does not biodegrade — only fragments', notes: 'Becomes microplastic; never fully disappears' },
  { material: 'Oxo-degradable plastic', time: '2 – 5 years to fragment', conditions: 'UV/heat exposure', notes: 'Becomes microplastics — banned in India' },
];

const FACTORS = [
  { icon: '🌡️', title: 'Temperature', desc: 'Warmer temperatures accelerate microbial activity. India\'s tropical climate (25–40°C soil temperatures) is highly favourable for PBAT biodegradation — faster than cold European or North American conditions.' },
  { icon: '💧', title: 'Moisture', desc: 'Soil moisture enables the microbial communities that consume PBAT polymer chains. Indian monsoon seasons create ideal soil conditions for accelerated biodegradation during June–September.' },
  { icon: '🦠', title: 'Microbial activity', desc: 'PBAT is consumed by bacteria and fungi present in soil. Rich, biologically active soil (farmland, compost piles, moist urban soil) degrades PBAT faster than dry sandy soil.' },
  { icon: '📏', title: 'Thickness (micron)', desc: 'Thicker bags take proportionally longer to degrade. A 30 micron bag degrades significantly faster than a 75 micron bag in the same conditions. Choose the minimum practical micron for your use.' },
  { icon: '🌽', title: 'Cornstarch content', desc: 'PBAT + cornstarch blends start degrading faster because soil microbes readily consume the cornstarch component first, which initiates the breakdown of the PBAT chains. Higher cornstarch content = faster initial degradation.' },
];

const FAQS = [
  { q: 'How long do PBAT biodegradable bags take to decompose?', a: 'DRDO-certified PBAT biodegradable bags typically decompose in 6 months to 3 years depending on thickness, temperature, moisture, and microbial activity in the soil. In India\'s warm, humid climate — especially during monsoon months — decomposition is faster than in cold climates. A 30–40 micron bag in moist Indian soil will typically show significant breakdown within 6–12 months.' },
  { q: 'Do biodegradable bags decompose in landfills?', a: 'PBAT bags will biodegrade in landfill conditions over time, though the rate is slower in a sealed anaerobic landfill than in open soil. In India, where many landfills are open or partially managed, PBAT bags do degrade with available moisture and microbial activity. This is still vastly superior to conventional plastic which does not biodegrade even in active landfills.' },
  { q: 'Will biodegradable bags decompose in the sea or water?', a: 'PBAT biodegradable bags can decompose in water environments, though the rate depends on temperature, salinity, and microbial presence. In freshwater rivers and lakes, decomposition occurs over months to a couple of years. In seawater, the process is slower. The key point is that PBAT does not produce microplastics — it ultimately breaks down into CO₂, water, and biomass.' },
  { q: 'Do biodegradable bags decompose if they reach a dump or open ground?', a: 'Yes. Unlike plastic which accumulates unchanged in open dumps, PBAT bags will gradually decompose when exposed to soil, moisture, and ambient temperatures in a dump or open ground environment. In Indian conditions (warm temperatures, seasonal rainfall), visible degradation typically begins within 3–6 months.' },
  { q: 'Should I store biodegradable bags differently from plastic bags?', a: 'Yes. Biodegradable PBAT bags should be stored in a cool, dry location away from direct sunlight, moisture, and heat. Exposure to moisture and heat can trigger early degradation during storage. For maximum shelf life, keep bags in their original packaging in a dry storeroom. Typical shelf life under proper storage conditions is 12–18 months.' },
];

export default function GeoDecomposeTime() {
  useEffect(() => {
    document.title = 'How Long Do Biodegradable Bags Take to Decompose? — PBAT Breakdown Guide | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'How long do PBAT biodegradable bags take to decompose in India? Soil, landfill, and water breakdown times compared. Factors that affect decomposition rate. DRDO certified bags explained.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'How Long Biodegradable Bags Decompose', item: 'https://rdnbio.com/#/how-long-biodegradable-bags-decompose' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span className="drdo-badge">🔬 Science Guide</span>
            <span className="drdo-badge" style={{ background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' }}>🇮🇳 India-Specific</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            How Long Do Biodegradable Bags Take to Decompose?
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> DRDO-certified PBAT biodegradable bags decompose in 6 months to 3 years in Indian soil conditions — depending on thickness, moisture, and temperature. In warm, moist Indian conditions (especially during monsoons), the process is significantly faster. Conventional plastic takes 100–400 years and never truly disappears.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Buy DRDO Certified Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Ask a Question</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Decomposition Time Comparison</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Material</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Time to Decompose</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Conditions</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: i >= 5 ? '#c0392b' : 'var(--green-dark)' }}>{row.material}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: i >= 5 ? '#c0392b' : '#2d6a0a' }}>{row.time}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.conditions}</td>
                    <td style={{ padding: '12px 16px', color: '#555', fontStyle: 'italic', fontSize: 13 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>What Affects How Fast PBAT Bags Decompose?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 36 }}>
            {FACTORS.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px 20px', border: '1px solid #dbeec9' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, color: '#222', marginBottom: 8, fontSize: 15 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: 32 }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ borderBottom: '1px solid #dbeec9', paddingBottom: 18, marginBottom: 18 }}>
                <summary style={{ fontWeight: 700, fontSize: 15, color: '#222', cursor: 'pointer', paddingBottom: 8 }}>{f.q}</summary>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#555', marginTop: 8, paddingLeft: 4 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: 'var(--green-mid)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Buy Genuinely Biodegradable PBAT Bags — DRDO Certified
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP — Hyderabad manufacturer. Bags that actually decompose — not fake eco-labels.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary" style={{ background: '#fff', color: 'var(--green-dark)' }}>Get Bulk Quote</Link>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
