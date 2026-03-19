import { portfolioContent } from "@/lib/content-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode } from "@/types";

type ShowcaseCanvasProps = {
  mode: ViewMode;
  themeMode: ThemeMode;
};

export default function ShowcaseCanvas({
  mode,
  themeMode,
}: ShowcaseCanvasProps) {
  const content = portfolioContent.modes[mode];
  const theme = themeTokens[themeMode];

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-90 w-full items-center justify-center rounded-4xl">
        <p className={cn("text-center text-2xl font-semibold", theme.softTextClass)}>
          {content.showcaseLabel}
        </p>
      </div>

      <div
        className={cn(
          "mt-2 h-30 w-full max-w-130 rounded-[999px] border-2",
          theme.showcaseOutlineClass
        )}
      />

      <div className="-mt-6 flex flex-col items-center gap-5">
        <div
          className={cn(
            "flex items-center justify-center rounded-full px-6 py-2 shadow-sm",
            theme.showcaseControlBgClass
          )}
        >
          <span className={cn("text-4xl", theme.accentTextClass)}>↔</span>
        </div>

        <div className="flex gap-3">
          <span className={cn("h-2.5 w-2.5 rounded-full", theme.dotActiveClass)} />
          <span className={cn("h-2.5 w-2.5 rounded-full", theme.dotInactiveClass)} />
          <span className={cn("h-2.5 w-2.5 rounded-full", theme.dotInactiveClass)} />
          <span className={cn("h-2.5 w-2.5 rounded-full", theme.dotInactiveClass)} />
        </div>
      </div>
    </div>
  );
}