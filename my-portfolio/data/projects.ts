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

export type ProjectStackItem = {
  name: string;
  share: string;
  percent: number;
};

export type Project = {
  title: string;
  slug?: string;
  externalLink?: string;
  image: string;
  heroImage?: string;
  desc: string;
  publishedAt?: string;
  content?: string;
  overview?: string;
  highlights?: string[];
  gallery?: ProjectGalleryItem[];
  stats?: ProjectStat[];
  stackBreakdown?: ProjectStackItem[];
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
    image: "/web-shop-gallery/shot-02.png",
    heroImage: "/web-shop-gallery/shot-01.png",
    desc: "Mini e-commerce website",
    publishedAt: "2026-04-11",
    overview:
      "A mini web shop project focused on product presentation, service ordering, account management, payment support, and branded authentication flows.",
    meta: {
      year: 2026,
      role: "Frontend",
      tech: ["JavaScript", "CSS", "EJS", "Other"],
    },
    stats: [
      { label: "Project type", value: "Mini web shop" },
      { label: "UI focus", value: "Game-themed storefront" },
      { label: "Captured screens", value: "17 screenshots" },
    ],
    stackBreakdown: [
      { name: "JavaScript", share: "89.5%", percent: 89.5 },
      { name: "CSS", share: "6.6%", percent: 6.6 },
      { name: "EJS", share: "3.4%", percent: 3.4 },
      { name: "Other", share: "0.5%", percent: 0.5 },
    ],
    highlights: [
      "Landing page with a themed hero section, navigation, and quick links to core areas.",
      "Product category blocks for accounts, services, and game-related offerings.",
      "Order and service forms designed to collect user information in a simple flow.",
      "Account pages for profile details, password updates, and transaction-related actions.",
      "Authentication screens for login, register, OTP recovery, and password reset.",
      "Admin-side screens for managing users and website configuration.",
    ],
    content:
      "This project was built as a compact showcase web shop with a strong visual identity. The goal was to combine a distinctive anime-inspired style with clear product grouping, service ordering, and account management screens so the browsing experience feels complete instead of looking like a single landing page.",
    gallery: [
      {
        src: "/web-shop-gallery/shot-01.png",
        alt: "Homepage hero of the web shop",
        title: "Homepage hero",
        caption:
          "The landing section introduces the shop theme with a prominent banner, quick navigation, and featured content.",
      },
      {
        src: "/web-shop-gallery/shot-02.png",
        alt: "Product categories displayed in the web shop",
        title: "Category browsing",
        caption:
          "Main product cards present game categories and services in a layout that is easy to scan on desktop.",
      },
      {
        src: "/web-shop-gallery/shot-03.png",
        alt: "Rental service section in the web shop",
        title: "Rental service section",
        caption:
          "A focused section highlights an individual service category with the same dark visual treatment and a simplified card layout.",
      },
      {
        src: "/web-shop-gallery/shot-04.png",
        alt: "Top-up package page in the web shop",
        title: "Top-up package detail",
        caption:
          "Package selection and order summary blocks help users review the chosen service before completing a transaction.",
      },
      {
        src: "/web-shop-gallery/shot-05.png",
        alt: "Service order form in the web shop",
        title: "Service order form",
        caption:
          "The service page collects account and contact details with a structured form and supporting notes.",
      },
      {
        src: "/web-shop-gallery/shot-06.png",
        alt: "Account inventory list in the web shop",
        title: "Account inventory",
        caption:
          "Search, filters, and product cards are grouped into a compact account listing view for browsing available items.",
      },
      {
        src: "/web-shop-gallery/shot-07.png",
        alt: "Order detail screen in the web shop",
        title: "Order detail view",
        caption:
          "Detailed order pages surface preview media, pricing, and item information in a single purchase-oriented layout.",
      },
      {
        src: "/web-shop-gallery/shot-08.png",
        alt: "Account dashboard screen in the web shop",
        title: "Account dashboard",
        caption:
          "Profile details and account metrics live in a dashboard view that keeps member information visible and readable.",
      },
      {
        src: "/web-shop-gallery/shot-09.png",
        alt: "Change password dashboard screen in the web shop",
        title: "Password update inside dashboard",
        caption:
          "Sensitive account actions are placed inside the dashboard shell so the user experience stays consistent across private pages.",
      },
      {
        src: "/web-shop-gallery/shot-10.png",
        alt: "Top-up payment screen in the web shop",
        title: "Top-up and payments",
        caption:
          "Payment-related screens include clear fields, helper content, and focused cards for faster input.",
      },
      {
        src: "/web-shop-gallery/shot-11.png",
        alt: "Policy page of the web shop",
        title: "Support and policy page",
        caption:
          "The CSBH page adds trust-building information and supports the storefront with longer-form policy content.",
      },
      {
        src: "/web-shop-gallery/shot-12.png",
        alt: "Admin users panel of the web shop",
        title: "Admin user management",
        caption:
          "The admin side includes user listings, quick actions, and simple management tools for store operations.",
      },
      {
        src: "/web-shop-gallery/shot-13.png",
        alt: "Admin settings page of the web shop",
        title: "Admin content settings",
        caption:
          "Configuration screens show how the project also supports editing store branding, links, and policy content.",
      },
      {
        src: "/web-shop-gallery/shot-14.png",
        alt: "Login screen of the web shop",
        title: "Login flow",
        caption:
          "The login screen keeps a lighter visual theme while staying aligned with the project branding and navigation.",
      },
      {
        src: "/web-shop-gallery/shot-15.png",
        alt: "Registration screen of the web shop",
        title: "Registration flow",
        caption:
          "Registration expands the project beyond a storefront into a full account-based user journey.",
      },
      {
        src: "/web-shop-gallery/shot-16.png",
        alt: "OTP request screen of the web shop",
        title: "OTP email request",
        caption:
          "Recovery starts with a dedicated OTP request screen that keeps the process straightforward and branded.",
      },
      {
        src: "/web-shop-gallery/shot-17.png",
        alt: "OTP password reset screen of the web shop",
        title: "OTP password reset",
        caption:
          "The final recovery step completes the authentication flow with email OTP validation and password reset inputs.",
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