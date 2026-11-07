import type {
  AudienceLens,
  Framework,
  PolicyDoc,
  RoadmapStage,
  Sdg,
  SectorTrack,
  Usp,
} from "../types";

export const BRAND = {
  name: "Mindful Marketing Solutions",
  short: "Mindful",
  tagline: "Commercial Growth Meets Audited Impact in East Africa",
  phone: "+254 720 430 434",
  phoneHref: "+254720430434",
  whatsapp: "254720430434",
  email: "info@mindfulmarketing.co.ke",
  address: "The Oval, 3rd Floor, Westlands, Nairobi, Kenya",
  hours: "Mon to Fri, 08:30 to 17:30 EAT",
  established: "2018",
};

export const REGIONS = [
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Pan-East Africa",
] as const;

export const OBJECTIVES = [
  "CSR / ESG brand activation",
  "Behaviour change campaign",
  "Donor-compliant field storytelling",
  "Vernacular media buying",
  "Market entry research",
  "Always-on governance retainer",
] as const;

export const TIMELINES = [
  "Next 30 days",
  "This quarter",
  "Next 6 months",
  "Planning for next FY",
] as const;

export const BUDGET_RANGES = [
  "USD $10k - $25k (Pilot / Feasibility)",
  "USD $25k - $75k (Market Rollout)",
  "USD $75k - $150k+ (Pan-East Africa Campaign)",
  "Retainer / Custom Scoping",
] as const;

export const MEDIA_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/nairobi-field-briefing-6ca3792e-1793782638928.webp";
export const RETAIL_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/fmcg-shelf-retail-49d6ae4b-1793782637466.webp";
export const RADIO_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/vernacular-radio-studio-a32efe0b-1793782637223.webp";

export const LENSES: Record<"commercial" | "ngo", AudienceLens> = {
  commercial: {
    id: "commercial",
    tab: "Commercial Brands",
    eyebrow: "Commercial Practice",
    headline: "Your growth budget should also build the region it sells to.",
    subline:
      "We match FMCG, fintech, retail, and tech brands with audited NGO programmes across East Africa, then prove the commercial return on investment alongside verifiable community impact.",
    primaryCta: "Explore Commercial Media",
    secondaryCta: "Build a Pilot Brief",
    focus: [
      { label: "Verified spend", value: "100% audited placements & zero greenwashing" },
      { label: "Reach", value: "6 cities, 4 languages, 40+ community stations" },
      { label: "Reporting", value: "Quarterly ROI + authenticated impact evidence" },
    ],
  },
  ngo: {
    id: "ngo",
    tab: "NGOs & Donors",
    eyebrow: "Development Practice",
    headline: "Donor-grade governance, without losing the human story.",
    subline:
      "Always-on compliance, KDPA 2019-aligned tiered consent, and ethical field storytelling delivered by teams who live and speak in the communities they document.",
    primaryCta: "Launch an NGO Partnership",
    secondaryCta: "Review Compliance Framework",
    focus: [
      { label: "Compliance", value: "KDPA 2019 aligned & USAID/EU/FCDO audit ready" },
      { label: "Field network", value: "34 verified grassroots community partners" },
      { label: "Reporting", value: "Zero consent dispute guarantee with thumbprint logs" },
    ],
  },
};

export const STATS = [
  { value: "4", label: "East African markets with in-country native teams" },
  { value: "34", label: "Audited community and vernacular media partners" },
  { value: "6+", label: "Indigenous languages in active media rotation" },
  { value: "0", label: "Greenwashed claims in eight years of operation" },
];

export const USPS: Usp[] = [
  {
    key: "matchmaking",
    title: "Strategic Matchmaking",
    body: "We align corporate CSR and ESG marketing budgets with NGOs whose field operations are already audited, compliant, and reporting-ready.",
    detail: "Scoped in 3 weeks",
  },
  {
    key: "storytelling",
    title: "Performance Storytelling",
    body: "Field impact transformed into a commercially usable narrative: shelf-level proof, consumer trust, and verifiable digital and broadcast media.",
    detail: "Story + Hard Metrics",
  },
  {
    key: "media",
    title: "Vernacular Media Network",
    body: "Hyperlocal radio, mobile dispatch, and community hubs across Kenya, Uganda, Tanzania, and Rwanda, reviewed by native linguistic specialists.",
    detail: "40+ partner stations",
  },
  {
    key: "ai",
    title: "Ethical AI & Content Guardrails",
    body: "AI used strictly for draft translations and data structuring. Every quote, visual, and claim is human-vetted with zero synthetic community imagery.",
    detail: "Accord v4 Standard",
  },
];

