"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ThemeTokens, ToolItem } from "@/types/content-config";

type AnimatedIconCardProps = {
  tool: ToolItem;
  theme: ThemeTokens;
  animationIndex: number;
};

function getLoopAnimation(index: number) {
  const delay = index * 0.22;

  return {
    y: [0, -10, 0, 0],
    scale: [1, 1.04, 1, 1],
    rotate: [0, index === 1 ? 1.5 : -1.5, 0, 0],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      repeatDelay: 0.15,
      delay,
      ease: "easeInOut" as const,
    },
  };
}

export default function AnimatedIconCard({
  tool,
  animationIndex,
}: AnimatedIconCardProps) {
  return (
    <motion.div
      animate={getLoopAnimation(animationIndex)}
      whileHover={{
        y: -4,
        scale: 1.06,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "flex min-h-auto w-auto flex-col items-center justify-center ",
      )}
    >
      <Image
        src={tool.icon.src}
        alt={tool.icon.alt}
        width={tool.icon.width ?? 38}
        height={tool.icon.height ?? 38}
        className="h-auto w-auto object-contain"
      />
    </motion.div>
  );
}
