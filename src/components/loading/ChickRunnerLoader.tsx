"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { ThemeMode } from "@/types";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";

type ChickRunnerLoaderProps = {
  isVisible: boolean;
  progress: number;
  themeMode: ThemeMode;
};

export default function ChickRunnerLoader({
  isVisible,
  progress,
  themeMode,
}: ChickRunnerLoaderProps) {
  const theme = themeTokens[themeMode];

  const distance = useMemo(() => {
    return Math.max(0, Math.round(progress * 3));
  }, [progress]);

  const [isJumping, setIsJumping] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  const jump = () => {
    if (!isVisible || isJumping) return;

    setHintVisible(false);
    setIsJumping(true);

    window.setTimeout(() => {
      setIsJumping(false);
    }, 620);
  };

  useEffect(() => {
    if (!isVisible) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.code === "Space" ||
        event.code === "ArrowUp" ||
        event.key.toLowerCase() === "w"
      ) {
        event.preventDefault();
        jump();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, isJumping]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className={cn(
            "fixed inset-0 z-[9999] flex items-center justify-center px-4",
            theme.pageBackgroundClass
          )}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={cn(
              "w-full max-w-xl rounded-[2rem] border p-5 shadow-2xl backdrop-blur-md sm:p-6",
              theme.cardBgClass,
              theme.cardBorderClass
            )}
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.22em]",
                    theme.softTextClass
                  )}
                >
                  Preparing experience
                </p>

                <h2
                  className={cn(
                    "mt-1 text-2xl font-bold leading-tight sm:text-3xl",
                    theme.titleClass
                  )}
                >
                  Have a chicken run while you wait!
                </h2>
              </div>

              <div
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium",
                  theme.cardBorderClass,
                  theme.cardTextClass
                )}
              >
                {distance}m
              </div>
            </div>

            <button
              type="button"
              onClick={jump}
              onPointerDown={jump}
              className="relative h-44 w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-[#071523] via-[#12345C] to-[#1f548e]"
              aria-label="Jump while the experience loads"
            >
              {/* sky objects moving left */}
              <span className="loader-cloud loader-cloud-one" />
              <span className="loader-cloud loader-cloud-two" />
              <span className="loader-star loader-star-one" />
              <span className="loader-star loader-star-two" />

              {/* soft moon / light */}
              <span className="absolute right-8 top-8 h-8 w-8 rounded-full bg-white/70 shadow-[0_0_30px_rgba(255,255,255,0.55)]" />

              {/* moving floor */}
              <span className="runner-floor" />

              {/* moving obstacles */}
              <span className="runner-obstacle runner-obstacle-one" />
              <span className="runner-obstacle runner-obstacle-two" />
              <span className="runner-obstacle runner-obstacle-three" />

              {/* chick */}
              <span
                className={cn(
                  "runner-chick",
                  isJumping ? "runner-chick-jump" : "runner-chick-run"
                )}
              >
                <span className="absolute -top-4 left-4 h-5 w-5 rounded-full bg-[#EF3B28]" />
                <span className="absolute -top-5 left-7 h-6 w-5 rounded-full bg-[#EF3B28]" />
                <span className="absolute -top-3 left-10 h-4 w-4 rounded-full bg-[#EF3B28]" />

                <span className="absolute right-3 top-4 h-2.5 w-2.5 rounded-full bg-black" />

                <span className="absolute -right-4 top-6 h-0 w-0 border-y-[7px] border-l-[18px] border-y-transparent border-l-[#F59E2E]" />

                <span className="absolute bottom-3 left-3 h-5 w-7 rounded-full bg-[#E2B531]/80" />

                <span className="runner-leg runner-leg-one" />
                <span className="runner-leg runner-leg-two" />
              </span>

              <span
                className={cn(
                  "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/25 px-3 py-1 text-xs text-white/80 backdrop-blur-sm transition-opacity duration-300",
                  hintVisible ? "opacity-100" : "opacity-0"
                )}
              >
                Tap / click / space to jump
              </span>
            </button>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className={cn("text-sm", theme.softTextClass)}>
                {progress >= 95
                  ? "Experience ready. Landing softly..."
                  : "Loading becomes distance. No waiting, just running."}
              </p>

              <p className={cn("text-sm font-medium", theme.titleClass)}>
                {Math.round(progress)}%
              </p>
            </div>

            <style jsx>{`
              .runner-floor {
                position: absolute;
                bottom: 2.5rem;
                left: 0;
                height: 1px;
                width: 240%;
                background: repeating-linear-gradient(
                  90deg,
                  rgba(134, 199, 255, 0.7) 0 24px,
                  transparent 24px 44px
                );
                animation: runnerFloor 0.9s linear infinite;
              }

              .runner-obstacle {
                position: absolute;
                bottom: 2.5rem;
                right: -4rem;
                display: block;
                background: rgba(134, 199, 255, 0.35);
                box-shadow: 0 0 14px rgba(134, 199, 255, 0.25);
              }

              .runner-obstacle-one {
                height: 2rem;
                width: 1.6rem;
                border-radius: 0.4rem 0.4rem 0.1rem 0.1rem;
                animation: runnerObstacle 1.85s linear infinite;
              }

              .runner-obstacle-two {
                height: 1.35rem;
                width: 2.4rem;
                border-radius: 0.5rem;
                animation: runnerObstacle 2.7s linear infinite;
                animation-delay: 0.9s;
              }

              .runner-obstacle-three {
                height: 2.4rem;
                width: 1.1rem;
                border-radius: 0.4rem 0.4rem 0.1rem 0.1rem;
                animation: runnerObstacle 3.4s linear infinite;
                animation-delay: 1.6s;
              }

              .runner-chick {
                position: absolute;
                bottom: 2.5rem;
                left: 3.5rem;
                height: 3.5rem;
                width: 3.5rem;
                border-radius: 9999px;
                background: #f6c83e;
                box-shadow:
                  inset -8px -10px 0 rgba(0, 0, 0, 0.08),
                  0 10px 22px rgba(0, 0, 0, 0.18);
              }

              .runner-chick-run {
                animation: chickRun 420ms ease-in-out infinite;
              }

              .runner-chick-jump {
                animation: chickJump 620ms cubic-bezier(0.22, 1, 0.36, 1)
                  both;
              }

              .runner-leg {
                position: absolute;
                bottom: -0.8rem;
                height: 1rem;
                width: 0.18rem;
                border-radius: 999px;
                background: #f59e2e;
                transform-origin: top;
              }

              .runner-leg-one {
                left: 1rem;
                animation: legRunOne 420ms ease-in-out infinite;
              }

              .runner-leg-two {
                left: 2rem;
                animation: legRunTwo 420ms ease-in-out infinite;
              }

              .loader-cloud {
                position: absolute;
                top: 2rem;
                right: -7rem;
                height: 1rem;
                width: 4rem;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.16);
                filter: blur(0.2px);
              }

              .loader-cloud::before,
              .loader-cloud::after {
                content: "";
                position: absolute;
                bottom: 0;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.18);
              }

              .loader-cloud::before {
                left: 0.8rem;
                height: 1.5rem;
                width: 1.5rem;
              }

              .loader-cloud::after {
                left: 2rem;
                height: 1.9rem;
                width: 1.9rem;
              }

              .loader-cloud-one {
                animation: cloudMove 7s linear infinite;
              }

              .loader-cloud-two {
                top: 4rem;
                animation: cloudMove 10s linear infinite;
                animation-delay: 2s;
                opacity: 0.7;
              }

              .loader-star {
                position: absolute;
                top: 2.5rem;
                right: -1rem;
                height: 0.25rem;
                width: 0.25rem;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.8);
              }

              .loader-star-one {
                animation: starMove 4s linear infinite;
              }

              .loader-star-two {
                top: 5.5rem;
                animation: starMove 5.5s linear infinite;
                animation-delay: 1.2s;
              }

              @keyframes chickJump {
                0% {
                  transform: translateY(0) rotate(0deg);
                }
                38% {
                  transform: translateY(-58px) rotate(-4deg);
                }
                72% {
                  transform: translateY(-14px) rotate(3deg);
                }
                100% {
                  transform: translateY(0) rotate(0deg);
                }
              }

              @keyframes chickRun {
                0%,
                100% {
                  transform: translateY(0) rotate(-1deg);
                }
                50% {
                  transform: translateY(-3px) rotate(1deg);
                }
              }

              @keyframes legRunOne {
                0%,
                100% {
                  transform: rotate(18deg);
                }
                50% {
                  transform: rotate(-18deg);
                }
              }

              @keyframes legRunTwo {
                0%,
                100% {
                  transform: rotate(-18deg);
                }
                50% {
                  transform: rotate(18deg);
                }
              }

              @keyframes runnerObstacle {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-760px);
                }
              }

              @keyframes runnerFloor {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-88px);
                }
              }

              @keyframes cloudMove {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-760px);
                }
              }

              @keyframes starMove {
                0% {
                  transform: translateX(0);
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                }
                90% {
                  opacity: 1;
                }
                100% {
                  transform: translateX(-760px);
                  opacity: 0;
                }
              }
            `}</style>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}