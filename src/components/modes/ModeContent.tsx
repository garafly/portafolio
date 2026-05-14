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
};

/**
 * CARD WIDTHS
 * --------------------------------------------------
 * This controls how wide each left-side card is.
 *
 * Important breakpoints:
 * - base: phones / small screens
 * - md: medium screens
 * - lg: large screens
 * - xl: extra large screens
 * - 2xl: very large desktop screens
 *
 * If large/xl screens are breaking, this is one of the first places to adjust.
 */
function getCardWidthClass(size: "sm" | "md" | "lg" | "wide" = "md") {
  switch (size) {
    case "sm":
      /**
       * Small cards.
       * Example: small location cards, short fact cards.
       *
       * Change these if small cards are too tiny/large.
       */
      return "w-full sm:w-[48%] lg:w-[46%] xl:w-[46%] 2xl:w-[42%]";

    case "lg":
      /**
       * Large cards.
       * Example: bigger text blocks.
       *
       * If they look too wide on large/xl screens, lower lg/xl percentages.
       */
      return "w-full lg:w-[78%] xl:w-[76%] 2xl:w-[75%]";

    case "wide":
      /**
       * Wide cards.
       * Example: full-width statements or education card.
       *
       * If wide cards feel too long on desktop, adjust max-w.
       */
      return "w-full lg:w-[92%] xl:w-[90%] 2xl:max-w-[450px]";

    case "md":
    default:
      /**
       * Default card size.
       * This is probably the most important one.
       *
       * Your previous version had lg:h-[280px], which can make cards rigid.
       * I removed fixed height so content can breathe responsively.
       *
       * If cards are too wide on lg/xl:
       * - reduce lg:w-[48%] to lg:w-[44%]
       * - reduce xl:w-[48%] to xl:w-[44%]
       */
      return "w-full sm:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%]";
  }
}

/**
 * INTRO / RICH TEXT FONT SIZES
 * --------------------------------------------------
 * This controls the size of rich text segments inside introLines.
 *
 * These segments come from your content config.
 * If a word/phrase has size: "xl", "lg", "md", or "sm",
 * it passes through here.
 *
 * If large/xl screens look too big, reduce lg/xl/2xl values.
 */
function getSegmentSizeClass(size?: RichTextSegment["size"]) {
  switch (size) {
    case "sm":
      // Smallest intro text.
      return "text-sm sm:text-base lg:text-base xl:text-lg";

    case "md":
      // Medium emphasized intro text.
      return "text-xl sm:text-2xl lg:text-[1.35rem] xl:text-[1.5rem] 2xl:text-[1.6rem]";

    case "lg":
      // Large emphasized intro text.
      return "text-2xl sm:text-[2rem] lg:text-[1.65rem] xl:text-[1.85rem] 2xl:text-2xl";

    case "xl":
      // Biggest emphasized intro text.
      return "text-[2.2rem] sm:text-[2.4rem] lg:text-[2rem] xl:text-[2.35rem] 2xl:text-[2.5rem]";

    default:
      // Default intro line size.
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

        /**
         * CUSTOM PER-SEGMENT CLASS
         * --------------------------------------------------
         * If you want one specific word or phrase to behave differently,
         * you can pass className from your content config.
         */
        segment.className
      )}
    >
      {segment.text}
    </span>
  );
}

