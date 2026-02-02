export type Project = {
  title: string;
  slug?: string;          // có => project nội bộ
  externalLink?: string;  // có => link ngoài
  image: string;
  desc: string;
  content?: string;
};

export const projects: Project[] = [
  {
    title: "Project A",
    slug: "project-a",
    image: "/product1.png",
    desc: "Motion Graphics / Visual",
    content:
      "This project focuses on clean visual, smooth animation and storytelling.",
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
    content:
      "A visual project with smooth motion and strong color composition.",
  },
];
