import type { PortfolioContentConfig } from "@/types/content-config";

export const portfolioContent: PortfolioContentConfig = {
  navItems: [
    { label: "Intro", value: "intro" },
    { label: "Designer", value: "designer" },
    { label: "Programmer", value: "programmer" },
    { label: "Animator", value: "animator" },
  ],

  modes: {
    intro: {
      mode: "intro",
      navLabel: "Intro",
      title: "Hi!",
        introLines: [
        [
            { text: "I'm Sara García. A very ambitious " },
            { text: "chick", italic: true },
            { text: "!" },
        ],
        [
            { text: "Du-rum-dush 🥁", size: "sm", muted: true },
        ],
        ],
      leftCards: [
        {
          id: "intro-main",
          text: "I am a frontend programmer with a knack for design and quite a few hats to wear! From UX/UI design, to graphic design and even 3D animation and modeling.",
          size: "lg",
        },
        {
          id: "intro-role",
          text: "I'm a Frontend Developer & UX/UI Designer at Orkapi Technology.",
          size: "sm",
        },
        {
        id: "intro-location",
        text: "Santiago, Dom.Rep.",
        icon: {
            type: "image",
            src: "/icons/intro/location_icon.png",
            alt: "Location icon",
            width: 4,
            height: 4,
        },
        size: "sm",
        },
        {
          id: "intro-education",
          text: "Yes, I have a masters in Education from PUCMM.",
          icon: {
            type: "emoji",
            value: "🎓"
          },
          size:"lg"

        },
      ],
        pills: [
        { id: "pill-lang", text: "Bilingual (ES/EN)" },
        {
            id: "pill-remote",
            text: "Open to remote roles",
            icon: {
            type: "emoji",
            value: "🌐",
            },
        },
        {
            id: "pill-dog",
            text: "Dog Mom",
            icon: {
            type: "image",
            src: "/icons/intro/dogPaws_icon.png",
            alt: "Dog paws icon",
            width: 10,
            height: 10,
            },
        },
        ],
      showcaseLabel: "ThreeJS / Experience Chick",
      rightPanelVariant: "profile",
      rightPanelTopText: "Profile / visual card area",
      rightPanelBottomText:
        "I work across React/Next.js, TypeScript, Tailwind, Figma, Adobe, Blender",
    },

    designer: {
      mode: "designer",
      navLabel: "Designer",
      title: "Designer",
        introLines: [
        [{ text: "From brand identity to product UI, I build systems that feel modern, playful, and intentional." }]
        ],
      leftCards: [
        {
          id: "designer-list",
          text: "• Brand Identity\n\n• UI/UX for Web & Apps\n\n• Social Media Systems\n\n• Design Systems & Guidelines",
          size: "sm",
        },
        {
        id: "designer-tools-grid",
        variant: "toolGrid",
        size: "sm",
        showLabels: false,
        tools: [
            {
            id: "figma",
            label: "Figma",
            icon: {
                src: "/icons/designer/figma_icon.png",
                alt: "Figma icon",
                width: 30,
                height: 30,
            },
            },
            {
            id: "illustrator",
            label: "Illustrator",
            icon: {
                src: "/icons/designer/illustrator_icon.png",
                alt: "Illustrator icon",
                width: 34,
                height: 34,
            },
            },
            {
            id: "canva",
            label: "Canva",
            icon: {
                src: "/icons/designer/canva_icon.png",
                alt: "Canva icon",
                width: 34,
                height: 34,
            },
            },
            {
            id: "photoshop",
            label: "Photoshop",
            icon: {
                src: "/icons/designer/photoshop_icon.png",
                alt: "Photoshop icon",
                width: 34,
                height: 34,
            },
            },
            {
            id: "blender",
            label: "Blender",
            icon: {
                src: "/icons/designer/blender_icon.png",
                alt: "Blender icon",
                width: 34,
                height: 34,
            },
            },
            {
            id: "after-effects",
            label: "After Effects",
            icon: {
                src: "/icons/designer/afterEffect_icon.png",
                alt: "After Effects icon",
                width: 34,
                height: 34,
            },
            },
        ],
        },
        {
          id: "designer-tools-footer",
          text: "Figma · Adobe Illustrator · Photoshop · After Effects · Blender · Notion / FigJam for flows & docs.",
          size: "wide",
        },
      ],
      showcaseLabel: "ThreeJS / Experience Chick",
      rightPanelVariant: "showcaseList",
      rightPanelTitle: "Some of my work:",
      workItems: [
        {
          id: "work-social-media",
          title: "Social Media Proposal:",
          description: "Management, content creation, concept and graphics.",
          image: "/images/designer/social-proposal.jpg",
        },
        {
          id: "work-lotto-gt",
          title: "Lotto Online GT",
          description:
            "UX/UI design web project to sell lottery products in Guatemala.",
          image: "/images/designer/lotto-online-gt.jpg",
        },
        {
          id: "work-orkapi",
          title: "Orkapi srl Webpage",
          description:
            "UX/UI design web project to sell lottery products in Guatemala.",
          image: "/images/designer/orkapi-webpage.jpg",
        },
      ],
    },

    programmer: {
    mode: "programmer",
    navLabel: "Programmer",
    title: "Programmer",
    introLines: [
        [
        {
            text: "With love for polished interfaces and interactive web experiences.",
        },
        ],
    ],
    leftCards: [
        {
        id: "programmer-main",
        text: "I build interfaces that are not only attractive, but structured, scalable, and thoughtful under the hood.",
        size: "lg",
        },
        {
        id: "programmer-tools-pager",
        variant: "toolPager",
        size: "sm",
        showLabels: false,
        pages: [
            {
            id: "page-1",
            tools: [
                {
                id: "react",
                label: "React",
                icon: {
                    src: "/icons/programmer/react_icon.png",
                    alt: "React icon",
                    width: 33,
                    height: 33,
                },
                },
                {
                id: "nextjs",
                label: "Next.js",
                icon: {
                    src: "/icons/programmer/nextJs_icon.png",
                    alt: "Next.js icon",
                    width: 33,
                    height: 33,
                },
                },
                {
                id: "astro",
                label: "Astro",
                icon: {
                    src: "/icons/programmer/astro_icon.png",
                    alt: "Astro icon",
                    width: 33,
                    height: 33,
                },
                },
                {
                id: "vite",
                label: "Vite",
                icon: {
                    src: "/icons/programmer/vite_icon.png",
                    alt: "Vite icon",
                    width: 33,
                    height: 33,
                },
                },
                {
                id: "supabase",
                label: "Supabase",
                icon: {
                    src: "/icons/programmer/supabase_icon.png",
                    alt: "Supabase icon",
                    width: 33,
                    height: 33,
                },
                },
                {
                id: "postman",
                label: "Postman",
                icon: {
                    src: "/icons/programmer/postman_icon.png",
                    alt: "Postman icon",
                    width: 33,
                    height: 33,
                },
                }

            ],
            },
            {
            id: "page-2",
            tools: [
                {
                id: "threejs",
                label: "Three.js",
                icon: {
                    src: "/icons/programmer/threeJs_icon.png",
                    alt: "Three.js icon",
                    width: 33,
                    height: 33,
                },
                },
                {
                id: "tailwind",
                label: "Tailwind",
                icon: {
                    src: "/icons/programmer/tailwind_icon.png",
                    alt: "Tailwind icon",
                    width: 33,
                    height: 33,
                },
                },
                {
                id: "postman",
                label: "Postman",
                icon: {
                    src: "/icons/programmer/postman_icon.png",
                    alt: "Postman icon",
                    width: 33,
                    height: 33,
                },
                }
            ],
            },
        ],
        },
        {
        id: "programmer-focus",
        title:"Frontend Interfaces",
        text: "Responsive Pages • Dashboards • Landing Pages • Marketing Sites • App Screens.",
        size: "wide",
        },
    ],
    showcaseLabel: "ThreeJS / Experience Chick",
    rightPanelVariant: "showcaseList",
    rightPanelTitle: "Featured builds:",
    workItems: [
        {
        id: "prog-1",
        title: "Interactive Portfolio",
        description: "Mode-based interface with responsive layout and 3D center stage.",
        image: "/images/programmer/project-1.jpg",
        },
        {
        id: "prog-2",
        title: "Lottery Frontend Systems",
        description: "Frontend implementation for modern lottery interfaces and dashboards.",
        image: "/images/programmer/project-2.jpg",
        },
        {
        id: "prog-3",
        title: "Game Interfaces",
        description: "Interactive game screens, motion-driven UI, and frontend logic.",
        image: "/images/programmer/project-3.jpg",
        },
    ],
    },

    animator: {
    mode: "animator",
    navLabel: "Animator",
    title: "Animator",
    introLines: [
        [{ text: "Because sometimes a static screen just isn’t enough." }]
    ],
    leftCards: [
        {
        id: "animator-main",
        text: "I use motion and 3D to turn ideas into experiences that feel immersive, playful, and expressive.",
        size: "lg",
        },
        {
        id: "animator-tools",
        text: "• 3D object or product animations\n• Interface motion pieces\n• Interactive 3D scenes\n• Experiments or passion projects\n• Web integrated animation",
        size: "lg",
        },
        {
        id: "animator-tool-after-effects",
        variant: "animatedIcon",
        size: "md",
        tool: {
            id: "after-effects",
            label: "After Effects",
            icon: {
            src: "/icons/designer/afterEffect_icon.png",
            alt: "After Effects icon",
            width: 42,
            height: 42,
            },
        },
        },
        {
        id: "animator-tool-blender",
        variant: "animatedIcon",
        size: "md",
        tool: {
            id: "blender",
            label: "Blender",
            icon: {
            src: "/icons/designer/blender_icon.png",
            alt: "Blender icon",
            width: 38,
            height: 38,
            },
        },
        },

        {
        id: "animator-tool-premier",
        variant: "animatedIcon",
        size: "md",
        tool: {
            id: "premier",
            label: "Premier",
            icon: {
            src: "/icons/animator/premier_icon.png",
            alt: "Premier icon",
            width: 38,
            height: 38,
            },
        },
        },
    ],
    showcaseLabel: "ThreeJS / Experience Chick",
    rightPanelVariant: "showcaseList",
    rightPanelTitle: "Selected motion work:",
    workItems: [
        {
        id: "anim-1",
        title: "3D Presentation Scene",
        description: "Interactive 3D storytelling and product-like visual presentation.",
        image: "/images/animator/anim-1.jpg",
        },
        {
        id: "anim-2",
        title: "Lottery Motion Concepts",
        description: "Animated visual systems for lottery-based interfaces.",
        image: "/images/animator/anim-2.jpg",
        },
        {
        id: "anim-3",
        title: "Web Animation Studies",
        description: "Experiments in visual rhythm, 3D motion, and interface depth.",
        image: "/images/animator/anim-3.jpg",
        },
    ],
    },
  },
};