/**
 * MINDFUL MARKETING SOLUTIONS - PURE VANILLA JAVASCRIPT
 * Standalone, zero external dependencies.
 */

// 1. DATA DEFINITIONS
const BRAND = {
  name: "Mindful Marketing Solutions",
  phone: "+254 720 430 434",
  whatsapp: "254720430434",
  email: "info@mindfulmarketing.co.ke",
  address: "The Oval, 3rd Floor, Westlands, Nairobi, Kenya"
};

const LENSES = {
  commercial: {
    eyebrow: "Commercial Practice · East Africa",
    headline: "Your growth budget should also build the region it sells to.",
    subline: "We match FMCG, retail and tech brands with audited NGO programmes across East Africa, then prove the commercial return.",
    primaryCta: "Explore commercial media",
    secondaryCta: "Book a pilot brief",
    image: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/fmcg-shelf-retail-49d6ae4b-1793782637466.webp",
    badgeText: "100% audited placements",
    focus: [
      { label: "Verified spend", value: "100% audited placements" },
      { label: "Reach", value: "6 cities, 4 languages" },
      { label: "Reporting", value: "Quarterly ROI + impact" }
    ]
  },
  ngo: {
    eyebrow: "Development Practice · East Africa",
    headline: "Donor-grade governance, without losing the human story.",
    subline: "Always-on governance, KDPA-aligned consent and ethical field storytelling, delivered by teams who live in the communities.",
    primaryCta: "Launch an NGO partnership",
    secondaryCta: "Review our compliance set",
    image: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/nairobi-field-briefing-6ca3792e-1793782638928.webp",
    badgeText: "KDPA 2019 aligned",
    focus: [
      { label: "Compliance", value: "KDPA 2019 aligned" },
      { label: "Field network", value: "34 community partners" },
      { label: "Reporting", value: "Donor-ready evidence packs" }
    ]
  }
};

const SERVICES_DATA = {
  commercial: {
    headline: "Grow market share while proving tangible ESG returns.",
    blurb: "East African consumers demand authenticity. We link your product distribution and promotional spend to verified grassroots programmes that build durable brand equity.",
    image: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/fmcg-shelf-retail-49d6ae4b-1793782637466.webp",
    items: [
      {
        title: "CSR & ESG Co-investment Alignment",
        summary: "Match your commercial trade budget with audited NGO programmes across agriculture, health, education, and financial inclusion.",
        deliverables: [
          "Cross-sector governance charter",
          "Joint KPI & commercial attribution dashboard",
          "Independent auditor sign-off package"
        ],
        outcome: "Verified brand lift with zero greenwashing blowback"
      },
      {
        title: "Vernacular Media Planning & Buying",
        summary: "Targeted radio, out-of-home, and digital buying across Swahili, Kikuyu, Dholuo, Kalenjin, Luganda, and Kinyarwanda.",
        deliverables: [
          "Pre-tested creative in local dialects",
          "Independent transmission verification logs",
          "Real-time listener feedback & brand sentiment"
        ],
        outcome: "Average 28% reduction in cost-per-verified listener"
      },
      {
        title: "Market Entry & Ethical Field Research",
        summary: "Rigorous consumer sentiment, price sensitivity, and cultural relevance studies conducted with full participant consent.",
        deliverables: [
          "KDPA 2019-compliant data collection map",
          "Vernacular focus group video digests",
          "Actionable go-to-market pricing matrix"
        ],
        outcome: "De-risked product launch backed by empirical community data"
      }
    ]
  },
  ngo: {
    headline: "Protect participant dignity and satisfy stringent donor audits.",
    blurb: "From USAID and FCDO to private foundations, we deliver community documentation and social behaviour change campaigns that withstand the toughest scrutiny.",
    image: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/848a7346-c96a-4080-bf38-c9709b4f44f4/nairobi-field-briefing-6ca3792e-1793782638928.webp",
    items: [
      {
        title: "Audit-Ready Impact Documentation",
        summary: "Field photography, film, and case narratives collected under tiered, native-language consent protocols with full withdrawal rights.",
        deliverables: [
          "Biometric/audio consent registry archive",
          "Participant rights verification cards",
          "High-fidelity multimedia asset library"
        ],
        outcome: "Audit findings closed inside one reporting cycle without rework"
      },
      {
        title: "Donor-Compliant Behaviour Change (SBC)",
        summary: "Formative research, message design, and vernacular rollout with community stakeholder review at every gate.",
        deliverables: [
          "Formative research brief & ethics checklist",
          "Message matrix by audience, dialect & literacy level",
          "Pre/post campaign comprehension measurement"
        ],
        outcome: "Campaigns cleared by institutional donor compliance on first review"
      },
      {
        title: "Ethical Field Storytelling & Translation",
        summary: "Narratives that honour community agency rather than poverty tropes, verified by local field monitors.",
        deliverables: [
          "Tiered consent documentation in vernacular",
          "Asset usage register with retention tracking",
          "Participant right-to-be-forgotten protocol"
        ],
        outcome: "Zero consent or privacy disputes across documented projects"
      }
    ]
  }
};

