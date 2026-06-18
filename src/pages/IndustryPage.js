import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSolutions from '../components/RelatedSolutions';

const TEL = 'tel:+917301222666';

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
);

export default function IndustryPage({ data }) {
  useEffect(() => {
    document.title = data.metaTitle;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = data.metaDesc;
  }, [data]);

  const waUrl = `https://wa.me/917301222666?text=${data.waText}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: data.breadcrumbName, item: data.breadcrumbUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            {data.heroTags.map(tag => (
              <span key={tag} className="drdo-badge" style={tag.includes('🌿') || tag.includes('📋') || tag.includes('📦') || tag.includes('🎓') || tag.includes('🍽️') || tag.includes('🏥') ? { background: '#5cb81c', borderColor: '#5cb81c', color: '#fff' } : {}}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 16, color: '#fff' }}>
            {data.h1}
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 660, color: 'rgba(255,255,255,0.92)' }}>
            {data.heroDesc}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#industry-enquiry" className="btn-primary">{data.ctaText}</a>
            <a href={TEL} className="btn-call">📞 Call Now</a>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-wa">{WA_SVG} WhatsApp Now</a>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>{data.problemTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 32 }}>
            {data.problemPoints.map(p => (
              <div key={p.title} style={{ background: '#fff8f0', border: '1px solid #ffd0a0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#c0510e', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution cards */}
      <section style={{ padding: '56px 0', background: 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>RDN Bio Products solution for {data.name}</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>DRDO certified biodegradable packaging for every need in your sector</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 32 }}>
            {data.solutionCards.map(c => (
              <div key={c.title} style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products table */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Products for {data.name}</h2>
          <div style={{ marginTop: 32, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--green-mid)', color: '#fff' }}>
                  {['Product', 'Best Use', 'Sizes', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.products.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'var(--green-pale)', borderBottom: '1px solid #d4e8b0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--green-dark)' }}>{row.name}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.use}</td>
                    <td style={{ padding: '12px 16px', color: '#555' }}>{row.sizes}</td>
                    <td style={{ padding: '12px 16px', color: '#888', fontSize: 12 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <Link to="/products" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 13 }}>View full product catalogue with specs →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 0', borderBottom: '1px solid #eef5e4' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently asked questions</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary className="faq-summary">{f.q}<span className="faq-icon">+</span></summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedSolutions exclude="carry" />

      {/* CTA Banner */}
      <section style={{ padding: '56px 0', background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            {data.name} — get a bulk pricing quote today
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', maxWidth: 540, margin: '0 auto 32px' }}>
            DRDO certified, BPA-free PBAT biodegradable bags. Same-day dispatch. Pan India delivery in 2–3 working days.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>
              {WA_SVG} WhatsApp for Bulk Quote
            </a>
            <a href={TEL} className="btn-call" style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700 }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="industry-enquiry" style={{ padding: '56px 0', background: 'var(--green-pale)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>{data.ctaText}</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>Tell us your requirements — pricing on WhatsApp within 2 hours</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 32px', fontSize: 15, fontWeight: 700 }}>
                {WA_SVG} WhatsApp Your Requirements
              </a>
              <a href={TEL} className="btn-call" style={{ padding: '16px 28px', fontSize: 15, fontWeight: 700 }}>
                📞 Call +91-7301222666
              </a>
            </div>
            <div style={{ background: '#fff', border: '1px solid #d4e8b0', borderRadius: 14, padding: '20px 24px', fontSize: 14, color: '#555', lineHeight: 1.75, textAlign: 'center' }}>
              <strong style={{ color: 'var(--green-dark)' }}>RDN Bio Products LLP</strong> — Direct Manufacturer, Hyderabad<br />
              DRDO Certified · BPA-Free PBAT · Pan India Supply<br />
              Same-day dispatch · 2–3 day delivery nationwide
            </div>
            <Link to="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600, fontSize: 14, textAlign: 'center' }}>View full contact details →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
