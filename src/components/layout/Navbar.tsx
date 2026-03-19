"use client";

import { portfolioContent } from "@/lib/content-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode } from "@/types";

type NavbarProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  themeMode: ThemeMode;
};

export default function Navbar({ mode, setMode, themeMode }: NavbarProps) {
  const theme = themeTokens[themeMode];

  return (
    <nav className="flex items-center justify-center">
      <div className="flex flex-wrap items-center gap-8 px-5 py-4">
        {portfolioContent.navItems.map((item) => {
          const isActive = mode === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setMode(item.value)}
              className={cn(
                "text-lg tracking-wider px-2 transition-colors duration-200",
                isActive ? theme.navActiveClass : theme.navTextClass
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}