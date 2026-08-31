export const assetPrefix = (import.meta.env.VITE_IMAGE_SRC || "/assets/").endsWith("/")
  ? (import.meta.env.VITE_IMAGE_SRC || "/assets/")
  : (import.meta.env.VITE_IMAGE_SRC || "/assets/") + "/";

export const personalInfo = {
  name: "Rahul Singh",
  title: "Senior Frontend Engineer & UI Architect",
  tagline: "Architecting high-performance web applications, resilient React systems, and intuitive user experiences with modern web standards.",
  bio: "Frontend engineer with over 3.5 years of industry experience specializing in scalable React ecosystems, design system architecture, state-machine data flows, and sub-second Core Web Vitals optimization. Proven track record delivering enterprise-grade portals and healthcare data visualization systems.",
  location: "India (Open to Global Remote & Relocation)",
  availability: "Available for Senior Frontend Roles",
  email: "singhrah8ul542@gmail.com",
  phone: "+91 7389832566",
  resumeUrl: "#",
  avatarUrl: assetPrefix + "rahul_prof.jpg",
  socials: {
    github: "https://github.com/rahulsuch",
    linkedin: "https://www.linkedin.com/in/rahul-singh-public-profile",
    email: "mailto:singhrah8ul542@gmail.com",
  },
};

export const impactMetrics = [
  {
    value: "3.5+",
    suffix: "Years",
    label: "Professional Engineering Experience",
    description: "Building production web apps, design systems, and enterprise data suites.",
  },
  {
    value: "100+",
    suffix: "APIs",
    label: "REST & GraphQL Endpoints Integrated",
    description: "Architected centralized data caching, error boundaries, and optimistic mutations.",
  },
  {
    value: "40%",
    suffix: "Faster",
    label: "Average Render Speed & CWV Lift",
    description: "Optimized LCP, INP, tree-shaking, code splitting, and memoization strategies.",
  },
  {
    value: "99.9%",
    suffix: "Uptime",
    label: "Production System Reliability",
    description: "Authored resilient component architectures with zero fatal runtime regressions.",
  },
];

export const experienceTimeline = [
  {
    role: "Senior Frontend Developer / UI Specialist",
    company: "Becton Dickinson (BD)",
    division: "Enterprise Healthcare & Diagnostic Analytics",
    period: "2023 — Present",
    badge: "Current",
    type: "Enterprise Scale",
    description:
      "Spearheaded the frontend architecture for cloud-connected healthcare telemetry and analytics dashboards, processing high-frequency data streams into actionable diagnostic intelligence.",
    achievements: [
      "Architected real-time visualization dashboards handling thousands of telemetry records with 60 FPS smooth interactions using React and Web Workers.",
      "Engineered an enterprise-wide WCAG 2.1 AA compliant UI component library, accelerating cross-team feature delivery by 35%.",
      "Eliminated redundant re-renders and memory leaks across long-lived dashboard sessions through normalized state management and custom memory-leak auditing.",
      "Mentored junior frontend developers on TypeScript, modern React hooks patterns, and CI/CD code quality gates.",
    ],
    techStack: ["React 18", "Redux Toolkit", "TypeScript", "Tailwind CSS", "REST APIs", "Jest", "GitLab CI"],
  },
  {
    role: "Frontend Software Engineer",
    company: "Public Digital Transformation (Passport Seva)",
    division: "Citizen Services & Government Portals",
    period: "2021 — 2023",
    badge: "High Scale",
    type: "Public Sector (10M+ Users)",
    description:
      "Delivered high-throughput, secure public citizen portals handling millions of daily document submissions, appointments, and application workflows.",
    achievements: [
      "Built dynamic multi-step application form flows with client-side JSON schema validation and auto-save capabilities.",
      "Implemented hardened JWT authentication with biometric and multi-factor authorization flows, ensuring complete data security.",
      "Optimized assets and critical rendering paths, driving initial page load times below 1.2s across low-bandwidth mobile networks.",
      "Collaborated with backend teams to design idempotent REST APIs and centralized error handling boundaries.",
    ],
    techStack: ["React", "Redux", "JavaScript ESNext", "Bootstrap", "SCSS", "JWT Auth", "Jenkins"],
  },
];

