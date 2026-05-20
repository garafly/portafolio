"use client";

import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { Locale, ThemeMode } from "@/types";

type LanguageToggleProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  themeMode: ThemeMode;
};

export default function LanguageToggle({
  locale,
  setLocale,
  themeMode,
}: LanguageToggleProps) {
  const theme = themeTokens[themeMode];

  const isEnglish = locale === "en";

  return (
    <div
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-1 rounded-lg border p-1
        shadow-lg backdrop-blur-md
        border-white
      "
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={isEnglish}
        className={cn(
          "rounded-md px-3 py-2 text-sm font-bold transition-all duration-200",
          isEnglish
            ? "bg-white text-[#1F66C1] shadow-sm"
            : cn("opacity-70 hover:opacity-100", theme.softTextClass)
        )}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={!isEnglish}
        className={cn(
          "rounded-md px-3 py-2 text-sm font-bold transition-all duration-200",
          !isEnglish
            ? "bg-white text-[#1F66C1] shadow-sm"
            : cn("opacity-70 hover:opacity-100", theme.softTextClass)
        )}
      >
        ES
      </button>
    </div>
  );
}