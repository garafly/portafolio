"use client";

import type { ViewMode, ThemeMode } from "@/types";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";

type AnnotationItem = {
  label: string;
  containerClassName: string;
  lineClassName?: string;
  dotSide?: "left" | "right";
};

type AnnotationAdjustment = {
  labelClassName?: string;
  connectorClassName?: string;
  lineClassName?: string;
};

type ShowcaseAnnotationsProps = {
  mode: ViewMode; // page/content mode
  modelMode?: ViewMode; // chick/model mode, optional
  themeMode: ThemeMode;
};

const annotationsByMode: Record<ViewMode, AnnotationItem[]> = {
  intro: [
    {
        label: "Self-taught",
        containerClassName: "top-[13%] left-[39%] gap-1",
        lineClassName: "w-20",
        dotSide: "left",
    },
    {
        label: "Passionate",
        containerClassName: "top-[53%] left-[-22%] gap-1",
        lineClassName: "w-42 ",
        dotSide: "right",
    },
    {
        label: "Driven",
        containerClassName: "bottom-[24%] left-[62%]  gap-1",
        lineClassName: "w-14 ",
        dotSide: "left",
    },
  ],

  designer: [
    {
      label: "UI/UX",
      containerClassName: "top-[12%] left-[4%] gap-1",
      lineClassName: "w-10",
      dotSide: "right",
    },
    {
      label: "Graphic Design",
      containerClassName: "top-[38%] left-[-34%] gap-1",
      lineClassName: "w-28",
      dotSide: "right",
    },
    {
      label: "Brand-savvy",
      containerClassName: "top-[22%] left-[44%] gap-1",
      lineClassName: "w-30",
      dotSide: "left",
    },
  ],

  programmer: [
    {
      label: "Problem-solver",
      containerClassName: "top-[19%] left-[12%] gap-1",
      lineClassName: "w-32",
      dotSide: "right",
    },
    {
      label: "TypeScript",
      containerClassName: "top-[50%] left-[-29%] gap-1",
      lineClassName: "w-46",
      dotSide: "right",
    },
    {
      label: "Frontend",
      containerClassName: "top-[27%] left-[81%] gap-1",
      lineClassName: "w-2",
      dotSide: "left",
    },
  ],

  animator: [
    {
      label: "Playful",
      containerClassName: "top-[22%] left-[-2%] gap-1",
      lineClassName: "w-8",
      dotSide: "right",
    },
    {
      label: "Crafty",
      containerClassName: "top-[64%] left-[-10%] gap-1",
      lineClassName: "w-20",
      dotSide: "right",
    },
    {
      label: "Creative",
      containerClassName: "top-[24%] left-[55%] gap-1",
      lineClassName: "w-36",
      dotSide: "left",
    },
  ],
};

/**
 * Large layout:
 * Used only for lg/xl screens.
 *
 * This is closer to desktop than mobile, but less aggressive than 2xl.
 * TUNE LG/XL ANNOTATIONS HERE.
 */
const largeAnnotationsByMode: Record<ViewMode, AnnotationItem[]> = {
  intro: [
    {
      label: "Self-taught",
      containerClassName: "top-[13%] left-[39%]  gap-1",
      lineClassName: "w-20 xl:w-24",
      dotSide: "left",
    },
    {
      label: "Passionate",
      containerClassName: " left-[-22%] xl:left-[-8%] top-[58%] gap-1",
      lineClassName: "w-42 xl:w-46",
      dotSide: "right",
    },
    {
      label: "Driven",
      containerClassName: "bottom-[24%] left-[62%] gap-1",
      lineClassName: "w-14 xl:w-18",
      dotSide: "left",
    },
  ],

  designer: [
    {
      label: "UI/UX",
      containerClassName: "top-[12%] left-[8%] xl:left-[16%] gap-1",
      lineClassName: "w-8 xl:w-10",
      dotSide: "right",
    },
    {
      label: "Graphic Design",
      containerClassName: "top-[38%] left-[-24%] xl:top-[36%] gap-1",
      lineClassName: "w-20 xl:w-42",
      dotSide: "right",
    },
    {
      label: "Brand-savvy",
      containerClassName: "top-[22%] left-[44%] gap-1",
      lineClassName: "w-24 xl:w-28",
      dotSide: "left",
    },
  ],

  programmer: [
    {
      label: "Problem-solver",
      containerClassName: "top-[19%] left-[12%] gap-1",
      lineClassName: "w-24 xl:w-38",
      dotSide: "right",
    },
    {
      label: "TypeScript",
      containerClassName: "top-[56%] left-[-6%] xl:left-[2%] gap-1",
      lineClassName: "w-26 xl:w-30",
      dotSide: "right",
    },
    {
      label: "Frontend",
      containerClassName: "top-[27%] left-[76%] gap-1",
      lineClassName: "w-6 xl:w-8",
      dotSide: "left",
    },
  ],

  animator: [
    {
      label: "Playful",
      containerClassName: "top-[24%] left-[0%] xl:top-[26%] gap-1",
      lineClassName: "w-8 xl:w-22",
      dotSide: "right",
    },
    {
      label: "Crafty",
      containerClassName: "top-[64%] left-[-4%] gap-1",
      lineClassName: "w-14 xl:w-34",
      dotSide: "right",
    },
    {
      label: "Creative",
      containerClassName: "top-[24%] left-[55%] xl:left-[53%] gap-1",
      lineClassName: "w-28 xl:w-32",
      dotSide: "left",
    },
  ],
};

