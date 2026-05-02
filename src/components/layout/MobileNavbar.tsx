"use client";

import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode } from "@/types";
import type { PortfolioContentConfig } from "@/types/content-config";

type MobileNavbarProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  themeMode: ThemeMode;
  navItems: PortfolioContentConfig["navItems"];
};

export default function MobileNavbar({
  mode,
  setMode,
  themeMode,
  navItems,
}: MobileNavbarProps) {
  const theme = themeTokens[themeMode];

  return (
    <nav className="w-full md:hidden">
      <div className="relative w-full">
        <div className="hide-scrollbar overflow-x-auto">
          <div className="flex min-w-max items-center gap-3 px-2 py-1">
            {navItems.map((item) => {
              const isActive = mode === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setMode(item.value)}
                  className={cn(
                    "shrink-0 rounded-full border px-5 py-2 text-base tracking-wide transition-all duration-200",
                    isActive
                      ? "border-sky-300 bg-sky-300 text-white"
                      : cn("border-white/60 bg-white/20", theme.navTextClass)
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l to-transparent",
            themeMode === "dark" ? "from-[#315d95]" : "from-[#f4ecdf]"
          )}
        />
      </div>
    </nav>
  );
}