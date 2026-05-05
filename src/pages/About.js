import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20BioFuture%20products";

const values = [
  { icon: '🛡️', title: 'Safety first', desc: 'BPA-free, non-toxic materials. Safe for food, medical, and everyday use.' },
  { icon: '♻️', title: 'Easy decomposition', desc: 'Breaks down naturally without leaving toxic residue in soil or water.' },
  { icon: '🎨', title: 'Customizable', desc: 'Size, color, and print customization for bulk and institutional orders.' },
  { icon: '🌏', title: 'Pan India supply', desc: 'Manufactured in Hyderabad, delivered to businesses across India.' },
  { icon: '🌿', title: 'Planet friendly', desc: '100% organic inputs. No petroleum-based materials.' },
  { icon: '💰', title: 'Cost effective', desc: 'Competitive pricing. Bulk discounts for institutional buyers.' },
];

const timeline = [
  { year: 'Aug 2024', title: 'Incorporated — RDN Bio Products LLP', desc: 'Registered on 16 August 2024 under the Ministry of Corporate Affairs (LLPIN: ACI-9987), Hyderabad, Telangana.' },
  { year: '2024', title: 'DRDO technology certification', desc: 'Products certified using DRDO-backed technology standards — validating biodegradability, non-toxicity, and material safety.' },
  { year: 'Oct 2024', title: 'BioFuture brand launched', desc: 'Launched 6 product categories: D-Cut bags, U/W-Cut bags, Garbage bags, Pouches, Butter covers and Bio compound granules.' },
  { year: '2025', title: 'Today — pan India supply', desc: 'Serving kirana stores, hospitals, restaurants, temples, and institutions across India.', current: true },
];

const states = ['Hyderabad','Telangana','Andhra Pradesh','Tamil Nadu','Karnataka','Maharashtra','Delhi NCR','+ all states'];

export default function About() {
  useEffect(() => { document.title = 'About Us | DRDO Certified Biodegradable Bags Manufacturer Hyderabad | RDN Bio Products'; }, []);
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="drdo-badge" style={{marginBottom:16}}>✓ DRDO Certified Technology</div>
          <h1 className="section-title">We make plastic's best replacement — and we make it in Hyderabad.</h1>
          <p style={{fontSize:16,color:'#555',maxWidth:680,lineHeight:1.8}}>
            RDN Bio Products LLP was founded with one mission: to give Indian businesses an affordable, certified, eco-friendly alternative to single-use plastic bags. Every bag we make is 100% organic, BPA-free, and easy to decompose — without compromising on strength or usability.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:'48px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container">
          <div className="about-stats">
            {[['6+','Product categories'],['30+','Size variants'],['Pan India','Supply reach'],['DRDO','Certified technology']].map(s=>(
              <div key={s[0]} style={{background:'var(--green-pale)',borderRadius:12,padding:'24px 16px',textAlign:'center',border:'1px solid #d4e8b0'}}>
                <div style={{fontFamily:'var(--font-display)',fontSize:32,color:'var(--green-dark)',marginBottom:4}}>{s[0]}</div>
                <div style={{fontSize:13,color:'#4a7a1e'}}>{s[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRDO block */}
      <section style={{padding:'56px 0',borderBottom:'1px solid #f0f5e8',background:'var(--green-pale)'}}>
        <div className="container">
          <div className="about-drdo">
            <div>
              <h2 className="section-title">Backed by DRDO-certified technology</h2>
              <p style={{fontSize:15,color:'#555',lineHeight:1.8,marginBottom:16}}>
                RDN Bio Products are manufactured using technology certified by the Defence Research and Development Organisation (DRDO), Government of India — one of the most rigorous quality and safety standards in the country.
              </p>
              <p style={{fontSize:15,color:'#555',lineHeight:1.8}}>
                This means every bag meets strict standards for biodegradability, non-toxicity, and material safety — giving buyers complete confidence in what they're using.
              </p>
            </div>
            <div style={{width:160,height:160,flexShrink:0}}>
              <img src="drdo-logo.png" alt="DRDO — Defence Research and Development Organisation" style={{width:'100%',height:'100%',objectFit:'contain'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{padding:'56px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign:'center'}}>Our values</h2>
          <p className="section-sub" style={{textAlign:'center'}}>What drives every product we make</p>
          <div className="about-values">
            {values.map(v=>(
              <div key={v.title} style={{background:'var(--green-pale)',border:'1px solid #d4e8b0',borderRadius:12,padding:'24px 20px',textAlign:'center'}}>
                <div style={{fontSize:32,marginBottom:12}}>{v.icon}</div>
                <div style={{fontWeight:600,fontSize:15,color:'var(--green-dark)',marginBottom:8}}>{v.title}</div>
                <div style={{fontSize:13,color:'#666',lineHeight:1.6}}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{padding:'56px 0',borderBottom:'1px solid #f0f5e8'}}>
        <div className="container" style={{maxWidth:680}}>
          <h2 className="section-title">Our journey</h2>
          <p className="section-sub">From inception to pan India</p>
          <div style={{position:'relative',paddingLeft:32}}>
            <div style={{position:'absolute',left:7,top:8,bottom:8,width:1,background:'#d4e8b0'}}></div>
            {timeline.map((t,i)=>(
              <div key={i} style={{position:'relative',marginBottom:36}}>
                <div style={{position:'absolute',left:-32,top:6,width:14,height:14,borderRadius:'50%',background:t.current?'#5cb81c':'var(--green-dark)',border:'2px solid #fff',boxShadow:'0 0 0 2px '+(t.current?'#5cb81c':'var(--green-dark)')}}></div>
                <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:5}}>
                  <span style={{background:t.current?'#5cb81c':'var(--green-dark)',color:'#fff',fontSize:11,fontWeight:700,padding:'2px 10px',borderRadius:20}}>{t.year}</span>
                  <span style={{fontWeight:700,fontSize:15,color:t.current?'#5cb81c':'var(--green-dark)'}}>{t.title}</span>
                </div>
                <div style={{fontSize:13,color:'#666',lineHeight:1.65}}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach */}
      <section style={{padding:'48px 0',background:'var(--green-pale)',borderBottom:'1px solid #d4e8b0'}}>
        <div className="container">
          <h2 className="section-title">Where we supply</h2>
          <div className="pills-row" style={{justifyContent:'flex-start',marginBottom:16}}>
            {states.map(s=><span key={s} className="pill">{s}</span>)}
          </div>
          <p style={{fontSize:13,color:'#777'}}>Manufactured at: #10-01-78/47/5, Srinivasa Nagar Colony, Lingojiguda, Karmanghat, Saroornagar(M), Hyderabad – 500 035</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'56px 0'}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:20}}>
          <div>
            <h2 className="section-title">Ready to make the switch to biodegradable?</h2>
            <p style={{fontSize:15,color:'#666'}}>Talk to us — we'll help you find the right product and size for your business.</p>
          </div>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <Link to="/products" className="btn-primary">View our products</Link>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 0 0 .609.61l5.65-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.021-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143c5.45 0 9.857 4.407 9.857 9.857 0 5.45-4.407 9.857-9.857 9.857z"/></svg>
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