/**
 * Compact layout:
 * Used below lg screens.
 */
const mobileAnnotationsByMode: Record<ViewMode, AnnotationItem[]> = {
  intro: [
    {
      label: "Self-taught",
      containerClassName: "top-[13%] left-[40%] gap-1",
      lineClassName: "w-10",
      dotSide: "left",
    },
    {
      label: "Passionate",
      containerClassName: "top-[58%] -left-[1%] gap-1",
      lineClassName: "w-6",
      dotSide: "right",
    },
    {
      label: "Driven",
      containerClassName: "bottom-[20%] left-[54%] gap-1",
      lineClassName: "w-12",
      dotSide: "left",
    },
  ],

  designer: [
    {
      label: "UI/UX",
      containerClassName: "top-[12%] left-[2%] gap-1",
      lineClassName: "w-12",
      dotSide: "right",
    },
    {
      label: "Graphic Design",
      containerClassName: "top-[36%] -left-[4%]",
      lineClassName: "w-1",
      dotSide: "right",
    },
    {
      label: "Brand-savvy",
      containerClassName: "top-[22%] right-[20%] gap-1",
      lineClassName: "w-10",
      dotSide: "left",
    },
  ],

  programmer: [
    {
      label: "Problem-solver",
      containerClassName: "top-[20%] left-[26%] gap-1",
      lineClassName: "w-16",
      dotSide: "right",
    },
    {
      label: "TypeScript",
      containerClassName: "top-[52%] left-[2%] gap-1",
      lineClassName: "w-14",
      dotSide: "right",
    },
    {
      label: "Frontend",
      containerClassName: "top-[26%] -right-[2%] gap-1",
      lineClassName: "w-4",
      dotSide: "left",
    },
  ],

  animator: [
    {
      label: "Playful",
      containerClassName: "top-[24%] left-[3%] gap-1",
      lineClassName: "w-8",
      dotSide: "right",
    },
    {
      label: "Crafty",
      containerClassName: "top-[68%] left-[3%] gap-1",
      lineClassName: "w-10",
      dotSide: "right",
    },
    {
      label: "Creative",
      containerClassName: "top-[24%] right-[4%] gap-1",
      lineClassName: "w-21",
      dotSide: "left",
    },
  ],
};

/**
 * Full desktop adjustments:
 * Used only at 2xl+.
 */
const annotationAdjustments: Partial<
  Record<
    ViewMode,
    Partial<Record<ViewMode, Partial<Record<number, AnnotationAdjustment>>>>
  >
