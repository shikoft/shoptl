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
  directLink?: string;
  embedUrl?: string;
  image: string;
  heroImage?: string;
  desc: string;
  publishedAt?: string;
  content?: string;
  overview?: string;
  storyTitle?: string;
  storyDetails?: string;
  designDirection?: string;
  galleryIntro?: string;
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
    storyTitle: "Built as a full mini-shop experience",
    storyDetails:
      "Instead of showing only a homepage, this case study highlights the important screens that make the project feel complete: browsing products, ordering services, handling account actions, and supporting login or recovery flows.",
    designDirection:
      "Dark storefront styling, strong image-driven sections, and compact form layouts to keep the shop experience focused.",
    galleryIntro:
      "The gallery below uses all captured screenshots to show how the shop keeps a consistent visual identity across landing, catalog, account, payment, admin, and authentication flows.",
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
    title: "Happy Birthday",
    directLink: "/happy-birthday/index.html",
    image: "/happy-birthday/images/photo-03.jpg",
    heroImage: "/happy-birthday/images/photo-04.jpg",
    desc: "Interactive birthday scrapbook",
    publishedAt: "2026-04-21",
    overview:
      "A cute interactive birthday page built from a standalone scrapbook HTML file, converted into an isolated portfolio project so its animation, canvas effects, and styles do not conflict with the main website.",
    storyTitle: "A birthday gift as an interactive scrapbook",
    storyDetails:
      "The original standalone HTML is kept inside an iframe preview. That isolation lets the scrapbook keep its own full-screen layout, intro overlay, cake animation, notebook pages, confetti, and floating effects without leaking CSS or JavaScript into the portfolio.",
    designDirection:
      "Soft pink scrapbook styling, animated cake scene, polaroid photo pages, floating decorations, and a warm birthday message.",
    galleryIntro:
      "These are the 8 images from the ZIP file, also used inside the scrapbook pages as the replacement photos.",
    meta: {
      year: 2026,
      role: "Frontend",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    stats: [
      { label: "Project type", value: "Birthday scrapbook" },
      { label: "Format", value: "Isolated HTML iframe" },
      { label: "Photos", value: "8 images" },
    ],
    highlights: [
      "Standalone birthday HTML converted into a portfolio-safe embedded project.",
      "All 8 ZIP images copied into the project and inserted into the scrapbook photo array.",
      "Interactive intro, cake screen, notebook pages, confetti canvas, and animated floaters preserved.",
      "The scrapbook runs inside an iframe to prevent global CSS and JavaScript conflicts.",
    ],
    content:
      "This project turns a custom birthday scrapbook HTML page into a clean portfolio project. The scrapbook keeps its original interactive feeling while the portfolio page wraps it with project information, published date, tech stack, and a separate image gallery.",
    gallery: [
      {
        src: "/happy-birthday/images/photo-01.jpg",
        alt: "Birthday scrapbook photo 1",
        title: "Scrapbook photo 01",
        caption: "The first image inserted into the birthday scrapbook.",
      },
      {
        src: "/happy-birthday/images/photo-02.jpg",
        alt: "Birthday scrapbook photo 2",
        title: "Scrapbook photo 02",
        caption: "The second image used as a polaroid memory page.",
      },
      {
        src: "/happy-birthday/images/photo-03.jpg",
        alt: "Birthday scrapbook photo 3",
        title: "Scrapbook photo 03",
        caption: "The third image placed inside the first photo spread.",
      },
      {
        src: "/happy-birthday/images/photo-04.jpg",
        alt: "Birthday scrapbook photo 4",
        title: "Scrapbook photo 04",
        caption: "The fourth image used for the birthday scrapbook gallery.",
      },
      {
        src: "/happy-birthday/images/photo-05.jpg",
        alt: "Birthday scrapbook photo 5",
        title: "Scrapbook photo 05",
        caption: "The fifth image inserted into the second photo spread.",
      },
      {
        src: "/happy-birthday/images/photo-06.jpg",
        alt: "Birthday scrapbook photo 6",
        title: "Scrapbook photo 06",
        caption: "The sixth image used as one of the scrapbook memories.",
      },
      {
        src: "/happy-birthday/images/photo-07.jpg",
        alt: "Birthday scrapbook photo 7",
        title: "Scrapbook photo 07",
        caption: "The seventh image added to complete the photo set.",
      },
      {
        src: "/happy-birthday/images/photo-08.jpg",
        alt: "Birthday scrapbook photo 8",
        title: "Scrapbook photo 08",
        caption: "The eighth image used in the birthday scrapbook.",
      },
    ],
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
