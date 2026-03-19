"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ThemeTokens, ToolPage } from "@/types/content-config";
import ToolGrid from "./ToolGrid";

type ToolPagerCardProps = {
  pages: ToolPage[];
  theme: ThemeTokens;
  showLabels?: boolean;
};

export default function ToolPagerCard({
  pages,
  theme,
  showLabels = true,
}: ToolPagerCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activePage, setActivePage] = useState(0);

  function handleScroll() {
    const container = containerRef.current;
    if (!container) return;

    const pageWidth = container.clientWidth;
    const nextPage = Math.round(container.scrollLeft / pageWidth);
    setActivePage(nextPage);
  }

  function scrollToPage(index: number) {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });
  }

  function handleCardClick() {
    const nextPage = activePage === pages.length - 1 ? 0 : activePage + 1;
    scrollToPage(nextPage);
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleCardClick}
        className="block w-full text-left"
        aria-label="Switch tools page"
      >
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pages.map((page) => (
            <div
              key={page.id}
              className="w-full shrink-0 snap-center"
            >
              <ToolGrid
                tools={page.tools}
                theme={theme}
                showLabels={showLabels}
              />
            </div>
          ))}
        </div>
      </button>

      <div className="mt-2 flex items-center justify-center gap-2">
        {pages.map((page, index) => (
          <button
            key={page.id}
            type="button"
            aria-label={`Go to page ${index + 1}`}
            onClick={() => scrollToPage(index)}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-all duration-300",
              index === activePage ? theme.emphasis : theme.dotInactiveClass
            )}
          />
        ))}
      </div>
    </div>
  );
}