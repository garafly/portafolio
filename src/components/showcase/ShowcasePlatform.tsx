"use client";

export default function ShowcasePlatform() {
  return (
    <group position={[0, -0.64, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.5, 0.65]}>
        <ringGeometry args={[1.48, 1.5, 182]} />
        <meshBasicMaterial color="#5BAEFF" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}