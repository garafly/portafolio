import type { PortfolioContentConfig } from "@/types/content-config";
import type { Locale } from "@/types";

const englishContent: PortfolioContentConfig = {
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
            size: "wide",
          },
          {
            id: "intro-role",
            text: "I'm currently a Frontend Developer & UX/UI Designer at Orkapi.",
            size: "md",
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
          size: "md",
          },
          {
            id: "intro-education",
            text: "Yes, I have a masters in Education from PUCMM. I'm self-taught programmer, designer and animmator.",
            icon: {
              type: "emoji",
              value: "🎓"
            },
            size:"wide"

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
            size: "md",
          },
          {
          id: "designer-tools-grid",
          variant: "toolGrid",
          size: "md",
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
      id: "designer-social-media-proposal",
      title: "Social Media Proposal",
      summary:
        "This was a project I presented for the opportunity to manage, direct and design the social media content for a Lottery Company in Guatemala.",
      involvement:
        "This project required creating a brand identity, designing all content, planning and scheduling of publications for social media management.",
      year: "2026",
      mainImage: {
        src: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_main.png",
        alt: "Social Media Proposal main image",
      },
      gallery: [
        {
          id: "social-1",
          type: "image",
          src: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-1.png",
          alt: "Social Media Proposal gallery image 1",
        },
        {
          id: "social-2",
          type: "image",
          src: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-2.png",
          alt: "Social Media Proposal gallery image 2",
        },
        {
          id: "social-5",
          type: "image",
          src: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-5.png",
          alt: "Social Media Proposal gallery image 2",
        },
        {
          id: "social-6",
          type: "image",
          src: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-6.png",
          alt: "Social Media Proposal gallery image 2",
        },
              {
          id: "social-3",
          type: "video",
          src: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-3.mp4",
          title: "Social Media Proposal demo video",
          poster: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-3-cover.png",
        },
        {
          id: "social-4",
          type: "video",
          src: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-4.mp4",
          title: "Social Media Proposal demo video",
          poster: "/images/designer-projects/socialMediaProposal-1/socialMediaProposal1_gallery-4-cover.png",
        },
      ],
      tags: [
        { id: "graphic-design", label: "Graphic Design" },
        { id: "social-media", label: "Social Media" },
        { id: "branding", label: "Branding" },
      ],
      liveUrl: "",
    },
    {
      id: "uxui-fullstack-dos-react-app",
      title: "Dos React App",
      summary:
        "Dos is a personal interactive relationship and connection-focused app designed to turn conversations, dates, and shared moments into playful digital experiences. The app is currently in development, with a tentative release planned for the end of 2026.",
      involvement:
        "Dos is one of my personal projects, where I have worked on both the UX/UI design and Full Stack development of the app. I have been shaping the user experience, interface system, game flows, and implementation from the ground up. My role includes structuring the product, designing the visual language, building interactive screens, and developing the functionality needed to bring the experience to life.",
      year: "2026",
      mainImage: {
        src: "/images/designer-projects/dos-app/dos-app-main.png",
        alt: "Dos React App main image",
      },
      gallery: [
        {
          id: "dos-1",
          type: "image",
          src: "/images/designer-projects/dos-app/dos-app-gallery-1.png",
          alt: "Dos React App gallery image 1",
        },
        {
          id: "dos-2",
          type: "image",
          src: "/images/designer-projects/dos-app/dos-app-gallery-2.png",
          alt: "Dos React App gallery image 2",
        },
        {
          id: "dos-3",
          type: "image",
          src: "/images/designer-projects/dos-app/dos-app-gallery-3.png",
          alt: "Dos React App gallery image 3",
        },
      ],
      tags: [
        { id: "ux-ui", label: "UX/UI" },
        { id: "fullstack", label: "FullStack" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "supabase", label: "Supabase" },
        { id: "react", label: "React" },
        { id: "product-design", label: "Product Design" },
      ],
      liveUrl: "",
    },
    {
      id: "uxui-orkapi-corporate-website",
      title: "Orkapi Corporate Website Redesign",
      summary:
        "This project focused on the UX/UI design of Orkapi’s corporate website, creating a digital presence that communicates the company’s services, identity, and professionalism in a clear and engaging way.",
      involvement:
        "I worked on the UX/UI design of the website, helping define layout structure, visual hierarchy, interface styling, and overall user experience. The goal was to create a modern, polished, and brand-aligned corporate site that felt both trustworthy and visually strong.",
      year: "2025",
      mainImage: {
        src: "/images/designer-projects/orkapiRedesignedWebsite/orkapi-redesign.png",
        alt: "Orkapi Corporate Website main image",
      },
      gallery: [
        {
          id: "orkapi-1",
          type: "image",
          src: "/images/designer-projects/orkapiRedesignedWebsite/orkapi-redesign_gallery-1.png",
          alt: "Orkapi Corporate Website gallery image 1",
        },
      {
          id: "orkapi-2",
          type: "image",
          src: "/images/designer-projects/orkapiRedesignedWebsite/orkapi-redesign_gallery-2.png",
          alt: "Orkapi Corporate Website gallery image 2",
        }

      ],
      tags: [
        { id: "ux-ui", label: "UX/UI" },
        { id: "web-design", label: "Web Design" },
        { id: "corporate", label: "Corporate" },
        { id: "branding", label: "Branding" },
      ],
      liveUrl: "https://orkapi.com",
    }
  ]
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
          size: "wide",
          },
          {
          id: "programmer-tools-pager",
          variant: "toolPager",
          size: "md",
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
          id: "reusable-ui",
          text: "Animations, transitions, 3D integrations, playful UI, game-like interactions.",
          size: "md",
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
    id: "dos-app-fullstack",
    title: "Dos App",
    summary:
      "Dos is a personal product I am building to turn conversations, dates, and shared moments into playful digital experiences. The app is currently in development, with a tentative release planned for the end of 2026.",
    involvement:
      "As the creator of Dos, I have worked on the Full Stack development of the app, building both the frontend experience and the functionality behind it. My work includes implementing interactive flows, structuring reusable components and logic, managing application state, connecting backend-powered features, and helping shape the app into a scalable and engaging product.",
    year: "2026",
      mainImage: {
        src: "/images/designer-projects/dos-app/dos-app-main.png",
        alt: "Dos React App main image",
      },
      gallery: [
        {
          id: "dos-fullstack-1",
          type: "image",
          src: "/images/designer-projects/dos-app/dos-app-gallery-1.png",
          alt: "Dos React App gallery image 1",
        },
        {
          id: "dos-fullstack-2",
          type: "image",
          src: "/images/designer-projects/dos-app/dos-app-gallery-2.png",
          alt: "Dos React App gallery image 2",
        },
        {
          id: "dos-fullstack-3",
          type: "image",
          src: "/images/designer-projects/dos-app/dos-app-gallery-3.png",
          alt: "Dos React App gallery image 3",
        },
    ],
    tags: [
      { id: "fullstack", label: "Full Stack" },
      { id: "react", label: "React" },
      { id: "app-development", label: "App Development" },
      { id: "interactive-product", label: "Interactive Product" },
    ],
    liveUrl: "",
  },
  {
      id: "lotto-quetzal-frontend-development",
      title: "Lotto Quetzal",
      summary:
        "Lotto Quetzal is a lottery platform project focused on delivering a responsive, engaging, and easy-to-navigate digital experience across key user-facing sections.",
      involvement:
        "I worked on the frontend development of the platform, translating interface designs into responsive, production-ready code. My role included building reusable UI components, implementing layouts, refining interaction behavior, and contributing to a consistent user experience across the platform’s main views.",
      year: "2025",
      mainImage: {
        src: "/images/programmer-projects/lottoQuetzal_main.png",
        alt: "Lotto Quetzal main image",
      },
      gallery: [
        {
          id: "quetzal-1",
          type: "image",
          src: "/images/programmer-projects/lottoQuetzal_gallery-1.png",
          alt: "Lotto Quetzal gallery image 1",
        }
      ],
      tags: [
        { id: "frontend-development", label: "Frontend Development" },
        { id: "responsive-ui", label: "Responsive UI" },
        { id: "web-platform", label: "Web Platform" },
        { id: "lottery-tech", label: "Lottery Tech" },
      ],
      liveUrl: "https://lottoquetzal.com",
    },
      {
      id: "orkapi-technology-frontend-corporate-webpage",
      title: "Orkapi Technology Corporate Webpage",
      summary:
        "This project focused on the development of a responsive corporate website for Orkapi Technology, aimed at delivering a clear, modern, and professional digital presence.",
      involvement:
        "I worked on the frontend development of the website, converting design direction into structured, maintainable, and responsive interfaces. My role included implementing page layouts, building reusable sections, refining UI behavior, and ensuring the final experience felt polished across different screen sizes and devices.",
      year: "2025",
      mainImage: {
        src: "/images/designer-projects/orkapiRedesignedWebsite/orkapi-redesign.png",
        alt: "Orkapi Technology Corporate Webpage main image",
      },
      gallery: [
        {
          id: "orkapi-1",
          type: "image",
          src: "/images/designer-projects/orkapiRedesignedWebsite/orkapi-redesign_gallery-1.png",
          alt: "Orkapi Corporate Website gallery image 1",
        },
      {
          id: "orkapi-2",
          type: "image",
          src: "/images/designer-projects/orkapiRedesignedWebsite/orkapi-redesign_gallery-2.png",
          alt: "Orkapi Corporate Website gallery image 2",
        }
      ],
      tags: [
        { id: "frontend-development", label: "Frontend Development" },
        { id: "corporate-website", label: "Corporate Website" },
        { id: "web-development", label: "Web Development" },
        { id: "responsive-design", label: "Responsive Design" },
      ],
      liveUrl: "https://orkapi.com",
    }
  ]
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
          size: "wide",
          },
          {
          id: "animator-tools",
          text: "• 3D object or product animations\n• Interface motion pieces\n• Interactive 3D scenes\n• Experiments or passion projects\n• Web integrated animation",
          size: "lg",
          },
          {
          id: "animator-tool-after-effects",
          variant: "animatedIcon",
          size: "sm",
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
          size: "sm",
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
          size: "sm",
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
      rightPanelTitle: "Some of my work:",
      workItems: [
      {
          id: "lotto-draw-lottery-game-animation",
          title: "Lotto Draw for Lottery Game",
          summary:
          "This animation project was created to simulate the excitement and visual energy of a lottery draw for a digital gaming experience.",
          involvement:
          "I created the animation in Blender, focusing on the motion, timing, and visual presentation of the lottery draw sequence. The goal was to make the experience feel dynamic, polished, and engaging while supporting the overall atmosphere of the game.",
          year: "2026",
          mainImage: {
          src: "/images/animator-projects/primera-main.png",
          alt: "Lotto Draw for Lottery Game main image",
          },
          gallery: [
          {
              id: "primera-lotto-draw-1",
              type: "image",
              src: "/images/animator-projects/primera-gallery-1.png",
              alt: "Lotto Draw for Lottery Game gallery image 1",
          },
          {
              id: "primera-lotto-draw-2",
              type: "image",
              src: "/images/animator-projects/primera-gallery-2.png",
              alt: "Lotto Draw for Lottery Game gallery image 2",
          },
          {
              id: "primera-lotto-draw-3",
              type: "video",
              src: "/images/animator-projects/primerita_sample.mp4",
              title: "Lotto Draw for Lottery Game demo video",
              poster: "/images/animator-projects/primera-gallery-3.png",
          },
          ],
          tags: [
          { id: "blender", label: "Blender" },
          { id: "3d-animation", label: "3D Animation" },
          { id: "motion-design", label: "Motion Design" },
          { id: "lottery-game", label: "Lottery Game" },
          ],
          liveUrl: "",
      },
      {
          id: "runner-app-features-animation-1",
          title: "Runner App Features Animation",
          summary:
          "This animation was created to showcase and communicate the features of an app in a clear, engaging, and visually appealing way.",
          involvement:
          "I created this piece in After Effects, using motion design to highlight the app’s features and improve how the product was presented. My work focused on visual storytelling, rhythm, transitions, and creating a dynamic presentation that made the app feel more intuitive and attractive.",
          year: "2025",
          mainImage: {
          src: "/images/animator-projects/runner-main.png",
          alt: "Runner App Features Animation main image",
          },
          gallery: [
          {
              id: "runner-1",
              type: "video",
              src: "/images/animator-projects/runner_sample.mp4",
              title: "Runner App Features Animation demo video",
              poster: "/images/animator-projects/runner-gallery-cover.png",
          }
          ],
          tags: [
          { id: "after-effects", label: "After Effects" },
          { id: "motion-graphics", label: "Motion Graphics" },
          { id: "feature-showcase", label: "Feature Showcase" },
          { id: "app-presentation", label: "App Presentation" },
          ],
          liveUrl: "",
      },
      {
          id: "lotto-draw-lottery-game-animation-2",
          title: "Lotto Draw for Lottery Game",
          summary:
          "This animation project was created to simulate the excitement and visual energy of a lottery draw for a digital gaming experience.",
          involvement:
          "I created the animation in Blender, focusing on the motion, timing, and visual presentation of the lottery draw sequence. The goal was to make the experience feel dynamic, polished, and engaging while supporting the overall atmosphere of the game.",
          year: "2024",
          mainImage: {
          src: "/images/animator-projects/loteka-main.png",
          alt: "Lotto Draw for Lottery Game main image",
          },
          gallery: [
          {
              id: "lotto-draw-loteka-1",
              type: "video",
              src: "/images/animator-projects/loteka_sample.mp4",
              title: "Lotto Draw for Lottery Game demo video",
              poster: "/images/animator-projects/loteka-gallery-cover.png",
          },
          ],
          tags: [
          { id: "blender", label: "Blender" },
          { id: "3d-animation", label: "3D Animation" },
          { id: "motion-design", label: "Motion Design" },
          { id: "lottery-game", label: "Lottery Game" },
          ],
          liveUrl: "",
      },
      {
          id: "lotto-draw-lottery-game-animation-3",
          title: "Rulette for Lottery Game",
          summary:
          "This animation project was created to simulate the excitement and visual energy of a lottery draw for a digital gaming experience.",
          involvement:
          "I created the animation in Blender, focusing on the motion, timing, and visual presentation of the lottery draw sequence. The goal was to make the experience feel dynamic, polished, and engaging while supporting the overall atmosphere of the game.",
          year: "2023",
          mainImage: {
          src: "/images/animator-projects/ruleta-main.png",
          alt: "Rulette for Lottery Game main image",
          },
          gallery: [
          {
              id: "rulette-draw-1",
              type: "video",
              src: "/images/animator-projects/ruleta_sample.mp4",
              title: "Rulette for Lottery Game demo video",
              poster: "/images/animator-projects/ruleta-gallery-cover.png",
          },
          ],
          tags: [
          { id: "blender", label: "Blender" },
          { id: "3d-animation", label: "3D Animation" },
          { id: "motion-design", label: "Motion Design" },
          { id: "lottery-game", label: "Lottery Game" },
          ],
          liveUrl: "",
      },
      {
          id: "lotto-draw-lottery-game-animation-4",
          title: "Lotto Draw for Lottery Game",
          summary:
          "This animation project was created to simulate the excitement and visual energy of a lottery draw for a digital gaming experience.",
          involvement:
          "I created the animation in Blender, focusing on the motion, timing, and visual presentation of the lottery draw sequence. The goal was to make the experience feel dynamic, polished, and engaging while supporting the overall atmosphere of the game.",
          year: "2023",
          mainImage: {
          src: "/images/animator-projects/azulita-main.png",
          alt: "Lotto Draw for Lottery Game main image",
          },
          gallery: [
          {
              id: "lotto-draw-azulita-1",
              type: "video",
              src: "/images/animator-projects/azulita_sample.mp4",
              title: "Lotto Draw for Lottery Game demo video",
              poster: "/images/animator-projects/azulita-gallery-cover.png",
          },
          ],
          tags: [
          { id: "blender", label: "Blender" },
          { id: "3d-animation", label: "3D Animation" },
          { id: "motion-design", label: "Motion Design" },
          { id: "lottery-game", label: "Lottery Game" },
          ],
          liveUrl: "",
      },
      ]
      },
    },

};

