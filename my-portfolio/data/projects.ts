export type ProjectGalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  slug?: string;
  externalLink?: string;
  image: string;
  heroImage?: string;
  desc: string;
  content?: string;
  overview?: string;
  highlights?: string[];
  gallery?: ProjectGalleryItem[];
  stats?: ProjectStat[];
  meta?: {
    year?: number;
    role?: string;
    tech?: string[];
  };
};

export const projects: Project[] = [
  {
    title: "web shop",
    slug: "web-shop",
    image: "/web-shop.png",
    heroImage: "/web-shop-hero.png",
    desc: "Mini e-commerce website",
    overview:
      "A mini web shop project focused on showing products clearly, guiding users through service flows, and keeping the interface visually memorable.",
    meta: {
      year: 2026,
      role: "Frontend",
      tech: ["Next.js", "Tailwind CSS", "Responsive UI"],
    },
    stats: [
      { label: "Project type", value: "Mini web shop" },
      { label: "UI focus", value: "Game-themed storefront" },
      { label: "Coverage", value: "6+ user flows" },
    ],
    highlights: [
      "Landing page with a themed hero section, navigation, and quick links to core areas.",
      "Product category blocks for accounts, services, and game-related offerings.",
      "Order and service forms designed to collect user information in a simple flow.",
      "Account pages for profile details, password updates, and transaction-related actions.",
      "Authentication screens for login and OTP recovery to complete the shop experience.",
    ],
    content:
      "This project was built as a compact showcase web shop with a strong visual identity. The goal was to combine a distinctive anime-inspired style with clear product grouping, service ordering, and account management screens so the browsing experience feels complete instead of looking like a single landing page.",
    gallery: [
      {
        src: "/web-shop-hero.png",
        alt: "Homepage hero of the web shop",
        title: "Homepage hero",
        caption:
          "The landing section introduces the shop theme with a prominent banner, quick navigation, and featured content.",
      },
      {
        src: "/web-shop.png",
        alt: "Product categories displayed in the web shop",
        title: "Category browsing",
        caption:
          "Main product cards present game categories and services in a layout that is easy to scan on desktop.",
      },
      {
        src: "/web-shop-service.png",
        alt: "Service order form in the web shop",
        title: "Service order form",
        caption:
          "The service page collects account and contact details with a structured form and supporting notes.",
      },
      {
        src: "/web-shop-dashboard.png",
        alt: "User dashboard screen in the web shop",
        title: "Account dashboard",
        caption:
          "Profile and transaction areas are grouped into a clean member dashboard so users can manage actions in one place.",
      },
      {
        src: "/web-shop-payment.png",
        alt: "Payment top-up screen in the web shop",
        title: "Top-up and payments",
        caption:
          "Payment-related screens include clear fields, helper content, and focused cards for faster input.",
      },
      {
        src: "/web-shop-login.png",
        alt: "Login screen of the web shop",
        title: "Login flow",
        caption:
          "Authentication screens keep the same branded style while simplifying account access for returning users.",
      },
      {
        src: "/web-shop-otp.png",
        alt: "OTP recovery screen of the web shop",
        title: "Password recovery",
        caption:
          "OTP-based recovery gives the project a more complete flow beyond the public storefront pages.",
      },
    ],
  },
  {
    title: "Project B",
    externalLink: "https://youtube.com",
    image: "/product2.png",
    desc: "Creative Video",
  },
  {
    title: "Project C",
    slug: "project-c",
    image: "/product3.png",
    desc: "Motion Graphics / Visual",
    meta: {
      year: 2024,
      role: "Motion Designer",
      tech: ["After Effects"],
    },
    content: "Role: Motion Designer. Tools: After Effects. Year: 2024.",
  },
  {
    title: "Project D",
    slug: "project-d",
    image: "/product4.png",
    desc: "Game / Interactive",
    content: "A small interactive game project.",
  },
  {
    title: "Project E",
    externalLink: "https://example.com",
    image: "/product5.png",
    desc: "Visual Experiment",
  },
];
