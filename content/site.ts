/**
 * All homepage copy lives here, so the site can be edited without touching components.
 *
 * FAQ answers reflect how the team works today; update them if that changes.
 */
import type { Tone } from "@/components/types";

export const CONTACT_EMAIL = "forgoodsfu@gmail.com";
export const PARTNER_HREF = `mailto:${CONTACT_EMAIL}?subject=Partnering%20with%20Project%20For%20Good`;
export const JOIN_HREF = `mailto:${CONTACT_EMAIL}?subject=Joining%20Project%20For%20Good`;

export const site = {
  name: "Project For Good",
  description:
    "A team of SFU software engineers building websites and web apps for local non-profits and small businesses, free of charge.",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Our team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Partner with us", href: "#partner", cta: true },
];

export const hero = {
  title: "Engineering",
  titleMuted: "for the city.",
  lede: "We are a team of SFU software engineers building websites and web apps for local non-profits and small businesses, free of charge.",
  image: "/hero-vancouver-dusk.jpg",
  facts: ["Free of charge", "Built by SFU students", "Metro Vancouver"],
};

export const impact: { label: string; body: string; tone: Tone }[] = [
  { label: "Built for you", body: "We write the code ourselves, so it does what your organization needs instead of what a template allows.", tone: "sunset" },
  { label: "Wider reach", body: "Fast, accessible websites and web apps that work on any phone your customers or community carry.", tone: "harbour" },
  { label: "Inquiries that arrive ready", body: "Contact and booking forms that ask the right questions, so every message has what you need to reply.", tone: "moss" },
];

export const steps = [
  {
    title: "We learn how your team works.",
    body: "A free discovery call. Tell us what slows you down and we will tell you honestly whether software can help.",
    screenLabel: "discovery.md",
    screenTitle: "Discovery call notes",
    checklist: [
      { label: "Call booked", done: true },
      { label: "Walk through a normal week", done: true },
      { label: "List the three biggest time sinks", done: true },
      { label: "Decide: build, buy, or leave it", done: false },
    ],
  },
  {
    title: "We scope it in plain language.",
    body: "You get a one-page plan: what we will build, what we will not, and when you will see it.",
    screenLabel: "scope.md",
    screenTitle: "One-page scope",
    checklist: [
      { label: "Goals in your words", done: true },
      { label: "What is in, what is out", done: true },
      { label: "Milestones and demo dates", done: true },
      { label: "Sign-off from you", done: false },
    ],
  },
  {
    title: "A student team builds it.",
    body: "We build it and show you progress along the way, so you can change course before launch.",
    screenLabel: "build.log",
    screenTitle: "Build progress",
    checklist: [
      { label: "Pages and layout", done: true },
      { label: "Your photos and copy in place", done: true },
      { label: "Contact form", done: false },
      { label: "Phone and accessibility check", done: false },
    ],
  },
  {
    title: "We hand it over, and stay reachable.",
    body: "You own the domain, hosting and code, get a short guide to making edits, and can email us when something breaks.",
    screenLabel: "handoff.md",
    screenTitle: "Handoff checklist",
    checklist: [
      { label: "Walkthrough with your team", done: true },
      { label: "Editing guide written", done: true },
      { label: "Domain and hosting in your name", done: true },
      { label: "Contact for fixes agreed", done: true },
    ],
  },
];

// Add `image: "/projects/xyz.jpg"` for a screenshot. External `href`s open in a new tab; no `href` hides the arrow.
export const projects: { tone: Tone; title: string; client: string; service: string; sector: string; image?: string; imageAlt?: string; href?: string }[] = [
  {
    tone: "sunset",
    title: "A booking system for an exotic car rental business",
    client: "ShowtimExotics",
    service: "Web app",
    sector: "Automotive",
    image: "/projects/showtimexotics.jpg",
    imageAlt: "The ShowtimExotics fleet page: a Lamborghini Huracán tail light under the heading Our Fleet",
    href: "https://showtimexotics.ca",
  },
  {
    tone: "lilac",
    title: "A family-facing website for a licensed childcare centre",
    client: "Little Papillon Childcare",
    service: "Website",
    sector: "Childcare",
    image: "/projects/littlepapillon.jpg",
    imageAlt: "The Little Papillon home page: butterfly logo, navigation and a photo slideshow under the heading Licensed childcare in Coquitlam",
    // Add href: "https://www.littlepapillon.ca" once the new site is live.
  },
  {
    tone: "harbour",
    title: "An enrolment website for a Coquitlam child care business",
    client: "Little Light Castle",
    service: "Website",
    sector: "Childcare",
    image: "/projects/littlelightcastle.jpg",
    imageAlt: "The Little Light Castle home page: rainbow logo, navigation and a photo of a bright playroom",
    // Add href: "https://littlelightcastle.ca" once the new site is live.
  },
];

// Add a `role` to show a line under each name.
export const team: { name: string; role?: string }[] = [
  { name: "Armin Ahmadi" },
  { name: "Bardya Nasirian" },
  { name: "Felix Kongyuy" },
  { name: "Nathan Omana" },
];

export const faqs = [
  { q: "Is it actually free?", a: "Yes. We do not charge for design, development or handoff. If your project needs a paid domain or hosting, we keep that cost low and tell you before we start." },
  { q: "Do you only work with non-profits?", a: "No. We work with local non-profits and small businesses. If your organization needs software and cannot justify paying an agency, get in touch." },
  { q: "Who does the work?", a: "Four SFU students: Armin, Bardya, Felix and Nathan. The people on your first call are the people who build it." },
  { q: "How long does a project take?", a: "It depends on the scope. We agree on dates in the one-page plan before we start, and show you progress along the way." },
  { q: "What happens after launch?", a: "The domain, hosting and code are in your name, you get a short guide to making edits, and you can email us when something breaks." },
  { q: "What if we do not need custom software?", a: "Then we will say so. If an off-the-shelf tool fits, we will help you set it up instead." },
];

export const footer = {
  blurb: "A student team at Simon Fraser University building websites and web apps for local non-profits and small businesses, free of charge.",
  columns: [
    { title: "Work", links: [{ label: "Projects", href: "#projects" }, { label: "Process", href: "#process" }, { label: "FAQ", href: "#faq" }] },
    { title: "Get involved", links: [{ label: "Partner with us", href: PARTNER_HREF }, { label: "Join the team", href: JOIN_HREF }, { label: "Sponsor us", href: `mailto:${CONTACT_EMAIL}?subject=Sponsorship` }] },
    // Add Instagram / LinkedIn here once the accounts exist.
    { title: "Connect", links: [{ label: "Email", href: `mailto:${CONTACT_EMAIL}` }, { label: "GitHub", href: "https://github.com/forgoodsfu" }] },
  ],
  legal: `© ${new Date().getFullYear()} Project For Good`,
  note: "Burnaby, BC · Built by students, for the city.",
};
