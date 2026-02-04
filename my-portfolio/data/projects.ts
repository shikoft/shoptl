//import { Project } from "./type";  tách file riêng thì dùng
export type Project = {
  title: string;
  slug?: string;          // project nội bộ
  externalLink?: string;  // link ngoài
  image: string;
  desc: string;
  content?: string;
  meta?: {
    year?: number;
    role?: string;
    tech?: string[];
  };
};

export const projects: Project[] = [
  {
    title: "Project A",
    slug: "project-a",
    image: "/product1.png",
    desc: "Motion Graphics / Visual",
    meta: {
      year: 2024,
      role: "Frontend",
      tech: ["Next.js", "Tailwind"],
    },
    content:
      "This project focuses on clean visual, smooth animation and storytelling.",
  },

  {
    title: "Project B",
    externalLink: "https://youtube.com", // link ngoài
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
    content: `
• Role: Motion Designer
• Tools: After Effects
• Year: 2024
    `,
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
    externalLink: "https://example.com", // link ngoài
    image: "/product5.png",
    desc: "Visual Experiment",
  },
];
