"use client";

import type { ThemeMode } from "@/types";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
};

export default function ThemeToggle({
  themeMode,
  setThemeMode,
}: ThemeToggleProps) {
  const theme = themeTokens[themeMode];
  const isDark = themeMode === "dark";

  return (
    <button
      type="button"
      onClick={() => setThemeMode(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative flex h-9 w-16 items-center rounded-full p-1 transition-colors duration-300",
        theme.toggleShellClass
      )}
    >
      <span
        className={cn(
          "absolute top-1 h-7 w-7 rounded-full bg-white transition-transform duration-300",
          isDark ? "translate-x-7" : "translate-x-0"
        )}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 text-xl">
        <span>{isDark ? "☾" : "☾"}</span>
        <span>{isDark ? "☀" : "☀"}</span>
      </span>
    </button>
  );
}