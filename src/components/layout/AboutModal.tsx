"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { themeTokens } from "@/lib/theme-config";
import type { ThemeMode, AboutModalAction } from "@/types";
import type { AboutModalContent } from "@/types";

type AboutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
  content: AboutModalContent;
};

function getActionHref(action: AboutModalAction) {
  switch (action.type) {
    case "download":
    case "link":
      return action.href;
    case "email":
      return `mailto:${action.email}${
        action.subject ? `?subject=${encodeURIComponent(action.subject)}` : ""
      }`;
    default:
      return "#";
  }
}

function isExternalAction(action: AboutModalAction) {
  return action.type === "link" && !!action.external;
}

export default function AboutModal({
  isOpen,
  onClose,
  themeMode,
  content,
}: AboutModalProps) {
  const theme = themeTokens[themeMode];

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className={cn(
            /**
             * OVERLAY
             * --------------------------------------------------
             * items-start on small screens prevents the modal from being
             * vertically centered and cut off.
             *
             * overflow-y-auto allows the full modal to scroll when needed.
             */
            "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 py-6 sm:p-4 md:items-center md:p-6",
            theme.modalOverlayClass
          )}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            className={cn(
              /**
               * MODAL SURFACE
               * --------------------------------------------------
               * max-h keeps the modal inside the viewport.
               * overflow-y-auto makes the modal content scrollable.
               *
               * md:max-h-[88vh] keeps it comfortable on tablet/laptop.
               */
              "relative w-full max-w-5xl overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-md sm:rounded-4xl",
              "max-h-[calc(100vh-3rem)] md:max-h-[88vh]",
              theme.modalSurfaceClass
            )}
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.985 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close about modal"
              className={cn(
                /**
                 * CLOSE BUTTON
                 * --------------------------------------------------
                 * sticky keeps the close button accessible while scrolling.
                 */
                "absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border text-2xl leading-none transition hover:scale-105 md:right-5 md:top-5 md:h-10 md:w-10",
                theme.modalCloseButtonClass
              )}
            >
              ×
            </button>

            {/**
             * SCROLLABLE CONTENT WRAPPER
             * --------------------------------------------------
             * The surface itself hides overflow for clean rounded corners.
             * This inner wrapper scrolls.
             */}
            <div className="max-h-[calc(100vh-3rem)] overflow-y-auto md:max-h-[88vh]">
              <div className="grid gap-0 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
                {/* Left rail */}
                <div
                  className={cn(
                    /**
                     * MOBILE LEFT RAIL
                     * --------------------------------------------------
                     * On small screens, this becomes a compact top section.
                     * The image is smaller so the modal doesn't waste height.
                     */
                    "flex flex-col rounded-t-3xl border-b p-4 sm:rounded-t-4xl sm:p-5",
                    "md:rounded-l-4xl md:rounded-tr-none md:border-b-0 md:border-r md:p-6 lg:p-8",
                    theme.modalLeftRailClass,
                    theme.modalLeftRailBorderClass
                  )}
                >
                  <div className="mx-auto w-full max-w-[180px] overflow-hidden rounded-[1.25rem] border border-white/60 shadow-lg sm:max-w-[220px] md:max-w-none md:rounded-[1.75rem]">
                    <Image
                      src={content.image.src}
                      alt={content.image.alt}
                      width={content.image.width}
                      height={content.image.height}
                      className="aspect-square w-full object-cover md:aspect-auto md:h-auto"
                      priority
                    />
                  </div>

                  <div className="mt-4 text-center md:mt-5 md:text-left">
                    <p
                      className={cn(
                        "text-xs font-medium uppercase tracking-[0.18em] md:text-sm",
                        theme.modalMetaLabelClass
                      )}
                    >
                      {content.metaLabel}
                    </p>

                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed md:text-base",
                        theme.modalMetaTextClass
                      )}
                    >
                      {content.location}
                    </p>
                  </div>
                </div>

                {/* Main content */}
                <div className="p-4 pt-5 sm:p-6 md:p-7 md:pr-9 lg:p-8 lg:pr-10">
                  <h2
                    className={cn(
                      "pr-12 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl",
                      theme.modalTitle
                    )}
                  >
                    {content.name}
                  </h2>

                  <p
                    className={cn(
                      "mt-2 text-base leading-snug sm:text-lg md:mt-3 md:text-2xl",
                      theme.modalSubheader
                    )}
                  >
                    {content.role}
                  </p>

                  <div className="mt-5 max-w-3xl space-y-4 md:mt-7 md:space-y-5 lg:mt-8">
                    {content.paragraphs.map((paragraph, index) => (
                      <p
                        key={`${index}-${paragraph.slice(0, 20)}`}
                        className={cn(
                          /**
                           * BODY TEXT
                           * --------------------------------------------------
                           * Smaller on mobile/tablet, larger on md+.
                           */
                          "text-sm leading-relaxed sm:text-base md:text-[1.15rem] md:leading-[1.65] lg:text-[1.25rem] lg:leading-[1.75]",
                          theme.modalBodyTextClass
                        )}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
                    {content.highlights.map((item) => (
                      <span
                        key={item.id}
                        className={cn(
                          "rounded-full px-3 py-1.5 text-xs leading-tight sm:text-sm md:px-4 md:py-2",
                          theme.modalTagClass
                        )}
                      >
                        {item.text}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10">
                    {content.actions.map((action) => {
                      const href = getActionHref(action);
                      const isExternal = isExternalAction(action);

                      return (
                        <a
                          key={action.id}
                          href={href}
                          download={
                            action.type === "download" ? true : undefined
                          }
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className={cn(
                            "rounded-xl px-4 py-3 text-center text-sm font-medium transition hover:-translate-y-0.5 md:px-5",
                            action.variant === "primary"
                              ? theme.modalPrimaryButtonClass
                              : theme.modalSecondaryButtonClass
                          )}
                        >
                          {action.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}