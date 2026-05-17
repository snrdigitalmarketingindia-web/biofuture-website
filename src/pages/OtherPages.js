import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20custom%20products";

const bcBase = { '@context': 'https://schema.org', '@type': 'BreadcrumbList' };
const bcHome = { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' };
const customisationBreadcrumb = { ...bcBase, itemListElement: [bcHome, { '@type': 'ListItem', position: 2, name: 'Customisation', item: 'https://rdnbio.com/#/customisation' }] };
const galleryBreadcrumb      = { ...bcBase, itemListElement: [bcHome, { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://rdnbio.com/#/gallery' }] };
const contactBreadcrumb      = { ...bcBase, itemListElement: [bcHome, { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://rdnbio.com/#/contact' }] };

const customOptions = [
  {
    icon: '📐',
    title: 'Custom Sizes',
    desc: 'Need a size not in our standard range? We manufacture to any dimension you specify — width, height, and gusset.',
  },
  {
    icon: '🎨',
    title: 'Custom Colors',
    desc: 'Available in white, green, black, blue, red, yellow and more. Pantone color matching for brand consistency.',
  },
  {
    icon: '🖨️',
    title: 'Brand Printing',
    desc: 'Your logo, tagline, and contact details printed directly on the bag. Single or multi-color printing available.',
  },
  {
    icon: '📦',
    title: 'Bulk Orders',
    desc: 'Pricing scales down significantly for bulk. Wholesale rates for distributors, institutions, and retail chains.',
  },
];

const customProducts = [
  {
    name: 'D-Cut Carry Bags',
    sizes: ['8×12', '10×14', '10×15', '11×18', '12×16', '13×18', '16×24'],
    microns: '35 – 45 microns',
    use: 'Retail, kirana stores, boutiques',
  },
  {
    name: 'U/W-Cut Carry Bags',
    sizes: ['8×10', '10×12', '11×14', '13×16', '16×20', '17×23', '20×24', '24×30', '27×30'],
    microns: '30 – 50 microns',
    use: 'Grocery, hospitals, supermarkets',
  },
  {
    name: 'Garbage Bags',
    sizes: ['17×19', '19×22', '22×35', '28×36', '30×38', '30×42', '30×50', '35×45'],
    microns: '30 – 50 microns',
    use: 'Offices, hotels, municipalities',
  },
  {
    name: 'Pouches',
    sizes: ['4×6', '5×7', '7×10', '8×11'],
    microns: '35 – 40 microns',
    use: 'Food packaging, spices, retail',
  },
  {
    name: 'Grocery Bags',
    sizes: ['5×8', '6×9', '7×10', '8×12', '9×15', '10×17', '13×20', '16×24'],
    microns: '30 – 45 microns',
    use: 'Supermarkets, wet markets, FMCG',
  },
  {
    name: 'Butter Covers',
    sizes: ['9×9', '12×12'],
    microns: '30 microns',
    use: 'Dairy industry, food packaging',
  },
];

const steps = [
  { num: '01', title: 'Share your requirements', desc: 'Tell us the product type, size, color, quantity, and any printing needs via WhatsApp or the form below.' },
  { num: '02', title: 'We prepare a sample', desc: 'Our team prepares a sample within 2–3 working days. We ship it to you for approval before bulk production.' },
  { num: '03', title: 'Bulk production & delivery', desc: 'Once approved, we produce your order and deliver pan India. Typical lead time is 7–10 working days.' },
];

export function Customisation() {
  useEffect(() => {
    document.title = 'Custom Biodegradable Bags | Size, Color & Brand Printing | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Custom biodegradable bags with your brand name, logo, size, and color. D-Cut, U-Cut, garbage bags, pouches — any spec. Bulk orders. DRDO certified. Hyderabad manufacturer. Pan India delivery.';
  }, []);
  const [form, setForm] = useState({ name:'', phone:'', product:'', size:'', qty:'', color:'', print:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I need custom biodegradable bags from RDN Bio Products.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Product: ${form.product}`,
      form.size  ? `Size: ${form.size}`           : null,
      form.qty   ? `Quantity: ${form.qty}`         : null,
      form.color ? `Color: ${form.color}`          : null,
      form.print ? `Printing needs: ${form.print}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name:'', phone:'', product:'', size:'', qty:'', color:'', print:'' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(customisationBreadcrumb)}} />
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16,flexWrap:'wrap'}}>
            <div className="drdo-badge">✓ DRDO Certified Technology</div>
            <div className="drdo-badge" style={{background:'#5cb81c',borderColor:'#5cb81c',color:'#fff'}}>I am NOT Plastic</div>
          </div>
          <h1 className="section-title">We craft to your specs</h1>
          <p style={{fontSize:16,color:'#555',maxWidth:580,lineHeight:1.7}}>
            Size, color, and brand printing — all customizable. Used by kirana stores, hospitals, temples, restaurants, and institutions across India.
          </p>
          <div style={{display:'flex',gap:12,marginTop:24,flexWrap:'wrap'}}>
            <a href="#custom-form" className="btn-primary">Request a custom quote</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
              WhatsApp now
            </a>
          </div>
        </div>
      </section>

      {/* What we customize */}
      <section style={{padding:'52px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign:'center'}}>What we customise</h2>
          <p className="section-sub" style={{textAlign:'center'}}>Every order can be tailored — no minimum too large, no spec too specific</p>
          <div className="custom-options-grid">
            {customOptions.map(o => (
              <div key={o.title} style={{background:'var(--green-pale)',border:'1px solid #d4e8b0',borderRadius:14,padding:'24px 20px'}}>
                <div style={{fontSize:32,marginBottom:12}}>{o.icon}</div>
                <div style={{fontWeight:700,fontSize:16,color:'var(--green-dark)',marginBottom:8}}>{o.title}</div>
                <div style={{fontSize:13,color:'#666',lineHeight:1.65}}>{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products available for customisation */}
      <section style={{padding:'52px 0',background:'var(--green-pale)',borderBottom:'1px solid #d4e8b0'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign:'center'}}>Products available for customisation</h2>
          <p className="section-sub" style={{textAlign:'center'}}>Standard sizes shown — custom sizes available on request</p>
          <div className="custom-products-grid">
            {customProducts.map(p => (
              <div key={p.name} className="card">
                <div className="card-header">
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.use}</p>
                  </div>
                  <div style={{background:'#5cb81c',color:'#fff',fontSize:10,fontWeight:700,padding:'4px 10px',borderRadius:8,whiteSpace:'nowrap'}}>{p.microns}</div>
                </div>
                <div className="card-body">
                  <div style={{fontSize:11,color:'#aaa',marginBottom:8,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>Available sizes (inches)</div>
                  <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                    {p.sizes.map(s => (
                      <span key={s} style={{background:'var(--green-light)',color:'var(--green-dark)',fontSize:12,fontWeight:600,padding:'3px 10px',borderRadius:6,border:'1px solid #c8e0a0'}}>{s}</span>
                    ))}
                    <span style={{background:'#5cb81c',color:'#fff',fontSize:12,fontWeight:600,padding:'3px 10px',borderRadius:6}}>+ custom</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{padding:'52px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign:'center'}}>How it works</h2>
          <p className="section-sub" style={{textAlign:'center'}}>Simple 3-step process from enquiry to delivery</p>
          <div className="custom-steps">
            {steps.map((s, i) => (
              <div key={i} style={{display:'flex',gap:20,alignItems:'flex-start'}}>
                <div style={{width:52,height:52,borderRadius:'50%',background:'#5cb81c',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontSize:20,fontWeight:700,flexShrink:0}}>{s.num}</div>
                <div style={{paddingTop:4}}>
                  <div style={{fontWeight:700,fontSize:16,color:'var(--green-dark)',marginBottom:6}}>{s.title}</div>
                  <div style={{fontSize:13,color:'#666',lineHeight:1.65}}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom enquiry form */}
      <section id="custom-form" style={{padding:'56px 0'}}>
        <div className="container">
          <div className="enquiry-grid">
            <div>
              <h2 className="section-title">Request a custom quote</h2>
              <p style={{fontSize:15,color:'#666',marginBottom:24,lineHeight:1.7}}>Tell us your requirements and we'll WhatsApp you a quote within 24 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input className="form-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
                  <input className="form-input" placeholder="WhatsApp number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
                  <select className="form-input" value={form.product} onChange={e=>setForm({...form,product:e.target.value})} required>
                    <option value="">Select product</option>
                    <option>D-Cut Carry Bags</option>
                    <option>U/W-Cut Carry Bags</option>
                    <option>Garbage Bags</option>
                    <option>Pouches</option>
                    <option>Grocery Bags</option>
                    <option>Butter Covers</option>
                    <option>Multiple products</option>
                  </select>
                  <input className="form-input" placeholder="Size needed (e.g. 12×16 or custom)" value={form.size} onChange={e=>setForm({...form,size:e.target.value})} />
                  <input className="form-input" placeholder="Quantity / kg required" value={form.qty} onChange={e=>setForm({...form,qty:e.target.value})} required />
                  <input className="form-input" placeholder="Color (e.g. white, green, black)" value={form.color} onChange={e=>setForm({...form,color:e.target.value})} />
                  <input className="form-input form-full" placeholder="Printing / branding requirements (optional)" value={form.print} onChange={e=>setForm({...form,print:e.target.value})} />
                </div>
                <button type="submit" className="submit-btn">Send custom enquiry via WhatsApp</button>
                {submitted && <div className="success-msg show">✓ WhatsApp is opening — just tap Send to reach us!</div>}
              </form>
            </div>
            <div>
              <div style={{background:'var(--green-pale)',border:'1px solid #d4e8b0',borderRadius:14,padding:'24px',marginBottom:20}}>
                <div style={{fontWeight:700,fontSize:16,color:'var(--green-dark)',marginBottom:16}}>Why bulk buyers choose us</div>
                {[
                  '100% biodegradable — meets government mandates',
                  'DRDO certified technology',
                  'BPA free & non-toxic — safe for food contact',
                  'Custom size, color, and brand printing',
                  'Pan India delivery — Hyderabad to your doorstep',
                  'Competitive bulk pricing with volume discounts',
                  'Typically responds within 1 hour on WhatsApp',
                ].map((pt, i) => (
                  <div key={i} style={{display:'flex',gap:10,marginBottom:10,alignItems:'flex-start'}}>
                    <span style={{color:'#5cb81c',fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>
                    <span style={{fontSize:13,color:'#555',lineHeight:1.5}}>{pt}</span>
                  </div>
                ))}
              </div>
              <div style={{background:'#5cb81c',borderRadius:14,padding:'20px 24px',color:'#fff'}}>
                <div style={{fontWeight:700,fontSize:15,marginBottom:4}}>Prefer to talk directly?</div>
                <div style={{fontSize:13,opacity:0.88,marginBottom:14}}>Our team is available Mon–Sat, 9am to 6pm.</div>
                <a href="tel:+917301222666" className="btn-call" style={{marginBottom:6,width:'100%',justifyContent:'center',display:'flex'}}>📞 Call +91-7301222666</a>
                <a href="tel:+917301777444" className="btn-call btn-call--secondary" style={{marginBottom:14,width:'100%',justifyContent:'center',display:'flex'}}>📞 Call +91-7301777444</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{background:'#fff',color:'#2a560d',fontSize:13}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#2a560d"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
                  WhatsApp us now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const GC = '#5cb81c';

const galleryItems = [
  {
    name: 'D-Cut Bags',
    label: 'Carry Bags',
    desc: '7 size variants · Retail & kirana stores',
    photo: 'dcut-bag.png',
    svg: (
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="16" y="36" width="88" height="96" rx="8" fill="white" opacity="0.93"/>
        <circle cx="60" cy="36" r="20" fill={GC}/>
        <path d="M40 36 Q60 10 80 36" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
        <text x="60" y="86" textAnchor="middle" fill="#2a560d" fontSize="14" fontWeight="700" fontFamily="Arial,sans-serif">BioFuture</text>
        <text x="60" y="102" textAnchor="middle" fill="#3a7a12" fontSize="8" fontFamily="Arial,sans-serif">Save the Earth for Tomorrow</text>
      </svg>
    )
  },
  {
    name: 'Garbage Bags',
    label: 'Waste Management',
    desc: '8 size variants · Offices & restaurants',
    photo: 'garbage-bag.png',
    svg: (
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <path d="M60 6 C51 6 48 17 45 23 L35 30 Q60 40 85 30 L75 23 C72 17 69 6 60 6Z" fill="white" opacity="0.88"/>
        <path d="M28 40 Q24 78 29 104 Q38 134 60 134 Q82 134 91 104 Q96 78 92 40Z" fill="white" opacity="0.93"/>
        <text x="60" y="82" textAnchor="middle" fill="#2a560d" fontSize="14" fontWeight="700" fontFamily="Arial,sans-serif">BioFuture</text>
        <text x="60" y="97" textAnchor="middle" fill="#3a7a12" fontSize="8" fontFamily="Arial,sans-serif">Save the Earth for Tomorrow</text>
      </svg>
    )
  },
  {
    name: 'U/W-Cut Bags',
    label: 'Grocery Bags',
    desc: '14 size variants · Hospitals & grocery',
    photo: 'ucut-bag.png',
    svg: (
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="16" y="44" width="88" height="88" rx="8" fill="white" opacity="0.93"/>
        <path d="M28 44 Q20 14 34 13 Q50 11 44 44" fill="none" stroke="white" strokeWidth="9" strokeLinecap="round"/>
        <path d="M92 44 Q100 14 86 13 Q70 11 76 44" fill="none" stroke="white" strokeWidth="9" strokeLinecap="round"/>
        <text x="60" y="96" textAnchor="middle" fill="#2a560d" fontSize="14" fontWeight="700" fontFamily="Arial,sans-serif">BioFuture</text>
        <text x="60" y="112" textAnchor="middle" fill="#3a7a12" fontSize="8" fontFamily="Arial,sans-serif">Save the Earth for Tomorrow</text>
      </svg>
    )
  },
  {
    name: 'Pouches',
    label: 'Grocery Bags',
    desc: 'Multiple sizes · Packaging & food',
    photo: 'pouches-bag.png',
    svg: (
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="34" y="28" width="78" height="84" rx="8" fill="white" opacity="0.55"/>
        <rect x="22" y="18" width="78" height="84" rx="8" fill="white" opacity="0.72"/>
        <rect x="10" y="8"  width="78" height="84" rx="8" fill="white" opacity="0.93"/>
        <text x="49" y="55" textAnchor="middle" fill="#2a560d" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif">BioFuture</text>
        <text x="49" y="70" textAnchor="middle" fill="#3a7a12" fontSize="7.5" fontFamily="Arial,sans-serif">Save the Earth for Tomorrow</text>
      </svg>
    )
  },
  {
    name: 'Butter Covers',
    label: 'Dairy & Food',
    desc: '2 sizes · Dairy & food industry',
    photo: 'butter-bag.png',
    svg: (
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="10" y="104" width="100" height="13" rx="4" fill="white" opacity="0.44"/>
        <rect x="10" y="89"  width="100" height="16" rx="4" fill="white" opacity="0.55"/>
        <rect x="10" y="73"  width="100" height="17" rx="4" fill="white" opacity="0.66"/>
        <rect x="10" y="56"  width="100" height="18" rx="4" fill="white" opacity="0.77"/>
        <rect x="10" y="38"  width="100" height="19" rx="4" fill="white" opacity="0.88"/>
        <rect x="10" y="18"  width="100" height="21" rx="4" fill="white" opacity="0.95"/>
        <text x="60" y="32"  textAnchor="middle" fill="#2a560d" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif">BioFuture</text>
        <text x="60" y="44"  textAnchor="middle" fill="#3a7a12" fontSize="7.5" fontFamily="Arial,sans-serif">Save the Earth for Tomorrow</text>
      </svg>
    )
  },
  {
    name: 'Bio Compound Granules',
    label: 'Fillers & PBAT',
    desc: 'PBAT fillers · For manufacturers',
    photo: 'granules.png',
    svg: (
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <text x="60" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">Fillers &amp; PBAT</text>
        <ellipse cx="22"  cy="126" rx="10" ry="6.5" fill="white" opacity="0.76"/>
        <ellipse cx="42"  cy="130" rx="10" ry="6.5" fill="white" opacity="0.76"/>
        <ellipse cx="62"  cy="129" rx="10" ry="6.5" fill="white" opacity="0.76"/>
        <ellipse cx="82"  cy="127" rx="10" ry="6.5" fill="white" opacity="0.76"/>
        <ellipse cx="100" cy="124" rx="9"  ry="6"   fill="white" opacity="0.72"/>
        <ellipse cx="32"  cy="112" rx="10" ry="6.5" fill="white" opacity="0.81"/>
        <ellipse cx="52"  cy="109" rx="11" ry="7"   fill="white" opacity="0.81"/>
        <ellipse cx="72"  cy="111" rx="10" ry="6.5" fill="white" opacity="0.81"/>
        <ellipse cx="90"  cy="109" rx="9"  ry="6"   fill="white" opacity="0.78"/>
        <ellipse cx="40"  cy="95"  rx="10" ry="6.5" fill="white" opacity="0.85"/>
        <ellipse cx="60"  cy="92"  rx="12" ry="7.5" fill="white" opacity="0.85"/>
        <ellipse cx="80"  cy="94"  rx="10" ry="6.5" fill="white" opacity="0.83"/>
        <ellipse cx="50"  cy="79"  rx="10" ry="6.5" fill="white" opacity="0.88"/>
        <ellipse cx="70"  cy="77"  rx="10" ry="6.5" fill="white" opacity="0.88"/>
        <ellipse cx="60"  cy="64"  rx="9"  ry="6"   fill="white" opacity="0.92"/>
      </svg>
    )
  },
  {
    name: 'Grocery Bags',
    label: 'Carry Bags',
    desc: '8 size variants · Supermarkets & wet markets',
    photo: 'pouches2-bag.png',
    svg: (
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="22" y="28" width="78" height="84" rx="8" fill="white" opacity="0.55"/>
        <rect x="14" y="18" width="78" height="84" rx="8" fill="white" opacity="0.72"/>
        <rect x="6"  y="8"  width="78" height="84" rx="8" fill="white" opacity="0.93"/>
        <text x="45" y="52" textAnchor="middle" fill="#2a560d" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif">BioFuture</text>
        <text x="45" y="67" textAnchor="middle" fill="#3a7a12" fontSize="7.5" fontFamily="Arial,sans-serif">Save the Earth for Tomorrow</text>
      </svg>
    )
  },
];

export function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | Biodegradable Bags Photos | RDN Bio Products Hyderabad';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Gallery of RDN Bio Products biodegradable bags — D-Cut carry bags, garbage bags, U-Cut bags, pouches, butter covers and bio granules. DRDO certified. Hyderabad manufacturer.';
  }, []);
  const [active, setActive] = useState(null);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(galleryBreadcrumb)}} />
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="drdo-badge" style={{marginBottom:14}}>✓ DRDO Certified Technology</div>
          <h1 className="section-title">Our Products</h1>
          <p style={{fontSize:16,color:'#555',maxWidth:560,lineHeight:1.7}}>
            100% biodegradable packaging — certified safe, plant-based, and eco-friendly. Trusted across India.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section style={{padding:'52px 0 64px'}}>
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="gallery-card"
                onClick={() => setActive(active === i ? null : i)}
                style={{cursor:'pointer'}}
              >
                {/* image area */}
                <div className="gallery-img-wrap">
                  {item.photo
                    ? <img src={item.photo} alt={item.name} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    : item.svg
                  }
                </div>
                {/* label bar */}
                <div className="gallery-label">
                  <div className="gallery-label-tag">{item.label}</div>
                  <div className="gallery-label-name">{item.name}</div>
                  <div className="gallery-label-desc">{item.desc}</div>
                </div>
                {/* expanded detail */}
                {active === i && (
                  <div className="gallery-detail">
                    <p style={{fontSize:13,color:'#555',marginBottom:12,lineHeight:1.6}}>{item.desc}</p>
                    <Link to="/products" className="btn-outline" style={{fontSize:13,padding:'8px 18px'}}>View full specs →</Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{marginTop:56,background:'#5cb81c',borderRadius:16,padding:'36px 40px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:20}}>
            <div>
              <div style={{fontFamily:'var(--font-display)',fontSize:26,color:'#fff',marginBottom:8}}>Ready to order?</div>
              <div style={{fontSize:14,color:'rgba(255,255,255,0.88)'}}>Get a free quote in 24 hours — WhatsApp or fill the enquiry form.</div>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{background:'#fff',color:'#2a560d'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#2a560d"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
                WhatsApp now
              </a>
              <Link to="/#enquiry" className="btn-primary" style={{background:'rgba(255,255,255,0.18)',border:'1.5px solid rgba(255,255,255,0.5)',color:'#fff'}}>
                Get free quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Biodegradable Bags Supplier Hyderabad | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Contact RDN Bio Products LLP, Hyderabad. Phone: +91-7301222666 / +91-7301777444. Email: rdnbioproductsllp@gmail.com. Located at Karmanghat, Saroornagar, Hyderabad 500035. Mon–Sat 9am–6pm.';
  }, []);
  const [form, setForm] = useState({ name:'', phone:'', email:'', subject:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'm contacting RDN Bio Products.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email   ? `Email: ${form.email}`     : null,
      form.subject ? `Subject: ${form.subject}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name:'', phone:'', email:'', subject:'', message:'' });
  };

  const WA_CONTACT = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20products";

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(contactBreadcrumb)}} />
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Get in touch with us</h1>
          <p style={{fontSize:16,color:'#555',maxWidth:600,lineHeight:1.7}}>
            We're based in Hyderabad and supply pan India. Reach us by WhatsApp, phone, or email — we typically respond within 1 hour during business hours.
          </p>
        </div>
      </section>

      <section style={{padding:'48px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,alignItems:'start'}}>

            {/* Left: contact details + hours */}
            <div>
              <div className="card" style={{marginBottom:20}}>
                <div className="card-header"><h3>Contact details</h3></div>
                <div className="card-body">
                  <div style={{marginBottom:16}}>
                    <a href="tel:+917301222666" className="btn-call" style={{width:'100%',justifyContent:'center',display:'flex',marginBottom:8}}>📞 Call +91-7301222666</a>
                    <a href="tel:+917301777444" className="btn-call btn-call--secondary" style={{width:'100%',justifyContent:'center',display:'flex'}}>📞 Call +91-7301777444</a>
                  </div>
                  {[
                    {icon:'✉',label:'Email',val:'rdnbioproductsllp@gmail.com'},
                    {icon:'📍',label:'Address',val:'#10-01-78/47/5, Srinivasa Nagar Colony, Lingojiguda, Karmanghat, Saroornagar(M), Hyderabad, R.R.Dist., Telangana – 500 035'},
                  ].map((c,i)=>(
                    <div key={i} style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:16}}>
                      <div style={{width:36,height:36,borderRadius:'50%',background:'var(--green-light)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:15}}>{c.icon}</div>
                      <div>
                        <div style={{fontSize:11,color:'#aaa',marginBottom:2}}>{c.label}</div>
                        <div style={{fontSize:13,fontWeight:500,color:'#333',lineHeight:1.5}}>{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="card-header"><h3>Business hours</h3></div>
                <div className="card-body">
                  {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map(d=>(
                    <div key={d} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',borderBottom:'1px solid #f0f5e8',fontSize:13}}>
                      <span style={{color:'#555'}}>{d}</span>
                      <span style={{fontWeight:500,color:'var(--green-dark)'}}>9:00 am – 6:00 pm</span>
                    </div>
                  ))}
                  <div style={{display:'flex',justifyContent:'space-between',padding:'7px 0',fontSize:13}}>
                    <span style={{color:'#555'}}>Sunday</span>
                    <span style={{color:'#aaa'}}>Closed</span>
                  </div>
                  <p style={{fontSize:11,color:'#aaa',marginTop:10}}>WhatsApp messages received outside hours are replied to the next working day.</p>
                </div>
              </div>
            </div>

            {/* Right: map + form */}
            <div>
              <div className="card" style={{marginBottom:20}}>
                <div className="card-header"><h3>Find us</h3></div>
                <div className="card-body" style={{padding:0}}>
                  <iframe
                    title="RDN Bio Products Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115.89!2d78.5300743!3d17.3456978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99003e3adc29%3A0x8cb137ae52564078!2sRDN%20Bio%20Products%20LLP!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%" height="220" style={{border:0,display:'block'}} allowFullScreen loading="lazy"
                  ></iframe>
                  <div style={{padding:'12px 16px',fontSize:12,color:'#777',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <span>Near Saroornagar · Easy access from ORR & NH-44</span>
                    <a href="https://maps.google.com/?q=Karmanghat+Hyderabad" target="_blank" rel="noreferrer" style={{color:'var(--green-dark)',fontWeight:500,fontSize:12}}>Open in Maps →</a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header"><h3>Send us a message</h3></div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <input className="form-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
                      <input className="form-input" placeholder="WhatsApp number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
                    </div>
                    <input className="form-input" style={{width:'100%',marginBottom:8}} placeholder="Email (optional)" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                    <input className="form-input" style={{width:'100%',marginBottom:8}} placeholder="Subject — e.g. bulk order, product query" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} required />
                    <textarea className="form-input" style={{width:'100%',height:80,resize:'vertical'}} placeholder="Your message..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
                    <button type="submit" className="submit-btn">Send message</button>
                    {submitted && <div className="success-msg show">✓ WhatsApp is opening — just tap Send to reach us!</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div style={{background:'var(--green-pale)',border:'1px solid #c8e0a0',borderRadius:12,padding:'24px',marginTop:32,display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
            <div>
              <div style={{fontWeight:600,fontSize:17,color:'var(--green-dark)',marginBottom:4}}>Prefer WhatsApp? So do we.</div>
              <div style={{fontSize:13,color:'#666'}}>Send us a message and we'll reply within the hour — Mon to Sat, 9am to 6pm.</div>
            </div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <a href="tel:+917301222666" className="btn-call">📞 Call Now</a>
              <a href={WA_CONTACT} target="_blank" rel="noreferrer" className="btn-wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
