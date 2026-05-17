import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const WA_LINK = "https://wa.me/917301222666?text=Hi%2C%20I%27m%20interested%20in%20RDN%20Bio%20Products%20bags";

const posts = [
  {
    slug: 'dcut-vs-ucut-biodegradable-bags',
    title: 'D-Cut vs U-Cut Biodegradable Bags: Which is Right for Your Business?',
    date: '2025-05-01',
    dateDisplay: 'May 1, 2025',
    category: 'Product Guide',
    readTime: '4 min read',
    excerpt: 'D-Cut and U-Cut are the two most popular biodegradable carry bag shapes in India. This guide explains the differences and helps you choose the right type for your business.',
    sections: [
      { type: 'para', text: 'If you run a retail shop, grocery store, hospital, or restaurant in India, choosing the right carry bag type matters — both for your customers\' convenience and your costs. D-Cut and U-Cut (also called W-Cut) are the two most common biodegradable carry bag formats. Here\'s what you need to know.' },
      { type: 'h2', text: 'What is a D-Cut Bag?' },
      { type: 'para', text: 'A D-Cut carry bag has a single die-cut handle punched directly through the top of the bag in a D-shape (semi-circular opening). The handle is part of the bag body itself — no separate handle strips are attached. This makes D-Cut bags simpler to manufacture, more affordable per unit, and ideal for retail and boutique use.' },
      { type: 'para', text: 'D-Cut bags from RDN Bio Products are available in 7 sizes (8×12 inch to 16×24 inch) at 35–45 microns, making them strong enough for everyday retail use while remaining lightweight.' },
      { type: 'h2', text: 'What is a U-Cut or W-Cut Bag?' },
      { type: 'para', text: 'A U-Cut bag has two loop handles cut out from the top edge of the bag in a U-shape. The handles are thicker and longer, providing a comfortable grip for carrying heavier items. W-Cut is the same design with a slightly wider handle gap — the terms are used interchangeably in India.' },
      { type: 'para', text: 'U/W-Cut bags are the standard carry bag seen at grocery stores, supermarkets, hospitals, and pharmacies. RDN Bio Products manufactures U/W-Cut bags in 14 sizes (8×10 inch to 27×30 inch) with load capacity from 0.5 kg up to 10 kg.' },
      { type: 'h2', text: 'D-Cut vs U-Cut: Key Differences' },
      {
        type: 'table',
        headers: ['Feature', 'D-Cut', 'U-Cut / W-Cut'],
        rows: [
          ['Handle type', 'Single die-cut hole', 'Two loop handles'],
          ['Sizes (RDN Bio)', '7 sizes', '14 sizes'],
          ['Load capacity', 'Up to 3 kg', '0.5 kg to 10 kg'],
          ['Best for', 'Retail, boutiques, gifts', 'Grocery, hospitals, supermarkets'],
          ['Cost per unit', 'Slightly lower', 'Slightly higher'],
          ['Comfort for heavy loads', 'Moderate', 'High'],
        ],
      },
      { type: 'h2', text: 'Which Bag Should You Choose?' },
      { type: 'h3', text: 'Choose D-Cut if:' },
      {
        type: 'ul',
        items: [
          'You run a retail shop, clothing store, or boutique',
          'You need branded printed bags for lighter items',
          'Your customers carry items under 2–3 kg',
          'You want the most cost-effective option per bundle',
        ],
      },
      { type: 'h3', text: 'Choose U-Cut if:' },
      {
        type: 'ul',
        items: [
          'You run a grocery store, kirana, or supermarket',
          'Customers carry heavy items (vegetables, grains, packaged goods)',
          'You need load capacity above 3 kg',
          'You want hospital-grade bags for wards or pharmacy counters',
        ],
      },
      { type: 'highlight', icon: '💡', title: 'Pro tip', text: 'Many businesses order both types — D-Cut for smaller purchases and U-Cut for larger grocery loads. RDN Bio Products supplies both in bulk with volume discounts.' },
      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: "What does 'D-Cut' stand for?" },
      { type: 'para', text: 'D-Cut stands for Die-Cut — the handle is stamped (die-cut) directly out of the bag material, creating a D-shaped opening.' },
      { type: 'h3', text: 'Are D-Cut and U-Cut bags equally biodegradable?' },
      { type: 'para', text: 'Yes. Both are made from the same PBAT (Polybutylene Adipate Terephthalate) material and decompose within approximately 180 days under composting conditions. The shape of the handle does not affect biodegradability.' },
      { type: 'h3', text: 'Can I get D-Cut or U-Cut bags with my logo printed?' },
      { type: 'para', text: 'Yes. RDN Bio Products offers brand printing — your logo, tagline, and contact details — on both D-Cut and U-Cut bags for bulk orders. Contact us on WhatsApp at +91-7301222666 for a custom quote.' },
    ],
  },
  {
    slug: 'india-plastic-ban-business-guide',
    title: "India's Plastic Ban 2022: What Every Business Owner Needs to Know",
    date: '2025-04-15',
    dateDisplay: 'April 15, 2025',
    category: 'Compliance',
    readTime: '5 min read',
    excerpt: "India banned single-use plastics from July 1, 2022. Here's what changed, what's affected, and how your business can stay compliant with DRDO-certified biodegradable bags.",
    sections: [
      { type: 'para', text: 'On July 1, 2022, the Government of India implemented one of the most significant environmental regulations in recent years — a comprehensive ban on specific single-use plastic items under the Plastic Waste Management Amendment Rules, 2021. If you run a business in India, understanding what is banned, what is not, and how to stay compliant is essential.' },
      { type: 'h2', text: 'What Was Banned from July 1, 2022?' },
      { type: 'para', text: 'The Ministry of Environment, Forest and Climate Change (MoEFCC) banned the manufacture, import, stocking, distribution, sale, and use of the following single-use plastic items:' },
      {
        type: 'ul',
        items: [
          'Plastic carry bags below 75 microns thickness (reduced to 120 microns from December 2022)',
          'Plastic earbuds with plastic sticks',
          'Plastic sticks for balloons',
          'Plastic flags and decorative items',
          'Plastic candy sticks, ice cream sticks',
          'Plastic plates, cups, glasses, and cutlery',
          'Plastic straws',
          'Plastic trays for sweets and invitation cards',
          'Thermocol (polystyrene) for decoration and packaging',
        ],
      },
      { type: 'h2', text: 'What is NOT Banned?' },
      { type: 'para', text: 'Not all plastic is banned. The following remain legal:' },
      {
        type: 'ul',
        items: [
          'Plastic bags above 120 microns (thicker carry bags)',
          'Plastic bags used for packaging pre-packaged goods (FSSAI regulated)',
          'Biodegradable and compostable bags (fully compliant alternative)',
          'Multi-layer packaging for food products',
        ],
      },
      { type: 'h2', text: 'Penalties for Non-Compliance' },
      { type: 'para', text: 'Businesses found using banned single-use plastics face significant penalties under the Environment (Protection) Act, 1986:' },
      {
        type: 'ul',
        items: [
          'First offence: Fine up to ₹25,000',
          'Repeat offence: Fine up to ₹50,000',
          'Criminal liability: Imprisonment up to 5 years in severe cases',
          'State-level enforcement: Telangana, AP, Maharashtra, and other states have independent enforcement drives',
        ],
      },
      { type: 'h2', text: 'How Biodegradable Bags Are the Compliant Solution' },
      { type: 'para', text: 'PBAT-based biodegradable bags — like those manufactured by RDN Bio Products — are not classified as plastic under the Plastic Waste Management Rules. They are made from plant-based polymers that decompose within 180 days, meeting the government\'s biodegradability standards.' },
      { type: 'para', text: 'DRDO certification provides additional compliance evidence, as it validates the material composition and biodegradability of the bags under government-approved testing standards.' },
      { type: 'highlight', icon: '✅', title: 'Key compliance point', text: 'RDN Bio Products bags are DRDO certified, 100% PBAT-based, and fully compliant with India\'s Plastic Waste Management Rules. Businesses using our bags are protected from plastic ban penalties.' },
      { type: 'h2', text: 'What Should Your Business Do?' },
      {
        type: 'ul',
        items: [
          'Switch from plastic carry bags to biodegradable alternatives immediately',
          'Choose bags that are DRDO certified for documented compliance',
          'Keep purchase records from certified manufacturers as compliance evidence',
          'Train staff not to offer plastic bags to customers',
          'Communicate your eco-friendly switch to customers — it builds brand trust',
        ],
      },
      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'Are biodegradable bags completely legal to use in India?' },
      { type: 'para', text: "Yes. Biodegradable bags made from PBAT are explicitly permitted under India's Plastic Waste Management Rules. They are not classified as single-use plastic and can be used freely by businesses." },
      { type: 'h3', text: 'Is the plastic ban enforced in Hyderabad and Telangana?' },
      { type: 'para', text: 'Yes. Telangana has active enforcement drives. Municipal authorities, TSPCB (Telangana State Pollution Control Board), and local police conduct raids on businesses using banned plastics. Using certified biodegradable bags eliminates this risk.' },
      { type: 'h3', text: 'Does the plastic ban apply to packaging inside products?' },
      { type: 'para', text: 'The July 2022 ban primarily targets carry bags and single-use items given directly to consumers. Multi-layer packaging for pre-packaged food products follows separate FSSAI guidelines and is not covered by the same ban.' },
    ],
  },
  {
    slug: 'what-is-pbat-material',
    title: 'What is PBAT? The Science Behind Biodegradable Bags Explained',
    date: '2025-04-01',
    dateDisplay: 'April 1, 2025',
    category: 'Education',
    readTime: '5 min read',
    excerpt: 'PBAT (Polybutylene Adipate Terephthalate) is the plant-based polymer used in biodegradable bags. This article explains what it is, how it decomposes, and why it is safe.',
    sections: [
      { type: 'para', text: "If you've been searching for biodegradable bags in India, you've likely seen the term PBAT. But what exactly is it? How does it biodegrade? Is it truly safe? This article explains the science behind biodegradable bags in plain language." },
      { type: 'h2', text: 'What Does PBAT Stand For?' },
      { type: 'para', text: 'PBAT stands for Polybutylene Adipate Terephthalate. It is a biodegradable, compostable copolyester — a type of polymer designed to mimic the flexibility and strength of conventional plastic (LDPE) while breaking down completely in natural conditions.' },
      { type: 'h2', text: 'What is PBAT Made From?' },
      { type: 'para', text: 'PBAT is synthesized from three chemical building blocks (monomers):' },
      {
        type: 'ul',
        items: [
          'Adipic acid — derived from natural sources, also found in plant fermentation processes',
          '1,4-Butanediol — a chemical compound used widely in biodegradable polymer production',
          'Terephthalic acid — gives PBAT its flexibility and tensile strength',
        ],
      },
      { type: 'para', text: 'The combination produces a flexible, durable polymer that behaves similarly to standard plastic during use — but breaks down through microbial activity once disposed of.' },
      { type: 'h2', text: 'How Does PBAT Biodegrade?' },
      { type: 'para', text: 'Unlike conventional plastic which requires extreme UV exposure or heat to fragment (forming microplastics), PBAT breaks down through a completely different mechanism:' },
      {
        type: 'ul',
        items: [
          'Step 1: Soil microorganisms (bacteria and fungi) come into contact with the PBAT surface',
          'Step 2: Microorganisms produce enzymes — specifically lipase and cutinase — that attack the ester bonds in the polymer chain',
          'Step 3: The long polymer chains break into smaller and smaller fragments',
          'Step 4: Microorganisms metabolize these fragments completely',
          'Final result: Carbon dioxide, water, and biomass — no toxic residue, no microplastics',
        ],
      },
      { type: 'highlight', icon: '🌱', title: 'Decomposition timeline', text: 'Under composting conditions: 90–180 days. In soil without active composting: 6–12 months. Conventional plastic (LDPE): 400–1,000 years.' },
      { type: 'h2', text: 'Is PBAT Safe?' },
      {
        type: 'table',
        headers: ['Safety property', 'PBAT (RDN Bio Products)', 'Conventional plastic (LDPE)'],
        rows: [
          ['BPA-free', '✅ Yes — no BPA used', '⚠️ Not always'],
          ['Food contact safe', '✅ Yes — meets food-contact standards', '⚠️ Specific grades only'],
          ['Non-toxic decomposition', '✅ CO₂ + water + biomass', '❌ Microplastics, toxic residue'],
          ['Safe for medical use', '✅ Yes', '⚠️ Depends on grade'],
        ],
      },
      { type: 'h2', text: 'Why DRDO Certification Matters' },
      { type: 'para', text: 'RDN Bio Products uses DRDO-certified PBAT technology. The Defence Research and Development Organisation is one of India\'s most rigorous technical bodies. DRDO certification validates:' },
      {
        type: 'ul',
        items: [
          'The material composition is genuinely PBAT-based (not just labeled biodegradable)',
          'Biodegradability meets defined decomposition standards',
          'No toxic substances are present in manufacturing',
          'The product is safe for food contact, medical, and retail use',
        ],
      },
      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'Is PBAT the same as bioplastic?' },
      { type: 'para', text: "PBAT is a type of bioplastic — it's a bio-based, biodegradable polymer. However, not all bioplastics are biodegradable. PBAT specifically decomposes through microbial action, making it a true biodegradable material." },
      { type: 'h3', text: 'Can PBAT bags go in home compost?' },
      { type: 'para', text: 'PBAT bags biodegrade most effectively under industrial or managed composting conditions (higher temperature, controlled moisture). They can decompose in home compost but may take longer — 6–12 months. Under industrial composting, degradation happens in 60–90 days.' },
      { type: 'h3', text: 'Does PBAT leave any residue after decomposing?' },
      { type: 'para', text: 'No. Unlike conventional plastic which fragments into microplastics, PBAT fully mineralizes — converting to carbon dioxide, water, and organic biomass. There is no toxic residue left in soil or water.' },
    ],
  },
  {
    slug: 'biodegradable-bags-for-hospitals',
    title: 'Biodegradable Bags for Hospitals: A Complete Buying Guide',
    date: '2025-03-15',
    dateDisplay: 'March 15, 2025',
    category: 'Industry Guide',
    readTime: '4 min read',
    excerpt: 'Hospitals need BPA-free, non-toxic bags for waste disposal, pharmacy counters, and patient-facing use. This guide covers everything healthcare facilities need to know.',
    sections: [
      { type: 'para', text: 'Hospitals and healthcare facilities have some of the most specific requirements for bags and packaging — from bio-medical waste disposal to patient-facing carry bags and pharmacy pouches. Here\'s a complete guide to choosing biodegradable bags for hospital use in India.' },
      { type: 'h2', text: 'Types of Bags Used in Hospitals' },
      { type: 'para', text: 'Hospital bag needs fall into two categories:' },
      {
        type: 'ul',
        items: [
          'Regulated bio-medical waste bags: Color-coded (yellow, red, blue, black) as per Bio-Medical Waste Management Rules, 2016 — these follow specific CPCB mandates',
          'General-purpose bags: Carry bags for patients, pharmacy counter bags, ward waste bins, OT waste — where biodegradable bags are the ideal compliant choice',
        ],
      },
      { type: 'para', text: 'RDN Bio Products focuses on general-purpose biodegradable bags — the second category — where hospitals can switch from plastic to eco-friendly alternatives.' },
      { type: 'h2', text: 'Why BPA-Free Matters in Healthcare Settings' },
      { type: 'para', text: 'BPA (Bisphenol A) is a chemical found in some plastics that mimics estrogen and can leach into food or contact materials. In clinical settings, BPA exposure is a documented concern — particularly for vulnerable patients.' },
      { type: 'para', text: 'All RDN Bio Products bags are 100% BPA-free. For hospitals, this means:' },
      {
        type: 'ul',
        items: [
          'No risk of BPA exposure for patients receiving items in these bags',
          'Safe for carrying medications, food trays, and patient belongings',
          'Meets the BPA-free requirement increasingly demanded by hospital procurement policies',
        ],
      },
      { type: 'h2', text: 'Recommended Products for Hospitals' },
      {
        type: 'table',
        headers: ['Use case', 'Recommended product', 'Suggested size'],
        rows: [
          ['General ward waste bins', 'Garbage bags', '17×19 to 22×35 inch'],
          ['OT / ICU larger bins', 'Garbage bags', '30×38 to 35×45 inch'],
          ['Patient discharge bags', 'U-Cut carry bags', '16×20 to 20×24 inch'],
          ['Pharmacy counter bags', 'U-Cut or D-Cut', '10×12 to 13×16 inch'],
          ['Small pharmacy pouches', 'Pouches', '5×7 to 8×11 inch'],
          ['Cafeteria / food carry', 'U-Cut bags', '13×16 to 16×20 inch'],
        ],
      },
      { type: 'h2', text: 'DRDO Certification — Why It Matters for Hospitals' },
      { type: 'para', text: 'Hospital procurement committees often require documented quality certifications. DRDO (Defence Research and Development Organisation) certification provides this — it validates material safety, non-toxicity, and biodegradability under rigorous government standards.' },
      { type: 'para', text: 'When hospitals use DRDO-certified biodegradable bags, they can demonstrate compliance with environmental regulations while also meeting clinical safety requirements — making it easier to justify the switch from conventional plastic bags in procurement decisions.' },
      { type: 'highlight', icon: '🏥', title: 'For hospital procurement', text: 'RDN Bio Products can provide specification sheets and certification documentation to support hospital procurement processes. Contact us at rdnbioproductsllp@gmail.com or +91-7301222666.' },
      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'Are biodegradable bags strong enough for hospital use?' },
      { type: 'para', text: 'Yes. Our U-Cut bags (30–50 microns, up to 10 kg load) and garbage bags (up to 18 kg load) are specifically designed for heavy-duty use. Hospitals across Hyderabad and India currently use RDN Bio Products bags for ward waste bins and patient-facing use.' },
      { type: 'h3', text: 'Do biodegradable bags leak or tear in medical waste scenarios?' },
      { type: 'para', text: 'Our bags are manufactured to standard micron specifications and undergo quality testing. For general waste (non-bio-medical), they perform comparably to plastic bags of similar thickness. For bio-medical waste, color-coded regulated bags (not PBAT) are required by law.' },
      { type: 'h3', text: 'Can we get hospital name or logo printed on the bags?' },
      { type: 'para', text: 'Yes. We offer brand printing for bulk orders — your hospital name, logo, and contact details. This is popular with hospitals for patient discharge bags. Contact us for custom printing quotes and minimum order requirements.' },
    ],
  },
  {
    slug: 'biodegradable-bags-kirana-stores',
    title: 'How to Choose Biodegradable Bags for Your Kirana Store',
    date: '2025-03-01',
    dateDisplay: 'March 1, 2025',
    category: 'Product Guide',
    readTime: '4 min read',
    excerpt: "India's 12 million kirana stores need affordable, compliant carry bags after the plastic ban. Here's a simple size and type guide for retail shop owners.",
    sections: [
      { type: 'para', text: 'India has over 12 million kirana stores — the small grocery and general stores that serve as the backbone of Indian retail. Since July 2022, the plastic carry bag ban has created a real challenge: kirana owners need affordable, strong, compliant bags that don\'t cut into already thin margins.' },
      { type: 'para', text: 'This guide helps you choose the right biodegradable carry bags for your kirana store — the right size, type, and ordering approach.' },
      { type: 'h2', text: 'What the Plastic Ban Means for Kirana Stores' },
      { type: 'para', text: 'Before 2022, most kirana stores used cheap single-use plastic bags under 75 microns. These are now banned. Non-compliance can result in fines of ₹25,000 or more per offence under state and central regulations.' },
      { type: 'para', text: 'The good news: biodegradable bags are now more affordable and widely available than they were a few years ago. RDN Bio Products supplies kirana stores across Hyderabad and pan India with DRDO-certified bags at competitive bulk pricing.' },
      { type: 'h2', text: 'Choosing the Right Size for Your Store' },
      {
        type: 'table',
        headers: ["What you're selling", 'Recommended bag', 'Size'],
        rows: [
          ['Biscuits, chips, small packets', 'D-Cut', '8×12 inch'],
          ['1 kg sugar, flour, rice', 'D-Cut or U-Cut', '10×14 to 11×14 inch'],
          ['2–3 kg mixed grocery', 'U-Cut', '13×16 inch'],
          ['Heavy grocery (4–5 kg)', 'U-Cut', '16×20 inch'],
          ['Vegetables, loose items', 'Grocery bag', '6×9 to 8×12 inch'],
          ['Very heavy loads (5–10 kg)', 'U-Cut XL', '17×23 to 20×24 inch'],
        ],
      },
      { type: 'h2', text: 'D-Cut or U-Cut for Kirana Stores?' },
      { type: 'para', text: 'Most kirana stores benefit from stocking both types:' },
      {
        type: 'ul',
        items: [
          'D-Cut bags (8×12 to 10×14 inch): Ideal for small purchases — a pack of biscuits, a bottle of oil, chips. Affordable and good for printed branding.',
          'U-Cut bags (10×12 to 16×20 inch): For grocery loads. Customers carry these comfortably even when heavy with vegetables and packaged goods.',
        ],
      },
      { type: 'h2', text: 'How Much Do Biodegradable Bags Cost?' },
      { type: 'para', text: 'Biodegradable bags are slightly more expensive than conventional plastic bags, but the cost difference is smaller than most kirana owners expect — especially for bulk orders.' },
      { type: 'para', text: 'Key cost tips for kirana owners:' },
      {
        type: 'ul',
        items: [
          'Order in bundle quantities (not loose bags) — significantly cheaper per bag',
          'Standard sizes always cost less than custom sizes',
          'Monthly repeat orders can qualify for volume discount pricing',
          'The cost of a government fine (₹25,000+) far exceeds the cost difference of switching to biodegradable',
        ],
      },
      { type: 'highlight', icon: '💰', title: 'How to reduce costs', text: 'Order in bulk. RDN Bio Products offers competitive bulk pricing for monthly orders. WhatsApp us at +91-7301222666 with your monthly volume and we will give you the best rate.' },
      { type: 'h2', text: 'How to Order from RDN Bio Products' },
      {
        type: 'ul',
        items: [
          'Step 1: WhatsApp +91-7301222666 with the bag type, size, and quantity you need',
          'Step 2: We confirm availability, pricing, and delivery timeline within 1 hour',
          'Step 3: Payment and delivery arranged — pan India',
          'Step 4: Reorder monthly for consistent pricing and priority fulfillment',
        ],
      },
      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'Do kirana stores need to give biodegradable bags free of charge?' },
      { type: 'para', text: 'No. The plastic ban does not require you to give bags for free. You may charge customers for biodegradable bags — as most kirana stores already do. Many owners find customers appreciate eco-friendly bags and are happy to pay a nominal amount.' },
      { type: 'h3', text: 'What if my supplier still provides plastic bags?' },
      { type: 'para', text: 'Under the law, the business using or distributing plastic bags is liable — not just the supplier. If your supplier provides banned plastic bags, you are still at risk of penalties. Switch to a certified biodegradable supplier like RDN Bio Products.' },
      { type: 'h3', text: 'Can I get bags printed with my shop name?' },
      { type: 'para', text: 'Yes. We offer brand printing for bulk orders. Many kirana stores use printed bags as a marketing tool — customers carrying your branded bag are walking advertisements. Contact us for custom printing quotes.' },
    ],
  },
];

