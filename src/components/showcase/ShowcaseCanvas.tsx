"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import type { ThemeMode, ViewMode } from "@/types";
import ShowcaseModel from "./ShowcaseModel";
import CameraRig from "./CameraRig";
import ShowcaseLights from "./ShowcaseLights";
import Loader from "./Loader";

type ShowcaseCanvasProps = {
  mode: ViewMode;
  themeMode: ThemeMode;
};

export default function ShowcaseCanvas({
  mode,
  themeMode,
}: ShowcaseCanvasProps) {
  return (
    <div className="relative h-105 w-full md:h-180">
      <Canvas
        camera={{ position: [0, 0.4, 4.5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <CameraRig mode={mode} />
          <ShowcaseLights themeMode={themeMode} />
          <ShowcaseModel mode={mode} themeMode={themeMode} />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}