export const TRACKS: SectorTrack[] = [
  {
    id: "commercial",
    label: "Commercial Brands & FMCG",
    headline: "Grow market share while proving tangible ESG returns.",
    blurb:
      "East African consumers demand authenticity. We link your product distribution and promotional spend to verified grassroots programmes that build durable brand equity.",
    image: RETAIL_IMAGE,
    imageAlt: "East African retail and trade market engagement",
    services: [
      {
        title: "CSR & ESG Co-investment Alignment",
        summary:
          "Match your commercial trade budget with audited NGO programmes across agriculture, health, education, and financial inclusion.",
        deliverables: [
          "Cross-sector governance charter",
          "Joint KPI & commercial attribution dashboard",
          "Independent auditor sign-off package",
        ],
        outcome: "Verified brand lift with zero risk of greenwashing blowback",
      },
      {
        title: "Vernacular Media Planning & Buying",
        summary:
          "Targeted radio, out-of-home, and digital buying across Swahili, Kikuyu, Dholuo, Kalenjin, Luganda, and Kinyarwanda.",
        deliverables: [
          "Pre-tested creative in local dialects",
          "Independent transmission verification logs",
          "Real-time listener feedback & brand sentiment",
        ],
        outcome: "Average 28% reduction in cost-per-verified listener",
      },
      {
        title: "Market Entry & Ethical Field Research",
        summary:
          "Rigorous consumer sentiment, price sensitivity, and cultural relevance studies conducted with full participant consent.",
        deliverables: [
          "KDPA 2019-compliant data collection map",
          "Vernacular focus group video digests",
          "Actionable go-to-market pricing matrix",
        ],
        outcome: "De-risked product launch backed by empirical community data",
      },
    ],
  },
  {
    id: "ngo",
    label: "NGOs, INGOs & Donors",
    headline: "Protect participant dignity and satisfy stringent donor audits.",
    blurb:
      "From USAID and FCDO to private foundations, we deliver community documentation and social behaviour change campaigns that withstand the toughest scrutiny.",
    image: MEDIA_IMAGE,
    imageAlt: "Community field briefing and participatory session in East Africa",
    services: [
      {
        title: "Audit-Ready Impact Documentation",
        summary:
          "Field photography, film, and case narratives collected under tiered, native-language consent protocols with full withdrawal rights.",
        deliverables: [
          "Biometric/audio consent registry archive",
          "Participant rights verification cards",
          "High-fidelity multimedia asset library",
        ],
        outcome: "Audit findings closed inside one reporting cycle without rework",
      },
      {
        title: "Donor-Compliant Behaviour Change (SBC)",
        summary:
          "Formative research, message design, and vernacular rollout with community stakeholder review at every gate.",
        deliverables: [
          "Formative research brief & ethics checklist",
          "Message matrix by audience, dialect, and literacy level",
          "Pre/post campaign comprehension measurement",
        ],
        outcome: "Campaigns cleared by institutional donor compliance on first review",
      },
      {
        title: "Ethical Field Storytelling & Translation",
        summary:
          "Narratives that honour community agency rather than poverty tropes, verified by local field monitors.",
        deliverables: [
          "Tiered consent documentation in vernacular",
          "Asset usage register with retention tracking",
          "Participant right-to-be-forgotten protocol",
        ],
        outcome: "Zero consent or privacy disputes across documented projects",
      },
    ],
  },
];

