import type { ThemeMode } from "@/types";
import type { ThemeTokens } from "@/types/content-config";

export const themeTokens: Record<ThemeMode, ThemeTokens> = {
  light: {
    mode: "light",
    pageBackgroundClass:
      "bg-[linear-gradient(to_right,_#dfe6f2_0%,_#e6e8ec_52%,_#eee7de_72%,_#f4ecdf_100%)]",
    navTextClass: "text-[#8f9fb4]",
    navActiveClass: "text-[#1266d4]",
    titleClass: "text-[#3d5a7d]",
    bodyClass: "text-[#425d7c]",
    bodyStrongClass: "text-[#32aafc]",
    cardBgClass: "bg-white/25",
    cardBorderClass: "border-white/40",
    cardTextClass: "text-[#095bac]",
    softTextClass: "text-[#88a0c0]",
    accentTextClass: "text-[#1266d4]",
    accentSecondaryClass: "text-[#f0aa4f]",
    showcaseOutlineClass: "border-[#4386db]",
    showcaseControlBgClass: "bg-white/60",
    panelBgClass: "bg-[#e7e7ea]/80",
    dividerClass: "bg-[#bfd0e9]",
    logoClass: "text-[#73a0d1]",
    footerTextClass: "text-[#213a5f]",
    toggleShellClass: "bg-[#8fb3df]",
    dotActiveClass: "bg-[#4b7fbe]",
    dotInactiveClass: "bg-[#9db0cb]",
    emphasis:"bg-[#4da0ff]"

  },
  dark: {
    mode: "dark",
    pageBackgroundClass:
      "bg-[linear-gradient(to_right,_#020912_0%,_#0f2340_30%,_#214575_58%,_#35619b_100%)]",
    navTextClass: "text-[#b4c3d8]",
    navActiveClass: "text-[#4da0ff]",
    titleClass: "text-[#4f96f0]",
    bodyClass: "text-[#f3f6fb]",
    bodyStrongClass: "text-[#ffffff]",
    cardBgClass: "bg-[#8f99ac]/75",
    cardBorderClass: "border-white/90",
    cardTextClass: "text-white",
    softTextClass: "text-[#d7e1f0]",
    accentTextClass: "text-[#4da0ff]",
    accentSecondaryClass: "text-[#ffc44d]",
    showcaseOutlineClass: "border-[#2f86ea]",
    showcaseControlBgClass: "bg-white/90",
    panelBgClass: "bg-[#06274b]/88",
    dividerClass: "bg-[#1f578f]",
    logoClass: "text-white",
    footerTextClass: "text-white",
    toggleShellClass: "bg-[#0b1f3a]",
    dotActiveClass: "bg-[#4da0ff]",
    dotInactiveClass: "bg-[#7b95b7]",
    emphasis:"bg-[#4da0ff]"
  },
};