> = {
  intro: {
    intro: {},

    designer: {
      0: {
        labelClassName: "translate-x-0 translate-y-0",
        connectorClassName: "translate-x-0",
      },
      1: {
        labelClassName: "translate-x-0 -translate-y-0",
        connectorClassName: "translate-x-0",
      },
      2: {
        labelClassName: "-translate-x-2 translate-y-0",
        connectorClassName: "-translate-x-0",
      },
    },

    programmer: {
      0: {
        labelClassName: "translate-x-26 translate-y-2",
        lineClassName: "w-34",
      },
      1: {
        labelClassName: "translate-x-0 translate-y-0",
        lineClassName: "w-98",
      },
      2: {
        labelClassName: "translate-x-1 translate-y-1",
        lineClassName: "w-16",
      },
    },

    animator: {
      0: {
        labelClassName: "translate-x-16 translate-y-0",
        lineClassName: "w-36",
      },
      1: {
        labelClassName: "-translate-x-3 translate-y-0",
        lineClassName: "w-86",
      },
      2: {
        labelClassName: "-translate-x-16 translate-y-0",
      },
    },
  },

  designer: {
    intro: {
      0: {
        labelClassName: "-translate-x-2 translate-y-1",
      },
      1: {
        labelClassName: "translate-x-2 translate-y-1",
      },
      2: {
        labelClassName: "-translate-x-2",
      },
    },

    designer: {},

    programmer: {
      0: {
        labelClassName: "translate-x-26 -translate-y-1",
        lineClassName: "w-48",
      },
      1: {
        labelClassName: "translate-x-0",
        lineClassName: "w-110",
      },
      2: {
        labelClassName: "translate-x-15 -translate-y-5",
        lineClassName: "w-28",
      },
    },

    animator: {
      0: {
        labelClassName: "translate-x-18 -translate-y-2",
        lineClassName: "w-48",
      },
      1: {
        labelClassName: "translate-x-0 translate-y-0",
        lineClassName: "w-104",
      },
      2: {
        labelClassName: "translate-x-4 -translate-y-4",
        lineClassName: "w-36",
      },
    },
  },

  programmer: {
    intro: {
      0: {
        labelClassName: "-translate-x-32 translate-y-5",
        lineClassName: "w-1",
      },
      1: {
        labelClassName: "-translate-x-2 translate-y-0",
        lineClassName: "w-114",
      },
      2: {
        labelClassName: "-translate-x-88 translate-y-0",
        lineClassName: "w-78",
      },
    },

    designer: {
      0: {
        labelClassName: "-translate-x-32 translate-y-5",
        lineClassName: "w-2",
      },
      1: {
        labelClassName: "-translate-x-2 translate-y-0",
        lineClassName: "w-108",
      },
      2: {
        labelClassName: "-translate-x-86 translate-y-0",
        lineClassName: "w-78",
      },
    },

    programmer: {},

    animator: {
      0: {
        labelClassName: "-translate-x-10 -translate-y-5",
        lineClassName: "w-30",
      },
      1: {
        labelClassName: "-translate-x-2 translate-y-1",
        lineClassName: "w-46",
      },
      2: {
        labelClassName: "-translate-x-10 -translate-y-4",
        lineClassName: "w-3",
      },
    },
  },

  animator: {
    intro: {
      0: {
        labelClassName: "translate-x-8 translate-y-25",
        lineClassName: "w-80",
      },
      1: {
        labelClassName: "translate-x-1 translate-y-4",
        lineClassName: "w-80",
      },
      2: {
        labelClassName: "-translate-x-26 translate-y-2",
        lineClassName: "w-56",
      },
    },

    designer: {
      0: {
        labelClassName: "translate-x-8 translate-y-25",
        lineClassName: "w-80",
      },
      1: {
        labelClassName: "translate-x-12 translate-y-4",
        lineClassName: "w-80",
      },
      2: {
        labelClassName: "-translate-x-26 translate-y-2",
        lineClassName: "w-56",
      },
    },

    programmer: {
      0: {
        labelClassName: "translate-x-10 translate-y-1",
        lineClassName: "w-20",
      },
      1: {
        labelClassName: "translate-x-8",
        lineClassName: "w-30",
      },
      2: {
        labelClassName: "translate-x-10 translate-y-2",
        lineClassName: "w-27",
      },
    },

    animator: {},
  },
};

/**
 * Large adjustments:
 * Used only for lg/xl screens.
 *
 * TUNE DOT-BASED LG/XL MOVEMENT HERE.
 * These should stay smaller than the full desktop adjustments.
 */
const largeAnnotationAdjustments: Partial<
  Record<
    ViewMode,
    Partial<Record<ViewMode, Partial<Record<number, AnnotationAdjustment>>>>
  >
