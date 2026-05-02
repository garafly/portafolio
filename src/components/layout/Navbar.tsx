"use client";

import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode } from "@/types";
import type { PortfolioContentConfig } from "@/types/content-config";

type NavbarProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  themeMode: ThemeMode;
  navItems: PortfolioContentConfig["navItems"];
};

export default function Navbar({
  mode,
  setMode,
  themeMode,
  navItems,
}: NavbarProps) {
  const theme = themeTokens[themeMode];

  return (
    <nav className="flex items-center justify-center">
      <div className="flex flex-wrap items-center gap-8 px-5 py-4">
        {navItems.map((item) => {
          const isActive = mode === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setMode(item.value)}
              className={cn(
                "px-2 text-lg tracking-wider transition-colors duration-200",
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