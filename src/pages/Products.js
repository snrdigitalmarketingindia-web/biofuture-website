import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20products";

function EnquiryForm({ product }) {
  const [form, setForm] = useState({ name:'', phone:'', size:'', qty:'', note:'' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like to enquire about ${product}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.size ? `Size: ${form.size}`           : null,
      form.qty  ? `Quantity: ${form.qty}`        : null,
      form.note ? `Special requirement: ${form.note}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name:'', phone:'', size:'', qty:'', note:'' });
  };
  return (
    <div className="enquiry-form">
      <h4>Enquire about {product}</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input className="form-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
          <input className="form-input" placeholder="WhatsApp number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
          <input className="form-input" placeholder="Size needed (e.g. 10×14)" value={form.size} onChange={e=>setForm({...form,size:e.target.value})} />
          <input className="form-input" placeholder="Quantity / bundles" value={form.qty} onChange={e=>setForm({...form,qty:e.target.value})} />
          <input className="form-input form-full" placeholder="Special requirement (color, print, custom size...)" value={form.note} onChange={e=>setForm({...form,note:e.target.value})} />
        </div>
        <button type="submit" className="submit-btn">Send enquiry for {product}</button>
        {submitted && <div className="success-msg show">✓ WhatsApp is opening — just tap Send to reach us!</div>}
      </form>
    </div>
  );
}

function ProductCard({ id, title, subtitle, badge, children, product }) {
  return (
    <div id={id} className="card" style={{marginBottom:24}}>
      <div className="card-header">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        {badge && <span className="pill">{badge}</span>}
      </div>
      <div className="card-body">
        {children}
        <EnquiryForm product={product || title} />
      </div>
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState('all');
  const filters = ['all','d-cut','u-cut','garbage','pouches','butter','granules'];
  const filterLabels = {'all':'All products','d-cut':'D-Cut bags','u-cut':'U/W-Cut bags','garbage':'Garbage bags','pouches':'Pouches','butter':'Butter covers','granules':'Bio granules'};

  const show = (id) => active === 'all' || active === id;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Our biodegradable products</h1>
          <p className="section-sub">100% organic · BPA Free · DRDO certified · Size & color customization available</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {filters.map(f => (
              <button key={f} onClick={()=>setActive(f)}
                style={{padding:'6px 16px',borderRadius:20,border:'1.5px solid',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--font-body)',
                  background: active===f ? 'var(--green-dark)' : '#fff',
                  color: active===f ? '#fff' : 'var(--green-dark)',
                  borderColor: active===f ? 'var(--green-dark)' : '#c0dda0'}}>
                {filterLabels[f]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'40px 0'}}>
        <div className="container">

          {show('d-cut') && (
            <ProductCard id="d-cut" title="D-Cut shape carry bags" subtitle="Ideal for retail shops, kirana stores, supermarkets" badge="7 sizes" product="D-Cut bags">
              <table className="spec-table">
                <thead><tr><th>Size (inch)</th><th>Microns</th><th>Pcs per bundle</th></tr></thead>
                <tbody>
                  {[['8×12',35,180],['10×14',35,110],['10×15',35,105],['11×18',40,70],['12×16',45,60],['13×18',45,50],['16×24',40,40]].map(r=>(
                    <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>
                  ))}
                </tbody>
              </table>
            </ProductCard>
          )}

          {show('u-cut') && (
            <ProductCard id="u-cut" title="U/W-Cut shape carry bags" subtitle="Grocery, retail, hospitals — widest size range" badge="14 sizes" product="U/W-Cut bags">
              <table className="spec-table">
                <thead><tr><th>Size (inch)</th><th>Microns</th><th>Pcs per bundle</th><th>Load capacity</th></tr></thead>
                <tbody>
                  {[['8×10',30,200,'0.500 kg'],['8×10',35,180,'0.750 kg'],['10×12',30,160,'1.000 kg'],['10×12',35,145,'1.500 kg'],
                    ['11×14',30,120,'2.000 kg'],['11×14',40,105,'2.500 kg'],['13×16',35,85,'3.000 kg'],['13×16',40,70,'3.500 kg'],
                    ['16×20',40,45,'5.000 kg'],['16×20',45,40,'6.000 kg'],['17×23',45,35,'7.000 kg'],['20×24',50,25,'8.000 kg'],
                    ['24×30',50,20,'9.000 kg'],['27×30',50,18,'10.000 kg']].map(r=>(
                    <tr key={r[0]+r[1]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
                  ))}
                </tbody>
              </table>
            </ProductCard>
          )}

          {show('garbage') && (
            <ProductCard id="garbage" title="Garbage bags" subtitle="Hospitals, restaurants, offices, municipal use" badge="8 sizes" product="Garbage bags">
              <table className="spec-table">
                <thead><tr><th>Size (inch)</th><th>Microns</th><th>Pcs per bundle</th><th>Load capacity</th></tr></thead>
                <tbody>
                  {[['17×19',30,70,'1.000 kg'],['19×22',35,40,'3.000 kg'],['22×35',40,18,'7.000 kg'],['28×36',50,11,'8.000 kg'],
                    ['30×38',50,10,'10.000 kg'],['30×42',50,9,'12.000 kg'],['30×50',50,7,'18.000 kg'],['35×45',40,8,'15.000 kg']].map(r=>(
                    <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
                  ))}
                </tbody>
              </table>
            </ProductCard>
          )}

          {show('pouches') && (
            <div id="pouches" className="card" style={{marginBottom:24}}>
              <div className="card-header"><div><h3>Pouches & grocery bags</h3><p>Packaging, food, grocery — multiple sizes</p></div></div>
              <div className="card-body">
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:16}}>
                  <div>
                    <h4 style={{fontSize:14,fontWeight:600,color:'var(--green-dark)',marginBottom:10}}>Pouches</h4>
                    <table className="spec-table">
                      <thead><tr><th>Size</th><th>Microns</th><th>Pcs</th><th>Load</th></tr></thead>
                      <tbody>
                        {[['4×6',40,500,'50g'],['5×7',40,400,'50g'],['7×10',35,220,'100g'],['8×11',35,200,'150g']].map(r=>(
                          <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 style={{fontSize:14,fontWeight:600,color:'var(--green-dark)',marginBottom:10}}>Grocery bags</h4>
                    <table className="spec-table">
                      <thead><tr><th>Size</th><th>Microns</th><th>Pcs</th><th>Load</th></tr></thead>
                      <tbody>
                        {[['5×8',30,450,'0.100 kg'],['6×9',30,250,'0.250 kg'],['7×10',30,220,'0.500 kg'],['8×12',30,180,'1.000 kg'],
                          ['9×15',35,145,'2.000 kg'],['10×17',40,110,'3.000 kg'],['13×20',45,55,'5.000 kg'],['16×24',45,40,'10.000 kg']].map(r=>(
                          <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <EnquiryForm product="Pouches / Grocery bags" />
              </div>
            </div>
          )}

          {show('butter') && (
            <ProductCard id="butter" title="Butter covers" subtitle="Dairy & food industry" badge="2 sizes" product="Butter covers">
              <table className="spec-table">
                <thead><tr><th>Size (inch)</th><th>Microns</th><th>Pcs per bundle</th></tr></thead>
                <tbody>
                  {[['9×9',30,400],['12×12',30,350]].map(r=>(
                    <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>
                  ))}
                </tbody>
              </table>
            </ProductCard>
          )}

          {show('granules') && (
            <div id="granules" className="card" style={{marginBottom:24}}>
              <div className="card-header"><div><h3>Bio compound granules</h3><p>Raw material for manufacturers</p></div></div>
              <div className="card-body">
                <p style={{fontSize:14,color:'#555',lineHeight:1.7,marginBottom:16}}>
                  PBAT-based fillers & granules. Raw material for manufacturers seeking to produce their own biodegradable bags. Available in bulk quantities. Contact us for grade specifications and pricing.
                </p>
                <EnquiryForm product="Bio compound granules" />
              </div>
            </div>
          )}

          {/* Bottom bar */}
          <div style={{background:'var(--green-pale)',border:'1px solid #c8e0a0',borderRadius:12,padding:'20px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
            <div>
              <div style={{fontWeight:600,fontSize:15,color:'var(--green-dark)'}}>Need a custom size or color?</div>
              <div style={{fontSize:13,color:'#666'}}>We manufacture to order — minimum quantities apply.</div>
            </div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <Link to="/customisation" className="btn-primary" style={{fontSize:13,padding:'9px 18px'}}>Request customization</Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{fontSize:13,padding:'9px 18px'}}>WhatsApp for bulk quote</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