> = {
  intro: {
    intro: {},

    designer: {},

    programmer: {
      0: {
        labelClassName: "translate-x-20 translate-y-0",
        lineClassName: "w-22 xl:w-26",
      },
      1: {
        labelClassName: "translate-x-4 translate-y-1",
        lineClassName: "w-56 xl:w-64",
      },
      2: {
        labelClassName: "-translate-x-1 translate-y-0",
        lineClassName: "w-14 xl:w-16",
      },
    },

    animator: {
      0: {
        labelClassName: "translate-x-8 translate-y-0 xl:translate-x-16",
        lineClassName: "w-24 xl:w-28",
      },
      1: {
        labelClassName: "translate-x-1 translate-y-0",
        lineClassName: "w-58 xl:w-66",
      },
      2: {
        labelClassName: "-translate-x-14 translate-y-0 xl:-translate-x-20",
        lineClassName: "w-18 xl:w-20",
      },
    },
  },

  designer: {
    intro: {},

    designer: {},

    programmer: {
      0: {
        labelClassName: "translate-x-12 -translate-y-1 xl:translate-x-18",
        lineClassName: "w-30 xl:w-42",
      },
      1: {
        labelClassName: "translate-x-0 translate-y-1 xl:-translate-y-4 xl:translate-x-24",
        lineClassName: "w-54 xl:w-88",
      },
      2: {
        labelClassName: "translate-x-8 -translate-y-2 xl:translate-x-14",
        lineClassName: "w-20 xl:w-36",
      },
    },

    animator: {
      0: {
        labelClassName: "translate-x-10 -translate-y-1 ",
        lineClassName: "w-28 xl:w-40",
      },
      1: {
        labelClassName: "translate-x-0 translate-y-1 xl:translate-x-18",
        lineClassName: "w-56 xl:w-88",
      },
      2: {
        labelClassName: "translate-x-3 -translate-y-3 xl:translate-x-5",
        lineClassName: "w-24 xl:w-32",
      },
    },
  },

  programmer: {
    intro: {
      0: {
        labelClassName: "-translate-x-22 xl:-translate-x-18 translate-y-3",
        lineClassName: "w-6 xl:w-8",
      },
      1: {
        labelClassName: "-translate-x-1 -translate-y-2 xl:-translate-y-6",
        lineClassName: "w-64 xl:w-72",
      },
      2: {
        labelClassName: "-translate-x-68 translate-y-0 xl:-translate-x-80",
        lineClassName: "w-68 xl:w-68",
      },
    },

    designer: {
      0: {
        labelClassName: "-translate-x-22 xl:-translate-x-18 translate-y-3",
        lineClassName: "w-6 xl:w-8",
      },
      1: {
        labelClassName: "-translate-x-1 -translate-y-2 xl:-translate-y-6",
        lineClassName: "w-64 xl:w-72",
      },
      2: {
        labelClassName: "-translate-x-68 translate-y-0 xl:-translate-x-80",
        lineClassName: "w-68 xl:w-68",
      },
    },

    programmer: {},

    animator: {
      0: {
        labelClassName: "-translate-x-4 xl:-translate-x-6 -translate-y-3",
        lineClassName: "w-28 xl:w-42",
      },
      1: {
        labelClassName: "-translate-x-1 -translate-y-6",
        lineClassName: "w-20 xl:w-20",
      },
      2: {
        labelClassName: "-translate-x-4 -translate-y-5 xl:-translate-y-4 xl:-translate-x-10",
        lineClassName: "w-4 xl:w-6",
      },
    },
  },

  animator: {
    intro: {
      0: {
        labelClassName: "translate-x-4 translate-y-12",
        lineClassName: "w-50 xl:w-76",
      },
      1: {
        labelClassName: "translate-x-4 translate-y-2",
        lineClassName: "w-52 xl:w-78",
      },
      2: {
        labelClassName: "-translate-x-22 translate-y-2",
        lineClassName: "w-46 xl:w-42",
      },
    },

    designer: {
      0: {
        labelClassName: "translate-x-4 translate-y-12",
        lineClassName: "w-50 xl:w-76",
      },
      1: {
        labelClassName: "translate-x-4 translate-y-2",
        lineClassName: "w-52 xl:w-78",
      },
      2: {
        labelClassName: "-translate-x-22 translate-y-2",
        lineClassName: "w-46 xl:w-42",
      },
    },

    programmer: {
      0: {
        labelClassName: "translate-x-4 translate-y-1 xl:translate-x-14",
        lineClassName: "w-14 xl:w-22",
      },
      1: {
        labelClassName: "translate-x-4 xl:translate-x-12",
        lineClassName: "w-18 xl:w-30",
      },
      2: {
        labelClassName: "translate-x-8 translate-y-1",
        lineClassName: "w-18 xl:w-22",
      },
    },

    animator: {},
  },
};

