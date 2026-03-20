"use client";

import React from "react";
import { UserRound, Mail } from "lucide-react";
import { FaInstagram, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { verticalMenuItems } from "@/lib/navigation-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode, VerticalMenuItem } from "@/types";

type VerticalMenuProps = {
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
      size: 34,
      strokeWidth: 1.8,
      className,
    });
  }

  const Icon = reactIconsMap[item.iconName as keyof typeof reactIconsMap];
  if (!Icon) return null;

  return React.createElement(Icon, {
    className: cn("h-8 w-8", className),
  });
}

export default function VerticalMenu({
  themeMode,
  setMode,
  onOpenAboutModal,
}: VerticalMenuProps) {
  const theme = themeTokens[themeMode];

  const baseItemClass = cn(
    "flex h-11 w-11 items-center justify-center transition-transform duration-200 hover:scale-110",
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
    <div className="flex w-full flex-col items-center py-6">
      <div className="flex flex-col items-center gap-7">
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

      <div className={cn("mt-10 h-full w-px", theme.dividerClass)} />
    </div>
  );
}