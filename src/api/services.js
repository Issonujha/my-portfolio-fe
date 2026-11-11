const BACKEND_URL = 'https://backend.sonujha.in';

export const FALLBACK_SERVICES = [
  {
    id: "web-dev",
    name: "Web Applications & Enterprise Portals",
    headline: "Mission-critical full-stack web platforms engineered for speed, security, and scale.",
    category: "Engineering",
    description: "Custom SaaS platforms, customer portals, and internal enterprise tools built with React 19, Next.js, and Spring Boot microservices.",
    basePrice: 1500,
    baseDeliveryDays: 7,
    badge: "Core Engineering",
    techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "Docker"],
    deliverables: [
      "Fully responsive Next.js / React production web app",
      "REST / GraphQL API integration and schema validation",
      "Automated CI/CD build scripts and Docker containerization",
      "Clean architectural documentation and post-launch SLA support"
    ],
    features: [
      { id: "web-rbac", name: "OAuth 2.0 & Role-Based Access Control", description: "Google, Okta, JWT authentication with multi-tier permission matrix.", additionalPrice: 450, additionalDays: 2, isPopular: true },
      { id: "web-payment", name: "Payment Gateway (Stripe / Razorpay)", description: "Automated subscription checkout, webhooks, and invoice generation.", additionalPrice: 500, additionalDays: 2, isPopular: true },
      { id: "web-cms", name: "Headless CMS & Dynamic Blog", description: "Sanity / Strapi / Custom markdown publishing engine.", additionalPrice: 350, additionalDays: 1, isPopular: false },
      { id: "web-microservices", name: "Distributed Microservices Architecture", description: "Eureka dynamic service discovery, Feign RPC, and Redis cache.", additionalPrice: 950, additionalDays: 4, isPopular: false }
    ]
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps & Server-Driven UI",
    headline: "Native performance iOS & Android applications with zero-release UI flexibility.",
    category: "Engineering",
    description: "Cross-platform React Native apps driven by dynamic JSON schemas (SDUI), offline storage, and push notifications.",
    basePrice: 2000,
    baseDeliveryDays: 10,
    badge: "iOS & Android Native",
    techStack: ["React Native", "Expo", "iOS Swift", "Android Kotlin", "Server-Driven UI", "SQLite"],
    deliverables: [
      "Production iOS & Android application bundles (IPA / APK)",
      "Server-Driven UI component hydration system",
      "Deep-linking, push notification pipeline, and app store deployment readiness",
      "Offline-first local cache synchronization"
    ],
    features: [
      { id: "mob-sdui", name: "Server-Driven UI (SDUI) Remote Engine", description: "Update screens, layouts, and forms remotely without App Store re-review.", additionalPrice: 800, additionalDays: 3, isPopular: true },
      { id: "mob-push", name: "Push Notifications & WorkManager Sync", description: "Background scheduled syncing, FCM tokens, and silent triggers.", additionalPrice: 400, additionalDays: 2, isPopular: false },
      { id: "mob-offline", name: "Offline Cache & Conflict Resolution", description: "Local SQLite/WatermelonDB sync with server retry queues.", additionalPrice: 600, additionalDays: 3, isPopular: true }
    ]
  },
  {
    id: "ai-systems",
    name: "AI & Autonomous Agent Systems",
    headline: "Autonomous multi-agent swarms, RAG pipelines, and intelligent API automations.",
    category: "Data & Automation",
    description: "Enterprise AI systems powered by Model Context Protocol (MCP), tool calling, vector search, and strict security guards.",
    basePrice: 2500,
    baseDeliveryDays: 8,
    badge: "Next-Gen Intelligence",
    techStack: ["Python", "FastAPI", "Spring AI", "LangChain", "OpenAI / Claude", "ChromaDB / Qdrant", "MCP"],
    deliverables: [
      "Autonomous agent swarm architecture with tool execution routing",
      "RAG document indexing pipeline with vector similarity search",
      "Streaming token SSE gateway (<15ms latency)",
      "Prompt injection defense and zero-direct-DB mutation protocol"
    ],
    features: [
      { id: "ai-rag", name: "Enterprise RAG Knowledge Base", description: "Semantic search over PDF, docs, and internal knowledge sources.", additionalPrice: 750, additionalDays: 3, isPopular: true },
      { id: "ai-tools", name: "Dynamic Tool & MCP System Dispatch", description: "Allow agents to execute CRM, database, and terminal actions safely.", additionalPrice: 900, additionalDays: 3, isPopular: true },
      { id: "ai-guard", name: "Security Guardrails & Hallucination Checks", description: "Strict deterministic output validation and PII redaction.", additionalPrice: 500, additionalDays: 2, isPopular: false }
    ]
  },
  {
    id: "desktop-apps",
    name: "Cross-Platform Desktop Applications",
    headline: "Ultra-lightweight native desktop tools for macOS, Windows, and Linux.",
    category: "Engineering",
    description: "High-performance desktop software utilizing Tauri (Rust) or Electron with native system tray, SQLite, and IPC.",
    basePrice: 2200,
    baseDeliveryDays: 9,
    badge: "Desktop Systems",
    techStack: ["Tauri", "Rust", "Electron", "React", "SQLite", "OS System Tray"],
    deliverables: [
      "Cross-platform signed binaries (.dmg, .exe, .AppImage)",
      "Native OS integration: system tray, notifications, file system",
      "High-speed IPC protocol with native hardware acceleration",
      "Automated background auto-update framework"
    ],
    features: [
      { id: "desk-tray", name: "Background System Tray Daemon", description: "Run quietly in the menu bar with global hotkeys and instant popups.", additionalPrice: 350, additionalDays: 1, isPopular: true },
      { id: "desk-db", name: "Local SQLite Encrypted Storage", description: "Zero-cloud local encrypted storage with automated backups.", additionalPrice: 450, additionalDays: 2, isPopular: false }
    ]
  },
  {
    id: "excel-dashboards",
    name: "Excel & BI Analytics Dashboards",
    headline: "Institutional-grade financial models, automated KPI dashboards, and VBA macros.",
    category: "Data & Automation",
    description: "Custom executive reporting systems in Excel, Power BI, and Google Sheets with automated data refresh and macro tools.",
    basePrice: 800,
    baseDeliveryDays: 4,
    badge: "Data Analytics",
    techStack: ["Microsoft Excel", "Power Query", "Power BI", "VBA Macros", "Google Apps Script", "SQL"],
    deliverables: [
      "Interactive multi-tab executive financial / operational workbook",
      "Automated ETL pipelines via Power Query pulling from SQL / CSV",
      "Dynamic interactive charts, slicers, and variance calculations",
      "Recorded and documented VBA macro automations"
    ],
    features: [
      { id: "xl-vba", name: "Custom VBA / Macro Automation Suite", description: "One-click report consolidation, email dispatches, and data transforms.", additionalPrice: 300, additionalDays: 1, isPopular: true },
      { id: "xl-sql", name: "Live Database SQL Connector", description: "Direct ODBC / REST connector refreshing sheets from production DBs.", additionalPrice: 400, additionalDays: 2, isPopular: true }
    ]
  },
  {
    id: "logo-design",
    name: "Logo & Brand Identity Suite",
    headline: "Iconic visual brand marks, typography guidelines, and complete corporate identity systems.",
    category: "Design & Creative",
    description: "Distill your technology or business vision into a memorable vector mark with full brand guidelines.",
    basePrice: 600,
    baseDeliveryDays: 3,
    badge: "Brand Identity",
    techStack: ["Figma", "Adobe Illustrator", "SVG Vectors", "Typography", "Color Science"],
    deliverables: [
      "Primary logo, secondary logo, and favicon in vector formats (SVG, AI, PDF)",
      "Full color palette specification (Hex, RGB, CMYK, Pantone)",
      "Typography scale and font pairing documentation",
      "Brand style guideline sheet and export assets"
    ],
    features: [
      { id: "logo-3d", name: "3D Metallic / Glass Logo Mockups", description: "Hyper-realistic 4K 3D renders for landing pages and presentation decks.", additionalPrice: 250, additionalDays: 1, isPopular: true },
      { id: "logo-kit", name: "Complete Social Media Kit", description: "Profile avatars, banners, and headers for Twitter, LinkedIn, and YouTube.", additionalPrice: 200, additionalDays: 1, isPopular: false }
    ]
  },
  {
    id: "marketing-banners",
    name: "Marketing Banners & Ad Creatives",
    headline: "High-CTR promotional banners, social media ad packs, and presentation assets.",
    category: "Design & Creative",
    description: "Visually compelling marketing graphics optimized for conversions across Google Ads, LinkedIn, Twitter, and billboards.",
    basePrice: 500,
    baseDeliveryDays: 2,
    badge: "Marketing & Media",
    techStack: ["Figma", "Photoshop", "Ad Specs", "Export Engines", "HTML5 Banners"],
    deliverables: [
      "Multi-size responsive banner packages (1200x628, 1080x1080, 1920x1080, 300x250)",
      "High-resolution PNG, WebP, and editable Figma source files",
      "A/B test variations with headline and CTA differentiators",
      "Fast 48-hour delivery guarantee"
    ],
    features: [
      { id: "ban-animated", name: "Animated HTML5 / GIF Banners", description: "Smooth micro-animations to 3x click-through rates.", additionalPrice: 250, additionalDays: 1, isPopular: true },
      { id: "ban-pack", name: "Omnichannel 15-Size Ad Expansion Pack", description: "Complete dimension coverage for Meta, Google, LinkedIn, and App Store.", additionalPrice: 350, additionalDays: 1, isPopular: true }
    ]
  },
  {
    id: "system-integrations",
    name: "System Integrations & Middleware",
    headline: "Seamless data bridges connecting CRMs, ERPs, payment rails, and cloud services.",
    category: "Engineering",
    description: "High-reliability middleware, webhook listeners, and ETL data sync between disparate enterprise platforms.",
    basePrice: 1800,
    baseDeliveryDays: 6,
    badge: "System Glue",
    techStack: ["Spring Boot", "Kafka", "REST / Webhooks", "OAuth 2.0", "Redis", "Docker"],
    deliverables: [
      "Resilient integration service with automatic retries and dead-letter queues",
      "Bidirectional webhook receiver with HMAC signature verification",
      "Idempotent database reconciliation with zero data loss guarantee",
      "Prometheus and Grafana telemetry dashboards"
    ],
    features: [
      { id: "int-dlq", name: "Dead-Letter Queue & Auto-Retry Logic", description: "Guarantee zero lost transactions during downstream network outages.", additionalPrice: 400, additionalDays: 2, isPopular: true },
      { id: "int-crm", name: "Salesforce / HubSpot Enterprise Sync", description: "Bi-directional contact, deal, and usage metrics pipeline.", additionalPrice: 650, additionalDays: 2, isPopular: false }
    ]
  }
];

