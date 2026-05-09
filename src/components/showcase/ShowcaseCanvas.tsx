"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import type { ThemeMode, ViewMode } from "@/types";
import ShowcaseModel from "./ShowcaseModel";
import ShowcasePlatform from "./ShowcasePlatform";

import ModeDots from "./ModeDots";
import CameraRig from "./CameraRig";
import ShowcaseLights from "./ShowcaseLights";
import Loader from "./Loader";

type ShowcaseCanvasProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  themeMode: ThemeMode;
};

export default function ShowcaseCanvas({
  mode,
  setMode,
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
          <ShowcasePlatform />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.15}
            maxPolarAngle={Math.PI / 1.95}
            minAzimuthAngle={-0.5}
            maxAzimuthAngle={0.5}
            rotateSpeed={0.8}
          />
        </Suspense>
      </Canvas>

      <ModeDots mode={mode} setMode={setMode} />
    </div>
  );
}