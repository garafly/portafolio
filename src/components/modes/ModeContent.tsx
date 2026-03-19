import { portfolioContent } from "@/lib/content-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { RichTextSegment, ThemeTokens } from "@/types/content-config";
import type { ThemeMode, ViewMode } from "@/types";
import ConfigIcon from "@/components/ui/ConfigIcon";
import Image from "next/image";
import ToolPagerCard from "@/components/ui/ToolPagerCard";
import ToolGrid from "@/components/ui/ToolGrid";
import AnimatedIconCard from "@/components/ui/AnimatedIconCard";

type ModeContentProps = {
  mode: ViewMode;
  themeMode: ThemeMode;
};

function getCardWidthClass(size: "sm" | "md" | "lg" | "wide" = "md") {
  switch (size) {
    case "sm":
      return "w-[180px]";
    case "lg":
      return "w-[380px]";
    case "wide":
      return "w-[450px]";
    case "md":
    default:
      return "w-[115px]";
  }
}

function getSegmentSizeClass(size?: RichTextSegment["size"]) {
  switch (size) {
    case "sm":
      return "text-base lg:text-lg";
    case "md":
      return "text-[2.1rem] lg:text-xl]";
    case "lg":
      return "text-[2.3rem] lg:text-2xl";
    case "xl":
      return "text-[2.5rem] lg:text-3xl";
    default:
      return "text-[2.1rem] lg:text-3xl";
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

export default function ModeContent({
  mode,
  themeMode,
}: ModeContentProps) {
  const content = portfolioContent.modes[mode];
  const theme = themeTokens[themeMode];

  return (
    <div className="space-y-8">
      <div>
        <h1
          className={cn(
            "text-6xl font-bold leading-none lg:text-7xl",
            theme.titleClass
          )}
        >
          {content.title}
        </h1>

        <div className="mt-2 space-y-1 leading-[1.45]">
          {content.introLines.map((line, lineIndex) => (
            <p key={lineIndex} className="leading-snug">
              {line.map((segment, segmentIndex) =>
                renderSegment(segment, segmentIndex, theme)
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-4 ">
      {content.leftCards.map((card, cardIndex) => {
        const isWide = card.size === "wide";
        const isLarge = card.size === "lg";
        const widthClass = getCardWidthClass(card.size);

        return (
          <div
            key={card.id}
            className={cn(
              "rounded-4xl border p-5 shadow-sm backdrop-blur-sm",
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
              "whitespace-pre-line text-[1.05rem] leading-relaxed lg:text-[1.15rem]",
              theme.cardTextClass
            )}
          >
            {card.text}
          </p>
        </div>
      )}
          </div>
        );
      })}
      </div>

      {content.toolsText ? (
        <div
          className={cn(
            "w-85 rounded-4xl border p-5 text-[1.05rem] leading-relaxed shadow-sm backdrop-blur-sm",
            theme.cardBgClass,
            theme.cardBorderClass,
            theme.softTextClass
          )}
        >
          {content.toolsText}
        </div>
      ) : null}
    </div>
  );
}