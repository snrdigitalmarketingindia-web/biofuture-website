import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%20have%20a%20question%20about%20RDN%20Bio%20Products";

const categories = [
  {
    title: 'About Biodegradable Bags',
    faqs: [
      {
        q: 'What are biodegradable bags made of?',
        a: 'RDN Bio Products bags are made from PBAT (Polybutylene Adipate Terephthalate) — a plant-based, copolyester polymer. PBAT is petroleum-free, BPA-free, and non-toxic. It is derived from renewable biological sources and is certified safe for food contact, medical, and retail use.',
      },
      {
        q: 'How long do biodegradable bags take to decompose?',
        a: 'Our biodegradable bags decompose in approximately 180 days under composting conditions — where moisture, temperature, and microbial activity are present. By comparison, conventional plastic bags take 400 to 1,000 years to break down, and leave toxic microplastics in soil and water.',
      },
      {
        q: 'What is the difference between biodegradable and compostable bags?',
        a: 'Biodegradable bags break down via microorganisms in natural conditions. Compostable bags meet stricter international standards (like EN 13432 or ASTM D6400), requiring decomposition within specific timeframes under industrial composting conditions. PBAT bags are biodegradable and also meet composting standards — making them suitable for both everyday disposal and managed composting environments.',
      },
      {
        q: 'What is PBAT material?',
        a: 'PBAT stands for Polybutylene Adipate Terephthalate. It is a copolyester synthesized from three monomers: adipic acid, 1,4-butanediol, and terephthalic acid. The resulting polymer is flexible and strong — behaving like conventional plastic during use — but fully biodegradable once disposed of, breaking down through microbial enzymatic action into carbon dioxide, water, and organic biomass.',
      },
      {
        q: 'Are biodegradable bags safe for food packaging?',
        a: 'Yes. All RDN Bio Products bags are 100% BPA-free and non-toxic. They are safe for food, grocery, dairy, and pharmacy packaging. Our pouches, grocery bags, and butter covers are specifically designed for food contact use and meet food-contact safety standards required for packaging edible items.',
      },
    ],
  },
  {
    title: 'Products & Specifications',
    faqs: [
      {
        q: 'What types of bags does RDN Bio Products manufacture?',
        a: 'We manufacture a complete range: D-Cut carry bags (7 sizes), U/W-Cut carry bags (14 sizes), garbage bags (8 sizes), pouches (4 sizes), grocery bags (8 sizes), butter covers (2 sizes), and bio compound granules (PBAT fillers). In total, over 30 standard size variants are available across 6 product categories — with custom sizes manufactured on request.',
      },
      {
        q: 'What is the difference between D-Cut and U-Cut bags?',
        a: 'D-Cut bags have a single die-cut handle punched through the top in a D-shape. They are simpler, more affordable, and ideal for retail and boutique use for loads up to 3 kg. U-Cut (also called W-Cut) bags have two loop handles, providing a more comfortable grip and higher load capacity (up to 10 kg) — making them the standard choice for grocery stores, hospitals, and supermarkets. Both types are manufactured from the same PBAT material and are equally biodegradable.',
      },
      {
        q: 'What sizes are available?',
        a: 'D-Cut bags: 8×12 inch to 16×24 inch (7 sizes). U/W-Cut bags: 8×10 inch to 27×30 inch (14 sizes). Garbage bags: 17×19 inch to 35×45 inch (8 sizes). Pouches: 4 sizes from 5×7 inch to 8×11 inch. Grocery bags: 8 sizes. Butter covers: 2 sizes. Custom sizes are available for bulk orders — contact us with your specifications.',
      },
      {
        q: 'What micron thickness is available?',
        a: 'Micron thickness ranges from 30 to 50 microns depending on the product type. Thicker bags provide greater strength. D-Cut bags: 35–45 microns. U/W-Cut bags: 30–50 microns. Garbage bags: 30–50 microns. Butter covers: 30 microns. Higher microns can be requested for heavy-duty applications.',
      },
      {
        q: 'What is the load capacity of your bags?',
        a: 'U/W-Cut bags can carry 0.5 kg (smallest size) up to 10 kg (largest size). Garbage bags are rated from 1 kg to 18 kg depending on size. D-Cut bags carry up to 3 kg for smaller sizes. For the exact load capacity of a specific size, contact us with your requirement and we will recommend the appropriate product.',
      },
    ],
  },
  {
    title: 'Certifications & Compliance',
    faqs: [
      {
        q: 'Are your bags DRDO certified?',
        a: 'Yes. RDN Bio Products bags are manufactured using technology certified by DRDO — the Defence Research and Development Organisation, Government of India. This certification validates the biodegradability, non-toxicity, and material safety of our PBAT-based bags under rigorous government-level testing standards. It is one of the most credible certifications available for biodegradable materials in India.',
      },
      {
        q: "Are your bags compliant with India's plastic ban?",
        a: "Yes. PBAT-based biodegradable bags are fully compliant with the Plastic Waste Management Amendment Rules 2021 and the single-use plastic ban that came into effect on July 1, 2022. Our bags are not classified as plastic under these rules — they are made from biodegradable material and are explicitly permitted as a compliant alternative to banned single-use plastic bags.",
      },
      {
        q: 'What is the LLPIN of RDN Bio Products?',
        a: 'The LLPIN (Limited Liability Partnership Identification Number) of RDN Bio Products is ACI-9987. We were incorporated on 16 August 2024 under the Ministry of Corporate Affairs, Government of India, as a registered Limited Liability Partnership.',
      },
      {
        q: 'Are your bags BPA-free?',
        a: 'Yes. All RDN Bio Products bags are 100% BPA (Bisphenol A)-free. BPA is a synthetic chemical found in some conventional plastics that can mimic estrogen and pose health risks. Our PBAT manufacturing process uses no BPA or other harmful chemicals — making our bags safe for food contact, medical, and consumer-facing use.',
      },
      {
        q: 'Is there any government approval for these bags?',
        a: "Yes. DRDO certification and full compliance with India's Plastic Waste Management Rules provide government-level validation for our products. Our bags are a legally approved alternative to single-use plastic. Businesses using DRDO-certified biodegradable bags are protected from penalties under India's plastic ban regulations.",
      },
    ],
  },
  {
    title: 'Ordering & Delivery',
    faqs: [
      {
        q: 'What is the minimum order quantity?',
        a: 'For standard sizes, orders start from a single bundle. Custom sizes and printed bags have minimum order requirements that vary by product type and size. Contact us on WhatsApp at +91-7301222666 for specific minimum order quantities for your requirement.',
      },
      {
        q: 'Do you supply across India?',
        a: 'Yes, we supply pan India. Our manufacturing unit is in Karmanghat, Saroornagar, Hyderabad, Telangana. We supply via courier and transport to all states including Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra, Delhi NCR, Rajasthan, Gujarat, West Bengal, and more. Delivery timelines vary by destination.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Standard orders take 3–7 working days depending on the destination. For Hyderabad local delivery, we typically deliver within 1–2 working days. Custom printed orders require 7–10 working days after design approval due to the printing and production process.',
      },
      {
        q: 'How do I place an order?',
        a: 'The easiest way is to WhatsApp us at +91-7301222666 with the product type, size, and quantity you need. You can also fill the enquiry form on our website. We respond within 1 hour during business hours (Monday to Saturday, 9am to 6pm IST). Our team will confirm pricing, availability, and delivery timeline.',
      },
      {
        q: 'Do you offer bulk discounts?',
        a: 'Yes. Pricing scales down for bulk orders. Wholesale rates are available for distributors, institutions, retail chains, and businesses that place regular monthly orders. Contact us at +91-7301222666 or rdnbioproductsllp@gmail.com for a custom bulk quote based on your monthly volume and product requirements.',
      },
    ],
  },
  {
    title: 'Customisation',
    faqs: [
      {
        q: 'Can I get bags printed with my brand logo?',
        a: 'Yes. We offer single and multi-color brand printing — including your logo, tagline, address, and contact details. Brand printing is available for D-Cut bags, U/W-Cut bags, garbage bags, and grocery bags for bulk orders. Many businesses use printed bags as a marketing tool — customers carrying your branded bag are walking advertisements.',
      },
      {
        q: 'Can I order bags in custom sizes?',
        a: 'Yes. We manufacture biodegradable bags to any specification — custom width, height, and gusset. Minimum quantities apply for custom sizes. Share your requirements with us on WhatsApp and we will provide a quote and timeline.',
      },
      {
        q: 'What colors are available?',
        a: 'Standard bags are available in white and natural (transparent). Custom colors available include green, black, blue, red, yellow, and more. For brand-specific colors, we offer Pantone color matching to ensure consistency with your brand identity. Minimum order quantities apply for custom colors.',
      },
      {
        q: 'What is the process for custom orders?',
        a: 'The custom order process is straightforward: (1) Share your requirements via WhatsApp — size, color, quantity, and printing details. (2) We prepare a sample within 2–3 working days for your approval. (3) On approval, bulk production begins. (4) Delivery in 7–10 working days. We keep you informed at each stage.',
      },
      {
        q: 'Is there a minimum for custom printed orders?',
        a: 'Yes. Minimum quantities for printed orders vary by product and size — typically 1,000 or more bundles for custom printed bags. Contact us at +91-7301222666 for the exact minimum for your specific requirement. We try to accommodate lower quantities for returning customers.',
      },
    ],
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://rdnbio.com/#/faq' },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: categories.flatMap(cat =>
    cat.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    }))
  ),
};

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQs — Biodegradable Bags | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Frequently asked questions about RDN Bio Products biodegradable bags — PBAT material, DRDO certification, India plastic ban compliance, ordering, delivery, and customisation.';
  }, []);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#f6fbf0 0%,#e8f5d8 100%)', padding: '48px 0 36px', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ fontSize: 12, color: '#aaa', marginBottom: 10 }}>
            <Link to="/" style={{ color: 'var(--green-mid)' }}>Home</Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <span>FAQ</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,5vw,38px)', color: 'var(--green-dark)', marginBottom: 12 }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7 }}>
            Everything you need to know about RDN Bio Products — our bags, certifications, ordering, delivery, and customisation options.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section style={{ padding: '52px 0' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          {categories.map((cat, ci) => (
            <div key={ci} className="faq-page-section">
              <h2>{cat.title}</h2>
              {cat.faqs.map((faq, fi) => (
                <details key={fi} className="faq-item">
                  <summary className="faq-summary">
                    <span>{faq.q}</span>
                    <span className="faq-icon" aria-hidden="true"></span>
                  </summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          {/* CTA */}
          <div style={{ background: 'var(--green-pale)', border: '1.5px solid #d4e8b0', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 8 }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>💬</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--green-dark)', marginBottom: 8 }}>Still have questions?</h3>
            <p style={{ fontSize: 14, color: '#666', marginBottom: 18, lineHeight: 1.7 }}>
              Our team responds within 1 hour on WhatsApp (Mon–Sat, 9am–6pm).
            </p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
              WhatsApp us →
            </a>
            <p style={{ marginTop: 12, fontSize: 13, color: '#aaa' }}>
              Or email us at <a href="mailto:rdnbioproductsllp@gmail.com" style={{ color: 'var(--green-dark)' }}>rdnbioproductsllp@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