export const FRAMEWORKS: Framework[] = [
  {
    name: "Kenya Data Protection Act (KDPA 2019)",
    reference: "Statutory Law / ODPC Regs",
    status: "Fully Mapped & Certified",
    body: "Every field deployment begins with a data impact assessment: what data is collected, why, who safeguards it, and the exact scheduled deletion date.",
    points: [
      "Lawful basis and purpose recorded per data category",
      "Consent taken orally or in writing in participant's native tongue",
      "Retention and deletion schedule enforced via EU/Kenya secure storage",
    ],
  },
  {
    name: "Ethical AI Accord (Standard v4)",
    reference: "Internal Governance Accord",
    status: "100% Human-Reviewed",
    body: "We leverage AI solely for rapid initial transcription, dialect glossaries, and data synthesis. Machine output never publishes without human sign-off.",
    points: [
      "Named human reviewer on every published campaign asset",
      "Model prompts and temperature parameters archived for audit",
      "Strict ban on synthetic imagery or voice cloning of community members",
    ],
  },
  {
    name: "SDG Alignment Register",
    reference: "UN Sustainable Development Goals",
    status: "Quarterly Audited",
    body: "Each commercial and development intervention is mapped to measurable SDG targets with pre-agreed baseline indicators.",
    points: [
      "Indicator baselines validated before media spend",
      "Disaggregated field reporting by gender, age, and county",
      "Public transparent impact summary issued per campaign",
    ],
  },
  {
    name: "Cross-Sector Code of Ethics",
    reference: "Bilateral Engagement Standard",
    status: "Contractually Binding",
    body: "Commercial sponsors and NGO beneficiaries sign the identical code: zero unverified claims, zero unpaid community labour, and non-negotiable NGO independence.",
    points: [
      "Claim substantiation dossier verified before any public claim",
      "Community facilitators and participants compensated as budgeted line items",
      "Irrevocable exit clause guaranteeing editorial independence of the NGO",
    ],
  },
];

export const SDGS: Sdg[] = [
  { goal: "3", title: "Good Health & Well-being", note: "Maternal and child health vernacular radio broadcasts" },
  { goal: "5", title: "Gender Equality", note: "Women-led field documentation teams and equal honorariums" },
  { goal: "8", title: "Decent Work & Economic Growth", note: "Community facilitators and translators on formal contracts" },
  { goal: "12", title: "Responsible Consumption", note: "Packaging recycling and circular economy consumer messaging" },
  { goal: "13", title: "Climate Action", note: "Agri-input campaigns paired with regenerative climate guidance" },
];

export const ROADMAP: RoadmapStage[] = [
  {
    stage: "Stage 01",
    title: "Discovery & Compliance Review",
    duration: "Weeks 1 - 3",
    detail:
      "We convene with your legal, brand, ESG, and programme leads. Data protection architecture, consent flows, and claim substantiation dossiers are established before any commitment.",
    outputs: ["Data map & lawful basis register", "Claim substantiation dossier", "Audited NGO partner shortlist"],
  },
  {
    stage: "Stage 02",
    title: "Strategic Matchmaking & Scoping",
    duration: "Weeks 3 - 5",
    detail:
      "Commercial marketing budget meets audited NGO field capacity. Both parties sign the Code of Ethics and align on joint KPI indicators and exit criteria.",
    outputs: ["Bilateral partnership agreement", "Indicator baseline document", "Transparent line-item budget split"],
  },
  {
    stage: "Stage 03",
    title: "Vernacular Media & Field Deployment",
    duration: "Weeks 5 - 12",
    detail:
      "Community radio, grassroots activations, and digital creative launch in market, translated and reviewed by native language specialists.",
    outputs: ["Multi-station vernacular media buy", "Linguistic sign-off logs", "Weekly verified reach readouts"],
  },
  {
    stage: "Stage 04",
    title: "Dual Verifiable Impact Reporting",
    duration: "Post-Campaign & Ongoing",
    detail:
      "One unified intelligence report serving both agendas: commercial return on advertising spend (ROAS) and institutional donor-ready evidence.",
    outputs: ["Commercial ROI & brand lift report", "Donor compliance evidence package", "Public verified impact digest"],
  },
];

