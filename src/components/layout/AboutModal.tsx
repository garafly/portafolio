"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { themeTokens } from "@/lib/theme-config";
// import { aboutModalContent } from "@/lib/about-modal-content";
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
  // const content = aboutModalContent;

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
            "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6",
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
              "relative w-full max-w-5xl rounded-4xl border shadow-2xl backdrop-blur-md",
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
                "absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border text-2xl leading-none transition hover:scale-105",
                theme.modalCloseButtonClass
              )}
            >
              ×
            </button>

            <div className="grid gap-0 md:grid-cols-[260px_1fr]">
              <div
                className={cn(
                  "flex flex-col rounded-t-4xl border-b p-6 md:rounded-l-4xl md:rounded-tr-none md:border-b-0 md:border-r md:p-8",
                  theme.modalLeftRailClass,
                  theme.modalLeftRailBorderClass
                )}
              >
                <div className="overflow-hidden rounded-[1.75rem] border border-white/60 shadow-lg">
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    width={content.image.width}
                    height={content.image.height}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                <div className="mt-5">
                  <p
                    className={cn(
                      "text-sm font-medium uppercase tracking-[0.18em]",
                      theme.modalMetaLabelClass
                    )}
                  >
                    {content.metaLabel}
                  </p>

                  <p
                    className={cn(
                      "mt-2 text-base leading-relaxed",
                      theme.modalMetaTextClass
                    )}
                  >
                    {content.location}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 md:pr-10">
                <h2 className={cn("text-3xl font-bold md:text-5xl", theme.modalTitle)}>
                  {content.name}
                </h2>

                <p className={cn("mt-3 text-lg md:text-2xl", theme.modalSubheader)}>
                  {content.role}
                </p>

                <div className="mt-8 max-w-3xl space-y-5">
                  {content.paragraphs.map((paragraph, index) => (
                    <p
                      key={`${index}-${paragraph.slice(0, 20)}`}
                      className={cn(
                        "text-base leading-relaxed md:text-[1.35rem] md:leading-[1.8]",
                        theme.modalBodyTextClass
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {content.highlights.map((item) => (
                    <span
                      key={item.id}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm leading-tight",
                        theme.modalTagClass
                      )}
                    >
                      {item.text}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {content.actions.map((action) => {
                    const href = getActionHref(action);
                    const isExternal = isExternalAction(action);

                    return (
                      <a
                        key={action.id}
                        href={href}
                        download={action.type === "download" ? true : undefined}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className={cn(
                          "rounded-xl px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5",
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
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}