export default function ModeContent({
  content,
  themeMode,
}: ModeContentProps) {
  const theme = themeTokens[themeMode];

  return (
    /**
     * MAIN CONTENT SPACING
     * --------------------------------------------------
     * Controls vertical spacing between:
     * - title/intro section
     * - card group
     * - tools text
     *
     * If large/xl feels too spaced out:
     * reduce lg:space-y-7 / xl:space-y-8.
     */
    <div className="space-y-7 lg:space-y-7 xl:space-y-8">
      <div>
        <h1
          className={cn(
            /**
             * TITLE SIZE
             * --------------------------------------------------
             * This controls the main mode title:
             * Hi!, Designer, Programmer, Animator
             *
             * If large/xl title is too big:
             * reduce lg:text-5xl or xl:text-[5.2rem].
             *
             * If desktop can handle more drama:
             * increase 2xl:text-7xl.
             */
            "text-5xl font-bold leading-none sm:text-6xl lg:text-5xl xl:text-[5.2rem] 2xl:text-6xl",
            theme.titleClass
          )}
        >
          {content.title}
        </h1>

        {/**
         * INTRO LINES WRAPPER
         * --------------------------------------------------
         * Controls spacing and line-height for intro text below title.
         *
         * If text feels too loose:
         * reduce leading-[1.35].
         *
         * If text feels cramped:
         * increase to leading-[1.5].
         */}
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

      {/**
       * CARDS WRAPPER
       * --------------------------------------------------
       * Controls how cards wrap and the space between them.
       *
       * If cards are too spread apart on large/xl:
       * reduce lg:gap-3 / xl:gap-4.
       *
       * If cards look cramped:
       * increase gap values.
       */}
      <div className="flex flex-wrap items-end gap-4 lg:gap-3 xl:gap-4">
        {content.leftCards.map((card, cardIndex) => {
          const isWide = card.size === "wide";
          const isLarge = card.size === "lg";
          const widthClass = getCardWidthClass(card.size);

          return (
            <div
              key={card.id}
              className={cn(
                /**
                 * CARD CONTAINER
                 * --------------------------------------------------
                 * This controls:
                 * - border radius
                 * - padding
                 * - shadow
                 * - blur
                 *
                 * If cards feel too bulky on large/xl:
                 * reduce lg:p-4 or xl:p-5.
                 *
                 * If they need more breathing room:
                 * increase padding.
                 */
                "rounded-4xl border p-5 shadow-sm backdrop-blur-sm lg:p-4 xl:p-5",

                widthClass,

                /**
                 * CARD HEIGHT
                 * --------------------------------------------------
                 * Keep min-height flexible.
                 * Avoid fixed heights unless a specific card needs it.
                 */
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
                /**
                 * NORMAL TEXT CARD LAYOUT
                 * --------------------------------------------------
                 * Controls the icon + text row.
                 *
                 * If icons and text feel too tight:
                 * increase gap-2 to gap-3.
                 */
                <div className="flex items-start gap-2">
                  {card.icon ? (
                    <div className="shrink-0 pt-0">
                      <ConfigIcon
                        icon={card.icon}
                        fallbackSize={24}
                        emojiClassName="text-3xl"

                        /**
                         * ICON IMAGE SIZE
                         * --------------------------------------------------
                         * If image icons inside cards look too large/small,
                         * control them here.
                         */
                        imageClassName="h-auto w-auto object-contain"
                      />
                    </div>
                  ) : null}

                  <p
                    className={cn(
                      /**
                       * CARD TEXT SIZE
                       * --------------------------------------------------
                       * This controls text inside the cards.
                       *
                       * If card text is breaking on large/xl:
                       * reduce lg:text-[1rem] or xl:text-[1.05rem].
                       *
                       * If too small on 2xl:
                       * increase 2xl:text-[1.15rem].
                       */
                      "whitespace-pre-line text-[1rem] leading-relaxed sm:text-[1.05rem] lg:text-[1rem] xl:text-[1.05rem] 2xl:text-[1.1rem]",
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
            /**
             * TOOLS TEXT BOX
             * --------------------------------------------------
             * This controls the extra tools text block at the bottom.
             *
             * Width:
             * - base: full width
             * - sm: 85%
             * - lg/xl: controlled max widths
             *
             * If this box breaks your large/xl layout:
             * reduce lg:max-w-[360px] or xl:max-w-[400px].
             */
            "w-full rounded-4xl border p-5 text-[1rem] leading-relaxed shadow-sm backdrop-blur-sm sm:w-[85%] lg:max-w-[360px] lg:p-4 xl:max-w-[400px] xl:p-5 2xl:max-w-[420px]",
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