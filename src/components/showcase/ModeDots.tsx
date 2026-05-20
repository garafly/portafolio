"use client";

import { cn } from "@/lib/utils";
import type { ViewMode } from "@/types";

type ModeDotsProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
};

const modes: { id: ViewMode; label: string }[] = [
  { id: "intro", label: "Intro" },
  { id: "designer", label: "Designer" },
  { id: "programmer", label: "Programmer" },
  { id: "animator", label: "Animator" },
];

export default function ModeDots({ mode, setMode }: ModeDotsProps) {
  return (
    <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
      {modes.map((item, index) => {
        const isActive = item.id === mode;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setMode(item.id)}
            aria-label={`Switch chick experience to ${item.label}`}
            title={item.label}
            className={cn(
              "group relative flex h-6 w-6 items-center justify-center rounded-full",
              "transition-transform duration-300 ease-out",
              "hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86C7FF]/70",
              !isActive && "animate-[dotBreathe_2.8s_ease-in-out_infinite]"
            )}
            style={{
              animationDelay: isActive ? "0s" : `${index * 0.2}s`,
            }}
          >
            {/* soft active halo */}
            {isActive ? (
              <span className="absolute h-6 w-6 animate-[activePulse_1.8s_ease-out_infinite] rounded-full border border-[#86C7FF]/60" />
            ) : null}

            {/* hover halo */}
            <span className="absolute h-5 w-5 scale-0 rounded-full bg-[#86C7FF]/15 transition-transform duration-300 group-hover:scale-100" />

            {/* dot */}
            <span
              className={cn(
                "relative h-3 w-3 rounded-full transition-all duration-300",
                isActive
                  ? "scale-110 bg-[#1F66C1] shadow-[0_0_14px_rgba(134,199,255,0.75)]"
                  : "bg-[#9DB0C8] group-hover:bg-[#6F95C4]"
              )}
            />
          </button>
        );
      })}

      <style jsx>{`
        @keyframes activePulse {
          0% {
            transform: scale(0.85);
            opacity: 0.75;
          }
          70% {
            transform: scale(1.65);
            opacity: 0;
          }
          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        @keyframes dotBreathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.18);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}