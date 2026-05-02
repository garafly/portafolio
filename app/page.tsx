"use client";

import { useState } from "react";
import MainLayout from "@/components/sections/MainLayout";
import type { ThemeMode, ViewMode, Locale  } from "@/types";

export default function Home() {
  const [mode, setMode] = useState<ViewMode>("intro");
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
    const [locale, setLocale] = useState<Locale>("en");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleModeChange = (nextMode: ViewMode) => {
    setMode(nextMode);
    setSelectedProjectId(null);
  };

  return (
    <MainLayout
      mode={mode}
      setMode={handleModeChange}
      themeMode={themeMode}
      setThemeMode={setThemeMode}
      locale={locale}
      setLocale={setLocale}
      selectedProjectId={selectedProjectId}
      setSelectedProjectId={setSelectedProjectId}
    />
  );
}