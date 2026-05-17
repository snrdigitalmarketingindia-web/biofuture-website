import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://rdnbio.com/#/products' },
  ],
};

const productListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'RDN Bio Products — Biodegradable Bag Range',
  description: 'DRDO certified 100% biodegradable bags manufactured in Hyderabad, India. BPA-free PBAT organic material.',
  url: 'https://rdnbio.com/#/products',
  itemListElement: [
    { '@type':'ListItem', position:1, item:{ '@type':'Product', name:'D-Cut Biodegradable Carry Bags', description:'D-Cut shape biodegradable carry bags. 7 sizes (8×12 to 16×24 inch), 35–45 microns. Ideal for retail shops, kirana stores, supermarkets. DRDO certified, BPA-free, PBAT material.', image:'https://rdnbio.com/dcut-bag.webp', brand:{'@type':'Brand',name:'BioFuture'}, manufacturer:{'@type':'Organization',name:'RDN Bio Products LLP',url:'https://rdnbio.com'}, material:'PBAT — Polybutylene Adipate Terephthalate', offers:{'@type':'Offer',availability:'https://schema.org/InStock',areaServed:'IN'} } },
    { '@type':'ListItem', position:2, item:{ '@type':'Product', name:'U/W-Cut Biodegradable Carry Bags', description:'U/W-Cut biodegradable carry bags. 14 sizes (8×10 to 27×30 inch), 30–50 microns, load 0.5–10 kg. Ideal for grocery, hospitals, supermarkets.', image:'https://rdnbio.com/ucut-bag.webp', brand:{'@type':'Brand',name:'BioFuture'}, manufacturer:{'@type':'Organization',name:'RDN Bio Products LLP'}, material:'PBAT', offers:{'@type':'Offer',availability:'https://schema.org/InStock',areaServed:'IN'} } },
    { '@type':'ListItem', position:3, item:{ '@type':'Product', name:'Biodegradable Garbage Bags', description:'Heavy-duty biodegradable garbage bags. 8 sizes (17×19 to 35×45 inch), load 1–18 kg. Ideal for hospitals, restaurants, offices, municipalities.', image:'https://rdnbio.com/garbage-bag.webp', brand:{'@type':'Brand',name:'BioFuture'}, manufacturer:{'@type':'Organization',name:'RDN Bio Products LLP'}, material:'PBAT', offers:{'@type':'Offer',availability:'https://schema.org/InStock',areaServed:'IN'} } },
    { '@type':'ListItem', position:4, item:{ '@type':'Product', name:'Biodegradable Pouches and Grocery Bags', description:'Biodegradable pouches (4×6 to 8×11 inch) and grocery bags (5×8 to 16×24 inch). 12 size variants for food packaging, spices, grocery retail.', image:'https://rdnbio.com/pouches-bag.webp', brand:{'@type':'Brand',name:'BioFuture'}, manufacturer:{'@type':'Organization',name:'RDN Bio Products LLP'}, material:'PBAT', offers:{'@type':'Offer',availability:'https://schema.org/InStock',areaServed:'IN'} } },
    { '@type':'ListItem', position:5, item:{ '@type':'Product', name:'Biodegradable Butter Covers', description:'Food-safe biodegradable butter covers for dairy industry. 2 sizes (9×9 and 12×12 inch), 30 microns. BPA-free.', image:'https://rdnbio.com/butter-bag.webp', brand:{'@type':'Brand',name:'BioFuture'}, manufacturer:{'@type':'Organization',name:'RDN Bio Products LLP'}, material:'PBAT', offers:{'@type':'Offer',availability:'https://schema.org/InStock',areaServed:'IN'} } },
    { '@type':'ListItem', position:6, item:{ '@type':'Product', name:'Bio Compound Granules PBAT', description:'PBAT-based bio compound granules and fillers for manufacturers. Raw material for producing biodegradable bags. Bulk quantities available.', image:'https://rdnbio.com/granules.webp', manufacturer:{'@type':'Organization',name:'RDN Bio Products LLP'}, offers:{'@type':'Offer',availability:'https://schema.org/InStock',areaServed:'IN'} } },
  ],
};

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27d%20like%20a%20bulk%20quote%20for%20biodegradable%20bags%20from%20RDN%20Bio%20Products";

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/>
  </svg>
);