export async function fetchServices() {
  try {
    const res = await fetch(`${BACKEND_URL}/services/all`, {
      headers: { "Accept": "application/json" },
      mode: "cors"
    });
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (err) {
    console.warn("Using fallback local services catalog:", err.message);
    return FALLBACK_SERVICES;
  }
}

export async function calculateQuote(serviceId, selectedFeatureIds) {
  try {
    const res = await fetch(`${BACKEND_URL}/services/calculate-quote`, {
      method: 'POST',
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ serviceId, selectedFeatureIds }),
      mode: "cors"
    });
    if (!res.ok) throw new Error('Failed to calculate quote on server');
    return await res.json();
  } catch (err) {
    // Local calculation fallback
    const service = FALLBACK_SERVICES.find(s => s.id === serviceId) || FALLBACK_SERVICES[0];
    const selected = service.features.filter(f => selectedFeatureIds.includes(f.id));
    const totalDays = service.baseDeliveryDays + selected.reduce((sum, f) => sum + f.additionalDays, 0);
    const totalCost = service.basePrice + selected.reduce((sum, f) => sum + f.additionalPrice, 0);
    return {
      serviceId: service.id,
      serviceName: service.name,
      basePrice: service.basePrice,
      baseDeliveryDays: service.baseDeliveryDays,
      totalCost,
      totalDeliveryDays: totalDays,
      includedFeatures: selected.map(f => f.name),
      deliverables: service.deliverables
    };
  }
}

export async function submitInquiry(inquiryData) {
  try {
    const res = await fetch(`${BACKEND_URL}/services/inquire`, {
      method: 'POST',
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(inquiryData),
      mode: "cors"
    });
    if (!res.ok) throw new Error('Inquiry submission failed');
    return await res.json();
  } catch (err) {
    console.warn("Saved inquiry to local storage fallback:", err.message);
    const stored = JSON.parse(localStorage.getItem('studio_inquiries') || '[]');
    const newRecord = { ...inquiryData, id: 'local-' + Date.now(), createdAt: new Date().toISOString() };
    stored.unshift(newRecord);
    localStorage.setItem('studio_inquiries', JSON.stringify(stored));
    return newRecord;
  }
}
