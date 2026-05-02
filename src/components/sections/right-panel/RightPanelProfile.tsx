import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode } from "@/types";
import type { ModeContent as ModeContentType } from "@/types/content-config";
import ConfigIcon from "@/components/ui/ConfigIcon";
import KeyboardLightsShowcase from "@/components/sections/right-panel/InteractiveKeyboard";

type RightPanelProfileProps = {
  content: ModeContentType;
  themeMode: ThemeMode;
};

export default function RightPanelProfile({
  content,
  themeMode,
}: RightPanelProfileProps) {
  const theme = themeTokens[themeMode];

  return (
    <div className="flex h-full flex-col items-center justify-start gap-7">
      <div
        className={cn(
          "flex h-85 w-full max-w-90 items-center justify-center rounded-4xl border p-6 shadow-sm backdrop-blur-sm",
          theme.displayBoxBgClass,
          theme.displayBoxBorderClass
        )}
      >
        <KeyboardLightsShowcase />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {content.pills?.map((pill) => (
          <div
            key={pill.id}
            className={cn(
              "rounded-[1.75rem] border px-5 py-4 text-center text-xl shadow-sm backdrop-blur-sm",
              theme.cardBgClass,
              theme.cardBorderClass,
              theme.cardTextClass
            )}
          >
            <div className="flex items-center justify-center gap-2">
              <span>{pill.text}</span>

              <ConfigIcon
                icon={pill.icon}
                fallbackSize={20}
                emojiClassName="text-xl"
                imageClassName="h-auto w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {content.rightPanelBottomText ? (
        <div
          className={cn(
            "w-full max-w-115 rounded-4xl border px-6 py-7 text-center text-xl leading-relaxed shadow-sm backdrop-blur-sm",
            theme.cardBgClass,
            theme.cardBorderClass,
            theme.cardTextClass
          )}
        >
          {content.rightPanelBottomText}
        </div>
      ) : null}
    </div>
  );
}