function renderSection(section, i) {
  switch (section.type) {
    case 'para':
      return <p key={i}>{section.text}</p>;
    case 'h2':
      return <h2 key={i}>{section.text}</h2>;
    case 'h3':
      return <h3 key={i}>{section.text}</h3>;
    case 'ul':
      return (
        <ul key={i}>
          {section.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    case 'table':
      return (
        <table key={i} className="article-table">
          <thead>
            <tr>{section.headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {section.rows.map((row, j) => (
              <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      );
    case 'highlight':
      return (
        <div key={i} className="article-highlight">
          <div className="article-highlight-icon">{section.icon}</div>
          <div>
            <div className="article-highlight-title">{section.title}</div>
            <div className="article-highlight-text">{section.text}</div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function BlogIndex() {
  useEffect(() => {
    document.title = 'Blog — Biodegradable Bags Guides & News | RDN Bio Products';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = 'Expert guides on biodegradable bags — PBAT material, India plastic ban compliance, D-Cut vs U-Cut bags, hospital and kirana store buying guides. By RDN Bio Products, Hyderabad.';
  }, []);

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#f6fbf0 0%,#e8f5d8 100%)', padding: '48px 0 36px', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,5vw,38px)', color: 'var(--green-dark)', marginBottom: 12 }}>
            Blog & Guides
          </h1>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, maxWidth: 600 }}>
            Expert articles on biodegradable bags, India's plastic ban, PBAT material science, and buying guides for different industries.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '52px 0' }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card" style={{ textDecoration: 'none' }}>
                <span className="blog-cat">{post.category}</span>
                <div className="blog-title">{post.title}</div>
                <div className="blog-meta">{post.dateDisplay} · {post.readTime}</div>
                <div className="blog-excerpt">{post.excerpt}</div>
                <span className="blog-read-link">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | RDN Bio Products Blog`;
      const m = document.querySelector('meta[name="description"]');
      if (m) m.content = post.excerpt;
    }
  }, [post]);

  if (!post) {
    return (
      <main style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--green-dark)', marginBottom: 16 }}>Article not found</h1>
          <Link to="/blog" className="btn-outline">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'RDN Bio Products LLP' },
    publisher: {
      '@type': 'Organization',
      name: 'RDN Bio Products LLP',
      logo: { '@type': 'ImageObject', url: 'https://rdnbio.com/rdn-logo.png' },
    },
    description: post.excerpt,
    url: `https://rdnbio.com/#/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rdnbio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rdnbio.com/#/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://rdnbio.com/#/blog/${post.slug}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#f6fbf0 0%,#e8f5d8 100%)', padding: '48px 0 36px', borderBottom: '1px solid #d4e8b0' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ fontSize: 12, color: '#aaa', marginBottom: 12 }}>
            <Link to="/" style={{ color: 'var(--green-mid)' }}>Home</Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <Link to="/blog" style={{ color: 'var(--green-mid)' }}>Blog</Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <span>{post.title}</span>
          </div>
          <span className="blog-cat" style={{ marginBottom: 14, display: 'inline-block' }}>{post.category}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,34px)', color: 'var(--green-dark)', marginBottom: 12, lineHeight: 1.25 }}>
            {post.title}
          </h1>
          <div style={{ fontSize: 13, color: '#aaa' }}>{post.dateDisplay} · {post.readTime}</div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="article-body">
            {post.sections.map((section, i) => renderSection(section, i))}

            {/* CTA */}
            <div style={{ background: 'var(--green-pale)', border: '1.5px solid #d4e8b0', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 40 }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>🛍️</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--green-dark)', marginBottom: 8 }}>
                Need biodegradable bags for your business?
              </h3>
              <p style={{ fontSize: 14, color: '#666', marginBottom: 18, lineHeight: 1.7 }}>
                RDN Bio Products supplies DRDO-certified PBAT bags pan India. WhatsApp us for a free quote.
              </p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
                WhatsApp us →
              </a>
            </div>

            <div style={{ marginTop: 28 }}>
              <Link to="/blog" style={{ fontSize: 14, color: 'var(--green-dark)', fontWeight: 600 }}>← Back to Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