const POLICIES_DATA = {
  kdpa: {
    title: "Data Protection & Field Consent (KDPA 2019)",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "What We Collect in the Field",
        body: "First names, contact information, language preference, administrative ward/district, and the timestamped consent record. We never harvest national identity numbers, financial PINs, or confidential health records unless a formally approved research protocol explicitly requires it."
      },
      {
        heading: "How Consent is Administered",
        body: "Consent is read aloud verbatim in the participant's preferred dialect by an accredited local facilitator, followed by written signature, audio affirmation, or verified thumbprint. Participants receive a wallet verification card bearing our toll-free withdrawal number."
      },
      {
        heading: "Data Sovereignty & Access Control",
        body: "Project datasets are encrypted in transit (TLS 1.3) and at rest (AES-256). Physical access is restricted to credentialed researchers with time-expiring authorization tokens."
      },
      {
        heading: "Retention & Scheduled Deletion",
        body: "Raw interview recordings and field sheets are securely expunged 24 months post donor final sign-off, or sooner upon partner request."
      }
    ]
  },
  "ai-ethics": {
    title: "Ethical AI & Content Governance Accord (v4)",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "Permitted Use of Artificial Intelligence",
        body: "Machine learning tools are permitted strictly for initial speech-to-text transcription, translation assistance, and syntactic summarization. AI functions solely as a draft aid, never as an editorial decision maker."
      },
      {
        heading: "Mandatory Human Verification",
        body: "Every single published communication is reviewed and validated by a native speaker of the target dialect. Factual assertions regarding healthcare, nutrition, or agricultural yield must match the authenticated claim substantiation file."
      },
      {
        heading: "Prohibited Synthetic Practices",
        body: "We strictly ban the creation of synthetic AI-generated human faces, voice cloning of real community members, and algorithmic hallucination of impact testimonies. If an asset cannot be verified to an actual human source, it is rejected."
      }
    ]
  },
  "cross-sector": {
    title: "Cross-Sector Code of Ethics",
    updated: "Updated January 2025",
    sections: [
      {
        heading: "Bilateral Commitments",
        body: "Commercial sponsors and development implementers execute the identical bilateral charter prior to project initiation, legally binding both entities to transparent reporting and community protection."
      },
      {
        heading: "Editorial Independence of Non-Profits",
        body: "Corporate sponsorship confers zero rights to censor, alter, or delay independent research findings, project shortcomings, or community feedback."
      },
      {
        heading: "Fair Local Compensation",
        body: "All grassroots enumerators, community actors, translators, and story participants are compensated at above-median local market rates under transparent line items."
      }
    ]
  },
  privacy: {
    title: "Website Privacy & Cookie Policy",
    updated: "Updated February 2025",
    sections: [
      {
        heading: "Client-Side Draft Storage",
        body: "Your pilot brief calculations and form inputs are cached locally in your browser's localStorage for convenience. No personal details leave your browser until you choose to transmit them."
      },
      {
        heading: "Zero Cross-Site Tracking",
        body: "This website operates without third-party tracking pixels, behavioural profiling networks, or invasive analytics cookies."
      },
      {
        heading: "Data Deletion Rights",
        body: "Clearing your browser storage clears all saved drafts instantly. Inquiries sent via email can be permanently removed upon written request to info@mindfulmarketing.co.ke."
      }
    ]
  }
};

// 2. STATE MANAGEMENT
let currentLens = "commercial";
let currentTheme = localStorage.getItem("mms-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// 3. INITIALIZATION ON DOM READY
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initAudienceSwitcher();
  initMobileDrawer();
  initServicesSection();
  initBriefBuilder();
  initPolicyModals();
});