export const caseStudies = [
  {
    id: "enterprise-mis-dashboard",
    title: "Enterprise MIS & JWT Analytics Platform",
    subtitle: "High-scale enterprise reporting system with 100+ REST API integrations, role-based JWT security, and interactive data visualization.",
    category: "Enterprise & Scalability",
    featured: true,
    coverImage: assetPrefix + "Dashboard_Screenshot.png",
    gallery: [
      assetPrefix + "Dashboard_Screenshot.png",
      assetPrefix + "Dashboard1_Screenshot.png",
      assetPrefix + "Dashboard2_Screenshot.png",
      assetPrefix + "MIS_HomeScreenshot.png",
      assetPrefix + "ReportList_Screenshot.png",
      assetPrefix + "ReportForm_Screenshot.png",
      assetPrefix + "Dashboard_Login.png",
    ],
    problem:
      "Enterprise stakeholders needed an intuitive, centralized management portal to monitor operational telemetry, generate multi-parameter reports, and manage role-based authorization across distributed services without UI bottlenecks.",
    solution:
      "Designed a modular React architecture powered by Redux Toolkit state machines, normalized API caching, dynamic grid views, and a secure JWT authentication flow with automatic token refreshes.",
    architectureHighlights: [
      "100+ REST API endpoints orchestrated through custom centralized data fetching services with automatic retry and exponential backoff.",
      "Optimized large table rendering for 50,000+ records via virtualization and memoized selector patterns.",
      "Role-based Access Control (RBAC) route guards and granular UI action gates.",
      "Custom PDF/Excel report export engine executed asynchronously.",
    ],
    impact: [
      "Reduced report generation latency by 55% for operations teams.",
      "Maintained 0 security regressions across JWT token lifecycle.",
      "Standardized 40+ reusable enterprise UI widgets.",
    ],
    techStack: ["React", "Redux Toolkit", "JWT Auth", "REST APIs", "Bootstrap", "SCSS", "Git"],
    links: {
      demo: null,
      github: "https://github.com/rahulsuch",
    },
  },
  {
    id: "interactive-3d-portfolio",
    title: "Modern Creative Engineering Portfolio",
    subtitle: "High-performance portfolio built with Vite, Framer Motion, Tailwind CSS, and Three.js canvas shaders.",
    category: "Creative Frontend & 3D",
    featured: true,
    coverImage: assetPrefix + "Home_screenshot.png",
    gallery: [
      assetPrefix + "Home_screenshot.png",
      assetPrefix + "About_screenshot.png",
    ],
    problem:
      "Recruiters and engineering leads need a fast, visually compelling showcase of technical capability that demonstrates clean architecture, accessibility, and micro-interaction mastery without bloated runtimes or AI-generated cookie-cutter UI.",
    solution:
      "Engineered an editorial, ultra-responsive portfolio featuring spotlight card shaders, keyboard command palette (Cmd+K), instant dark/light theme engine, and 100/100 Core Web Vitals score.",
    architectureHighlights: [
      "Zero-layout-shift (CLS = 0) responsive layout with adaptive mobile dock.",
      "Command Palette modal with keyboard trap and fast global navigation.",
      "Sub-second Largest Contentful Paint (LCP) with optimized asset strategies.",
      "Granular theme persistence with system-preference detection.",
    ],
    impact: [
      "100/100 Lighthouse Performance, Best Practices, and Accessibility scores.",
      "100% responsive across desktop, tablet, and mobile displays.",
      "Lightweight bundle with optimized vendor chunking in Vite.",
    ],
    techStack: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Three.js", "Lucide Icons"],
    links: {
      demo: "https://rahulsuch.github.io/React-Portfolio-Rahul-Singh/",
      github: "https://github.com/rahulsuch/React-Portfolio-Rahul-Singh",
    },
  },
  {
    id: "form-validation-system",
    title: "Dynamic Schema Form & Validation Engine",
    subtitle: "Configurable JSON schema-driven form generator with live conditional branching and accessibility compliance.",
    category: "Architecture & Systems",
    featured: true,
    coverImage: assetPrefix + "ReportForm_Screenshot.png",
    gallery: [
      assetPrefix + "ReportForm_Screenshot.png",
      assetPrefix + "ReportList_Screenshot.png",
      assetPrefix + "Dashboard_Login.png",
    ],
    problem:
      "Enterprise applications required frequent additions of complex multi-field compliance forms, leading to redundant code and frequent validation discrepancies.",
    solution:
      "Created a declarative JSON-driven form builder supporting nested validation rules, dependent field dependencies, asynchronous verification, and instant accessible error states.",
    architectureHighlights: [
      "Declarative field definitions with customizable custom validator functions.",
      "Auto-save drafts stored safely in indexed storage with debounced sync.",
      "Accessible keyboard focus management and screen-reader ARIA live announcements.",
    ],
    impact: [
      "Accelerated form development cycle from 3 days to under 4 hours per form.",
      "Cut client-side input validation errors by 60%.",
    ],
    techStack: ["React", "JavaScript ESNext", "CSS Modules", "Redux", "REST APIs"],
    links: {
      demo: null,
      github: "https://github.com/rahulsuch",
    },
  },
];

