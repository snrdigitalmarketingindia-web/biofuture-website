import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20custom%20products";

export function Customisation() {
  return (
    <main>
      <div className="placeholder-page">
        <div className="placeholder-inner">
          <div className="placeholder-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
          </div>
          <h1>We craft to your specs</h1>
          <p>Custom sizes, colors, and prints for bulk orders — this page is coming soon. In the meantime, WhatsApp us your requirements directly and we'll get back to you within the hour.</p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{margin:'0 auto'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
            WhatsApp your requirements
          </a>
          <div className="pills-row">
            {['Custom sizes','Color options','Brand printing','Bulk orders'].map(p=><span key={p} className="pill">{p}</span>)}
          </div>
          <p style={{fontSize:12,color:'#aaa',marginTop:20}}>+91-7301222666 · +91-7301777444 · biofuture.rdn@gmail.com</p>
        </div>
      </div>
    </main>
  );
}

export function Gallery() {
  return (
    <main>
      <div className="placeholder-page">
        <div className="placeholder-inner">
          <div className="placeholder-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <h1>Visuals loading...</h1>
          <p>Good things take time — just like biodegradation.<br/>Our product gallery is on its way. Meanwhile, explore our full product range with specifications.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/products" className="btn-primary">View our products</Link>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
              WhatsApp us
            </a>
          </div>
          <div className="pills-row">
            {['D-Cut bags','Garbage bags','Pouches','Butter covers','Bio granules'].map(p=><span key={p} className="pill">{p}</span>)}
          </div>
        </div>
      </div>
    </main>
  );
}

export function Contact() {
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
                  {[
                    {icon:'📞',label:'Phone',val:'+91-7301222666'},
                    {icon:'📞',label:'Phone',val:'+91-7301777444'},
                    {icon:'✉',label:'Email',val:'biofuture.rdn@gmail.com'},
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
            <div>
              <a href={WA_CONTACT} target="_blank" rel="noreferrer" className="btn-wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
                Chat on WhatsApp — +91-7301222666
              </a>
              <p style={{fontSize:11,color:'#aaa',marginTop:6}}>Pre-filled message: "Hi, I'm interested in RDN Bio Products"</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
