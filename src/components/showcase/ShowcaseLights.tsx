"use client";

import type { ThemeMode } from "@/types";

type ShowcaseLightsProps = {
  themeMode: ThemeMode;
};

export default function ShowcaseLights({ themeMode }: ShowcaseLightsProps) {
  const isDark = themeMode === "dark";

  return (
    <>
      <ambientLight intensity={isDark ? 0.9 : 1.2} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={isDark ? 1.6 : 1.2}
      />
      <directionalLight
        position={[-3, 2, 2]}
        intensity={isDark ? 0.9 : 0.6}
      />
      <pointLight
        position={[0, 2, 3]}
        intensity={isDark ? 0.7 : 0.4}
      />
    </>
  );
}