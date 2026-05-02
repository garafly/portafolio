"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode } from "@/types";
import type { ModeContent as ModeContentType } from "@/types/content-config";

type RightPanelShowcaseListProps = {
  content: ModeContentType;
  themeMode: ThemeMode;
  setSelectedProjectId: (id: string) => void;
};

const CARD_HEIGHT = 200;
const CARD_GAP = 16;
const VISIBLE_CARDS = 3;
const VIEWPORT_HEIGHT =
  CARD_HEIGHT * VISIBLE_CARDS + CARD_GAP * (VISIBLE_CARDS - 1);

export default function RightPanelShowcaseList({
  content,
  themeMode,
  setSelectedProjectId,
}: RightPanelShowcaseListProps) {
  const theme = themeTokens[themeMode];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const workItems = content.workItems ?? [];

  const totalPages = useMemo(
    () => Math.ceil(workItems.length / VISIBLE_CARDS),
    [workItems.length]
  );

  const [currentPage, setCurrentPage] = useState(0);

  function handleScroll() {
    const container = scrollRef.current;
    if (!container) return;

    const nextPage = Math.round(container.scrollTop / VIEWPORT_HEIGHT);
    setCurrentPage(nextPage);
  }

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollTo({ top: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      handleScroll();
    });
  }, [content]);

  function scrollToPage(page: number) {
    const container = scrollRef.current;
    if (!container) return;

    const safePage = Math.max(0, Math.min(page, totalPages - 1));

    container.scrollTo({
      top: safePage * VIEWPORT_HEIGHT,
      behavior: "smooth",
    });

    setCurrentPage(safePage);
  }

  function handleScrollNext() {
    scrollToPage(currentPage + 1);
  }

  function handleScrollBackToTop() {
    scrollToPage(0);
  }

  const hasMoreThanOnePage = totalPages > 1;
  const showNextButton = hasMoreThanOnePage && currentPage < totalPages - 1;
  const showBackButton = hasMoreThanOnePage && currentPage > 0;

  return (
    <div className="w-full md:max-w-[80%] xl:max-w-110">
      {content.rightPanelTitle ? (
        <h2 className={cn("mb-4 text-3xl font-bold", theme.rightPanelTitle)}>
          {content.rightPanelTitle}
        </h2>
      ) : null}

      <div className={cn("my-6 rounded-4xl p-2 shadow-sm", theme.panelBgClass)}>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="space-y-4 overflow-y-auto px-2 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ height: `${VIEWPORT_HEIGHT + 8}px` }}
        >
          {workItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedProjectId(item.id)}
              className={cn(
                "grid w-full grid-cols-[1fr_160px] gap-4 rounded-[1.75rem] border p-4 text-left shadow-sm transition duration-300",
                "hover:scale-[1.015] hover:shadow-lg",
                theme.panelCardBgClass,
                theme.cardBorderClass
              )}
              style={{
                minHeight: `${CARD_HEIGHT}px`,
                height: `${CARD_HEIGHT}px`,
              }}
            >
              <div className="flex min-h-0 flex-col justify-center">
                <h3
                  className={cn(
                    "mb-1 line-clamp-2 text-lg font-semibold",
                    themeMode === "dark"
                      ? theme.accentSecondaryClass
                      : theme.bodyStrongClass
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={cn(
                    "line-clamp-4 text-md leading-relaxed",
                    theme.cardTextClass
                  )}
                >
                  {item.summary}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/40 bg-white/40">
                <Image
                  src={item.mainImage.src}
                  alt={item.mainImage.alt}
                  width={320}
                  height={220}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </button>
          ))}
        </div>

        {(showNextButton || showBackButton) && (
          <div className="mt-1 flex justify-center gap-4">
            {showBackButton ? (
              <button
                type="button"
                onClick={handleScrollBackToTop}
                aria-label="Back to first projects"
                className={cn(
                  "text-3xl transition hover:-translate-y-0.5",
                  theme.accentTextClass
                )}
              >
                ⌃
              </button>
            ) : null}

            {showNextButton ? (
              <button
                type="button"
                onClick={handleScrollNext}
                aria-label="Show more projects"
                className={cn(
                  "text-3xl transition hover:-translate-y-0.5",
                  theme.accentTextClass
                )}
              >
                ⌄
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}