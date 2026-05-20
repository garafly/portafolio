import type { Locale } from "@/types";
import type { AboutModalContent } from "@/types";

export const aboutModalContent: Record<Locale, AboutModalContent> = {
  en: {
    image: {
      src: "/images/avatar.png",
      alt: "Sara García profile portrait",
      width: 240,
      height: 300,
    },
    metaLabel: "Based in",
    location: "Santiago, Dominican Republic",
    name: "Sara García",
    role: "Frontend Developer • UX/UI Designer",
    paragraphs: [
      "I’m a naturally curious and highly driven person who enjoys turning ideas into experiences that feel polished, expressive, and well put together.",
      "I tend to thrive in projects where I can bring both visual sensitivity and technical thinking to the table, especially when the goal is to create something clear, useful, and a little unexpected.",
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
  },
  es: {
    image: {
      src: "/images/avatar.png",
      alt: "Retrato de perfil de Sara García",
      width: 240,
      height: 300,
    },
    metaLabel: "Desde",
    location: "Santiago, República Dominicana",
    name: "Sara García",
    role: "Frontend Developer • UX/UI Designer • Creative Technologist",
    paragraphs: [
      "Soy una persona naturalmente curiosa, muy motivada y disfruto convertir ideas en experiencias que se sientan pulidas, expresivas y bien construidas.",
      "Suelo disfrutar más los proyectos donde puedo aportar tanto sensibilidad visual como pensamiento técnico — especialmente cuando la meta es crear algo claro, útil y con un toque inesperado.",
    ],
    highlights: [
      { id: "lang", text: "Bilingüe: Español / Inglés" },
      { id: "hybrid", text: "Frontend + diseño" },
      { id: "interactive", text: "Workflows interactivos y 3D-friendly" },
      { id: "open", text: "Disponible para freelance y tiempo completo" },
    ],
    actions: [
      {
        id: "download-cv",
        label: "Descargar CV",
        type: "download",
        href: "/Sara-Garcia-CV.pdf",
        variant: "primary",
      },
      {
        id: "email",
        label: "Escríbeme",
        type: "email",
        email: "sgr.saragarciarosado@gmail.com",
        subject: "Hola Sara — Consulta desde tu portafolio",
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
  },
};