const spanishContent: PortfolioContentConfig = {
  ...englishContent,
  navItems: [
    { label: "Inicio", value: "intro" },
    { label: "Diseñadora", value: "designer" },
    { label: "Programadora", value: "programmer" },
    { label: "Animadora", value: "animator" },
  ],
  modes: {
    ...englishContent.modes,

    intro: {
      ...englishContent.modes.intro,
      navLabel: "Inicio",
      title: "¡Hola!",
      introLines: [
        [{ text: "Soy Sara García. ¡Una mujer muy " }, 
         { text: "agallúa", italic: true },
         { text: " !"},
        ],
                   
        [{ text: "Du-rum-dush 🥁", size: "sm", muted: true }],
      ],
      leftCards: [
        {
          id: "intro-main",
          text: "Soy programadora frontend con una inclinación natural hacia el diseño y varios sombreros bien puestos. Desde UX/UI, hasta animación y modelado 3D.",
          size: "wide",
        },
        {
          id: "intro-role",
          text: "Soy Frontend Developer y UX/UI Designer en Orkapi Technology.",
          size: "md",
        },
        {
          id: "intro-location",
          text: "Santiago, Rep. Dom.",
          icon: {
            type: "image",
            src: "/icons/intro/location_icon.png",
            alt: "Ícono de ubicación",
            width: 4,
            height: 4,
          },
          size: "md",
        },
        {
          id: "intro-education",
          text: "Sí, tengo una maestría en Educación en PUCMM.",
          icon: {
            type: "emoji",
            value: "🎓",
          },
          size: "wide",
        },
      ],
      pills: [
        { id: "pill-lang", text: "Bilingüe (ES/EN)" },
        {
          id: "pill-remote",
          text: "Abierta a trabajo remoto",
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
            alt: "Ícono de huellas",
            width: 10,
            height: 10,
          },
        },
      ],
      rightPanelBottomText:
        "Trabajo con React/Next.js, TypeScript, Tailwind, Figma, Adobe y Blender",
    },

    designer: {
      ...englishContent.modes.designer,
      navLabel: "Diseñadora",
      title: "Diseñadora",
      introLines: [
        [
          {
            text: "Desde identidad de marca hasta interfaces de producto, creo sistemas que se sienten modernos, expresivos e intencionales.",
          },
        ],
      ],
      leftCards: [
        {
          id: "designer-list",
          text: "• Identidad de Marca\n\n• UI/UX para Web y Apps\n\n• Sistemas para Redes Sociales\n\n• Design Systems y Guías",
          size: "md",
        },
        englishContent.modes.designer.leftCards[1],
        {
          id: "designer-tools-footer",
          text: "Figma · Adobe Illustrator · Photoshop · After Effects · Blender · Notion / FigJam para flujos y documentación.",
          size: "wide",
        },
      ],
      rightPanelTitle: "Algo de mi trabajo:",
      workItems: englishContent.modes.designer.workItems?.map((item) => {
        switch (item.id) {
          case "designer-social-media-proposal":
            return {
              ...item,
              title: "Propuesta de Social Media",
              summary:
                "Este fue un proyecto que presenté para optar por la oportunidad de gestionar, dirigir y diseñar el contenido de redes sociales para una empresa de lotería en Guatemala.",
              involvement:
                "Este proyecto requería crear una identidad de marca, diseñar todo el contenido, planificar y calendarizar publicaciones para la gestión de redes sociales.",
              tags: [
                { id: "graphic-design", label: "Diseño Gráfico" },
                { id: "social-media", label: "Redes Sociales" },
                { id: "branding", label: "Branding" },
              ],
            };

          case "uxui-fullstack-dos-react-app":
            return {
              ...item,
              title: "App Dos",
              summary:
                "Dos es una app interactiva enfocada en relaciones y conexión, diseñada para convertir conversaciones, citas y momentos compartidos en experiencias digitales juguetonas. Actualmente está en desarrollo y su lanzamiento tentativo es para finales de 2026.",
              involvement:
                "Dos es uno de mis proyectos personales, donde he trabajado tanto el UX/UI como el desarrollo Full Stack. He ido definiendo la experiencia del usuario, el sistema visual, los flujos de juego y la implementación desde cero.",
              tags: [
                { id: "ux-ui", label: "UX/UI" },
                { id: "fullstack", label: "Full Stack" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "supabase", label: "Supabase" },
                { id: "react", label: "React" },
                { id: "product-design", label: "Diseño de Producto" },
              ],
            };

          case "uxui-orkapi-corporate-website":
            return {
              ...item,
              title: "Rediseño del Sitio Corporativo de Orkapi",
              summary:
                "Este proyecto se enfocó en el diseño UX/UI del sitio corporativo de Orkapi, creando una presencia digital que comunicara con claridad la identidad, servicios y profesionalismo de la empresa.",
              involvement:
                "Trabajé en la dirección UX/UI del sitio, ayudando a definir la estructura de layout, la jerarquía visual, el estilo de interfaz y la experiencia general del usuario.",
              tags: [
                { id: "ux-ui", label: "UX/UI" },
                { id: "web-design", label: "Diseño Web" },
                { id: "corporate", label: "Corporativo" },
                { id: "branding", label: "Branding" },
              ],
            };

          default:
            return item;
        }
      }),
    },

    programmer: {
      ...englishContent.modes.programmer,
      navLabel: "Programadora",
      title: "Programadora",
      introLines: [
        [
          {
            text: "Con amor por las interfaces pulidas y las experiencias web interactivas.",
          },
        ],
      ],
      leftCards: [
        {
          id: "programmer-main",
          text: "Construyo interfaces que no solo se ven bien, sino que también están bien pensadas, estructuradas y listas para escalar.",
          size: "wide",
        },
        englishContent.modes.programmer.leftCards[1],
        {
          id: "reusable-ui",
          text: "Animaciones, transiciones, integraciones 3D, interfaces juguetonas e interacciones tipo juego.",
          size: "md",
        },
        {
          id: "programmer-focus",
          title: "Interfaces Frontend",
          text: "Páginas Responsivas • Dashboards • Landing Pages • Marketing Sites • Pantallas para Apps.",
          size: "wide",
        },
      ],
      rightPanelTitle: "Proyectos destacados:",
      workItems: englishContent.modes.programmer.workItems?.map((item) => {
        switch (item.id) {
          case "dos-app-fullstack":
            return {
              ...item,
              title: "App Dos",
              summary:
                "Dos es un producto personal que estoy construyendo para transformar conversaciones, citas y momentos compartidos en experiencias digitales juguetonas. Actualmente está en desarrollo, con un lanzamiento tentativo para finales de 2026.",
              involvement:
                "Como creadora de Dos, he trabajado en el desarrollo Full Stack de la app, construyendo tanto la experiencia frontend como la funcionalidad detrás de ella.",
              tags: [
                { id: "fullstack", label: "Full Stack" },
                { id: "react", label: "React" },
                { id: "app-development", label: "Desarrollo de Apps" },
                { id: "interactive-product", label: "Producto Interactivo" },
              ],
            };

          case "lotto-quetzal-frontend-development":
            return {
              ...item,
              title: "Lotto Quetzal",
              summary:
                "Lotto Quetzal es un proyecto de plataforma de lotería enfocado en ofrecer una experiencia digital responsiva, atractiva y fácil de navegar.",
              involvement:
                "Trabajé en el desarrollo frontend de la plataforma, llevando el diseño de interfaz a código responsivo y listo para producción.",
              tags: [
                { id: "frontend-development", label: "Desarrollo Frontend" },
                { id: "responsive-ui", label: "UI Responsiva" },
                { id: "web-platform", label: "Plataforma Web" },
                { id: "lottery-tech", label: "Tecnología de Lotería" },
              ],
            };

          case "orkapi-technology-frontend-corporate-webpage":
            return {
              ...item,
              title: "Página Corporativa de Orkapi Technology",
              summary:
                "Este proyecto se enfocó en el desarrollo de un sitio corporativo responsivo para Orkapi Technology, buscando una presencia digital clara, moderna y profesional.",
              involvement:
                "Trabajé en el desarrollo frontend del sitio, convirtiendo la dirección de diseño en interfaces estructuradas, mantenibles y responsivas.",
              tags: [
                { id: "frontend-development", label: "Desarrollo Frontend" },
                { id: "corporate-website", label: "Sitio Corporativo" },
                { id: "web-development", label: "Desarrollo Web" },
                { id: "responsive-design", label: "Diseño Responsivo" },
              ],
            };

          default:
            return item;
        }
      }),
    },

    animator: {
      ...englishContent.modes.animator,
      navLabel: "Animadora",
      title: "Animadora",
      introLines: [[{ text: "Porque a veces una pantalla estática simplemente no es suficiente." }]],
      leftCards: [
        {
          id: "animator-main",
          text: "Uso motion y 3D para convertir ideas en experiencias inmersivas, juguetonas y expresivas.",
          size: "wide",
        },
        {
          id: "animator-tools",
          text: "• Animaciones 3D de objetos o productos\n• Motion pieces para interfaces\n• Escenas 3D interactivas\n• Experimentos o proyectos personales\n• Animación integrada a web",
          size: "lg",
        },
        englishContent.modes.animator.leftCards[2],
        englishContent.modes.animator.leftCards[3],
        englishContent.modes.animator.leftCards[4],
      ],
      rightPanelTitle: "Algo de mi trabajo:",
      workItems: englishContent.modes.animator.workItems?.map((item) => {
        switch (item.id) {
          case "lotto-draw-lottery-game-animation":
            return {
              ...item,
              title: "Sorteo  para Juego de Lotería",
              summary:
                "Este proyecto de animación fue creado para simular la emoción y energía visual de un sorteo dentro de una experiencia digital de juego.",
              involvement:
                "Realicé la animación en Blender, enfocándome en el movimiento, el timing y la presentación visual de la secuencia del sorteo.",
              tags: [
                { id: "blender", label: "Blender" },
                { id: "3d-animation", label: "Animación 3D" },
                { id: "motion-design", label: "Motion Design" },
                { id: "lottery-game", label: "Juego de Lotería" },
              ],
            };

          case "runner-app-features-animation-1":
            return {
              ...item,
              title: "Animación de Features para Runner App",
              summary:
                "Esta animación fue creada para mostrar y comunicar las funciones de una app de forma clara, atractiva y visualmente dinámica.",
              involvement:
                "Creé esta pieza en After Effects, utilizando motion design para destacar las funcionalidades de la app y mejorar la forma en que se presentaba el producto.",
              tags: [
                { id: "after-effects", label: "After Effects" },
                { id: "motion-graphics", label: "Motion Graphics" },
                { id: "feature-showcase", label: "Presentación de Features" },
                { id: "app-presentation", label: "Presentación de App" },
              ],
            };

          case "lotto-draw-lottery-game-animation-2":
            return {
              ...item,
              title: "Sorteo para Juego de Lotería",
              summary:
                "Este proyecto de animación fue creado para simular la emoción y energía visual de un sorteo dentro de una experiencia digital de juego.",
              involvement:
                "Realicé la animación en Blender, enfocándome en el movimiento, el timing y la presentación visual de la secuencia del sorteo.",
              tags: [
                { id: "blender", label: "Blender" },
                { id: "3d-animation", label: "Animación 3D" },
                { id: "motion-design", label: "Motion Design" },
                { id: "lottery-game", label: "Juego de Lotería" },
              ],
            };

          case "lotto-draw-lottery-game-animation-3":
            return {
              ...item,
              title: "Ruleta para Juego de Lotería",
              summary:
                "Este proyecto de animación fue creado para simular la emoción y energía visual de una ruleta dentro de una experiencia digital de juego.",
              involvement:
                "Realicé la animación en Blender, enfocándome en el movimiento, el timing y la presentación visual de la secuencia.",
              tags: [
                { id: "blender", label: "Blender" },
                { id: "3d-animation", label: "Animación 3D" },
                { id: "motion-design", label: "Motion Design" },
                { id: "lottery-game", label: "Juego de Lotería" },
              ],
            };

          case "lotto-draw-lottery-game-animation-4":
            return {
              ...item,
              title: "Sorteo para Juego de Lotería",
              summary:
                "Este proyecto de animación fue creado para simular la emoción y energía visual de un sorteo dentro de una experiencia digital de juego.",
              involvement:
                "Realicé la animación en Blender, enfocándome en el movimiento, el timing y la presentación visual de la secuencia del sorteo.",
              tags: [
                { id: "blender", label: "Blender" },
                { id: "3d-animation", label: "Animación 3D" },
                { id: "motion-design", label: "Motion Design" },
                { id: "lottery-game", label: "Juego de Lotería" },
              ],
            };

          default:
            return item;
        }
      }),
    },
  },
};

export const portfolioContent: Record<Locale, PortfolioContentConfig> = {
  en: englishContent,
  es: spanishContent,
};