import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ThemeTokens, ToolItem } from "@/types/content-config";

type ToolGridProps = {
  tools: ToolItem[];
  theme: ThemeTokens;
  showLabels?: boolean;
};

export default function ToolGrid({
  tools,
  theme,
  showLabels = true,
}: ToolGridProps) {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-2">
      {tools.map((tool) => (
        <div
          key={tool.id}
          className={cn(
            "flex items-center justify-center",
            showLabels ? "gap-3" : "min-h-13"
          )}
        >
          <Image
            src={tool.icon.src}
            alt={tool.icon.alt}
            width={tool.icon.width ?? 34}
            height={tool.icon.height ?? 34}
            className="h-auto w-auto object-contain"
          />

          {showLabels ? (
            <span
              className={cn(
                "text-sm leading-snug lg:text-base",
                theme.cardTextClass
              )}
            >
              {tool.label}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}