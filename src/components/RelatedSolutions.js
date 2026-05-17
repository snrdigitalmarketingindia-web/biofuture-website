import React from 'react';
import { Link } from 'react-router-dom';

const ALL_SOLUTIONS = {
  temple:        { icon: '🛕', title: 'Temple Packaging',          desc: 'Prasadam bags, flower bags, festival bulk supply',   link: '/temple-packaging-solutions', color: '#fff8e1', border: '#ffe082' },
  food:          { icon: '🍽️', title: 'Food & Restaurants',         desc: 'Food-grade pouches, butter covers, takeaway bags',   link: '/food-packaging-solutions',   color: '#fff3e0', border: '#ffcc80' },
  institutional: { icon: '🏥', title: 'Hospitals & Institutions',  desc: 'Garbage bags, waste liners, bulk institutional supply', link: '/institutional-packaging',   color: '#e3f2fd', border: '#90caf9' },
  carry:         { icon: '🛒', title: 'Carry Bags (Retail)',         desc: 'D-Cut & U/W-Cut bags, 21 sizes, custom printing',   link: '/biodegradable-carry-bags',   color: '#e8f5e9', border: '#a5d6a7' },
  butter:        { icon: '🧈', title: 'Butter Sheets',               desc: 'Food-grade wrapping for dairy, bakery & sweets',    link: '/butter-sheets-food-wrapping', color: '#fce4ec', border: '#f48fb1' },
  retail:        { icon: '🏪', title: 'Retail & Supermarkets',       desc: 'Branded carry bags for kirana stores, supermarkets & retail chains', link: '/retail-packaging-solutions', color: '#e8f5e9', border: '#a5d6a7' },
};

export default function RelatedSolutions({ exclude }) {
  const items = Object.entries(ALL_SOLUTIONS)
    .filter(([key]) => key !== exclude)
    .slice(0, 3)
    .map(([, val]) => val);

  return (
    <section style={{ padding: '48px 0', background: '#f8fcf2', borderBottom: '1px solid #e0eed0' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Also explore our solutions</h2>
        <p className="section-sub" style={{ textAlign: 'center' }}>RDN Bio Products for every business type</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 28 }}>
          {items.map(s => (
            <Link
              key={s.link}
              to={s.link}
              style={{ background: s.color, border: `1px solid ${s.border}`, borderRadius: 12, padding: '22px 20px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <div style={{ fontSize: 30 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--green-dark)' }}>{s.title}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{s.desc}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-mid)', marginTop: 4 }}>See solutions →</div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link to="/products" style={{ fontSize: 13, fontWeight: 600, color: 'var(--green-mid)' }}>View all products & specs →</Link>
        </div>
      </div>
    </section>
  );
}
