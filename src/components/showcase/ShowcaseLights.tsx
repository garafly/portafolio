"use client";

import type { ThemeMode } from "@/types";

type ShowcaseLightsProps = {
  themeMode: ThemeMode;
};

export default function ShowcaseLights({ themeMode }: ShowcaseLightsProps) {
  const isDark = themeMode === "dark";

  return (
    <>
      <ambientLight color={isDark ? "#FFD28A" : "#fcdeae"} intensity={isDark ? 1.9 : 1.9} />
      <pointLight
        position={[3, 6, 0]}
        intensity={isDark ? 100 : 80}
      />

      <pointLight
        position={[9, 10, 0]}
        intensity={isDark ? 5: 4}
      />

      <pointLight
        position={[-6, 6, -2]}
        intensity={isDark ? 100 : 80}
      />
      <pointLight
        position={[-9, 10, -2]}
        intensity={isDark ? 5: 4}
    
      />

    </>
  );
}