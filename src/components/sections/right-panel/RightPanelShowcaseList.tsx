import { portfolioContent } from "@/lib/content-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode } from "@/types";


type RightPanelShowcaseListProps = {
  mode: ViewMode;
  themeMode: ThemeMode;
};

export default function RightPanelShowcaseList({
  mode,
  themeMode,
}: RightPanelShowcaseListProps) {
  const content = portfolioContent.modes[mode];
  const theme = themeTokens[themeMode];

  return (
    <div className="w-full max-w-110">
      {content.rightPanelTitle ? (
        <h2 className={cn("mb-4 text-xl font-bold", theme.titleClass)}>
          {content.rightPanelTitle}
        </h2>
      ) : null}

      <div
        className={cn(
          "rounded-4xl p-4 shadow-sm",
          mode === "designer" && themeMode === "dark"
            ? "bg-[#06274b]/95"
            : "bg-white/25"
        )}
      >
        <div className="flex flex-col gap-4">
          {content.workItems?.map((item) => (
            <article
              key={item.id}
              className={cn(
                "grid grid-cols-[1fr_160px] gap-4 rounded-[1.75rem] border p-4 shadow-sm",
                theme.cardBgClass,
                theme.cardBorderClass
              )}
            >
              <div>
                <h3
                  className={cn(
                    "mb-2 text-[1.15rem] font-semibold",
                    themeMode === "dark" ? theme.accentSecondaryClass : theme.bodyStrongClass
                  )}
                >
                  {item.title}
                </h3>

                <p className={cn("text-lg leading-relaxed", theme.cardTextClass)}>
                  {item.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/40 bg-white/40">
                <div className="flex h-full min-h-24 items-center justify-center text-center text-sm text-slate-500">
                  image
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-5">
          <span className={cn("text-3xl", theme.accentTextClass)}>⌄</span>
        </div>
      </div>
    </div>
  );
}