// 4. THEME CONTROLLER
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  applyTheme(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      localStorage.setItem("mms-theme", currentTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const iconSpan = document.querySelector("#theme-toggle .theme-icon");
  if (iconSpan) {
    iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// 5. AUDIENCE / LENS SWITCHER
function initAudienceSwitcher() {
  const buttons = document.querySelectorAll(".lens-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lens = btn.getAttribute("data-lens");
      if (lens && (lens === "commercial" || lens === "ngo")) {
        setAudience(lens);
      }
    });
  });

  // Also sync form perspective radio buttons
  const formRadios = document.querySelectorAll('input[name="form-audience"]');
  formRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        setAudience(e.target.value);
      }
    });
  });
}

function setAudience(lens) {
  currentLens = lens;

  // Update lens buttons styling
  document.querySelectorAll(".lens-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lens") === lens);
  });

  // Update radio in brief form
  const radio = document.querySelector(`input[name="form-audience"][value="${lens}"]`);
  if (radio) radio.checked = true;

  // Update Hero elements
  const data = LENSES[lens];
  const eyebrowEl = document.getElementById("hero-eyebrow");
  const headlineEl = document.getElementById("hero-headline");
  const sublineEl = document.getElementById("hero-subline");
  const primaryCtaEl = document.getElementById("hero-primary-cta");
  const secondaryCtaEl = document.getElementById("hero-secondary-cta");
  const heroImgEl = document.getElementById("hero-img");
  const badgeTextEl = document.getElementById("hero-badge-text");
  const focusListEl = document.getElementById("hero-focus-list");

  if (eyebrowEl) eyebrowEl.textContent = data.eyebrow;
  if (headlineEl) headlineEl.textContent = data.headline;
  if (sublineEl) sublineEl.textContent = data.subline;
  if (primaryCtaEl) primaryCtaEl.textContent = data.primaryCta;
  if (secondaryCtaEl) secondaryCtaEl.textContent = data.secondaryCta;
  if (heroImgEl) heroImgEl.src = data.image;
  if (badgeTextEl) badgeTextEl.textContent = data.badgeText;

  if (focusListEl) {
    focusListEl.innerHTML = data.focus.map(f => `
      <div class="focus-pill">
        <strong>${f.label}:</strong> ${f.value}
      </div>
    `).join("");
  }

  // Sync services track button and view
  renderServices(lens);
  updateBriefSummary();
}

// 6. SERVICES SECTION CONTROLLER
function initServicesSection() {
  const tabBtns = document.querySelectorAll(".service-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const track = btn.getAttribute("data-track");
      if (track) {
        renderServices(track);
      }
    });
  });

  renderServices("commercial");
}

function renderServices(track) {
  // Update active tab buttons
  document.querySelectorAll(".service-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-track") === track);
  });

  const container = document.getElementById("services-container");
  if (!container) return;

  const data = SERVICES_DATA[track];
  if (!data) return;

  container.innerHTML = `
    <div class="track-sidebar">
      <div class="track-image">
        <img src="${data.image}" alt="${track === 'commercial' ? 'Retail & trade market' : 'Community field briefing'}" loading="lazy" />
      </div>
      <h3 class="track-headline">${data.headline}</h3>
      <p class="track-blurb">${data.blurb}</p>
      <a href="#brief-builder" class="btn btn-primary">Scope this track →</a>
    </div>

    <div class="service-card-list">
      ${data.items.map(item => `
        <article class="service-item-card">
          <h3>${item.title}</h3>
          <p class="service-summary">${item.summary}</p>
          <div class="deliverables-grid">
            ${item.deliverables.map(deliv => `
              <div class="deliverable-item">
                <span class="check-icon">✓</span>
                <span>${deliv}</span>
              </div>
            `).join("")}
          </div>
          <span class="outcome-badge">
            <span>📈</span> ${item.outcome}
          </span>
        </article>
      `).join("")}
    </div>
  `;
}

