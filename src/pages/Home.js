import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20products";

const products = [
  { name: 'D-Cut bags', desc: '7 size variants', use: 'Retail & kirana stores' },
  { name: 'U/W-Cut bags', desc: '14 size variants', use: 'Grocery & hospitals' },
  { name: 'Garbage bags', desc: '8 size variants', use: 'Offices & restaurants' },
  { name: 'Pouches', desc: 'Multiple sizes', use: 'Packaging & food' },
  { name: 'Butter covers', desc: '2 sizes', use: 'Dairy & food industry' },
  { name: 'Bio granules', desc: 'PBAT fillers', use: 'Manufacturers' },
];

const customers = ['Kirana stores','Supermarkets','Hospitals & clinics','Restaurants & hotels','Temples','Government & institutions','Individual buyers'];

export default function Home() {
  const [form, setForm] = useState({ name:'', phone:'', product:'', qty:'', org:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like a quote from BioFuture.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Product: ${form.product}`,
      form.qty   ? `Quantity: ${form.qty}`   : null,
      form.org   ? `Organisation: ${form.org}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name:'', phone:'', product:'', qty:'', org:'' });
  };

  return (
    <main>
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#f6fbf0 0%,#e8f5d8 100%)',padding:'48px 0 40px',borderBottom:'1px solid #d4e8b0'}}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="drdo-badge" style={{marginBottom:16}}>✓ DRDO Certified Technology</div>
              <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(28px,5vw,42px)',lineHeight:1.2,color:'var(--green-dark)',marginBottom:16}}>
                Bags that care for the Earth — and your business
              </h1>
              <p style={{fontSize:'clamp(14px,2vw,16px)',color:'#555',marginBottom:24,lineHeight:1.7}}>
                100% biodegradable carry bags, garbage bags & covers. Trusted by shops, hospitals, temples & institutions across Hyderabad and pan India.
              </p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <a href="#enquiry" className="btn-primary">Get a free quote</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
                  WhatsApp now
                </a>
              </div>
            </div>
            <div className="hero-img">
              <img src="hero2.png" alt="RDN Bio Products — Biodegradable bags" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:16}} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section style={{padding:'32px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container">
          <div className="badges-grid">
            {[
              {icon:'🌿',title:'100% Organic',sub:'Plant-based material'},
              {icon:'🛡️',title:'BPA Free',sub:'Non toxic & safe'},
              {icon:'♻️',title:'Easy Decomposable',sub:'Eco friendly'},
              {icon:'💰',title:'Cost Effective',sub:'Bulk pricing available'},
            ].map(b => (
              <div key={b.title} style={{textAlign:'center',padding:'16px 12px',background:'var(--green-pale)',borderRadius:12,border:'1px solid #e0efc8'}}>
                <div style={{fontSize:28,marginBottom:8}}>{b.icon}</div>
                <div style={{fontWeight:600,fontSize:14,color:'var(--green-dark)',marginBottom:4}}>{b.title}</div>
                <div style={{fontSize:12,color:'#777'}}>{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section style={{padding:'48px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container">
          <h2 className="section-title">Our products</h2>
          <p className="section-sub">Certified biodegradable packaging for every need</p>
          <div className="products-grid" style={{marginBottom:28}}>
            {products.map(p => (
              <div key={p.name} style={{border:'1px solid #e0efc8',borderRadius:12,padding:'18px',background:'#fff',transition:'border-color 0.2s'}}
                onMouseEnter={e=>e.currentTarget.style.borderColor='var(--green-mid)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='#e0efc8'}>
                <div style={{fontWeight:600,fontSize:15,color:'var(--green-dark)',marginBottom:4}}>{p.name}</div>
                <div style={{fontSize:12,color:'var(--green-mid)',fontWeight:500,marginBottom:6}}>{p.desc}</div>
                <div style={{fontSize:12,color:'#888'}}>{p.use}</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center'}}>
            <Link to="/products" className="btn-outline">View all products with full specs →</Link>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section style={{padding:'40px 0',background:'var(--green-pale)',borderBottom:'1px solid #d4e8b0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title">Trusted by businesses across India</h2>
          <p className="section-sub">From small kirana stores to large institutions — we supply everyone</p>
          <div className="pills-row" style={{justifyContent:'center',marginBottom:12}}>
            {customers.map(c => <span key={c} className="pill">{c}</span>)}
          </div>
          <p style={{fontSize:13,color:'#777'}}>Size & color customization available for bulk orders</p>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" style={{padding:'56px 0'}}>
        <div className="container">
          <div className="enquiry-grid">
            <div>
              <h2 className="section-title">Get a free quote in 24 hours</h2>
              <p style={{fontSize:15,color:'#666',marginBottom:24}}>Tell us what you need — we'll call or WhatsApp you back.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input className="form-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
                  <input className="form-input" placeholder="WhatsApp number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
                  <select className="form-input" value={form.product} onChange={e=>setForm({...form,product:e.target.value})} required>
                    <option value="">Product needed</option>
                    <option>D-Cut bags</option>
                    <option>U/W-Cut bags</option>
                    <option>Garbage bags</option>
                    <option>Pouches</option>
                    <option>Butter covers</option>
                    <option>Bio granules</option>
                    <option>Other / Multiple</option>
                  </select>
                  <input className="form-input" placeholder="Quantity / kg" value={form.qty} onChange={e=>setForm({...form,qty:e.target.value})} />
                  <input className="form-input form-full" placeholder="Organisation / shop name (optional)" value={form.org} onChange={e=>setForm({...form,org:e.target.value})} />
                </div>
                <button type="submit" className="submit-btn">Send enquiry</button>
                {submitted && <div className="success-msg show">✓ Thank you! We'll WhatsApp you back within the hour.</div>}
              </form>
            </div>
            <div>
              <h3 style={{fontSize:18,fontWeight:600,color:'var(--green-dark)',marginBottom:20}}>Or reach us directly</h3>
              {[
                {label:'Phone',val:'+91-7301222666'},
                {label:'Phone',val:'+91-7301777444'},
                {label:'Email',val:'biofuture.rdn@gmail.com'},
              ].map((c,i) => (
                <div key={i} style={{display:'flex',gap:12,marginBottom:16,alignItems:'center'}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:'var(--green-light)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:16}}>
                    {c.label==='Email'?'✉':'📞'}
                  </div>
                  <div>
                    <div style={{fontSize:11,color:'#aaa'}}>{c.label}</div>
                    <div style={{fontSize:14,fontWeight:500,color:'#333'}}>{c.val}</div>
                  </div>
                </div>
              ))}
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{marginTop:8}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
                Chat on WhatsApp
              </a>
              <p style={{fontSize:12,color:'#aaa',marginTop:8}}>Typically replies within 1 hour</p>
              <div style={{marginTop:24,textAlign:'center'}}>
                <img src="logo-badge.png" alt="RDN Bio Products LLP — Biodegradable Bags" style={{width:160,height:160,objectFit:'contain'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
