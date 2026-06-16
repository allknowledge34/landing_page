import { SITE_CONFIG } from "./constants";

export const ABOUT_SKILLS = [
  "Android SDK / Kotlin",
  "Jetpack Compose",
  "SQLite / Room Database",
  "React / Next.js",
  "Tailwind CSS",
  "Framer Motion",
];

export const DESIGN_PHILOSOPHIES = [
  {
    title: "Data Sovereignty",
    description: "We believe your financial transactions are yours alone. Software should act as a private ledger, not a remote telemetry server.",
  },
  {
    title: "Zero Account Bloat",
    description: "No logins, no password requirements, no confirmation emails. Open the app and start logging transactions instantly.",
  },
  {
    title: "Jetpack Compose Natives",
    description: "Built using modern declarative UI toolkits to ensure that fluid layout renders, dark mode transitions, and speed are native.",
  },
];

export const CONTACT_FAQS = [
  {
    q: "Is Tralance completely offline?",
    a: "Yes. Tralance requests no internet permissions in its Android system manifest. Your database files remain physically local on your device. We hold no remote database servers or cloud backups.",
  },
  {
    q: "How do manual backups work?",
    a: "You can navigate to settings inside the app and trigger a CSV export. This creates a standard spreadsheet ledger file of your variable income and expenses in your phone's local storage folder.",
  },
  {
    q: "Does Tralance read my transaction SMS alerts?",
    a: "If you grant the optional SMS permission, the native Android engine scans incoming transaction notification templates locally. This allows you to auto-parse expense details without cloud syncs.",
  },
  {
    q: "Will there be an iOS version?",
    a: "Currently, Tralance is native to Android, written from scratch utilizing Kotlin and Jetpack Compose declaration standards to guarantee native rendering speeds and zero analytical trackers.",
  },
];