function waLink(product) {
  return `https://wa.me/917301222666?text=${encodeURIComponent(`Hi, I'd like to enquire about ${product}.`)}`;
}

function ProductCard({ id, title, subtitle, badge, photo, industryLink, children }) {
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
        <div className="product-card-inner">
          {photo && (
            <div className="product-card-img">
              <img src={photo} alt={title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'contain'}} />
            </div>
          )}
          <div className="product-card-content">
            {children}
            <div style={{display:'flex',gap:10,flexWrap:'wrap',alignItems:'center',marginTop:16}}>
              <a href={waLink(title)} target="_blank" rel="noreferrer" className="btn-wa" style={{fontSize:13,padding:'9px 18px',display:'inline-flex',alignItems:'center',gap:7}}>
                {WA_ICON} Quick enquiry on WhatsApp
              </a>
              {industryLink && (
                <Link to={industryLink.to} style={{fontSize:13,fontWeight:600,color:'var(--green-mid)',textDecoration:'none'}}>
                  {industryLink.label} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState({ name:'', phone:'', product:'', size:'', qty:'', note:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like to enquire about RDN Bio Products.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Product: ${form.product}`,
      form.size ? `Size: ${form.size}` : null,
      form.qty  ? `Quantity: ${form.qty}` : null,
      form.note ? `Special requirement: ${form.note}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name:'', phone:'', product:'', size:'', qty:'', note:'' });
  };

  return (
    <div className="enquiry-form" style={{maxWidth:640,margin:'0 auto'}}>
      <h3 style={{marginBottom:6}}>Send an enquiry</h3>
      <p style={{fontSize:13,color:'#777',marginBottom:20}}>Choose your product from the dropdown — we'll reply on WhatsApp within 1 hour.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input className="form-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
          <input className="form-input" placeholder="WhatsApp number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
          <select className="form-input" value={form.product} onChange={e=>setForm({...form,product:e.target.value})} required>
            <option value="">Select product</option>
            <option>D-Cut bags</option>
            <option>U/W-Cut bags</option>
            <option>Garbage bags</option>
            <option>Pouches</option>
            <option>Grocery bags</option>
            <option>Butter covers</option>
            <option>Bio compound granules</option>
            <option>Multiple / Other</option>
          </select>
          <input className="form-input" placeholder="Size needed (e.g. 10×14 inch)" value={form.size} onChange={e=>setForm({...form,size:e.target.value})} />
          <input className="form-input" placeholder="Quantity / bundles" value={form.qty} onChange={e=>setForm({...form,qty:e.target.value})} />
          <input className="form-input form-full" placeholder="Special requirement (color, custom print, custom size...)" value={form.note} onChange={e=>setForm({...form,note:e.target.value})} />
        </div>
        <button type="submit" className="submit-btn">Send enquiry via WhatsApp</button>
        {submitted && <div className="success-msg show">✓ WhatsApp is opening — just tap Send to reach us!</div>}
      </form>
    </div>
  );
}

