"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import type { ViewMode } from "@/types";

type CameraRigProps = {
  mode: ViewMode;
};

const cameraTargets: Record<ViewMode, { position: [number, number, number]; lookAt: [number, number, number] }> = {
  intro: {
    position: [0.85, 0.55, 4.2],
    lookAt: [0, 0.3, 0],
  },
  designer: {
    position: [0.85, 0.55, 4.2],
    lookAt: [0, 0.3, 0],
  },
  programmer: {
    position: [-0.85, 0.55, 4.2],
    lookAt: [0, 0.3, 0],
  },
  animator: {
    position: [0.5, -0.1, 4.2],
    lookAt: [0.2, 0.3, 0],
  },
};

export default function CameraRig({ mode }: CameraRigProps) {
  const { camera } = useThree();

  useFrame(() => {
    const target = cameraTargets[mode];

    const desiredPosition = new Vector3(...target.position);
    const desiredLookAt = new Vector3(...target.lookAt);

    camera.position.lerp(desiredPosition, 0.06);
    camera.lookAt(desiredLookAt);
  });

  return null;
}