export const techMatrix = [
  {
    category: "Core Languages & Foundations",
    items: [
      { name: "JavaScript (ESNext)", level: "Advanced", desc: "Async/Await, Closures, Event Loop, DOM APIs, Prototypal Inheritance" },
      { name: "TypeScript", level: "Proficient", desc: "Generics, Utility Types, Interfaces, Type Narrowing, Strict Mode" },
      { name: "HTML5 & Semantic Web", level: "Expert", desc: "WCAG 2.1 AA a11y, ARIA landmarks, SEO & Microdata" },
      { name: "CSS3 & SCSS", level: "Expert", desc: "Flexbox, Grid, Custom Properties, Animations, BEM methodology" },
    ],
  },
  {
    category: "Frameworks & State Management",
    items: [
      { name: "React 18 / 19", level: "Expert", desc: "Hooks, Suspense, Concurrent Mode, Profiler, Memoization" },
      { name: "Redux Toolkit (RTK)", level: "Expert", desc: "CreateSlice, RTK Query, Middleware, Normalized Caching" },
      { name: "Next.js / Vite", level: "Advanced", desc: "SSR/SSG, Dynamic Imports, Rollup bundling, Fast HMR" },
      { name: "Context API & Zustand", level: "Advanced", desc: "Lightweight state stores, atomic updates, selector caching" },
    ],
  },
  {
    category: "UI Systems & Motion",
    items: [
      { name: "Tailwind CSS", level: "Expert", desc: "Custom plugins, theme tokens, JIT compiler, dark mode" },
      { name: "Framer Motion", level: "Advanced", desc: "AnimatePresence, Layout transitions, Gestures, Scroll-driven triggers" },
      { name: "Three.js / WebGL", level: "Intermediate", desc: "3D scenes, custom shaders, geometries, lighting, camera controls" },
      { name: "Shadcn / Radix Primitives", level: "Advanced", desc: "Unstyled accessible primitives, keyboard focus management" },
    ],
  },
  {
    category: "Architecture & Performance",
    items: [
      { name: "Core Web Vitals (LCP/INP)", level: "Expert", desc: "Layout shift reduction, thread scheduling, asset preloading" },
      { name: "RESTful & GraphQL APIs", level: "Expert", desc: "Client-side caching, optimistic updates, request deduplication" },
      { name: "JWT Security & Auth", level: "Advanced", desc: "Token rotation, session expiration, RBAC route guards" },
      { name: "Micro-frontends & Monorepos", level: "Proficient", desc: "Module Federation, decoupled deployments, shared design tokens" },
    ],
  },
  {
    category: "Testing & DevOps",
    items: [
      { name: "Git & GitLab / GitHub", level: "Expert", desc: "Branching strategies, code review gates, PR workflows" },
      { name: "CI/CD & Jenkins", level: "Proficient", desc: "Automated test runs, build verification, semantic versioning" },
      { name: "Jest & Vitest", level: "Proficient", desc: "Unit tests, component snapshots, mock API servers" },
      { name: "Postman & API Mocking", level: "Advanced", desc: "Environment collections, integration tests, contract checks" },
    ],
  },
];

