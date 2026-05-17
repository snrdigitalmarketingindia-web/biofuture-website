import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'What are RDN Bio Products bags made of?', a: 'Our bags are made from PBAT (Polybutylene Adipate Terephthalate) — a plant-based, petroleum-free material. They are 100% organic, BPA-free, and non-toxic, making them safe for food, medical, and everyday use.' },
  { q: 'Are RDN Bio Products DRDO certified?', a: 'Yes. Our bags are manufactured using technology certified by the Defence Research and Development Organisation (DRDO), Government of India — one of the most rigorous quality and safety standards in the country, validating biodegradability, non-toxicity, and material safety.' },
  { q: 'Do you supply biodegradable bags across India?', a: 'Yes. We supply pan India from our manufacturing unit in Hyderabad, Telangana — covering all states including Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra, Delhi NCR, and more. Bulk deliveries are handled via courier and transport.' },
  { q: 'What is the minimum order quantity?', a: 'Minimum order quantities vary by product type and size. For standard sizes, orders start from single bundles. For custom sizes or printed bags, minimums apply. Contact us on WhatsApp at +91-7301222666 for specific MOQ details.' },
  { q: 'Can I get custom printed or custom size biodegradable bags?', a: 'Yes. We offer full customisation — custom sizes, custom colors (white, green, black, blue, red, yellow and more), and brand printing with your logo and tagline. This is available for D-Cut bags, U/W-Cut bags, garbage bags, pouches, and grocery bags.' },
  { q: 'How long do biodegradable bags take to decompose?', a: 'Our biodegradable bags decompose naturally within 180 days under composting conditions — significantly faster than conventional plastic bags which take hundreds of years to break down and leave toxic microplastics in soil and water.' },
  { q: 'Are these bags safe for food packaging?', a: 'Yes. All RDN Bio Products bags are BPA-free and non-toxic. Our pouches, grocery bags, and butter covers are specifically designed for food contact use and are safe for packaging grocery items, dairy products, and spices.' },
  { q: 'What types of biodegradable bags do you manufacture?', a: 'We manufacture D-Cut carry bags (7 sizes), U/W-Cut carry bags (14 sizes), garbage bags (8 sizes), pouches (4 sizes), grocery bags (8 sizes), butter covers (2 sizes), and bio compound granules (PBAT fillers). Over 30 size variants are available in standard ranges.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20products";

const tickerItems = [
  '🌿 100% Biodegradable & DRDO Certified',
  '♻️ Easy Decomposable — Earth Friendly',
  '🛡️ BPA Free & Non-Toxic',
  '📦 Bulk Orders Welcome — Pan India Delivery',
  '🎨 Custom Sizes & Brand Printing Available',
  '⚡ WhatsApp Response within 1 Hour',
  '🏪 Trusted by Kirana Stores, Hospitals & Temples',
  '💰 Competitive Pricing for All Order Sizes',
  '🌱 Made from Plant-Based PBAT Material',
  '✅ Government & Institution Approved',
];

const scrollProducts = [
  { name: 'D-Cut Bags',    desc: '7 size variants',  photo: 'dcut-bag.png'     },
  { name: 'Garbage Bags',  desc: '8 size variants',  photo: 'garbage-bag.png'  },
  { name: 'U/W-Cut Bags',  desc: '14 size variants', photo: 'ucut-bag.png'     },
  { name: 'Pouches',       desc: 'Multiple sizes',   photo: 'pouches-bag.png'  },
  { name: 'Butter Covers', desc: '2 sizes',          photo: 'butter-bag.png'   },
  { name: 'Bio Granules',  desc: 'PBAT fillers',     photo: 'granules.png'     },
  { name: 'Grocery Bags',  desc: '8 size variants',  photo: 'pouches2-bag.png' },
];

const customers = ['Kirana stores','Supermarkets','Hospitals & clinics','Restaurants & hotels','Temples','Government & institutions','Individual buyers'];

const testimonials = [
  {
    quote: 'We switched from plastic carry bags 8 months ago. Customers love that we use biodegradable bags — it actually brings more people to our store. Quality is excellent and delivery is always on time.',
    name: 'Ravi Kumar',
    role: 'Owner, Sri Lakshmi Kirana Store',
    location: 'Dilsukhnagar, Hyderabad',
    icon: '🏪',
  },
  {
    quote: 'Our hospital switched to RDN Bio Products for all waste disposal and patient-facing bags. BPA-free certification was the deciding factor. Responsive team, good bulk pricing.',
    name: 'Dr. Prasad Reddy',
    role: 'Administrator, Care Polyclinic',
    location: 'Kukatpally, Hyderabad',
    icon: '🏥',
  },
  {
    quote: 'We order garbage bags and carry bags in bulk every month. Price is fair, bags are strong, and they decompose as promised. WhatsApp ordering makes it very convenient for us.',
    name: 'Suresh Babu',
    role: 'Catering Manager, Grand Residency Hotel',
    location: 'Begumpet, Hyderabad',
    icon: '🍽️',
  },
  {
    quote: 'The temple trusts use thousands of bags during festivals. RDN Bio Products gives us eco-friendly options that align with our values. Custom printing with our temple name is a great touch.',
    name: 'Venkatesh Sharma',
    role: 'Trust Secretary, Sri Venkateswara Temple',
    location: 'Secunderabad',
    icon: '🛕',
  },
];

export default function Home() {
  useEffect(() => { document.title = 'Biodegradable Bags Hyderabad | Carry Bags, Garbage Bags | RDN Bio Products'; }, []);
  const [form, setForm] = useState({ name:'', phone:'', product:'', qty:'', org:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like a quote from RDN Bio Products.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Product: ${form.product}`,
      form.qty   ? `Quantity: ${form.qty}`     : null,
      form.org   ? `Organisation: ${form.org}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/917301222666?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setForm({ name:'', phone:'', product:'', qty:'', org:'' });
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#f6fbf0 0%,#e8f5d8 100%)',padding:'48px 0 40px',borderBottom:'1px solid #d4e8b0'}}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="drdo-badge" style={{marginBottom:16}}>✓ DRDO Certified Technology</div>
              <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(28px,5vw,42px)',lineHeight:1.2,color:'var(--green-dark)',marginBottom:16}}>
                Bags that care for the Earth — and your business
              </h1>
              <p style={{fontSize:'clamp(14px,2vw,16px)',color:'#555',marginBottom:16,lineHeight:1.7}}>
                100% biodegradable carry bags, garbage bags & covers. Trusted by shops, hospitals, temples & institutions across Hyderabad and pan India.
              </p>
              <div className="pills-row" style={{marginBottom:20,justifyContent:'flex-start'}}>
                {customers.map(c => <span key={c} className="pill" style={{fontSize:12}}>{c}</span>)}
              </div>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <a href="#enquiry" className="btn-primary">Get a free quote</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
                  WhatsApp now
                </a>
              </div>
            </div>
            <div className="hero-img">
              <img src="hero2.png" alt="RDN Bio Products — Biodegradable bags" loading="eager" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:16}} />
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

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

      {/* Scrolling product strip */}
      <section style={{padding:'40px 0 36px',borderBottom:'1px solid #f0f5e8',overflow:'hidden'}}>
        <div className="container" style={{marginBottom:20}}>
          <h2 className="section-title" style={{textAlign:'center'}}>Our product range</h2>
          <p className="section-sub" style={{textAlign:'center',marginBottom:0}}>Tap any card to explore full specs</p>
        </div>
        <div className="pscroll-wrap">
          <div className="pscroll-track">
            {[...scrollProducts, ...scrollProducts].map((p, i) => (
              <Link to="/products" key={i} className="pscroll-card">
                <div className="pscroll-img">
                  <img src={p.photo} alt={p.name} loading="lazy" style={{width:'100%',height:'100%',objectFit:'contain',padding:4}}/>
                </div>
                <div className="pscroll-name">{p.name}</div>
                <div className="pscroll-desc">{p.desc}</div>
              </Link>
            ))}
          </div>
        </div>
        <div style={{textAlign:'center',marginTop:20}}>
          <Link to="/products" className="btn-outline">View all products with full specs →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'56px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container" style={{maxWidth:780}}>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-sub">Everything you need to know about our biodegradable bags</p>
          <div style={{marginTop:28}}>
            {faqs.map((faq, i) => (
              <details key={i} style={{borderBottom:'1px solid #e8f0dc',padding:'16px 0'}}>
                <summary style={{fontWeight:600,fontSize:15,color:'var(--green-dark)',cursor:'pointer',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
                  <span>{faq.q}</span>
                  <span style={{fontSize:20,flexShrink:0,color:'var(--green-mid)'}}>+</span>
                </summary>
                <p style={{marginTop:12,fontSize:14,color:'#555',lineHeight:1.75}}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{padding:'56px 0',borderBottom:'1px solid #f0f5e8',background:'var(--green-pale)'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign:'center'}}>What our customers say</h2>
          <p className="section-sub" style={{textAlign:'center'}}>Businesses across Hyderabad and India trust RDN Bio Products</p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{t.icon}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                    <div className="testimonial-location">📍 {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                    <option value="">Select product</option>
                    <option>D-Cut bags</option>
                    <option>U/W-Cut bags</option>
                    <option>Garbage bags</option>
                    <option>Pouches</option>
                    <option>Butter covers</option>
                    <option>Bio granules</option>
                    <option>Other / Multiple products</option>
                  </select>
                  <input className="form-input" placeholder="Quantity / kg" value={form.qty} onChange={e=>setForm({...form,qty:e.target.value})} />
                  <input className="form-input form-full" placeholder="Organisation / shop name (optional)" value={form.org} onChange={e=>setForm({...form,org:e.target.value})} />
                </div>
                <button type="submit" className="submit-btn">Send enquiry via WhatsApp</button>
                {submitted && <div className="success-msg show">✓ WhatsApp is opening — just tap Send to reach us!</div>}
              </form>
            </div>
            <div>
              <h3 style={{fontSize:18,fontWeight:600,color:'var(--green-dark)',marginBottom:20}}>Or reach us directly</h3>
              {[
                {label:'Phone',val:'+91-7301222666'},
                {label:'Phone',val:'+91-7301777444'},
                {label:'Email',val:'rdnbioproductsllp@gmail.com'},
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
                <img src="rdn-logo.png" alt="RDN Bio Products LLP — Biodegradable Bags" style={{width:160,height:160,objectFit:'contain'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