/**
 * Compact adjustments:
 * Used below lg.
 */
const mobileAnnotationAdjustments: Partial<
  Record<
    ViewMode,
    Partial<Record<ViewMode, Partial<Record<number, AnnotationAdjustment>>>>
  >
> = {
  intro: {
    intro: {},

    designer: {},

    programmer: {
      0: {
        labelClassName: "translate-x-16 -translate-y-1",
        lineClassName: "w-16",
      },
      1: {
        labelClassName: "translate-x-8 translate-y-2",
        lineClassName: "w-30",
      },
      2: {
        labelClassName: "translate-x-6 -translate-y-4",
        lineClassName: "w-8",
      },
    },

    animator: {
      0: {
        labelClassName: "translate-x-10 -translate-y-1",
        lineClassName: "w-18",
      },
      1: {
        labelClassName: "-translate-x-2 translate-y-1",
        lineClassName: "w-32",
      },
      2: {
        labelClassName: "-translate-x-4 -translate-y-2",
        lineClassName: "w-8",
      },
    },
  },

  designer: {
    intro: {},

    designer: {},

    programmer: {
      0: {
        labelClassName: "translate-x-30 translate-y-1",
        lineClassName: "w-22",
      },
      1: {
        labelClassName: "translate-x-2 translate-y-2",
        lineClassName: "w-48",
      },
      2: {
        labelClassName: "translate-x-20 translate-y-0",
        lineClassName: "w-22",
      },
    },

    animator: {
      0: {
        labelClassName: "translate-x-8 -translate-y-2",
        lineClassName: "w-38",
      },
      1: {
        labelClassName: "-translate-x-1 translate-y-18",
        lineClassName: "w-8",
      },
      2: {
        labelClassName: "translate-x-18 translate-y-2",
        lineClassName: "w-18",
      },
    },
  },

  programmer: {
    intro: {
      0: {
        labelClassName: "-translate-x-28 translate-y-0",
        lineClassName: "w-6",
      },
      1: {
        labelClassName: "-translate-x-2 translate-y-2",
        lineClassName: "w-40",
      },
      2: {
        labelClassName: "-translate-x-8 translate-y-0",
        lineClassName: "w-54",
      },
    },

    designer: {
      0: {
        labelClassName: "-translate-x-28 translate-y-0",
        lineClassName: "w-6",
      },
      1: {
        labelClassName: "-translate-x-2 translate-y-2",
        lineClassName: "w-40",
      },
      2: {
        labelClassName: "-translate-x-8 translate-y-0",
        lineClassName: "w-54",
      },
    },

    programmer: {},

    animator: {
      0: {
        labelClassName: "-translate-x-12 -translate-y-3",
        lineClassName: "w-18",
      },
      1: {
        labelClassName: "translate-x-2 translate-y-3",
        lineClassName: "w-8",
      },
      2: {
        labelClassName: "-translate-x-5 -translate-y-1",
        lineClassName: "w-6",
      },
    },
  },

  animator: {
    intro: {
      0: {
        labelClassName: "translate-x-0 translate-y-10",
        lineClassName: "w-42",
      },
      1: {
        labelClassName: "translate-x-8 translate-y-2",
        lineClassName: "w-8",
      },
      2: {
        labelClassName: "-translate-x-6 translate-y-2",
        lineClassName: "w-32",
      },
    },

    designer: {
      0: {
        labelClassName: "translate-x-0 translate-y-10",
        lineClassName: "w-42",
      },
      1: {
        labelClassName: "translate-x-8 translate-y-2",
        lineClassName: "w-8",
      },
      2: {
        labelClassName: "-translate-x-6 translate-y-2",
        lineClassName: "w-32",
      },
    },

    programmer: {
      0: {
        labelClassName: "translate-x-6 translate-y-1",
        lineClassName: "w-8",
      },
      1: {
        labelClassName: "translate-x-12 translate-y-1",
        lineClassName: "w-8",
      },
      2: {
        labelClassName: "-translate-x-6 translate-y-2",
        lineClassName: "w-8",
      },
    },

    animator: {},
  },
};

