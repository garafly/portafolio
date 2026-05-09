"use client";

import type { ViewMode } from "@/types";
import { cn } from "@/lib/utils";

type AnnotationItem = {
  label: string;
  containerClassName: string;
  lineClassName?: string;
  dotSide?: "left" | "right";
};

type ShowcaseAnnotationsProps = {
  mode: ViewMode;
};

const annotationsByMode: Record<ViewMode, AnnotationItem[]> = {
  intro: [
    {
      label: "Self-taught",
      containerClassName: "top-[8%] left-[44%]",
      lineClassName: "w-18",
      dotSide: "left",
    },
    {
      label: "Passionate",
      containerClassName: "top-[56%] left-[-32%]",
      lineClassName: "w-28",
      dotSide: "right",
    },
    {
      label: "Driven",
      containerClassName: "bottom-[24%] left-[64%]",
      lineClassName: "w-18",
      dotSide: "left",
    },
  ],

  designer: [
    {
      label: "UI/UX",
      containerClassName: "top-[6%] left-[-4%]",
      lineClassName: "w-14",
      dotSide: "right",
    },
    {
      label: "Graphic Design",
      containerClassName: "top-[38%] left-[-40%]",
      lineClassName: "w-26",
      dotSide: "right",
    },
    {
      label: "Brand-savvy",
      containerClassName: "top-[18%] left-[48%]",
      lineClassName: "w-20",
      dotSide: "left",
    },
  ],

  programmer: [
    {
      label: "Problem-solver",
      containerClassName: "top-[16%] left-[8%]",
      lineClassName: "w-18",
      dotSide: "right",
    },
    {
      label: "TypeScript",
      containerClassName: "top-[48%] left-[-4%]",
      lineClassName: "w-20",
      dotSide: "right",
    },
    {
      label: "Frontend",
      containerClassName: "top-[0%] left-[64%]",
      lineClassName: "w-10",
      dotSide: "left",
    },
  ],

  animator: [
    {
      label: "Playful",
      containerClassName: "top-[19%] left-[-10%]",
      lineClassName: "w-16",
      dotSide: "right",
    },
    {
      label: "Crafty",
      containerClassName: "top-[60%] left-[-18%]",
      lineClassName: "w-24",
      dotSide: "right",
    },
    {
      label: "Creative",
      containerClassName: "top-[20%] left-[57%]",
      lineClassName: "w-33",
      dotSide: "left",
    },
  ],
};

export default function ShowcaseAnnotations({ mode }: ShowcaseAnnotationsProps) {
  const annotations = annotationsByMode[mode];

  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
      {annotations.map((item) => (
        <AnnotationLabel key={item.label} item={item} />
      ))}
    </div>
  );
}

function AnnotationLabel({ item }: { item: AnnotationItem }) {
  const dot = (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#4CA7FF]/50 bg-white/10 backdrop-blur-sm">
      <span className="h-3 w-3 rounded-full bg-[#4CA7FF]" />
    </span>
  );

  const line = (
    <span
      className={cn(
        "block h-px bg-[#4CA7FF]/80",
        item.lineClassName ?? "w-16"
      )}
    />
  );

  const label = (
    <span className="whitespace-nowrap text-2xl font-medium tracking-wide text-[#86C7FF]">
      {item.label}
    </span>
  );

  return (
    <div
      className={cn(
        "absolute flex items-center",
        item.containerClassName
      )}
    >
      {item.dotSide === "right" ? (
        <>
          {label}
          {line}
          {dot}
        </>
      ) : (
        <>
          {dot}
          {line}
          {label}
        </>
      )}
    </div>
  );
}