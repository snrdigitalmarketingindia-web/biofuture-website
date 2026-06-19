import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20want%20to%20switch%20to%20PBAT%20biodegradable%20bags';
const TEL = 'tel:+917301222666';

const COMPARISON = [
  { feature: 'Material type', pbat: 'Bio-based co-polyester (PBAT + cornstarch)', oxo: 'Conventional plastic with pro-oxidant additives (usually cobalt or manganese salts)' },
  { feature: 'How it breaks down', pbat: 'Microorganisms consume the PBAT polymer — true biodegradation', oxo: 'UV/heat causes plastic to fragment into tiny pieces — NOT true biodegradation' },
  { feature: 'End result', pbat: 'CO₂, water, and biomass — no plastic residue', oxo: 'Microplastic fragments that persist in soil and water for hundreds of years' },
  { feature: 'Banned in India?', pbat: '✅ Not banned — accepted plastic alternative', oxo: '❌ Banned — prohibited under Plastic Waste Management Rules 2021' },
  { feature: 'DRDO certification', pbat: '✅ Yes — DRDO certified PBAT bags available', oxo: '❌ No — oxo-degradable bags cannot be DRDO certified' },
  { feature: 'EU status', pbat: '✅ Permitted — EN 13432 compostability standard applies', oxo: '❌ Banned across the European Union since 2021' },
  { feature: 'Visible difference', pbat: 'Usually printed with \'DRDO Certified Biodegradable\' mark', oxo: 'Often just labelled \'eco-friendly\' or \'degradable\' without certification' },
  { feature: 'Cost', pbat: 'Slightly higher than oxo, widely available from certified manufacturers', oxo: 'Cheap — but illegal to manufacture or sell in India' },
];

const FAQS = [
  { q: 'What is oxo-degradable plastic?', a: 'Oxo-degradable plastic is conventional plastic (usually LDPE or HDPE) mixed with pro-oxidant chemical additives that accelerate fragmentation when exposed to heat or UV light. The plastic does not truly biodegrade — it breaks into smaller and smaller plastic fragments (microplastics). It does not produce CO₂ and water like true biodegradable materials do. Oxo-degradable is banned in India under the 2021 Plastic Waste Management Rules.' },
  { q: 'Is oxo-degradable plastic banned in India?', a: 'Yes. Oxo-degradable plastics are explicitly prohibited under India\'s Plastic Waste Management (Amendment) Rules, 2021, which took effect in stages through 2022. The rules define oxo-degradable plastic as a non-compliant material. Manufacturers, importers, and sellers of oxo-degradable bags face penalties under the Environment Protection Act. Buying or selling oxo-degradable bags is illegal in India.' },
  { q: 'How can I tell if a bag is PBAT biodegradable or oxo-degradable?', a: 'The safest way is to ask for the DRDO certification. PBAT biodegradable bags from certified manufacturers will have a DRDO certificate. Oxo-degradable bags cannot get DRDO certification. Also check the labelling — look for "PBAT" or "DRDO Certified Biodegradable" vs vague terms like "eco-friendly," "degradable," or "oxo." If the bag is very cheap and the supplier cannot produce a DRDO certificate, it is likely oxo-degradable.' },
  { q: 'Why is oxo-degradable plastic worse than regular plastic?', a: 'Regular plastic at least stays in large pieces that can potentially be collected and recycled. Oxo-degradable plastic fragments into microplastics — particles less than 5mm — that are impossible to collect from soil, water, or food chains. Microplastics enter groundwater, are consumed by animals and fish, and have been found in human blood. Oxo-degradable plastic is considered more harmful than regular plastic by environmental scientists.' },
  { q: 'Does PBAT actually biodegrade in India\'s climate?', a: 'Yes. DRDO specifically formulated the PBAT + cornstarch blend for Indian climate conditions — warm temperatures, monsoon moisture, and Indian soil microbiology all support PBAT biodegradation. The cornstarch component provides an initial food source for soil microorganisms, which then continue breaking down the PBAT polymer chains. Independent testing shows PBAT bags decompose in 6 months to 3 years in Indian soil conditions depending on thickness.' },
];

export default function GeoPBATvsOxo() {
  useEffect(() => {
    document.title = 'PBAT Biodegradable vs Oxo-Degradable Plastic — What\'s Banned in India | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'PBAT biodegradable bags vs oxo-degradable plastic — key differences, India\'s ban on oxo-degradable, and how to verify genuine biodegradable bags. DRDO certified PBAT explained.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'PBAT vs Oxo-Degradable', item: 'https://rdnbio.com/#/pbat-vs-oxo-degradable-plastic' },
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
            <span className="drdo-badge">⚠️ Know the Difference</span>
            <span className="drdo-badge" style={{ background: '#d9534f', borderColor: '#d9534f', color: '#fff' }}>❌ Oxo-Degradable is Banned</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            PBAT Biodegradable vs Oxo-Degradable Plastic — A Critical Difference
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> PBAT biodegradable bags truly break down into CO₂, water, and biomass. Oxo-degradable bags only fragment into microplastics — and are <strong>banned in India since 2021</strong>. Many bags sold as "eco-friendly" or "degradable" are actually illegal oxo-degradable products. Only DRDO-certified PBAT bags are legally compliant.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn-primary">Get Legal PBAT Bags</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Verify Your Current Supplier</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>PBAT vs Oxo-Degradable — Side by Side</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '26%' }}>Feature</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37%', background: '#2d7d0a' }}>🌿 PBAT Biodegradable</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, width: '37%', background: '#a94442' }}>⚠️ Oxo-Degradable</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333' }}>{row.feature}</td>
                    <td style={{ padding: '12px 16px', color: '#2d6a0a' }}>{row.pbat}</td>
                    <td style={{ padding: '12px 16px', color: '#a94442' }}>{row.oxo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#fff7f7', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center', color: '#c0392b' }}>⚠️ Oxo-Degradable Bags are Banned in India</h2>
          <div style={{ background: '#fdf3f3', border: '2px solid #e74c3c', borderRadius: 14, padding: '24px 28px', marginTop: 28 }}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
              India's <strong>Plastic Waste Management (Amendment) Rules, 2021</strong> explicitly ban oxo-degradable plastics. The rules define them as non-compliant and prohibit their <strong>manufacture, import, stocking, distribution, sale, and use</strong>.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
              Despite this, many suppliers continue selling oxo-degradable bags labelled as "eco-friendly," "biodegradable," or "green." These claims are misleading — and buying them exposes your business to enforcement risk.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444', margin: 0 }}>
              The safest way to verify compliance: <strong>demand a DRDO certification document from your supplier.</strong> Oxo-degradable bags cannot get DRDO certification.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
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
            Switch to Legal, DRDO Certified PBAT Bags
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP manufactures genuine DRDO-certified PBAT biodegradable bags in Hyderabad. Certificate copies with every order.
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
