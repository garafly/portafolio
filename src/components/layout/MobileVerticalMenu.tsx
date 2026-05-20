"use client";

import React from "react";
import { UserRound, Mail } from "lucide-react";
import { FaInstagram, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

import { verticalMenuItems } from "@/lib/navigation-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode, VerticalMenuItem } from "@/types";

type MobileVerticalMenuProps = {
  themeMode: ThemeMode;
  setMode: (mode: ViewMode) => void;
  onOpenAboutModal: () => void;
};

const lucideIconMap = {
  user: UserRound,
  mail: Mail,
} as const;

const reactIconsMap = {
  instagram: FaInstagram,
  threads: SiThreads,
  behance: FaBehance,
  linkedin: FaLinkedin,
  github: FaGithub,
} as const;

function getItemHref(
  item: Extract<VerticalMenuItem, { type: "external" | "email" }>
) {
  if (item.type === "external") {
    return item.href;
  }

  return `mailto:${item.email}${
    item.subject ? `?subject=${encodeURIComponent(item.subject)}` : ""
  }`;
}

function IconContent({
  item,
  className,
}: {
  item: VerticalMenuItem;
  className: string;
}) {
  if (item.iconKind === "text") return null;

  if (item.iconKind === "lucide") {
    const Icon = lucideIconMap[item.iconName as keyof typeof lucideIconMap];
    if (!Icon) return null;

    return React.createElement(Icon, {
      size: 24,
      strokeWidth: 1.8,
      className,
    });
  }

  const Icon = reactIconsMap[item.iconName as keyof typeof reactIconsMap];
  if (!Icon) return null;

  return React.createElement(Icon, {
    className: cn("h-5 w-5", className),
  });
}

export default function MobileVerticalMenu({
  themeMode,
  setMode,
  onOpenAboutModal,
}: MobileVerticalMenuProps) {
  const theme = themeTokens[themeMode];

  const baseItemClass = cn(
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
    "transition-transform duration-200 active:scale-95",
    "border border-white/10 bg-white/5 backdrop-blur-md",
    theme.logoClass
  );

  function handleAction(item: VerticalMenuItem) {
    if (item.type === "internal-mode") {
      setMode(item.mode);
      return;
    }

    if (item.type === "action" && item.action === "open-about-modal") {
      onOpenAboutModal();
    }
  }

  return (
    <div className="md:hidden">
      <div
        className={cn(
          "mx-auto flex w-full max-w-[370px] items-center justify-center gap-3 rounded-full px-3 py-2 mt-10",
          "border border-white/80 bg-white/10 shadow-sm backdrop-blur-md"
        )}
      >
        {verticalMenuItems.map((item) => {
          if (item.type === "external" || item.type === "email") {
            const href = getItemHref(item);
            const isExternal = item.type === "external";

            return (
              <a
                key={item.id}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={item.label}
                title={item.label}
                className={baseItemClass}
              >
                <IconContent item={item} className={theme.logoClass} />
              </a>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleAction(item)}
              aria-label={item.label}
              title={item.label}
              className={baseItemClass}
            >
              <IconContent item={item} className={theme.logoClass} />
            </button>
          );
        })}
      </div>
    </div>
  );
}