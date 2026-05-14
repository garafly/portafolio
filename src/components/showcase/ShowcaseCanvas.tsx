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
<div
  className="
    relative mx-auto aspect-[4/5] w-full overflow-visible
    max-w-[430px]
    sm:max-w-[520px]

    lg:h-[560px]
    lg:max-w-[560px]
    lg:aspect-auto

    xl:h-[620px]
    xl:max-w-[700px]

    2xl:h-180
    2xl:max-w-none
  "
>
    
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