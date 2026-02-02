export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: "internal" | "external";
  link: string;
};

export const projects: Project[] = [
  {
    id: "profile-website",
    title: "Personal Profile Website",
    description: "My personal portfolio built with Next.js",
    image: "/projects/profile.png",
    type: "internal",
    link: "/projects/profile-website",
  },
  {
    id: "youtube-channel",
    title: "YouTube Motion Channel",
    description: "My motion graphics channel",
    image: "/projects/youtube.png",
    type: "external",
    link: "https://youtube.com/@shikoft",
  },
];
