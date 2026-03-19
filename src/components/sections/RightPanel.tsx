import { portfolioContent } from "@/lib/content-config";
import type { ThemeMode, ViewMode } from "@/types";
import RightPanelProfile from "./right-panel/RightPanelProfile";
import RightPanelShowcaseList from "./right-panel/RightPanelShowcaseList";

type RightPanelProps = {
  mode: ViewMode;
  themeMode: ThemeMode;
};

export default function RightPanel({ mode, themeMode }: RightPanelProps) {
  const content = portfolioContent.modes[mode];

  switch (content.rightPanelVariant) {
    case "showcaseList":
      return <RightPanelShowcaseList mode={mode} themeMode={themeMode} />;
    case "profile":
    default:
      return <RightPanelProfile mode={mode} themeMode={themeMode} />;
  }
}