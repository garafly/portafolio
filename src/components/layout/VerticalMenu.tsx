"use client";


import { UserRound, Handshake, Send } from "lucide-react";
import { FaInstagram, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode } from "@/types";
import { div } from "framer-motion/client";

type VerticalMenuProps = {
  themeMode: ThemeMode;
};

const menuItems = [
  { id: "about", icon: UserRound, label: "About", type: "lucide" },
  { id: "instagram", icon: FaInstagram, label: "Instagram", type: "react-icons" },
  { id: "threads", icon: SiThreads, label: "Threads", type: "react-icons" },
  { id: "behance", icon: FaBehance, label: "Behance", type: "react-icons" },
  { id: "linkedin", icon: FaLinkedin, label: "LinkedIn", type: "react-icons" },
  { id: "github", icon: FaGithub, label: "GitHub", type: "react-icons" },
  { id: "services", icon: Handshake, label: "Colaborations", type: "lucide" },
  { id: "contact", icon: Send, label: "Contact", type: "lucide" },
] as const;

export default function VerticalMenu({ themeMode }: VerticalMenuProps) {
  const theme = themeTokens[themeMode];

  return (
    <div className="flex w-full justify-around">
        <div className="flex flex-col items-center py-6">
        <div className="flex flex-col items-center gap-7">
            {menuItems.map((item) => {
            const Icon = item.icon;

            return (
                <button
                key={item.id}
                type="button"
                aria-label={item.label}
                title={item.label}
                className={cn(
                    "flex h-11 w-11 items-center justify-center transition-transform duration-200 hover:scale-110",
                    theme.logoClass
                )}
                >
                {item.type === "lucide" ? (
                    <Icon size={34} strokeWidth={1.8} className={theme.logoClass} />
                ) : (
                    <Icon className={cn("h-8 w-8", theme.logoClass)} />
                )}
                </button>
            );
            })}
        </div>
        </div>
        <div className={cn("mt-10 h-full w-px", theme.dividerClass)} />
    </div>
  );
}