export const POLICIES: PolicyDoc[] = [
  {
    slug: "kdpa",
    title: "Data Protection & Field Consent (KDPA 2019)",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "What We Collect in the Field",
        body: "First names, contact information, language preference, administrative ward/district, and the timestamped consent record. We never harvest national identity numbers, financial PINs, or confidential health records unless a formally approved research protocol explicitly requires it under ethics board clearance.",
      },
      {
        heading: "How Consent is Administered",
        body: "Consent is read aloud verbatim in the participant's preferred dialect by an accredited local facilitator, followed by written signature, audio affirmation, or verified thumbprint. Participants receive a wallet verification card bearing our toll-free withdrawal number.",
      },
      {
        heading: "Data Sovereignty & Access Control",
        body: "Project datasets are encrypted in transit (TLS 1.3) and at rest (AES-256). Physical access is restricted to credentialed researchers with time-expiring authorization tokens. All data export events are logged in an immutable audit ledger.",
      },
      {
        heading: "Retention & Scheduled Deletion",
        body: "Raw interview recordings and field sheets are securely expunged 24 months post donor final sign-off, or sooner upon partner request. Formal certificates of destruction are issued referencing dataset hash identifiers.",
      },
    ],
  },
  {
    slug: "ai-ethics",
    title: "Ethical AI & Content Governance Accord",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "Permitted Use of Artificial Intelligence",
        body: "Machine learning tools are permitted strictly for initial speech-to-text transcription, translation assistance, and syntactic summarization. AI functions solely as a draft aid, never as an editorial decision maker.",
      },
      {
        heading: "Mandatory Human Verification",
        body: "Every single published communication is reviewed and validated by a native speaker of the target dialect. Factual assertions regarding healthcare, nutrition, or agricultural yield must match the authenticated claim substantiation file.",
      },
      {
        heading: "Prohibited Synthetic Practices",
        body: "We strictly ban the creation of synthetic AI-generated human faces, voice cloning of real community members, and algorithmic hallucination of impact testimonies. If an asset cannot be verified to an actual human source, it is rejected.",
      },
    ],
  },
  {
    slug: "cross-sector",
    title: "Cross-Sector Code of Ethics",
    updated: "Updated January 2025",
    sections: [
      {
        heading: "Bilateral Commitments",
        body: "Commercial sponsors and development implementers execute the identical bilateral charter prior to project initiation, legally binding both entities to transparent reporting and community protection.",
      },
      {
        heading: "Editorial Independence of Non-Profits",
        body: "Corporate sponsorship confers zero rights to censor, alter, or delay independent research findings, project shortcomings, or community feedback.",
      },
      {
        heading: "Fair Local Compensation",
        body: "All grassroots enumerators, community actors, translators, and story participants are compensated at above-median local market rates under transparent line items.",
      },
    ],
  },
  {
    slug: "privacy",
    title: "Website Privacy & Cookie Policy",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "Client-Side Draft Storage",
        body: "Your pilot brief calculations and form inputs are cached locally in your browser's localStorage for convenience. No personal details leave your browser until you choose to transmit them via WhatsApp or Email.",
      },
      {
        heading: "Zero Cross-Site Tracking",
        body: "This website operates without third-party tracking pixels, behavioural profiling networks, or invasive analytics cookies.",
      },
      {
        heading: "Data Deletion Rights",
        body: "Clearing your browser storage clears all saved drafts instantly. Inquiries sent via email can be permanently removed upon written request to info@mindfulmarketing.co.ke.",
      },
    ],
  },
];

export const FAQS = [
  {
    q: "How does Mindful Marketing bridge commercial and NGO goals without conflict of interest?",
    a: "We operate with two distinct, parallel balance sheets and an enforceable Cross-Sector Code of Ethics. Commercial brands get real market penetration, consumer trust, and verified ESG metrics; NGOs receive dedicated private-sector co-financing without losing editorial or operational autonomy.",
  },
  {
    q: "Is this website and code available in pure HTML, CSS, and JavaScript?",
    a: "Yes! In addition to this responsive interactive web app, we provide the full source code as standalone, zero-dependency HTML5, CSS3, and JavaScript files that you can view, copy, or download as a ZIP package with one click.",
  },
  {
    q: "How do you guarantee mobile responsiveness across all East African smartphones?",
    a: "We test our layouts on low-end to high-end Android devices, iPhones, and tablets (from 320px screen width up to 4K displays). Touch targets exceed 44px, layouts use fluid flexbox/grid without horizontal scrolling, and offline-friendly styling ensures fast loading even on 3G connections.",
  },
  {
    q: "What vernacular languages do you currently support?",
    a: "Our core roster includes Swahili (Kenya & Tanzania), Sheng (Nairobi urban), Kikuyu, Dholuo, Kalenjin, Luhya, Kamba, Luganda, Runyankole, and Kinyarwanda, with certified in-country linguistic reviewers.",
  },
  {
    q: "How quickly can a commercial pilot or NGO campaign launch?",
    a: "A typical pilot moves through discovery, legal compliance mapping, and vernacular media booking within 3 to 5 weeks.",
  },
];
