import type {
  AudienceLens,
  Framework,
  PolicyDoc,
  RoadmapStage,
  Sdg,
  SectorTrack,
  Usp,
} from "@/types";

export const BRAND = {
  name: "Mindful Marketing Solutions",
  short: "Mindful",
  phone: "+254 720 430 434",
  phoneHref: "+254720430434",
  whatsapp: "254720430434",
  email: "info@mindfulmarketing.co.ke",
  address: "The Oval, Westlands, Nairobi, Kenya",
  hours: "Mon to Fri, 08:30 to 17:30 EAT",
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

export const MEDIA_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/nairobi-field-briefing-6ca3792e-1793782638928.webp";
export const RETAIL_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/fmcg-shelf-retail-49d6ae4b-1793782637466.webp";
export const RADIO_IMAGE =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/vernacular-radio-studio-a32efe0b-1793782637223.webp";

export const LENSES: Record<"commercial" | "ngo", AudienceLens> = {
  commercial: {
    id: "commercial",
    tab: "Commercial brands",
    eyebrow: "Commercial practice",
    headline: "Your growth budget should also build the region it sells to.",
    subline:
      "We match FMCG, retail and tech brands with audited NGO programmes across East Africa, then prove the commercial return.",
    primaryCta: "Explore commercial media",
    secondaryCta: "Book a pilot brief",
    focus: [
      { label: "Verified spend", value: "100% audited placements" },
      { label: "Reach", value: "6 cities, 4 languages" },
      { label: "Reporting", value: "Quarterly ROI + impact" },
    ],
  },
  ngo: {
    id: "ngo",
    tab: "NGOs and donors",
    eyebrow: "Development practice",
    headline: "Donor-grade governance, without losing the human story.",
    subline:
      "Always-on governance, KDPA-aligned consent and ethical field storytelling, delivered by teams who live in the communities.",
    primaryCta: "Launch an NGO partnership",
    secondaryCta: "Review our compliance set",
    focus: [
      { label: "Compliance", value: "KDPA 2019 aligned" },
      { label: "Field network", value: "34 community partners" },
      { label: "Reporting", value: "Donor-ready evidence packs" },
    ],
  },
};

export const STATS = [
  { value: "4", label: "East African markets with in-country teams" },
  { value: "34", label: "Audited community and media partners" },
  { value: "6", label: "Languages in the vernacular media pool" },
  { value: "0", label: "Greenwashed claims in eight years" },
];

export const USPS: Usp[] = [
  {
    key: "matchmaking",
    title: "Strategic matchmaking",
    body: "We align corporate CSR and ESG budgets with NGOs whose field operations are already audited and reporting-ready.",
    detail: "Scoped in 3 weeks",
  },
  {
    key: "storytelling",
    title: "Performance storytelling",
    body: "Field impact becomes a commercially usable narrative: shelf-level proof, consumer trust and shareable media.",
    detail: "Story plus metrics",
  },
  {
    key: "media",
    title: "Impact media planning",
    body: "Vernacular radio, geofenced digital and out-of-home buying across Nairobi, Mombasa, Kisumu, Kampala, Dar es Salaam and Kigali.",
    detail: "6 cities live",
  },
  {
    key: "ai",
    title: "Agile AI toolchain",
    body: "Swahili, Luganda, Kinyarwanda and English localisation with a human reviewer on every line before it ships.",
    detail: "Human-in-the-loop",
  },
];

export const TRACKS: SectorTrack[] = [
  {
    id: "commercial",
    label: "For commercial brands",
    blurb:
      "Performance media that earns its place in the marketing plan, plus the social licence your category keeps being asked about.",
    image: RETAIL_IMAGE,
    imageAlt:
      "Retail merchandising specialist arranging FMCG packs on a supermarket shelf in East Africa",
    services: [
      {
        title: "Performance media and retail narrative",
        summary:
          "Full-funnel planning across trade, digital and radio, built around the distributor reality of each market.",
        deliverables: [
          "Channel mix model with cost per verified reach",
          "Trade and shelf visibility audit",
          "Creative tested in two languages minimum",
        ],
        outcome: "Median 2.4x return on verified reach within two quarters",
      },
      {
        title: "FMCG and retail brand equity",
        summary:
          "Positioning work that survives a low-consideration purchase, then gets defended with continuous tracking.",
        deliverables: [
          "Category trust mapping by city",
          "Claim substantiation file per asset",
          "Quarterly brand lift read-out",
        ],
        outcome: "Claims that clear legal review on the first pass",
      },
      {
        title: "Regional East Africa expansion",
        summary:
          "Market entry sequencing from Nairobi outward, with the regulatory and media groundwork handled before launch.",
        deliverables: [
          "Market readiness scorecard per country",
          "Local media partner shortlist with rates",
          "Launch calendar with compliance gates",
        ],
        outcome: "Entry plans that do not stall at the border",
      },
    ],
  },
  {
    id: "ngo",
    label: "For NGOs and donors",
    blurb:
      "Governance you can hand to a donor unedited, and communication that still reads like it came from the community.",
    image: MEDIA_IMAGE,
    imageAlt:
      "Community health worker briefing women under a mango tree in a rural East African village",
    services: [
      {
        title: "Always-on governance for NGOs",
        summary:
          "A standing retainer covering consent, data handling, sub-grantee oversight and reporting discipline.",
        deliverables: [
          "Consent architecture mapped to KDPA 2019",
          "Quarterly compliance health check",
          "Sub-grantee reporting templates",
        ],
        outcome: "Audit findings closed inside one reporting cycle",
      },
      {
        title: "Donor-compliant behaviour change",
        summary:
          "Formative research, message design and vernacular rollout with ethical review at every stage.",
        deliverables: [
          "Formative research brief and ethics checklist",
          "Message matrix by audience and language",
          "Reach and comprehension measurement",
        ],
        outcome: "Campaigns that pass donor review without rework",
      },
      {
        title: "Ethical field storytelling",
        summary:
          "Documentation that protects the dignity of participants and holds up under donor scrutiny.",
        deliverables: [
          "Tiered consent forms in local languages",
          "Photo and video usage register",
          "Participant withdrawal workflow",
        ],
        outcome: "Zero consent disputes across documented projects",
      },
    ],
  },
];

export const FRAMEWORKS: Framework[] = [
  {
    name: "Kenya Data Protection Act 2019",
    reference: "KDPA 2019",
    status: "Fully mapped",
    body: "Every field activity starts from a data map: what we collect, why, who holds it and how long it stays.",
    points: [
      "Lawful basis recorded per data category",
      "Consent capture in the participant's own language",
      "Retention and deletion schedule shared with partners",
    ],
  },
  {
    name: "Ethical AI Accord",
    reference: "Internal standard v4",
    status: "Human reviewed",
    body: "AI accelerates translation and analysis. It never replaces the reviewer who signs off on a claim or a quote.",
    points: [
      "Named human reviewer on every published asset",
      "Model output logged for audit",
      "No synthetic imagery of real communities",
    ],
  },
  {
    name: "SDG alignment register",
    reference: "Goals 3, 5, 8, 12, 13",
    status: "Reported quarterly",
    body: "Each programme is mapped to the goals it genuinely moves, with the indicator set agreed before launch.",
    points: [
      "Indicator baseline agreed with the partner",
      "Disaggregated reporting by age and gender",
      "Public summary published per programme",
    ],
  },
  {
    name: "Cross-sector code of ethics",
    reference: "Market entry standard",
    status: "Signed per engagement",
    body: "Commercial partners and NGO partners sign the same code: no unverified claims, no unpaid community labour.",
    points: [
      "Claim substantiation file required before media",
      "Community time costed into the budget",
      "Exit clause protecting the NGO's independence",
    ],
  },
];

export const SDGS: Sdg[] = [
  { goal: "3", title: "Good health", note: "Maternal and child health messaging in 4 languages" },
  { goal: "5", title: "Gender equality", note: "Women-led field documentation teams" },
  { goal: "8", title: "Decent work", note: "Community facilitators on paid contracts" },
  { goal: "12", title: "Responsible consumption", note: "Recyclable pack messaging in trade media" },
  { goal: "13", title: "Climate action", note: "Agri-input campaigns with climate-smart advice" },
];

export const ROADMAP: RoadmapStage[] = [
  {
    stage: "Stage 01",
    title: "Discovery and compliance review",
    duration: "Weeks 1 to 3",
    detail:
      "We sit with your legal, brand and programme leads. Data maps, consent architecture and claim substantiation are agreed before any media is booked.",
    outputs: ["Data map and lawful basis", "Claim substantiation file", "Partner shortlist"],
  },
  {
    stage: "Stage 02",
    title: "Strategic matchmaking",
    duration: "Weeks 3 to 5",
    detail:
      "Commercial budget meets audited field operations. Both sides agree objectives, indicator definitions and the exit route.",
    outputs: ["Matched partner agreement", "Indicator baseline", "Budget split"],
  },
  {
    stage: "Stage 03",
    title: "Vernacular media deployment",
    duration: "Weeks 5 to 12",
    detail:
      "Radio, digital and out-of-home go live with translated creative reviewed by native speakers and cleared by compliance.",
    outputs: ["Channel plan in market", "Translation sign-off log", "Weekly reach read-out"],
  },
  {
    stage: "Stage 04",
    title: "Verifiable impact reporting",
    duration: "Ongoing",
    detail:
      "One dashboard, two audiences: commercial return on investment alongside donor-ready impact evidence.",
    outputs: ["Quarterly ROI report", "Donor evidence pack", "Public impact summary"],
  },
];

export const POLICIES: PolicyDoc[] = [
  {
    slug: "kdpa",
    title: "Data protection and consent (KDPA 2019)",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "What we collect in the field",
        body: "Names, contact details, language preference, district and the consent record itself. We do not collect national identity numbers or health records unless a research protocol signed by the partner explicitly requires it.",
      },
      {
        heading: "How consent is taken",
        body: "Consent is read aloud in the participant's preferred language by a trained facilitator, then captured as an audio or thumbprint record. Participants may withdraw at any time by calling the number on the verification card they keep.",
      },
      {
        heading: "Who holds the data",
        body: "Project data lives in a partner-controlled workspace inside the European Union region. Our staff hold time-limited access, and every export is logged with a named requester and a stated purpose.",
      },
      {
        heading: "Retention",
        body: "Raw field data is deleted 24 months after final donor reporting unless the partner requests an earlier date. Deletion is confirmed in writing with a certificate referencing the dataset identifier.",
      },
    ],
  },
  {
    slug: "ai-ethics",
    title: "Ethical AI and content governance",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "Where AI is used",
        body: "First-pass translation, transcription of field interviews, draft analysis of reach data and search-friendly structuring of long reports. It is a draft engine, not a decision maker.",
      },
      {
        heading: "Human review",
        body: "A named reviewer signs off each published asset. Translation is checked by a native speaker, and any claim about health, finance or safety is verified against the substantiation file before release.",
      },
      {
        heading: "What we refuse",
        body: "Synthetic imagery of real communities, generated participant quotes and machine-only translation of consent documents. If a model output cannot be traced, it does not ship.",
      },
    ],
  },
  {
    slug: "cross-sector",
    title: "Cross-sector code of ethics",
    updated: "Updated January 2025",
    sections: [
      {
        heading: "Shared obligations",
        body: "Commercial and NGO partners sign the same document before the pilot begins. It covers claim accuracy, community participation costs and editorial independence.",
      },
      {
        heading: "Independence of the NGO",
        body: "No funding arrangement may give a commercial partner approval rights over an NGO's findings, recommendations or public statements.",
      },
      {
        heading: "Community time is paid",
        body: "Facilitators, translators and interviewees are budgeted as line items, with rates agreed locally before the first field day.",
      },
    ],
  },
  {
    slug: "privacy",
    title: "Website privacy policy",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "What this site stores",
        body: "Your pilot brief draft is stored in your own browser so you can return to it. Nothing is transmitted to us until you send it by email or WhatsApp.",
      },
      {
        heading: "Analytics",
        body: "We use aggregate page-level measurement only. No advertising trackers, no cross-site profiling, no third-party pixels.",
      },
      {
        heading: "Your choices",
        body: "Clearing your browser storage removes any draft brief immediately. Write to info@mindfulmarketing.co.ke to request a record of anything you have previously sent us.",
      },
    ],
  },
];