export const engineeringPillars = [
  {
    icon: "Zap",
    title: "Performance by Default",
    subtitle: "Core Web Vitals Obsessed",
    points: [
      "Elimination of non-critical JavaScript to achieve sub-second LCP.",
      "Zero Layout Shifts (CLS = 0) with strict aspect-ratio bounding boxes.",
      "Virtualized rendering for high-density datasets avoiding main-thread freezes.",
    ],
  },
  {
    icon: "ShieldCheck",
    title: "Resilient Architecture",
    subtitle: "Predictable & Fault-Tolerant",
    points: [
      "Isolated Error Boundaries preventing white-screen runtime collapses.",
      "Immutable state machines with deterministic reducers via Redux Toolkit.",
      "Strict data contract validation on every external API payload.",
    ],
  },
  {
    icon: "Layout",
    title: "Design Systems & A11y",
    subtitle: "Inclusive & Cohesive UI",
    points: [
      "WCAG 2.1 AA compliance with full keyboard trap and navigation support.",
      "Tokenized design variables ensuring seamless theme transitions.",
      "High-contrast color palettes tested across diverse display hardware.",
    ],
  },
  {
    icon: "Layers",
    title: "Scalable Maintainability",
    subtitle: "Clean Code & Scalable Teams",
    points: [
      "Feature-first directory structures facilitating multi-developer ownership.",
      "Comprehensive TypeScript interfaces minimizing runtime bugs.",
      "Automated CI/CD pipelines with linting and unit test verification.",
    ],
  },
];

export const codeSnippets = [
  {
    title: "Optimized Telemetry Cache Hook",
    language: "typescript",
    description: "Custom React hook combining debounced mutations, optimistic updates, and abort controller cleanup.",
    code: `import { useState, useEffect, useRef, useCallback } from 'react';

export function useTelemetryStream<T>(endpoint: string, options = { pollInterval: 2000 }) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchStream = useCallback(async () => {
    // Cancel in-flight requests to avoid stale responses
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(endpoint, {
        signal: abortControllerRef.current.signal,
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      const payload: T = await response.json();
      setData(payload);
    } catch (err: unknown) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Stream failure:', err);
      }
    } finally {
      setIsPending(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchStream();
    const timer = setInterval(fetchStream, options.pollInterval);
    return () => {
      clearInterval(timer);
      abortControllerRef.current?.abort();
    };
  }, [fetchStream, options.pollInterval]);

  return { data, isPending, refetch: fetchStream };
}`,
  },
  {
    title: "Normalized RTK Data Slice",
    language: "typescript",
    description: "Redux Toolkit entity adapter pattern for zero-duplication large datasets.",
    code: `import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

export interface TelemetryReport {
  id: string;
  metric: string;
  value: number;
  timestamp: string;
}

const reportsAdapter = createEntityAdapter<TelemetryReport>({
  selectId: (report) => report.id,
  sortComparer: (a, b) => b.timestamp.localeCompare(a.timestamp),
});

export const fetchReports = createAsyncThunk('reports/fetch', async (filter: string) => {
  const res = await fetch(\`/api/reports?filter=\${encodeURIComponent(filter)}\`);
  return (await res.json()) as TelemetryReport[];
});

export const reportsSlice = createSlice({
  name: 'reports',
  initialState: reportsAdapter.getInitialState({ status: 'idle' }),
  reducers: {
    reportUpserted: reportsAdapter.upsertOne,
    reportRemoved: reportsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.status = 'succeeded';
        reportsAdapter.setAll(state, action.payload);
      });
  },
});`,
  },
];