export default function ShowcaseAnnotations({
  mode,
  modelMode,
  themeMode,
}: ShowcaseAnnotationsProps) {
  const desktopAnnotations = annotationsByMode[mode];
  const largeAnnotations = largeAnnotationsByMode[mode];
  const compactAnnotations = mobileAnnotationsByMode[mode];
  const theme = themeTokens[themeMode];

  const activeModelMode = modelMode ?? mode;

  return (
    <>
      {/* Full desktop annotation layout: 2xl and up only */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden 2xl:block">
        {desktopAnnotations.map((item, index) => {
          const adjustment =
            annotationAdjustments[mode]?.[activeModelMode]?.[index];

          return (
            <AnnotationLabel
              key={item.label}
              item={item}
              labelClassName={adjustment?.labelClassName}
              connectorClassName={adjustment?.connectorClassName}
              lineClassName={adjustment?.lineClassName}
              titleClassName={theme.titleClass}
              variant="desktop"
            />
          );
        })}
      </div>

      {/* Large annotation layout: lg and xl only */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-20 hidden h-full w-[104%] -translate-x-1/2 lg:block xl:w-[112%] 2xl:hidden">
        {largeAnnotations.map((item, index) => {
          const adjustment =
            largeAnnotationAdjustments[mode]?.[activeModelMode]?.[index];

          return (
            <AnnotationLabel
              key={item.label}
              item={item}
              labelClassName={adjustment?.labelClassName}
              connectorClassName={adjustment?.connectorClassName}
              lineClassName={adjustment?.lineClassName}
              titleClassName={theme.titleClass}
              variant="large"
            />
          );
        })}
      </div>

      {/* Compact annotation layout: below lg */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-20 block h-full w-[106%] -translate-x-1/2 lg:hidden">
        {compactAnnotations.map((item, index) => {
          const adjustment =
            mobileAnnotationAdjustments[mode]?.[activeModelMode]?.[index];

          return (
            <AnnotationLabel
              key={item.label}
              item={item}
              labelClassName={adjustment?.labelClassName}
              connectorClassName={adjustment?.connectorClassName}
              lineClassName={adjustment?.lineClassName}
              titleClassName={theme.titleClass}
              variant="compact"
            />
          );
        })}
      </div>
    </>
  );
}

function AnnotationLabel({
  item,
  labelClassName,
  connectorClassName,
  lineClassName,
  titleClassName,
  variant = "desktop",
}: {
  item: AnnotationItem;
  labelClassName?: string;
  connectorClassName?: string;
  lineClassName?: string;
  titleClassName?: string;
  variant?: "desktop" | "large" | "compact";
}) {
  const isCompact = variant === "compact";
  const isLarge = variant === "large";
  const isDesktop = variant === "desktop";

  const dot = (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border-2 border-[#4CA7FF]/50 bg-white/10 backdrop-blur-sm",
        isCompact && "h-5 w-5",
        isLarge && "h-6 w-6 xl:h-7 xl:w-7",
        isDesktop && "h-7 w-7"
      )}
    >
      <span
        className={cn(
          "rounded-full bg-[#4CA7FF]",
          isCompact && "h-2 w-2",
          isLarge && "h-2.5 w-2.5 xl:h-3 xl:w-3",
          isDesktop && "h-3 w-3"
        )}
      />
    </span>
  );

  const line = (
    <span
      className={cn(
        "block h-px bg-[#4CA7FF]/80 transition-all duration-500 ease-out",
        lineClassName ?? item.lineClassName ?? "w-16"
      )}
    />
  );

const label = (
  <span
    className={cn(
      "whitespace-nowrap font-medium tracking-wide transition-colors duration-300",
      titleClassName,
      isCompact && "text-sm",
      isLarge && "text-lg xl:text-xl",
      isDesktop && "text-2xl"
    )}
  >
    {item.label}
  </span>
);

  const connector =
    item.dotSide === "right" ? (
      <span
        className={cn(
          "flex items-center transition-transform duration-500 ease-out",
          connectorClassName
        )}
      >
        {line}
        {dot}
      </span>
    ) : (
      <span
        className={cn(
          "flex items-center transition-transform duration-500 ease-out",
          connectorClassName
        )}
      >
        {dot}
        {line}
      </span>
    );

  return (
    <div
      className={cn(
        "absolute flex items-center transition-transform duration-500 ease-out",
        item.containerClassName,
        labelClassName
      )}
    >
      {item.dotSide === "right" ? (
        <>
          {label}
          {connector}
        </>
      ) : (
        <>
          {connector}
          {label}
        </>
      )}
    </div>
  );
}