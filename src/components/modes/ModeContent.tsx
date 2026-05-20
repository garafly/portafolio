"use client";

import { motion, type TargetAndTransition, type Variants } from "framer-motion";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type {
  ModeContent as ModeContentType,
  RichTextSegment,
  ThemeTokens,
} from "@/types/content-config";
import type { ThemeMode } from "@/types";
import ConfigIcon from "@/components/ui/ConfigIcon";
import ToolPagerCard from "@/components/ui/ToolPagerCard";
import ToolGrid from "@/components/ui/ToolGrid";
import AnimatedIconCard from "@/components/ui/AnimatedIconCard";

type ModeContentProps = {
  content: ModeContentType;
  themeMode: ThemeMode;
  isShowcaseReady?: boolean;
};

/**
 * CARD WIDTHS
 * --------------------------------------------------
 */
function getCardWidthClass(size: "sm" | "md" | "lg" | "wide" = "md") {
  switch (size) {
    case "sm":
      return "w-full w-[25%] md:w-[18%] lg:w-[25%] xl:w-[46%] 2xl:w-[25%]";

    case "lg":
      return "w-full lg:w-[78%] xl:w-[76%] 2xl:w-[75%]";

    case "wide":
      return "w-full lg:w-[92%] xl:w-[90%] 2xl:max-w-[450px]";

    case "md":
    default:
      return "w-full md:w-[42%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]";
  }
}

/**
 * INTRO TEXT SIZES
 * --------------------------------------------------
 */
function getSegmentSizeClass(size?: RichTextSegment["size"]) {
  switch (size) {
    case "sm":
      return "text-sm sm:text-base lg:text-base xl:text-lg";

    case "md":
      return "text-xl sm:text-2xl lg:text-[1.35rem] xl:text-[1.5rem] 2xl:text-[1.6rem]";

    case "lg":
      return "text-2xl sm:text-[2rem] lg:text-[1.65rem] xl:text-[1.85rem] 2xl:text-2xl";

    case "xl":
      return "text-[2.2rem] sm:text-[2.4rem] lg:text-[2rem] xl:text-[2.35rem] 2xl:text-[2.5rem]";

    default:
      return "text-2xl sm:text-3xl lg:text-[1.65rem] xl:text-[1.9rem] 2xl:text-3xl";
  }
}

function renderSegment(
  segment: RichTextSegment,
  index: number,
  theme: ThemeTokens
) {
  return (
    <span
      key={`${segment.text}-${index}`}
      className={cn(
        getSegmentSizeClass(segment.size),
        segment.italic && "italic",
        segment.bold && "font-bold",
        segment.underline && "underline",
        segment.accent && theme.accentTextClass,
        segment.muted && theme.softTextClass,
        !segment.accent && !segment.muted && theme.bodyClass,
        segment.className
      )}
    >
      {segment.text}
    </span>
  );
}

/**
 * SOFT MOTION
 * --------------------------------------------------
 * Product-style motion:
 * - light fade
 * - tiny vertical movement
 * - very small scale
 * - soft stagger
 */
const contentEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 4,
    filter: "blur(1px)",
  },
visible: {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  transition: {
    duration: 0.34,
    ease: [0.22, 1, 0.36, 1],
    when: "beforeChildren",
    staggerChildren: 0.04,
  },
},
};

const softItemEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hoverLift: TargetAndTransition = {
  y: -4,
  transition: {
    duration: 0.22,
    ease: "easeOut",
  },
};

export default function ModeContent({
  content,
  themeMode,
  isShowcaseReady = true,
}: ModeContentProps) {
  const theme = themeTokens[themeMode];

  return (
    <div className="space-y-7 lg:space-y-7 xl:space-y-8">
      {/* TITLE + INTRO */}
      <div>
        <h1
          className={cn(
            "text-5xl font-bold leading-none sm:text-6xl lg:text-5xl xl:text-[5.2rem] 2xl:text-6xl",
            theme.titleClass
          )}
        >
          {content.title}
        </h1>

        <div className="mt-2 space-y-1 leading-[1.35] lg:leading-[1.35] xl:leading-[1.4]">
          {content.introLines.map((line, lineIndex) => (
            <p key={lineIndex} className="leading-snug">
              {line.map((segment, segmentIndex) =>
                renderSegment(segment, segmentIndex, theme)
              )}
            </p>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <motion.div
        variants={softItemEnter}
        className="flex flex-wrap items-end gap-4 lg:gap-3 xl:gap-4"
      >
        {content.leftCards.map((card, cardIndex) => {
          const isWide = card.size === "wide";
          const isLarge = card.size === "lg";
          const widthClass = getCardWidthClass(card.size);

          return (
            <motion.div
              key={card.id}
              whileHover={hoverLift}
              className={cn(
                "rounded-4xl border p-5 shadow-sm backdrop-blur-sm lg:p-4 xl:p-5",
                "transition-shadow duration-300 hover:shadow-lg",
                widthClass,
                isWide && "min-h-8",
                isLarge && "min-h-8",
                !isWide && !isLarge && "min-h-8",
                theme.cardBgClass,
                theme.cardBorderClass
              )}
            >
              {card.variant === "toolGrid" ? (
                <ToolGrid
                  tools={card.tools}
                  theme={theme}
                  showLabels={card.showLabels}
                />
              ) : card.variant === "toolPager" ? (
                <ToolPagerCard
                  pages={card.pages}
                  theme={theme}
                  showLabels={card.showLabels}
                />
              ) : card.variant === "animatedIcon" ? (
                <AnimatedIconCard
                  tool={card.tool}
                  theme={theme}
                  animationIndex={cardIndex}
                />
              ) : (
                <div className="flex items-start gap-2">
                  {card.icon ? (
                    <div className="shrink-0 pt-0">
                      <ConfigIcon
                        icon={card.icon}
                        fallbackSize={24}
                        emojiClassName="text-3xl"
                        imageClassName="h-auto w-auto object-contain"
                      />
                    </div>
                  ) : null}

                  <p
                    className={cn(
                      "whitespace-pre-line text-[1rem] leading-relaxed sm:text-[1.05rem] lg:text-[1rem] xl:text-[1.05rem] 2xl:text-[1.1rem]",
                      theme.cardTextClass
                    )}
                  >
                    {card.text}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* TOOLS TEXT */}
      {content.toolsText ? (
        <motion.div
          whileHover={hoverLift}
          className={cn(
            "w-full rounded-4xl border p-5 text-[1rem] leading-relaxed shadow-sm backdrop-blur-sm sm:w-[85%] lg:max-w-[360px] lg:p-4 xl:max-w-[400px] xl:p-5 2xl:max-w-[420px]",
            "transition-shadow duration-300 hover:shadow-lg",
            theme.cardBgClass,
            theme.cardBorderClass,
            theme.softTextClass
          )}
        >
          {content.toolsText}
        </motion.div>
      ) : null}
    </div>
  );
}