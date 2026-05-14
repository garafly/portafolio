import type { ThemeMode } from "@/types";
import type { ModeContent as ModeContentType } from "@/types/content-config";
import RightPanelProfile from "./right-panel/RightPanelProfile";
import RightPanelShowcaseList from "./right-panel/RightPanelShowcaseList";
import { div } from "framer-motion/client";

type RightPanelProps = {
  content: ModeContentType;
  themeMode: ThemeMode;
  setSelectedProjectId: (id: string) => void;
};

export default function RightPanel({
  content,
  themeMode,
  setSelectedProjectId,
}: RightPanelProps) {
  switch (content.rightPanelVariant) {
    case "showcaseList":
      return (
        <div className="w-full flex justify-center">
          <RightPanelShowcaseList
            content={content}
            themeMode={themeMode}
            setSelectedProjectId={setSelectedProjectId}
          />
        </div>

      );

    case "profile":
    default:
      return <RightPanelProfile content={content} themeMode={themeMode} />;
  }
}