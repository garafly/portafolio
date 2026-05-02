"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type LightKey = "left" | "top" | "right";

type GlowConfig = {
  x: string;
  y: string;
  color: string;
  size: number;
  blur: number;
  activeOpacity: number;
  inactiveOpacity: number;
  activeScale: number;
  inactiveScale: number;
};

type ButtonConfig = {
  x: string;
  y: string;
  ariaLabel: string;
};

const glowConfigs: Record<LightKey, GlowConfig> = {
  left: {
    x: "40%",
    y: "55%",
    color: "236, 168, 255", // pink/lilac
    size: 170,
    blur: 45,
    activeOpacity: 0.95,
    inactiveOpacity: 0.18,
    activeScale: 1.12,
    inactiveScale: 0.94,
  },
  top: {
    x: "72%",
    y: "34%",
    color: "120, 170, 255", // blue
    size: 150,
    blur: 42,
    activeOpacity: 0.9,
    inactiveOpacity: 0.15,
    activeScale: 1.1,
    inactiveScale: 0.94,
  },
  right: {
    x: "120%",
    y: "54%",
    color: "255, 220, 160", // warm cream/gold
    size: 180,
    blur: 48,
    activeOpacity: 0.9,
    inactiveOpacity: 0.15,
    activeScale: 1.12,
    inactiveScale: 0.94,
  },
};

const buttonConfigs: Record<LightKey, ButtonConfig> = {
  left: {
    x: "24%",
    y: "42%",
    ariaLabel: "Toggle left orb",
  },
  top: {
    x: "64%",
    y: "28%",
    ariaLabel: "Toggle top orb",
  },
  right: {
    x: "95%",
    y: "38%",
    ariaLabel: "Toggle right orb",
  },
};

export default function KeyboardLightsShowcase() {
  const [lights, setLights] = useState<Record<LightKey, boolean>>({
    left: true,
    top: true,
    right: true,
  });

  const stateKey = useMemo(() => {
    return `${lights.left ? "U" : "D"}${lights.top ? "U" : "D"}${
      lights.right ? "U" : "D"
    }`;
  }, [lights]);

  const currentImage = `/images/intro-effects/keyboard/${stateKey}.png`;

  const toggleLight = (key: LightKey) => {
    setLights((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="relative mx-auto h-full w-full overflow-visible">
      {/* Glow layer */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <OrbGlow active={lights.left} config={glowConfigs.left} />
        <OrbGlow active={lights.top} config={glowConfigs.top} />
        <OrbGlow active={lights.right} config={glowConfigs.right} />
      </div>

      {/* Image layer */}
      <div className="absolute inset-0 z-20">
        <Image
          src={currentImage}
          alt={`Keyboard lighting state ${stateKey}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Button layer */}
      <div className="absolute inset-0 z-30 overflow-visible">
        <OrbButton
          active={lights.left}
          onClick={() => toggleLight("left")}
          config={buttonConfigs.left}
        />
        <OrbButton
          active={lights.top}
          onClick={() => toggleLight("top")}
          config={buttonConfigs.top}
        />
        <OrbButton
          active={lights.right}
          onClick={() => toggleLight("right")}
          config={buttonConfigs.right}
        />
      </div>
    </section>
  );
}

function OrbGlow({
  active,
  config,
}: {
  active: boolean;
  config: GlowConfig;
}) {
  const {
    x,
    y,
    color,
    size,
    blur,
    activeOpacity,
    inactiveOpacity,
    activeScale,
    inactiveScale,
  } = config;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-out"
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        opacity: active ? activeOpacity : inactiveOpacity,
        transform: `translate(-50%, -50%) scale(${
          active ? activeScale : inactiveScale
        })`,
        filter: `blur(${blur}px)`,
        background: `
          radial-gradient(
            circle,
            rgba(${color}, 0.55) 0%,
            rgba(${color}, 0.3) 28%,
            rgba(${color}, 0.14) 52%,
            rgba(${color}, 0.05) 70%,
            rgba(${color}, 0) 100%
          )
        `,
      }}
    />
  );
}

function OrbButton({
  active,
  onClick,
  config,
}: {
  active: boolean;
  onClick: () => void;
  config: ButtonConfig;
}) {
  const { x, y, ariaLabel } = config;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={active}
      onClick={onClick}
      className="absolute h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300"
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${active ? 1 : 0.96})`,
      }}
    >
      <span className="absolute inset-0 rounded-full" />
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
}