// 7. MOBILE DRAWER NAVIGATION
function initMobileDrawer() {
  const drawer = document.getElementById("mobile-drawer");
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("close-drawer-btn");
  const backdrop = document.getElementById("drawer-backdrop");
  const navLinks = document.querySelectorAll(".drawer-link");

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

// 8. INTERACTIVE PILOT BRIEF BUILDER
function initBriefBuilder() {
  const form = document.getElementById("pilot-brief-form");
  if (!form) return;

  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach(input => {
    input.addEventListener("input", updateBriefSummary);
    input.addEventListener("change", updateBriefSummary);
  });

  // WhatsApp Dispatch button
  const waBtn = document.getElementById("send-whatsapp-btn");
  if (waBtn) {
    waBtn.addEventListener("click", dispatchWhatsApp);
  }

  // Email Dispatch button
  const emailBtn = document.getElementById("send-email-btn");
  if (emailBtn) {
    emailBtn.addEventListener("click", dispatchEmail);
  }

  // Copy Brief button
  const copyBtn = document.getElementById("copy-brief-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyBriefToClipboard);
  }

  updateBriefSummary();
}

function getBriefData() {
  const name = document.getElementById("form-name")?.value.trim() || "Partner Contact";
  const org = document.getElementById("form-org")?.value.trim() || "Your Organisation / Brand";
  const email = document.getElementById("form-email")?.value.trim() || "No email entered";
  const objective = document.getElementById("form-objective")?.value || "CSR / ESG brand activation";
  const timeline = document.getElementById("form-timeline")?.value || "Next 30 days";
  const budget = document.getElementById("form-budget")?.value || "USD $10k - $25k (Pilot)";
  const message = document.getElementById("form-message")?.value.trim() || "";

  // Selected regions
  const checkedBoxes = document.querySelectorAll('input[name="regions"]:checked');
  const regions = Array.from(checkedBoxes).map(cb => cb.value);
  const regionsStr = regions.length > 0 ? regions.join(", ") : "Kenya (Default)";

  const audienceLabel = currentLens === "commercial" ? "Commercial Brand" : "NGO / Donor Implementer";

  return { name, org, email, objective, timeline, budget, message, regionsStr, audienceLabel };
}

function updateBriefSummary() {
  const data = getBriefData();

  const orgEl = document.getElementById("preview-org");
  const objEl = document.getElementById("preview-objective");
  const audEl = document.getElementById("preview-audience");
  const regEl = document.getElementById("preview-regions");
  const timeEl = document.getElementById("preview-timeline");
  const budEl = document.getElementById("preview-budget");

  if (orgEl) orgEl.textContent = data.org;
  if (objEl) objEl.textContent = data.objective;
  if (audEl) audEl.textContent = data.audienceLabel;
  if (regEl) regEl.textContent = data.regionsStr;
  if (timeEl) timeEl.textContent = data.timeline;
  if (budEl) budEl.textContent = data.budget;
}

function buildFormattedBriefText() {
  const data = getBriefData();
  return `*MINDFUL MARKETING SOLUTIONS - PILOT SCOPE BRIEF*
------------------------------------------------
• Organisation: ${data.org}
• Contact: ${data.name} (${data.email})
• Perspective: ${data.audienceLabel}
• Primary Objective: ${data.objective}
• Target Markets: ${data.regionsStr}
• Desired Timeline: ${data.timeline}
• Budget Tier: ${data.budget}
${data.message ? `• Additional Scope Notes: ${data.message}` : ""}
------------------------------------------------
Governance: KDPA 2019 compliant · Verified data impact assessment required.`;
}

function dispatchWhatsApp() {
  const briefText = buildFormattedBriefText();
  const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(briefText)}`;
  window.open(url, "_blank");
}

function dispatchEmail() {
  const data = getBriefData();
  const subject = encodeURIComponent(`[Pilot Brief Inquiry] ${data.org} - ${data.objective}`);
  const body = encodeURIComponent(buildFormattedBriefText() + "\n\nPlease get in touch with our team.");
  window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
}

function copyBriefToClipboard() {
  const copyBtn = document.getElementById("copy-brief-btn");
  const text = buildFormattedBriefText();

  navigator.clipboard.writeText(text).then(() => {
    if (copyBtn) {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = "<span>✓ Brief Copied!</span>";
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }
  }).catch(err => {
    console.error("Failed to copy brief", err);
  });
}

// 9. POLICY MODALS CONTROLLER
function initPolicyModals() {
  const dialog = document.getElementById("policy-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const dismissBtn = document.getElementById("modal-dismiss-btn");
  const triggerBtns = document.querySelectorAll(".policy-open-btn");

  if (!dialog) return;

  function openPolicy(slug) {
    const doc = POLICIES_DATA[slug];
    if (!doc) return;

    const titleEl = document.getElementById("modal-title");
    const updatedEl = document.getElementById("modal-updated");
    const contentEl = document.getElementById("modal-content");

    if (titleEl) titleEl.textContent = doc.title;
    if (updatedEl) updatedEl.textContent = doc.updated;

    if (contentEl) {
      contentEl.innerHTML = doc.sections.map(s => `
        <div class="modal-section">
          <h4>${s.heading}</h4>
          <p>${s.body}</p>
        </div>
      `).join("");
    }

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closePolicy() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const slug = btn.getAttribute("data-policy");
      if (slug) openPolicy(slug);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closePolicy);
  if (dismissBtn) dismissBtn.addEventListener("click", closePolicy);

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closePolicy();
    }
  });
}
