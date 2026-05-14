"use client";

import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { Locale, ThemeMode } from "@/types";

type LanguageToggleProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  themeMode: ThemeMode;
};

const languages: Locale[] = ["en", "es"];

export default function LanguageToggle({
  locale,
  setLocale,
  themeMode,
}: LanguageToggleProps) {
  const theme = themeTokens[themeMode];

  return (
    <div
      className={cn(
        "fixed bottom-2 right-1 md:bottom-5 md:right-5 z-40 flex items-center gap-1 rounded border p-1 shadow-lg backdrop-blur-md",
        theme.panelBgClass,
        theme.cardBorderClass
      )}
    >
      {languages.map((lang) => {
        const isActive = locale === lang;

        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLocale(lang)}
            aria-pressed={isActive}
            className={cn(
              "px-2 py-1 text-sm font-semibold uppercase tracking-wide transition-all duration-200",
              isActive
                ? cn(theme.accentTextClass, "bg-white/80 dark:bg-white/15")
                : cn(theme.navTextClass, "hover:opacity-80")
            )}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}