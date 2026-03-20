import type { AboutModalContent } from "@/types";

export const aboutModalContent: AboutModalContent = {
  image: {
    src: "/images/avatar.png",
    alt: "Sara García profile portrait",
    width: 240,
    height: 300,
  },
  metaLabel: "Based in",
  location: "Santiago, Dominican Republic",
  name: "Sara García",
  role: "Frontend Developer • UX/UI Designer • Creative Technologist",
  paragraphs: [
    "I’m a naturally curious and highly driven person who enjoys turning ideas into experiences that feel polished, expressive, and well put together.",
    "I tend to thrive in projects where I can bring both visual sensitivity and technical thinking to the table — especially when the goal is to create something clear, useful, and a little unexpected.",
  ],
  highlights: [
    {
      id: "lang",
      text: "Bilingual: Spanish / English",
    },
    {
      id: "hybrid",
      text: "Frontend + design hybrid",
    },
    {
      id: "interactive",
      text: "Interactive and 3D-friendly workflows",
    },
    {
      id: "availability",
      text: "Open to freelance and full-time opportunities",
    },
  ],
  actions: [
    {
      id: "download-cv",
      label: "Download CV",
      type: "download",
      href: "/Sara-Garcia-CV.pdf",
      variant: "primary",
    },
    {
      id: "experience-cv",
      label: "Experience my CV",
      type: "link",
      href: "/experience-cv",
      variant: "secondary",
    },
    {
      id: "email",
      label: "Email me",
      type: "email",
      email: "sgr.saragarciarosado@gmail.com",
      subject: "Hello Sara — Portfolio Inquiry",
      variant: "secondary",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      type: "link",
      href: "https://www.linkedin.com/in/garafly",
      external: true,
      variant: "secondary",
    },
  ],
};