export default function Products() {
  useEffect(() => {
    document.title = 'Biodegradable Bags — D-Cut, U-Cut, Garbage Bags, Pouches | Manufacturer | RDN Bio Products Hyderabad';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Buy DRDO certified biodegradable D-Cut bags (7 sizes), U/W-Cut bags (14 sizes), garbage bags (8 sizes), pouches & butter covers. Manufacturer in Hyderabad. Bulk orders. Pan India delivery.';
  }, []);
  const [active, setActive] = useState('all');
  const enquiryRef = useRef(null);
  const filters = ['all','d-cut','u-cut','garbage','pouches','butter','granules'];
  const filterLabels = {'all':'All products','d-cut':'D-Cut bags','u-cut':'U/W-Cut bags','garbage':'Garbage bags','pouches':'Pouches','butter':'Butter covers','granules':'Bio granules'};

  const show = (id) => active === 'all' || active === id;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(productListSchema)}} />
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
            <ProductCard id="d-cut" title="D-Cut shape carry bags" subtitle="Ideal for retail shops, kirana stores, supermarkets" badge="7 sizes" photo="dcut-bag.webp" industryLink={{to:'/biodegradable-carry-bags',label:'🛒 Full carry bag guide for retail & kirana'}}>
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
            <ProductCard id="u-cut" title="U/W-Cut shape carry bags" subtitle="Grocery, retail, hospitals — widest size range" badge="14 sizes" photo="ucut-bag.webp" industryLink={{to:'/institutional-packaging',label:'🏥 Bulk institutional supply guide'}}>
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
            <ProductCard id="garbage" title="Garbage bags" subtitle="Hospitals, restaurants, offices, municipal use" badge="8 sizes" photo="garbage-bag.webp" industryLink={{to:'/institutional-packaging',label:'🏥 Institutional bulk packaging solutions'}}>
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
              <div className="card-header"><div><h3>Pouches & grocery bags</h3><p>Packaging, food, grocery — multiple sizes</p></div><span className="pill">12 sizes</span></div>
              <div className="card-body">
                <div className="product-card-inner">
                  <div className="product-card-img" style={{display:'flex',flexDirection:'column',gap:8}}>
                    <img src="pouches-bag.webp" alt="Pouches" style={{width:'100%',height:'50%',objectFit:'contain'}} />
                    <img src="pouches2-bag.webp" alt="Grocery bags" style={{width:'100%',height:'50%',objectFit:'contain'}} />
                  </div>
                  <div className="product-card-content">
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
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
                    <div style={{display:'flex',gap:10,flexWrap:'wrap',alignItems:'center',marginTop:4}}>
                      <a href={waLink('Pouches / Grocery bags')} target="_blank" rel="noreferrer" className="btn-wa" style={{fontSize:13,padding:'9px 18px',display:'inline-flex',alignItems:'center',gap:7}}>
                        {WA_ICON} Quick enquiry on WhatsApp
                      </a>
                      <Link to="/food-packaging-solutions" style={{fontSize:13,fontWeight:600,color:'var(--green-mid)',textDecoration:'none'}}>🍽️ Food packaging solutions →</Link>
                      <Link to="/temple-packaging-solutions" style={{fontSize:13,fontWeight:600,color:'#e65100',textDecoration:'none'}}>🛕 Temple prasadam packaging →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {show('butter') && (
            <ProductCard id="butter" title="Butter covers" subtitle="Dairy & food industry" badge="2 sizes" photo="butter-bag.webp" industryLink={{to:'/butter-sheets-food-wrapping',label:'🧈 Full butter sheets & wrapping guide'}}>
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
              <div className="card-header"><div><h3>Bio compound granules</h3><p>Raw material for manufacturers</p></div><span className="pill">Fillers & PBAT</span></div>
              <div className="card-body">
                <div className="product-card-inner">
                  <div className="product-card-img">
                    <img src="granules.webp" alt="Bio compound granules" loading="lazy" style={{width:'100%',height:'100%',objectFit:'contain'}} />
                  </div>
                  <div className="product-card-content">
                    <p style={{fontSize:14,color:'#555',lineHeight:1.7,marginBottom:16}}>
                      PBAT-based fillers & granules. Raw material for manufacturers seeking to produce their own biodegradable bags. Available in bulk quantities. Contact us for grade specifications and pricing.
                    </p>
                    <a href={waLink('Bio compound granules')} target="_blank" rel="noreferrer" className="btn-wa" style={{fontSize:13,padding:'9px 18px',display:'inline-flex',alignItems:'center',gap:7}}>
                      {WA_ICON} Quick enquiry on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compliance & Certification */}
          <div style={{background:'#fff',border:'1px solid #d4e8b0',borderRadius:16,padding:'36px 32px',marginBottom:24}}>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:22,color:'var(--green-dark)',marginBottom:8}}>Certifications & Compliance</h2>
            <p style={{fontSize:14,color:'#666',marginBottom:24,lineHeight:1.7}}>Every RDN Bio Products bag is manufactured to meet the strictest safety, biodegradability, and regulatory standards in India.</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16}}>
              {[
                { icon:'🛡️', title:'DRDO Certified Technology', desc:'Manufactured using technology certified by India\'s Defence Research & Development Organisation. Validates biodegradability, non-toxicity, and material safety.' },
                { icon:'⚖️', title:'Plastic Waste Management Rules 2021', desc:'Fully compliant with India\'s single-use plastic ban. PBAT bags are explicitly permitted as a legal alternative. Protects your business from fines.' },
                { icon:'🌿', title:'100% BPA-Free', desc:'No Bisphenol A (BPA) or other harmful chemicals. Safe for food contact, pharmaceutical use, and direct contact with edible items.' },
                { icon:'♻️', title:'Biodegrades in ~180 days', desc:'Under composting conditions — versus 400–1,000 years for conventional plastic. Returns to CO₂, water, and organic biomass with zero toxic residue.' },
              ].map(c => (
                <div key={c.title} style={{background:'var(--green-pale)',border:'1px solid #d4e8b0',borderRadius:12,padding:'20px 18px'}}>
                  <div style={{fontSize:28,marginBottom:10}}>{c.icon}</div>
                  <div style={{fontWeight:700,fontSize:14,color:'var(--green-dark)',marginBottom:6}}>{c.title}</div>
                  <div style={{fontSize:12,color:'#666',lineHeight:1.6}}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bulk Order Process */}
          <div style={{background:'var(--green-dark)',borderRadius:16,padding:'36px 32px',marginBottom:24,color:'#fff'}}>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:22,color:'#fff',marginBottom:8}}>How to place a bulk order</h2>
            <p style={{fontSize:14,color:'rgba(255,255,255,0.75)',marginBottom:28,lineHeight:1.7}}>Simple, transparent, and fast — from enquiry to delivery in 3–10 working days.</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:20}}>
              {[
                { num:'01', title:'Send enquiry', desc:'WhatsApp or fill the form below — product type, size, quantity, and delivery state.' },
                { num:'02', title:'Receive quotation', desc:'We send pricing, availability, and delivery timeline within 1 hour (Mon–Sat, 9am–6pm).' },
                { num:'03', title:'Confirm & pay', desc:'Confirm order and make payment via UPI, NEFT, or bank transfer. GST invoice issued.' },
                { num:'04', title:'Delivery to your door', desc:'Standard orders: 3–7 working days. Custom printed: 7–10 working days. Pan India courier.' },
              ].map(s => (
                <div key={s.num} style={{textAlign:'center',padding:'0 8px'}}>
                  <div style={{width:46,height:46,borderRadius:'50%',background:'rgba(255,255,255,0.15)',border:'2px solid rgba(255,255,255,0.4)',color:'#fff',fontWeight:800,fontSize:16,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px'}}>{s.num}</div>
                  <div style={{fontWeight:700,fontSize:14,color:'#fff',marginBottom:6}}>{s.title}</div>
                  <div style={{fontSize:12,color:'rgba(255,255,255,0.7)',lineHeight:1.6}}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Single shared enquiry form */}
          <div ref={enquiryRef} id="enquiry" style={{background:'var(--green-pale)',border:'1px solid #c8e0a0',borderRadius:16,padding:'36px 32px',marginBottom:24}}>
            <EnquiryForm />
          </div>

          {/* Bottom bar */}
          <div style={{background:'#fff',border:'1px solid #c8e0a0',borderRadius:12,padding:'20px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
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
