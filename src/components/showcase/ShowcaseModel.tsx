"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";
import type { ThemeMode, ViewMode } from "@/types";

type ShowcaseModelProps = {
  mode: ViewMode;
  themeMode: ThemeMode;
};

const animationByMode: Record<ViewMode, string> = {
  intro: "",
  designer: "Idle",
  programmer: "Standing",
  animator: "Running",
};

const rotationByMode: Record<ViewMode, [number, number, number]> = {
  intro: [0, -0.45, 0],
  designer: [0, -0.45, 0],
  programmer: [0, 0.45, 0],
  animator: [0.08, 0.9, 0],
};

export default function ShowcaseModel({ mode }: ShowcaseModelProps) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/experience-chick-backup.glb");
  const { actions } = useAnimations(animations, group);

  const targetRotation = useMemo(() => rotationByMode[mode], [mode]);


  useEffect(() => {
    if (!actions) return;

    const nextAnimationName = animationByMode[mode];
    const nextAction = actions[nextAnimationName];

    if (!nextAction) {
      // console.warn(`Animation "${nextAnimationName}" not found.`);
      return;
    }

    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.fadeOut(0.3);
    });

    nextAction.reset().fadeIn(0.3).play();

    return () => {
      nextAction.fadeOut(0.25);
    };
  }, [actions, mode]);

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.x += (targetRotation[0] - group.current.rotation.x) * 0.08;
    group.current.rotation.y += (targetRotation[1] - group.current.rotation.y) * 0.08;
    group.current.rotation.z += (targetRotation[2] - group.current.rotation.z) * 0.08;
  });

  return (
    <group ref={group} position={[0, 0.4, 0]} scale={2}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/experience-chick.glb");