"use client";

import { useState } from "react";
import MainLayout from "@/components/sections/MainLayout";
import type { ThemeMode, ViewMode } from "@/types";

export default function Home() {
  const [mode, setMode] = useState<ViewMode>("intro");
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  return (
    <MainLayout
      mode={mode}
      setMode={setMode}
      themeMode={themeMode}
      setThemeMode={setThemeMode}
    />
  );
}