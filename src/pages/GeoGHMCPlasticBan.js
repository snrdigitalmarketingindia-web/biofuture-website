import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/917301222666?text=Hi%2C%20I%20need%20GHMC%20compliant%20biodegradable%20bags%20for%20Hyderabad';
const TEL = 'tel:+917301222666';

const ENFORCEMENT_ZONES = [
  { zone: 'LB Nagar Zone', areas: 'LB Nagar, Kothapet, Saroornagar, Nagole, Vanasthalipuram', frequency: 'High' },
  { zone: 'Khairatabad Zone', areas: 'Banjara Hills, Jubilee Hills, Somajiguda, Punjagutta', frequency: 'Very High' },
  { zone: 'Secunderabad Zone', areas: 'SD Road, Marredpally, Trimulgherry, Bolarum', frequency: 'High' },
  { zone: 'Serilingampally Zone', areas: 'Kukatpally, KPHB, Madhapur, Kondapur, HITEC City', frequency: 'Very High' },
  { zone: 'Charminar Zone', areas: 'Charminar, Old City, Shalibanda, Bahadurpura', frequency: 'High' },
  { zone: 'Kapra Zone', areas: 'Kapra, Uppal, Nacharam, Hayathnagar', frequency: 'Medium' },
];

const COMPLIANT_DOCS = [
  '✅ DRDO certification copy from your bag supplier',
  '✅ Purchase invoice showing biodegradable/DRDO certified product',
  '✅ Bag packaging label stating "DRDO Certified Biodegradable"',
  '✅ Supplier GSTIN and manufacturing address (should be a registered manufacturer)',
];

const FAQS = [
  { q: 'What is GHMC\'s plastic ban — what is banned in Hyderabad?', a: 'GHMC enforces the Telangana State Plastic Ban along with India\'s central Plastic Waste Management Rules 2021. In Hyderabad, this bans plastic carry bags under 120 micron, single-use plastic items (cutlery, straws, earbuds), plastic covers used in commercial establishments, oxo-degradable plastics, and thermocol for food service and decoration. GHMC enforcement teams conduct raids across all six zones.' },
  { q: 'What is the fine for using plastic bags in Hyderabad?', a: 'GHMC fines for plastic bag violations typically range from ₹25,000 for first-time offenders to ₹50,000 or more for repeat violations. Hotels, restaurants, and commercial establishments face higher fines. GHMC also conducts surprise raids and can seize stock. Some business owners have reported fine amounts of ₹1 lakh for egregious repeat offences.' },
  { q: 'Which GHMC zones have the strictest plastic ban enforcement?', a: 'Enforcement is active across all six GHMC zones, but particularly intensive in Khairatabad Zone (Banjara Hills, Jubilee Hills area) and Serilingampally Zone (HITEC City, Kukatpally). Commercial areas near major markets, restaurants clusters, and high-footfall retail zones are prioritised. Temple areas, railway stations, and bus stands are also priority enforcement zones.' },
  { q: 'What documents prove my bags are GHMC compliant?', a: 'If inspected by GHMC, you should be able to show: (1) the DRDO certification document from your bag supplier, (2) a purchase invoice showing the bags are biodegradable/DRDO certified, (3) the bag packaging itself labelled as DRDO certified. RDN Bio Products provides certification copies with all bulk orders specifically for this purpose.' },
  { q: 'Are there GHMC-approved biodegradable bag suppliers in Hyderabad?', a: 'GHMC does not maintain a formal approved supplier list, but DRDO certification is the accepted proof of compliance. RDN Bio Products LLP — based in Karmanghat, Hyderabad — is a DRDO-certified manufacturer whose bags satisfy GHMC enforcement requirements. We supply directly within Hyderabad with compliance documentation.' },
  { q: 'Can hotels and restaurants in Hyderabad still use any plastic packaging?', a: 'Under GHMC and Telangana rules, hotels and restaurants must use DRDO-certified biodegradable bags for all carry-out purposes. Plastic straws, cutlery, and single-use items are banned. Some internal kitchen use of thick plastic (above 120 micron for non-carry purposes) may still be permissible, but all customer-facing plastic carry bags must be compliant biodegradable alternatives.' },
];

export default function GeoGHMCPlasticBan() {
  useEffect(() => {
    document.title = 'GHMC Plastic Ban Hyderabad — What Businesses Must Know in 2024 | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'GHMC plastic ban guide for Hyderabad businesses — what is banned, enforcement zones, fine amounts, and how to stay compliant. DRDO certified bags accepted by GHMC inspectors.';
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'GHMC Plastic Ban Hyderabad', item: 'https://rdnbio.com/#/ghmc-plastic-ban-hyderabad' },
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
            <span className="drdo-badge">🏛️ Local Guide</span>
            <span className="drdo-badge" style={{ background: '#c0392b', borderColor: '#c0392b', color: '#fff' }}>⚠️ Active Enforcement</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            GHMC Plastic Ban Hyderabad — Complete Business Compliance Guide
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#fff', margin: 0, fontStyle: 'italic' }}>
              <strong>Quick answer:</strong> GHMC enforces India's plastic ban across all six Hyderabad zones. Plastic carry bags, single-use items, and oxo-degradable plastics are banned. Fines start at ₹25,000 for first offences. The accepted compliant alternative for Hyderabad businesses is DRDO-certified biodegradable PBAT bags.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/biodegradable-bags-manufacturer-hyderabad" className="btn-primary">Buy from Hyderabad Manufacturer</Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">💬 Get Compliant Bags</a>
          </div>
        </div>
      </section>

      {/* Enforcement zones */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>GHMC Enforcement Zones</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>GHMC Zone</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Key Areas Covered</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Enforcement Level</th>
                </tr>
              </thead>
              <tbody>
                {ENFORCEMENT_ZONES.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9fef4' : '#fff', borderBottom: '1px solid #eef5e4' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#222' }}>{row.zone}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.areas}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: row.frequency === 'Very High' ? '#c0392b' : row.frequency === 'High' ? '#e67e22' : '#27ae60' }}>{row.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to show inspectors */}
      <section style={{ padding: '56px 0', background: '#f8fdf3', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>What to Show a GHMC Inspector</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Keep these documents ready at your business premises</p>
          <div style={{ background: '#fff', border: '2px solid var(--green-mid)', borderRadius: 16, padding: '28px 32px', marginTop: 32 }}>
            {COMPLIANT_DOCS.map((doc, i) => (
              <div key={i} style={{ fontSize: 15, color: '#333', lineHeight: 1.8, padding: '8px 0', borderBottom: i < COMPLIANT_DOCS.length - 1 ? '1px solid #eef5e4' : 'none' }}>
                {doc}
              </div>
            ))}
            <div style={{ marginTop: 20, padding: '16px', background: 'var(--green-pale)', borderRadius: 10, fontSize: 14, color: '#444', lineHeight: 1.7 }}>
              <strong>RDN Bio Products provides</strong> DRDO certificate copies with every bulk order. Hyderabad businesses get same-day or next-day delivery (subject to availability) from our Karmanghat factory — you can also pick up directly.
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
            Get GHMC-Compliant Bags from Hyderabad's DRDO Certified Manufacturer
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 540, margin: '0 auto 32px' }}>
            RDN Bio Products LLP, Karmanghat, Hyderabad — DRDO certified. Certificate copies with every order.
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
