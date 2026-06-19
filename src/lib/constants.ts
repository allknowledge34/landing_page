import { SiteMetadata, NavLink } from "@/types";

export const SITE_CONFIG: SiteMetadata = {
  name: "Tralance",
  title: "Tralance — The Ultimate Freelance Income & Expense Tracker",
  description: "Take full control of your variable project income and daily spending with total privacy. No servers, no data leaks—just pure money management right in your pocket.",
  url: "https://tralance.com", // Placeholder, change to production domain
  ogImage: "https://tralance.com/og-image.jpg", // Placeholder
  links: {
    twitter: "https://www.instagram.com/",
    github: "https://github.com/allknowledge34",
  },
  contactEmail: "allknowledge34@gmail.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SEO_KEYWORDS = [
  "Freelance Income Tracker",
  "Expense Tracker App",
  "Offline Finance App",
  "Freelancer Budget App",
  "Income and Expense Tracker",
  "freelancer finance app",
  "budget planner"
];
