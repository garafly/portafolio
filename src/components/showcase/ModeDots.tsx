"use client";

import { cn } from "@/lib/utils";
import type { ViewMode } from "@/types";

type ModeDotsProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
};

const modes: ViewMode[] = ["intro", "designer", "programmer", "animator"];

export default function ModeDots({ mode, setMode }: ModeDotsProps) {
  return (
    <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 gap-3 ">
      {modes.map((item) => {
        const isActive = item === mode;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item)}
            aria-label={`Go to ${item} mode`}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300 ",
              isActive
                ? "scale-110 bg-[#1F66C1]"
                : "bg-[#9DB0C8] hover:bg-[#6F95C4]"
            )}
          />
        );
      })}
    </div>
  );
}